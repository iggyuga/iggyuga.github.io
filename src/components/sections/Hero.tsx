import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'

const STATS = '10 yrs of code · van lifer';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,129,58,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-40 pb-28 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-sm text-muted mb-4 tracking-wide"
          >
            // hey there
          </motion.p>

          <motion.h1
            variants={item}
            className="text-6xl sm:text-7xl font-bold text-fg leading-none tracking-tight mb-6"
          >
            I'm Ignacio.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl text-muted leading-relaxed mb-4 max-w-lg"
          >
            Senior full-stack software engineer. Ten years in. In the week, I'm
            writing code and deploying code. Writing code again and deploying
            code again until my eyes go cross-eyed. On the weekend, I come alive
            with my wife as we travel wherever we can in the van I built out.
          </motion.p>

          <motion.p
            variants={item}
            className="font-mono text-sm text-muted/70 mb-10 tracking-wide"
            aria-label={STATS}
          >
            {STATS}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo('work')}
              className="
                flex items-center gap-2 px-5 py-2.5 rounded-xl
                bg-accent text-white font-medium text-sm
                hover:bg-accent/90 transition-colors
              "
            >
              See what I've built <ArrowDown size={15} />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="
                flex items-center gap-2 px-5 py-2.5 rounded-xl
                border border-border text-fg font-medium text-sm
                hover:border-border-raised hover:bg-surface transition-colors
              "
            >
              Say hi <Mail size={15} />
            </button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
