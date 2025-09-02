import { useState } from "react";
import { Heart, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileFloatingButton = () => {
  const [clicked, setClicked] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = () => {
    setClicked(true);
    
    // Create floating hearts
    const newHearts = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    
    setHearts(prev => [...prev, ...newHearts]);
    
    // Remove hearts after animation
    setTimeout(() => {
      setHearts(prev => prev.filter(heart => !newHearts.some(nh => nh.id === heart.id)));
    }, 2000);
    
    // Reset clicked state
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button
          onClick={handleClick}
          className={`
            w-14 h-14 rounded-full magical-button mobile-tap-effect
            ${clicked ? 'scale-110' : 'scale-100'}
            transition-all duration-300 ease-out
          `}
          size="icon"
        >
          <div className="relative">
            <Heart className="w-6 h-6 text-white" fill="currentColor" />
            <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300" />
          </div>
        </Button>
      </div>

      {/* Floating Hearts Animation */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed bottom-20 right-8 z-40 pointer-events-none animate-bounce md:hidden"
          style={{
            left: `${heart.x}%`,
            animation: `float-up 2s ease-out forwards`,
          }}
        >
          <Heart className="w-4 h-4 text-pink-500" fill="currentColor" />
        </div>
      ))}

      <style>{`
        @keyframes float-up {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
          }
        }
      `}</style>
    </>
  );
};

export default MobileFloatingButton;