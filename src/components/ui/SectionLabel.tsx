type Props = {
  label: string
  className?: string
}

export default function SectionLabel({ label, className = '' }: Props) {
  return (
    <p
      className={`font-mono text-sm text-muted mb-8 tracking-wide select-none ${className}`}
      aria-hidden="true"
    >
      {'// '}{label}
    </p>
  )
}
