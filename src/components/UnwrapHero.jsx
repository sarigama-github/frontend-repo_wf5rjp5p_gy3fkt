import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Heart } from 'lucide-react';

function Ribbon({ delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className="inline-flex items-center gap-1 text-rose-500"
    >
      <Heart className="w-4 h-4" fill="#f43f5e" />
      with love
    </motion.span>
  );
}

export default function UnwrapHero() {
  const [unwrapped, setUnwrapped] = useState(false);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 400], [0, -60]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0.7]);

  useEffect(() => {
    const timer = setTimeout(() => setUnwrapped(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-rose-50 via-amber-50 to-white flex items-center justify-center">
      {/* Floating confetti hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              y: [0, -120 - (i % 5) * 20, -200 - (i % 7) * 15],
              x: [0, (i % 2 ? 1 : -1) * (20 + (i % 6) * 8)],
              rotate: [0, (i % 2 ? 20 : -20), (i % 2 ? -10 : 10)],
            }}
            transition={{ duration: 8 + (i % 5), delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute text-rose-300"
            style={{ left: `${(i * 7) % 100}%`, bottom: -20 }}
          >
            <Heart className="w-4 h-4" fill="#fecdd3" />
          </motion.span>
        ))}
      </div>

      {/* Parallax background shapes */}
      <motion.div style={{ y: yParallax, opacity: opacityParallax }} className="absolute top-[-10%] right-[-10%] w-[40vw] aspect-square rounded-full bg-amber-100/60 blur-3xl" />
      <motion.div style={{ y: yParallax, opacity: opacityParallax }} className="absolute bottom-[-20%] left-[-10%] w-[50vw] aspect-square rounded-full bg-rose-100/60 blur-3xl" />

      {/* Unwrapping animation */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <AnimatePresence>
          {!unwrapped && (
            <motion.div
              key="box"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              className="w-64 h-64 bg-gradient-to-br from-rose-200 to-amber-200 rounded-3xl shadow-xl relative flex items-center justify-center"
            >
              {/* Ribbon */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-rose-400/90 rounded"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-rose-400/90 rounded"
              />
              {/* Bow */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 14 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-12 bg-rose-500 rounded-b-full shadow-lg"
              />
              <div className="absolute bottom-6 text-rose-700 font-medium tracking-wide">Unwrapping joy...</div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {unwrapped && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-3xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-4xl md:text-6xl font-semibold text-rose-900 leading-tight"
                style={{ fontFamily: 'cursive' }}
              >
                Make every memory gift-worthy 💝
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="mt-4 text-rose-700/90 text-lg md:text-xl"
              >
                Give A Gift crafts heartfelt, personalized keepsakes — scrapbooks, photo frames, and love notes —
                to bring smiles that linger.
              </motion.p>
              <div className="mt-6 flex items-center justify-center gap-3 text-sm text-rose-700/80">
                <Ribbon delay={0.4} />
                <span className="text-rose-300">•</span>
                <Ribbon delay={0.6} />
                <span className="text-rose-300">•</span>
                <Ribbon delay={0.8} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
