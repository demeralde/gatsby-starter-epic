const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx"],
  whitelistPatterns: [],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require("cssnano")({ preset: "default" })]
      : []),
    require("autoprefixer"),
  ],
};
