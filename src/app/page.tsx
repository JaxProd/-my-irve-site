"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import cities from '@/data/seo_cities.json';

export default function Home()
{
  const [query, setQuery] = useState("");
  const router = useRouter();

  // On filtre les 5 premières villes correspondant à la saisie
  const filteredCities = query.length > 1 
    ? (cities as any[]).filter(c => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  const handleSelect = (slug: string) => 
  {
    router.push(`/${slug}`);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      {/* NAVBAR */}
      <nav className="p-6 flex justify-between items-center absolute w-full z-50">
        <div className="font-black text-xl tracking-tighter text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400">electric_car</span>
            MaBorne<span className="text-cyan-400">Recharge</span>
        </div>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="/devenir-partenaire" className="hover:text-cyan-400 transition-colors">Installateurs</a>
            <a href="/admin" className="text-cyan-400">Espace Admin</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-blue-600/10 blur-[100px] rounded-full translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-cyan-500"></span>
                <span className="text-cyan-500 text-xs font-bold uppercase tracking-[0.4em]">Expertise Bornes 2026</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-or-bleu">
              La Ruée vers<br /> l'<span className="text-cyan-400">Or Bleu</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
              Connectez-vous aux meilleurs installateurs de bornes de recharge privées. <span className="text-white">7 millions de bornes</span> à installer d'ici 2030. Trouvez votre expert local maintenant.
            </p>

            {/* SEARCH BAR BOX */}
            <div className="relative max-w-xl">
              <div className="flex bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden focus-within:border-cyan-500/50 transition-all p-2 shadow-2xl border-glow">
                <span className="material-symbols-outlined self-center ml-4 text-cyan-500">search</span>
                <input 
                  type="text"
                  placeholder="Rechercher une ville (ex: Nantes, Lyon...)"
                  className="w-full bg-transparent p-4 outline-none text-lg placeholder:text-slate-600"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              {/* SUGGESTIONS LIST */}
              {filteredCities.length > 0 && 
              (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl backdrop-blur-2xl">
                  {filteredCities.map((city) => 
                  (
                    <button 
                      key={city.id}
                      onClick={() => handleSelect(city.slug)}
                      className="w-full text-left p-4 hover:bg-cyan-600 transition-colors border-b border-white/5 last:border-0 flex justify-between group"
                    >
                      <span className="font-bold flex items-center gap-2">
                        {city.name} <span className="text-[10px] text-slate-500 font-normal">({city.zip})</span>
                      </span>
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 uppercase tracking-widest transition-all">Sélect</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                    src="/irve_hero_car_luxury.png" 
                    alt="Futuristic EV Charging" 
                    className="w-full h-auto scale-105 hover:scale-100 transition-transform duration-1000"
                />
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-10 -left-10 z-20 glass p-6 rounded-3xl border-glow max-w-xs transition-transform hover:-translate-y-2 duration-500">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Direct Live</span>
                </div>
                <p className="text-sm font-bold text-white mb-1">+24 Demandes de devis</p>
                <p className="text-[10px] text-slate-500 italic">Dernières 24h sur MaBorneRecharge.fr</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS (MAILLAGE) */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
         <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.3em]">Villes à fort potentiel</h2>
            <div className="h-[1px] flex-1 bg-white/5"></div>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            { (cities as any[])
              .sort((a, b) => 
              {
                const scoreA = a.population / (a.bornes + 1);
                const scoreB = b.population / (b.bornes + 1);
                return scoreB - scoreA;
              })
              .slice(0, 8)
              .map(city => 
              (
                <a 
                  key={city.id} 
                  href={`/${city.slug}`} 
                  className="p-8 glass rounded-[2rem] text-center hover:border-cyan-500/50 transition-all flex flex-col gap-3 group border-glow"
                >
                  <span className="font-black text-lg group-hover:text-cyan-400 transition-colors tracking-tight">{city.name}</span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500 group-hover:text-slate-300">Déficit de bornes</span>
                    <span className="text-xs text-cyan-400 font-bold tabular-nums">{city.bornes} stations</span>
                  </div>
                </a>
              ))}
         </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center text-[10px] text-slate-600 uppercase tracking-widest flex flex-col gap-4">
        <div>© 2026 MaBorneRecharge — Technologies pour la transition énergétique</div>
        <div className="flex justify-center gap-6">
            <a href="/mentions-legales" className="hover:text-cyan-400">Mentions Légales</a>
            <a href="/politique-confidentialite" className="hover:text-cyan-400">Confidentialité</a>
            <a href="/conditions-generales" className="hover:text-cyan-400">CGU</a>
        </div>
      </footer>
    </main>
  );
}