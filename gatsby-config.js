module.exports = {
  siteMetadata: {
    siteUrl: "https://www.goonin.kr",
    title: "goonin",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layout": "src/layout",
          "@pages": "src/pages",
          "@styles": "src/styles",
        },
        extensions: ["js"],
      },
    },
    `gatsby-plugin-netlify`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
