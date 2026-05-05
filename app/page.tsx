import Image from 'next/image'
import About from '@/content/about.mdx'
import { projects } from '@/content/projects'
import { experiences } from '@/content/experience'
import { ProjectCard } from '@/components/project-card'
import { ExperienceItem } from '@/components/experience-item'
import { Section } from '@/components/section'
import { ContactForm } from '@/components/contact-form'
import { GsapAnimations } from '@/components/gsap-animations'
import { Mail, Github, Linkedin, FileText, Download, Phone } from 'lucide-react'



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
            <a className="rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium no-underline"
               href="#projects">View Projects</a>
            <a className="rounded-xl border px-5 py-3 no-underline" href="#contact">Contact</a>
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
      className="inline-flex items-center gap-2 rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium no-underline"
    >
      <FileText className="w-4 h-4" /> View Resume
    </a>
    <a
      href="/Adam_Resume.pdf"
      target="_blank"
      className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 no-underline"
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
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+972546273707"
                  className="nav flex items-center gap-3 group/link"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shrink-0 group-hover/link:bg-black group-hover/link:text-white dark:group-hover/link:bg-white dark:group-hover/link:text-black transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span>054-627-3707</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Addam.kayal@gmail.com?subject=Hello%20Adam&body=Hi%20Adam,%0D%0A"
                  className="nav flex items-center gap-3 group/link"
                  aria-label="Email Adam Kayal"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shrink-0 group-hover/link:bg-black group-hover/link:text-white dark:group-hover/link:bg-white dark:group-hover/link:text-black transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="break-all">Addam.kayal@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/adamkiy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav flex items-center gap-3 group/link"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shrink-0 group-hover/link:bg-black group-hover/link:text-white dark:group-hover/link:bg-white dark:group-hover/link:text-black transition-colors duration-200">
                    <Github className="w-4 h-4" />
                  </span>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adam-kayal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav flex items-center gap-3 group/link"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shrink-0 group-hover/link:bg-black group-hover/link:text-white dark:group-hover/link:bg-white dark:group-hover/link:text-black transition-colors duration-200">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
