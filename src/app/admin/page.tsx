"use client";

import { useState } from 'react';

export default function AdminOverview()
{
  const [traffic, setTraffic] = useState(2500);
  const [convRate, setConvRate] = useState(2);
  const [leadPrice, setLeadPrice] = useState(40);

  const leads = Math.round((traffic * convRate) / 100);
  const revenue = leads * leadPrice;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 p-8">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <header className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-500 mb-2">
              <span className="material-symbols-outlined">electric_car</span>
              <span className="text-xs font-bold uppercase tracking-widest">Backoffice IRVE-PRO</span>
            </div>
            <h1 className="text-4xl font-black text-white italic tracking-tighter">EV_LEAD DATA</h1>
          </div>
          <nav className="flex gap-4">
            <a href="/admin/stats" className="bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl text-sm font-bold border border-white/10 transition-all">
              Analyser le Potentiel (Villes)
            </a>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* LA RUEE VERS L'OR BLEU */}
          <div className="lg:col-span-2 space-y-8">
            <section className="glass p-10 rounded-[3rem] border-white/10">
              <h2 className="text-3xl font-black text-white mb-6">La Ruée vers l'Or Bleu</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Le passage massif au véhicule électrique crée un besoin critique : <span className="text-white font-bold">7 millions de bornes privées</span> nécessaires en France d'ici 2030. Votre rôle est de connecter la demande aux installateurs IRVE qualifiés.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="text-cyan-500 font-black text-3xl mb-1">+37%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Croissance Annuelle (EV)</div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="text-cyan-500 font-black text-3xl mb-1">35€ - 65€</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Prix Lead Qualifié</div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="text-cyan-500 font-black text-3xl mb-1">Mois 4</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">ROI Estimé (Break-Even)</div>
                </div>
              </div>
            </section>

            {/* PREVISIONS FINANCIERES */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-8 rounded-[2rem] border-white/5">
                <div className="text-xs font-bold text-slate-500 uppercase mb-4">M1 - M3</div>
                <h3 className="text-lg font-bold text-white mb-2">Phase d'Indexation</h3>
                <p className="text-sm text-slate-500 mb-4">1500 pages villes, scraping pros locaux.</p>
                <div className="text-blue-400 font-black italic">0€ - 150€ / mo</div>
              </div>
              <div className="glass p-8 rounded-[2rem] border-cyan-500/20 bg-cyan-500/5">
                <div className="text-xs font-bold text-cyan-500 uppercase mb-4">M6 - M12</div>
                <h3 className="text-lg font-bold text-white mb-2">Maturité SEO</h3>
                <p className="text-sm text-slate-400 mb-4">Maillage automatisé, 10 leads/semaine.</p>
                <div className="text-cyan-400 font-black italic text-xl">1 200€ - 3 500€ / mo</div>
              </div>
              <div className="glass p-8 rounded-[2rem] border-white/5">
                <div className="text-xs font-bold text-slate-500 uppercase mb-4">2 ans +</div>
                <h3 className="text-lg font-bold text-white mb-2">Autorité Marché</h3>
                <p className="text-sm text-slate-500 mb-4">Partenariats nationaux, expansion UE.</p>
                <div className="text-blue-400 font-black italic">Actif: 100k€ - 250k€</div>
              </div>
            </section>
          </div>

          {/* SIMULATEUR DE LEADS */}
          <div className="space-y-8">
            <section className="glass p-8 rounded-[3rem] border-blue-500/30 bg-blue-500/5 sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-blue-500 text-sm">query_stats</span>
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Simulateur de Leads</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2">Trafic SEO Mensuel: {traffic.toLocaleString()}</label>
                  <input type="range" min="500" max="10000" step="100" value={traffic} onChange={(e) => setTraffic(Number(e.target.value))} className="w-full accent-cyan-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2">Taux Conv (%): {convRate}%</label>
                  <input type="range" min="0.5" max="5" step="0.1" value={convRate} onChange={(e) => setConvRate(Number(e.target.value))} className="w-full accent-cyan-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2">Prix par Lead: {leadPrice}€</label>
                  <input type="range" min="20" max="100" step="5" value={leadPrice} onChange={(e) => setLeadPrice(Number(e.target.value))} className="w-full accent-cyan-500" />
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm">Leads Qualifiés</span>
                    <span className="text-white font-bold">{leads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">Revenu Estimé</span>
                    <span className="text-2xl font-black text-cyan-500 italic">{revenue.toLocaleString()} €</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* ARCHITECTURE TECHNIQUE */}
            <section className="glass p-8 rounded-[2rem] border-white/5 text-[10px]">
                <h4 className="font-bold text-slate-500 uppercase mb-4 tracking-widest">Stack IRVE-Lead</h4>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-blue-500 text-sm">code</span>
                        <div><strong className="text-white block">Stack Next.js</strong> SSG pour les 5000+ pages villes.</div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-blue-500 text-sm">data_object</span>
                        <div><strong className="text-white block">API Scraping</strong> Python extraction Qualifelec.</div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-blue-500 text-sm">hub</span>
                        <div><strong className="text-white block">Lead Broker</strong> Vente Webhook partenaires.</div>
                    </li>
                </ul>
            </section>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="glass p-8 rounded-[2rem] border-white/5">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500">radio_button_unchecked</span>
                    Le Levier Politique (UE 2035)
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                    L'interdiction de vente des moteurs thermiques en 2035 force chaque foyer à s'équiper. C'est un marché à demande captive. Le crédit d'impôt de 500€ (ADVENIR) abaisse la barrière à l'achat.
                </p>
            </div>
            <div className="glass p-8 rounded-[2rem] border-white/5">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500">link</span>
                    Sources Stratégiques
                </h3>
                <div className="flex flex-col gap-2">
                    <a href="https://www.avere-france.org/" className="text-xs text-blue-400 hover:underline">Avere-France (Données Marché)</a>
                    <a href="https://advenir.mobi/" className="text-xs text-blue-400 hover:underline">Programme ADVENIR (Aides État)</a>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
