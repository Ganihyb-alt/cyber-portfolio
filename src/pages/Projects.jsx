import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'

import projectImage from '../assets/images/projects.png'

export default function Projects() {
  return (
    <div className='min-h-screen bg-black text-white px-8 lg:px-16'>
      <Navbar />

      <div className='py-20'>
        <SectionTitle title='<Projects />' />

        <div className='grid lg:grid-cols-2 gap-12'>
          <div className='bg-zinc-950 rounded-3xl p-8 border border-cyan-400/20'>
            <img
              src={projectImage}
              alt='Projects'
              className='rounded-2xl mb-8'
            />

            <h2 className='text-2xl text-cyan-400 font-bold'>
              Enterprise Crypto Asset Discovery & Quantum Risk Exposure Mapping Tool
            </h2>

            <p className='text-gray-400 leading-8 mt-5'>
              Enterprise cybersecurity capstone project focused on crypto inventory discovery,
              CBOM analysis, and post quantum cryptography risk visibility.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}