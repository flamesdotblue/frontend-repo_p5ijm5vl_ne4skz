import React from 'react';
import { motion } from 'framer-motion';

const flavors = [
  {
    name: 'Classic',
    colorFrom: 'from-red-600',
    colorTo: 'to-red-700',
    accent: 'ring-red-400/40',
    desc: 'The original, timeless taste for every celebration.',
  },
  {
    name: 'Zero Sugar',
    colorFrom: 'from-neutral-800',
    colorTo: 'to-neutral-900',
    accent: 'ring-neutral-500/30',
    desc: 'Zero sugar. 100% Coca‑Cola taste. Maximum refreshment.',
  },
  {
    name: 'Cherry',
    colorFrom: 'from-pink-600',
    colorTo: 'to-rose-700',
    accent: 'ring-pink-400/40',
    desc: 'A playful twist with a burst of cherry aroma.',
  },
  {
    name: 'Vanilla',
    colorFrom: 'from-amber-500',
    colorTo: 'to-amber-600',
    accent: 'ring-amber-300/40',
    desc: 'Smooth vanilla notes for a creamy finish.',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Pick Your Vibe</h2>
            <p className="mt-2 text-white/70">Swipe the flavors — each card floats with a smooth hover motion.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm">Scroll</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm">Hover</span>
          </div>
        </div>

        <div className="no-scrollbar -mx-6 flex snap-x gap-6 overflow-x-auto px-6 pb-2">
          {flavors.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`snap-start w-[80%] min-w-[260px] max-w-xs rounded-3xl bg-gradient-to-b ${f.colorFrom} ${f.colorTo} p-6 ring-1 ${f.accent}`}
            >
              <div className="flex h-64 flex-col justify-between">
                <div>
                  <div className="mb-4 h-10 w-16 rounded-b-2xl bg-gradient-to-r from-zinc-200 to-zinc-50" />
                  <h3 className="text-2xl font-extrabold tracking-tight">Coca‑Cola {f.name}</h3>
                  <p className="mt-2 text-sm text-white/80">{f.desc}</p>
                </div>
                <button className="mt-6 w-full rounded-full bg-white/90 py-2 text-sm font-semibold text-black transition hover:bg-white">
                  Chill & Buy
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
