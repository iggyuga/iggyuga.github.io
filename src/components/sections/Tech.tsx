import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import { techGroups } from '../../content/tech'
import type { TechItem } from '../../content/tech'

function TechIcon({ item }: { item: TechItem }) {
  return (
    <div className="group flex flex-col items-center gap-2.5 p-4 rounded-xl hover:bg-surface-raised transition-colors cursor-default">
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-muted/50 group-hover:fill-fg transition-colors duration-200"
        aria-hidden="true"
      >
        <path d={item.path} />
      </svg>
      <span className="font-mono text-xs text-transparent group-hover:text-muted transition-colors duration-200 whitespace-nowrap">
        {item.name}
      </span>
    </div>
  )
}

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Tech() {
  return (
    <section id="tech" aria-labelledby="tech-heading" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <SectionLabel label="tech" />
          <h2 id="tech-heading" className="sr-only">Technologies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techGroups.map((group) => (
              <motion.div key={group.label} variants={reveal}>
                <p className="font-mono text-xs text-muted/60 uppercase tracking-widest mb-3 px-1">
                  {group.label}
                </p>
                <div className="rounded-2xl border border-border bg-surface p-2">
                  <div className="grid grid-cols-2 gap-1">
                    {group.items.map((item) => (
                      <TechIcon key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
