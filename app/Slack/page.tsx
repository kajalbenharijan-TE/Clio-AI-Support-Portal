"use client";
import { useState, useEffect } from 'react';

export default function SlackHub() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const channels = [
    { 
      name: "#team-support", 
      url: "https://app.slack.com/client/T025GUW6F/C62QVH1DJ", 
      desc: "All things support. The main hub for the department.",
      tag: "General"
    },
    { 
      name: "#help-cs-consults", 
      url: "https://app.slack.com/client/T025GUW6F/C62SC017F", 
      desc: "Get help on live calls from TE, TL, and Solutions teams.",
      tag: "Urgent Help"
    },
    { 
      name: "#help-subscription-services", 
      url: "https://app.slack.com/client/T025GUW6F/C04HRGMKVCH", 
      desc: "Reach out for subscription changes or plan questions.",
      tag: "Subs"
    },
    { 
      name: "#op-supp-announcements", 
      url: "https://app.slack.com/client/T025GUW6F/C06BXJJ63J6", 
      desc: "Critical updates and operational announcements for support.",
      tag: "Updates"
    },
    { 
      name: "#op-tech-esc-announce", 
      url: "https://app.slack.com/client/T025GUW6F/CJJS5DW02", 
      desc: "Stay up to date with outages, incidents, and TE announcements.",
      tag: "Technical"
    }
  ];

  return (
    <main className={`min-h-screen py-12 px-6 transition-colors duration-500 ${darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-5xl mx-auto">
        
        <div className="flex justify-between items-center mb-12">
          <a href="/" className={`text-sm font-bold flex items-center gap-2 hover:opacity-70 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ← Back to Dashboard
          </a>
          <h1 className="text-3xl font-black italic">SLACK<span className="text-blue-500 text-base not-italic ml-2">Channel Hub</span></h1>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {channels.map((ch) => (
            <a 
              key={ch.name} 
              href={ch.url} 
              target="_blank" 
              className={`group p-6 border-2 rounded-3xl flex items-center justify-between transition-all hover:scale-[1.01] ${
                darkMode ? 'bg-slate-800/40 border-slate-700 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'
              }`}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                    {ch.tag}
                  </span>
                  <h2 className="text-xl font-black font-mono tracking-tight">{ch.name}</h2>
                </div>
                <p className="text-sm opacity-60 font-medium">{ch.desc}</p>
              </div>
              
              <div className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                darkMode ? 'bg-slate-700 group-hover:bg-blue-600 text-white' : 'bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-600'
              }`}>
                Open in Slack
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}