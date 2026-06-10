import { currentlyLines } from '../../content/currently'

export default function CurrentlyWidget() {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 space-y-2.5">
      <p className="font-mono text-xs text-muted uppercase tracking-widest mb-3">
        currently
      </p>
      <ul className="space-y-2">
        {currentlyLines.map((line) => (
          <li key={line} className="text-sm text-fg leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
    </div>
  )
}
