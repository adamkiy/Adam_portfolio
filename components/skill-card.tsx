export type Skill = {
  title: string
  description: string
  bullets?: string[]
}

export function SkillCard({ title, description, bullets = [] }: Skill) {
  return (
    <div className="card">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 opacity-80">{description}</p>
      {bullets.length > 0 && (
        <ul className="mt-3 list-disc pl-5 space-y-1">
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}
    </div>
  )
}
