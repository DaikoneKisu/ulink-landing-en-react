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
        'inline-block rounded-[0.625rem] border-2 px-[3.25rem] py-5 font-bold uppercase shadow' +
        ' ' +
        className
      }
    >
      {text}
    </a>
  )
}
