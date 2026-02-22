import { motion } from 'framer-motion';

const processSteps = [
  { number: '01', title: 'Concept', description: 'Understanding the vision and crafting the core idea.' },
  { number: '02', title: 'Shoot', description: 'Capturing stunning visuals with cinematic precision.' },
  { number: '03', title: 'Edit', description: 'Assembling the narrative and refining the story.' },
  { number: '04', title: 'Delivery', description: 'Finalizing the film with color, sound, and polish.' },
];

const Process = () => {
  return (
    <section className="py-24 bg-wine-red/20">
      <div className="container mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-serif font-bold text-center mb-16">My Process</motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/20 p-8 rounded-lg border border-white/10 hover:border-white/30 hover:bg-black/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <p className="text-accent-red-1 text-2xl font-bold mb-4">{step.number}</p>
              <h3 className="text-2xl font-serif font-bold mb-3">{step.title}</h3>
              <p className="text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;