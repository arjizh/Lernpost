export const STRATEGY_CONTENT = {
  copy: {
    hero: {
      headline: 'Lernpost',
      subline: 'Gymicards',
      explanation: 'Saisonale Lernkarten für 5./6. Klasse. Präzise, aktuell, Schweizer Made.',
    },
  },
  pricing: {
    options: [
      { label: 'Fokus', price: '39 CHF', details: 'Eine Saison Lernpost.', commitment: 'Saisonweise', highlight: false },
      { label: 'Champion', price: '50 CHF', details: 'Alle vier Jahreszeiten im Paket.', commitment: 'Jahresabo', highlight: true, savings: 'Spare 10%' },
      { label: 'Upgrade', price: '45 CHF', details: 'Add-on für bestehende Kundinnen.', commitment: 'Flex', highlight: false },
    ],
  },
  founders: [
    { name: 'Thanabalasingam', role: 'Co-Founder', bio: 'Mathe & Strategin.' },
    { name: 'Grandjean', role: 'Co-Founder', bio: 'Longevity & Sprache.' },
  ],
  story: 'Gymicards Lernpost verbindet Mathe, Deutsch und Medizin mit Schweizer Präzision.',
};

export const BONUS_CONTENT = [
  { label: 'Herbst 2024 Lösungen', href: '/bonus/herbst-2024.pdf' },
  { label: 'Winter 2024 Lösungen', href: '/bonus/winter-2024.pdf' },
  { label: 'Frühling 2025 Lösungen', href: '/bonus/fruehling-2025.pdf' },
];

export const SEASON_SCHEDULE = [
  { season: 'Herbst', shipDate: '2024-09-01' },
  { season: 'Winter', shipDate: '2024-12-01' },
  { season: 'Frühling', shipDate: '2025-03-01' },
  { season: 'Sommer', shipDate: '2025-06-01' },
];

export const PRICES = {
  fokus: { type: 'Fokus', amount: 3900, priceId: 'price_fokus_chf' },
  champion: { type: 'Champion', amount: 5000, priceId: 'price_champion_chf' },
  upgrade: { type: 'Upgrade', amount: 4500, priceId: 'price_upgrade_chf' },
};
