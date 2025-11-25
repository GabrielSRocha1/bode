import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Timeline from './components/Timeline';
import Tokenomics from './components/Tokenomics';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-white bg-black selection:bg-gold-500 selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Features />
          <Timeline />
          <Tokenomics />
          <Gallery />
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </LanguageProvider>
  );
}

export default App;