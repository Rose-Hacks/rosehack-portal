/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        yellow: "0 0px 9px rgba(255,210,100, 1)",
        blue: "0 0px 9px rgba(73,200,255, 1)",
        bluesmall: "0 0px 3px rgba(73,200,255, 1)",
        pink: "0 0px 9px rgba(252,122,213, 1)",
        pinksmall: "0 0px 3px rgba(252,122,213, 1)",
        whitesmall: "0 0px 3px rgba(255,255,255, .3)",
        white: "0 0px 9px rgba(255,255,255, .6)",
        whitebig: "0 0px 15px rgba(255,255,255, 1)",
        bigwhite: "0 0px 20px rgba(255,255,255, .3)",
        green: "0 0px 9px rgba(30, 255, 26, 1)",
        lightblue: "0 4px 9px rgba(21, 219, 255, 1)",
        black: "0 0px 9px rgba(0,0,0, .6)",
      },
      fontFamily: {
        lexend: ["Lexend"],
        pixel: ["'Press Start 2P'", "cursive"],
      },
      colors: {
        header: {
          left: "#7500BC",
          right: "#1B0070",
          fright: "#1C113F",
          hover: "#F08DCF",
        },
        admin: {
          top: "#8700A9",
          bottom: "#69FFF6",
          dark: "#260056",
        },
        register: {
          top: "#9E00FF",
          bottom: "#FC7AD5",
          required: "#94FFF9",
        },
      },
    },
  },
  plugins: [],
};
