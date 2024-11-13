import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { Smartphone, Ruler, Target, Linkedin, ChevronDown, ChevronUp } from 'lucide-react'

const Home: NextPage = () => {
  const servicesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedCards, setExpandedCards] = useState<boolean[]>([false, false, false])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

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
        <title>Enchantè Digital | Agência de Marketing Cotia</title>
        <meta name="description" content="A Enchantè Digital oferece serviços de marketing digital, design gráfico e produção de conteúdo em Cotia e região." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-[#1E1E1E] text-white font-sans">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Image src="/images/logo.png" alt="Enchantè Digital Logo" width={120} height={40} />
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection(servicesRef)} className="text-gray-300 hover:text-white font-inter">Serviços</button>
            <button onClick={() => scrollToSection(testimonialsRef)} className="text-gray-300 hover:text-white font-inter">Referências</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-gray-300 hover:text-white font-inter">Contato</button>
          </nav>
          <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-white text-[#1E1E1E] px-4 py-2 rounded-md font-inter hover:bg-gray-200 transition-all duration-300">
            Fale conosco
          </Link>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        <main>
          <section className="container mx-auto px-4 pt-20 pb-16">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="md:w-1/2 mb-16 md:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 font-montserrat">
                  Construa<br />seus sonhos
                </h1>
                <p className="text-gray-300 mb-12 text-lg sm:text-xl max-w-md font-inter">
                  A Enchantè Digital transforma seu negócio dos sonhos em realidade com marketing digital em Cotia.
                </p>
                <Link href="https://tally.so/r/nWpy7N" 
                  target="_blank" rel="noopener noreferrer"
                  className="bg-white text-[#1E1E1E] px-6 py-3 rounded-md font-medium inline-flex items-center font-inter hover:bg-gray-200 transition-all duration-300">
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 relative mt-12 md:mt-0 md:pl-12">
                <Image
                  src="/images/services/Astro1.png"
                  alt="Astronaut illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section className="py-12 bg-[#1E1E1E]" ref={servicesRef}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: <Smartphone className="w-6 h-6 text-white" />, 
                    title: "Na palma da sua mão", 
                    description: "Suporte rápido via mensagem, e-mail ou WhatsApp. Respondemos sempre que possível, da forma mais conveniente para você." 
                  },
                  { icon: <Ruler className="w-6 h-6 text-white" />, 
                    title: "Na sua própria medida", 
                    description: "Planos personalizados para atender suas necessidades específicas, desde pacotes padrão até soluções sob medida." 
                  },
                  { icon: <Target className="w-6 h-6 text-white" />, 
                    title: "Movidos à excelência", 
                    description: "Comprometidos em alcançar os melhores resultados, contando com especialistas renomados para cada projeto." 
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-white p-2 rounded-full mr-4">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold font-montserrat">{item.title}</h3>
                      </div>
                      <button 
                        onClick={() => toggleCard(index)} 
                        className="text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
                      >
                        {expandedCards[index] ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </button>
                    </div>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedCards[index] ? 'max-h-[1000px]' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-300 text-sm font-inter">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Adicione outras seções conforme necessário */}

        </main>

        <footer className="bg-[#1E1E1E] py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Image src="/images/logo.png" alt="Enchantè Digital Logo" width={80} height={30} />
              </div>
              <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
                <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-inter">Ajuda</Link>
                <Link href="https://tally.so/r/w4N4Qk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-inter">Política de Privacidade</Link>
                <Link href="https://linkedin.com/company/enchantedigital/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-inter">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </nav>
              <div className="text-gray-400 text-sm font-inter">
                © 2024 Enchantè Digital | Todos os direitos reservados.
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', serif;
        }
      `}</style>
    </>
  )
}

export default Home
