import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-14 bg-gradient-to-t from-rose-50 to-white text-center">
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-rose-700/90"
      >
        From handmade hearts to heartfelt clicks — every gift tells a story.
      </motion.p>
    </footer>
  );
}
