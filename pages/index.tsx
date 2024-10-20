import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Instagram, Mail, Youtube, Smartphone, PenTool, Video } from 'lucide-react'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans relative overflow-hidden">
      {/* Flying icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Instagram className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float-delay-1">
          <Play className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute top-1/2 left-3/4 animate-float-delay-2">
          <Mail className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float-delay-3">
          <Smartphone className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute bottom-1/4 left-1/2 animate-float-delay-4">
          <PenTool className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
        <div className="absolute top-1/4 right-1/2 animate-float-delay-5">
          <Video className="w-8 h-8 text-purple-600 opacity-20" />
        </div>
      </div>

      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          <span className="font-semibold text-sm font-montserrat">Luan Chicale Studio</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Início</Link>
          <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Serviços</Link>
          <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Referências</Link>
          <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Contato</Link>
        </nav>
        <button className="bg-transparent text-white px-4 py-2 rounded-md text-sm font-medium font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300">
          Fale conosco agora
        </button>
      </header>

      <main className="pb-20 relative z-10">
        <section className="container mx-auto px-6 pt-20 pb-32">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/2 mb-16 md:mb-0">
              <h1 className="text-5xl font-bold mb-8 leading-tight font-montserrat">
                Construa<br />seus sonhos
              </h1>
              <p className="text-gray-400 mb-12 text-lg max-w-md font-nunito">
                O Luan Chicale Studio (LC Studio) é um local onde a criatividade e sonhos se tornam realidade. Transformamos seu negócio dos sonhos em realidade com o marketing digital.
              </p>
              <button className="bg-transparent text-white px-6 py-3 rounded-md text-sm font-medium flex items-center font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300">
                Saiba mais
                <Play className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0">
              <div className="bg-[#1E1E1E] p-4 rounded-lg mb-6 flex items-center">
                <div className="bg-purple-600 p-2 rounded mr-4">
                  <Play className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold font-nunito">Há mais de 5 anos</h3>
                  <p className="text-sm text-gray-400 font-nunito">No mercado digital</p>
                </div>
              </div>
              <div className="bg-[#1E1E1E] p-4 rounded-lg flex items-center">
                <div className="bg-purple-600 p-2 rounded mr-4">
                  <Play className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold font-nunito">Alta excelência</h3>
                  <p className="text-sm text-gray-400 font-nunito">
                    Ofertando soluções de design e<br />
                    marketing digital no Brasil, Canadá<br />
                    e Estados Unidos da América.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1E1E1E] py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Smartphone className="w-6 h-6" />, title: "Na palma da sua mão", description: "Através do nosso suporte rápido, você pode mandar mensagem de qualquer lugar, sem se preocupar em ter um bom e-mail ou com seu horário. Nossa equipe responderá sempre que houver disponibilidade, e você pode escolher entre nos enviar um formulário, um e-mail ou até mesmo um WhatsApp. O que for mais fácil pra você, sera mais fácil pra nós tambem!" },
                { icon: <PenTool className="w-6 h-6" />, title: "Na sua própria medida", description: "Com nossos planos fechados, oferecemos diferentes níveis de necessidade que podem te ajudar a alcançar o resultado desejado. Todos os nossos pacotes são pensados em necessidades mais comuns. Porém, isso não impede de trazer o melhor pra você! Caso não ache sua necessidade, criamos um pacote personalizado para atender suas necessidades." },
                { icon: <Play className="w-6 h-6" />, title: "Movidos à excelência", description: "Quando dizemos que somos movidos à excelência significa que faremos tudo ao nosso alcance para atingir os resultados esperados, e não estamos sozinhos nessa. Juntamente aos colaboradores e parceiros da LC Studio, temos como ofertar todas suas necessidades com especialistas renomados no mercado, sempre na medida certa." },
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
            <Play className="ml-4 w-6 h-6" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { icon: <Play className="w-8 h-8" />, title: 'Criação de Websites', description: 'Criamos uma landingpage ou site com a melhor qualidade para seu negócio.' },
              { icon: <Mail className="w-8 h-8" />, title: 'Marketing Digital', description: 'Ajudamos você a ser lembrado e impactar o seu nicho no digital.' },
              { icon: <Instagram className="w-8 h-8" />, title: 'Webdesign (UX)', description: 'Criamos experiências incríveis para seu website ou plataforma.' },
              { icon: <Instagram className="w-8 h-8" />, title: 'Mídias Sociais', description: 'Gerenciamos, analisamos e produzimos tudo para você nas redes sociais.' },
              { icon: <PenTool className="w-8 h-8" />, title: 'Design Gráfico', description: 'Fazemos imagens criativas e chamativas para seu negócio.' },
              { icon: <Video className="w-8 h-8" />, title: 'Edição de vídeos', description: 'Tiramos sua imaginação do papel e ela se tornará realidade com a técnica correta.' },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 text-purple-600">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 font-nunito">{service.title}</h3>
                <p className="text-gray-400 text-sm font-nunito">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-center font-montserrat">
            O que dizem sobre nós?
            <Play className="ml-4 w-6 h-6" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { offset: 'md:translate-y-0', image: '/placeholder.svg' },
              { offset: 'md:translate-y-12', image: '/placeholder.svg' },
              { offset: 'md:translate-y-24', image: '/placeholder.svg' },
            ].map((item, index) => (
              <div key={index} className={`bg-[#1E1E1E] p-6 rounded-lg ${item.offset}`}>
                <p className="text-gray-400 mb-4 text-sm font-nunito">
                  Texto lindo e maravilhoso que vai ficar bem aqui para mostrar como seu cliente ficou feliz com nosso serviço e para mostrar que somos incríveis em duas linhas diferentes :)
                </p>
                <div className="flex items-center">
                  <Image src={item.image} alt="Client" width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-sm font-nunito">Justin Lazorko, Diretor de Marketing</h4>
                    <p className="text-xs text-gray-400 font-nunito">da YourListingExpert</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-4xl font-bold mb-8 md:mb-0 font-montserrat md:w-1/2">Transforme seu sonho 
              em realidade.</h2>
            <button className="bg-transparent text-white px-8 py-3 rounded-md text-sm font-medium inline-flex items-center font-nunito border border-purple-600 hover:bg-purple-600 transition-colors duration-300">
              Nosso WhatsApp
              <Play className="ml-2 w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-[#1E1E1E] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <span className="font-semibold text-sm font-montserrat">LC Studio</span>
            </div>
            <nav className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Ajuda</Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Política de Privacidade</Link>
              <Link href="#" className="text-gray-400 hover:text-purple-600 text-sm font-nunito transition-colors duration-300">Política de Dados</Link>
            </nav>
          </div>
          <div className="text-center sm:text-center text-gray-400 text-sm font-nunito">
            © 2005-2024 LC Studio (Former ProjetoMidia)
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
