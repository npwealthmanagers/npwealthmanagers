export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const managers = light ? "var(--gold-soft)" : "var(--navy)";
  const wealth = light ? "var(--gold)" : "var(--brand-red)";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-11 w-11 shrink-0" role="img" aria-label="NP Wealth Managers emblem">
        <defs>
          <linearGradient id="npGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--gold-soft)" />
            <stop offset="50%" stopColor="var(--gold)" />
            <stop offset="100%" stopColor="var(--gold-soft)" />
          </linearGradient>
        </defs>
        <ellipse
          cx="32"
          cy="32"
          rx="27"
          ry="21"
          transform="rotate(-24 32 32)"
          fill="none"
          stroke="url(#npGold)"
          strokeWidth="3"
        />
        <path
          d="M14 46 C24 50 42 44 50 26"
          fill="none"
          stroke="var(--brand-red)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M46 20 L54 22 L50 30 Z" fill="var(--brand-red)" />
        <text
          x="32"
          y="30"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="19"
          fontWeight="700"
        >
          <tspan fill="var(--brand-red)">N</tspan>
          <tspan fill="var(--navy)">P</tspan>
        </text>
        <g>
          <circle cx="24" cy="39" r="2.4" fill="var(--gold)" />
          <path d="M20 50 q4 -7 8 0 z" fill="var(--brand-red)" />
          <circle cx="32" cy="37" r="2.8" fill="var(--gold)" />
          <path d="M27 50 q5 -8 10 0 z" fill="var(--navy)" />
          <circle cx="40" cy="39" r="2.4" fill="var(--gold)" />
          <path d="M36 50 q4 -7 8 0 z" fill="var(--brand-red)" />
        </g>
      </svg>
      <span className="leading-none">
        <span className="block font-display text-lg font-bold tracking-tight">
          <span style={{ color: wealth }}>NP </span>
          <span style={{ color: wealth }}>WEALTH</span>
        </span>
        <span
          className="block font-display text-[0.78rem] font-semibold tracking-[0.28em]"
          style={{ color: managers }}
        >
          MANAGERS
        </span>
      </span>
    </span>
  );
}