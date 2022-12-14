import React from 'react';
import "./index.css";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

const App = () => {
  return (
   <div>
    <Navbar />
    <Hero />
    <Services />
   </div>
  )
}

export default App