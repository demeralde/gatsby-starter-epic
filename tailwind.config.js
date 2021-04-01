module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    font: {
      serif: ["Inter", "sans-serif"],
    },
    extend: {
      borderRadius: {
        "4xl": "3rem",
      },
      transitionDelay: {
        "50": "50ms",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
