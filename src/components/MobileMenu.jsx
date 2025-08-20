import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col bg-[rgba(10,10,10,0.8)] items-center justify-center transition-all ease-in-out
        ${menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-7 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          {link.name}
        </a>
      ))}

      {/* Download CV Button */}
      <a
        href="/Sagun_Ghimire_CV.pdf"
        download
        onClick={() => setMenuOpen(false)}
        className={`mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-lg transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition`}
      >
        Download CV
      </a>
    </div>
  );
};
