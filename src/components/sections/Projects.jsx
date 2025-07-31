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
              },
              {
                title: "Functional Calculator",
                description:
                  "A responsive and clean UI calculator for basic arithmetic operations with smooth real-time interactions. Performs basic operations like add, sub, mul, div and many more.",
                tech: ["Html", "Tailwind", "JS"],
                github: "https://github.com/sagunn246/Functional-Calculator",
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
                github: "https://github.com/sagunn246/Website",
                preview: "https://hungryforfood.netlify.app/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition bg-[#0b0b0b]"
              >
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
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
                    View Project →<FaGithub className="text-white text-xl" />
                  </a>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm"
                  >
                    Preview →<SiNetlify className="text-white text-xl" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
