import { ChevronRight, Wrench, ShieldCheck, Clock, MonitorPlay, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const phrases = [
  "Soluções em Tecnologia.",
  "Suporte técnico.",
  "Solucionando Problemas.",
  "Peça seu Orçamento."
];

const Hero = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 50); // Velocidade de apagar
    } else {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length === currentPhrase.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2000); // Tempo parado de ler
        }
      }, 100); // Velocidade de digitar
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
      
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute top-40 -left-20 w-72 h-72 bg-navy/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan font-medium text-sm mb-6 border border-cyan/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
              </span>
              Suporte Técnico Profissional
            </div>
            
            {/* Terminal Window */}
            <div className="w-full max-w-2xl mx-auto lg:mx-0 bg-slate-900 rounded-lg overflow-hidden shadow-2xl border border-slate-700 mb-8 font-mono">
              {/* Terminal Header */}
              <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-400 text-xs flex items-center gap-1.5 font-sans">
                  <Terminal size={14} /> root@maickvilhenatech:~
                </div>
                <div className="w-12"></div> {/* Spacer for centering */}
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 text-left h-[180px] sm:h-[140px] flex items-start">
                <div className="text-2xl md:text-3xl text-green-400 leading-relaxed font-semibold">
                  <span className="text-cyan font-bold mr-2">root@mvt:~$</span>
                  <span className="text-slate-100">{text}</span>
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[10px] h-[1em] bg-slate-300 align-middle ml-1 -mt-1"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors">
              Especialista em manutenção de computadores, instalação de sistemas operacionais e suporte técnico para usuários e pequenas empresas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contato" 
                className="w-full sm:w-auto px-8 py-4 bg-navy dark:bg-cyan hover:bg-slate-800 dark:hover:bg-cyan/90 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-navy/20 dark:shadow-cyan/20"
              >
                Solicitar Suporte
                <ChevronRight size={20} />
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-navy dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-medium flex items-center justify-center gap-2 transition-all"
              >
                Ver Serviços
              </a>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <div className="bg-green-100 p-1.5 rounded-md text-green-600">
                  <Wrench size={18} />
                </div>
                <span className="text-sm font-medium">Diagnóstico Preciso</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <div className="bg-blue-100 p-1.5 rounded-md text-blue-600">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-sm font-medium">Soluções Seguras</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <div className="bg-orange-100 p-1.5 rounded-md text-orange-600">
                  <Clock size={18} />
                </div>
                <span className="text-sm font-medium">Atendimento Rápido</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Hero Image/Illustration (Placeholder structure matching requirements) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-lg lg:max-w-xl"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 transition-colors">
              <div className="bg-slate-100 dark:bg-slate-700 rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Manutenção de Computadores e Suporte" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100 dark:border-slate-700 animate-bounce transition-colors" style={{ animationDuration: '3s' }}
              >
                <div className="bg-cyan/10 p-3 rounded-full text-cyan">
                  <MonitorPlay size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Experiência em</p>
                  <p className="text-sm font-bold text-navy dark:text-white">Windows & Linux</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
