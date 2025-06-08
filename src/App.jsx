import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';
import Intro from './components/intro/intro';

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App
