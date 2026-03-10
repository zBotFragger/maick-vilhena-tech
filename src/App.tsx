import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import { useEffect } from 'react';
import Lenis from 'lenis';
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-cyan selection:text-white dark:bg-slate-900 dark:text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Differentials />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
