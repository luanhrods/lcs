import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const Home: NextPage = () => {
  const servicesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans relative overflow-hidden">
      {/* Flying icons and decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ... (unchanged) ... */}
      </div>

      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        {/* ... (unchanged) ... */}
      </header>

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-64 bg-[#1E1E1E] z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* ... (unchanged) ... */}
      </div>

      <main className="pb-20 relative z-10">
        <section className="container mx-auto px-6 pt-20 pb-32">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/2 mb-16 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-montserrat">
                Construa<br />seus sonhos
              </h1>
              <p className="text-gray-400 mb-12 text-lg md:text-xl max-w-md font-nunito">
                O Luan Chicale Studio (LC Studio) é um local onde a criatividade e sonhos se tornam realidade. Transformamos seu negócio dos sonhos em realidade com o marketing digital.
              </p>
              <Link href="https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20todos%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20tem,%20por%20favor." 
                className="bg-transparent text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300">
                Saiba mais
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0 md:pl-12">
              {/* ... (unchanged) ... */}
            </div>
          </div>
        </section>

        <section className="bg-[#1E1E1E] py-24" ref={servicesRef}>
          {/* ... (unchanged) ... */}
        </section>

        <section className="container mx-auto px-6 py-24">
          {/* ... (unchanged) ... */}
        </section>

        <section className="container mx-auto px-6 py-24 mb-24" ref={testimonialsRef}>
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat text-center">
            O que dizem sobre nós?
            <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
            </svg>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { 
                offset: 'md:translate-y-0', 
                image: '/images/testimonials/testimonial1.png',
                text: "Luan trabalhou extremamente bem com nossa equipe e conseguiu concluir as tarefas sem comprometer a qualidade de seu trabalho. Ele ajudou nossa equipe no lançamento de várias campanhas para diversos clientes em diferentes setores na América do Norte.",
                name: "Justin Lazorko",
                position: "Diretor de Marketing da YourListingExpert"
              },
              { 
                offset: 'md:translate-y-12', 
                image: '/images/testimonials/testimonial2.png',
                text: "Eu com certeza adorei todo o profissionalismo e a gentileza em relação ao meu perfil. Aumentei minhas visualizações e consegui alcançar novos parceiros!",
                name: "Thayse",
                position: "Proprietária do perfil @eu.redecorando"
              },
              { 
                offset: 'md:translate-y-24', 
                image: '/images/testimonials/testimonial3.png',
                text: "O Luan tornou nosso YouTube muito mais fácil de apresentar para possíveis parceiros. Recomendamos ele sem dúvida e estamos ansiosos pelos próximos projetos.",
                name: "Leonar do Phelipe",
                position: "Fundador do zeroEleven Agency"
              },
            ].map((item, index) => (
              <div key={index} className={`bg-[#1E1E1E] p-6 rounded-lg ${item.offset} transition-all duration-300 ease-in-out`}>
                <p className="text-gray-400 mb-4 text-sm font-nunito">
                  {item.text}
                </p>
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-sm font-nunito">{item.name}</h4>
                    <p className="text-xs text-gray-400 font-nunito">{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1E1E1E] py-24" ref={contactRef}>
          {/* ... (unchanged) ... */}
        </section>
      </main>

      <footer className="bg-[#1E1E1E] py-8">
        {/* ... (unchanged) ... */}
      </footer>
    </div>
  )
}

export default Home
