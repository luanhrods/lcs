import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

const Home: NextPage = () => {
  const servicesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  useEffect(() => {
    const animateServices = () => {
      const services = document.querySelectorAll('.service-item');
      services.forEach((service, index) => {
        setTimeout(() => {
          service.classList.add('animate-fade-in');
        }, index * 200);
      });
    };

    animateServices();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans relative overflow-hidden">
      {/* Flying icons and decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0Z" fill="#9333EA" fillOpacity="0.2"/>
          </svg>
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float-delay-1">
          <svg width="48" height="4" viewBox="0 0 48 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="4" rx="2" fill="#9333EA" fillOpacity="0.2"/>
          </svg>
        </div>
        <div className="absolute top-1/2 left-3/4 animate-float-delay-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" stroke="#9333EA" strokeWidth="2" strokeOpacity="0.2"/>
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float-delay-3">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="#9333EA" fillOpacity="0.2"/>
          </svg>
        </div>
      </div>

      {/* Header and navigation */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        {/* ... (header content remains unchanged) ... */}
      </header>

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-64 bg-[#1E1E1E] z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* ... (mobile menu content remains unchanged) ... */}
      </div>

      <main className="pb-20 relative z-10">
        {/* Hero section */}
        <section className="container mx-auto px-6 pt-20 pb-32">
          {/* ... (hero section content remains unchanged) ... */}
        </section>

        {/* Services section */}
        <section className="bg-[#1E1E1E] py-24" ref={servicesRef}>
          {/* ... (services section content remains unchanged) ... */}
        </section>

        {/* What we offer section */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat text-center">
            O que oferecemos?
            <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
            </svg>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { icon: '/images/services/criacao-websites.svg', 
                title: 'Criação de Websites', 
                description: 'Criamos uma landingpage ou site com a melhor qualidade para seu negócio.',
                link: 'https://api.whatsapp.com/send?phone=5511962140166&text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Cria%C3%A7%C3%A3o%20de%20Websites.'
              },
              { icon: '/images/services/marketing-digital.svg', 
                title: 'Marketing Digital', 
                description: 'Ajudamos você a ser lembrado e impactar o seu nicho no digital.',
                link: 'https://api.whatsapp.com/send?phone=5511962140166&text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20o%20Marketing%20Digital.'
              },
              { icon: '/images/services/webdesign.svg', 
                title: 'Webdesign (UX)', 
                description: 'Criamos experiências incríveis para seu website ou plataforma.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20Webdesign%20e%20UX/UI.'
              },
              { icon: '/images/services/midias-sociais.svg', 
                title: 'Mídias Sociais', 
                description: 'Gerenciamos, analisamos e produzimos tudo para você nas redes sociais.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20as%20m%C3%ADdias%20sociais'
              },
              { icon: '/images/services/design-grafico.svg', 
                title: 'Design Gráfico', 
                description: 'Fazemos imagens criativas e chamativas para seu negócio.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20design%20gr%C3%A1fico.'
              },
              { icon: '/images/services/edicao-videos.svg', 
                title: 'Edição de vídeos', 
                description: 'Tiramos sua imaginação do papel e ela se tornará realidade com a técnica correta.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20Edi%C3%A7%C3%A3o%20de%20V%C3%ADdeos.'
              },
            ].map((service, index) => (
              <Link href={service.link} key={index} className="service-item flex flex-col items-center text-center p-6 rounded-lg opacity-0 transition-all duration-500 ease-in-out hover:bg-[#1E1E1E]">
                <div className="mb-4 text-purple-600">
                  <Image src={service.icon} alt={service.title} width={69} height={69} />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-nunito">{service.title}</h3>
                <p className="text-gray-400 text-sm font-nunito h-20 flex items-center justify-center">{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials section */}
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
                name: "- Justin Lazorko",
                position: "Diretor de Marketing da YourListingExpert"
              },
              { 
                offset: 'md:translate-y-12', 
                image: '/images/testimonials/testimonial2.png',
                text: "Eu com certeza adorei todo o profissionalismo e a gentileza em relação ao meu perfil. Aumentei minhas visualizações e consegui alcançar novos parceiros!",
                name: "- Thayse Rodrigues",
                position: "Proprietária do perfil @eu.redecorando"
              },
              { 
                offset: 'md:translate-y-24', 
                image: '/images/testimonials/testimonial3.png',
                text: "O Luan tornou nosso YouTube muito mais fácil de apresentar para possíveis parceiros. Recomendamos ele sem dúvida e estamos ansiosos pelos próximos projetos.",
                name: "- Leonardo Phelipe",
                position: "Fundador do zeroEleven Agency"
              },
            ].map((item, index) => (
              <div key={index} className={`bg-[#1E1E1E] p-8 rounded-lg ${item.offset} transition-all duration-300 ease-in-out flex flex-col justify-between h-full`}>
                <p className="text-gray-400 mb-6 text-base font-nunito flex-grow">{item.text}</p>
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-base font-nunito">{item.name}</h4>
                    <p className="text-sm text-gray-400 font-nunito">{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section className="bg-[#1E1E1E] py-24" ref={contactRef}>
          {/* ... (contact section content remains unchanged) ... */}
        </section>
      </main>

      <footer className="bg-[#1E1E1E] py-8">
        {/* ... (footer content remains unchanged) ... */}
      </footer>
    </div>
  )
}

export default Home
