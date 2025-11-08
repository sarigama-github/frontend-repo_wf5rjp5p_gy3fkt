import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

export default function Products() {
  return (
    <div className="bg-gradient-to-b from-white to-rose-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-rose-900 text-center"
          style={{ fontFamily: 'cursive' }}
        >
          Our Handmade Collection
        </motion.h1>
        <p className="text-center mt-3 text-rose-700/80">Crafted with care, wrapped in warmth.</p>

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
              <Link to={`/products/${p.id}`} className="block">
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
                    <span className="text-rose-500 hover:underline">View details →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
