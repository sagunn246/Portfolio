import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen w-full flex justify-center items-center
        px-4 py-10 md:py-16 bg-black overflow-x-hidden
      "
    >
      <RevealOnScroll>
        <div
          className="
            flex flex-col md:flex-row items-center justify-between
            w-full max-w-7xl mx-auto gap-10
          "
        >
          {/* Image on Top for Small Screens */}
          <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
            <img
              src="igr.png"
              alt="Sagun Ghimire"
              className="
                w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 
                lg:w-80 lg:h-80 xl:w-96 xl:h-96
                rounded-full object-cover border-4 border-blue-500
              "
              style={{
                filter: "brightness(1.1)",
                animation: "glow 2.5s ease-in-out infinite",
              }}
            />
          </div>

          {/* Content (always left on large screens) */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            {/* Heading */}
            <h1
              className="
    text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl
    font-extrabold mb-6 sm:mb-8
    bg-gradient-to-r from-blue-500 to-cyan-400 
    bg-clip-text text-transparent leading-tight
    whitespace-nowrap
  "
            >
              Hi, I'm Sagun Ghimire
            </h1>


            {/* Description */}
            <p
              className="
                text-gray-400 
                text-sm sm:text-base md:text-lg lg:text-2xl xl:text-xl
                mb-8 sm:mb-10 max-w-2xl leading-relaxed
              "
            >
              I'm a beginner web developer with a passion for building modern and
              responsive websites. I work with React.js, HTML, CSS, and
              JavaScript, and I'm currently learning Python to expand my skills.
              I'm always exploring new tools and technologies to grow as a
              developer.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-5">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-8 sm:py-4 sm:px-10
                           rounded-xl font-semibold text-base md:text-lg lg:text-xl
                           transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500 text-blue-500 py-3 px-8 sm:py-4 sm:px-10
                           rounded-xl font-semibold text-base md:text-lg lg:text-xl
                           transition hover:-translate-y-0.5 hover:bg-blue-500/10 
                           hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Inline Keyframes */}
      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 12px rgba(59, 130, 246, 0.6), 0 0 24px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 28px rgba(59, 130, 246, 0.9), 0 0 50px rgba(59, 130, 246, 0.7);
          }
        }
      `}</style>
    </section>
  );
};
