import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Story from './components/Story';
import Showcase from './components/Showcase';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Section 1: Hero with 3D Spline */}
      <Hero />

      {/* Section 2: Highlights grid */}
      <Highlights />

      {/* Section 3: Brand Story with parallax */}
      <Story />

      {/* Section 4: Flavor Showcase carousel */}
      <Showcase />

      {/* Section 5: Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-950/40 to-black py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(239,68,68,0.25),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold"
          >
            Ready to refresh your world?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-white/80"
          >
            Join the fizz. Get updates on limited drops, new flavors, and immersive brand moments.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full max-w-md rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-white/60 outline-none backdrop-blur focus:border-white/40"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-white/90 px-6 py-3 font-semibold text-black transition hover:bg-white sm:w-auto"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>

      {/* Section 6: Footer */}
      <footer className="border-t border-white/10 bg-black py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Coca‑Cola — For concept/demo purposes.</p>
          <nav className="flex items-center gap-4 text-sm text-white/70">
            <a href="#highlights" className="hover:text-white">Highlights</a>
            <a href="#story" className="hover:text-white">Story</a>
            <a href="#showcase" className="hover:text-white">Flavors</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
