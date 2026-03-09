import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Differentials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
