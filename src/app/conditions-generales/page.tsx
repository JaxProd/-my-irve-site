"use client";

export default function CGU()
{
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <a href="/" className="font-black text-xl tracking-tighter text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400">electric_car</span>
            MaBorne<span className="text-cyan-400">Recharge</span>
        </a>
      </nav>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-12 italic text-or-bleu text-center">Conditions Générales</h1>
        
        <div className="space-y-12">
          <div className="glass p-8 rounded-3xl border-glow">
            <h2 className="text-xl font-bold text-white mb-4">Objet du service</h2>
            <p className="text-slate-400 leading-relaxed">
              MaBorneRecharge fournit un service de génération de leads et de mise en relation. Nous ne facturons pas les particuliers. Pour les professionnels, le service est régi par les conditions de vente spécifiées lors de l'activation du billing.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-glow">
            <h2 className="text-xl font-bold text-white mb-4">Qualification IRVE Obligatoire</h2>
            <p className="text-slate-400 leading-relaxed">
              Il est strictement interdit d'installer une borne de recharge de puissance supérieure à 3.7 kW sans la certification IRVE. MaBorneRecharge décline toute responsabilité en cas de recours à un professionnel non qualifié. Nous vérifions systématiquement la validité des mentions IRVE (Qualifelec/AFNOR) de nos partenaires.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-glow">
            <h2 className="text-xl font-bold text-white mb-4">Aides d'État et Crédit d'Impôt</h2>
            <p className="text-slate-400 leading-relaxed">
              Sous réserve de respecter les conditions légales en vigueur, vous <strong className="text-white italic">pouvez être éligible</strong> à un crédit d'impôt d'un montant forfaitaire de 500€ ainsi qu'au programme de subvention ADVENIR. MaBorneRecharge ne garantit pas l'obtention de ces aides.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 text-center text-[10px] text-slate-600 uppercase tracking-widest flex flex-col gap-4">
        <div>MaBorneRecharge — 2026</div>
        <div className="flex justify-center gap-6">
            <a href="/mentions-legales" className="hover:text-cyan-400">Mentions Légales</a>
            <a href="/politique-confidentialite" className="hover:text-cyan-400">Confidentialité</a>
            <a href="/conditions-generales" className="hover:text-cyan-400">CGU</a>
        </div>
      </footer>
    </main>
  );
}
