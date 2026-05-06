import Image from 'next/image'
import About from '@/content/about.mdx'
import { projects } from '@/content/projects'
import { experiences } from '@/content/experience'
import { ProjectCard } from '@/components/project-card'
import { ExperienceItem } from '@/components/experience-item'
import { Section } from '@/components/section'
import { ContactForm } from '@/components/contact-form'
import { GsapAnimations } from '@/components/gsap-animations'
import { Mail, FileText, Download, Phone } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)



export default function HomePage() {
  return (
    <>
      <GsapAnimations />

      {/* Hero */}
      <section id="home" className="section !pb-8 md:!pb-10">
        <div className="container text-center">
          <div id="hero-avatar" className="flex justify-center mb-4">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-md">
              <Image src="/me.png" alt="Adam Kayal" fill className="object-cover" sizes="320px" priority />
            </div>
          </div>

          <p id="hero-label" className="text-sm uppercase tracking-widest opacity-70">Hello, I&apos;m</p>

          <h1 id="hero-name" className="mt-6 text-5xl md:text-7xl font-extrabold">
            <span className="mx-3 inline-block rounded-xl bg-pink-500/15 px-3 py-2 dark:bg-pink-400/20">Adam Kayal</span>
          </h1>
          <p id="hero-tagline" className="mt-6 text-lg opacity-80 max-w-2xl mx-auto">
            Software Engineering student — I build full-stack apps, real-time systems, and embedded hardware.
          </p>
          <div id="hero-buttons" className="mt-8 flex items-center justify-center gap-3">
            <a className="btn-water btn-water-primary rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium no-underline"
               href="#projects" data-btn>View Projects</a>
            <a className="btn-water btn-water-secondary rounded-xl border px-5 py-3 no-underline" href="#contact" data-btn>Contact</a>
          </div>
        </div>
      </section>

      {/* About (MDX) */}
      <Section id="about" title="About Me" subtitle="Who I am & what I do">
  <div className="prose prose-neutral dark:prose-invert max-w-none gsap-fade-up">
    <About />
  </div>

  <div className="mt-6 gsap-fade-up flex flex-wrap gap-3">
    <a
      href="/resume"
      className="btn-water btn-water-primary inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium no-underline"
      data-btn
    >
      <FileText className="w-4 h-4" /> View Resume
    </a>
    <a
      href="/Adam_Resume.pdf"
      target="_blank"
      className="btn-water btn-water-secondary inline-flex items-center gap-2 rounded-xl border px-5 py-3 no-underline"
      data-btn
    >
      <Download className="w-4 h-4" /> Download PDF
    </a>
  </div>
</Section>


      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="A few things I’ve built">
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" subtitle="Places I’ve worked">
        <div className="space-y-6">
          {experiences.map((e) => (
            <ExperienceItem key={e.company + e.period} {...e} />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact Me" subtitle="Have a question or want to work together?">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <ContactForm />
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-5">Get in touch</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+972546273707"
                   className="btn-water btn-water-secondary no-underline flex items-center gap-3 p-2.5 rounded-xl cursor-pointer">
                  <span className="contact-icon flex items-center justify-center w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium">054-627-3707</span>
                </a>
              </li>
              <li>
                <a href="mailto:Addam.kayal@gmail.com?subject=Hello%20Adam&body=Hi%20Adam,%0D%0A"
                   className="btn-water btn-water-secondary no-underline flex items-center gap-3 p-2.5 rounded-xl cursor-pointer">
                  <span className="contact-icon flex items-center justify-center w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium break-all">Addam.kayal@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/adamkiy" target="_blank" rel="noopener noreferrer"
                   className="btn-water btn-water-secondary no-underline flex items-center gap-3 p-2.5 rounded-xl cursor-pointer">
                  <span className="contact-icon flex items-center justify-center w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black shrink-0">
                    <GithubIcon />
                  </span>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adam-kayal-ba0a6a254/" target="_blank" rel="noopener noreferrer"
                   className="btn-water btn-water-secondary no-underline flex items-center gap-3 p-2.5 rounded-xl cursor-pointer">
                  <span className="contact-icon flex items-center justify-center w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black shrink-0">
                    <LinkedinIcon />
                  </span>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
