import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { meta } from '../../content/meta'

const LINKS = [
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${meta.email}`,
    display: meta.email,
  },
  {
    icon: Github,
    label: 'GitHub',
    href: meta.github,
    display: 'github.com/iggyuga',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: meta.linkedin,
    display: 'linkedin.com/in/ignaciorosas', // TODO: confirm slug
  },
]

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <SectionLabel label="contact" />
          <h2 id="contact-heading" className="sr-only">Contact</h2>

          <div className="max-w-lg">
            <motion.p variants={reveal} className="text-muted leading-relaxed mb-8">
              Best way to reach me is email. I check it, I respond.
            </motion.p>

            <motion.ul variants={reveal} className="space-y-4" role="list">
              {LINKS.map(({ icon: Icon, label, href, display }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="group flex items-center gap-3 text-muted hover:text-fg transition-colors"
                    aria-label={label}
                  >
                    <Icon
                      size={18}
                      className="text-muted/60 group-hover:text-accent transition-colors"
                    />
                    <span className="font-mono text-sm">{display}</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
