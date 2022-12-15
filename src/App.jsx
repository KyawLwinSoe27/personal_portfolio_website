import React from 'react';
import "./index.css";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
   <div>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Services />
    <Contact />
   </div>
  )
}

export default App