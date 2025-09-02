import { useState, useEffect } from "react";
import { Star, Heart, Sparkles } from "lucide-react";

const MobileCuteHeader = () => {
  const [currentEmoji, setCurrentEmoji] = useState("🌟");
  const emojis = ["🌟", "✨", "💫", "🎉", "🌈", "💖"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:hidden sticky top-0 z-50 bg-gradient-rainbow p-4 text-center backdrop-blur-lg border-b border-white/20">
      <div className="flex items-center justify-center space-x-2">
        <span className="text-2xl animate-bounce">{currentEmoji}</span>
        <h1 className="text-white font-bold text-lg mobile-shimmer">
          Welcome to Gyandeep!
        </h1>
        <span className="text-2xl animate-bounce animation-delay-200">✨</span>
      </div>
      
      <div className="mt-2 flex justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-3 h-3 text-yellow-300 animate-sparkle"
            fill="currentColor"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      
      <p className="text-xs text-white/90 mt-1 font-medium">
        Tap anywhere to explore our magical school! 🏫✨
      </p>
    </div>
  );
};

export default MobileCuteHeader;