import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen px-10 pt-32 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-wine via-dark to-black opacity-80"></div>

      <h1 className="absolute top-20 left-10 text-[140px] md:text-[220px] font-display font-extrabold text-white/5 select-none">
        PORTFOLIO
      </h1>

      <div className="relative z-10 grid md:grid-cols-2 items-center gap-10">

        <div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.4em] text-gray-400 mb-6"
          >
            Film • Edit • Direct
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Video Editor
            <br />
            & Filmmaker
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-gray-400 max-w-lg"
          >
            Crafting cinematic experiences that transform stories into
            emotionally powerful visual journeys.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            href="#work"
            className="inline-block mt-10 px-10 py-4 bg-accent hover:bg-highlight transition rounded-full text-white font-semibold"
          >
            View Films
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <img
            src="/your-image.png"
            alt="Daksh"
            className="max-h-[600px] object-cover rounded-xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}