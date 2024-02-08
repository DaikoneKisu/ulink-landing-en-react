import { LandingAnchorButton } from './LandingAnchorButton'
import firstSightImg from '$assets/first-sight-img.jpeg'

export function FirstSight() {
  return (
    <section className="grid w-full max-w-[1250px] grid-cols-[repeat(2,_1fr)] justify-items-center self-center">
      <div className="flex flex-col gap-5 justify-self-start">
        <h1 className="text-[2.50rem] font-bold uppercase leading-[2.7rem]">
          BIENVENIDO A LA
          <br />
          PLATAFORMA
          <br />
          <strong className="animate-[background-pan_3s_linear_infinite] bg-gradient-to-r from-ucab-green via-ucab-blue to-ucab-green bg-[length:200%] bg-clip-text font-bold text-transparent">
            ULINK
          </strong>
          <em className="font-normal not-italic">
            <br />
            CONECTANDO
            <br />
            EGRESADOS Y<br />
            EMPRESAS
          </em>
        </h1>
        <p className="w-[420px] text-lg leading-normal">
          Un espacio donde los egresados pueden encontrar{' '}
          <strong className="font-bold">oportunidades emocionantes</strong> y donde las empresas
          puedan descubrir talento excepcional.
        </p>
        <p className="w-[420px] text-lg leading-normal">
          Únete a{' '}
          <strong className="animate-[background-pan_3s_linear_infinite] bg-gradient-to-r from-ucab-green via-ucab-blue to-ucab-green bg-[length:200%] bg-clip-text font-bold text-transparent">
            ULink
          </strong>{' '}
          y descubre un <strong className="font-bold">mundo de posibilidades profesionales.</strong>
        </p>
        <small className="w-[420px] text-base font-bold">
          Puedes empezar a buscar un egresado utilizando nuestro catálogo.
        </small>
        <nav className="flex gap-3">
          <LandingAnchorButton
            href={'#4'}
            text={'Ir al catálogo'}
            className="bg-ucab-green text-brand-white"
          />
          <LandingAnchorButton href={'#5'} text={'Iniciar sesión'} className="bg-brand-white" />
        </nav>
      </div>
      <img
        src={firstSightImg}
        alt=""
        className="max-h-[671px] max-w-[601px] justify-self-end rounded-[10px]"
      />
    </section>
  )
}
