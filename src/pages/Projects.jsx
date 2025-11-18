import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ProjectsGrid } from '../components/Sections'

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <div className="pt-10" />
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <p className="mt-3 text-slate-400">A curated selection of recent work.</p>
      </div>
      <ProjectsGrid />
      <Footer />
    </div>
  )
}
