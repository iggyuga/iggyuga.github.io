import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Compass } from 'lucide-react'
import Head from '../components/ui/Head'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <Head title="Trail's gone cold — Iggy" />
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-md"
        >
          <motion.div
            animate={{ rotate: [0, 15, -10, 5, 0] }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
            className="inline-block mb-6"
            aria-hidden="true"
          >
            <Compass size={48} className="text-muted/40" />
          </motion.div>

          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
            404
          </p>

          <h1 className="text-3xl font-bold text-fg mb-4 tracking-tight">
            Trail's gone cold.
          </h1>

          <p className="text-muted leading-relaxed mb-8">
            This path doesn't exist. Might be a bad link, a wayward redirect, or
            just a trail that was never blazed. Either way, the trailhead isn't here.
          </p>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-fg text-sm font-medium hover:bg-surface hover:border-border-raised transition-colors"
          >
            <ArrowLeft size={15} /> Head back home
          </button>
        </motion.div>
      </div>
    </>
  )
}
