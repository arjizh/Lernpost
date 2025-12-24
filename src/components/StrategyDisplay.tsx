import React from 'react';
import { BLOG_POSTS, STRATEGY_CONTENT } from '../constants';

const StrategyDisplay: React.FC = () => {
  const { copy, pricing, founders, story } = STRATEGY_CONTENT;

  return (
    <div className="bg-white min-h-screen font-sans text-[#0f172a] selection:bg-[#f39200]/10">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8f0ff] via-white to-[#fff8ed]" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center space-x-3">
                <span className="bg-[#003876] text-white px-2.5 py-1 text-[10px] font-black rounded uppercase tracking-widest">
                  {copy.hero.kicker}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#f39200]">Swiss Made</span>
              </div>
              <h1 className="text-[5rem] md:text-[8rem] font-black text-[#003876] leading-[0.9] tracking-tighter uppercase">
                {copy.hero.headline}
              </h1>
              <div className="text-3xl font-black text-[#f39200] uppercase tracking-[0.25em] italic">
                {copy.hero.subline}
              </div>
              <p className="text-xl md:text-2xl text-gray-600 font-medium leading-tight max-w-2xl">
                {copy.hero.explanation}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#pricing"
                  className="bg-[#003876] text-white px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-[#f39200] transition-all transform hover:-translate-y-1"
                >
                  {copy.hero.ctaPrimary}
                </a>
                <a
                  href="#about"
                  className="flex flex-col justify-center group cursor-pointer"
                >
                  <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1 italic">{copy.hero.ctaSecondary}</span>
                  <span className="text-sm font-bold text-[#003876] uppercase tracking-wider group-hover:text-[#f39200] transition-colors">Über Uns & Geschichte</span>
                </a>
              </div>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                {copy.highlights.map(item => (
                  <div key={item.title} className="bg-white/60 backdrop-blur border border-gray-100 rounded-2xl p-4 shadow-sm">
                    <div className="text-xs font-black uppercase tracking-[0.3em] text-[#f39200]">{item.title}</div>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-xl p-8 space-y-6">
                <div className="text-[10px] font-black uppercase tracking-[0.35em] text-[#f39200]">Digital & Haptisch</div>
                <h3 className="text-2xl font-black text-[#003876] leading-tight">Mathe, Deutsch und Longevity im Saisonrhythmus.</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vier Jahreszeiten, vier Sendungen – immer mit PDF-Lösungen, Bonus-Links und Tracking deiner Lernpost.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Versand</div>
                    <div className="text-lg font-black text-[#003876]">Franklinisch & schnell</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Redaktion</div>
                    <div className="text-lg font-black text-[#003876]">Schweizer Fachärzt:innen</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 pt-2">
                  <div className="h-10 w-10 rounded-full bg-[#003876] text-white flex items-center justify-center text-xs font-black">GC</div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Gymicards Lernpost</p>
                    <p className="text-sm text-[#003876] font-black">Für Zürich, Bern & ganze Schweiz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Über Uns & Geschichte */}
      <section id="about" className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <h2 className="text-5xl font-black text-[#003876] uppercase tracking-tighter leading-none">
                Die Köpfe hinter <span className="text-[#f39200]">Gymicards</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Wir entwickeln Lernpost so, wie Eltern und Kinder es von gymicards.ch kennen: klar, minimalistisch, blau-orange.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {founders.map((founder, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-[#003876] rounded-xl flex items-center justify-center text-white font-black text-lg italic">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-[#003876]">{founder.name}</h4>
                        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#f39200]">{founder.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{founder.bio}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl relative border border-gray-100">
              <div className="text-[10px] font-black text-[#f39200] uppercase tracking-[0.4em] mb-6">Unsere Geschichte</div>
              <p className="text-xl text-[#003876] font-medium leading-snug italic mb-8">
                "{story}"
              </p>
              <div className="flex items-center space-x-6 pt-6 border-t border-gray-50">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 border-4 border-white flex items-center justify-center text-[10px] font-black">DR</div>
                  <div className="w-12 h-12 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center text-[10px] font-black">DR</div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Geprüft von Schweizer Fachärzt:innen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Concept: News & Medicine */}
      <section id="concept" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-[#003876] uppercase tracking-tighter italic">Integriertes Lernen</h2>
            <p className="text-sm font-black text-gray-400 uppercase tracking-[0.4em] mt-4">Mathe & Deutsch treffen auf Longevity</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-14 rounded-[2.5rem] border border-gray-100 group hover:border-[#f39200] transition-all shadow-sm">
              <div className="text-[#f39200] text-6xl font-black mb-6">Mathe</div>
              <h3 className="text-3xl font-black text-[#003876] uppercase mb-4 tracking-tight">News & Zahlen</h3>
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                Weltgeschehen (Wirtschaft, Klima, Trends) trifft auf Gymi-Aufgaben. Rechnen, verstehen, diskutieren.
              </p>
            </div>
            <div className="bg-[#003876] p-14 rounded-[2.5rem] text-white shadow-2xl transform lg:translate-y-6">
              <div className="text-[#f39200] text-6xl font-black mb-6">Deutsch</div>
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">Medizin & Sprache</h3>
              <p className="text-white/80 text-lg font-medium leading-relaxed">
                Prävention, Körperwissen und Longevity als Lesetexte. Sprachgefühl und Verständnis mit realen Themen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#003876] uppercase tracking-tighter">Die drei Abos</h2>
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] mt-2">Wie auf gymicards.ch – nur digital + Post</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.options.map((opt, i) => (
              <div
                key={i}
                className={`bg-white p-10 rounded-[2.5rem] shadow-xl flex flex-col border transition-all hover:-translate-y-1 ${
                  opt.highlight ? 'border-[#f39200] ring-2 ring-[#f39200]/30' : 'border-gray-100'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[10px] font-black text-[#f39200] uppercase tracking-widest">{opt.commitment}</div>
                  {opt.badge && (
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#003876] bg-[#e8f0ff] px-2 py-1 rounded-full">
                      {opt.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black text-[#003876] uppercase">{opt.label}</h3>
                <div className="text-5xl font-black text-[#003876] mt-4">
                  {opt.price.replace('CHF ', '')}
                  <span className="text-lg font-bold text-gray-300 ml-1 italic">CHF</span>
                </div>
                {opt.savings && <div className="text-[10px] font-black text-green-600 uppercase mt-2">{opt.savings}</div>}
                <p className="text-sm text-gray-500 font-medium mt-6 mb-10 flex-grow leading-relaxed">{opt.details}</p>
                <button
                  className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${
                    opt.highlight ? 'bg-[#003876] text-white hover:bg-[#f39200]' : 'bg-gray-50 text-[#003876] hover:bg-gray-100'
                  }`}
                >
                  Abo wählen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#f39200]">Blog</p>
              <h3 className="text-4xl font-black text-[#003876]">Aktuelles von gymicards.ch</h3>
            </div>
            <a href="#pricing" className="text-xs font-black uppercase tracking-[0.3em] text-[#003876] hover:text-[#f39200]">Alle Abos ansehen</a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.map(post => (
              <div key={post.title} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f39200]">{post.tag}</div>
                <h4 className="text-2xl font-black text-[#003876] mt-3">{post.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">{post.summary}</p>
                <button className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#003876] hover:text-[#f39200]">
                  weiterlesen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#003876] text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f39200]">Loslegen</p>
            <h3 className="text-3xl font-black">Jetzt Lernpost sichern – wie auf gymicards.ch, plus Login.</h3>
          </div>
          <a
            href="#pricing"
            className="bg-white text-[#003876] px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-[#f39200] hover:text-white transition-colors"
          >
            Zu den Abos
          </a>
        </div>
      </section>
    </div>
  );
};

export default StrategyDisplay;
