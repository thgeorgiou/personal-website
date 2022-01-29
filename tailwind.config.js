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
        background: "#1a1a1a",
        "background-highlighted": "#1f1f1f",
        "background-light": "#e7e8ee",
        primary: "#F78154",
        secondary: "#706C61",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
