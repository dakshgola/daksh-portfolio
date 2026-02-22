import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <footer className="py-24 bg-black text-center">
      <div className="container mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif font-bold mb-4">Let's Create Cinema.</motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/60 mb-10">Ready to bring your vision to life? Let's collaborate.</motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: '#8B0000' }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-accent-red-2 text-white font-bold rounded-full text-xl"
        >
          Start a Project
        </motion.button>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white transition">Instagram</a>
            <a href="#" className="text-white/50 hover:text-white transition">YouTube</a>
            <a href="#" className="text-white/50 hover:text-white transition">Vimeo</a>
          </div>
          <p className="text-white/40 text-sm mt-6 md:mt-0">&copy; 2024 Daksh. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;