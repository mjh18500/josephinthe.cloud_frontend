export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50 p-4">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-bold">
            <a href="/" className="text-xl font-bold text-blue-700">
          Joseph <span className="text-blue-500">Hernandez</span>
            </a>
        </div>


        {/* Links */}
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#certs" className="hover:text-blue-500 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Blog</a>
        </div>
      </div>
    </nav>
  );
}
