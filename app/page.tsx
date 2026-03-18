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
    { name: "Troubleshooting", url: "/troubleshooting", icon: "🛠️", description: "Diagnostic guide and T.E. builder." },
    { name: "Help Guide", url: "/guide", icon: "📚", description: "Accounting, Subs, and SOP tiles." },
    { name: "Notebook", url: "https://notebooklm.google.com/", icon: "📓", description: "AI research assistant for deep docs." },
    { name: "Letter AI", url: "https://app.letter.ai", icon: "/Letter_AI.png", description: "Playbooks and talk-track generation." },
    { name: "Slack", url: "https://clio.slack.com", icon: "/Slack.png", description: "Team communication and swarming." },
    { name: "Help Center", url: "https://help.clio.com", icon: "❓", description: "Official public Knowledge Base." },
    { name: "CSQL", url: "/csql", icon: "🎯", description: "Clio CSQL Product Game Cards." }
  ];

  return (
    <main className={`min-h-screen py-12 px-6 transition-colors duration-500 ${
      darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-16">
          <h1 className={`text-5xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            SUPPORT<span className="text-blue-600">OKTA</span>
          </h1>
          <button onClick={toggleTheme} className={`p-3 rounded-2xl border-2 transition-all ${
            darkMode ? 'bg-slate-800 border-slate-700 text-yellow-400' : 'bg-white border-slate-200 text-slate-600 shadow-sm'
          }`}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Large Tile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-6">
          {apps.map((app) => (
            <a 
              key={app.name} 
              href={app.url} 
              target={app.url.startsWith('http') ? "_blank" : "_self"} 
              className={`group flex flex-col items-center p-10 border-2 rounded-[2.5rem] transition-all duration-300 text-center min-h-[420px] justify-between ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700 hover:border-blue-500 hover:bg-slate-800 shadow-2xl' 
                  : 'bg-white border-slate-100 hover:border-blue-500 shadow-xl shadow-slate-200/50'
              } hover:-translate-y-2`}
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex items-center justify-center w-24 h-24 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {app.icon.startsWith('/') ? (
                    <img src={app.icon} className="max-h-full max-w-full object-contain filter drop-shadow-sm" alt="" />
                  ) : (
                    <span className="text-6xl drop-shadow-md">{app.icon}</span>
                  )}
                </div>
                
                {/* Fixed Contrast Text */}
                <h2 className={`text-2xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {app.name}
                </h2>
                <p className={`text-sm leading-relaxed font-medium px-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {app.description}
                </p>
              </div>

              <div className={`mt-8 w-full py-4 text-xs font-black uppercase tracking-widest border-2 rounded-2xl transition-all ${
                darkMode 
                  ? 'bg-blue-600 border-blue-600 text-white group-hover:bg-blue-500' 
                  : 'bg-slate-900 border-slate-900 text-white group-hover:bg-blue-600 group-hover:border-blue-600'
              }`}>
                {app.url.startsWith('/') ? "Enter →" : "Launch ↗"}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}