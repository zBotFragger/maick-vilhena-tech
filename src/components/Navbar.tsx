import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-4 dark:bg-slate-900/95 border-b border-transparent dark:border-slate-800' : 'bg-transparent py-6'
      }`}
      style={{ backgroundColor: isScrolled ? (theme === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.95)') : 'transparent' }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center group overflow-hidden rounded-xl shadow-md">
          <img 
            src="/logo.png" 
            alt="Maick Vilhena Tech" 
            className="h-14 w-40 md:h-16 md:w-56 object-cover object-center group-hover:scale-105 transition-transform duration-300" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/80 dark:hover:bg-slate-800/80' 
                    : 'text-slate-600 hover:text-white hover:bg-slate-800/80 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/80'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="https://wa.me/5591984906388" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-cyan hover:bg-cyan/90 text-white font-medium px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-110 shadow-md shadow-cyan/20 cursor-pointer"
          >
            Fale Comigo
          </a>
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
              isScrolled ? 'bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white dark:bg-slate-800/80 dark:hover:bg-slate-700' : 'bg-slate-200/50 hover:bg-slate-800 hover:text-white text-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white'
            }`}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
              isScrolled ? 'bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white dark:bg-slate-800/80 dark:hover:bg-slate-700' : 'bg-slate-200/50 hover:bg-slate-800 hover:text-white text-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white'
            }`}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            className="text-cyan p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-navy shadow-xl border-t border-slate-800 md:hidden flex flex-col overflow-hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 text-slate-300 hover:bg-slate-800 hover:text-cyan border-b border-slate-800/50 font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
