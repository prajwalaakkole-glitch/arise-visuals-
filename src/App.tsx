import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechnoPrismWork from './components/TechnoPrismWork';
import Logofolio from './components/Logofolio';
import SocialArchive from './components/SocialArchive';
import PrintShowcase from './components/PrintShowcase';
import Arka from './components/Arka';
import Tools from './components/Tools';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Starfield from './components/Starfield';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-midnight selection:bg-cyan-glow/30 selection:text-white">
      <div className="blueprint-grid" />
      
      {/* Light Leaks */}
      <div className="light-leak top-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-glow" />
      <div className="light-leak bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-prism-purple" />
      <div className="light-leak top-[40%] right-[20%] w-[400px] h-[400px] bg-cyan-glow opacity-10" />

      <Starfield />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <TechnoPrismWork />
        <Logofolio />
        <SocialArchive />
        <PrintShowcase />
        <Arka />
        <Tools />
        <Contact />
      </main>

      {/* Vertical Progress Bar */}
      <div className="fixed left-0 top-0 w-[4px] h-full bg-white/5 z-[100] hidden lg:block">
        <motion.div 
          className="w-full bg-cyan-glow shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          animate={{ height: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>
    </div>
  );
}
