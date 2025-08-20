import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    {
      name: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    },
    {
      name: "JavaScript",
      img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    },
    {
      name: "CSS3",
      img: "https://img.icons8.com/?size=512&id=21278&format=png",
    },
    {
      name: "Tailwind CSS",
      img: "https://cdn.creazilla.com/icons/3254431/tailwindcss-icon-icon-lg.png",
    },
    {
      name: "HTML5",
      img: "https://images.icon-icons.com/171/PNG/512/html5_23329.png",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      img: "https://images.seeklogo.com/logo-png/27/2/node-js-logo-png_seeklogo-273749.png",
    },
    {
      name: "MongoDB",
      img: "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
    },
    {
      name: "Express.js",
      img: "https://www.manektech.com/storage/developer/1646733543.webp",
    },
    {
      name: "JWT Auth",
      img: "https://seeklogo.com/images/J/json-web-tokens-jwt-io-logo-C003DEC47A-seeklogo.com.png",
    },
  ];

  const tools = [
    {
      name: "Git",
      img: "https://images.icon-icons.com/2415/PNG/512/git_plain_logo_icon_146507.png",
    },
    {
      name: "GitHub",
      img: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
    },
    {
      name: "VS Code",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    },
    {
      name: "Postman",
      img: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    },
    {
      name: "Figma",
      img: "https://www.figma.com/community/resource/877724bb-de21-49c5-b59a-48f65c48f210/thumbnail",
    },
  ];

  const hobbies = ["Coding", "Gaming", "Traveling"];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center py-20 px-4 bg-black overflow-x-hidden"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Main About Card */}
          <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Skilled in creating dynamic and responsive web apps with modern
              technologies. Always learning and exploring new ways to bring
              ideas to life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {frontendSkills.map((tech, key) => (
                    <div
                      key={key}
                      className="flex flex-col items-center hover:scale-110 transition-transform"
                    >
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="w-12 h-12 mb-2"
                      />
                      <span className="text-sm text-blue-400">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {backendSkills.map((tech, key) => (
                    <div
                      key={key}
                      className="flex flex-col items-center hover:scale-110 transition-transform"
                    >
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="w-12 h-12 mb-2"
                      />
                      <span className="text-sm text-green-400">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 mt-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {tools.map((tool, key) => (
                  <div
                    key={key}
                    className="flex flex-col items-center hover:scale-110 transition-transform"
                  >
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className="w-10 h-10 mb-2"
                    />
                    <span className="text-sm text-gray-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
                <li>
                  <strong>Class-12 Computer Engineering</strong> - B.R.S.S
                  (2022–Current)
                </li>
                <li>
                  Relevant Coursework: Web Development, Deep Internet Browsing,
                  Machine Learning ...
                </li>
                <li>Participated in coding competitions and group projects.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏢 Work Experience</h3>
              <div className="space-y-4 text-gray-300 text-left">
                <div>
                  <h4 className="font-semibold">Personal Projects</h4>
                  <p>
                    Built e-commerce websites, calculators, and interactive UIs
                    with modern animations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">College / Group Projects</h4>
                  <p>
                    Developed front-end and handled API integrations in team
                    projects.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Freelance / Practice</h4>
                  <p>
                    Created small websites for local businesses and simple
                    Node.js automations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all mt-8">
            <h3 className="text-xl font-bold mb-4">🎯 Hobbies & Interests</h3>
            <div className="flex flex-wrap gap-2 justify-center text-gray-300">
              {hobbies.map((hobby, key) => (
                <span
                  key={key}
                  className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition cursor-pointer"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
