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
        background: "#0D1821",
        "background-highlighted": "#1D2831",
        "background-light": "#e7e8ee",
        primary: "#F78154",
        secondary: "#706C61",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
