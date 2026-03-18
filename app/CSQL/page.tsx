"use client";
import { useState, useEffect } from 'react';

export default function CSQLPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const products = [
    { 
      name: "Clio Manage", 
      icon: "🏛️", 
      url: "https://app.letter.ai/preview-content/custom-content?contentId=ee1116a8-7a29-4c78-b5b3-8ac7579bce85" 
    },
    { 
      name: "Clio Grow", 
      icon: "🌱", 
      url: "https://app.letter.ai/preview-content/custom-content?contentId=cdae12f0-24e9-4454-a431-37953062eebc" 
    },
    { 
      name: "Clio Payments", 
      icon: "💳", 
      url: "https://app.letter.ai/preview-content/custom-content?contentId=1d778010-5bbb-4850-8632-bec0ad384755" 
    },
    { 
      name: "Clio Accounting", 
      icon: "💰", 
      url: "https://app.letter.ai/preview-content/custom-content?contentId=090a9980-9a55-4f5f-8bd7-d979c5640d6e" 
    },
    { 
      name: "Work & Vincent", 
      icon: "🤖", 
      url: "https://app.letter.ai/preview-content/custom-content?contentId=561531b4-315c-4fc4-b716-9139a7f1b8b0" 
    },
    { 
      name: "Clio File", 
      icon: "📂", 
      url: "https://app.letter.ai/preview-content/custom-content?contentId=d2aab716-c760-4ee5-9296-cb1e1a0fb154" 
    },
    { 
      name: "Clio Draft", 
      icon: "📝", 
      url: "https://app.letter.ai/preview-content/custom-content?contentId=27a99865-f6c5-460d-8679-3045f6b655c6" 
    },
    { 
      name: "Upgrade & Expansion", 
      icon: "📈", 
      url: "https://app.letter.ai/preview-content/custom-content?contentId=1640549f-7c79-4054-9b9a-5a24e1757b80" 
    }
  ];

  return (
    <main className={`min-h-screen py-12 px-4 transition-colors duration-500 ${darkMode ? 'bg-[#0F172A] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-12">
          <a href="/" className={`text-sm font-bold flex items-center gap-2 hover:opacity-70 transition-all ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ← Back to Dashboard
          </a>
          <h1 className="text-3xl font-black italic tracking-tight">CSQL<span className="text-blue-500 text-base not-italic ml-2 tracking-normal">Product Hub</span></h1>
        </div>

        {/* Uniform Product Grid - 8 tiles total */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <a 
              key={product.name} 
              href={product.url} 
              target="_blank" 
              className={`group p-8 border rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-slate-800/40 border-slate-700 hover:border-blue-500 hover:bg-slate-800 shadow-xl' 
                  : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="w-20 h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <span className="text-5xl drop-shadow-md">{product.icon}</span>
              </div>
              
              <h3 className={`font-bold text-sm mb-4 transition-colors ${darkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'}`}>
                {product.name}
              </h3>
              
              <div className={`mt-auto w-full py-2 text-[10px] font-bold uppercase tracking-widest border rounded-lg transition-all ${
                darkMode 
                  ? 'text-slate-500 border-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600' 
                  : 'text-slate-400 border-slate-100 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600'
              }`}>
                View Playbook
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-20 text-center opacity-30">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em]">
            Support Excellence // CSQL Readiness
          </p>
        </footer>
      </div>
    </main>
  );
}