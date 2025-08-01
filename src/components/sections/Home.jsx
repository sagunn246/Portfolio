import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="
        min-h-[100dvh] w-full flex flex-col items-center 
        justify-center md:justify-start
        pt-0 md:pt-36 lg:pt-40
        bg-black px-4 overflow-x-hidden
      "
    >
      <RevealOnScroll>
        <div className="text-center z-10 w-full max-w-3xl px-2">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8">
            <img
              src="Photo.png"
              alt="Sagun Ghimire"
              className="mx-auto w-36 h-36 sm:w-44 sm:h-44 md:w-72 md:h-72 
                         rounded-full object-cover border-2 border-blue-500 shadow-lg"
              style={{ filter: "brightness(1.1)" }}
            />
          </div>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       font-bold mb-4 sm:mb-6 
                       bg-gradient-to-r from-blue-500 to-cyan-400 
                       bg-clip-text text-transparent"
          >
            Hi, I'm Sagun Ghimire
          </h1>

          {/* Description */}
          <p
            className="text-gray-400 text-sm sm:text-base md:text-lg 
                       mb-6 sm:mb-8 px-2 sm:px-4 leading-relaxed"
          >
            I'm a beginner web developer with a passion for building modern and
            responsive websites. I work with React.js, HTML, CSS, and
            JavaScript, and I'm currently learning Python to expand my skills.
            I'm always exploring new tools and technologies to grow as a
            developer.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-2 px-6 sm:py-3 sm:px-8 
                         rounded font-medium transition 
                         hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500 text-blue-500 py-2 px-6 sm:py-3 sm:px-8 
                         rounded font-medium transition 
                         hover:-translate-y-0.5 hover:bg-blue-500/10 
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
