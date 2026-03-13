"use client";
import { useState, useEffect } from 'react';

export default function TroubleshootingPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const steps = [
    { 
      title: "Self-Solve First", 
      detail: "Use Notebook, Letter AI, and your Demo environment. Research first! If it happens in Demo, it's a high-priority wide-scale impact." 
    },
    { 
      title: "Capture Exact Reproduction", 
      detail: "Create a clear, ordered list of every click the user made to reach the issue." 
    },
    { 
      title: "Collect Full-Screen Media", 
      detail: "Include the browser URL bar and error messages. Upload to G-Drive. Never say 'I'll grab media later'." 
    },
    { 
      title: "Verify Impacted Account/User", 
      detail: "Need Account ID + User ID (not just the requester). Crucial for identity/MFA/throttle requests." 
    },
    { 
      title: "Reproduce the Issue Yourself", 
      detail: "Follow the steps in the customer's account or Demo. Note your findings in 'Attempted Troubleshooting'." 
    },
    { 
      title: "Articulate the Gap", 
      detail: "Define: 1. The Issue, 2. Expected Behavior, 3. Actual Result." 
    },
    { 
      title: "Fill Consult Template Completely", 
      detail: "Don't send one-liners. Fill out Title, User, Channel, Screenshare, and Resources Utilized." 
    },
    { 
      title: "Submit to T.E. (Not Devs)", 
      detail: "TE handles dev questions to document knowledge gaps and protect developer focus." 
    }
  ];

  return (
    <main className={`min-h-screen py-12 px-4 transition-colors duration-500 ${darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <a href="/" className={`text-sm font-bold flex items-center gap-2 hover:opacity-70 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ← Back to Dashboard
          </a>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <header className="mb-12">
          <h1 className="text-3xl font-black mb-4">T.E. <span className="text-blue-500">Troubleshooting Guide</span></h1>
          <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-blue-900/20 border-blue-500/30 text-blue-300' : 'bg-blue-50 border-blue-100 text-blue-700'}`}>
            <p className="text-sm font-medium">💡 Testing in Demo helps TEs evaluate impact. If it breaks there, multiple accounts are likely affected.</p>
          </div>
        </header>

        {/* Vertical Stepper */}
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex gap-6 p-6 border rounded-3xl transition-all ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>
                {index + 1}
              </div>
              <div>
                <h2 className="text-lg font-bold mb-1">{step.title}</h2>
                <p className="text-sm opacity-80 leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Checklist Section */}
        <div className={`p-8 rounded-[2.5rem] border ${darkMode ? 'bg-green-900/10 border-green-500/20' : 'bg-green-50 border-green-200'}`}>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            ✅ Quick Checklist Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Tested in Demo Environment",
              "Captured Reproduction Steps",
              "G-Drive Media (with URL bar)",
              "Verified Account & User ID",
              "Reproduced issue yourself",
              "Full Consult Template filled"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label className="text-sm font-medium opacity-90">{item}</label>
              </div>
            ))}
          </div>
        </div>
        
        <footer className="mt-12 text-center opacity-40 text-[10px] font-bold uppercase tracking-widest">
          Incomplete consults will be returned to the agent for further troubleshooting.
        </footer>
      </div>
    </main>
  );
}