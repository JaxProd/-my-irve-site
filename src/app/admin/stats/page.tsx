"use client";

import { useState, useMemo } from 'react';
import cities from '@/data/seo_cities.json';

type City = {
  id: string;
  name: string;
  zip: string;
  population: number;
  bornes: number;
  slug: string;
};

export default function AdminStats()
{
  const [sortConfig, setSortConfig] = useState<{ key: keyof City | 'score'; direction: 'asc' | 'desc' }>({
    key: 'score',
    direction: 'desc'
  });

  const [search, setSearch] = useState("");

  const data = useMemo(() => 
  {
    return (cities as any[]).map(c => ({
      ...c,
      score: Math.round(c.population / (c.bornes + 1))
    }));
  }, []);

  const sortedData = useMemo(() => 
  {
    let sortableItems = [...data];
    
    if (search)
    {
        sortableItems = sortableItems.filter(item => 
            item.name.toLowerCase().includes(search.toLowerCase()) || 
            item.zip.includes(search)
        );
    }

    sortableItems.sort((a, b) => 
    {
      if (a[sortConfig.key] < b[sortConfig.key]) 
      {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) 
      {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortableItems;
  }, [data, sortConfig, search]);

  const requestSort = (key: keyof City | 'score') => 
  {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') 
    {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-blue-500 mb-2">
              <span className="material-symbols-outlined text-sm text-blue-500">query_stats</span>
              <span className="text-xs font-bold uppercase tracking-widest">Analyse de Marché</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-2">Potentiel par Ville</h1>
            <p className="text-slate-500">Analyse du besoin en bornes sur {cities.length} villes.</p>
          </div>
          <div className="flex gap-4">
            <a href="/admin" className="bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl text-sm font-bold border border-white/10 transition-all">
                Vision Business
            </a>
            <div className="bg-slate-900 border border-white/10 rounded-xl p-2 flex items-center">
                <span className="material-symbols-outlined px-2 text-slate-500">search</span>
                <input 
                    type="text" 
                    placeholder="Filtrer ville ou CP..." 
                    className="bg-transparent outline-none p-2 text-sm w-64"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
          </div>
        </header>

        <div className="glass rounded-3xl overflow-hidden border-white/5 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <th className="p-6 cursor-pointer hover:text-white" onClick={() => requestSort('name')}>Ville</th>
                <th className="p-6 cursor-pointer hover:text-white" onClick={() => requestSort('zip')}>CP</th>
                <th className="p-6 cursor-pointer hover:text-white text-right" onClick={() => requestSort('population')}>Population</th>
                <th className="p-6 cursor-pointer hover:text-white text-right" onClick={() => requestSort('bornes')}>Bornes</th>
                <th className="p-6 cursor-pointer hover:text-white text-right text-blue-500" onClick={() => requestSort('score')}>Score Potentiel</th>
                <th className="p-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {sortedData.slice(0, 100).map((city) => (
                <tr key={city.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-6 font-bold text-white">{city.name}</td>
                  <td className="p-6 text-slate-500">{city.zip}</td>
                  <td className="p-6 text-right tabular-nums">{city.population.toLocaleString()}</td>
                  <td className="p-6 text-right tabular-nums">
                    <span className={city.bornes === 0 ? "text-red-500/50" : ""}>{city.bornes}</span>
                  </td>
                  <td className="p-6 text-right font-black text-blue-400 tabular-nums">
                    {city.score.toLocaleString()}
                  </td>
                  <td className="p-6 text-center">
                    <a 
                        href={`/${city.slug}`} 
                        target="_blank"
                        className="text-[10px] font-bold uppercase tracking-tighter bg-white/5 px-3 py-1 rounded-full group-hover:bg-blue-600 transition-all"
                    >
                        Voir
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="mt-6 text-center text-xs text-slate-600 italic">
            Affichage des 100 premiers résultats sur {sortedData.length}.
        </p>
      </div>
    </main>
  );
}
