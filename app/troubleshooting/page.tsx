"use client";
import { useState, useEffect } from 'react';

export default function TroubleshootingPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const steps = [
    { title: "Account ID Audit", detail: "Search email in Admin Panel. Identify correct Account ID and User ID." },
    { title: "Define the End Goal", detail: "State what the user is trying to achieve vs actual behavior." },
    { title: "Mapping the Workflow", detail: "List exact steps, browser info, and timestamps." },
    { title: "Attempt Reproduction", detail: "Try mimic behavior in a Demo Account." },
    { title: "Linear Check", detail: "Verify if a bug report already exists in Linear." },
    { title: "Upload Screenshots/Media", detail: "Capture full media screen (including URL). Upload to Google Drive with 'Anyone at Clio' access." }
  ];

  return (
    <main className={`min-h-screen py-12 px-4 antialiased font-sans transition-colors duration-500 ${
      darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className={`text-sm font-bold flex items-center gap-2 mb-8 hover:opacity-70 transition-all ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          ← Back to SupportOKTA
        </a>

        <div className={`rounded-[2.5rem] p-8 md:p-12 border transition-all duration-300 ${
          darkMode ? 'bg-slate-800/40 border-slate-700 shadow-2xl' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <header className="mb-12">
            <h1 className={`text-3xl font-black mb-3 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Troubleshooting <span className="text-blue-500">Workflow</span>
            </h1>
            <p className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Standard operating procedure for pre-escalation vetting.
            </p>
          </header>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className={`flex-shrink-0 w-10 h-10 border rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  darkMode ? 'bg-blue-900/30 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'
                }`}>
                  {index + 1}
                </div>
                <div className={`pb-8 border-b last:border-0 w-full ${darkMode ? 'border-slate-700/50' : 'border-slate-100'}`}>
                  <h2 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>{step.title}</h2>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CRITICAL BOX SUMMARY */}
          <div className={`mt-10 p-8 rounded-3xl border transition-all ${
            darkMode ? 'bg-amber-950/30 border-amber-500/20' : 'bg-amber-50 border-amber-200'
          }`}>
            <h3 className={`font-black flex items-center gap-2 text-xs uppercase tracking-[0.2em] mb-4 ${
              darkMode ? 'text-amber-400' : 'text-amber-800'
            }`}>
              🚨 T.E. Readiness Check
            </h3>
            <p className={`text-sm font-medium ${darkMode ? 'text-amber-100/70' : 'text-amber-900'}`}>
              Escalate to Technical Support **only** after Step 6 is complete. Consults without Google Drive links containing full-screen media will be returned for more information.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}