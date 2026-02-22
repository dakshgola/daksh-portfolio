export default function Process() {
  const steps = [
    "Concept Development",
    "Pre-Production & Planning",
    "Cinematic Editing",
    "Final Delivery",
  ];

  return (
    <section id="process" className="py-32 px-10 bg-wine/30">
      <h2 className="text-4xl font-display font-bold mb-16">
        My Process
      </h2>

      <div className="grid md:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <div key={i} className="border border-white/10 p-8 rounded-xl hover:bg-accent/20 transition">
            <h3 className="text-xl font-semibold mb-4">
              Step {String(i + 1).padStart(2, "0")}
            </h3>
            <p className="text-gray-400">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}