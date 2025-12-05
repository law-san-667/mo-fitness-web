import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
      
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-16 max-w-5xl w-full">
        {/* Logo */}
        <div className="mb-12 animate-fade-in-up rounded bg-white/10 p-4 shadow-lg shadow-red-600/20">
          <Image
            src="/mofitness-logo.png"
            alt="Mo Fitness Logo"
            width={300}
            height={100}
            priority
            className="w-auto h-24 md:h-32 object-contain"
          />
        </div>

        {/* Main content */}
        <div className="text-center space-y-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
            COMING SOON
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-300 max-w-3xl mx-auto">
            Une nouvelle ère commence
          </p>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            La mentalité du loup. Le commencement, c'est maintenant. 
            Rejoins la meute et sois prêt à transformer ton corps et ton mental.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="w-full max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          <div className="bg-gradient-to-br from-red-600/20 to-red-900/20 backdrop-blur-sm border border-red-600/30 rounded-2xl p-6 shadow-xl shadow-red-600/10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
              🎁 Avantages Exclusifs Liste d'Attente
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <p className="text-zinc-200 text-lg">
                  <span className="font-bold text-red-500">15% de réduction</span> sur ta première commande
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <p className="text-zinc-200 text-lg">
                  <span className="font-bold text-red-500">20% de réduction</span> pour tout achat de plus de 50.000 CFA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <WaitlistForm />
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center text-zinc-500 text-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p>mofitnessofficial.com</p>
          <p className="mt-2">La transformation commence ici</p>
        </div>
      </main>
    </div>
  );
}
