"use client";
import { useState, useEffect } from 'react';

export default function SupportOKTA() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const apps = [
    { name: "Troubleshooting", url: "/troubleshooting", icon: "🛠️", description: "Diagnostic guide and T.E. builder." },
    { name: "Salesforce", url: "https://themis-solutions.lightning.force.com/lightning/o/Case/list?", icon: "/salesforce .png", description: "Case volume and account management." },
    { name: "Notebook", url: "https://notebooklm.google.com/", icon: "📓", description: "AI research assistant for deep docs." },
    { name: "Letter AI", url: "https://app.letter.ai/sso/clio", icon: "/Letter_AI.png", description: "Playbooks and talk-track generation." },
    { name: "CSQL", url: "/CSQL", icon: "🎯", description: "Clio CSQL Product Game Cards." },
    { name: "Slack", url: "https://clio.slack.com", icon: "/Slack.png", description: "Team communication and swarming." },
    { name: "Help Center", url: "https://help.clio.com", icon: "❓", description: "Official public Knowledge Base." },
    { name: "Help Guide", url: "/guide", icon: "📚", description: "Accounting, Subs, and SOP tiles." },
    { name: "Linear", url: "https://linear.app/clio/team/PLA/all", icon: "/Linear.png", description: "Bug tracking and engineering sprints." }
  ];

  return (
    <main className={`min-h-screen py-10 px-6 transition-all duration-700 ${
      darkMode ? 'bg-[#020617] text-slate-200' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black tracking-tighter italic">
            SUPPORT<span className="text-blue-500 not-italic">OKTA</span>
          </h1>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-md hover:border-blue-500 transition-all"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {apps.map((app) => (
            <a 
              key={app.name} 
              href={app.url} 
              target={app.url.startsWith('http') ? "_blank" : "_self"} 
              className={`group relative flex flex-col items-center p-5 rounded-[2rem] border transition-all duration-500 ${
                darkMode 
                  ? 'bg-slate-900/40 border-slate-800/50 hover:border-blue-500/50 hover:bg-slate-800/60 shadow-xl' 
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-blue-500/10'
              } hover:-translate-y-2`}
            >
              {/* Icon Section - Shrunk */}
              <div className="relative w-14 h-14 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                {app.icon.startsWith('/') ? (
                  <img src={app.icon} alt={app.name} className="max-h-full max-w-full object-contain filter drop-shadow-md" />
                ) : (
                  <span className="text-4xl">{app.icon}</span>
                )}
              </div>
              
              <h2 className="text-sm font-bold mb-1 tracking-tight group-hover:text-blue-400 transition-colors">
                {app.name}
              </h2>
              <p className="text-[10px] leading-tight opacity-50 mb-6 text-center px-2">
                {app.description}
              </p>
              
              {/* Fancy Button Design */}
              <div className="mt-auto w-full relative group/btn">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 group-hover/btn:opacity-40 transition duration-500"></div>
                <div className={`relative flex items-center justify-center gap-2 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  darkMode 
                    ? 'bg-slate-950 text-blue-400 border border-slate-800 group-hover/btn:text-white group-hover/btn:bg-blue-600' 
                    : 'bg-slate-100 text-slate-500 border border-slate-200 group-hover/btn:text-white group-hover/btn:bg-blue-600'
                }`}>
                  {app.url.startsWith('/') ? "Enter" : "Launch"}
                  <span className="text-[12px] group-hover/btn:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}