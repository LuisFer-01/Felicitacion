import { motion } from 'framer-motion';

const Message = () => {
  return (
    <motion.section
      className="message-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="message-card">
        <h3>¡Hoy es tu día especial!</h3>
        <p>
          Querida Dulce, hoy celebramos un año más de tu vida llena de dulzura y alegría.
          Que este nuevo año te traiga momentos inolvidables, risas contagiosas y todos
          los sueños que mereces. ¡Eres una persona increíble y te queremos mucho!
        </p>
        <div className="hearts">
          <span>💖</span>
          <span>💝</span>
          <span>💖</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Message;