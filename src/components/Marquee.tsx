export function Marquee({ text, separator }: { text: string; separator: string }) {
  return (
    <div className="group relative mt-8 w-full overflow-hidden whitespace-nowrap before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-ucab-green before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-ucab-green after:to-transparent">
      <div className="[&>span]:font-poppins inline-flex w-full animate-[scrolling_3s_linear_infinite] justify-around group-hover:[animation-play-state:paused] md:[animation-duration:5s] lg:[animation-duration:8s] xl:[animation-duration:12s] [&>span]:inline-block [&>span]:select-none [&>span]:text-xl [&>span]:font-bold [&>span]:text-brand-white">
        <span>{text}</span>
        <span>{separator}</span>
        <span>{text}</span>
        <span>{separator}</span>
        <span>{text}</span>
        <span>{separator}</span>
        <span>{text}</span>
        <span>{separator}</span>
        <span>{text}</span>
        <span>{separator}</span>
      </div>
      <div className="[&>span]:font-poppins inline-flex w-full animate-[scrolling_3s_linear_infinite] justify-around group-hover:[animation-play-state:paused] md:[animation-duration:5s] lg:[animation-duration:8s] xl:[animation-duration:12s] [&>span]:inline-block [&>span]:select-none [&>span]:text-xl [&>span]:font-bold [&>span]:text-brand-white">
        <span>{text}</span>
        <span>{separator}</span>
        <span>{text}</span>
        <span>{separator}</span>
        <span>{text}</span>
        <span>{separator}</span>
        <span>{text}</span>
        <span>{separator}</span>
        <span>{text}</span>
        <span>{separator}</span>
      </div>
    </div>
  )
}
