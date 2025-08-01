import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 relative border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Brand */}
        <div className="text-center md:text-left">
          <a href="#home" className="font-mono font-bold text-white text-2xl">
            <span className="text-blue-500">Sagun.Tech</span>
          </a>
          <p className="text-sm mt-4 leading-relaxed text-gray-400 max-w-sm mx-auto md:mx-0">
            I am a beginner developer learning React, JavaScript, and Python.
            This portfolio showcases my journey in building interactive web
            applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#home" className="hover:text-blue-400 transition">
                Back to Top
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">
            Connect With Me
          </h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="https://github.com/sagunn246"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sagunn246"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sagun@example.com"
              className="hover:text-white text-2xl transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-2xl transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500/20 mt-10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sagun.Tech. All rights reserved.
      </div>
    </footer>
  );
};
