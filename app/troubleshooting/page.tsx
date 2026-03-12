export default function TroubleshootingPage() {
  const steps = [
    {
      title: "Define the End Goal",
      detail: "What is the user specifically trying to achieve? (e.g., Accessing Workflows, Syncing Calendar)."
    },
    {
      title: "Mapping the Workflow",
      detail: "List the exact steps taken. Note where the error occurs and capture the timestamp."
    },
    {
      title: "Attempt Reproduction",
      detail: "Try to mimic the behavior in a Demo Account. Does it happen for you, or just the user?"
    },
    {
      title: "Account ID Audit",
      detail: "Search the email in the Admin Panel. Check for multiple IDs (e.g., 383719 vs 342953). Bad data often hides here."
    },
    {
      title: "Technical Escalation (T.E.)",
      detail: "If the above fails, request a T.E. agent to run the 'Reset User Manage Data Job' or 'Split User Record' task."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
          ← Back to Gateway
        </a>
        
        <div className="mt-8 bg-white rounded-3xl p-10 shadow-sm border border-slate-200">
          <h1 className="text-3xl font-black text-blue-900 mb-2">Troubleshooting Workflow</h1>
          <p className="text-slate-500 mb-10">Follow these steps before submitting a T.E. consult.</p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">{step.title}</h2>
                  <p className="text-slate-600 mt-2 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              ⚠️ Critical Check
            </h3>
            <p className="text-amber-800 text-sm mt-2">
              Verify if the email is associated with a different Account ID in the main Admin Panel. If IDs don't match, the Manage User ID needs to be flushed via the Workflows Admin Panel.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}