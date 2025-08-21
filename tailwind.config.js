// tailwind.config.js
module.exports = {
  darkMode: "class", // <-- add this
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 15px rgba(59,130,246,0.5), 0 0 30px rgba(59,130,246,0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 25px rgba(59,130,246,0.9), 0 0 50px rgba(59,130,246,0.6)",
          },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
