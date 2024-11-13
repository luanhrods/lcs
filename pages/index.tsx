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
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

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
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L8FB0ESVM2"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L8FB0ESVM2');
          `
        }} />
        <title>Enchantè Digital | Agência de Marketing Cotia - Serviços Digitais e Marketing de Conteúdo</title>
        <meta name="description" content="A Enchantè Digital oferece serviços de marketing digital, design gráfico e produção de conteúdo. Transforme seu negócio com nossa expertise em projeto de mídia e marketing de conteúdo em Cotia, Campinas, São Paulo e região." />
        <meta name="keywords" content="Enchantè Digital, Enchante Digital, Agência de Marketing Cotia, Agência de Marketing em Cotia, Marketing Cotia, Marketing Digital Cotia, Agência de Marketing Campinas, Marketing Digital Campinas, Agência de Marketing São Paulo, Marketing Digital São Paulo, Projeto Mídia, Marketing Digital, Serviços Digitais, Marketing de conteúdo, designer gráfico barato, Produção de marketing, SEO Cotia, Social Media Cotia, Google Ads Cotia, Facebook Ads Cotia, Instagram Ads Cotia, Marketing de Conteúdo Cotia, Inbound Marketing Cotia, Outbound Marketing Cotia, Email Marketing Cotia, Marketing de Influência Cotia" />
        <link rel="canonical" href="https://www.enchanteagency.com" />
        <meta property="og:title" content="Enchantè Digital | Agência de Marketing Cotia - Serviços Digitais e Marketing de Conteúdo" />
        <meta property="og:description" content="Transforme seu negócio com a Enchantè Digital. Especialistas em marketing digital, design gráfico e produção de conteúdo em Cotia." />
        <meta property="og:image" content="https://www.enchante.digital/og-image.jpg" />
        <meta property="og:url" content="https://www.enchante.digital" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Enchantè Digital",
              "alternateName": "Enchante Digital",
              "description": "A Enchantè Digital oferece serviços de marketing digital, design gráfico e produção de conteúdo em Cotia.",
              "url": "https://www.enchante.digital",
              "logo": "https://www.enchante.digital/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/enchanteagency",
                "https://www.instagram.com/enchanteagency",
                "https://www.linkedin.com/company/enchantedigital"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cotia",
                "addressRegion": "SP",
                "addressCountry": "BR"
              }
            }
          `}
        </script>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <AnimationStyles />
      <div className="min-h-screen bg-[#1E1E1E] text-white font-sans relative overflow-hidden animate-fade-in">
        <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Enchantè Digital Logo" width={120} height={380} />
            <span className="font-semibold text-sm md:text-base font-playfair"></span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection(servicesRef)} className="text-gray-300 hover:text-white text-sm md:text-base font-lato transition-colors duration-300">Serviços</button>
            <button onClick={() => scrollToSection(testimonialsRef)} className="text-gray-300 hover:text-white text-sm md:text-base font-lato transition-colors duration-300">Referências</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-gray-300 hover:text-white text-sm md:text-base font-lato transition-colors duration-300">Contato</button>
          </nav>
          <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-white text-[#1E1E1E] px-4 py-2 rounded-md text-sm md:text-base font-medium font-lato transition-all duration-300 hover:bg-gray-200 hover:scale-105">
            Fale conosco agora
          </Link>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Mobile menu */}
        <div className={`fixed top-0 right-0 bottom-0 w-64 bg-[#2A2A2A] z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4" aria-label="Fechar menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-8 flex flex-col space-y-4">
              <button onClick={() => scrollToSection(servicesRef)} className="block w-full text-left py-2 text-gray-300 hover:text-white text-base font-lato transition-colors duration-300">Serviços</button>
              <button onClick={() => scrollToSection(testimonialsRef)} className="block w-full text-left py-2 text-gray-300 hover:text-white text-base font-lato transition-colors duration-300">Referências</button>
              <button onClick={() => scrollToSection(contactRef)} className="block w-full text-left py-2 text-gray-300 hover:text-white text-base font-lato transition-colors duration-300">Contato</button>
              <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="mt-4 w-full bg-white text-[#1E1E1E] px-4 py-2 rounded-md text-base font-medium font-lato hover:bg-gray-200 transition-colors duration-300 text-center">
                Fale conosco agora
              </Link>
            </div>
          </div>
        </div>

        <main className="pb-20 relative z-10">
          <section className="container mx-auto px-6 pt-20 pb-32">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="md:w-1/2 mb-16 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-semibold mb-8 leading-tight font-playfair">
                  Construa<br />seus sonhos
                </h1>
                <p className="text-gray-300 mb-12 text-lg md:text-xl max-w-md font-lato">
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
                  src="/public/images/Astro1.png"
                  alt="Astronaut illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section className="py-24 bg-[#1E1E1E]" ref={servicesRef}>
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
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
                      <button onClick={() => toggleCard(index)} className="text-white transition-transform duration-300 ease-in-out transform hover:scale-110">
                        {expandedCard === index ? <ChevronUp /> : <ChevronDown />}
                      </button>
                    </div>
                    <p className={`text-gray-300 text-sm font-lato font-normal transition-all duration-300 ease-in-out ${expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-semibold mb-16 flex items-center justify-center font-playfair text-center">
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
                  link:   'https://tally.so/r/nWpy7N'
                },
                { icon: '/images/services/marketing-digital.svg', 
                  title: 'Marketing Digital', 
                  description: 'Ajudamos você a ser lembrado e  impactar o seu nicho no digital.',
                  link: 'https://tally.so/r/nWpy7N'
                },
                { icon: '/images/services/webdesign.svg', 
                  title: 'Webdesign (UX)', 
                  description: 'Criamos experiências incríveis para seu website ou plataforma.',
                  link: 'https://tally.so/r/nWpy7N'
                },
                { icon: '/images/services/midias-sociais.svg', 
                  title: 'Mídias Sociais', 
                  description: 'Gerenciamos, analisamos e produzimos tudo para você nas redes sociais.',
                  link: 'https://tally.so/r/nWpy7N'
                },
                { icon: '/images/services/design-grafico.svg', 
                  title: 'Design Gráfico', 
                  description: 'Fazemos imagens criativas e chamativas para seu negócio.',
                  link: 'https://tally.so/r/nWpy7N'
                },
                { icon: '/images/services/edicao-videos.svg', 
                  title: 'Edição de vídeos', 
                  description: 'Tiramos sua imaginação do papel e ela se tornará realidade com a técnica correta.',
                  link: 'https://tally.so/r/nWpy7N'
                },
              ].map((service, index) => (
                <Link href={service.link} key={index} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#2A2A2A] active:scale-95 transform hover:scale-105">
                  <div className="mb-4 text-white">
                    <Image src={service.icon} alt={`${service.title} - Enchantè Digital`} width={69} height={69} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-playfair">{service.title}</h3>
                  <p className="text-gray-300 text-sm font-lato h-20 flex items-center justify-center">{service.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-semibold mb-16 flex items-center justify-center font-playfair text-center">
              Já trabalhamos com
              <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
              </svg>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center justify-center p-4 transition-all duration-300 ease-in-out transform hover:scale-110">
                  <Image 
                    src={company.logo} 
                    alt={`${company.name} - Cliente da Enchantè Digital`} 
                    width={120} 
                    height={60} 
                    className="max-w-full h-auto object-contain" 
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-6 py-24 mb-24" ref={testimonialsRef}>
            <h2 className="text-3xl font-semibold mb-16 flex items-center justify-center font-playfair text-center">
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
                  text: "O Luan (nosso Head de marketing) trabalhou extremamente bem com nossa equipe e conseguiu concluir as tarefas sem comprometer a qualidade de seu trabalho. Eles ajudaram nossa equipe no lançamento de várias campanhas para diversos clientes em diferentes setores na América do Norte.",
                  name: "- Justin Lazorko",
                  position: "Diretor de Marketing da YourListingExpert"
                },
                { 
                  offset: 'md:translate-y-12', 
                  image: '/images/testimonials/testimonial2.png',
                  text: "Eu adorei a atenção e gentileza que deram pro meu perfil... Aumentei minhas visualizações e consegui alcançar novos parceiros. Me ajudaram a melhorar a qualidade dos meus vídeos com dicas maravilhosas!!! Recomendo muito!!!",
                  name: "- Thayse Rodrigues",
                  position: "Proprietária do perfil @eu.redecorando"
                },
                { 
                  offset: 'md:translate-y-24', 
                  image: '/images/testimonials/testimonial3.png',
                  text: "A Enchantè Digital tornou nosso YouTube muito mais fácil de apresentar para possíveis parceiros. Recomendamos eles e sua equipe. Trabalho profissional, seguro, com relatórios e alinhamentos ótimos. Foi um prazer trabalhar com eles.",
                  name: "- Leonardo Phelipe",
                  position: "Fundador do zeroEleven Agency"
                },
              ].map((item, index) => (
                <div key={index} className={`bg-[#2A2A2A] p-8 rounded-lg ${item.offset} transition-all duration-300 ease-in-out transform hover:scale-105`}>
                  <p className="text-gray-300 mb-6 text-base font-lato">
                    {item.text}
                  </p>
                  <div className="flex items-center">
                    <Image src={item.image} alt={`${item.name} - Depoimento sobre a Enchantè Digital`} width={64} height={64} className="rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold text-base font-playfair text-white">{item.name}</h4>
                      <p className="text-sm text-gray-400 font-lato">{item.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#2A2A2A] text-white py-24" ref={contactRef}>
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-0 font-playfair md:w-1/2 text-center md:text-left"> Transforme seus sonhos<br />em realidade</h2>
                <Link href="https://wa.me/5511962140166?text=Ea%C3%AD%20gente,%20tudo%20bem?%20Eu%20gostaria%20de%20saber%20mais%20sobre%20todos%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20tem,%20por%20favor."
                  target="_blank" rel="noopener noreferrer"
                  className="bg-white text-[#1E1E1E] px-8 py-3 rounded-md text-sm md:text-base font-medium inline-flex items-center font-lato hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
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
                <Image src="/images/logo.png" alt="Enchantè Digital Logo" width={80} height={280} />
                <span className="font-semibold text-sm font-playfair"></span>
              </div>
              <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-4 md:mb-0">
                <Link href="https://tally.so/r/3qKJl7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-lato transition-colors duration-300">Ajuda</Link>
                <Link href="https://tally.so/r/w4N4Qk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-lato transition-colors duration-300">Política de Privacidade</Link>
                <Link href="https://tally.so/r/w4N4Qk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-lato transition-colors duration-300">Política de Dados</Link>
                <Link href="https://linkedin.com/company/enchantedigital/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-lato transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </nav>
              <div className="text-gray-400 text-sm font-lato">
                © 2024 Enchantè Digital | Todos os direitos resevados.
              </div>
            </div>
          </div>
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
