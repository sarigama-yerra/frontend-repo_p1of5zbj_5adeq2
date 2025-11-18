import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { ProjectsGrid } from '../components/Sections'
import Footer from '../components/Footer'
import InteractiveBackground from '../components/InteractiveBackground'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Footer />
    </div>
  )
}
