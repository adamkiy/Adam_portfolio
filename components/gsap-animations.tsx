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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
