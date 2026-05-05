export type Experience = {
  company: string
  role: string
  period: string
  bullets: string[]
}

export function ExperienceItem({ company, role, period, bullets }: Experience) {
  return (
    <div className="card gsap-fade-up">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-semibold">{company}</h3>
        <span className="text-sm opacity-70">{period}</span>
      </div>
      <p className="mt-1 font-medium">{role}</p>
      <ul className="mt-3 list-disc pl-5 space-y-1">
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  )
}
