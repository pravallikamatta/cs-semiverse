import { useEffect } from "react";
import logo from "@/assets/logo.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gradient-soft animate-fade-in">
      <div className="relative">
        <img 
          src={logo} 
          alt="CS-semHUB Logo" 
          className="w-64 h-64 object-contain animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        />
        <div 
          className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ripple"
          style={{ animationDelay: '0.5s' }}
        />
        <div 
          className="absolute inset-0 rounded-full border-4 border-secondary/30 animate-ripple"
          style={{ animationDelay: '0.8s' }}
        />
      </div>
    </div>
  );
};

export default IntroAnimation;
