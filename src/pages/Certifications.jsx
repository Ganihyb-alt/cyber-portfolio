import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'

export default function Certifications() {
  return (
    <div className='min-h-screen bg-black text-white px-8 lg:px-16'>
      <Navbar />

      <div className='py-20'>
        <SectionTitle title='<Certifications />' />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-zinc-950 p-8 rounded-3xl border border-cyan-400/20'>
            <h2 className='text-cyan-400 text-xl font-bold'>CEH</h2>
          </div>

          <div className='bg-zinc-950 p-8 rounded-3xl border border-cyan-400/20'>
            <h2 className='text-cyan-400 text-xl font-bold'>Microsoft SC 300</h2>
          </div>

          <div className='bg-zinc-950 p-8 rounded-3xl border border-cyan-400/20'>
            <h2 className='text-cyan-400 text-xl font-bold'>Microsoft SC 200</h2>
          </div>

          <div className='bg-zinc-950 p-8 rounded-3xl border border-cyan-400/20'>
            <h2 className='text-cyan-400 text-xl font-bold'>Microsoft SC 100</h2>
          </div>
          
          <div className='bg-zinc-950 p-8 rounded-3xl border border-cyan-400/20'>
            <h2 className='text-cyan-400 text-xl font-bold'>Goocle Associate Cloud Engineer</h2>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  )
}