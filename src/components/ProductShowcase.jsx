import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Handmade Scrapbook',
    price: 39.0,
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    desc: 'A cozy collage of memories with pockets for notes and polaroids.',
  },
  {
    id: 2,
    name: 'Vintage Photo Frame',
    price: 24.0,
    img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
    desc: 'Warm-gold finished frame that hugs your cherished photos.',
  },
  {
    id: 3,
    name: 'Love Notes Set',
    price: 18.0,
    img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop',
    desc: 'Ten handwritten-style notes to whisper what hearts feel.',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-rose-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-rose-900 text-center"
          style={{ fontFamily: 'cursive' }}
        >
          Crafted with heart, made for smiles
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-white/80 backdrop-blur border border-rose-100 shadow-sm overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-rose-900">{p.name}</h3>
                <p className="mt-1 text-rose-700/80 text-sm">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-rose-900 font-medium">${p.price.toFixed(2)}</span>
                  <motion.button
                    whileHover={{
                      boxShadow: '0 0 0 6px rgba(244,63,94,0.12), 0 0 0 12px rgba(244,63,94,0.06)',
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                    onClick={() => alert('Thank you for spreading smiles today 😊')}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
