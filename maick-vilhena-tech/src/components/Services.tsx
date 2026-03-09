import { Settings, Download, Wrench, Activity, ShieldAlert, Headphones } from 'lucide-react';

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
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Nossos <span className="text-cyan">Serviços</span>
          </h2>
          <p className="text-lg text-slate-600">
            Oferecemos uma gama completa de serviços de TI com foco na resolução rápida e eficiente dos seus problemas tecnológicos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-2xl hover:shadow-navy/5 hover:border-cyan/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-cyan group-hover:text-white group-hover:border-cyan transition-colors text-cyan">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
