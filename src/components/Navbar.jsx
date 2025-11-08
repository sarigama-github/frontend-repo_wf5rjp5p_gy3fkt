import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.span
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 14 }}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-rose-500 text-white shadow"
          >
            <Gift className="w-5 h-5" />
          </motion.span>
          <div className="leading-tight">
            <div className="text-rose-900 font-semibold" style={{ fontFamily: 'cursive' }}>Give A Gift</div>
            <div className="text-xs text-rose-700/70">handmade with heart</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-rose-800">
          {[
            { to: '/', label: 'Home' },
            { to: '/products', label: 'Products' },
            { to: '/about', label: 'Our Story' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-2 py-1 rounded-full transition ${isActive ? 'bg-rose-100 text-rose-900' : 'hover:text-rose-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-4 py-2 shadow-md hover:shadow-lg"
        >
          <ShoppingBag className="w-4 h-4" /> Shop
        </Link>
      </div>
    </div>
  );
}
