import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project One', category: 'Commercial', image: 'https://via.placeholder.com/800x600' },
  { id: 2, title: 'Project Two', category: 'Music Video', image: 'https://via.placeholder.com/800x600' },
  { id: 3, title: 'Project Three', category: 'Narrative', image: 'https://via.placeholder.com/800x600' },
  { id: 4, title: 'Project Four', category: 'Commercial', image: 'https://via.placeholder.com/800x600' },
  { id: 5, title: 'Project Five', category: 'Music Video', image: 'https://via.placeholder.com/800x600' },
  { id: 6, title: 'Project Six', category: 'Narrative', image: 'https://via.placeholder.com/800x600' },
];

const Projects = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-serif font-bold text-center mb-16">Selected Works</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                <p className="text-white/70 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;