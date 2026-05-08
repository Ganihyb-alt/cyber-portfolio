import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'

import aboutImage from '../assets/images/about.png'

export default function About() {
  return (
    <div className='min-h-screen bg-black text-white px-8 lg:px-16'>
      <Navbar />

      <div className='py-20'>
        <SectionTitle title='<About Me />' />

        <div className='grid lg:grid-cols-2 gap-20 items-center'>
          <div>
            <p className='text-gray-400 leading-9 text-lg'>
              I specialize in SOC operations, threat detection, incident response,
              Microsoft Defender XDR, Microsoft Sentinel, cloud security, malware analysis,
              and enterprise cybersecurity operations.
            </p>

            <p className='text-gray-400 leading-9 text-lg mt-8'>
              My experience spans IBM and Kyndryl where I worked on enterprise security,
              cloud monitoring, EDR/XDR operations, SIEM integrations, and proactive threat hunting.
            </p>
          </div>

          <img
            src={aboutImage}
            alt='About'
            className='rounded-3xl border border-cyan-400/20'
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}