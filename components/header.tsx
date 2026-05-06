'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import { Download } from 'lucide-react'

const nav = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' }
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 backdrop-blur bg-[rgb(var(--bg))]/70">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="nav text-lg font-bold">Adam Kayal</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="nav text-sm">{n.label}</a>
          ))}
          <a href="/Adam_Resume.pdf" target="_blank" data-btn className="inline-flex items-center gap-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium no-underline">
            <Download className="w-3.5 h-3.5" />Download CV
          </a>
          <ThemeToggle />
        </nav>
        <button onClick={() => setOpen(!open)} data-btn className="md:hidden rounded-xl border px-3 py-2 text-sm">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-[rgb(var(--bg))]">
          <div className="container py-3 flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="nav text-base" onClick={() => setOpen(false)}>{n.label}</a>
            ))}
            <a href="/Adam_Resume.pdf" target="_blank" data-btn className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium no-underline">
              <Download className="w-3.5 h-3.5" />Download CV
            </a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
