import { useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import StrengthsLanguages from './components/StrengthsLanguages'
import ResumeCta from './components/ResumeCta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'
import useActiveSection from './hooks/useActiveSection'

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'education',
  'certifications',
  'contact',
]

export default function App() {
  useReveal()
  const ids = useMemo(() => SECTION_IDS, [])
  const activeSection = useActiveSection(ids)

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <StrengthsLanguages />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
