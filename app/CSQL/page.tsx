"use client";
import { useState, useEffect } from 'react';

export default function CSQLPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const products = [
    { name: "Clio Manage", icon: "🏛️", url: "https://app.letter.ai/preview-content/custom-content?contentId=ee1116a8-7a29-4c78-b5b3-8ac7579bce85" },
    { name: "Clio Grow", icon: "🌱", url: "https://app.letter.ai/preview-content/custom-content?contentId=cdae12f0-24e9-4454-a431-37953062eebc" },
    { name: "Clio Payments", icon: "💳", url: "https://app.letter.ai/preview-content/custom-content?contentId=1d778010-5bbb-4850-8632-bec0ad384755" },
    { name: "Clio Accounting", icon: "💰", url: "https://app.letter.ai/preview-content/custom-content?contentId=090a9980-9a55-4f5f-8bd7-d979c5640d6e" },
    { name: "Work & Vincent", icon: "🤖", url: "https://app.letter.ai/preview-content/custom-content?contentId=561531b4-315c-4fc4-b716-9139a7f1b8b0" },
    { name: "Clio File", icon: "📂", url: "https://app.letter.ai/preview-content/custom-content?contentId=d2aab716-c760-4ee5-9296-cb1e1a0fb154" },
    { name: "Clio Draft", icon: "📝", url: "https://app.letter.ai/preview-content/custom-content?contentId=27a99865-f6c5-460d-8679-3045f6b655c6" }
  ];

  return (
    <main className={`min-h-screen py-12 px-4 transition-colors duration-500 ${darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <a href="/" className={`text-sm font-bold flex items-center gap-2 hover:opacity-70 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ← Back to Dashboard
          </a>
          <h1 className="text-3xl font-black italic">CSQL<span className="text-blue-500 text-base not-italic ml-2">Product Hub</span></h1>
        </div>

        {/* Top Feature: General Upgrade Playbook */}
        <div className={`mb-10 p-8 border rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 ${darkMode ? 'bg-blue-600/10 border-blue-500/30' : 'bg-blue-50 border-blue-200'}`}>
          <div>
            <h2 className="text-xl font-bold mb-2">Upgrade & Expansion Overview</h2>
            <p className="text-sm opacity-70">General playbooks for moving customers to higher plans.</p>
          </div>
          <a 
            href="https://app.letter.ai/preview-content/custom-content?contentId=1640549f-7c79-4054-9b9a-5a24e1757b80" 
            target="_blank"
            className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all"
          >
            Open Upgrade Playbook ↗
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <a 
              key={product.name} 
              href={product.url} 
              target="_blank" 
              className={`p-6 border rounded-3xl flex flex-col items-center text-center transition-all hover:-translate-y-1 ${
                darkMode ? 'bg-slate-800/40 border-slate-700 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'
              }`}
            >
              <span className="text-4xl mb-4">{product.icon}</span>
              <h3 className="font-bold text-sm mb-4">{product.name}</h3>
              <div className="mt-auto text-[10px] font-bold uppercase text-blue-500 tracking-widest">
                View Playbook
              </div>
            </a>
          ))}
        </div>

        {/* Footer Reminder */}
        <footer className="mt-16 p-6 text-center border-t border-slate-700/20">
          <p className="text-xs opacity-50 font-medium italic">
            "Every support interaction is an opportunity to help a firm grow."
          </p>
        </footer>
      </div>
    </main>
  );
}