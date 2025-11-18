import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Instagram, Video, MessageSquare } from 'lucide-react'

function SocialLink({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-slate-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-slate-800/60' : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md" />
            <span className="font-semibold tracking-tight text-white">Futuric Port</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <SocialLink href="https://discord.com/" label="Discord">
              <MessageSquare className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://www.tiktok.com/" label="TikTok">
              <Video className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/" label="Instagram">
              <Instagram className="h-5 w-5" />
            </SocialLink>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-slate-200 hover:bg-slate-800/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800/60 bg-slate-900/80">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)} className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>
              About
            </NavLink>
            <div className="flex items-center gap-4 pt-2">
              <SocialLink href="https://discord.com/" label="Discord">
                <MessageSquare className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://www.tiktok.com/" label="TikTok">
                <Video className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/" label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
