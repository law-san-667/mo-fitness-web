import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white overflow-hidden">
      {/* Background subtle effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFFAF5] to-white"></div>
      
      {/* D9D9D9 Overlays for visual interest */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D9D9D9]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFFAF5]/60 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-[#D9D9D9]/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#D9D9D9]/25 rounded-full blur-3xl"></div>
      
      {/* Geometric overlays */}
      <div className="absolute top-20 right-1/3 w-32 h-32 bg-[#D9D9D9]/10 rotate-45 blur-xl"></div>
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-[#D9D9D9]/15 rotate-12 blur-2xl"></div>
      
      {/* Subtle lines */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#D9D9D9]/30 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D9D9D9]/20 to-transparent"></div>
      
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-16 max-w-5xl w-full">
        {/* Logo - clean, no container */}
        <div className="mb-16 animate-fade-in-up">
          <Image
            src="/mofitness-logo.png"
            alt="Mo Fitness Logo"
            width={400}
            height={125}
            className="w-auto h-12 md:h-18 object-contain"
          />
        </div>

        {/* Main content */}
        <div className="text-center space-y-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-righteous tracking-tight text-black uppercase">
            Coming Soon
          </h1>
          
          <div className="h-0.5 w-24 bg-black mx-auto"></div>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-roboto font-light text-black max-w-3xl mx-auto leading-tight">
            Une nouvelle ère commence
          </p>
          
          <p className="text-base md:text-lg font-roboto-condensed text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Plus qu'une marque, une identité. Forgez votre physique, affirmez votre style.
          </p>
          
          <p className="text-xl md:text-2xl font-roboto font-medium text-black mt-6">
            L'élite arrive. Janvier 2026.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="w-full max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          <div className="bg-[#FFFAF5] p-8 md:p-10">
            <p className="text-lg md:text-xl font-roboto text-center text-gray-800 leading-relaxed">
              Rejoins la liste d'attente pour un <span className="font-semibold text-black">accès prioritaire</span> et des <span className="font-semibold text-black">avantages exclusifs</span>.
            </p>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <WaitlistForm />
        </div>

        {/* Additional info */}
        <div className="mt-20 text-center text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm font-roboto-condensed uppercase tracking-wider">mofitnessofficial.com</p>
          <p className="mt-3 text-base font-roboto font-medium text-black">C'est dans la tête</p>
        </div>
      </main>
    </div>
  );
}
