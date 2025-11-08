import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Send } from 'lucide-react';

export default function CustomizeSection() {
  const [step, setStep] = useState(1);
  const [note, setNote] = useState('');
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <section id="customize" className="py-16 md:py-24 bg-gradient-to-b from-rose-50/60 to-amber-50/60">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-rose-900 text-center"
          style={{ fontFamily: 'cursive' }}
        >
          Customize Your Gift
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-rose-100 p-6 shadow-sm">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <label className="block text-rose-900 font-medium">Recipient Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., My Sunshine"
                      className="mt-2 w-full rounded-xl border border-rose-200 bg-rose-50/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
                    />
                    <p className="mt-3 text-sm text-rose-700/80">We’ll letter this beautifully on your gift.</p>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <label className="block text-rose-900 font-medium">Your Love Note</label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Write a sweet message..."
                      rows={5}
                      className="mt-2 w-full rounded-xl border border-rose-200 bg-rose-50/60 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
                    />
                    <p className="mt-3 text-sm text-rose-700/80">We’ll print this on premium textured paper.</p>
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <label className="block text-rose-900 font-medium">Upload a Photo (optional)</label>
                    <div className="mt-2">
                      <label className="w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-rose-300 bg-rose-50/60 px-4 py-10 cursor-pointer hover:bg-rose-100/60 transition">
                        <Upload className="w-5 h-5 text-rose-500" />
                        <span className="text-rose-700/80">Click to upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => setPhoto(e.target.files?.[0] || null)}
                        />
                      </label>
                      {photo && <p className="mt-2 text-sm text-rose-700/80">Selected: {photo.name}</p>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={prev}
                  disabled={step === 1}
                  className="px-4 py-2 rounded-full text-rose-700/80 hover:text-rose-900 disabled:opacity-40"
                >
                  Back
                </button>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-full ${i <= step ? 'bg-rose-500' : 'bg-rose-200'}`}
                    />
                  ))}
                </div>
                {step < 3 ? (
                  <button
                    onClick={next}
                    className="px-5 py-2 rounded-full bg-rose-500 text-white shadow-md hover:shadow-lg transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => alert('Thank you for spreading smiles today 😊')}
                    className="px-5 py-2 rounded-full bg-amber-500 text-white shadow-md hover:shadow-lg transition inline-flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Place Request
                  </button>
                )}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop"
              alt="Gift making"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
