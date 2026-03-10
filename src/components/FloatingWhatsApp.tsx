import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5591984906388"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-cyan hover:bg-cyan/90 text-white rounded-full shadow-lg shadow-cyan/40 hover:shadow-cyan/60 transition-colors group"
      aria-label="Fale comigo no WhatsApp"
    >
      {/* Background Pulse Animation */}
      <span className="absolute w-full h-full rounded-full bg-cyan opacity-40 animate-ping" style={{ animationDuration: '2s' }}></span>
      
      {/* Icon */}
      <MessageCircle size={28} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
