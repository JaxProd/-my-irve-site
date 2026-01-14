"use client";

export default function MentionsLegales()
{
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* NAVBAR */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <a href="/" className="font-black text-xl tracking-tighter text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400">electric_car</span>
            MaBorne<span className="text-cyan-400">Recharge</span>
        </a>
      </nav>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-12 italic text-or-bleu text-center">Mentions Légales</h1>
        
        <div className="space-y-12">
          <div className="glass p-8 rounded-3xl border-glow">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-500 text-sm">person</span>
                Édition du site
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Le site <strong>MaBorneRecharge.fr</strong> est édité par :<br /><br />
              <strong>Sylvain CHURLET</strong><br />
              SIRET : 451 784 052 00040<br />
              Adresse : 304B rue Garibaldi, 69007 LYON<br />
              Email : contact@MaBorneRecharge.fr<br />
              Téléphone : 06 62 03 68 41<br />
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-glow">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-500 text-sm">hub</span>
                Hébergement
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Le site est hébergé par la société <strong>O2Switch</strong>.<br />
              Adresse : Chemin des Pardiaux, 63000 CLERMONT-FERRAND, France<br />
              Téléphone : +33 4 44 44 60 40
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border-glow text-xs text-slate-500 italic">
            <p>
              MaBorneRecharge agit en tant que plateforme de mise en relation entre des particuliers et des professionnels certifiés IRVE. Nous ne réalisons pas nous-mêmes les installations.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
