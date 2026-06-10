import Head from '../components/ui/Head'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Tech from '../components/sections/Tech'
import Work from '../components/sections/Work'
import OffTheClock from '../components/sections/OffTheClock'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Head
        title="Iggy — Full-Stack Engineer"
        description="Full-stack engineer in Chattanooga, TN. I build web apps, automate things, and occasionally let a robot trade my account."
      />
      <Hero />
      <About />
      <Tech />
      <Work />
      <OffTheClock />
      <Contact />
    </>
  )
}
