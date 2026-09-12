import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'

const CARDS = [
  {
    emoji: '🥾',
    title: 'Hiking',
    body: 'Chattanooga is absurdly close to good trails. Cloudland Canyon, Savage Gulf, Pinhoti. We hike most weekends when the weather cooperates, which in the Southeast means not summer afternoons.',
  },
  {
    emoji: '🛶',
    title: 'Kayaking',
    body: "The Tennessee River runs right through town. When the water's right I'm on it. Flatwater mostly, some moving water when I feel like getting humbled.",
  },
  {
    emoji: '🚐',
    title: 'Van build',
    body: 'I built it out myself — insulation, 12V electrical, bed platform, the full conversion. It\'s the weekend rig: my wife and I load up Friday, find a trailhead, stay out as long as the forecast cooperates. Also an ongoing tinkering project with a Raspberry Pi and more automation than a vehicle probably needs.',
  },
  {
    emoji: '📈',
    title: 'Options trading',
    body: 'A hobby that became a codebase. I sell premium on liquid underlyings, track Greeks obsessively, and built tooling around it. The bot has better discipline than I do.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function OffTheClock() {
  return (
    <section id="off-the-clock" aria-labelledby="off-heading" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <SectionLabel label="off the clock" />
          <h2 id="off-heading" className="sr-only">Off the clock</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARDS.map((card) => (
              <motion.div
                key={card.title}
                variants={reveal}
                className="rounded-2xl border border-border bg-surface p-5 space-y-3"
              >
                <span className="text-2xl" aria-hidden="true">{card.emoji}</span>
                <h3 className="font-medium text-fg text-sm">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.body}</p>
                {/* TODO: add photo placeholder */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
