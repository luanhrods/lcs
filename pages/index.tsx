import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { Smartphone, Ruler, Target, Linkedin, ChevronDown, ChevronUp } from 'lucide-react'

const Component: NextPage = () => {
  const servicesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedCards, setExpandedCards] = useState<boolean[]>([false, false, false])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const companies = [
    { name: 'Company 1', logo: '/images/company1.png' },
    { name: 'Company 2', logo: '/images/company2.png' },
    { name: 'Company 3', logo: '/images/company3.png' },
    { name: 'Company 4', logo: '/images/company4.png' },
    { name: 'Company 5', logo: '/images/company5.png' },
  ]

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <>
      <Head>
        {/* Head content remains unchanged */}
      </Head>
      <AnimationStyles />
      <div className="min-h-screen bg-[#1E1E1E] text-white font-sans relative overflow-hidden animate-fade-in">
        {/* Header and mobile menu remain unchanged */}

        <main className="pb-20 relative z-10">
          <section className="container mx-auto px-4 sm:px-6 pt-20 pb-32">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="md:w-1/2 mb-16 md:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight font-playfair">
                  Construa<br />seus sonhos
                </h1>
                <p className="text-gray-300 mb-12 text-base sm:text-lg md:text-xl max-w-md font-lato">
                  A Enchantè Digital é um local onde a criatividade e sonhos se tornam realidade. Transformamos seu negócio dos sonhos em realidade com o marketing digital em Cotia.
                </p>
                <Link href="https://tally.so/r/nWpy7N" 
                  target="_blank" rel="noopener noreferrer"
                  className="bg-white text-[#1E1E1E] px-6 py-3 rounded-md text-base font-medium inline-flex items-center font-lato hover:bg-gray-200 transition-all duration-300 md:px-4 md:py-2 md:text-sm transform hover:scale-105">
                  Saiba mais
                  <svg className="ml-2 w-4 h-4 md:w-3 md:h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 relative mt-12 md:mt-0 md:pl-12">
                <Image
                  src="/public/images/astro1.png"
                  alt="Astronaut illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section className="py-24 bg-[#1E1E1E]" ref={servicesRef}>
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
                {[
                  { icon: <Smartphone className="w-6 h-6 text-white" />, 
                    title: "Na palma da sua mão", 
                    description: "Através do nosso suporte rápido, você pode mandar mensagem de qualquer lugar, sem se preocupar em ter um bom e-mail ou com seu horário. Nossa equipe responderá sempre que houver disponibilidade, e você pode escolher entre nos enviar um formulário, um e-mail ou até mesmo um WhatsApp. O que for mais fácil pra você, será mais fácil pra nós tambem!" 
                  },
                  { icon: <Ruler className="w-6 h-6 text-white" />, 
                    title: "Na sua própria medida", 
                    description: "Com  nossos planos fechados, oferecemos diferentes níveis de necessidades, que podem te ajudar a alcançar o resultado desejado. Todos os nossos pacotes são pensados em necessidades mais comuns, porém isso não nos impede de trazer o melhor pra você! Caso não ache sua necessidade, criamos um pacote personalizado para atender você." 
                  },
                  { icon: <Target className="w-6 h-6 text-white" />, 
                    title: "Movidos à excelência", 
                    description: "Quando dizemos que somos movidos à excelência, isso significa que faremos tudo ao nosso alcance para atingir os resultados esperados. E não estamos sozinhos nessa. Juntamente aos colaboradores e parceiros da Enchantè Digital, temos como ofertar todas suas necessidades com especialistas renomados no mercado, sempre na medida certa para o seu projeto." 
                  },
                ].map((item, index) => (
                  <div key={index} className={`bg-[#2A2A2A] p-6 rounded-lg shadow-lg animate-slide-up transition-all duration-300 ease-in-out`} style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-white p-2 rounded-full mr-4">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold font-playfair text-white">{item.title}</h3>
                      </div>
                      <button 
                        onClick={() => toggleCard(index)} 
                        className="text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
                        aria-expanded={expandedCards[index]}
                        aria-controls={`card-content-${index}`}
                      >
                        {expandedCards[index] ? <ChevronUp /> : <ChevronDown />}
                      </button>
                    </div>
                    <div 
                      id={`card-content-${index}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-300 text-sm font-lato font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rest of the sections remain unchanged */}

        </main>

        <footer className="bg-[#1E1E1E] py-8">
          {/* Footer content remains unchanged */}
        </footer>
      </div>
    </>
  )
}

const fadeInKeyframes = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const slideUpKeyframes = `
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const animationStyles = `
  ${fadeInKeyframes}
  ${slideUpKeyframes}
  .animate-fade-in { animation: fadeIn 1s ease-out; }
  .animate-slide-up { animation: slideUp 0.5s ease-out; }
`;

const AnimationStyles = () => (
  <style jsx global>{`
    ${animationStyles}
    body {
      font-family: 'Lato', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', serif;
    }
  `}</style>
);

export default Component
