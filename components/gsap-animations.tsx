'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function GsapAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero entrance — avatar pops in, then text cascades down
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('#hero-avatar',   { opacity: 0, scale: 0.75, duration: 0.65, ease: 'back.out(1.7)' })
      .from('#hero-label',    { opacity: 0, y: 18, duration: 0.4 }, '-=0.15')
      .from('#hero-name',     { opacity: 0, y: 32, duration: 0.55 }, '-=0.1')
      .from('#hero-tagline',  { opacity: 0, y: 22, duration: 0.45 }, '-=0.15')
      .from('#hero-buttons',  { opacity: 0, y: 16, duration: 0.4 }, '-=0.15')

    // Section headings fade up on scroll
    gsap.utils.toArray<Element>('.gsap-fade-up').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%' },
        opacity: 0,
        y: 36,
        duration: 0.6,
        ease: 'power2.out',
      })
    })

    // Project cards — each one animates when it enters the viewport
    gsap.utils.toArray<Element>('.gsap-card').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 92%' },
        opacity: 0,
        y: 48,
        duration: 0.55,
        ease: 'power2.out',
      })
    })

    // Magnetic button effect
    const cleanups: (() => void)[] = []

    gsap.utils.toArray<HTMLElement>('[data-btn]').forEach((btn) => {
      const handleMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.22
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.22
        gsap.to(btn, { x: dx, y: dy - 3, duration: 0.25, ease: 'power2.out' })
      }
      const handleEnter = () => {
        btn.addEventListener('mousemove', handleMove)
        gsap.to(btn, { y: -4, duration: 0.3, ease: 'power2.out' })
      }
      const handleLeave = () => {
        btn.removeEventListener('mousemove', handleMove)
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
      }
      const handleDown = () => {
        gsap.to(btn, { scale: 0.92, duration: 0.1, ease: 'power2.in' })
      }
      const handleUp = () => {
        gsap.to(btn, { scale: 1, x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1.5, 0.4)' })
      }

      btn.addEventListener('mouseenter', handleEnter)
      btn.addEventListener('mouseleave', handleLeave)
      btn.addEventListener('mousedown', handleDown)
      btn.addEventListener('mouseup', handleUp)

      cleanups.push(() => {
        btn.removeEventListener('mouseenter', handleEnter)
        btn.removeEventListener('mouseleave', handleLeave)
        btn.removeEventListener('mousemove', handleMove)
        btn.removeEventListener('mousedown', handleDown)
        btn.removeEventListener('mouseup', handleUp)
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return null
}
