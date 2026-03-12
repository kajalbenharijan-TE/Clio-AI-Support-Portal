export default function SupportOKTA() {
  const apps = [
    { 
      name: "Slack", 
      url: "https://clio.slack.com/ssb/signin/main/fallback", 
      icon: "/Slack.png", 
      description: "Real-time workspace communication."
    },
    { 
      name: "NotebookLM", 
      url: "https://notebooklm.google.com/", 
      icon: "📓",
      description: "AI-powered research assistant."
    },
    { 
      name: "Letter AI", 
      url: "https://app.letter.ai/sso/clio", 
      icon: "/Letter_AI.png", 
      description: "Personalized content generation."
    },
    { 
      name: "Help Center", 
      url: "https://help.clio.com", 
      icon: "❓",
      description: "Knowledge base and product docs."
    },
    { 
      name: "Troubleshoot", 
      url: "/troubleshooting", 
      icon: "🛠️",
      description: "Required pre-escalation workflow."
    }
  ];
  return (
    <main className="min-h-screen bg-[#F1F5F9] py-12 px-4 antialiased font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Header */}
        <header className="mb-10 text-center">
          <div className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-tighter text-blue-700 uppercase bg-blue-100/50 rounded-md border border-blue-200">
            System Status: Operational
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Support<span className="text-blue-600">OKTA</span>
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Authenticated Employee Launchpad
          </p>
        </header>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {apps.map((app) => (
            <a 
              key={app.name}
              href={app.url}
              target={app.url.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 text-center"
            >
              {/* Smaller Icon Container */}
              <div className="flex items-center justify-center w-16 h-16 mb-4">
                {app.icon.startsWith('/') ? (
                  <img 
                    src={app.icon} 
                    alt={app.name} 
                    className="max-h-full max-w-full object-contain" 
                  />
                ) : (
                  <span className="text-4xl">{app.icon}</span>
                )}
              </div>
              
              <div className="flex flex-col">
                <h2 className="text-md font-bold text-slate-800">
                  {app.name}
                </h2>
                <p className="mt-2 text-[12px] leading-snug text-slate-400 font-medium px-1">
                  {app.description}
                </p>
              </div>

              {/* Minimalist Button */}
              <div className="mt-5 w-full py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-100 rounded-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                Launch
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-16 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
            &copy; 2026 Clio Support Operations
          </p>
        </footer>
      </div>
    </main>
  );
}