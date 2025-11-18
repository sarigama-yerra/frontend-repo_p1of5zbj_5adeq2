import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Futuristic 3D Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-xl text-slate-200"
        >
          Clean transitions, subtle dark-blue accents, and an interactive 3D hero inspired by cyberpunk aesthetics.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-medium shadow hover:opacity-90 transition">
            Explore Projects
          </a>
          <a href="#contact" className="px-5 py-3 rounded-lg border border-slate-700 text-white hover:bg-slate-800/60 transition">
            Contact
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/60" />
    </section>
  )
}
