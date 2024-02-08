export function LandingAnchorButton({
  href,
  text,
  className
}: {
  href: string
  text: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={
        'inline-flex h-[61px] w-[229px] items-center justify-center rounded-[0.625rem] border-2 text-[0.9375rem] font-bold uppercase shadow' +
        ' ' +
        className
      }
    >
      {text}
    </a>
  )
}
