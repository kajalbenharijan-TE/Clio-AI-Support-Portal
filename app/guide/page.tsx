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
      title: "De-Escalation Cheat Sheet",
      icon: "📣",
      url: "https://app.letter.ai/preview-content?contentId=bea79fe7-690d-4eee-a16f-87d6f0284941",
      points: [
        "Tone: Slow down speaking pace; use verbal pauses.",
        "Goal: Address the Practical AND the Emotional needs.",
        "Safety: End call for racism, sexism, or personal abuse.",
        "Ask: 'What is the main outcome you're hoping for today?'"
      ],
      hasTalkTrack: true
    },
    {
      title: "QuickBooks Online (QBO)",
      icon: "⚙️",
      url: "https://app.letter.ai/preview-content?contentId=c0256c55-7bfb-419e-ab55-9b7676e39e7f",
      points: [
        "Requirements: Essentials, Plus, or Advanced only.",
        "Sync Direction: Bills/Payments (Clio → QBO).",
        "Hard Costs: QBO → Clio (Note: Unsupported on Essentials).",
        "Contacts: Only syncs after the first bill is approved."
      ],
      proTip: "Simple Start is NOT supported."
    },
    {
      title: "Subscription & Cancellation",
      icon: "💳",
      url: "https://app.letter.ai/preview-content/custom-content?contentId=ad51e89f-bc4c-466c-817e-32dac89d4d0d",
      points: [
        "Verification: Support Code + Admin/Owner status.",
        "Cancellations: Handoff to Retention via Salesforce Swarm.",
        "Policy: Strict no-refund policy (Compassionate but firm).",
        "Manual Billing: Only AR team can adjust suspension."
      ],
      proTip: "Never guarantee a refund will be issued."
    },
    {
      title: "Xero Integration",
      icon: "🏦",
      url: "https://help.clio.com/hc/en-us/articles/9290118056603-Xero-and-Clio",
      points: [
        "Sync Timing: Runs automatically every 15-30 minutes.",
        "Trust Funds: Reconciliation is manual (Does NOT sync).",
        "Rounding: Xero rounds line items to 2 decimal places.",
        "Hard Costs: Requires 'administrative permissions' to enable."
      ],
      proTip: "Avoid editing paid invoices after they sync."
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
            ← Back to SupportOKTA
          </a>
        </div>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black mb-3">Help <span className="text-blue-500">Guides</span></h1>
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

              {guide.proTip && (
                <div className={`mb-6 p-3 rounded-xl text-[11px] font-bold uppercase tracking-tight ${
                  darkMode ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-50 text-blue-700'
                }`}>
                  💡 PRO-TIP: {guide.proTip}
                </div>
              )}

              <div className="flex flex-col gap-3">
                {guide.hasTalkTrack && (
                  <button 
                    onClick={copyTalkTrack}
                    className="w-full py-2.5 text-[10px] font-bold uppercase tracking-widest bg-amber-600/10 text-amber-500 border border-amber-500/20 rounded-xl hover:bg-amber-600 hover:text-white transition-all"
                  >
                    📋 Copy Warning Talk Track
                  </button>
                )}
                <a 
                  href={guide.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center text-[10px] font-bold uppercase tracking-widest bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
                >
                  Open Full Playbook ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}