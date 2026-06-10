import { useEffect, useRef } from 'react'

const SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export function useKonamiCode(onActivate: () => void) {
  const progress = useRef(0)
  const callbackRef = useRef(onActivate)
  callbackRef.current = onActivate

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === SEQUENCE[progress.current]) {
        progress.current++
        if (progress.current === SEQUENCE.length) {
          callbackRef.current()
          progress.current = 0
        }
      } else {
        progress.current = e.key === SEQUENCE[0] ? 1 : 0
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])
}
