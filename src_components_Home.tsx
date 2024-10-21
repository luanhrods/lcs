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
      {/* ... (unchanged) ... */}

      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Luan Chicale Studio Logo" width={40} height={40} />
          <span className="font-semibold text-sm md:text-base font-montserrat">Luan Chicale Studio</span>
        </div>
        {/* ... (rest of the header unchanged) ... */}
      </header>

      {/* Mobile menu */}
      {/* ... (unchanged) ... */}

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
                className="bg-transparent text-white px-6 py-3 rounded-md text-base md:text-lg font-medium inline-flex items-center font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300 w-auto">
                Saiba mais
                <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
            {/* ... (rest of the section unchanged) ... */}
          </div>
        </section>

        {/* ... (other sections unchanged) ... */}

        <section className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat text-center">
            O que oferecemos?
            <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
            </svg>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            
            {[
              { 
                icon: '/images/services/criacao-websites.svg', 
                title: 'Criação de Websites', 
                description: 'Criamos uma landingpage ou site com a melhor qualidade para seu negócio.',
                link: 'https://api.whatsapp.com/send?phone=5511962140166&text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Cria%C3%A7%C3%A3o%20de%20Websites.'
              },
              { 
                icon: '/images/services/marketing-digital.svg', 
                title: 'Marketing Digital', 
                description: 'Ajudamos você a ser lembrado e impactar o seu nicho no digital.',
                link: 'https://api.whatsapp.com/send?phone=5511962140166&text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20o%20Marketing%20Digital.'
              },
              { 
                icon: '/images/services/webdesign.svg', 
                title: 'Webdesign (UX)', 
                description: 'Criamos experiências incríveis para seu website ou plataforma.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20Webdesign%20e%20UX/UI.'
              },
              { 
                icon: '/images/services/midias-sociais.svg', 
                title: 'Mídias Sociais', 
                description: 'Gerenciamos, analisamos e produzimos tudo para você nas redes sociais.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20as%20m%C3%ADdias%20sociais'
              },
              { 
                icon: '/images/services/design-grafico.svg', 
                title: 'Design Gráfico', 
                description: 'Fazemos imagens criativas e chamativas para seu negócio.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20design%20gr%C3%A1fico.'
              },
              { 
                icon: '/images/services/edicao-videos.svg', 
                title: 'Edição de vídeos', 
                description: 'Tiramos sua imaginação do papel e ela se tornará realidade com a técnica correta.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20Edi%C3%A7%C3%A3o%20de%20V%C3%ADdeos.'
              },
            ].map((service, index) => (
              <Link href={service.link} key={index} className="flex flex-col items-center text-center bg-[#1E1E1E] p-6 rounded-lg">
                <div className="mb-4 text-purple-600">
                  <Image src={service.icon} alt={service.title} width={69} height={69} />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-nunito">{service.title}</h3>
                <p className="text-gray-400 text-sm font-nunito h-20 flex items-center justify-center">{service.description}</p>
              </Link>
            ))}
          </div>
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
              <div key={index} className={`bg-[#1E1E1E] p-6 rounded-lg ${item.offset}`}>
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

        {/* ... (rest of the component unchanged) ... */}
      </main>

      <footer className="bg-[#1E1E1E] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/images/logo.png" alt="LC Studio Logo" width={32} height={32} />
              <span className="font-semibold text-sm font-montserrat">LC Studio</span>
            </div>
            {/* ... (rest of the footer unchanged) ... */}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home