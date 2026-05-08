import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-8 lg:px-16 py-8 border-b border-cyan-400/10'>
      <div className='text-cyan-400 text-2xl font-bold tracking-widest'>
        &lt;GANESH /&gt;
      </div>

      <div className='hidden md:flex gap-8 text-sm text-gray-300'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/career'>Career</Link>
        <Link to='/certifications'>Certifications</Link>
        <Link to='/expertise'>Expertise</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}