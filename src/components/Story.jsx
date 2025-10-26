import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Story() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.25),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(239,68,68,0.2),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div style={{ y, opacity }} className="order-2 md:order-1">
          <h2 className="text-3xl font-bold sm:text-4xl">The Coca‑Cola Story</h2>
          <p className="mt-4 text-white/80">
            From the first sip to the last sparkle, Coca‑Cola has been a part of celebrations
            around the world. This experience is designed to capture that iconic, refreshing
            energy with motion, depth, and playful interaction.
          </p>
          <p className="mt-4 text-white/70">
            Scroll to feel the parallax and subtle animations that echo the effervescence of a
            perfectly chilled can.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          {/* Minimal illustration of a can using pure CSS */}
          <div className="mx-auto h-72 w-40 overflow-hidden rounded-3xl bg-gradient-to-b from-red-600 to-red-700 shadow-2xl ring-1 ring-white/20 sm:h-96 sm:w-52">
            <div className="relative h-full w-full">
              <div className="absolute inset-x-3 top-3 h-2 rounded-full bg-gradient-to-r from-zinc-200 to-zinc-50" />
              <div className="absolute inset-x-6 top-8 h-[calc(100%-4rem)] rounded-2xl bg-gradient-to-b from-white/15 to-white/5" />
              <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-1 w-1 rounded-full bg-white/70"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: 0.5 + Math.random() * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
