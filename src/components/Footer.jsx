export const Footer = () => {
  return (
    <footer className="bg-black text-blue-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <a href="#home" className="font-mono font-bold text-white">
            <span className="text-blue-500 text-2xl">Sagun.Tech</span>
            {""}
          </a>
          <p className="text-sm mt-3">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4 mt-10">
          <a
            href="https://github.com/sagunn246"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sagunn246"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sagun@example.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
