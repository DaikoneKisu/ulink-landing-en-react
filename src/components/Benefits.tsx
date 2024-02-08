import { LandingAnchorButton } from './LandingAnchorButton'
import benefitsOne from '$assets/benefits-one.png'
import benefitsTwo from '$assets/benefits-two.jpeg'
import benefitsThree from '$assets/benefits-three.jpeg'

export function Benefits() {
  const recruitersText =
    'Como reclutador, podrás disfrutar de una interfaz intuitiva con herramientas fáciles de usar que simplifican el proceso de búsqueda y reclutamiento a través de un catálogo de egresados de la Universidad Católica Andrés Bello (UCAB) altamente cualificados que se ajusten a tus requisitos como habilidades, experiencia y ubicación. ¡Visita sus perfiles y descarga sus CV! Cabe destacar que la UCAB ocupa el puesto #1 como la mejor institución del país, según el QS World University Ranking 2024.'
  const graduatesText =
    'Como egresado, podrás crear tu perfil profesional personalizado que muestre tus habilidades, formación y experiencia de manera atractiva para los reclutadores; cargando toda la información relevante que te ayude a crear tu CV. Para mayor comodidad, nuestra plataforma se integra con Ellucian y Banner, por lo tanto ¡Ya tendrás información previamente cargada!'
  const cvText =
    'Entendemos que nuestros egresados se especializan en diversas áreas y han cursado distintas carreras. Es por esta diversidad que se hace necesario crear CV específicos para diferentes campos laborales. Es aquí donde ULink se destaca, ofreciéndote la posibilidad de gestionar una amplia colección de CV, cada uno adaptado al área que buscas y resaltando tus habilidades específicas.'

  return (
    <section id="benefits" className="flex flex-col gap-20">
      <h2 className="text-center text-[2.50rem] font-bold">
        Nuestros beneficios a reclutadores y egresados
      </h2>
      <section className="flex flex-row-reverse justify-around">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="max-w-[551px] text-pretty text-[1.25rem] font-medium leading-9">
            {recruitersText}
          </p>
          <LandingAnchorButton
            href="#4"
            text="Ir al catálogo"
            className="bg-ucab-green text-brand-white"
          />
        </div>
        <img
          src={benefitsOne}
          alt=""
          className="max-h-[419px] w-full max-w-[683px] flex-shrink-0 flex-grow-0 rounded-[0.625rem]"
        />
      </section>
      <section className="flex justify-around">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="max-w-[551px] text-pretty text-[1.25rem] font-medium leading-9">
            {graduatesText}
          </p>
          <LandingAnchorButton href="#5" text="Iniciar sesión" className="bg-brand-white" />
        </div>
        <img
          src={benefitsTwo}
          alt=""
          className="max-h-[419px] w-full max-w-[683px] flex-shrink-0 flex-grow-0 rounded-[0.625rem]"
        />
      </section>
      <section className="flex flex-row-reverse justify-around">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="max-w-[551px] text-pretty text-[1.25rem] font-medium leading-9">{cvText}</p>
          <LandingAnchorButton
            href="#6"
            text="Colección de CV"
            className="bg-ucab-green text-brand-white"
          />
        </div>
        <img
          src={benefitsThree}
          alt=""
          className="max-h-[419px] w-full max-w-[683px] flex-shrink-0 flex-grow-0 rounded-[0.625rem]"
        />
      </section>
    </section>
  )
}
