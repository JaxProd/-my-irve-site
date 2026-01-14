"use client";

export default function Confidentialite()
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
        <h1 className="text-5xl font-black text-white mb-12 italic text-or-bleu text-center">Politique de Confidentialité</h1>
        
        <div className="space-y-12">
          <div className="glass p-8 rounded-3xl border-glow">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-500 text-sm">security</span>
                Traitement des Données
            </h2>
            <p className="text-slate-400 leading-relaxed">
              En tant que responsable de traitement, <strong>MaBorneRecharge</strong> collecte vos données personnelles (Email, Ville) uniquement dans le but de vous mettre en relation avec un expert local certifié IRVE.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-glow">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-500 text-sm">sync_alt</span>
                Transfert aux Tiers
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              <strong className="text-white italic">Point critique :</strong> Vos informations seront exclusivement transmises à notre partenaire certifié IRVE local pour l’établissement de votre devis gratuit. 
            </p>
            <p className="text-slate-500 text-sm italic border-l-2 border-cyan-500 pl-4">
              Ce transfert est nécessaire à l'exécution de votre demande de mise en relation. Nos partenaires sont tenus par contrat de respecter la confidentialité de vos données.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-glow">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-500 text-sm">timer</span>
                Durée de conservation
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Vos données sont conservées pendant une durée de 3 ans après votre dernier contact avec nous, ou jusqu'à ce que vous exerciez votre droit de suppression.
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
