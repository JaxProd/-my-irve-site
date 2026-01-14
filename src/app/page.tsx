// La page d'accueil ne doit pas utiliser de params ou de generateStaticParams
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black mb-8 leading-tight">
          Installateur de bornes IRVE
        </h1>

        <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl">
          <p className="text-xl text-slate-400">
            Trouvez un expert qualifié pour l'installation de vos bornes de recharge partout en France.
          </p>
        </div>

        <button className="mt-12 bg-blue-600 hover:bg-blue-500 px-12 py-5 rounded-full font-bold text-xl transition-all shadow-lg shadow-blue-500/20">
          Demander une installation
        </button>
      </div>
    </main>
  );
}