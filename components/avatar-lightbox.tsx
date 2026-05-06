'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export function AvatarLightbox() {
  const [open, setOpen]       = useState(false)
  const [visible, setVisible] = useState(false)

  const openModal = () => {
    setOpen(true)
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
  }

  const closeModal = useCallback(() => {
    setVisible(false)
    setTimeout(() => setOpen(false), 300)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeModal])

  return (
    <>
      <div
        id="hero-avatar"
        className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={openModal}
        role="button"
        aria-label="View profile photo"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && openModal()}
      >
        <Image src="/me.png" alt="Adam Kayal" fill className="object-cover" sizes="320px" priority />
      </div>

      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${visible ? 'bg-black/75 backdrop-blur-md' : 'bg-transparent'}`}
          onClick={closeModal}
        >
          <div
            className={`relative w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transition-all duration-300 ${visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
          >
            <Image src="/me.png" alt="Adam Kayal" fill className="object-cover" sizes="600px" />
          </div>
        </div>
      )}
    </>
  )
}
