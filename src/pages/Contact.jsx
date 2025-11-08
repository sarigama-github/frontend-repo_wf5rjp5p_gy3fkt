import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-white to-rose-50/60 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-rose-900 text-center"
          style={{ fontFamily: 'cursive' }}
        >
          Say Hello
        </motion.h1>
        <p className="mt-3 text-center text-rose-700/80">We’d love to help you craft the perfect gift.</p>

        <form className="mt-10 space-y-4 rounded-3xl bg-white/80 backdrop-blur border border-rose-100 p-6 shadow-sm">
          <div>
            <label className="block text-rose-900 font-medium">Name</label>
            <input className="mt-1 w-full rounded-xl border border-rose-200 bg-rose-50/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-rose-900 font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl border border-rose-200 bg-rose-50/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <div>
            <label className="block text-rose-900 font-medium">Message</label>
            <textarea rows="5" className="mt-1 w-full rounded-xl border border-rose-200 bg-rose-50/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300" />
          </div>
          <button
            type="button"
            onClick={() => alert('Thank you for spreading smiles today 😊')}
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-5 py-3 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
