import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useKonamiCode } from '../../hooks/useKonamiCode'

export default function KonamiCode() {
  const [active, setActive] = useState(false)

  const handleActivate = useCallback(() => {
    setActive(true)
    setTimeout(() => setActive(false), 4500)
  }, [])

  useKonamiCode(handleActivate)

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="
            fixed bottom-8 right-8 z-50
            flex items-center gap-3
            rounded-2xl border border-border bg-surface px-5 py-4
            shadow-2xl shadow-black/40
          "
        >
          <span className="text-2xl" aria-hidden="true">🚐</span>
          <div>
            <p className="text-sm font-medium text-fg">You found the van.</p>
            <p className="text-xs text-muted font-mono mt-0.5">achievement unlocked.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
