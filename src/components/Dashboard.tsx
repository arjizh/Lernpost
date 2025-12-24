import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { BONUS_CONTENT, PRICES, SEASON_SCHEDULE } from '../constants';

const Dashboard: React.FC<{ onUpgrade: (priceKey: keyof typeof PRICES) => void }> = ({ onUpgrade }) => {
  const nextSeason = useMemo(() => {
    const today = dayjs();
    const sorted = [...SEASON_SCHEDULE].sort((a, b) => dayjs(a.shipDate).valueOf() - dayjs(b.shipDate).valueOf());
    const upcoming = sorted.find(season => dayjs(season.shipDate).isAfter(today)) ?? sorted[0];
    const diff = dayjs(upcoming.shipDate).diff(today, 'day');
    return { ...upcoming, daysLeft: diff };
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-[#f8fafc] min-h-screen text-[#003876]">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f39200] mb-2">Deine nächste Sendung</p>
            <h2 className="text-3xl font-black">{nextSeason.season} Lernpost</h2>
            <p className="text-gray-500 mt-3">Geplantes Versanddatum: {dayjs(nextSeason.shipDate).format('DD.MM.YYYY')}</p>
          </div>
          <div className="bg-[#003876] text-white rounded-2xl px-8 py-6 text-center shadow-lg">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f39200]">Countdown</div>
            <div className="text-4xl font-black leading-tight">{nextSeason.daysLeft} Tage</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f39200]">Digitale Bonus-Inhalte</p>
              <h3 className="text-2xl font-black">PDF-Lösungen & Extras</h3>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Aktuelle Saison</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {BONUS_CONTENT.map(item => (
              <a key={item.label} href={item.href} className="border border-gray-100 rounded-2xl p-4 hover:border-[#f39200] transition-colors shadow-sm group">
                <div className="text-sm font-black group-hover:text-[#f39200]">{item.label}</div>
                <p className="text-xs text-gray-500 mt-1">PDF Download</p>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 space-y-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f39200]">Abo-Verwaltung</p>
            <h3 className="text-2xl font-black">Upgrade oder kündigen</h3>
            <p className="text-gray-500 mt-2">Verwalte dein Lernpost-Abo direkt hier. Preise in CHF.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(PRICES).map(([key, price]) => (
              <div key={key} className="border border-gray-100 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="text-xs font-black text-[#003876] uppercase tracking-[0.3em]">{price.type}</div>
                  <div className="text-3xl font-black text-[#003876] mt-2">CHF {(price.amount / 100).toFixed(0)}</div>
                </div>
                <button
                  onClick={() => onUpgrade(key as keyof typeof PRICES)}
                  className="mt-4 bg-[#003876] text-white rounded-xl py-3 text-xs font-black uppercase tracking-[0.3em] hover:bg-[#f39200] transition-colors"
                >
                  Wechseln
                </button>
              </div>
            ))}
          </div>
          <button className="text-[#f39200] text-xs font-black uppercase tracking-[0.3em] hover:underline">Abo kündigen</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
