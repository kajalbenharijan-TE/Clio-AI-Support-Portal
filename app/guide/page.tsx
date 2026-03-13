"use client";
import { useState, useEffect } from 'react';

export default function HelpGuide() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const guides = [
    {
      title: "QuickBooks Online (QBO)",
      icon: "⚙️",
      letterAiUrl: "https://app.letter.ai/preview-content?contentId=c0256c55-7bfb-419e-ab55-9b7676e39e7f",
      gemLink: "https://gemini.google.com/gem/1UMOuiOf2kvFPj39yibtsZ5aqrtBiOB-g?usp=sharing",
      points: [
        "Reqs: Essentials, Plus, Advanced (Simple Start = No).",
        "Hard Costs: QBO → Clio (The only inward sync).",
        "Sync Flow: Bills & Payments flow Clio → QBO.",
        "Contacts: Only syncs after 1st bill is approved."
      ],
      proTip: "Essentials plan does NOT support Hard Cost sync."
    },
    {
      title: "Xero Integration",
      icon: "🏦",
      letterAiUrl: "https://help.clio.com/hc/en-us/articles/9290118056603-Xero-and-Clio",
      gemLink: "https://gemini.google.com/gem/1UMOuiOf2kvFPj39yibtsZ5aqrtBiOB-g?usp=sharing",
      points: [
        "Timing: Auto-syncs roughly every 15-30 minutes.",
        "Trust Funds: Reconciliation is MANUAL (No sync).",
        "Rounding: Xero rounds to 2 decimals (1-cent gaps).",
        "Paid Bills: Do not edit in Clio after they sync."
      ],
      proTip: "Mapping categories affects NEW invoices only."
    },
    {
      title: "Clio Drive",
      icon: "📁",
      letterAiUrl: "https://app.letter.ai/sso/clio/drive-playbook",
      gemLink: "https://gemini.google.com/gem/1hvsEoMfhuZ4md7CiXnltyaNgHtAjVayb?usp=sharing",
      points: [
        "Requirements: Windows 10+ or macOS 10.13+.",
        "Function: Mirrored file system for Clio Manage docs.",
        "Syncing: Local changes update Clio instantly.",
        "Conflicts: Check the 'Conflict' folder for version overlaps."
      ],
      proTip: "Do not store active Database files (.pst, .backup) here."
    },
    {
      title: "Clio Accounting",
      icon: "💰",
      letterAiUrl: "https://app.letter.ai/sso/clio/accounting-sop",
      gemLink: "https://gemini.google.com/gem/1IvCpHMeBQXVweSyhhJPkfWX7LCw4C7km?usp=sharing",
      points: [
        "Bank Feeds: Connects directly via Plaid integration.",
        "Trust: Generates 3-way Trust reconciliation reports.",
        "Checks: Supports manual and batch check printing.",
        "Scope: Built-in general ledger management for firms."
      ],
      proTip: "Verify 'Opening Balances' before enabling bank sync."
    }
  ];

  const copyTalkTrack = () => {
    const text = "Unfortunately, I'm not going to be able to continue this conversation at this time. I'll escalate this request to a manager for follow-up. Have a good day.";
    navigator.clipboard.writeText(text);
    alert("Talk Track Copied!");
  };

  return (
    <main className={`min-h-screen py-12 px-4 transition-colors duration-500 ${darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <a href="/" className={`text-sm font-bold flex items-center gap-2 hover:opacity-70 transition-all ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ← Back to Dashboard
          </a>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-xs uppercase font-bold tracking-widest border rounded-lg">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black mb-3">Help <span className="text-blue-500">Guides</span></h1>
          <p className="text-sm opacity-60">Internal Battle Cards & Documentation Links</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className={`p-8 border rounded-[2.5rem] flex flex-col transition-all duration-300 ${
              darkMode ? 'bg-slate-800/40 border-slate-700 shadow-xl' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{guide.icon}</span>
                <h2 className="text-xl font-bold">{guide.title}</h2>
              </div>
              
              <ul className="space-y-4 mb-6 flex-grow">
                {guide.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1.5">•</span>
                    <p className="text-sm leading-relaxed opacity-90">{point}</p>
                  </li>
                ))}
              </ul>

              <div className={`mb-6 p-3 rounded-xl text-[10px] font-bold uppercase ${
                darkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-50 text-blue-700'
              }`}>
                💡 PRO-TIP: {guide.proTip}
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href={guide.gemLink} 
                  target="_blank" 
                  className={`w-full py-2.5 text-center text-[10px] font-bold uppercase tracking-widest rounded-xl border transition-all ${
                    darkMode ? 'bg-emerald-600/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-600 hover:text-white' : 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-600 hover:text-white'
                  }`}
                >
                  💎 View Gem Resource
                </a>
                <a 
                  href={guide.letterAiUrl} 
                  target="_blank" 
                  className="w-full py-3 text-center text-[10px] font-bold uppercase tracking-widest bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
                >
                  Open Letter AI Playbook ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}