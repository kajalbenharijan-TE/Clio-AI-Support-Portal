export default function ClioHub() {
  const apps = [
    { 
      name: "Slack", 
      url: "https://clio.slack.com/ssb/signin/main/fallback", 
      icon: "/Slack.png", 
      description: "Real-time workspace communication and team collaboration."
    },
    { 
      name: "NotebookLM", 
      url: "https://notebooklm.google.com/", 
      icon: "📓",
      description: "AI-powered research assistant for internal documentation."
    },
    { 
      name: "Letter AI", 
      url: "https://app.letter.ai/sso/clio", 
      icon: "/Letter_AI.png", 
      description: "Personalized content generation for sales and support success."
    },
    { 
      name: "Help Center", 
      url: "https://help.clio.com", 
      icon: "❓",
      description: "Knowledge base for Clio product features and customer support."
    },
    { 
      name: "Troubleshoot", 
      url: "/troubleshooting", 
      icon: "🛠️",
      description: "Required pre-escalation workflow for Technical Support cases."
    }
  ];
  return (
    // Background uses a very light slate to make white cards "pop"
    <main className="min-h-screen bg-[#F8FAFC] py-16 px-6 antialiased font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section with refined alignment */}
        <header className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Internal Access Only
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight sm:text-6xl">
            Clio<span className="text-blue-600">Hub</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-500 font-medium">
            Centralized access to authenticated tools and support resources.
          </p>
        </header>

        {/* Improved Grid: centered and perfectly aligned */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center">
          {apps.map((app) => (
            <a 
              key={app.name}
              href={app.url}
              target={app.url.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center p-8 bg-white border border-slate-200 rounded-[2rem] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:border-blue-400 transition-all duration-300 ease-out text-center"
            >
              {/* Icon Container with fixed height for alignment */}
              <div className="flex items-center justify-center w-24 h-24 mb-6 transition-transform duration-500 ease-in-out group-hover:scale-110">
                {app.icon.startsWith('/') ? (
                  <img 
                    src={app.icon} 
                    alt={app.name} 
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm" 
                  />
                ) : (
                  <span className="text-6xl drop-shadow-sm">{app.icon}</span>
                )}
              </div>
              
              {/* Text Alignment */}
              <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {app.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 font-medium px-2">
                  {app.description}
                </p>
              </div>

              {/* Polished Button UI */}
              <div className="mt-8 flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {app.name === "Troubleshoot" ? "View Guide" : "Launch App"}
              </div>
            </a>
          ))}
        </div>

        {/* Subtle Footer for that "Portal" feel */}
        <footer className="mt-24 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-400 font-medium italic">
            Property of Clio Support Operations. Secure authentication required.
          </p>
        </footer>
      </div>
    </main>
  );
}