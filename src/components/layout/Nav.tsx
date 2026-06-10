import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { meta } from '../../content/meta'

const NAV_LINKS = [
  { label: 'about', sectionId: 'about' },
  { label: 'work', sectionId: 'work' },
  { label: 'contact', sectionId: 'contact' },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      // Wait two frames for the home page to mount before scrolling
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(sectionId)))
    } else {
      scrollToSection(sectionId)
    }
  }

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-40 transition-all duration-300
        ${scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
        }
      `}
    >
      <nav
        className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <button
          onClick={handleLogoClick}
          className="font-mono text-sm font-medium text-fg hover:text-accent transition-colors"
          aria-label="Scroll to top"
        >
          {meta.name.toLowerCase()}
        </button>

        <ul className="flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, sectionId }) => (
            <li key={label}>
              <button
                onClick={() => handleNavClick(sectionId)}
                className="font-mono text-sm text-muted hover:text-fg transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted hover:text-fg transition-colors"
              aria-label="GitHub profile"
            >
              gh
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
