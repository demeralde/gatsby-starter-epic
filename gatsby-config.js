require("dotenv").config({});

const path = require("path");

const title = "gatsby-starter-epic";

module.exports = {
  siteMetadata: {
    title,
    description: "Generic starter for Gatsby with epic defaults.",
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        config: path.join(__dirname, "src/config"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "icons",
        path: `${__dirname}/src/assets/icons`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: "#DE911D",
        theme_color: "#DE911D",
        display: "minimal-ui",
        icon: "src/assets/icons/gatsby-icon.png",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-background-image",
    {
      resolve: "@sentry/gatsby",
      options: { dsn: process.env.GATSBY_SENTRY_DSN },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ["**/styles.ts", "**/styles.tsx"],
      },
    },
  ],
};
