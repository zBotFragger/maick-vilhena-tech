import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    question: 'Vocês atendem a domicílio ou preciso levar o computador?',
    answer: 'Realizamos atendimentos presenciais em empresas e domicílios dependendo da localidade, além de oferecermos a facilidade do suporte remoto para problemas de software, onde resolvemos tudo sem você precisar sair de casa.'
  },
  {
    question: 'Quanto tempo geralmente leva uma formatação ou limpeza?',
    answer: 'A formatação com backup e a limpeza preventiva costumam ser realizadas em até 24 ou 48 horas úteis, dependendo do volume de dados. Nosso foco é devolver a sua máquina rápida e segura no menor tempo possível para não atrapalhar sua rotina.'
  },
  {
    question: 'Meus arquivos estão seguros durante a manutenção?',
    answer: 'Absolutamente. A privacidade e integridade dos seus dados são nossa prioridade. Todos os backups são realizados com protocolos de segurança e sigilo total dos seus arquivos pessoais ou empresariais.'
  },
  {
    question: 'Vocês trabalham apenas com Windows ou também dão suporte a Linux?',
    answer: 'Somos especialistas tanto na família Windows (10/11) quanto em distribuições Linux (Ubuntu, Mint, etc), cobrindo desde computadores domésticos até ambientes corporativos mais complexos.'
  },
  {
    question: 'Como funciona o orçamento? É cobrando por hora ou serviço?',
    answer: 'Trabalhamos com orçamentos justos e transparentes baseados na solução do problema (cobrança por serviço, não por hora). Após uma rápida análise inicial do seu caso, passamos o valor fechado antes de começar, sem surpresas no final.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
            Perguntas Frequentes <span className="text-cyan">(FAQ)</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Ainda tem dúvidas sobre como funciona nosso suporte? Confira as perguntas mais comuns dos nossos clientes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-bold text-navy dark:text-white transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={24} 
                  className={`text-cyan flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-8 pt-6 border-t border-slate-100 dark:border-slate-700/50 mt-1 flex gap-4 bg-slate-50/50 dark:bg-slate-800/50">
                      <CheckCircle2 size={20} className="text-cyan flex-shrink-0 mt-1" />
                      <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-[1.05rem]">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
