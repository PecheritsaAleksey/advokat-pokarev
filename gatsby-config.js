require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Адвокат Покарев`,
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
