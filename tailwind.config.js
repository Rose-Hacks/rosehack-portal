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
        lexend: ["var(--font-lexend)"],
        pixel: ["var(--font-pixel)", "cursive"],
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
        rose: {
          blue: "#5ca5ff",
          pink: "#ff4df3",
          purple: "#a64dff",
        },
        team: {
          top: "#7C4FFF",
          bottom: "#FF7777",
          green: "#C9F9BE",
          pink: "#F7CDE0",
          yellow: "#FCFBB6",
          hotpink: "#F08DCF",
          purple: "#A480F2",
          gold: "#FAD6A5",
          teal: "#9BF6FC",
          orange: "#F4ACAD",
          lightpurple: "#BDB2FA",
          committee: "#F08DCF",
        },
        sponsors: {
          top: "#CC00FF",
          bottom: "#4FF4FF",
        },
        landing: {
          brightgreen: "#1EFF1A",
          top: "#972875",
          bottompink: "#FC7AD5",
          bottom: "#9E00FF",
          secondtop: "#491CFF",
          secondbottom: "#05001A",
        },
        about: {
          top: "#3D008A",
          bottom: "#8000FF",
          left: "#D20ED6",
          right: "#57AEFF",
          pink: "#E653BA",
          blue: "#15DBFF",
        },
        register: {
          top: "#9E00FF",
          bottom: "#FC7AD5",
          required: "#94FFF9",
        },
        faq: {
          top: "#7000FF",
          bottom: "#FF8A65",
          middle: "#441797",
          question: "#F08DCF",
          answer: "#FBFBFB",
          noQuestion: "#01FFC2",
          contact: "#26DDE1",
          email: "#48BDFF",
        },
        schedule: {
          top: "#CC00FF",
          bottom: "#FF4F79",
          coral: "#FF779A",
          darkpurple: "#6112A1",
          purple: "#7C4FFF",
          blue: "#4FA0FF",
          hotpink: "#DB00FF",
        },
        judges: {
          top: "#CC00FF",
          bottom: "#00E0FF",
        },
      },
    },
  },
  plugins: [],
};
