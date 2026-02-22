import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent"
    >
      <div className="text-2xl font-bold font-serif">Daksh</div>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#8B0000' }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-transparent border border-white/20 rounded-full text-white text-sm font-medium"
      >
        Contact
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;