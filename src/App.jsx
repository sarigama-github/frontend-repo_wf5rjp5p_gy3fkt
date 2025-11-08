import UnwrapHero from './components/UnwrapHero';
import ProductShowcase from './components/ProductShowcase';
import CustomizeSection from './components/CustomizeSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import WhatsAppFloating from './components/WhatsAppFloating';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-rose-900 selection:bg-rose-200 selection:text-rose-900">
      <UnwrapHero />
      <ProductShowcase />
      <CustomizeSection />
      <TestimonialsCarousel />

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

      <WhatsAppFloating />
    </div>
  );
}
