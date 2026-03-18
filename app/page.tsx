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
    { name: "Troubleshooting", url: "/troubleshooting", icon: "🛠️", description: "Diagnostic guide & T.E. builder." },
    { name: "Help Guide", url: "/guide", icon: "📚", description: "Accounting, Subs, and SOP tiles." },
    { name: "Notebook", url: "https://notebooklm.google.com/", icon: "📓", description: "AI research for internal docs." },
    { name: "Letter AI", url: "https://app.letter.ai/sso/clio", icon: "/Letter_AI.png", description: "Playbooks & talk-tracks." },
    { name: "Slack", url: "https://clio.slack.com", icon: "/Slack.png", description: "Team communication." },
    { name: "Help Center", url: "https://help.clio.com", icon: "❓", description: "Public Knowledge Base." },
    { name: "Salesforce", url: "https://clio.lightning.force.com/", icon: "☁️", description: "CRM and Case Management." },
    { name: "Linear", url: "https://linear.app/clio", icon: "📐", description: "Bug tracking and engineering." },
    { name: "CSQL", url: "/csql", icon: "🎯", description: "Clio CSQL Product Game Cards." }
  ];

  return (
    <main className={`min-h-screen py-8 px-6 transition-colors duration-500 ${
      darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex justify-between items-center mb-10">
          <h1 className={`text-3xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            SUPPORT<span className="text-blue-600">OKTA</span>
          </h1>
          <button onClick={toggleTheme} className={`p-2 px-4 rounded-xl border-2 font-bold text-xs transition-all ${
            darkMode ? 'bg-slate-800 border-slate-700 text-yellow-400' : 'bg-white border-slate-200 text-slate-600'
          }`}>
            {darkMode ? '☀️ LIGHT MODE' : '🌙 DARK MODE'}
          </button>
        </div>

        {/* 9-Tile Grid: Adjusted sizing to fit screen better */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-9 gap-4">
          {apps.map((app) => (
            <a 
              key={app.name} 
              href={app.url} 
              target={app.url.startsWith('http') ? "_blank" : "_self"} 
              className={`group flex flex-col items-center p-6 border-2 rounded-[2rem] transition-all duration-300 text-center min-h-[360px] justify-between ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700 hover:border-blue-500 hover:bg-slate-800 shadow-xl' 
                  : 'bg-white border-slate-100 hover:border-blue-500 shadow-lg shadow-slate-200/40'
              } hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex items-center justify-center w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  {app.icon.startsWith('/') ? (
                    <img src={app.icon} className="max-h-full max-w-full object-contain" alt="" />
                  ) : (
                    <span className="text-4xl drop-shadow-sm">{app.icon}</span>
                  )}
                </div>
                
                <h2 className={`text-lg font-black mb-3 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {app.name}
                </h2>
                <p className={`text-[11px] leading-relaxed font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {app.description}
                </p>
              </div>

              <div className={`mt-6 w-full py-3 text-[9px] font-black uppercase tracking-widest border-2 rounded-xl transition-all ${
                darkMode 
                  ? 'bg-blue-600 border-blue-600 text-white group-hover:bg-blue-500' 
                  : 'bg-slate-900 border-slate-900 text-white group-hover:bg-blue-600 group-hover:border-blue-600'
              }`}>
                {app.url.startsWith('/') ? "Open" : "Launch ↗"}
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-12 text-center opacity-20">
          <p className="text-[10px] font-bold tracking-[0.3em]">CLIO SUPPORT PORTAL // 9 ACTIVE MODULES</p>
        </footer>
      </div>
    </main>
  );
}