import Image from 'next/image'

type Ratio = 'square' | '4/3' | '16/9' | '21/9'

const ratioClass: Record<Ratio, string> = {
  square: 'aspect-square w-full max-w-[360px]',
  '4/3': 'aspect-[4/3] w-full max-w-3xl',
  '16/9': 'aspect-video w-full max-w-4xl',
  '21/9': 'aspect-[21/9] w-full max-w-5xl',
}

export function HeroPortrait({
  src = '/me.jpg',
  alt = 'Portrait',
  ratio = '16/9',
  objectPosition = '50% 50%' // CSS object-position (e.g. '50% 35%' to shift up)
}: {
  src?: string
  alt?: string
  ratio?: Ratio
  objectPosition?: string
}) {
  return (
    <div className="mt-10 flex justify-center">
      <figure className={`relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl ${ratioClass[ratio]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
          style={{ objectPosition }}
          priority
        />
      </figure>
    </div>
  )
}
