"use client";
import { useState, useEffect } from 'react';

type SOPStep = {
  id: string;
  title: string;
  desc: string;
  tip: string;
};

export default function TroubleshootingPage() {
  const [darkMode, setDarkMode] = useState(true);

  // Form state
  const [issue, setIssue] = useState("");
  const [expected, setExpected] = useState("");
  const [accountId, setAccountId] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [checkedSteps, setCheckedSteps] = useState<string[]>([]);

  // Interactive state
  const [completedSOP, setCompletedSOP] = useState<number[]>([]);
  const [expandedSOP, setExpandedSOP] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [resetConfirm, setResetConfirm] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const stepsSOP: SOPStep[] = [
    { id: 's1', title: "Self-Solve First",      desc: "Use NotebookLM & Demo environment. If it breaks in Demo, impact is high.",
      tip: "Start with NotebookLM — search by error keywords, not ticket numbers." },
    { id: 's2', title: "Reproduce Personally",  desc: "Attempt to break it yourself in the customer account or Demo.",
      tip: "Screen-share with the customer if you can't reproduce in Demo." },
    { id: 's3', title: "Reproduction Steps",    desc: "List exact, ordered actions taken to reach the error.",
      tip: "Number each step. Include which page or tab you were on." },
    { id: 's4', title: "Capture Media",         desc: "Full-screen screenshots/video including the browser URL bar.",
      tip: "Loom for video, full-page screenshot tools for images. URL bar is non-negotiable." },
    { id: 's5', title: "Verify IDs",            desc: "Confirm Account ID and specific User ID (not just requester).",
      tip: "The requester may be reporting on behalf of another user — check who's actually affected." },
    { id: 's6', title: "Articulate Gap",        desc: "Clearly define Expected vs. Actual behavior.",
      tip: "Two sentences: 'I expected X. Instead, Y happened.'" },
    { id: 's7', title: "Complete Template",     desc: "Fill out every field in the TE Consult macro (no one-liners).",
      tip: "One-liners get sent back. TE needs context to escalate efficiently." },
    { id: 's8', title: "Submit to T.E.",        desc: "Consult Tech Esc before going to Devs to document gaps.",
      tip: "T.E. is a filter — skipping them fragments engineering visibility." }
  ];

  const builderOptions = [
    "Tested in Demo Environment",
    "Searched Notebook / Letter AI",
    "Verified Account & User ID",
    "Collected Media (URL bar included)",
    "Reproduced in Customer Account"
  ];

  // Hydrate from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
    try {
      const saved = localStorage.getItem('consult-draft');
      if (saved) {
        const d = JSON.parse(saved);
        setIssue(d.issue || '');
        setExpected(d.expected || '');
        setAccountId(d.accountId || '');
        setMediaUrl(d.mediaUrl || '');
        setCheckedSteps(d.checkedSteps || []);
        setCompletedSOP(d.completedSOP || []);
      }
    } catch {}
    setHydrated(true);
  }, []);

  // Auto-save (debounced)
  useEffect(() => {
    if (!hydrated) return;
    const payload = { issue, expected, accountId, mediaUrl, checkedSteps, completedSOP };
    const id = setTimeout(() => {
      localStorage.setItem('consult-draft', JSON.stringify(payload));
    }, 400);
    return () => clearTimeout(id);
  }, [issue, expected, accountId, mediaUrl, checkedSteps, completedSOP, hydrated]);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const handleCheck = (step: string) =>
    setCheckedSteps(prev => prev.includes(step) ? prev.filter(s => s !== step) : [...prev, step]);

  const toggleSOP = (idx: number) =>
    setCompletedSOP(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);

  const resetAll = () => {
    if (!resetConfirm) {
      setResetConfirm(true);
      setTimeout(() => setResetConfirm(false), 3000);
      return;
    }
    setIssue(''); setExpected(''); setAccountId(''); setMediaUrl('');
    setCheckedSteps([]); setCompletedSOP([]);
    setResetConfirm(false);
  };

  const buildScript = () => `*TE CONSULT REQUEST*
──────────────────────────────
*ISSUE:* ${issue || '—'}
*EXPECTED:* ${expected || '—'}
*ACCOUNT/USER ID:* ${accountId || '—'}
*MEDIA:* ${mediaUrl || '—'}

*TROUBLESHOOTING PERFORMED:*
${checkedSteps.length ? checkedSteps.map(s => `✅ ${s}`).join('\n') : '— (none checked)'}

*RESOURCES:* NotebookLM, Letter AI, Demo Env.`;

  const ready = Boolean(issue && accountId);

  const generateScript = async () => {
    if (!ready) return;
    try {
      await navigator.clipboard.writeText(buildScript());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Copy failed — select the preview below and copy manually.');
    }
  };

  // Keyboard shortcut: Cmd/Ctrl+Enter to copy
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        generateScript();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issue, expected, accountId, mediaUrl, checkedSteps]);

  // Progress
  const sopPct = Math.round((completedSOP.length / stepsSOP.length) * 100);
  const fieldsFilled = [issue, expected, accountId, mediaUrl].filter(Boolean).length;
  const fieldsPct = Math.round((fieldsFilled / 4) * 100);
  const checkPct = Math.round((checkedSteps.length / builderOptions.length) * 100);
  const overall = Math.round((sopPct + fieldsPct + checkPct) / 3);

  // Theme tokens — dark mode gets glass + glow, light stays clean
  const t = {
    page: darkMode ? 'text-slate-100' : 'bg-slate-100 text-slate-900',
    card: darkMode
      ? 'bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]'
      : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/50',
    cardHighlight: darkMode
      ? 'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent'
      : '',
    statCard: darkMode
      ? 'bg-slate-900/50 backdrop-blur-md border border-white/[0.06]'
      : 'bg-white border border-slate-200',
    heading: darkMode ? 'text-white' : 'text-slate-900',
    bodyText: darkMode ? 'text-slate-200' : 'text-slate-700',
    mutedText: darkMode ? 'text-slate-400' : 'text-slate-500',
    input: darkMode
      ? 'bg-slate-950/60 border-white/[0.08] text-white placeholder-slate-500 focus:border-blue-400/60 focus:bg-slate-950 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]'
      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white',
    checkLabel: darkMode
      ? 'border-white/[0.06] bg-slate-950/40 hover:bg-slate-950/70 hover:border-white/[0.12]'
      : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300',
    checkLabelActive: darkMode
      ? 'border-blue-400/50 bg-blue-500/[0.08] shadow-[0_0_0_1px_rgba(59,130,246,0.2)_inset]'
      : 'border-blue-500 bg-blue-50',
    sopItem: darkMode
      ? 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]'
      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50',
    sopItemDone: darkMode
      ? 'border-blue-400/40 bg-blue-500/[0.08] shadow-[0_0_0_1px_rgba(59,130,246,0.15)_inset]'
      : 'border-blue-500 bg-blue-50/60',
    preview: darkMode
      ? 'bg-[#05070E] border-white/[0.08] text-slate-200'
      : 'bg-slate-900 border-slate-800 text-slate-100',
    navBtn: darkMode
      ? 'bg-white/[0.04] backdrop-blur-md border-white/[0.1] text-blue-300 hover:bg-white/[0.08]'
      : 'bg-white border-slate-200 text-slate-600 shadow-sm',
    backLink: darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700',
    progressTrack: darkMode ? 'bg-white/[0.06]' : 'bg-slate-200',
    resetBtn: darkMode
      ? 'bg-white/[0.04] border-white/[0.08] hover:border-white/[0.14] hover:bg-white/[0.08] text-slate-200'
      : 'bg-white border-slate-300 hover:bg-slate-50 text-slate-700',
    kbd: darkMode ? 'border-white/[0.1] bg-white/[0.04] text-slate-200' : 'border-slate-300 bg-slate-100 text-slate-600',
    badgeMuted: darkMode ? 'bg-white/[0.06] text-slate-300' : 'bg-slate-100 text-slate-600',
    badgeStep: darkMode ? 'bg-white/[0.06] text-slate-300' : 'bg-slate-100 text-slate-500',
  };

  return (
    <main className={`relative min-h-screen py-10 px-4 transition-colors duration-500 antialiased ${t.page}`}>

      {/* Ambient background (dark mode only) */}
      {darkMode && (
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 15% -10%, rgba(59, 130, 246, 0.18), transparent 60%),
              radial-gradient(ellipse 50% 40% at 85% 110%, rgba(99, 102, 241, 0.14), transparent 60%),
              radial-gradient(ellipse 40% 30% at 50% 50%, rgba(59, 130, 246, 0.04), transparent 70%),
              #05080F
            `
          }}
        />
      )}

      <div className="max-w-7xl mx-auto relative">

        {/* Nav */}
        <div className="flex justify-between items-center mb-8">
          <a href="/" className={`text-sm font-bold flex items-center gap-2 transition-colors ${t.backLink}`}>
            ← Back to Dashboard
          </a>
          <div className="flex items-center gap-2">
            <button onClick={resetAll}
              className={`px-4 py-2.5 rounded-2xl border font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${
                resetConfirm
                  ? 'bg-red-500 border-red-500 text-white hover:bg-red-600 shadow-[0_0_20px_-4px_rgba(239,68,68,0.6)]'
                  : t.resetBtn
              }`}>
              {resetConfirm ? '⚠ Confirm' : '↻ Reset'}
            </button>
            <button onClick={toggleTheme}
              className={`px-5 py-2.5 rounded-2xl border-2 font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 ${t.navBtn}`}>
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>

        {/* Header + readiness ring */}
        <div className="mb-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-5">
            <div>
              <h1 className={`text-3xl md:text-4xl font-black tracking-tight ${t.heading}`}>
                Troubleshooting<span className="text-blue-500"> Workflow</span>
              </h1>
              <p className={`mt-1 text-sm ${t.mutedText}`}>
                Walk the SOP, build your consult, copy to Slack — in one pass.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${t.mutedText}`}>Overall Readiness</p>
                <p className={`text-2xl font-black ${overall >= 80 ? 'text-blue-400' : t.heading}`}>{overall}%</p>
              </div>
              <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
                <circle cx="28" cy="28" r="24" strokeWidth="5" fill="none"
                  className={darkMode ? 'stroke-white/[0.08]' : 'stroke-slate-200'} />
                <circle cx="28" cy="28" r="24" strokeWidth="5" fill="none" strokeLinecap="round"
                  className={`stroke-blue-500 transition-all duration-500 ${darkMode ? 'drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]' : ''}`}
                  strokeDasharray={`${(overall / 100) * 150.8} 150.8`} />
              </svg>
            </div>
          </div>

          {/* Mini stat bars */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'SOP Steps',   pct: sopPct,    count: `${completedSOP.length}/8` },
              { label: 'Form Fields', pct: fieldsPct, count: `${fieldsFilled}/4` },
              { label: 'Checklist',   pct: checkPct,  count: `${checkedSteps.length}/5` },
            ].map(m => (
              <div key={m.label} className={`px-4 py-3 rounded-xl ${t.statCard}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${t.mutedText}`}>{m.label}</span>
                  <span className={`text-[10px] font-black ${m.pct >= 100 ? 'text-blue-400' : t.bodyText}`}>{m.count}</span>
                </div>
                <div className={`h-1.5 rounded-full ${t.progressTrack} overflow-hidden`}>
                  <div
                    className={`h-full bg-blue-500 transition-all duration-500 rounded-full ${darkMode && m.pct > 0 ? 'shadow-[0_0_8px_rgba(59,130,246,0.6)]' : ''}`}
                    style={{ width: `${m.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* SOP CARD */}
          <section className={`relative overflow-hidden p-8 rounded-[2rem] transition-colors ${t.card} ${t.cardHighlight}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <h2 className={`text-2xl font-black tracking-tight ${t.heading}`}>Troubleshooting Guide</h2>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                completedSOP.length === stepsSOP.length
                  ? `bg-blue-600 text-white ${darkMode ? 'shadow-[0_0_16px_-2px_rgba(59,130,246,0.6)]' : ''}`
                  : t.badgeMuted
              }`}>
                {completedSOP.length} / {stepsSOP.length}
              </span>
            </div>
            <p className={`text-xs mb-6 ${t.mutedText}`}>
              Click a step to mark it complete. Click <strong>ⓘ</strong> for a pro tip.
            </p>

            <ol className="space-y-2.5">
              {stepsSOP.map((step, i) => {
                const done = completedSOP.includes(i);
                const open = expandedSOP === i;
                return (
                  <li key={step.id}>
                    <div
                      onClick={() => toggleSOP(i)}
                      className={`cursor-pointer border rounded-2xl p-4 transition-all ${done ? t.sopItemDone : t.sopItem}`}
                    >
                      <div className="flex gap-4 items-start">
                        <div
                          className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full font-black text-[12px] transition-all ${
                            done
                              ? `bg-blue-600 text-white ${darkMode ? 'shadow-[0_0_16px_-2px_rgba(59,130,246,0.7)]' : 'shadow-md shadow-blue-500/30'}`
                              : t.badgeStep
                          }`}
                        >
                          {done ? '✓' : String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className={`text-sm font-bold leading-tight ${done ? t.mutedText : t.heading} ${done ? 'line-through decoration-2' : ''}`}>
                              {step.title}
                            </h3>
                            <button
                              onClick={(e) => { e.stopPropagation(); setExpandedSOP(open ? null : i); }}
                              className={`flex-shrink-0 text-[11px] font-black w-6 h-6 rounded-full transition-colors ${
                                open
                                  ? 'bg-blue-600 text-white'
                                  : `${t.badgeMuted} hover:opacity-80`
                              }`}
                              aria-label="Toggle tip"
                            >
                              ⓘ
                            </button>
                          </div>
                          <p className={`mt-1 text-[12.5px] leading-relaxed ${t.bodyText}`}>{step.desc}</p>
                          {open && (
                            <div className={`mt-3 p-3 rounded-xl text-[12px] leading-relaxed border-l-4 border-blue-500 ${
                              darkMode ? 'bg-blue-500/[0.08] text-blue-100' : 'bg-blue-50 text-blue-900'
                            }`}>
                              <span className="font-bold">Pro tip · </span>{step.tip}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* BUILDER CARD */}
          <section className={`relative overflow-hidden p-8 rounded-[2rem] transition-colors ${t.card} ${t.cardHighlight}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🚀</span>
              <h2 className={`text-2xl font-black tracking-tight ${t.heading}`}>Consult Builder</h2>
            </div>
            <p className={`text-xs mb-6 ${t.mutedText}`}>
              Preview updates live.{" "}
              <kbd className={`px-1.5 py-0.5 rounded border text-[10px] font-bold ${t.kbd}`}>⌘</kbd>
              <span className="mx-1">+</span>
              <kbd className={`px-1.5 py-0.5 rounded border text-[10px] font-bold ${t.kbd}`}>Enter</kbd>
              {" "}to copy.
            </p>

            {/* Inputs */}
            <div className="space-y-3 mb-6">
              <div>
                <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1.5 ${t.mutedText}`}>
                  Issue
                  {issue && <span className="text-blue-400 normal-case tracking-normal ml-2 font-semibold">· {issue.length} chars</span>}
                </label>
                <input value={issue} placeholder="What is happening?"
                  className={`w-full p-3 rounded-xl border text-sm outline-none transition-all ${t.input}`}
                  onChange={(e) => setIssue(e.target.value)} />
              </div>
              <div>
                <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1.5 ${t.mutedText}`}>Expected Behavior</label>
                <input value={expected} placeholder="What should happen instead?"
                  className={`w-full p-3 rounded-xl border text-sm outline-none transition-all ${t.input}`}
                  onChange={(e) => setExpected(e.target.value)} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1.5 ${t.mutedText}`}>Account / User ID</label>
                  <input value={accountId} placeholder="e.g. 12345678"
                    className={`w-full p-3 rounded-xl border text-sm outline-none transition-all ${t.input}`}
                    onChange={(e) => setAccountId(e.target.value)} />
                </div>
                <div>
                  <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1.5 ${t.mutedText}`}>G-Drive Media URL</label>
                  <input value={mediaUrl} placeholder="https://drive.google.com/..."
                    className={`w-full p-3 rounded-xl border text-sm outline-none transition-all ${t.input}`}
                    onChange={(e) => setMediaUrl(e.target.value)} />
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${t.mutedText}`}>Verification Checklist</p>
                <span className={`text-[10px] font-black ${checkedSteps.length === builderOptions.length ? 'text-blue-400' : t.mutedText}`}>
                  {checkedSteps.length} / {builderOptions.length}
                </span>
              </div>
              <div className="space-y-1.5">
                {builderOptions.map(opt => {
                  const active = checkedSteps.includes(opt);
                  return (
                    <label key={opt}
                      className={`flex items-center gap-3 cursor-pointer px-3 py-2 rounded-xl border transition-all ${active ? t.checkLabelActive : t.checkLabel}`}>
                      <input type="checkbox" checked={active} onChange={() => handleCheck(opt)}
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
                      <span className={`text-[13px] font-medium ${active ? t.heading : t.bodyText}`}>{opt}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Live preview — terminal style */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${t.mutedText}`}>Live Preview</p>
                <span className={`text-[10px] font-bold flex items-center gap-1.5 ${ready ? 'text-blue-400' : t.mutedText}`}>
                  <span className={`inline-block w-1.5 h-1.5 rounded-full ${ready ? 'bg-blue-400 animate-pulse' : 'bg-slate-500'}`} />
                  {ready ? 'READY' : 'DRAFT'}
                </span>
              </div>
              <div className={`rounded-xl border overflow-hidden ${t.preview}`}>
                {/* Terminal chrome */}
                <div className={`flex items-center gap-1.5 px-3 py-2 border-b ${darkMode ? 'border-white/[0.06] bg-white/[0.02]' : 'border-slate-800 bg-slate-800/50'}`}>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className={`ml-2 text-[10px] font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>consult.slack</span>
                </div>
                <pre className="p-4 text-[11.5px] leading-relaxed font-mono whitespace-pre-wrap break-words max-h-64 overflow-auto">
                  {buildScript()}
                </pre>
              </div>
            </div>

            {/* Copy action */}
            <button onClick={generateScript} disabled={!ready}
              className={`w-full py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-xs transition-all ${
                copied
                  ? `bg-emerald-500 text-white shadow-lg ${darkMode ? 'shadow-[0_0_32px_-4px_rgba(16,185,129,0.6)]' : 'shadow-emerald-500/30'}`
                  : ready
                    ? `bg-blue-600 text-white hover:bg-blue-500 active:scale-[0.99] ${darkMode ? 'shadow-[0_0_32px_-4px_rgba(59,130,246,0.6)]' : 'shadow-lg shadow-blue-500/30'}`
                    : darkMode ? 'bg-white/[0.04] text-slate-500 border border-white/[0.06] cursor-not-allowed' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}>
              {copied
                ? '✓  Copied to Clipboard'
                : ready
                  ? '📋  Generate & Copy Consult'
                  : 'Fill Issue & Account ID to continue'}
            </button>
          </section>

        </div>

        <footer className="mt-16 text-center">
          <p className={`text-[10px] font-bold tracking-[0.4em] uppercase ${t.mutedText} opacity-60`}>
            Clio CS Excellence // Troubleshooting SOP · Auto-saved to your browser
          </p>
        </footer>

      </div>
    </main>
  );
}
