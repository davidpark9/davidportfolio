import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skills from './components/skills';
import Testimonials from './components/testimonials';
import React from 'react';
import "./index.css"


 export default function App() {
  return (
  
        <main className="text-gray-400-bg-gray-900 body-font">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
  );
}


