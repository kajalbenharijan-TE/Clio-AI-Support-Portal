export default function ClioPortal() {
  const apps = [
    { 
      name: "Slack", 
      url: "https://clio.slack.com/sso/login", 
      icon: "💬",
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
      icon: "✉️",
      description: "Sales content generation."
    },
    { 
      name: "Help Center", 
      url: "https://help.clio.com", 
      icon: "❓",
      description: "Official Clio support."
    },
    { 
      name: "Troubleshoot", 
      url: "/troubleshooting", 
      icon: "🛠️",
      description: "Pre-escalation checklist."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">Clio Employee Gateway</h1>
          <p className="text-slate-500 mt-3 text-lg">Authenticated AI & Support Tools</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {apps.map((app) => (
            <a 
              key={app.name}
              href={app.url}
              target={app.url.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-3xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {app.icon}
              </div>
              <h2 className="text-lg font-bold text-slate-800">{app.name}</h2>
              <p className="text-xs text-slate-400 mt-2">{app.description}</p>
              <div className="mt-4 text-blue-600 font-semibold text-xs">
                {app.name === "Troubleshoot" ? "View Guide →" : "Open App →"}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}