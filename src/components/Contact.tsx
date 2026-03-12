import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MonitorPlay, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_rtwfbmg',
        'template_rkewbbb',
        form.current,
        {
          publicKey: 'Rv2G53498QDaB6XxG',
        }
      );
      setSubmitStatus('success');
      setFormData({ user_name: '', user_email: '', user_phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('FAILED...', error);
      setErrorMessage(error?.text || error?.message || 'Erro desconhecido');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'user_phone') {
      let v = value.replace(/\D/g, '');
      if (v.length > 11) v = v.substring(0, 11);
      
      if (v.length <= 2) {
        // v keeps the same
      } else if (v.length <= 6) {
        v = v.replace(/(\d{2})(\d{1,4})/, '($1) $2');
      } else if (v.length <= 10) {
        v = v.replace(/(\d{2})(\d{4})(\d{1,4})/, '($1) $2-$3');
      } else {
        v = v.replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3');
      }

      setFormData({ ...formData, [name]: v });
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <section id="contato" className="py-24 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6 transition-colors">
              Vamos <span className="text-cyan">Conversar?</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 transition-colors">
              Precisa de suporte agora ou quer um orçamento para um projeto? Preencha o formulário ou use os canais diretos abaixo.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-navy/5 dark:shadow-cyan/5 border-2 border-slate-300 dark:border-slate-700 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-6 transition-colors">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan/10 text-cyan rounded-xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1 transition-colors">WhatsApp / Telefone</p>
                      <a href="https://wa.me/5591984906388" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 group mt-1">
                        <span className="text-lg font-bold text-navy dark:text-white group-hover:text-cyan dark:group-hover:text-cyan transition-colors">
                          (91) 98490-6388
                        </span>
                        <span className="text-xs font-bold tracking-wide uppercase bg-cyan text-white dark:bg-cyan/10 dark:text-cyan px-2 py-1 rounded-md opacity-90 group-hover:opacity-100 transition-opacity">
                          Iniciar Conversa
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan/10 text-cyan rounded-xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1 transition-colors">E-mail Profissional</p>
                      <a href="mailto:maick.vilhena@proton.me" className="text-lg font-bold text-navy dark:text-white hover:text-cyan dark:hover:text-cyan transition-colors">
                        maick.vilhena@proton.me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan/10 text-cyan rounded-xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1 transition-colors">Localização</p>
                      <p className="text-lg font-bold text-navy dark:text-white transition-colors">
                        Atendimento remoto e presencial em Canaã dos Carajás - PA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700 transition-colors">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 transition-colors">Redes Profissionais</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/zBotFragger" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200/50 hover:bg-slate-300 text-slate-700 hover:text-navy dark:bg-slate-800/50 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white hover:scale-110 rounded-xl transition-all duration-300 shadow-sm hover:shadow">
                      <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/maick-leon-dias-de-vilhena-224313157/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200/50 hover:bg-slate-300 text-slate-700 hover:text-navy dark:bg-slate-800/50 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white hover:scale-110 rounded-xl transition-all duration-300 shadow-sm hover:shadow">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <form ref={form} onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-2xl shadow-navy/5 dark:shadow-cyan/5 border-2 border-slate-300 dark:border-slate-700 transition-colors duration-300 relative overflow-hidden">
                
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center rounded-2xl"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      >
                        <CheckCircle2 size={80} className="text-emerald-500 mb-6 mx-auto" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">Mensagem Enviada!</h3>
                      <p className="text-slate-600 dark:text-slate-300">Agradeço o contato. Retornarei o mais breve possível no seu e-mail.</p>
                      
                      <button 
                        onClick={() => setSubmitStatus('idle')}
                        className="mt-8 px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors font-medium"
                      >
                        Enviar nova mensagem
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-6">
                  
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Nome Completo</label>
                    <input 
                      type="text" 
                      id="user_name" 
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 disabled:opacity-60"
                      placeholder="Como prefere ser chamado?"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">E-mail</label>
                    <input 
                      type="email" 
                      id="user_email" 
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 disabled:opacity-60"
                      placeholder="seu.melhor@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="user_phone" 
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      required
                      minLength={14}
                      maxLength={15}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 disabled:opacity-60"
                      placeholder="(99) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors">Mensagem / Relato do Problema</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none disabled:opacity-60"
                      placeholder="Descreva brevemente o suporte ou serviço que você precisa..."
                    ></textarea>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-sm text-center">
                      <p className="font-bold mb-1">Ocorreu um erro ao enviar sua mensagem.</p>
                      <p className="text-xs font-mono bg-red-100 dark:bg-red-900/30 p-2 rounded mt-2">{errorMessage}</p>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-navy dark:bg-cyan hover:bg-slate-800 dark:hover:bg-cyan/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-navy/20 dark:shadow-cyan/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando Mensagem...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy dark:bg-slate-950 py-12 border-t border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
            <div className="text-cyan">
              <MonitorPlay size={20} />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Maick Vilhena <span className="text-cyan">TECH</span>
            </span>
          </div>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Soluções completas em Tecnologia da Informação e Suporte Técnico especializado.
          </p>
          <div className="text-sm font-medium text-slate-500">
            &copy; {new Date().getFullYear()} Maick Vilhena TECH. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
