import { ChevronRight, Wrench, ShieldCheck, Clock, MonitorPlay } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 relative">
      
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan font-medium text-sm mb-6 border border-cyan/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
              </span>
              Suporte Técnico Profissional
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
              Soluções em Tecnologia e <span className="text-cyan">Suporte Eficiente</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Especialista em manutenção de computadores, instalação de sistemas operacionais e suporte técnico para usuários e pequenas empresas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contato" 
                className="w-full sm:w-auto px-8 py-4 bg-navy hover:bg-slate-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-navy/20"
              >
                Solicitar Suporte
                <ChevronRight size={20} />
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-navy border border-slate-200 rounded-xl font-medium flex items-center justify-center gap-2 transition-all"
              >
                Ver Serviços
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-2 text-slate-600">
                <div className="bg-green-100 p-1.5 rounded-md text-green-600">
                  <Wrench size={18} />
                </div>
                <span className="text-sm font-medium">Diagnóstico Preciso</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="bg-blue-100 p-1.5 rounded-md text-blue-600">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-sm font-medium">Soluções Seguras</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="bg-orange-100 p-1.5 rounded-md text-orange-600">
                  <Clock size={18} />
                </div>
                <span className="text-sm font-medium">Atendimento Rápido</span>
              </div>
            </div>

          </div>

          {/* Hero Image/Illustration (Placeholder structure matching requirements) */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 border border-slate-100 bg-white p-2">
              <div className="bg-slate-100 rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Manutenção de Computadores e Suporte" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-cyan/10 p-3 rounded-full text-cyan">
                  <MonitorPlay size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Experiência em</p>
                  <p className="text-sm font-bold text-navy">Windows & Linux</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
