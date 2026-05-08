import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import CareerTimeline from './pages/CareerTimeline'
import Certifications from './pages/Certifications'
import Expertise from './pages/Expertise'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/career' element={<CareerTimeline />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/expertise' element={<Expertise />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App