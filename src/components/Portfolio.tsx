import { useState } from 'react';
import { Cpu, HardDrive, MonitorUp, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import imgLinux from '../assets/portfolio/linux_upgrade.png';
import imgNvme from '../assets/portfolio/nvme_upgrade.png';

const portfolioItems = [
  {
    icon: MonitorUp,
    title: 'Linux para Notebooks Antigos',
    description: 'Ressurreição de um notebook de 2014 com Windows 7 lento. Instalado Linux Mint XFCE, resultando em um boot 3x mais rápido e navegação fluída.',
    image: imgLinux
  },
  {
    icon: HardDrive,
    title: 'Kit Upgrade de Desempenho',
    description: 'Substituição de HD antigo por SSD NVMe + acréscimo de 8GB de RAM. Clonagem do sistema limpa e preservação de todos os arquivos importantes.',
    image: imgNvme
  },
  {
    icon: Cpu,
    title: 'Manutenção Pós-Superaquecimento',
    description: 'Desmontagem completa de desktop game. Limpeza interna, organização de cabos e troca de pasta térmica prateada. Máquina deixou de desligar sozinha.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: Shield,
    title: 'Limpeza de Ameaças Sérias',
    description: 'Recuperação de computador de escritório infectado por ransomware moderado (vírus de resgate). Limpeza off-line e formatação contida preventiva.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  }
];

const Portfolio = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4 transition-colors">
              Trabalhos em <span className="text-cyan">Destaque</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 transition-colors">
              Confira alguns dos serviços práticos que realizamos recentemente, aplicando nossa filosofia de otimização e confiabilidade.
            </p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            href="#contato" 
            className="inline-flex items-center gap-2 text-cyan font-medium hover:text-navy dark:hover:text-white transition-colors"
          >
            Falar sobre meu caso <ArrowRight size={18} />
          </motion.a>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="group relative h-[420px] rounded-2xl cursor-pointer [perspective:1000px]"
              onClick={() => handleCardClick(index)}
            >
              <div 
                className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-300 dark:border-slate-800 hover:shadow-2xl hover:shadow-slate-300 dark:hover:shadow-cyan/10 transition-all duration-300 flex flex-col [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                  {/* Image Container */}
                  <div className="relative h-[256px] overflow-hidden">
                    <div className="absolute inset-0 bg-navy/20 dark:bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm shadow-lg p-3 rounded-xl border border-cyan/20 dark:border-slate-700/50 transition-colors">
                      <item.icon size={24} className="text-cyan" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold text-navy dark:text-white group-hover:text-cyan transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-slate-800 dark:bg-slate-800 text-slate-100 p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border-2 border-cyan/30 overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                    <item.icon size={48} className="mb-6 text-cyan opacity-90" />
                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed font-medium">
                      {item.description}
                    </p>
                    <div className="mt-8 text-sm font-bold tracking-wider uppercase text-cyan bg-cyan/10 border border-cyan/20 py-2 px-6 rounded-full hover:bg-cyan/20 transition-colors">
                      Clique para Voltar
                    </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
