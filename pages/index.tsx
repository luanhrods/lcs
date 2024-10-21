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

      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="#9333EA"/>
          </svg>
          <span className="font-semibold text-sm md:text-base font-montserrat">Luan Chicale Studio</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection(servicesRef)} className="text-gray-400 hover:text-purple-600 text-sm md:text-base font-nunito transition-colors duration-300">Serviços</button>
          <button onClick={() => scrollToSection(testimonialsRef)} className="text-gray-400 hover:text-purple-600 text-sm md:text-base font-nunito transition-colors duration-300">Referências</button>
          <button onClick={() => scrollToSection(contactRef)} className="text-gray-400 hover:text-purple-600 text-sm md:text-base font-nunito transition-colors duration-300">Contato</button>
        </nav>
        <Link href="https://tally.so/r/3qKJl7" className="hidden md:block bg-transparent text-white px-4 py-2 rounded-md text-sm md:text-base font-medium font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300">
          Fale conosco agora
        </Link>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-64 bg-[#1E1E1E] z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mt-8">
            <button onClick={() => scrollToSection(servicesRef)} className="block w-full text-left py-2 text-gray-400 hover:text-purple-600 text-base font-nunito transition-colors duration-300">Serviços</button>
            <button onClick={() => scrollToSection(testimonialsRef)} className="block w-full text-left py-2 text-gray-400 hover:text-purple-600 text-base font-nunito transition-colors duration-300">Referências</button>
            <button onClick={() => scrollToSection(contactRef)} className="block w-full text-left py-2 text-gray-400 hover:text-purple-600 text-base font-nunito transition-colors duration-300">Contato</button>
            <Link href="https://tally.so/r/3qKJl7" className="mt-4 w-full bg-transparent text-white px-4 py-2 rounded-md text-base font-medium font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300">
              Fale conosco agora
            </Link>
          </div>
        </div>
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
              <Link href="https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20todos%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20tem,%20por%20favor." className="bg-transparent text-white px-6 py-3 rounded-md text-base md:text-lg font-medium flex items-center font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300 w-full md:w-auto justify-center md:justify-start">
                Saiba mais
                <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0 md:pl-12">
              <div className="bg-[#1E1E1E] p-4 rounded-lg mb-4 flex items-center max-w-md">
                <div className="bg-purple-600 p-2 rounded mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold font-nunito text-lg">Há mais de 5 anos</h3>
                  <p className="text-base text-gray-400 font-nunito">No mercado digital</p>
                </div>
              </div>
              <div className="bg-[#1E1E1E] p-4 rounded-lg flex items-center max-w-md">
                <div className="bg-purple-600 p-2 rounded mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold font-nunito text-lg">Alta excelência</h3>
                  <p className="text-base text-gray-400 font-nunito">
                    Ofertando soluções de design e marketing digital no Brasil, Canadá e Estados Unidos da América.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1E1E1E] py-24" ref={servicesRef}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>, 
                  title: "Na palma da sua mão", 
                  description: "Através do nosso suporte rápido, você pode mandar mensagem de qualquer lugar, sem se preocupar em ter um bom e-mail ou com seu horário. Nossa equipe responderá sempre que houver disponibilidade, e você pode escolher entre nos enviar um formulário, um e-mail ou até mesmo um WhatsApp. O que for mais fácil pra você, sera mais fácil pra nós tambem!" 
                },
                { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>, 
                  title: "Na sua própria medida", 
                  description: "Com nossos planos fechados, oferecemos diferentes níveis de necessidade que podem te ajudar a alcançar o resultado desejado. Todos os nossos pacotes são pensados em necessidades mais comuns. Porém, isso não impede de trazer o melhor pra você! Caso não ache sua necessidade, criamos um pacote personalizado para atender suas necessidades." 
                },
                { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>, 
                  title: "Movidos à excelência", 
                  description: "Quando dizemos que somos movidos à excelência significa que faremos tudo ao nosso alcance para atingir os resultados esperados, e não estamos sozinhos nessa. Juntamente aos colaboradores e parceiros da LC Studio, temos como ofertar todas suas necessidades com especialistas renomados no mercado, sempre na medida certa." 
                },
              ].map((item, index) => (
                <div key={index} className="bg-[#252525] p-6 rounded-lg">
                  <div className="bg-purple-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-inter">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-inter  font-normal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat text-center">
            O que oferecemos?
            <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
            </svg>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            
            {[
              { icon: <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#55EFC4" fillOpacity="0.1"/>
                  <path d="M47 28.3333V40.6666C47 45.3333 45.3333 47 40.6667 47H28.3333C23.6667 47 22 45.3333 22 40.6666V28.3333C22 23.6666 23.6667 22 28.3333 22H40.6667C45.3333 22 47 23.6666 47 28.3333Z" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M31.6667 28.3334H37.3334" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M34.5 40.6666V28.3333" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M31.6667 40.6666H37.3334" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Criação de Websites', 
                description: 'Criamos uma landingpage ou site com a melhor qualidade para seu negócio.',
                link: 'https://api.whatsapp.com/send?phone=5511962140166&text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20a%20Cria%C3%A7%C3%A3o%20de%20Websites.'
              },
              { icon: <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#F04037" fillOpacity="0.1"/>
                  <path d="M36.3464 21.8934L44.213 25.3867C46.4797 26.3867 46.4797 28.0401 44.213 29.0401L36.3464 32.5334C35.453 32.9334 33.9864 32.9334 33.093 32.5334L25.2264 29.0401C22.9597 28.0401 22.9597 26.3867 25.2264 25.3867L33.093 21.8934C33.9864 21.4934 35.453 21.4934 36.3464 21.8934Z" stroke="#F04037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 32.6666C23 33.7866 23.84 35.08 24.8667 35.5333L33.92 39.56C34.6133 39.8666 35.4 39.8666 36.08 39.56L45.1333 35.5333C46.16 35.08 47 33.7866 47 32.6666" stroke="#F04037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 39.3334C23 40.5734 23.7333 41.6934 24.8667 42.2L33.92 46.2267C34.6133 46.5334 35.4 46.5334 36.08 46.2267L45.1333 42.2C46.2667 41.6934 47 40.5734 47 39.3334" stroke="#F04037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Marketing Digital', 
                description: 'Ajudamos você a ser lembrado e impactar o seu nicho no digital.',
                link: 'https://api.whatsapp.com/send?phone=5511962140166&text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20o%20Marketing%20Digital.'
              },
              { icon: <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#FEDC5A" fillOpacity="0.1"/>
                  <path d="M31.0004 35.3334C30.1204 35.7734 29.387 36.4267 28.8404 37.24C28.5337 37.7067 28.5337 38.2934 28.8404 38.76C29.387 39.5734 30.1204 40.2267 31.0004 40.6667" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M39.2803 35.3334C40.1603 35.7734 40.8936 36.4267 41.4403 37.24C41.7469 37.7067 41.7469 38.2934 41.4403 38.76C40.8936 39.5734 40.1603 40.2267 39.2803 40.6667" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M31.0003 47.3333H39.0003C45.667 47.3333 48.3337 44.6666 48.3337 38V30C48.3337 23.3333 45.667 20.6666 39.0003 20.6666H31.0003C24.3337 20.6666 21.667 23.3333 21.667 30V38C21.667 44.6666 24.3337 47.3333 31.0003 47.3333Z" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21.9736 28.68L47.6003 28.6666" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Webdesign (UX)', 
                description: 'Criamos experiências incríveis para seu website ou plataforma.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20Webdesign%20e%20UX/UI.'
              },
              { icon: <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#FEDC5A" fillOpacity="0.1"/>
                  <path d="M42.2 43.6667H27.8C25.8 43.6667 25 42.8134 25 40.6934V39.3067C25 37.1867 25.8 36.3334 27.8 36.3334H42.2C44.2 36.3334 45 37.1867 45 39.3067V40.6934C45 42.8134 44.2 43.6667 42.2 43.6667Z" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M39.5337 32.3333H30.467C28.467 32.3333 27.667 31.48 27.667 29.36V27.9733C27.667 25.8533 28.467 25 30.467 25H39.5337C41.5337 25 42.3337 25.8533 42.3337 27.9733V29.36C42.3337 31.48 41.5337 32.3333 39.5337 32.3333Z" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M35 47.3333V44.1333" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M35 35.3333V32.6666" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M35 20.6666V24.2533" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Mídias Sociais', 
                description: 'Gerenciamos, analisamos e produzimos tudo para você nas redes sociais.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20as%20m%C3%ADdias%20sociais'
              },
              { icon: <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#55EFC4" fillOpacity="0.1"/>
                  <path d="M34.5 47C41.4036 47 47 41.4036 47 34.5C47 27.5964 41.4036 22 34.5 22C27.5964 22 22 27.5964 22 34.5C22 41.4036 27.5964 47 34.5 47Z" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M34.5 39.6667C37.3535 39.6667 39.6667 37.3535 39.6667 34.5C39.6667 31.6465 37.3535 29.3333 34.5 29.3333C31.6465 29.3333 29.3333 31.6465 29.3333 34.5C29.3333 37.3535 31.6465 39.6667 34.5 39.6667Z" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M38.3333 31.1667L42.1667 27.3333" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M26.8333 42.6667L30.6667 38.8333" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M38.8333 38.3333L42.6667 42.1667" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M26.8333 26.8333L30.6667 30.6667" stroke="#55EFC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Design Gráfico', 
                description: 'Fazemos imagens criativas e chamativas para seu negócio.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20design%20gr%C3%A1fico.'
              },
              { icon: <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#F04037" fillOpacity="0.1"/>
                  <path d="M34.5 47C41.4036 47 47 41.4036 47 34.5C47 27.5964 41.4036 22 34.5 22C27.5964 22 22 27.5964 22 34.5C22 41.4036 27.5964 47 34.5 47Z" stroke="#F04037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M31.1667 32.6667V38.8334L36.5 35.75L31.1667 32.6667Z" stroke="#F04037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Edição de vídeos', 
                description: 'Tiramos sua imaginação do papel e ela se tornará realidade com a técnica correta.',
                link: 'https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20Edi%C3%A7%C3%A3o%20de%20V%C3%ADdeos.'
              },
            ].map((service, index) => (
              <Link href={service.link} key={index} className="flex flex-col items-center text-center bg-[#1E1E1E] p-6 rounded-lg">
                <div className="mb-4 text-purple-600">{service.icon}</div>
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
                image: '/placeholder.svg?height=48&width=48',
                text: "Luan trabalhou extremamente bem com nossa equipe e conseguiu concluir as tarefas sem comprometer a qualidade de seu trabalho. Ele ajudou nossa equipe no lançamento de várias campanhas para diversos clientes em diferentes setores na América do Norte.",
                name: "Justin Lazorko",
                position: "Diretor de Marketing da YourListingExpert"
              },
              { 
                offset: 'md:translate-y-12', 
                image: '/euredecorando.svg',
                text: "Eu com certeza adorei todo o profissionalismo e a gentileza em relação ao meu perfil. Aumentei minhas visualizações e consegui alcançar novos parceiros!",
                name: "Thayse",
                position: "Proprietária do perfil @eu.redecorando"
              },
              { 
                offset: 'md:translate-y-24', 
                image: '/placeholder.svg?height=48&width=48',
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
                  <Image src={item.image} alt="Client" width={48} height={48} className="rounded-full mr-4" />
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
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-0 font-montserrat md:w-1/2 text-center md:text-left"> Transforme seus sonhos<br />em realidade</h2>
              <Link href="https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20todos%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20tem,%20por%20favor."
                className="bg-purple-600 text-white px-8 py-3 rounded-md text-sm md:text-base font-medium inline-flex items-center font-nunito hover:bg-purple-700 transition-colors duration-300">
                Nosso WhatsApp
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1E1E1E] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="#9333EA"/>
              </svg>
              <span className="font-semibold text-sm font-montserrat">LC Studio</span>
            </div>
            <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-4 md:mb-0">
              <Link href="https://tally.so/r/3qKJl7" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Ajuda</Link>
              <Link href="https://tally.so/r/w4N4Qk" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Política de Privacidade</Link>
              <Link href="https://tally.so/r/w4N4Qk" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Política de Dados</Link>
            </nav>
            <div className="text-gray-400 text-sm font-nunito">
              © 2005-2024 LC Studio (Former ProjetoMidia)
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
