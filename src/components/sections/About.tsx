import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import CurrentlyWidget from '../ui/CurrentlyWidget'
import { meta } from '../../content/meta'

const PARAGRAPHS = [
  "I've been writing software for ten years — TypeScript and React on the front end, C# and .NET on the back end, with enough Python to get into trouble in between. I like systems that hold up under pressure and code that's honest about what it's doing.",
  "I'm based in Chattanooga, TN — good trails nearby, river runs through town. Weekdays I'm heads-down on building and deploying software; weekends my wife and I are usually somewhere in the woods or on the water. I built out the van for it — insulation, electrical, bed platform, the whole thing — so we can get deep into a trip without roughing it too hard. Have at least one Raspberry Pi running something at any given moment.",
  "I'm not looking for a job — I have one I like. This site exists because it's nice to have a corner of the internet that's actually yours. If you want to talk code, van builds, options, or anything else: email's below.",
]

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <SectionLabel label="about" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
            {/* Text */}
            <div>
              <h2 id="about-heading" className="sr-only">About</h2>
              <div className="space-y-5">
                {PARAGRAPHS.map((p, i) => (
                  <motion.p
                    key={i}
                    variants={reveal}
                    className="text-muted leading-relaxed text-base"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Avatar + Currently */}
            <motion.div variants={reveal} className="space-y-5">
              <motion.div
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-40 h-40 lg:w-full lg:h-auto lg:aspect-square rounded-2xl overflow-hidden border border-border cursor-default"
              >
                <img
                  src={meta.avatar}
                  alt="Ignacio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={280}
                  height={280}
                />
              </motion.div>

              <CurrentlyWidget />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
