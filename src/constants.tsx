export const STRATEGY_CONTENT = {
  copy: {
    hero: {
      kicker: 'Gymi-Vorbereitung 5./6. Klasse',
      headline: 'Lernpost',
      subline: 'Gymicards',
      explanation: 'Saisonale Lernkarten mit Mathe, Deutsch und Longevity. Schweizer Präzision, franklinischer Versand und Ärzte-Review.',
      ctaPrimary: 'Abo wählen',
      ctaSecondary: 'Mehr erfahren',
    },
    highlights: [
      { title: 'Swiss Made', description: 'Frankfurter Server, Schweizer Redaktion, schnelle Lieferung in die Strasse.' },
      { title: 'Aktuell & haptisch', description: 'Jede Saison neue Aufgaben mit News-Bezug – wie auf gymicards.ch.' },
      { title: 'Elternfreundlich', description: 'PDF-Lösungen, Bonus-Links und ein Kunden-Dashboard mit Login.' },
    ],
  },
  pricing: {
    options: [
      {
        label: 'Fokus',
        price: 'CHF 39.–',
        details: 'Eine Saison Lernpost mit Mathe, Deutsch und Longevity.',
        commitment: 'Saisonweise',
        highlight: false,
        badge: 'Flexibel',
      },
      {
        label: 'Champion',
        price: 'CHF 50.–',
        details: 'Alle vier Jahreszeiten im Jahresabo inkl. Bonus-Downloads.',
        commitment: 'Jahresabo',
        highlight: true,
        savings: 'Spare 10% gegenüber Einzelsaisons',
        badge: 'Beliebt',
      },
      {
        label: 'Upgrade',
        price: 'CHF 45.–',
        details: 'Add-on für bestehende Kund:innen mit Bonus-Karten.',
        commitment: 'Add-on',
        highlight: false,
        badge: 'Für Fans',
      },
    ],
  },
  founders: [
    { name: 'Arjun Thanabalasingam', role: 'Co-Founder', bio: 'Mathe, Strategie und Gymi-Erfahrung.' },
    { name: 'Vincent Grandjean', role: 'Co-Founder', bio: 'Longevity, Sprache und Storytelling.' },
  ],
  story: 'Gymicards Lernpost verbindet die Kraft von Aktualität mit haptischen Karten. Jede Saison kuratieren wir News, Mathe und Medizin – geprüft von Schweizer Fachärzt:innen.',
};

export const BLOG_POSTS = [
  {
    title: 'So bereitest du dich mit Lernpost auf die Gymiprüfung vor',
    tag: 'Blog',
    summary: 'Tipps aus der Redaktion: Wiederholungspläne, Prüfungs-Simulationen und Bonus-Downloads.',
  },
  {
    title: 'Longevity für Kids: Warum Prävention schon in der 5. Klasse wichtig ist',
    tag: 'Longevity',
    summary: 'Wie wir Medizin und Bewegung spielerisch mit Mathe & Deutsch verbinden.',
  },
];

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
