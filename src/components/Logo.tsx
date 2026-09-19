import { site } from '../data/site'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src="/images/logo.jpg"
        alt=""
        width={48}
        height={48}
        className="h-12 w-12 rounded-full bg-white object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
      />
      <span className="flex flex-col leading-tight">
        <strong className="text-[13px] font-medium tracking-[0.16em]">{site.name.toUpperCase()}</strong>
        <small className="hidden text-[10px] font-normal uppercase tracking-[0.18em] opacity-70 sm:block">
          {site.tagline}
        </small>
      </span>
    </span>
  )
}
