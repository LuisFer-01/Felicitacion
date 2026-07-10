import { motion } from 'framer-motion';
import Confetti from './Confetti';

const Hero = () => {
  return (
    <section className="hero">
      <Confetti />
      <motion.div
        className="hero-content"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <h1 className="hero-title">¡Feliz Cumpleaños!</h1>
        <motion.h2
          className="hero-name"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Dulce María
        </motion.h2>
        <motion.div
          className="balloons"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="balloon">🎈</span>
          <span className="balloon">🎉</span>
          <span className="balloon">🎂</span>
          <span className="balloon">🎁</span>
          <span className="balloon">🎈</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;