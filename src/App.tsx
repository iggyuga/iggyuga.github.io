import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import SkipLink from './components/ui/SkipLink'
import KonamiCode from './components/ui/KonamiCode'
import Home from './pages/Home'

const Project = lazy(() => import('./pages/Project'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <SkipLink />
        <Nav />
        <main id="main-content">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:slug" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <KonamiCode />
      </HashRouter>
    </MotionConfig>
  )
}
