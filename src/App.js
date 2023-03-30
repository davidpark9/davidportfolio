import './App.css';
import React from 'react';
import "./index.css"


import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';
import Testimonials from './components/testimonials';


 export default function App() {
  return (
  
        <main className="text-gray-400-bg-gray-900 body-font">
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
  );
}


