import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MonitorPlay } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section id="contato" className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Vamos <span className="text-cyan">Conversar?</span>
            </h2>
            <p className="text-lg text-slate-600">
              Precisa de suporte agora ou quer um orçamento para um projeto? Preencha o formulário ou use os canais diretos abaixo.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Info */}
            <div className="flex-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-navy/5 border border-slate-100">
                <h3 className="text-2xl font-bold text-navy mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan/10 text-cyan rounded-xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">WhatsApp / Telefone</p>
                      <a href="#" className="text-lg font-bold text-navy hover:text-cyan transition-colors">
                        (??) 99999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan/10 text-cyan rounded-xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">E-mail Profissional</p>
                      <a href="#" className="text-lg font-bold text-navy hover:text-cyan transition-colors">
                        contato@maickvilhenatech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan/10 text-cyan rounded-xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Localização</p>
                      <p className="text-lg font-bold text-navy">
                        Atendimento Remoto e Presencial (Sua Região)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <p className="text-sm font-medium text-slate-500 mb-4">Redes Profissionais</p>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-slate-100 text-slate-600 hover:bg-cyan hover:text-white rounded-xl transition-all">
                      <Github size={20} />
                    </a>
                    <a href="#" className="p-3 bg-slate-100 text-slate-600 hover:bg-cyan hover:text-white rounded-xl transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-navy/5 border border-slate-100">
                <div className="space-y-6">
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Como prefere ser chamado?"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="seu.melhor@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensagem / Relato do Problema</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                      placeholder="Descreva brevemente o suporte ou serviço que você precisa..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-navy hover:bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-navy/20"
                  >
                    Enviar Mensagem
                    <Send size={18} />
                  </button>
                  
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
            <div className="text-cyan">
              <MonitorPlay size={20} />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Maick Vilhena <span className="text-cyan">Tech</span>
            </span>
          </div>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Soluções completas em Tecnologia da Informação e Suporte Técnico especializado.
          </p>
          <div className="text-sm font-medium text-slate-500">
            &copy; {new Date().getFullYear()} Maick Vilhena Tech. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
