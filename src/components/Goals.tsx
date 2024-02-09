import goalsImg from '$assets/goals-img.png'

export function Goals() {
  const goalsText =
    '“Nuestra plataforma está diseñada para facilitar la interacción entre egresados y empresas, fomentando el crecimiento profesional y la colaboración mutuamente beneficiosa. Queremos guiar a los egresados a que tengan la mejor oportunidad de empleo, es por esto que nos enfocamos en la creación de nuevas herramientas para sus CV.”'

  return (
    <section id="goals" className="flex w-full flex-col items-center">
      <h2 className="mb-5 text-center text-[2.50rem] font-bold">Nuestro objetivo como producto</h2>
      <p className="mb-10 w-full max-w-[1180px] text-center text-[1.5625rem] font-medium">
        {goalsText}
      </p>
      <img src={goalsImg} alt="" className="max-w-[884px] rounded-[0.625rem]" />
    </section>
  )
}
