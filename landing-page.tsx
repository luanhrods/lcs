import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luan Chicale Studio</title>
      </Head>

      <header className="w-full py-4 px-8 bg-gray-900 fixed top-0 z-50">
        <nav className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Luan Chicale Studio</div>
          <div>
            {/* Usando tags <a> para rolagem suave */}
            <a href="#services" className="text-gray-400 hover:text-purple-600 text-lg mx-4">Serviços</a>
            <a href="#references" className="text-gray-400 hover:text-purple-600 text-lg mx-4">Referências</a>
            <a href="#contact" className="text-gray-400 hover:text-purple-600 text-lg mx-4">Contato</a>
          </div>
        </nav>
      </header>

      <main className="mt-20">
        {/* Seção Serviços */}
        <section id="services" className="min-h-screen bg-gray-800 text-white py-20 px-8">
          <h2 className="text-5xl font-bold mb-10">O que oferecemos?</h2>
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-700 p-5 rounded-md">
              <h3 className="text-2xl font-semibold">Serviço 1</h3>
              <p>Descrição do serviço 1.</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-md">
              <h3 className="text-2xl font-semibold">Serviço 2</h3>
              <p>Descrição do serviço 2.</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-md">
              <h3 className="text-2xl font-semibold">Serviço 3</h3>
              <p>Descrição do serviço 3.</p>
            </div>
          </div>
        </section>

        {/* Seção Referências */}
        <section id="references" className="min-h-screen bg-gray-700 text-white py-20 px-8">
          <h2 className="text-5xl font-bold mb-10">O que falam sobre nós</h2>
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-600 p-5 rounded-md">
              <h3 className="text-2xl font-semibold">Referência 1</h3>
              <p>Comentário ou depoimento da referência 1.</p>
            </div>
            <div className="bg-gray-600 p-5 rounded-md">
              <h3 className="text-2xl font-semibold">Referência 2</h3>
              <p>Comentário ou depoimento da referência 2.</p>
            </div>
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contact" className="min-h-screen bg-gray-900 text-white py-20 px-8">
          <h2 className="text-5xl font-bold mb-10">Transforme seus sonhos em realidade</h2>
          {/* Formulário de contato ou CTA */}
          <p className="text-lg">Entre em contato conosco para mais informações.</p>
        </section>

        {/* Seção Diferenciais */}
        <section id="differentials" className="min-h-screen bg-gray-800 text-white py-20 px-8">
          <h2 className="text-5xl font-bold mb-10">Nossos Diferenciais</h2>
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-700 p-5 rounded-md">
              <h3 className="text-2xl font-semibold">Há mais de 5 anos</h3>
              <p>Experiência sólida no mercado, oferecendo o melhor para nossos clientes.</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-md">
              <h3 className="text-2xl font-semibold">Alta excelência</h3>
              <p>Compromisso com a qualidade e a satisfação do cliente.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
