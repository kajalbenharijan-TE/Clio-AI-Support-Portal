export default function ClioPortal() {
  const apps = [
    { 
      name: "Slack", 
      url: "https://clio.slack.com", 
      icon: "/Slack.png", 
      description: "Company communications."
    },
    { 
      name: "NotebookLM", 
      url: "https://notebooklm.google.com/", 
      icon: "📓",
      description: "AI research tool."
    },
    { 
      name: "Letter AI", 
      url: "https://app.letter.ai/sso/clio", 
      icon: "/Letter_AI.png", 
      description: "Internal Help Centre."
    },
    { 
      name: "Help Center", 
      url: "https://help.clio.com", 
      icon: "❓",
      description: "Official Clio support."
    },
    { 
      name: "Troubleshooting Guide", 
      url: "/troubleshooting", 
      icon: "🛠️",
      description: "Pre-escalation checklist."
    }
  ];
  return (
    <main className="min-h-screen bg-slate-50 p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">Support Okta Portal</h1>
          <p className="text-slate-500 mt-3 text-lg font-medium">Clio Support Tools</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {apps.map((app) => (
            <a 
              key={app.name}
              href={app.url}
              target={app.url.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group p-8 bg-white rounded-3xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              {/* THIS SECTION HANDLES THE LOGO VS EMOJI */}
              <div className="mb-6 h-20 w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {app.icon.startsWith('/') ? (
                  <img 
                    src={app.icon} 
                    alt={app.name} 
                    className="max-h-full max-w-full object-contain" 
                  />
                ) : (
                  <span className="text-6xl">{app.icon}</span>
                )}
              </div>
              
              <h2 className="text-xl font-bold text-slate-800">{app.name}</h2>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{app.description}</p>
              
              <div className="mt-6 text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                {app.name === "Troubleshoot" ? "View Guide" : "Open App"} 
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}