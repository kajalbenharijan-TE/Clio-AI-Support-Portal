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
    { name: "Troubleshooting", url: "/troubleshooting", icon: "🛠️", description: "Step-by-step diagnostic guide and interactive T.E. consult builder." },
    { name: "Salesforce", url: "https://themis-solutions.lightning.force.com/lightning/o/Case/list?", icon: "/salesforce .png", description: "Customer case volume and account management." },
    { name: "Notebook", url: "https://notebooklm.google.com/", icon: "📓", description: "AI-powered research assistant for deep internal documentation." },
    { name: "Letter AI", url: "https://app.letter.ai/sso/clio", icon: "/Letter_AI.png", description: "Internal playbooks, sales content, and talk-track generation." },
    { name: "CSQL", url: "/CSQL", icon: "🎯", description: "Refer to this tile for CSQL Game Cards." },
    { name: "Slack", url: "https://clio.slack.com", icon: "/Slack.png", description: "Real-time team communication and technical swarming." },
    { name: "Help Center", url: "https://help.clio.com", icon: "❓", description: "Official Clio Knowledge Base for public product features." },
    { name: "Help Guide", url: "/guide", icon: "📚", description: "Quick-reference tiles for Accounting, Subs, and De-escalation SOPs." },
    { name: "Linear", url: "https://linear.app/clio/team/PLA/all", icon: "/Linear.png", description: "Bug tracking, feature requests, and engineering sprints." }
  ];

  return (
    <main className={`min-h-screen py-16 px-6 transition-all duration-700 ${
      darkMode 
        ? 'bg-[#0a0f1d] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0f1d] to-[#0a0f1d] text-slate-200' 
        : 'bg-[#f8fafc] text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex flex-col">
            <h1 className={`text-5xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Support<span className="text-blue-500 italic">OKTA</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mt-2 ml-1">Clio Technical Operations</p>
          </div>
          
          <button 
            onClick={toggleTheme} 
            className={`group relative px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border overflow-hidden transition-all ${
              darkMode ? 'bg-slate-800/50 border-slate-700 text-blue-400' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <span className="relative z-10">{darkMode ? '☀️ Switch to Day' : '🌙 Switch to Night'}</span>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-blue-400`}></div>
          </button>
        </div>
        
        {/* The Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {apps.map((app) => (
            <a 
              key={app.name} 
              href={app.url} 
              target={app.url.startsWith('http') ? "_blank" : "_self"} 
              className={`group relative flex flex-col items-center p-8 rounded-[2.5rem] transition-all duration-500 overflow-hidden border ${
                darkMode 
                  ? 'bg-slate-900/40 border-slate-800 hover:border-blue-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
                  : 'bg-white border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:shadow-blue-500/10'
              } hover:-translate-y-3`}
            >
              {/* Subtle Background Glow on Hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

              <div className="relative z-10 flex items-center justify-center w-24 h-24 mb-6 transition-transform duration-500 group-hover:scale-110">
                {app.icon.startsWith('/') ? (
                  <img src={app.icon} alt={app.name} className="max-h-full max-w-full object-contain filter drop-shadow-2xl" />
                ) : (
                  <span className="text-6xl drop-shadow-lg">{app.icon}</span>
                )}
              </div>
              
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-3 tracking-tight group-hover:text-blue-500 transition-colors">{app.name}</h2>
                <p className="text-[12px] leading-relaxed opacity-60 font-medium line-clamp-3 mb-6">
                  {app.description}
                </p>
              </div>
              
              <div className={`relative z-10 mt-auto w-full py-3 text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white' 
                  : 'bg-slate-50 text-slate-400 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white'
              }`}>
                {app.url.startsWith('/') ? "Enter Guide" : "Launch App"}
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-24 text-center">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-8"></div>
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] opacity-30">
            System Ready // Secure Connection Established
          </p>
        </footer>
      </div>
    </main>
  );
}