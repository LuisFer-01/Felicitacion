import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p>Con todo el cariño para ti,</p>
      <p className="signature">¡Feliz cumpleaños, Dulce María! 🎂</p>
      <p className="date">11 de Julio, 2026</p>
    </motion.footer>
  );
};

export default Footer;