// section.tsx
export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "",
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      {/* Use a wide container with small horizontal padding */}
      <div
        className={`mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6 ${containerClassName}`}
      >
        <div className="mb-8 gsap-fade-up">
          {subtitle && (
            <p className="text-sm uppercase tracking-widest opacity-70">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold mt-1">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
