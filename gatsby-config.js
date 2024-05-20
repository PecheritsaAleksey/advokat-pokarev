require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Адвокат Покарев`,
    description: `Адвокат по уголовным, гражданским, экономическим делам и спорам`,
    siteUrl: `https://www.xn----7sbabhdjm5bc4bdmry.xn--p1ai/`,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
        resolvePages: ({ allSitePage: { nodes } }) => {
          return nodes
            .filter((x) => !x.path.includes("404"))
            .map((node) => {
              return { path: node.path };
            });
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: `daily`,
            priority: 0.7,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.xn----7sbabhdjm5bc4bdmry.xn--p1ai",
        sitemap: "https://www.xn----7sbabhdjm5bc4bdmry.xn--p1ai/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: ["/", "/practice", "/services", "/contacts"],
          },
          { userAgent: "*", disallow: ["/404"] },
        ],
      },
    },
  ],
};
