"use client";
import { useState, useEffect } from 'react';

export default function TroubleshootingPage() {
  const [darkMode, setDarkMode] = useState(true);
  
  // Consult Builder State
  const [issue, setIssue] = useState("");
  const [expected, setExpected] = useState("");
  const [accountId, setAccountId] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [checkedSteps, setCheckedSteps] = useState<string[]>([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const stepsSOP = [
    { title: "Self-Solve First", desc: "Use NotebookLM & Demo environment. If it breaks in Demo, impact is high." },
   { title: "Reproduce Personally", desc: "Attempt to break it yourself in the customer account or Demo." },
    { title: "Reproduction Steps", desc: "List exact, ordered actions taken to reach the error." },
    { title: "Capture Media", desc: "Full-screen screenshots/video including the browser URL bar." },
    { title: "Verify IDs", desc: "Confirm Account ID and specific User ID (not just requester)." },
    { title: "Articulate Gap", desc: "Clearly define Expected vs. Actual behavior." },
    { title: "Complete Template", desc: "Fill out every field in the TE Consult macro (no one-liners)." },
    { title: "Submit to T.E.", desc: "Consult Tech Esc before going to Devs to document gaps." }
  ];

  const builderOptions = [
    "Tested in Demo Environment",
    "Searched Notebook / Letter AI",
    "Verified Account & User ID",
    "Collected Media (URL bar included)",
    "Reproduced in Customer Account"
  ];

  const handleCheck = (step: string) => {
    setCheckedSteps(prev => 
      prev.includes(step) ? prev.filter(s => s !== step) : [...prev, step]
    );
  };

  const generateScript = () => {
    const script = `
*TE CONSULT REQUEST*
──────────────────────────────
*ISSUE:* ${issue}
*EXPECTED:* ${expected}
*ACCOUNT/USER ID:* ${accountId}
*MEDIA:* ${mediaUrl}

*TROUBLESHOOTING PERFORMED:*
${checkedSteps.map(s => `✅ ${s}`).join('\n')}

*RESOURCES:* NotebookLM, Letter AI, Demo Env.
    `.trim();

    navigator.clipboard.writeText(script);
    alert("Consult Script copied to clipboard!");
  };

  return (
    <main className={`min-h-screen py-12 px-4 transition-colors duration-500 ${darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <a href="/" className={`text-sm font-bold flex items-center gap-2 hover:opacity-70 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ← Back to Dashboard
          </a>
          <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 rounded-xl border text-[10px] font-bold uppercase tracking-widest">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* TILE 1: TROUBLESHOOTING GUIDE (SOP) */}
          <div className={`p-8 border rounded-[2.5rem] ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="text-blue-500 text-3xl">📚</span> Troubleshooting Guide
            </h2>
            <div className="space-y-4">
              {stepsSOP.map((step, i) => (
                <div key={i} className="flex gap-4 group">
                  <span className="text-blue-500 font-black text-lg opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <div>
                    <h3 className="text-sm font-bold">{step.title}</h3>
                    <p className="text-[12px] opacity-60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TILE 2: CONSULT BUILDER (ACTION) */}
          <div className={`p-8 border rounded-[2.5rem] ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
              <span className="text-blue-500 text-3xl">🚀</span> Consult Builder
            </h2>
            
            <div className="space-y-4 mb-6">
              <input 
                placeholder="Issue (What is happening?)" 
                className={`w-full p-3 rounded-xl border bg-transparent text-sm outline-none focus:border-blue-500 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                onChange={(e) => setIssue(e.target.value)}
              />
              <input 
                placeholder="Expected Behavior" 
                className={`w-full p-3 rounded-xl border bg-transparent text-sm outline-none focus:border-blue-500 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                onChange={(e) => setExpected(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  placeholder="Account/User ID" 
                  className={`w-full p-3 rounded-xl border bg-transparent text-sm outline-none focus:border-blue-500 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                  onChange={(e) => setAccountId(e.target.value)}
                />
                <input 
                  placeholder="G-Drive Media URL" 
                  className={`w-full p-3 rounded-xl border bg-transparent text-sm outline-none focus:border-blue-500 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                  onChange={(e) => setMediaUrl(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-3">Verification Checklist</p>
              {builderOptions.map(opt => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" onChange={() => handleCheck(opt)} className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-[12px] opacity-70 group-hover:opacity-100">{opt}</span>
                </label>
              ))}
            </div>

            <button 
              onClick={generateScript}
              disabled={!issue || !accountId}
              className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${
                issue && accountId 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20' 
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              Generate & Copy Consult
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}