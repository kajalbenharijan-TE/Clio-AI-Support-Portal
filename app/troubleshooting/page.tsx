"use client";
import { useState, useEffect } from 'react';

export default function TroubleshootingPage() {
  const [darkMode, setDarkMode] = useState(true);
  
  // State for the Consult Builder
  const [issue, setIssue] = useState("");
  const [expected, setExpected] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [accountId, setAccountId] = useState("");
  const [checkedSteps, setCheckedSteps] = useState<string[]>([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const troubleshootingSteps = [
    "Tested in Demo Environment",
    "Searched Notebook / Letter AI",
    "Reproduced in Customer Account",
    "Verified Browser/Version",
    "Cleared Cache/Cookies",
    "Checked Linear for existing bugs"
  ];

  const handleCheck = (step: string) => {
    setCheckedSteps(prev => 
      prev.includes(step) ? prev.filter(s => s !== step) : [...prev, step]
    );
  };

  // The "Magic" script generator
  const generateScript = () => {
    const script = `
*TE CONSULT REQUEST*
──────────────────────────────
*Issue:* ${issue || "Not provided"}
*Expected Behavior:* ${expected || "Not provided"}
*Account ID:* ${accountId || "Not provided"}
*Media (G-Drive):* ${mediaUrl || "Not provided"}

*Troubleshooting Performed:*
${checkedSteps.map(s => `✅ ${s}`).join('\n') || "No steps selected"}

*Status:* Ready for TE Review
    `.trim();

    navigator.clipboard.writeText(script);
    alert("Consult Script copied to clipboard! Paste it into Slack or Salesforce.");
  };

  return (
    <main className={`min-h-screen py-12 px-4 transition-colors duration-500 ${darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <a href="/" className={`text-sm font-bold flex items-center gap-2 hover:opacity-70 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ← Back to Dashboard
          </a>
        </div>

        <header className="mb-12">
          <h1 className="text-3xl font-black mb-2">Consult <span className="text-blue-500">Builder</span></h1>
          <p className="text-sm opacity-60">Complete the fields below to generate your TE Consult script.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Describe the Issue</label>
              <textarea 
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="What is happening?"
                className={`w-full p-4 rounded-2xl border bg-transparent text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                rows={3}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Expected Behavior</label>
              <input 
                type="text"
                value={expected}
                onChange={(e) => setExpected(e.target.value)}
                placeholder="What should happen?"
                className={`w-full p-4 rounded-2xl border bg-transparent text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Account ID</label>
                <input 
                  type="text"
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                  className={`w-full p-4 rounded-2xl border bg-transparent text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-70">G-Drive Link</label>
                <input 
                  type="text"
                  value={mediaUrl}
                  onChange={(e) => setMediaUrl(e.target.value)}
                  placeholder="https://..."
                  className={`w-full p-4 rounded-2xl border bg-transparent text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                />
              </div>
            </div>
          </div>

          {/* Right Side: Troubleshooting Checklist */}
          <div className={`p-8 rounded-[2.5rem] border ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h3 className="font-bold mb-6 flex items-center gap-2">Troubleshooting Steps</h3>
            <div className="space-y-4">
              {troubleshootingSteps.map((step) => (
                <label key={step} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    onChange={() => handleCheck(step)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                  />
                  <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">{step}</span>
                </label>
              ))}
            </div>

            <button 
              onClick={generateScript}
              disabled={!issue || !accountId}
              className={`mt-8 w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${
                issue && accountId 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20' 
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              🚀 Generate & Copy Script
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}