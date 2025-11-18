import { motion } from 'framer-motion'

export function ProjectsGrid() {
  const items = [
    { title: 'Cyber UI Kit', tag: 'React / ThreeJS', img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Neon Commerce', tag: 'Next.js / Stripe', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Galaxy Studio', tag: 'ThreeJS / GLSL', img: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur ring-1 ring-inset ring-white/5"
            >
              <img src={p.img} alt="" className="h-48 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.tag}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutContent() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-3xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-slate-300 leading-7"
        >
          I design and build immersive, performance-focused web experiences with a focus on 3D, motion, and clean interfaces. My style blends monochrome palettes with subtle dark-blue accents, inspired by cyberpunk aesthetics.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 grid sm:grid-cols-2 gap-6"
        >
          <div className="rounded-xl border border-slate-800/70 bg-slate-900/40 p-6">
            <p className="text-white font-semibold">Expertise</p>
            <ul className="mt-3 text-slate-300 text-sm space-y-2 list-disc list-inside">
              <li>React, Next.js, Vite</li>
              <li>ThreeJS, GLSL, Spline</li>
              <li>Framer Motion, Radix UI</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-800/70 bg-slate-900/40 p-6">
            <p className="text-white font-semibold">Values</p>
            <ul className="mt-3 text-slate-300 text-sm space-y-2 list-disc list-inside">
              <li>Performance-first</li>
              <li>Clean, future-proof design</li>
              <li>Meaningful micro-interactions</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
