import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ChevronLeft, ShoppingBag } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-rose-700">Product not found.</p>
        <Link to="/products" className="text-rose-500 hover:underline">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-rose-50/60 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link to="/products" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-800">
          <ChevronLeft className="w-5 h-5" /> Back
        </Link>

        <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-6 rounded-3xl overflow-hidden shadow-xl">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.images.slice(1).map((src, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="col-span-3 rounded-2xl overflow-hidden shadow">
                <img src={src} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl bg-white/80 backdrop-blur border border-rose-100 p-6 shadow-sm">
            <h1 className="text-3xl font-semibold text-rose-900" style={{ fontFamily: 'cursive' }}>{product.name}</h1>
            <p className="mt-3 text-rose-700/90">{product.longDesc}</p>
            <div className="mt-4 text-2xl font-semibold text-rose-900">${product.price.toFixed(2)}</div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => alert('Thank you for spreading smiles today 😊')}
                className="inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-5 py-3 shadow-md hover:shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" /> Buy Now
              </button>
              <a
                href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi! I want to order: ${product.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-5 py-3 shadow-md hover:shadow-lg"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
