import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getProject } from '../content/projects'
import Head from '../components/ui/Head'

function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors font-mono"
      aria-label="Back to portfolio"
    >
      <ArrowLeft size={14} /> back
    </button>
  )
}

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.08 },
  }),
}

export default function Project() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/" replace />

  const { title, pitch, tags, meta, caseStudy, liveUrl, liveLabel } = project

  return (
    <>
      <Head
        title={`${title} — Ignacio`}
        description={pitch}
      />
      <div className="min-h-screen pt-24 pb-32">
        <div className="max-w-[1100px] mx-auto px-6">

          {/* Desktop sticky back link */}
          <div className="hidden lg:block">
            <div className="sticky top-28 float-left -ml-36 w-28">
              <BackLink onClick={() => navigate('/')} />
            </div>
          </div>

          {/* Mobile back link */}
          <div className="lg:hidden mb-8">
            <BackLink onClick={() => navigate('/')} />
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="mb-10"
            >
              <h1 className="font-mono text-3xl sm:text-4xl font-bold text-fg mb-3">
                {title}
              </h1>
              <p className="text-muted text-lg leading-relaxed">{pitch}</p>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-5 px-4 py-2 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors"
                >
                  {liveLabel ?? 'View live'} <ArrowUpRight size={15} />
                </a>
              )}
            </motion.div>

            {/* Hero image slot */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="rounded-2xl border border-border bg-surface h-56 flex items-center justify-center mb-8"
            >
              {/* TODO: replace with real screenshot or video */}
              <p className="font-mono text-xs text-muted/40">// TODO: screenshot or demo</p>
            </motion.div>

            {/* Metadata strip */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="grid grid-cols-3 gap-4 rounded-xl border border-border bg-surface p-5 mb-12"
            >
              <div>
                <p className="font-mono text-xs text-muted/60 uppercase tracking-widest mb-1">Role</p>
                <p className="text-sm text-fg">{meta.role}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted/60 uppercase tracking-widest mb-1">Timeframe</p>
                <p className="text-sm text-fg">{meta.timeframe}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-muted/60 uppercase tracking-widest mb-1">Stack</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {meta.stack.map((s) => (
                    <span key={s} className="font-mono text-xs px-1.5 py-0.5 rounded bg-surface-raised text-muted border border-border">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Case study sections */}
            {[
              { heading: 'Problem', body: caseStudy.problem },
              { heading: 'Approach', body: caseStudy.approach },
              {
                heading: 'Architecture',
                body: caseStudy.architectureNote,
                isCode: true,
              },
              { heading: 'Outcome', body: caseStudy.outcome },
            ].map(({ heading, body, isCode }, i) => (
              <motion.section
                key={heading}
                custom={i + 3}
                initial="hidden"
                animate="show"
                variants={reveal}
                aria-labelledby={`cs-${heading.toLowerCase()}`}
                className="mb-10"
              >
                <h2
                  id={`cs-${heading.toLowerCase()}`}
                  className="font-mono text-xs text-muted uppercase tracking-widest mb-3"
                >
                  // {heading.toLowerCase()}
                </h2>
                {isCode ? (
                  <p className="font-mono text-sm text-muted/80 leading-relaxed bg-surface border border-border rounded-xl p-4">
                    {body}
                  </p>
                ) : (
                  <p className="text-muted leading-relaxed">{body}</p>
                )}
              </motion.section>
            ))}

            {/* Lessons */}
            <motion.section
              custom={7}
              initial="hidden"
              animate="show"
              variants={reveal}
              aria-labelledby="cs-lessons"
              className="mb-10"
            >
              <h2
                id="cs-lessons"
                className="font-mono text-xs text-muted uppercase tracking-widest mb-3"
              >
                // lessons
              </h2>
              <ul className="space-y-4">
                {caseStudy.lessons.map((lesson, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono text-accent mt-0.5 select-none" aria-hidden="true">—</span>
                    <p className="text-muted leading-relaxed text-sm">{lesson}</p>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Tags */}
            <motion.div
              custom={8}
              initial="hidden"
              animate="show"
              variants={reveal}
              className="flex flex-wrap gap-2 pt-6 border-t border-border"
            >
              {tags.map((tag) => (
                <span key={tag} className="font-mono text-xs px-2 py-1 rounded-md bg-surface border border-border text-muted">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
