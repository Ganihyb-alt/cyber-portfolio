import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'

export default function CareerTimeline() {
  return (
    <div className='min-h-screen bg-black text-white px-8 lg:px-16'>
      <Navbar />

      <div className='py-20'>
        <SectionTitle title='<Career Timeline />' />

        <div className='space-y-10'>
          <div className='border border-cyan-400/20 rounded-3xl p-8 bg-zinc-950'>
            <h2 className='text-2xl text-cyan-400 font-bold'>
              Kyndryl Pvt Ltd
            </h2>

            <p className='text-gray-500 mt-2'>
              Senior Associate – Cybersecurity Defence (2019 – Present)
            </p>

            <p className='text-gray-400 mt-5 leading-8'>
              SOC L1/L2 operations, Microsoft Defender, Sentinel, threat hunting,
              malware analysis, cloud security monitoring, EDR/XDR operations.
            </p>
          </div>

          <div className='border border-cyan-400/20 rounded-3xl p-8 bg-zinc-950'>
            <h2 className='text-2xl text-cyan-400 font-bold'>
              IBM India Pvt Ltd
            </h2>

            <p className='text-gray-500 mt-2'>
              IAM Security Analyst (2014 – 2019)
            </p>

            <p className='text-gray-400 mt-5 leading-8'>
              Identity management, Active Directory, ISIM, access controls,
              audit compliance, provisioning and deprovisioning.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}