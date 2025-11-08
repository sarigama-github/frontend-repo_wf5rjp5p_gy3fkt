import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-rose-50/60 to-amber-50/60 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-rose-900 text-center"
          style={{ fontFamily: 'cursive' }}
        >
          Our Story
        </motion.h1>
        <p className="mt-6 text-rose-800 leading-relaxed text-lg">
          Give A Gift began with a simple belief: small, handmade things can hold big feelings. From kitchen-table
          crafting to a cozy studio, we’ve grown with every smile our gifts sparked. Each piece is lovingly designed
          to carry a story — your story — wrapped in warmth, softness, and care.
        </p>
        <p className="mt-4 text-rose-800 leading-relaxed">
          We choose materials that feel comforting to the touch, hues that whisper calm, and typography that feels like
          a handwritten note from a dear friend. Thank you for letting us be part of your moments.
        </p>
      </div>
    </div>
  );
}
