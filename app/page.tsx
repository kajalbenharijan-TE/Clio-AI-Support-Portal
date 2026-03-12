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
    { name: "Troubleshoot", url: "/troubleshooting", icon: "🛠️", description: "Required pre-escalation workflow." },
    { name: "Help Guide", url: "/guide", icon: "📚", description: "De-Escalation, Subs, and Accounting SOPs." },
    { name: "Slack", url: "https://clio.slack.com", icon: "/Slack.png", description: "Team communication." },
    { name: "Help Center", url: "https://help.clio.com", icon: "❓", description: "Clio Knowledge Base." },
    { name: "NotebookLM", url: "https://notebooklm.google.com/", icon: "📓", description: "AI Internal Docs." },
    { name: "Letter AI", url: "https://app.letter.ai/sso/clio", icon: "/Letter_AI.png", description: "Sales Content." }
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
          <h1 className={`text-4xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Support<span className="text-blue-500">OKTA</span></h1>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {apps.map((app) => (
            <a key={app.name} href={app.url} target={app.url.startsWith('http') ? "_blank" : "_self"} className={`group flex flex-col items-center p-6 border rounded-2xl transition-all duration-200 text-center min-h-[340px] ${darkMode ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-center justify-center w-20 h-20 mb-6 group-hover:scale-110 transition-transform">
                {app.icon.startsWith('/') ? <img src={app.icon} className="max-h-full max-w-full object-contain" /> : <span className="text-5xl">{app.icon}</span>}
              </div>
              <h2 className="text-lg font-bold mb-2">{app.name}</h2>
              <p className="text-[12px] leading-relaxed opacity-80">{app.description}</p>
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