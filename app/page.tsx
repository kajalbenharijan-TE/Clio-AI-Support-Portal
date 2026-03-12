import Link from 'next/link';

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
    // NEW BUTTON ADDED BELOW
    { 
      name: "Help Center", 
      url: "https://help.clio.com", 
      icon: "❓",
      description: "Official Clio support and documentation."
    },
  ];
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b pb-6">
          <h1 className="text-3xl font-bold text-navy-900">Clio Employee Gateway</h1>
          <p className="text-slate-600 mt-2">Authenticated AI & Communication Tools</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apps.map((app) => (
            <a 
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {app.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-800">{app.name}</h2>
              <p className="text-sm text-slate-500 mt-2">{app.description}</p>
              <div className="mt-4 text-blue-600 font-medium text-sm">Launch App →</div>
            </a>
          ))}
        </div>

        <footer className="mt-20 text-center text-slate-400 text-xs">
          Secure Access for Clio Employees Only
        </footer>
      </div>
    </main>
  );
}