export default function TroubleshootingPage() {
  const steps = [
    { title: "Define the End Goal", detail: "Mention what you need from TE/Solutions/TLs." },
    { title: "Mapping the Workflow", detail: "List exact steps taken. Mention browser tests, cache clearing, etc." },
    { title: "Attempt Reproduction", detail: "Try to mimic the behavior in a Demo Account." },
    { title: "Account ID Audit", detail: "Search email in Admin Panel. Mention both the User ID and Account ID." },
    { title: "Linear Check", detail: "Check if a bug is already filed in Linear for this behavior." }, // NEW STEP 5
    { title: "Technical Escalation (T.E.)", detail: "Consult with T.E. if all above steps are complete." }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">← Back to Gateway</a>
        <div className="mt-8 bg-white rounded-3xl p-10 shadow-sm border border-slate-200">
          <h1 className="text-3xl font-black text-blue-900 mb-6">Troubleshooting Workflow</h1>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">{step.title}</h2>
                  <p className="text-slate-600 mt-2 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}