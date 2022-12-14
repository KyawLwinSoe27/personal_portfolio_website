import React from 'react';
import "./index.css";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';

const App = () => {
  return (
   <div>
    <Navbar />
    <Hero />
    <About />
    <Services />
   </div>
  )
}

export default App