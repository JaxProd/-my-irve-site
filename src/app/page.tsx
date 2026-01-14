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
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Installateur de bornes <span className="text-blue-500">IRVE</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12">
            Trouvez un expert qualifié pour l'installation de vos bornes de recharge partout en France.
          </p>

          {/* SEARCH BAR BOX */}
          <div className="relative max-w-xl mx-auto">
            <div className="flex bg-slate-900 border border-white/10 rounded-2xl overflow-hidden focus-within:border-blue-500 transition-all p-2 shadow-2xl">
              <span className="material-symbols-outlined self-center ml-4 text-slate-500">search</span>
              <input 
                type="text"
                placeholder="Entrez votre ville (ex: Nantes, Lyon...)"
                className="w-full bg-transparent p-4 outline-none text-lg"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* SUGGESTIONS LIST */}
            {filteredCities.length > 0 && 
            (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl">
                {filteredCities.map((city) => 
                (
                  <button 
                    key={city.id}
                    onClick={() => handleSelect(city.slug)}
                    className="w-full text-left p-4 hover:bg-blue-600 transition-colors border-b border-white/5 last:border-0 flex justify-between"
                  >
                    <span className="font-bold">{city.name} ({city.zip})</span>
                    <span className="text-xs opacity-50 uppercase">Voir l'expert</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* QUICK LINKS (MAILLAGE) */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
         <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Villes Populaires</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            { (cities as any[]).slice(0, 8).map(city => 
            (
              <a 
                key={city.id} 
                href={`/${city.slug}`} 
                className="p-4 glass rounded-xl text-center text-sm hover:border-blue-500 transition-all"
              >
                {city.name}
              </a>
            ))}
         </div>
      </section>
    </main>
  );
}