import { Marquee } from './Marquee'
import instagramLogo from '$assets/instagram-logo.svg'
import xLogo from '$assets/x-logo.svg'
import facebookLogo from '$assets/facebook-logo.svg'

export function AppFooter() {
  return (
    <footer className="flex flex-col items-center bg-ucab-green pb-5 pt-7">
      <h3 className="text-[2.5rem] uppercase text-brand-white">Gracias por su visita</h3>
      <h3 className="mb-3 text-[2.5rem] uppercase text-brand-white">¡Hasta pronto!</h3>
      <small className="mb-3 text-xl text-brand-white">Todos los derechos reservados - 2024</small>
      <div className="flex gap-5">
        <a href="#7">
          <img
            src={instagramLogo}
            alt="Cuenta de Instagram de UCAB Guayana"
            className="h-[52px] w-[50px]"
          />
        </a>
        <a href="#8">
          <img
            src={xLogo}
            alt="Cuenta de X/Twitter de UCAB Guayana"
            className="h-[52px] w-[50px]"
          />
        </a>
        <a href="#9">
          <img
            src={facebookLogo}
            alt="Cuenta de Facebook de UCAB Guayana"
            className="h-[52px] w-[50px]"
          />
        </a>
      </div>
      <Marquee text="UCAB Guayana" separator="·" />
    </footer>
  )
}
