import { Cpu, HardDrive, MonitorUp, Shield, ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    icon: MonitorUp,
    title: 'Linux para Notebooks Antigos',
    description: 'Ressurreição de um notebook de 2014 com Windows 7 lento. Instalado Linux Mint XFCE, resultando em um boot 3x mais rápido e navegação fluída.',
    image: 'https://images.unsplash.com/photo-1629654261662-79e5e7ab3037?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: HardDrive,
    title: 'Kit Upgrade de Desempenho',
    description: 'Substituição de HD antigo por SSD NVMe + acréscimo de 8GB de RAM. Clonagem do sistema limpa e preservação de todos os arquivos importantes.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800'
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
  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Trabalhos em <span className="text-cyan">Destaque</span>
            </h2>
            <p className="text-lg text-slate-600">
              Confira alguns dos serviços práticos que realizamos recentemente, aplicando nossa filosofia de otimização e confiabilidade.
            </p>
          </div>
          <a href="#contato" className="inline-flex items-center gap-2 text-cyan font-medium hover:text-navy transition-colors">
            Falar sobre meu caso <ArrowRight size={18} />
          </a>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-navy/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm shadow-lg p-3 rounded-xl border border-white/20">
                  <item.icon size={24} className="text-cyan" />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
