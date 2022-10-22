/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.tsx",
    "./src/common/**/*.tsx",
    "./src/modules/**/*.tsx",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primaryLight: "#f1ab7539",
      primary: "#FDC892",
    },
    extend: {
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      padding: {
        "65px": "65px",
      },
    },
    fontFamily: {
      Frank: ["Frank Ruhl Libre", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Jakarta: ["Plus Jakarta Sans", "sans-serif"],
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
