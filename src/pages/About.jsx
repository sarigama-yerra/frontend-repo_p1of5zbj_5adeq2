import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AboutContent } from '../components/Sections'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <div className="pt-10" />
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
        <p className="mt-3 text-slate-400">Who I am and how I build.</p>
      </div>
      <AboutContent />
      <Footer />
    </div>
  )
}
