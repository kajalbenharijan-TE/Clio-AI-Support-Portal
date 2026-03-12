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
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-12">Clio Employee Gateway</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" className="p-8 bg-white rounded-2xl shadow border hover:border-blue-500 transition-all">
              <div className="text-5xl mb-4">{app.icon}</div>
              <h2 className="text-xl font-bold">{app.name}</h2>
              <div className="mt-4 text-blue-600 font-semibold">Open App →</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
