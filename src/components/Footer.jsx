export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/40 backdrop-blur py-8">
      <div className="mx-auto max-w-6xl px-4 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Futuric Port. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@example.com" className="hover:text-white transition">Email</a>
          <a href="https://discord.com/" className="hover:text-white transition" target="_blank" rel="noreferrer">Discord</a>
          <a href="https://www.instagram.com/" className="hover:text-white transition" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
