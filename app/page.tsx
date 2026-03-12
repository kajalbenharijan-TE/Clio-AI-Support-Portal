"use client";
import { useState, useEffect } from 'react';

export default function SupportOKTA() {
  const [darkMode, setDarkMode] = useState(true);

  // Load theme from storage on start
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  // Save theme when changed
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const apps = [
    { name: "Slack", url: "https://clio.slack.com/ssb/signin/main/fallback", icon: "/Slack.png", description: "Real-time workspace communication." },
    { name: "NotebookLM", url: "https://notebooklm.google.com/", icon: "📓", description: "AI-powered research assistant." },
    { name: "Letter AI", url: "https://app.letter.ai/sso/clio", icon: "/Letter_AI.png", description: "Personalized content generation." },
    { name: "Help Center", url: "https://help.clio.com", icon: "❓", description: "Knowledge base and product docs." },
    { name: "Troubleshoot", url: "/troubleshooting", icon: "🛠️", description: "Required pre-escalation workflow." }
  ];

  return (
    <main className={`min-h-screen py-12 px-4 antialiased font-sans transition-colors duration-500 ${
      darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <button onClick={toggleTheme} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${
            darkMode ? 'bg-slate-800 border-slate-700 text-blue-400' : 'bg-white border-slate-200 text-slate-500 shadow-sm'
          }`}>
            {darkMode ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
          </button>
        </div>

        <header className="mb-12 text-center">
          <div className={`inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-tighter uppercase rounded-md border transition-colors ${
            darkMode ? 'text-blue-400 bg-blue-900/30 border-blue-500/30' : 'text-blue-600 bg-blue-50 border-blue-200'
          }`}>
            <span className={`inline-block w-2 h-2 mr-2 rounded-full animate-pulse ${darkMode ? 'bg-green-500' : 'bg-green-600'}`}></span>
            System Status: Operational
          </div>
          <h1 className={`text-4xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Support<span className="text-blue-500">OKTA</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {apps.map((app) => (
            <a key={app.name} href={app.url} target={app.url.startsWith('http') ? "_blank" : "_self"} className={`group flex flex-col items-center p-6 border rounded-2xl transition-all duration-200 text-center ${
                darkMode ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 shadow-xl' : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md'
              } hover:-translate-y-1`}>
              <div className="flex items-center justify-center w-16 h-16 mb-4 drop-shadow-lg">
                {app.icon.startsWith('/') ? <img src={app.icon} alt={app.name} className="max-h-full max-w-full object-contain" /> : <span className="text-4xl">{app.icon}</span>}
              </div>
              <h2 className={`text-md font-bold transition-colors ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-800'}`}>{app.name}</h2>
              <p className={`mt-2 text-[12px] leading-snug font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{app.description}</p>
              <div className={`mt-5 w-full py-2 text-[10px] font-bold uppercase tracking-widest border rounded-lg transition-all ${
                darkMode ? 'text-slate-500 border-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600' : 'text-slate-400 border-slate-100 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600'
              }`}>
                {app.name === "Troubleshoot" ? "Launch Guide" : "Launch App"}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}