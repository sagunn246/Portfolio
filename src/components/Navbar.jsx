import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-md overflow-x-hidden">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono font-bold text-white text-3xl">
            <span className="text-blue-500">Sagun.Tech</span>
          </a>

          <div
            className="w-8 h-8 flex items-center justify-center text-2xl text-white cursor-pointer md:hidden z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "×" : "☰"}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-semibold hover:text-blue-400 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
