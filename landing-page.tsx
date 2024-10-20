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
          <h2 className="text-4xl font-bold mb-10">O que oferecemos?</h2>
          {/* Blocos de serviços */}
        </section>

        {/* Seção Referências */}
        <section id="references" className="min-h-screen bg-gray-700 text-white py-20 px-8">
          <h2 className="text-4xl font-bold mb-10">O que falam sobre nós</h2>
          {/* Blocos de referências */}
        </section>

        {/* Seção Contato */}
        <section id="contact" className="min-h-screen bg-gray-900 text-white py-20 px-8">
          <h2 className="text-4xl font-bold mb-10">Transforme seus sonhos em realidade</h2>
          {/* Formulário de contato ou CTA */}
        </section>
      </main>
    </div>
  )
}
