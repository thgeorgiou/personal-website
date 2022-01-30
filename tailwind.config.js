module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Jetbrains Mono", "monospace"],
      serif: ["Bitter", "serif"],
    },
    extend: {
      colors: {
        "gray-darker": "#1a1a1a",
        "gray-dark": "#1f1f1f",
        "gray-light": "#706C61",
        "gray-lighter": "#D4D2D5",
        primary: "#F06449",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
