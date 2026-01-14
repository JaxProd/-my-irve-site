import cities from '@/data/seo_cities.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return cities.map((city: any) => ({ slug: city.slug }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = (cities as any[]).find((c) => c.slug === slug);
  if (!city) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* NAVBAR LIGHT */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center">
        <div className="font-black text-xl tracking-tighter text-white">⚡️ IRVE_<span className="text-blue-500">PRO</span></div>
        <button className="text-xs font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">Contact Expert</button>
      </nav>

      {/* HERO SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Certification IRVE 2026</span>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tight mb-8">
            {city.h1}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Profitez du crédit d'impôt de 500€ et d'une installation conforme aux normes de sécurité à <span className="text-white font-bold">{city.name}</span>.
          </p>

          {/* SOCIAL PROOF */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-500">verified</span>
              <span className="text-xs font-bold uppercase">Agréé ADVENIR</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-500">distance</span>
              <span className="text-xs font-bold uppercase">{city.bornes} Bornes à proximité</span>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION (L'argent est ici) */}
      <section className="pb-32 px-6">
        <div className="max-w-xl mx-auto glass p-10 rounded-[3rem] border-white/10 shadow-2xl relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 px-6 py-2 rounded-full text-xs font-bold text-white shadow-xl shadow-blue-600/20">
            DEVIS GRATUIT EN 48H
          </div>
          <p className="text-center text-slate-400 text-sm mb-8">Remplissez ce formulaire pour être recontacté par notre technicien à {city.name}.</p>
          
          <form 
            action="https://formspree.io/f/mzddblkk" 
            method="POST" 
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Ville concernée</label>
              <input 
                name="ville" 
                value={city.name} 
                readOnly 
                className="w-full bg-slate-900 border border-white/5 p-4 rounded-2xl text-slate-400" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-2">Votre Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="email@exemple.com" 
                className="w-full bg-slate-800 border border-white/5 p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-white text-black font-black py-5 rounded-2xl mt-4 hover:scale-[1.02] transition-transform"
            >
              DEMANDER MON ÉTUDE GRATUITE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}