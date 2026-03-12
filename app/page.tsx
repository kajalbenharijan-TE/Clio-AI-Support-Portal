"use client";
import { useState } from 'react';

export default function ClioPortal() {
  const [formData, setFormData] = useState({
    endGoal: '',
    steps: '',
    stepsTaken: false,
    reproducedInDemo: false,
    resourcesUsed: '',
    stuckPoint: ''
  });

  const apps = [
    { name: "Slack", url: "https://clio.slack.com/sso/login", icon: "💬" },
    { name: "NotebookLM", url: "https://notebooklm.google.com/", icon: "📓" },
    { name: "Letter AI", url: "https://app.letter.ai/sso/clio", icon: "✉️" },
    { name: "Help Center", url: "https://help.clio.com", icon: "❓" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">Clio Employee Gateway</h1>
          <p className="text-slate-500 mt-3 text-lg">One-click access to your essential tools</p>
        </header>

        {/* App Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {apps.map((app) => (
            <a 
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white rounded-3xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {app.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-800">{app.name}</h2>
              <div className="mt-6 text-blue-600 font-semibold text-sm">Open App →</div>
            </a>
          ))}
        </div>

        {/* Troubleshooting Workflow Form */}
        <section className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Troubleshooting Check Workflow</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">What's the end goal?</label>
              <input type="text" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Describe the desired outcome..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">When/where is it happening? (List steps)</label>
              <textarea className="w-full p-3 border rounded-xl h-24 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="1. Logged into... 2. Clicked on..."></textarea>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">What have you tried?</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                  <span className="text-slate-700">Troubleshooting steps taken</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                  <span className="text-slate-700">Reproduced in demo?</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Link to resources used</label>
              <input type="url" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="https://..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">What do you need/where are you stuck?</label>
              <textarea className="w-full p-3 border rounded-xl h-24 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Explain the blocker..."></textarea>
            </div>

            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Submit Technical Escalation
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}