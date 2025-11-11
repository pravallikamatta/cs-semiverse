import { useState, useEffect } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AIAssistant from "@/components/AIAssistant";
import { Outlet } from "react-router-dom";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen intro before
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("hasSeenIntro", "true");
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col gradient-soft">
      <Header onSearch={handleSearch} onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <AIAssistant />
    </div>
  );
};

export default Index;
