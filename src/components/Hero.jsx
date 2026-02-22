import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/10 select-none pointer-events-none"
      >
        PORTFOLIO
      </motion.div>

      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2 }}
          className="text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm uppercase tracking-widest text-accent-red-1 mb-4"
          >
            FILM • EDIT • DIRECT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-6xl md:text-8xl font-bold font-serif leading-tight mb-6"
          >
            Video Editor & Filmmaker
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg text-white/70 max-w-lg mb-8"
          >
            Crafting cinematic narratives with bold visuals and emotive storytelling. Specializing in high-end commercial, music video, and narrative film production.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05, backgroundColor: '#8B0000' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-accent-red-2 text-white font-bold rounded-full text-lg"
          >
            View Films
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="hidden md:block relative"
        >
          <div className="aspect-[3/4] bg-wine-red rounded-lg overflow-hidden shadow-2xl">
            {/* Placeholder for portrait image */}
            <img src="https://via.placeholder.com/600x800" alt="Daksh Portrait" className="w-full h-full object-cover"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
