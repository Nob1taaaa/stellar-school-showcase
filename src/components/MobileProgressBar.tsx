import { useState, useEffect } from "react";

const MobileProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(Math.min(scrolled * 100, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
      <div className="h-1 bg-white/20">
        <div
          className="h-full bg-gradient-rainbow transition-all duration-300 ease-out relative"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute right-0 top-0 w-4 h-4 -mt-1.5 bg-white rounded-full shadow-lg animate-bounce">
            <span className="absolute inset-0 flex items-center justify-center text-xs">
              ✨
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProgressBar;