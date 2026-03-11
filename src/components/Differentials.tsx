import { ShieldCheck, Clock, CheckCircle, Award, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const differentials = [
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Respostas ágeis e agendamento flexível para que você volte ao trabalho o mais rápido possível.'
  },
  {
    icon: ShieldCheck,
    title: 'Soluções Seguras',
    description: 'Foco na proteção dos seus dados, garantindo privacidade e integridade durante a manutenção.'
  },
  {
    icon: CheckCircle,
    title: 'Diagnóstico Preciso',
    description: 'Vamos direto ao problema da sua máquina, evitando gastos desnecessários ou consertos ineficientes.'
  },
  {
    icon: Terminal,
    title: 'Experiência em Linux & Windows',
    description: 'Domínio dos principais sistemas operacionais do mercado para atender todas as necessidades.'
  },
  {
    icon: Award,
    title: 'Suporte Confiável',
    description: 'Transparência em cada etapa técnica com explicações claras, voltadas ao usuário final.'
  }
];

const Differentials = () => {
  return (
    <section className="py-24 bg-navy dark:bg-slate-900 text-white relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorators */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-cyan blur-[120px] mix-blend-screen rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que escolher a <span className="text-cyan">Maick Vilhena TECH</span>?
          </h2>
          <p className="text-lg text-slate-300">
            Nossos diferenciais são construídos com base no respeito ao cliente e na paixão por solucionar problemas tecnológicos reais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16 lg:gap-y-20">
          {differentials.map((diff, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="relative flex flex-col group"
            >
              {/* Colored Line Details on the left */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-full h-1/3 bg-cyan mb-2 transform group-hover:h-full group-hover:mb-0 transition-all duration-500 ease-out"></div>
              </div>
              
              <div className="pl-6 md:pl-8">
                <diff.icon size={36} className="text-cyan mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan transition-colors">
                  {diff.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Call to action Block directly integrated */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex flex-col items-center justify-center p-8 bg-cyan/10 rounded-2xl border border-cyan/20 group hover:bg-cyan/20 transition-colors"
          >
            <h3 className="text-xl font-bold mb-4 text-center">Precisa de ajuda agora?</h3>
            <a 
              href="https://wa.me/5591984906388"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-cyan/25 hover:bg-cyan/90 transition-all transform group-hover:scale-105"
            >
              Falar Via WhatsApp
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Differentials;
