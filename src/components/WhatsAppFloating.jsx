import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  const phone = '919999999999'; // replace with your WhatsApp number
  const url = `https://wa.me/${phone}?text=${encodeURIComponent('Hi Give A Gift! I would love to place an order ✨')}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-5 py-3 shadow-lg hover:shadow-rose-200/60"
    >
      <MessageCircle className="w-5 h-5" />
      WhatsApp
    </motion.a>
  );
}
