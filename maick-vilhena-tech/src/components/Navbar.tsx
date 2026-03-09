import { useState, useEffect } from 'react';
import { Menu, X, MonitorPlay } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
      style={{ backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent' }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-cyan flex items-center justify-center w-10 h-10 rounded-lg text-white group-hover:bg-white group-hover:text-cyan transition-colors">
             <MonitorPlay size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-slate-900'} transition-colors`}>
            Maick Vilhena <span className="text-cyan">Tech</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-cyan ${
                isScrolled ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="bg-cyan hover:bg-cyan/90 text-white font-medium px-5 py-2.5 rounded-lg transition-all shadow-md shadow-cyan/20"
          >
            Fale Comigo
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cyan p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-navy shadow-xl border-t border-slate-800 md:hidden flex flex-col">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-4 text-slate-300 hover:bg-slate-800 hover:text-cyan border-b border-slate-800/50 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
