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
      name: "CSQL", 
      url: "/CSQL", 
      icon: "🎯", 
      description: "Refer to this tile for GameCards for CSQLs." 
    },
    { 
      name: "Notebook", 
      url: "https://notebooklm.google.com/", 
      icon: "📓", 
      description: "AI-powered deep research assistant for internal documents & slack threads." 
    },
    { 
      name: "Letter AI", 
      url: "https://app.letter.ai", 
      icon: "/Letter_AI.png", 
      description: "Internal playbooks, sales content, and talk-tracks." 
    },
    { name: "Salesforce", url: "https://clio.lightning.force.com/", icon: "/salesforce .png", description: "Case volume and account management." },
    { 
      name: "Slack", 
      url: "/Slack", 
      icon: "/Slack.png", 
      description: "Real-time team communication and technical swarming." 
    },
    { 
      name: "Help Center", 
      url: "https://help.clio.com", 
      icon: "❓", 
      description: "Official Clio Knowledge Base for public product features." 
    }, 
    { name: "Linear", url: "https://linear.app/clio", icon: "/Linear.png", description: "Bug tracking and engineering sprints." }
  ];

  return (
    <main className={`min-h-screen py-10 px-6 transition-colors duration-500 antialiased ${
      darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-[1600px] mx-auto">
        
        {/* Fancy Header & Theme Toggle */}
        <div className="flex justify-between items-center mb-16">
          <h1 className={`text-4xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            SUPPORT<span className="text-blue-600">OKTA</span>
          </h1>
          <button 
            onClick={toggleTheme} 
            className={`px-5 py-2.5 rounded-2xl border-2 font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
              darkMode ? 'bg-slate-800 border-slate-700 text-blue-400 shadow-lg shadow-blue-500/10' : 'bg-white border-slate-200 text-slate-600 shadow-md'
            }`}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Updated Grid: Forces 5 per row on desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {apps.map((app) => (
            <a 
              key={app.name} 
              href={app.url} 
              target={app.url.startsWith('http') ? "_blank" : "_self"} 
              className={`group relative flex flex-col items-center p-8 border-2 rounded-[2.5rem] transition-all duration-300 text-center min-h-[380px] hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 shadow-2xl shadow-black/20' 
                  : 'bg-white border-slate-100 hover:border-blue-500 shadow-xl shadow-slate-200/60'
              }`}
            >
              {/* Icon Container with subtle glow on hover */}
              <div className="flex items-center justify-center w-24 h-24 mb-8 relative transition-transform duration-500 group-hover:scale-110">
                <div className={`absolute inset-0 blur-2xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                {app.icon.startsWith('/') ? (
                  <img src={app.icon} alt={app.name} className="max-h-full max-w-full object-contain relative z-10" />
                ) : (
                  <span className="text-6xl relative z-10 drop-shadow-sm">{app.icon}</span>
                )}
              </div>
              
              <div className="flex flex-col flex-grow">
                <h2 className={`text-xl font-black mb-3 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {app.name}
                </h2>
                <p className={`text-[12px] leading-relaxed font-medium px-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {app.description}
                </p>
              </div>
              
              {/* Refined Action Button */}
              <div className={`mt-8 w-full py-3 text-[10px] font-black uppercase tracking-[0.15em] border-2 rounded-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-blue-600 border-blue-600 text-white group-hover:bg-blue-500 group-hover:border-blue-500 shadow-lg shadow-blue-900/40' 
                  : 'bg-slate-900 border-slate-900 text-white group-hover:bg-blue-600 group-hover:border-blue-600 shadow-lg'
              }`}>
                {app.url.startsWith('/') ? "View Guide" : "Launch"}
              </div>
            </a>
          ))}
        </div>

        {/* Subtle Footer Decor */}
        <footer className="mt-20 text-center opacity-20 pointer-events-none">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase">Clio CS Excellence // Internal Ops</p>
        </footer>
      </div>
    </main>
  );
}