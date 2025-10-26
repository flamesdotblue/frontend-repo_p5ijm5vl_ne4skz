import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Coca-Cola hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft red glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-500/30 via-transparent to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-extrabold tracking-tight"
        >
          <span className="block text-4xl sm:text-6xl md:text-7xl">Taste the Feeling</span>
          <span className="mt-2 block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-2xl text-transparent sm:text-4xl">
            Ice-cold refreshment in every sip
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#showcase"
            className="group rounded-full bg-white/90 px-6 py-3 font-semibold text-red-600 backdrop-blur transition hover:bg-white"
          >
            Explore Flavors
          </a>
          <a
            href="#story"
            className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
