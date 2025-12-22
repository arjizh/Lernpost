import React from 'react';
import { STRATEGY_CONTENT } from '../constants';

const StrategyDisplay: React.FC = () => {
  const { copy, pricing, founders, story } = STRATEGY_CONTENT;

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#f39200]/10">
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-24 pb-32 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-3 mb-12">
                <span className="bg-[#003876] text-white px-2.5 py-1 text-[10px] font-black rounded uppercase tracking-widest">Swiss Made</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">By Thanabalasingam & Grandjean</span>
              </div>
              <h1 className="text-[6rem] md:text-[11rem] font-black text-[#003876] leading-[0.75] tracking-tighter uppercase mb-10">
                {copy.hero.headline}
              </h1>
              <div className="text-3xl font-black text-[#f39200] uppercase tracking-[0.2em] italic mb-12">
                {copy.hero.subline}
              </div>
              <p className="text-2xl text-gray-500 font-medium leading-tight mb-16 max-w-2xl">
                {copy.hero.explanation}
              </p>
              <div className="flex flex-wrap gap-8">
                <button className="bg-[#003876] text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-[#f39200] transition-all transform hover:-translate-y-1">
                  Abo wählen
                </button>
                <a href="#about" className="flex flex-col justify-center group cursor-pointer">
                  <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1 italic">Mehr erfahren</span>
                  <span className="text-sm font-bold text-[#003876] uppercase tracking-wider group-hover:text-[#f39200] transition-colors">Über Uns & Geschichte</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Über Uns & Geschichte */}
      <section id="about" className="py-40 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <h2 className="text-5xl font-black text-[#003876] uppercase tracking-tighter leading-none mb-12">
                Die Köpfe hinter <br/><span className="text-[#f39200]">Gymicards</span>.
              </h2>
              <div className="space-y-12 mb-16">
                {founders.map((founder, i) => (
                  <div key={i} className="flex gap-8 items-start">
                    <div className="w-20 h-20 bg-[#003876] rounded-2xl shrink-0 flex items-center justify-center text-white font-black text-2xl italic">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#003876] uppercase tracking-tight">{founder.name}</h4>
                      <p className="text-[#f39200] text-[10px] font-black uppercase tracking-widest mb-2">{founder.role}</p>
                      <p className="text-gray-500 font-medium leading-relaxed">{founder.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[4rem] p-16 shadow-2xl relative border border-gray-100">
              <div className="text-[10px] font-black text-[#f39200] uppercase tracking-[0.4em] mb-10">Unsere Geschichte</div>
              <p className="text-2xl text-[#003876] font-medium leading-snug italic mb-10">
                "{story}"
              </p>
              <div className="flex items-center space-x-6 pt-10 border-t border-gray-50">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center text-[10px] font-black">DR</div>
                  <div className="w-12 h-12 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center text-[10px] font-black">DR</div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Geprüft von Schweizer Fachärzten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Concept: News & Medicine */}
      <section id="concept" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-6xl font-black text-[#003876] uppercase tracking-tighter italic">Integriertes Lernen.</h2>
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.4em] mt-4">Mathe & Deutsch treffen auf Longevity</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-16 rounded-[3.5rem] border border-gray-100 group hover:border-[#f39200] transition-all">
              <div className="text-[#f39200] text-6xl font-black mb-8">100</div>
              <h3 className="text-3xl font-black text-[#003876] uppercase mb-6 tracking-tight">Mathe & News</h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Wir nutzen aktuelle Daten aus dem Weltgeschehen (Wirtschaft, Klima, News), um mathematische Konzepte der 5./6. Klasse zu vertiefen. Haptisch, aktuell, relevant.
              </p>
            </div>
            <div className="bg-[#003876] p-16 rounded-[3.5rem] text-white shadow-2xl transform lg:translate-y-12">
              <div className="text-[#f39200] text-6xl font-black mb-8">100</div>
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Deutsch & Medizin</h3>
              <p className="text-white/70 text-lg font-medium leading-relaxed">
                Leseverständnis und Sprachgefühl werden durch Texte über Prävention und Körperwissen gestärkt. Von unseren Ärzten kuratiert für eine gesunde Zukunft (Longevity).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-[#003876] uppercase tracking-tighter">Das Abo-System.</h2>
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] mt-2">Präzision für ein ganzes Schuljahr</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.options.map((opt, i) => (
              <div key={i} className={`bg-white p-12 rounded-[3.5rem] shadow-xl flex flex-col transition-all hover:scale-105 ${opt.highlight ? 'ring-4 ring-[#f39200]' : ''}`}>
                <div className="text-center mb-10">
                  <span className="text-[10px] font-black text-[#f39200] uppercase tracking-widest mb-4 block">{opt.commitment}</span>
                  <h3 className="text-2xl font-black text-[#003876] uppercase">{opt.label}</h3>
                </div>
                <div className="text-center mb-10">
                  <span className="text-7xl font-black text-[#003876]">{opt.price.split(' ')[0]}</span>
                  <span className="text-xl font-bold text-gray-200 ml-2 italic">CHF</span>
                  {opt.savings && <div className="text-[10px] font-black text-green-500 uppercase mt-4">{opt.savings}</div>}
                </div>
                <p className="text-sm text-center text-gray-400 font-medium mb-12 flex-grow">{opt.details}</p>
                <button className={`w-full py-6 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${opt.highlight ? 'bg-[#003876] text-white hover:bg-[#f39200]' : 'bg-gray-50 text-[#003876] hover:bg-gray-100'}`}>
                  Starten
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategyDisplay;
