import dynamic from 'next/dynamic'
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"

const SectionFallback = () => (
  <div className="w-full px-1 py-12 sm:px-2" aria-hidden>
    <div className="surface-card mx-auto h-48 max-w-6xl animate-pulse rounded-2xl bg-[hsl(var(--muted))]" />
  </div>
)

const Education = dynamic(() => import("../components/Education"), { loading: () => <SectionFallback /> })
const Experience = dynamic(() => import("../components/Experience"), { loading: () => <SectionFallback /> })
const Projects = dynamic(() => import("../components/Projects"), { loading: () => <SectionFallback /> })
const HonorsAndAwards = dynamic(() => import("../components/HonorsAndAwards"), { loading: () => <SectionFallback /> })
const PositionsOfResponsibility = dynamic(() => import("../components/PositionsOfResponsibility"), { loading: () => <SectionFallback /> })
const ContactMe = dynamic(() => import("../components/ContactMe"), { loading: () => <SectionFallback /> })
const ResumeButton = dynamic(() => import("../components/ResumeButton"), { loading: () => <SectionFallback /> })

export default function Home() {
  return (
    <main
      className="content site-shell pb-16"
      role="main"
      aria-label="Portfolio Home"
    >
      <Navbar />
      <HeroSection />

      <Education />
      <Experience />
      <Projects />
      <HonorsAndAwards />
      <PositionsOfResponsibility />
      <ContactMe />
      <ResumeButton />
    </main>
  )
}
