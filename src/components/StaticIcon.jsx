export default function StaticIcon({ name = "speed", className = "" }) {
  const cn = `h-7 w-7 text-indigo-400 ${className}`;
  switch (name) {
    case "speed":      return (<svg className={cn} viewBox="0 0 24 24" fill="none"><path d="M3 13a9 9 0 1 1 18 0v1a2 2 0 0 1-2 2h-2.6a2 2 0 0 1-1.79-1.106l-.74-1.48a2 2 0 0 0-3.58 0l-.74 1.48A2 2 0 0 1 8.16 16H5a2 2 0 0 1-2-2v-1Z" stroke="currentColor" strokeWidth="1.5"/><path d="M15 9l4-2-2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
    case "graph":      return (<svg className={cn} viewBox="0 0 24 24" fill="none"><path d="M4 20V6m5 14V10m5 10V4m5 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>);
    case "phone":      return (<svg className={cn} viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="18" r="1" fill="currentColor"/></svg>);
    case "lock":       return (<svg className={cn} viewBox="0 0 24 24" fill="none"><rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.5"/></svg>);
    case "calendar":   return (<svg className={cn} viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>);
    case "publish":    return (<svg className={cn} viewBox="0 0 24 24" fill="none"><path d="M12 4v12m0 0l-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="18" width="16" height="2" rx="1" fill="currentColor"/></svg>);
    case "clip":       return (<svg className={cn} viewBox="0 0 24 24" fill="none"><path d="M9.5 10.5l4.7-4.7a3 3 0 1 1 4.2 4.2l-7.8 7.8a4.5 4.5 0 0 1-6.4-6.4l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>);
    case "search":
    default:           return (<svg className={cn} viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>);
  }
}
