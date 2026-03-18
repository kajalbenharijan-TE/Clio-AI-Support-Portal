"use client";
import { useState, useEffect } from 'react';

export default function SupportOKTA() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const apps = [
    { 
      name: "Troubleshooting", 
      url: "/troubleshooting", 
      icon: "🛠️", 
      description: "Step-by-step diagnostic guide and interactive T.E. consult builder." 
    },
    { 
      name: "Help Guide", 
      url: "/guide", 
      icon: "📚", 
      description: "Quick-reference tiles for Accounting, Subs, and De-escalation SOPs." 
    },
    { 
      name: "Notebook", 
      url: "https://notebooklm.google.com/", 
      icon: "📓", 
      description: "AI-powered research assistant for deep internal documentation." 
    },
    { 
      name: "Letter AI", 
      url: "https://app.letter.ai/sso/clio", 
      icon: "/Letter_AI.png", 
      description: "Internal playbooks, sales content, and talk-track generation." 
    },
    { 
      name: "Slack", 
      url: "https://clio.slack.com", 
      icon: "/Slack.png", 
      description: "Real-time team communication and technical swarming." 
    },
    { 
      name: "Help Center", 
      url: "https://help.clio.com", 
      icon: "❓", 
      description: "Official Clio Knowledge Base for public product features." 
    },
    { 
      name: "CSQL", 
      url: "/CSQL", 
      icon: "🎯", 
      description: "Refer to this tile for CSQL Game Cards." 
    }
  ];

  return (
    <main className={`min-h-screen py-12 px-4 transition-colors duration-500 ${darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-8">
          <button onClick={toggleTheme} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 text-blue-400' : 'bg-white border-slate-200 shadow-sm'}`}>
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
        
        <header className="mb-12 text-center">
          <h1 className={`text-4xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Support<span className="text-blue-500">OKTA</span>
          </h1>
        </header>

        {/* Responsive Grid adjusted for the new order */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
          {apps.map((app) => (
            <a 
              key={app.name} 
              href={app.url} 
              target={app.url.startsWith('http') ? "_blank" : "_self"} 
              className={`group flex flex-col items-center p-6 border rounded-2xl transition-all duration-200 text-center min-h-[340px] ${
                darkMode ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-sm'
              } hover:-translate-y-1`}
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 group-hover:scale-110 transition-transform">
                {app.icon.startsWith('/') ? (
                  <img src={app.icon} alt={app.name} className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="text-5xl">{app.icon}</span>
                )}
              </div>
              
              <h2 className="text-lg font-bold mb-2">{app.name}</h2>
              <p className="text-[11px] leading-relaxed opacity-80">{app.description}</p>
              
              <div className="mt-auto w-full py-2 text-[10px] font-bold uppercase border rounded-lg bg-blue-600 text-white">
                {app.url.startsWith('/') ? "View Guide" : "Launch"}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}