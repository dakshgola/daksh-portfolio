const projects = [
  { title: "Brand Film", category: "Commercial", img: "/project1.jpg" },
  { title: "Music Video", category: "Cinematic", img: "/project2.jpg" },
  { title: "Short Film", category: "Narrative", img: "/project3.jpg" },
];

export default function Projects() {
  return (
    <section id="work" className="py-32 px-10">
      <h2 className="text-4xl font-display font-bold mb-16">
        Selected Work
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((project, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl cursor-pointer">
            <img
              src={project.img}
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}