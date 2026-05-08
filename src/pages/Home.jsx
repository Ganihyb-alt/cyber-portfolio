import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import profileImage from '../assets/images/profile.png'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />

      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,255,200,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.08)_1px,transparent_1px)] bg-[size:40px_40px]' />
      </div>

      <section className='relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-20 gap-20'>
        <div className='max-w-3xl'>
          <p className='text-gray-400 text-xl mb-5'>
            Hello There! I am
          </p>

          <h1 className='text-5xl lg:text-7xl font-black leading-tight uppercase'>
            <span className='text-cyan-400'>
              GANESH
            </span>
            <br />
            HEGDE
          </h1>

          <h2 className='mt-6 text-2xl text-gray-300'>
            SOC Analyst | Threat Hunter | Microsoft Defender & Sentinel Specialist
          </h2>

          <p className='text-gray-400 leading-9 text-lg mt-8'>
            Cybersecurity professional with 6+ years of experience in SOC operations,
            incident response, EDR/XDR monitoring, Microsoft Sentinel, Microsoft Defender,
            threat hunting, and cloud security across enterprise environments.
          </p>

          <div className='flex flex-wrap gap-5 mt-10'>
            <Link to='/career'>
              <button className='px-7 py-4 bg-cyan-400 text-black rounded-xl font-bold'>
                My Career Timeline
              </button>
            </Link>

            <Link to='/certifications'>
              <button className='px-7 py-4 border border-cyan-400 text-cyan-400 rounded-xl'>
                Certifications
              </button>
            </Link>

            <Link to='/expertise'>
              <button className='px-7 py-4 border border-cyan-400 text-cyan-400 rounded-xl'>
                Expertise
              </button>
            </Link>

            <Link to='/projects'>
              <button className='px-7 py-4 border border-cyan-400 text-cyan-400 rounded-xl'>
                Projects
              </button>
            </Link>

            <Link to='/contact'>
              <button className='px-7 py-4 border border-cyan-400 text-cyan-400 rounded-xl'>
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full'></div>

          <img
            src={profileImage}
            alt='Ganesh Hegde'
            className='relative w-[350px] h-[450px] object-cover rounded-3xl border border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.4)]'
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}