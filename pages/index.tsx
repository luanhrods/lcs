// Previous imports remain the same...

const Component: NextPage = () => {
  // Previous state and refs remain the same...
  const [expandedCards, setExpandedCards] = useState<boolean[]>([false, false, false])

  // Previous functions remain the same...

  return (
    <>
      <Head>
        {/* Previous meta tags remain the same... */}
        <link 
          href="/fonts/austin/stylesheet.css" 
          rel="stylesheet"
        />
        <link 
          href="/fonts/aire-pro/stylesheet.css" 
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: 'Austin';
          src: url('/fonts/austin/Austin-Roman.woff2') format('woff2'),
               url('/fonts/austin/Austin-Roman.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'Aire Pro';
          src: url('/fonts/aire-pro/AirePro-Regular.woff2') format('woff2'),
               url('/fonts/aire-pro/AirePro-Regular.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        body {
          font-family: 'Aire Pro', sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Austin', serif;
        }
      `}</style>

      <div className="min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 pt-20 pb-16">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/2 mb-16 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-8 leading-tight font-[Austin]">
                Construa<br />seus sonhos
              </h1>
              <p className="text-gray-300 mb-12 text-lg sm:text-xl max-w-md font-[Aire Pro]">
                A Enchantè Digital é um local onde a criatividade e sonhos se tornam realidade. Transformamos seu negócio dos sonhos em realidade com o marketing digital em Cotia.
              </p>
              <Link 
                href="https://tally.so/r/nWpy7N"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-[#1E1E1E] px-6 py-3 rounded-md text-base font-medium inline-flex items-center font-[Aire Pro] hover:bg-gray-200 transition-all duration-300"
              >
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

        {/* Cards Section */}
        <section className="py-12 bg-[#1E1E1E]" ref={servicesRef}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: <Smartphone className="w-6 h-6 text-white" />, 
                  title: "Na palma da sua mão", 
                  description: "Através do nosso suporte rápido, você pode mandar mensagem de qualquer lugar, sem se preocupar em ter um bom e-mail ou com seu horário. Nossa equipe responderá sempre que houver disponibilidade, e você pode escolher entre nos enviar um formulário, um e-mail ou até mesmo um WhatsApp. O que for mais fácil pra você, será mais fácil pra nós tambem!" 
                },
                { 
                  icon: <Ruler className="w-6 h-6 text-white" />, 
                  title: "Na sua própria medida", 
                  description: "Com  nossos planos fechados, oferecemos diferentes níveis de necessidades, que podem te ajudar a alcançar o resultado desejado. Todos os nossos pacotes são pensados em necessidades mais comuns, porém isso não nos impede de trazer o melhor pra você! Caso não ache sua necessidade, criamos um pacote personalizado para atender você." 
                },
                { 
                  icon: <Target className="w-6 h-6 text-white" />, 
                  title: "Movidos à excelência", 
                  description: "Quando dizemos que somos movidos à excelência, isso significa que faremos tudo ao nosso alcance para atingir os resultados esperados. E não estamos sozinhos nessa. Juntamente aos colaboradores e parceiros da Enchantè Digital, temos como ofertar todas suas necessidades com especialistas renomados no mercado, sempre na medida certa para o seu projeto." 
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#2A2A2A] p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-normal font-[Austin] text-white">{item.title}</h3>
                    </div>
                    <button 
                      onClick={() => {
                        const newExpandedCards = [...expandedCards];
                        newExpandedCards[index] = !newExpandedCards[index];
                        setExpandedCards(newExpandedCards);
                      }} 
                      className="text-white hover:scale-110 transition-transform"
                    >
                      {expandedCards[index] ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </button>
                  </div>
                  <div 
                    className={`transition-all duration-300 ${
                      expandedCards[index] ? 'h-auto opacity-100' : 'h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <p className="text-gray-300 text-sm font-[Aire Pro]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of the sections... */}
      </div>
    </>
  )
}

export default Component
