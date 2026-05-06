'use client'

import Image from 'next/image'

export type Project = {
  title: string
  description: string
  tags: string[]
  eyebrow?: string
  href?: string
  secondHref?: string
  demoHref?: string
  image?: string
  imageAlt?: string
}

export function ProjectCard({ title, description, tags, eyebrow, href, secondHref, demoHref, image, imageAlt }: Project) {
  const openPrimary = () => {
    if (href) window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="card !p-4 md:!p-5 hover:shadow-md transition-shadow flex flex-col gsap-card group overflow-visible cursor-pointer"
      onClick={openPrimary}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && openPrimary()}
    >
      {image && (
        <div className="relative mb-4 overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-sm aspect-[16/8] transition-[transform,box-shadow] duration-500 ease-out group-hover:scale-[1.09] group-hover:shadow-2xl group-hover:z-10">
          <Image src={image} alt={imageAlt || title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
        </div>
      )}
      {eyebrow && <p className="text-xs uppercase tracking-widest opacity-60 mb-1">{eyebrow}</p>}
      <h3 className="text-lg md:text-xl font-semibold leading-tight">{title}</h3>
      <p className="mt-1.5 text-sm md:text-[15px] opacity-80 flex-1">{description}</p>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="rounded-full border px-2.5 py-1 text-[11px] md:text-xs">{t}</span>)}
      </div>
      {(href || demoHref) && (
        <div className="mt-4 flex flex-wrap gap-4">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium nav no-underline transition-transform duration-150 hover:scale-110 active:scale-95 inline-block"
              onClick={e => e.stopPropagation()}
            >
              View Code →
            </a>
          )}
          {secondHref && (
            <a
              href={secondHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium nav no-underline transition-transform duration-150 hover:scale-110 active:scale-95 inline-block"
              onClick={e => e.stopPropagation()}
            >
              View Server →
            </a>
          )}
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium nav no-underline transition-transform duration-150 hover:scale-110 active:scale-95 inline-block"
              onClick={e => e.stopPropagation()}
            >
              Watch Demo →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
