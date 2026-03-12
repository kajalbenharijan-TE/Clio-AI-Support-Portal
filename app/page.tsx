export default function ClioPortal() {
  const apps = [
    { 
      name: "Slack", 
      url: "https://clio.slack.com/sso/login", 
      icon: "💬",
      description: "Company communications and alerts."
    },
    { 
      name: "NotebookLM", 
      url: "https://notebooklm.google.com/", 
      icon: "📓",
      description: "AI research and document analysis."
    },
    { 
      name: "Letter AI", 
      url: "https://app.letter.ai/sso/clio", 
      icon: "✉️",
      description: "Sales and personalized content generation."
    },
    { 
      name: "Help Center", 
      url: "https://help.clio.com", 
      icon: "❓",
      description: "Official Clio support and documentation."
    }
  ];
  return (
    <main className="min-h-screen bg-slate-50 p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">Clio Employee Gateway</h1>
          <p className="text-slate-500 mt-3 text-lg">One-click access to your essential tools</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{app.description}</p>
              <div className="mt-6 text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Open App →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}