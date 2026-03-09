import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-cyan/30 rounded-2xl z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Profissional de TI trabalhando" 
              className="w-full relative z-10 rounded-2xl shadow-xl object-cover aspect-[4/5] md:aspect-auto md:h-[600px]"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center border-4 border-slate-50">
              <span className="text-4xl font-extrabold text-cyan mb-1">+5</span>
              <span className="text-sm font-medium text-slate-300 text-center uppercase tracking-wider">Anos de<br/>Experiência</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Sobre a <span className="text-cyan">Maick Vilhena Tech</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 mb-10">
              <p>
                Sou <strong className="text-navy font-semibold">Maick Vilhena</strong>, profissional apaixonado por tecnologia com vasta experiência em suporte técnico, manutenção preventiva e corretiva de computadores.
              </p>
              <p>
                Meu principal objetivo é oferecer soluções rápidas, confiáveis e eficientes, garantindo que usuários domésticos e pequenas empresas não percam tempo com problemas de TI. 
              </p>
              <p>
                Especialista na configuração e otimização de ambientes computacionais, trabalho tanto com a família <strong className="text-navy font-semibold">Windows</strong> quanto com ecossistemas <strong className="text-navy font-semibold">Linux</strong>.
              </p>
            </div>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Atendimento Especializado',
                'Transparência no Serviço',
                'Hardware e Software',
                'Soluções Corporativas'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-cyan" size={24} />
                  <span className="font-medium text-navy">{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
