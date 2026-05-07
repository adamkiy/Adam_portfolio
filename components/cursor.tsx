'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only activate on pointer (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot  = dotRef.current!
    const ring = ringRef.current!

    document.documentElement.style.cursor = 'none'

    let mx = -100, my = -100
    let rx = -100, ry = -100

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      gsap.to(dot, { x: mx, y: my, duration: 0.08, ease: 'power3.out' })
    }

    // Ring follows with lerp for the lagging feel
    let raf: number
    const tick = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      gsap.set(ring, { x: rx, y: ry })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onEnter = () => gsap.to(ring, { scale: 2.2, opacity: 0.6, duration: 0.3, ease: 'power2.out' })
    const onLeave = () => gsap.to(ring, { scale: 1,   opacity: 1,   duration: 0.3, ease: 'power2.out' })
    const onDown  = () => gsap.to(dot,  { scale: 0.5, duration: 0.1 })
    const onUp    = () => gsap.to(dot,  { scale: 1,   duration: 0.1 })

    const attachHover = () => {
      document.querySelectorAll<HTMLElement>('a, button, [role="button"], label').forEach(el => {
        el.style.cursor = 'none'
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachHover()

    // Re-attach when DOM changes (e.g. React re-renders)
    const observer = new MutationObserver(attachHover)
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove',  onMove)
    window.addEventListener('mousedown',  onDown)
    window.addEventListener('mouseup',    onUp)

    return () => {
      document.documentElement.style.cursor = ''
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mousedown',  onDown)
      window.removeEventListener('mouseup',    onUp)
    }
  }, [])

  return (
    <>
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
        style={{ willChange: 'transform' }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/50"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
