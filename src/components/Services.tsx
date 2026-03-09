import { Settings, Download, Wrench, Activity, ShieldAlert, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: Settings,
    title: 'Formatação e Otimização',
    description: 'Instalação limpa do sistema com backup de dados e configuração para máximo desempenho do seu computador.'
  },
  {
    icon: Download,
    title: 'Windows e Linux',
    description: 'Instalação e configuração especializada de sistemas operacionais Windows e distribuições Linux.'
  },
  {
    icon: Wrench,
    title: 'Manutenção de Hardware',
    description: 'Limpeza preventiva, troca de pasta térmica, upgrades de SSD/Memória e reparos físicos em desktops e notebooks.'
  },
  {
    icon: Activity,
    title: 'Diagnóstico de Desempenho',
    description: 'Análise completa para identificar lentidão, travamentos e recomendação de melhorias para sua máquina.'
  },
  {
    icon: ShieldAlert,
    title: 'Remoção de Vírus',
    description: 'Limpeza profunda do sistema, remoção de malwares e instalação de soluções de segurança confiáveis.'
  },
  {
    icon: Headphones,
    title: 'Suporte Técnico',
    description: 'Atendimento presencial ou remoto para resolver problemas de software, redes e suporte geral ao usuário.'
  }
];

const Services = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => 
      prev.includes(index) 
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6 transition-colors">
            Nossos <span className="text-cyan">Serviços</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 transition-colors">
            Oferecemos uma gama completa de serviços de TI com foco na resolução rápida e eficiente dos seus problemas tecnológicos.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => {
            const isFlipped = flippedCards.includes(index);
            return (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="relative w-full h-64 [perspective:1000px] group cursor-pointer"
                onClick={() => toggleFlip(index)}
              >
                <div 
                  className="w-full h-full relative transition-all duration-500 [transform-style:preserve-3d]"
                  style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden pb-4 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:scale-[1.03] hover:shadow-2xl hover:shadow-slate-300 dark:hover:shadow-cyan/10 transition-all duration-300 ease-out flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-cyan shadow-sm mb-6 transition-colors border-2 border-slate-300 dark:border-slate-700">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-navy dark:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 bg-navy dark:bg-slate-800 border border-navy dark:border-slate-700 flex flex-col items-center justify-center p-8 rounded-2xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]"
                  >
                    <h3 className="text-xl font-bold mb-4 text-center text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-center leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
