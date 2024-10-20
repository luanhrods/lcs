import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const Home: NextPage = () => {
  const servicesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans relative overflow-hidden">
      {/* Flying icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Replace with your Instagram SVG path */}
            <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0Z" fill="#9333EA" fillOpacity="0.2"/>
          </svg>
        </div>
        {/* Add more SVG icons here */}
      </div>

      <header className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          <span className="font-semibold text-sm md:text-base font-montserrat">Luan Chicale Studio</span>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8">
          <button onClick={() => scrollToSection(servicesRef)} className="text-gray-400 hover:text-purple-600 text-sm md:text-base font-nunito transition-colors duration-300">Serviços</button>
          <button onClick={() => scrollToSection(testimonialsRef)} className="text-gray-400 hover:text-purple-600 text-sm md:text-base font-nunito transition-colors duration-300">Referências</button>
          <button onClick={() => scrollToSection(contactRef)} className="text-gray-400 hover:text-purple-600 text-sm md:text-base font-nunito transition-colors duration-300">Contato</button>
        </nav>
        <button className="mt-4 md:mt-0 bg-transparent text-white px-4 py-2 rounded-md text-sm md:text-base font-medium font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300">
          Fale conosco agora
        </button>
      </header>

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
              <button className="bg-transparent text-white px-6 py-3 rounded-md text-base md:text-lg font-medium flex items-center font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300">
                Saiba mais
                <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Replace with your Play SVG path */}
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0 md:pl-12">
              <div className="bg-[#1E1E1E] p-4 rounded-lg mb-4 flex items-center max-w-md">
                <div className="bg-purple-600 p-2 rounded mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Replace with your Play SVG path */}
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
                    {/* Replace with your Play SVG path */}
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
                    {/* Replace with your Smartphone SVG path */}
                    <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>, 
                  title: "Na palma da sua mão", 
                  description: "Através do nosso suporte rápido, você pode mandar mensagem de qualquer lugar, sem se preocupar em ter um bom e-mail ou com seu horário. Nossa equipe responderá sempre que houver disponibilidade, e você pode escolher entre nos enviar um formulário, um e-mail ou até mesmo um WhatsApp. O que for mais fácil pra você, sera mais fácil pra nós tambem!" 
                },
                { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Replace with your PenTool SVG path */}
                    <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>, 
                  title: "Na sua própria medida", 
                  description: "Com nossos planos fechados, oferecemos diferentes níveis de necessidade que podem te ajudar a alcançar o resultado desejado. Todos os nossos pacotes são pensados em necessidades mais comuns. Porém, isso não impede de trazer o melhor pra você! Caso não ache sua necessidade, criamos um pacote personalizado para atender suas necessidades." 
                },
                { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Replace with your Play SVG path */}
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
                  <p className="text-gray-400 text-sm font-inter font-normal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat">
            O que oferecemos?
            <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Replace with your Play SVG path */}
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
            </svg>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Replace with your Play SVG path */}
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                </svg>, 
                title: 'Criação de Websites', 
                description: 'Criamos uma landingpage ou site com a melhor qualidade para seu negócio.' 
              },
              { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Replace with your Mail SVG path */}
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Marketing Digital', 
                description: 'Ajudamos você a ser lembrado e impactar o seu nicho no digital.' 
              },
              { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Replace with your Instagram SVG path */}
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Webdesign (UX)', 
                description: 'Criamos experiências incríveis para seu website ou plataforma.' 
              },
              
              { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Replace with your Instagram SVG path */}
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Mídias Sociais', 
                description: 'Gerenciamos, analisamos e produzimos tudo para você nas redes sociais.' 
              },
              { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Replace with your PenTool SVG path */}
                  <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 2L9.586 9.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Design Gráfico', 
                description: 'Fazemos imagens criativas e chamativas para seu negócio.' 
              },
              { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Replace with your Video SVG path */}
                  <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>, 
                title: 'Edição de vídeos', 
                description: 'Tiramos sua imaginação do papel e ela se tornará realidade com a técnica correta.' 
              },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 text-purple-600">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 font-nunito">{service.title}</h3>
                <p className="text-gray-400 text-sm font-nunito">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-24" ref={testimonialsRef}>
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat">
            O que dizem sobre nós?
            <svg className="ml-4 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Replace with your Play SVG path */}
              <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
            </svg>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { 
                offset: 'md:translate-y-0', 
                image: '/placeholder.svg',
                text: "Luan trabalhou extremamente bem com nossa equipe e conseguiu concluir as tarefas sem comprometer a qualidade de seu trabalho. Ele ajudou nossa equipe no lançamento de várias campanhas para diversos clientes em diferentes setores na América do Norte.",
                name: "Justin Lazorko",
                position: "Diretor de Marketing da YourListingExpert"
              },
              { 
                offset: 'md:translate-y-12', 
                image: '/placeholder.svg',
                text: "Eu com certeza adorei todo o profissionalismo e a gentileza em relação ao meu perfil. Aumentei minhas visualizações e consegui alcançar novos parceiros!",
                name: "Thayse",
                position: "Proprietária do perfil @eu.redecorando"
              },
              { 
                offset: 'md:translate-y-24', 
                image: '/placeholder.svg',
                text: "O Luan tornou nosso YouTube muito mais fácil de apresentar para possíveis parceiros. Recomendamos ele sem dúvida e estamos ansiosos pelos próximos projetos.",
                name: "Leonardo Phelipe",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-0 font-montserrat lg:w-1/2"> Transforme seus sonhos<br />em realidade</h2>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-md text-sm md:text-base font-medium inline-flex items-center font-nunito hover:bg-purple-700 transition-colors duration-300">
                Nosso WhatsApp
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Replace with your Play SVG path */}
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1E1E1E] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <span className="font-semibold text-sm font-montserrat">LC Studio</span>
            </div>
            <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Ajuda</Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Política de Privacidade</Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Política de Dados</Link>
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
