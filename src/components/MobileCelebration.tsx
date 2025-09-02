import { useState, useEffect } from "react";
import { Star, Heart, Sparkles } from "lucide-react";

const MobileCelebration = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; emoji: string; x: number; delay: number }>>([]);

  useEffect(() => {
    // Show celebration on first load for mobile users
    const timer = setTimeout(() => {
      if (window.innerWidth <= 768) {
        triggerCelebration();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const triggerCelebration = () => {
    setShowCelebration(true);
    
    const emojis = ['🌟', '✨', '💫', '🎉', '🌈', '💖', '🎊', '⭐', '💫', '🦄'];
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      delay: Math.random() * 1000,
    }));
    
    setParticles(newParticles);
    
    // Hide celebration after animation
    setTimeout(() => {
      setShowCelebration(false);
      setParticles([]);
    }, 3000);
  };

  if (!showCelebration) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none md:hidden overflow-hidden">
      {/* Celebration Background */}
      <div className="absolute inset-0 bg-gradient-rainbow opacity-20 animate-pulse" />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-2xl animate-bounce"
          style={{
            left: `${particle.x}%`,
            top: '100%',
            animationDelay: `${particle.delay}ms`,
            animation: `celebrate-float 3s ease-out forwards`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
      
      {/* Welcome Message */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-magical mx-4">
          <div className="text-3xl mb-2">🎉</div>
          <h2 className="text-xl font-bold text-purple-600 mb-2">
            Welcome to Gyandeep!
          </h2>
          <p className="text-sm text-gray-600">
            Your magical school journey starts here! ✨
          </p>
          <div className="flex justify-center space-x-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 animate-sparkle"
                fill="currentColor"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes celebrate-float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileCelebration;