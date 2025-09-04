import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";

const GyandeepHero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden" style={{marginTop: '0px'}}>
      {/* School Background Image with Beautiful Glow */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/759d8b35-7caa-44ea-a405-bbd7d9d07a26.png"
          alt="Gyandeep Public School Campus"
          className="w-full h-full object-cover object-center filter brightness-110 contrast-105 saturate-110"
          style={{
            filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
            boxShadow: 'inset 0 0 200px rgba(255, 255, 255, 0.1), 0 0 100px rgba(59, 130, 246, 0.3)',
          }}
        />
        {/* Elegant glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        {/* Sharp glow border */}
        <div className="absolute inset-0 border-4 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.3)]"></div>
      </div>

      {/* Minimal content overlay to let image shine */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            Gyandeep Public School
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
            Excellence in Education Since 1999
          </p>
        </div>
      </div>
    </section>
  );
};

export default GyandeepHero;
