import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-black overflow-x-hidden"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Tourism-website",
                description:
                  "Explore Nepal’s Beauty — A stunning tourism website showcasing Nepal’s destinations, culture, and tips. Nature is a medicine for depression.",
                tech: ["Html", "CSS", "JS", "MongoDB"],
                github: "https://github.com/sagunn246/Website/tree/Tourism",
                preview: null,
              },
              {
                title: "Functional Calculator",
                description:
                  "A responsive and clean UI calculator for basic arithmetic operations with smooth real-time interactions. Performs basic operations like add, sub, mul, div and many more.",
                tech: ["Html", "Tailwind", "JS"],
                github: "https://github.com/sagunn246/Functional-Calculator",
                preview: null,
              },
              {
                title: "School Project",
                description:
                  "Daddy's Kitchen — A modern e-commerce platform for fresh food with fast delivery and easy checkout. Feel free to order from here.",
                tech: ["React", "Node.js", "Tailwind", "MongoDB"],
                github: "https://github.com/sagunn246/Food-commerce",
                preview: "https://sagunfood.netlify.app/",
              },
              {
                title: "Own E-commerce",
                description:
                  "FoodliesHub — Order fresh meals and groceries online with quick delivery and secure payments. Feel free to order from here.",
                tech: ["React", "Node.js", "Tailwind", "MongoDB"],
                github: "https://github.com/sagunn246/Client",
                preview: "https://sagunnfood.netlify.app/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl border border-white/10 bg-[#0b0b0b] 
                           hover:scale-[1.03] hover:rotate-[0.5deg] transition-transform duration-300 
                           hover:border-blue-500/30 hover:shadow-[0_2px_20px_rgba(59,130,246,0.2)]
                           before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent 
                           before:group-hover:border-blue-500/20 before:transition-all before:duration-500 before:pointer-events-none"
              >
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 py-1 px-4 
                                 rounded-full text-sm hover:from-blue-500/20 hover:to-cyan-500/20 
                                 hover:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm"
                  >
                    Download code → <FaGithub className="text-white text-xl" />
                  </a>

                  {project.preview ? (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm"
                    >
                      Preview → <SiNetlify className="text-white text-xl" />
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm animate-pulse">
                      Pending
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
