import { motion } from 'framer-motion';

const wishes = [
  { emoji: '🌟', text: 'Que todos tus sueños se hagan realidad' },
  { emoji: '🎊', text: 'Un año lleno de aventuras increíbles' },
  { emoji: '💫', text: 'Salud, amor y mucha felicidad' },
  { emoji: '🎈', text: 'Momentos mágicos con quienes amas' },
  { emoji: '🌈', text: 'Días llenos de color y alegría' },
];

const Wishes = () => {
  return (
    <section className="wishes-section">
      <h3 className="wishes-title">Mis deseos para ti</h3>
      <div className="wishes-grid">
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            className="wish-card"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="wish-emoji">{wish.emoji}</span>
            <p className="wish-text">{wish.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Wishes;