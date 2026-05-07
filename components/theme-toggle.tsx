'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function playThemeSound(goingDark: boolean) {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    const t = ctx.currentTime

    // Cascading shimmer — each wave starts slightly after the last
    const waves = goingDark
      ? [[1400, 320], [1100, 280], [850, 240], [650, 200]] as const
      : [[300, 1200], [380, 1500], [480, 1800], [600, 2200]] as const

    waves.forEach(([f0, f1], i) => {
      const delay = i * 0.055
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(f0, t + delay)
      osc.frequency.exponentialRampToValueAtTime(f1, t + delay + 0.22)

      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0, t + delay)
      gain.gain.linearRampToValueAtTime(0.09, t + delay + 0.015)
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.25)

      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(t + delay)
      osc.stop(t + delay + 0.26)
    })
  } catch {
    // AudioContext not available
  }
}

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <button className="rounded-xl border px-3 py-2 text-sm">Theme</button>
  )

  const active = theme === 'system' ? systemTheme : theme
  const isDark = active === 'dark'

  const handleToggle = () => {
    const goingDark = !isDark

    // Theme changes immediately — CSS transition on body handles the smooth fade
    setTheme(goingDark ? 'dark' : 'light')
    playThemeSound(goingDark)

    if (!btnRef.current) return

    // Spin the toggle button
    gsap.fromTo(
      btnRef.current,
      { rotate: 0, scale: 1 },
      { rotate: 360, scale: 1.2, duration: 0.38, ease: 'back.out(2)',
        onComplete: () => gsap.set(btnRef.current, { rotate: 0, scale: 1 }) }
    )

    // Decorative expanding ring — no solid fill, just a subtle pulse
    const rect = btnRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const size = Math.hypot(window.innerWidth, window.innerHeight) * 2.2

    const ring = document.createElement('div')
    ring.style.cssText = `
      position: fixed;
      left: ${cx}px;
      top: ${cy}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      translate: -50% -50%;
      scale: 0;
      border: 1.5px solid ${goingDark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.12)'};
      pointer-events: none;
      z-index: 9998;
    `
    document.body.appendChild(ring)

    gsap.to(ring, {
      scale: 1,
      opacity: 0,
      duration: 0.75,
      ease: 'power2.out',
      onComplete: () => ring.remove(),
    })
  }

  return (
    <button
      ref={btnRef}
      aria-label="Toggle theme"
      className="rounded-xl border px-3 py-2 text-sm"
      onClick={handleToggle}
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
