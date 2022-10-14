/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.tsx", "./src/common/**/*.tsx"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#1B1A1A ",
      texts: "#C5C5C5",
      titles: "#FCFCFC",
      redPrimary: "#F83941",
      darkRed: "#D91A23",
    },
    extend: {
      padding: {
        "65px": "65px",
      },
    },
    fontFamily: {
      Frank: ["Frank Ruhl Libre", "sans-serif"],
    },
    fontSize: {
      xl: [
        "1rem",
        {
          lineHeight: "21px",
          fontWeight: "700",
        },
      ],
      "2xl": [
        "2rem",
        {
          lineHeight: "36px",
          fontWeight: "900",
        },
      ],
      "3xl": [
        "3rem",
        {
          lineHeight: "62px",
          fontWeight: "900",
        },
      ],
      "4xl": [
        "0.8rem",
        {
          letterSpacing: "7.5px",
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
    },
  },
  fill: ["responsive", "hover", "focus"],
  plugins: [],
};
