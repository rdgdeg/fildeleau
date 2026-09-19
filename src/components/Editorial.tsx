import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { SiteImage } from '../data/site'
import { Botanical } from './Botanical'
import { Reveal } from './Reveal'

type Props = {
  kicker?: string
  title: string
  lede?: string
  children: ReactNode
  image?: SiteImage
  images?: SiteImage[]
  reverse?: boolean
  dark?: boolean
  botanical?: 'left' | 'right'
  actions?: { to: string; label: string; light?: boolean }[]
  id?: string
}

export function Editorial({
  kicker,
  title,
  lede,
  children,
  image,
  images,
  reverse,
  dark,
  botanical,
  actions,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-16 md:py-24 ${dark ? 'bg-deep text-lin' : 'bg-lin'}`}
    >
      {kicker ? <p className={`kicker ${dark ? 'text-white/50' : ''}`}>{kicker}</p> : null}
      <div
        className={`mx-auto grid w-[min(1180px,calc(100%-2.25rem))] items-center gap-10 md:gap-14 ${
          reverse ? 'md:grid-cols-[0.85fr_1.15fr]' : 'md:grid-cols-[1.15fr_0.85fr]'
        }`}
      >
        <div className={reverse ? 'md:order-2' : ''}>
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-[320px] w-full object-cover md:h-[520px]"
              loading="lazy"
            />
          ) : null}
          {images ? (
            <div className="grid grid-cols-2 gap-4">
              {images.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-[220px] w-full object-cover md:h-[420px]"
                  loading="lazy"
                />
              ))}
            </div>
          ) : null}
        </div>
        <Reveal className={reverse ? 'md:order-1' : ''}>
          <h2 className={`font-display text-3xl font-light leading-tight md:text-[46px] ${dark ? 'text-[#d7d3c8]' : 'text-mute'}`}>
            {title}
          </h2>
          {lede ? <p className={`mt-3 font-medium ${dark ? 'text-white/80' : 'text-mute'}`}>{lede}</p> : null}
          <div className={`mt-4 max-w-[52ch] space-y-3 text-[16px] leading-relaxed ${dark ? 'text-white/75' : 'text-mute'}`}>
            {children}
          </div>
          {actions ? (
            <div className="mt-7 flex flex-wrap">
              {actions.map((a) => (
                <Link key={a.to} to={a.to} className={`btn ${a.light || dark ? 'btn-light' : ''} -ml-px first:ml-0`}>
                  {a.label}
                </Link>
              ))}
            </div>
          ) : null}
        </Reveal>
      </div>
      {botanical && !dark ? <Botanical side={botanical} /> : null}
    </section>
  )
}
