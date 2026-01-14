"use client";

export default function DevenirPartenaire()
{
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* NAVBAR */}
      <nav className="p-6 flex justify-between items-center absolute w-full z-50">
        <a href="/" className="font-black text-xl tracking-tighter text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400">electric_car</span>
            IRVE_<span className="text-cyan-400">PRO</span>
        </a>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="/" className="hover:text-white transition-colors">Accueil</a>
            <a href="/admin" className="text-cyan-400">Espace Admin</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-cyan-500"></span>
                <span className="text-cyan-500 text-xs font-bold uppercase tracking-[0.4em]">Espace Installateurs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter text-or-bleu">
              Développez votre activité <span className="text-cyan-400">IRVE</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
              Ne perdez plus 2h par jour au téléphone. Recevez des demandes de devis <span className="text-white font-bold">déjà qualifiées</span> dans votre secteur géographique.
            </p>

            <div className="flex flex-wrap gap-4">
                <a href="#onboarding" className="bg-white text-black font-black px-10 py-5 rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm">
                    Devenir Partenaire
                </a>
                <div className="flex items-center gap-2 px-6">
                    <span className="material-symbols-outlined text-cyan-400">verified</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Accès Certifié IRVE Uniquement</span>
                </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl scale-105">
                <img 
                    src="/pro_technician.jpg" 
                    alt="Technicien IRVE Expert" 
                    className="w-full h-auto"
                />
            </div>
          </div>
        </div>
      </section>

      {/* ARGUMENTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass p-10 rounded-[2.5rem] border-glow">
            <span className="material-symbols-outlined text-cyan-400 mb-6 text-4xl">trending_up</span>
            <h3 className="text-xl font-bold text-white mb-4 italic">L'Argument ROI</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
                Notre plateforme pSEO génère un flux constant de prospects. Concentrez-vous sur votre métier, nous gérons votre prospection.
            </p>
        </div>
        <div className="glass p-10 rounded-[2.5rem] border-glow">
            <span className="material-symbols-outlined text-cyan-400 mb-6 text-4xl">payments</span>
            <h3 className="text-xl font-bold text-white mb-4 italic">Zéro Risque</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
                Pas d'abonnement. Pas de frais d'inscription. Vous ne payez qu'au lead reçu ou après votre essai gratuit.
            </p>
        </div>
        <div className="glass p-10 rounded-[2.5rem] border-cyan-500/20 bg-cyan-500/5 border-glow">
            <span className="material-symbols-outlined text-cyan-400 mb-6 text-4xl">lightbulb</span>
            <h3 className="text-xl font-bold text-white mb-4 italic">2 Leads Gratuits</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
                Le "Hook" : Nous vous offrons vos 2 premiers clients pour vous prouver la qualité de nos données. Sans engagement.
            </p>
        </div>
      </section>

      {/* ONBOARDING FLUX */}
      <section id="onboarding" className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl font-black text-white italic mb-4">Votre Flux d'Activation</h2>
                <p className="text-slate-500 uppercase text-[10px] tracking-[0.3em] font-bold">4 étapes pour commencer à poser</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { step: "1", title: "Inscription Flash", desc: "Formulaire 30 secondes : Nom, SIRET, Départements." },
                    { step: "2", title: "Vérification IRVE", desc: "Contrôle Qualifelec/AFNOR pour garantir le sérieux." },
                    { step: "3", title: "Test Gratuit", desc: "On vous envoie 2 leads sans frais pour tester." },
                    { step: "4", title: "Billing Actif", desc: "Paiement à l'unité via Stripe pour la suite." }
                ].map((item, idx) => (
                    <div key={idx} className="relative p-8 glass rounded-3xl border-white/5 group hover:border-cyan-500/30 transition-all">
                        <div className="text-4xl font-black text-slate-800 mb-4 group-hover:text-cyan-900 transition-colors">{item.step}</div>
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* CTA FORM SIMULATION */}
            <div className="mt-20 max-w-xl mx-auto glass p-10 rounded-[3rem] border-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
                <h3 className="text-center text-white font-bold mb-8">Rejoindre le réseau IRVE_PRO</h3>
                <div className="space-y-4">
                    <input type="text" placeholder="Nom de l'entreprise" className="w-full bg-slate-900 border border-white/5 p-4 rounded-2xl outline-none focus:border-cyan-500/50" />
                    <input type="text" placeholder="Numéro SIRET" className="w-full bg-slate-900 border border-white/5 p-4 rounded-2xl outline-none focus:border-cyan-500/50" />
                    <input type="email" placeholder="Email professionnel" className="w-full bg-slate-900 border border-white/5 p-4 rounded-2xl outline-none focus:border-cyan-500/50" />
                    <button className="w-full bg-cyan-500 text-black font-black py-5 rounded-2xl mt-4 hover:shadow-cyan-500/20 shadow-xl transition-all uppercase tracking-widest text-xs">
                        Lancer mon essai gratuit
                    </button>
                    <p className="text-[9px] text-center text-slate-600 mt-4 italic">
                        En cliquant, vous certifiez être titulaire de la mention IRVE.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center text-[10px] text-slate-600 uppercase tracking-widest">
        © 2026 IRVE_PRO — Espace Partenaires Agréés
      </footer>
    </main>
  );
}
