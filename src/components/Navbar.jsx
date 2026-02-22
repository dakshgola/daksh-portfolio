export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 px-10 py-6 flex justify-between items-center bg-dark/70 backdrop-blur-md border-b border-white/10">
      <h1 className="text-xl font-bold tracking-widest">DAKSH</h1>

      <div className="hidden md:flex gap-10 uppercase text-sm tracking-widest text-gray-400">
        <a href="#work" className="hover:text-white transition">Work</a>
        <a href="#process" className="hover:text-white transition">Process</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </nav>
  );
}