import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'

export default function Expertise() {
  const expertise = [
    'Microsoft Sentinel',
    'Microsoft Defender XDR',
    'Threat Hunting',
    'Incident Response',
    'Trend Micro Vision One',
    'Malware Analysis',
    'Azure Security',
    'AWS Security',
  ]

  return (
    <div className='min-h-screen bg-black text-white px-8 lg:px-16'>
      <Navbar />

      <div className='py-20'>
        <SectionTitle title='<Expertise />' />

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {expertise.map((item, index) => (
            <div
              key={index}
              className='bg-zinc-950 rounded-3xl p-8 border border-cyan-400/20'
            >
              <h2 className='text-cyan-400 text-xl font-bold leading-8'>
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}