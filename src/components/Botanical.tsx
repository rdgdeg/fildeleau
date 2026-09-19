export function Botanical({ side = 'right' }: { side?: 'left' | 'right' }) {
  return (
    <img
      src="/roseaux.svg"
      alt=""
      className={`pointer-events-none absolute top-20 hidden w-52 opacity-50 lg:block ${
        side === 'right' ? 'right-[-24px]' : 'left-[-40px] -scale-x-100'
      }`}
    />
  )
}
