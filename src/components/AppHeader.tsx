import headerImg from '$assets/app-header-img.svg'

export function AppHeader() {
  return (
    <header className="flex">
      <a href="/" className="h-[65px] w-[167px] flex-shrink-0 flex-grow-0">
        <img className="h-[65px] w-[167px]" src={headerImg} alt="ULink full logo" />
      </a>
      <nav className="flex w-full items-center justify-around [&>a]:text-lg [&>a]:font-bold [&>a]:capitalize">
        <a href="#benefits">Beneficios</a>
        <a href="#goals">Objetivos</a>
        <a href="#4">Catálogo</a>
        <a href="#5">Iniciar sesión</a>
      </nav>
    </header>
  )
}
