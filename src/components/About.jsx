import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="aspect-[4/5] bg-wine-red rounded-lg overflow-hidden shadow-2xl">
            {/* Placeholder for another image */}
            <img src="https://via.placeholder.com/800x1000" alt="Daksh working" className="w-full h-full object-cover"/>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left">
          <h2 className="text-6xl font-serif font-bold leading-tight mb-8">A Passion for Visual Storytelling</h2>
          <p className="text-lg text-white/70 max-w-lg mb-8">
            From a young age, I was captivated by the power of film to evoke emotion and transport audiences. This passion led me to pursue a career in filmmaking, where I've had the privilege of collaborating with talented artists and brands to bring their stories to life. My work is driven by a desire to create visually stunning and emotionally resonant films that leave a lasting impact.
          </p>
          <p className="font-serif text-3xl text-white/90 signature-font">Daksh</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;