import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
  return (
    <div className='min-h-screen bg-black text-white px-8 lg:px-16'>
      <Navbar />

      <div className='py-20'>
        <SectionTitle title='<Contact Me />' />

        <div className='bg-zinc-950 rounded-3xl border border-cyan-400/20 p-12'>
          <div className='space-y-8 text-lg'>
            <p>
              📧 ganeshghegde1992@gmail.com
            </p>

            <div className='flex gap-5 mt-6'>
  <a
    href='https://www.linkedin.com/in/ganesh-hegde-06b6a49a/'
    target='_blank'
    rel='noopener noreferrer'
  >
    <button className='px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300'>
      LinkedIn
    </button>
  </a>

  <a
    href='https://github.com/Ganihyb-alt'
    target='_blank'
    rel='noopener noreferrer'
  >
    <button className='px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300'>
      GitHub
    </button>
  </a>
</div>

            <a href='/resume.pdf' download>
  <button className='px-8 py-4 bg-cyan-400 text-black rounded-xl font-bold hover:scale-105 transition duration-300'>
    Download Resume
  </button>
</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}