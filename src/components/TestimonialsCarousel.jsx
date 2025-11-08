import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Aisha',
    text: 'The scrapbook made my sister cry happy tears. The details felt like a warm hug!',
  },
  {
    id: 2,
    name: 'Rahul',
    text: 'Beautifully crafted and delivered with care. The love notes were stunning.',
  },
  {
    id: 3,
    name: 'Meera',
    text: 'Felt so personal. The photo frame sits on our mantle and makes us smile daily.',
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/60 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-rose-900"
          style={{ fontFamily: 'cursive' }}
        >
          Customer Love
        </motion.h2>

        <div className="mt-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white/80 backdrop-blur border border-rose-100 p-8 shadow-sm relative"
            >
              <div className="flex justify-center gap-1 text-amber-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5" fill="#f59e0b" />
                ))}
              </div>
              <p className="text-rose-800 text-lg italic">
                “{reviews[index].text}”
              </p>
              <p className="mt-4 text-rose-700/80">— {reviews[index].name}</p>

              {/* Scrapbook tape corners */}
              <span className="absolute -top-2 -left-2 rotate-[-6deg] bg-amber-200/70 h-8 w-16 rounded" />
              <span className="absolute -bottom-2 -right-2 rotate-[8deg] bg-rose-200/70 h-8 w-16 rounded" />
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-rose-500' : 'bg-rose-200'}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
