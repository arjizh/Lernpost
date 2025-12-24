import { serve } from 'https://deno.land/std@0.192.0/http/server.ts';
import Stripe from 'npm:stripe@12.18.0';
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');

if (!stripeSecret || !supabaseUrl || !serviceRoleKey) {
  console.error('Missing environment variables for Stripe or Supabase.');
}

const stripe = new Stripe(stripeSecret ?? '', { apiVersion: '2023-10-16' });
const supabase = createClient(supabaseUrl ?? '', serviceRoleKey ?? '');

const PRICE_MAPPING: Record<string, { priceId: string; type: 'Champion' | 'Fokus' }> = {
  champion: { priceId: 'price_champion_chf', type: 'Champion' },
  fokus: { priceId: 'price_fokus_chf', type: 'Fokus' },
  upgrade: { priceId: 'price_upgrade_chf', type: 'Champion' },
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, stripe-signature',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { ...corsHeaders } });
  }

  if (req.method === 'POST' && req.headers.get('stripe-signature')) {
    const signature = req.headers.get('stripe-signature') as string;
    const body = await req.text();
    if (!webhookSecret) return new Response('Webhook secret missing', { status: 500, headers: corsHeaders });

    try {
      const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.client_reference_id;
        const priceKey = session.metadata?.priceKey;
        const mapping = priceKey ? PRICE_MAPPING[priceKey] : null;

        if (userId && mapping) {
          await supabase
            .from('subscriptions')
            .upsert({ user_id: userId, type: mapping.type, status: 'active', current_period_end: session.expires_at ? new Date(session.expires_at * 1000).toISOString() : null });
        }
      }
      return new Response(JSON.stringify({ received: true }), { headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Webhook validation failed', details: `${error}` }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }

  const { priceKey, userId } = await req.json();
  const mapping = PRICE_MAPPING[priceKey];
  if (!mapping || !userId) {
    return new Response(JSON.stringify({ error: 'Ungültige Anfrage' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: mapping.priceId, quantity: 1 }],
      client_reference_id: userId,
      success_url: `${new URL(req.url).origin}/dashboard?payment=success`,
      cancel_url: `${new URL(req.url).origin}/dashboard?payment=cancelled`,
      metadata: { priceKey },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Stripe Fehler', details: `${error}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
});
