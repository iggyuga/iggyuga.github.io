const year = new Date().getFullYear()

function MountainVanSVG() {
  return (
    <svg
      viewBox="0 0 220 60"
      fill="currentColor"
      className="w-48 text-muted/30"
      aria-hidden="true"
    >
      {/* Background mountain */}
      <path d="M0 55 L35 12 L70 55 Z" opacity="0.5" />
      {/* Foreground mountain */}
      <path d="M45 55 L95 4 L145 55 Z" opacity="0.7" />
      {/* Right hill */}
      <path d="M120 55 L160 22 L200 55 Z" opacity="0.45" />
      {/* Sprinter van silhouette — parked in front */}
      <g transform="translate(148, 36)">
        {/* Body */}
        <rect x="0" y="0" width="52" height="17" rx="2" opacity="0.9" />
        {/* Cab roof step */}
        <rect x="0" y="-5" width="20" height="5" rx="1" opacity="0.9" />
        {/* Windshield cutout */}
        <rect x="1" y="-4" width="17" height="4" rx="1" fill="var(--bg)" />
        {/* Side windows */}
        <rect x="22" y="2" width="10" height="7" rx="1" fill="var(--bg)" opacity="0.8" />
        <rect x="34" y="2" width="10" height="7" rx="1" fill="var(--bg)" opacity="0.8" />
        {/* Wheels */}
        <circle cx="10" cy="17" r="5" fill="var(--bg)" />
        <circle cx="10" cy="17" r="3" opacity="0.9" />
        <circle cx="42" cy="17" r="5" fill="var(--bg)" />
        <circle cx="42" cy="17" r="3" opacity="0.9" />
      </g>
      {/* Ground line */}
      <line x1="0" y1="55" x2="220" y2="55" strokeWidth="1" stroke="currentColor" opacity="0.2" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-[1100px] mx-auto px-6 py-12 flex flex-col items-center gap-6">
        <MountainVanSVG />
        <p className="font-mono text-xs text-muted text-center">
          built with React + Vite · {year} · deployed via GitHub Actions
        </p>
      </div>
    </footer>
  )
}
