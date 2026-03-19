import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import MatrixEffect from './MatrixEffect';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-lg lg:max-w-xl relative"
          >
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-cyan/30 rounded-2xl z-0"></div>
            <MatrixEffect />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6 transition-colors">
              Sobre a <span className="text-cyan">Maick Vilhena TECH</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 mb-10 transition-colors">
              <p>
                Sou <strong className="text-navy dark:text-white font-semibold transition-colors">Maick Vilhena</strong>, profissional apaixonado por tecnologia com vasta experiência em suporte técnico, manutenção preventiva e corretiva de computadores.
              </p>
              <p>
                Meu principal objetivo é oferecer soluções rápidas, confiáveis e eficientes, garantindo que usuários domésticos e pequenas empresas não percam tempo com problemas de TI. 
              </p>
              <p>
                Especialista na configuração e otimização de ambientes computacionais, trabalho tanto com a família <strong className="text-navy dark:text-white font-semibold transition-colors">Windows</strong> quanto com ecossistemas <strong className="text-navy dark:text-white font-semibold transition-colors">Linux</strong>.
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
                  <span className="font-medium text-navy dark:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
