import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.tsx';
import About from './pages/About.tsx';
import Skills from './pages/Skills.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<About />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
