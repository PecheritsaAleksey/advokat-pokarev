require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Адвокат Покарев`,
    siteUrl: `https://gettouch.site/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "aleksey-pokarev",
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          main: require("./custom_types/main.json"),
          about: require("./custom_types/about.json"),
          practice: require("./custom_types/practice.json"),
          service: require("./custom_types/service.json"),
          contact: require("./custom_types/contact.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: "aleksey-pokarev",
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
  ],
};
