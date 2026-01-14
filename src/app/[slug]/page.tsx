import cities from '@/data/seo_cities.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() 
{
  return cities.map((city: any) => ({ slug: city.slug }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) 
{
  const { slug } = await params;
  const city = (cities as any[]).find((c) => c.slug === slug);
  if (!city) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* NAVBAR */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
        <a href="/" className="font-black text-xl tracking-tighter text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400">electric_car</span>
            MaBorne<span className="text-cyan-400">Recharge</span>
        </a>
        <button className="text-[10px] font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 px-6 py-3 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-all">
            Contact Expert
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-cyan-500 text-[10px] font-bold uppercase tracking-[0.2em]">Certification IRVE 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-8 text-or-bleu">
            {city.h1}
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Profitez du crédit d'impôt de <span className="text-cyan-400 font-bold">500€</span> et d'une installation conforme aux normes de sécurité à <span className="text-white font-bold">{city.name}</span>.
          </p>

          {/* BADGES / SOCIAL PROOF */}
          <div className="mt-16 flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center border-glow">
                <span className="material-symbols-outlined text-cyan-400 text-2xl">verified</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Agréé ADVENIR</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center border-glow">
                <span className="material-symbols-outlined text-cyan-400 text-2xl">distance</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">{city.bornes} Bornes à proximité</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center border-glow">
                <span className="material-symbols-outlined text-cyan-400 text-2xl">electric_car</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Compatible tout VE</span>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-xl mx-auto glass p-12 rounded-[3.5rem] border-white/10 shadow-3xl relative border-glow">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cyan-600 px-8 py-3 rounded-full text-[10px] font-black text-white shadow-xl shadow-cyan-600/20 uppercase tracking-widest">
            DEVIS GRATUIT EN 48H
          </div>
          
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Étude Personnalisée</h3>
            <p className="text-slate-500 text-sm">Recevez une proposition technique pour votre maison à {city.name}.</p>
          </div>
          
          <form 
            action="https://formspree.io/f/mzddblkk" 
            method="POST" 
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-3">Localisation</label>
              <input 
                name="ville" 
                value={city.name} 
                readOnly 
                className="w-full bg-slate-900 border border-white/5 p-5 rounded-[1.5rem] text-slate-400 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-3">Votre Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="nom@exemple.fr" 
                className="w-full bg-slate-800/50 border border-white/5 p-5 rounded-[1.5rem] text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-600" 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-white text-black font-black py-6 rounded-[1.5rem] mt-4 hover:scale-[1.02] active:scale-95 transition-all shadow-xl hover:shadow-white/10 uppercase tracking-widest cursor-pointer"
            >
              Lancer mon projet
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center text-[10px] text-slate-600 uppercase tracking-widest flex flex-col gap-4">
        <div>MaBorneRecharge — Expert local à {city.name}</div>
        <a href="/devenir-partenaire" className="text-slate-800 hover:text-cyan-800 transition-colors">VOUS ÊTES INSTALLATEUR À {city.name.toUpperCase()} ? REJOIGNEZ-NOUS</a>
      </footer>
    </main>
  );
}
