import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sparkles, Star, Leaf } from 'lucide-react';

const items = [
  {
    icon: Droplets,
    title: 'Chilled to Perfection',
    text: 'A crisp, ice-cold sensation with delicate condensation for that fresh pop.',
  },
  {
    icon: Sparkles,
    title: 'Effervescent Energy',
    text: 'Tiny bubbles dance and sparkle, elevating every moment you share.',
  },
  {
    icon: Star,
    title: 'Iconic Taste',
    text: 'The unmistakable flavor that brings people together across generations.',
  },
  {
    icon: Leaf,
    title: 'Serve It Your Way',
    text: 'Over ice, with a slice of lime, or straight from the can — your vibe, your sip.',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative bg-gradient-to-b from-black to-red-950/40 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Feel The Fizz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/80"
          >
            Designed for motion — smooth, playful animations to match an iconic brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-red-600/20 p-3 text-red-300 ring-1 ring-red-500/30">
                {React.createElement(item.icon, { size: 24 })}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
