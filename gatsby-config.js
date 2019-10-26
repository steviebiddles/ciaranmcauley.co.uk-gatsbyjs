module.exports = {
  siteMetadata: {
    title: `DJ Ciaran McAuley`,
    description: `Ciaran McAuley - Producer / DJ and formerly one half of renowned trance duo Walsh & McAuley. One of the brightest emeralds in Ireland's rich trance history, one of Ireland's much vaunted new breed of trance producer.`,
    author: `Ciaran McAuley`,
    keywords: `DJ, Producer, Ciaran McAuley, Ireland, Walsh & McAuley, Trance`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DJ Ciaran McAuley`,
        short_name: `Ciaran McAuley`,
        start_url: `/posts/`,
        icon: `${__dirname}/src/assets/images/logo-512x512.png`, // This path is relative to the root of the site.
        background_color: "#525252",
        theme_color: "#ffffff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`, // must be after gatsby-plugin-manifest
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/providers/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/src/providers/json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `filesystem`,
        path: `${__dirname}/src/`,
        // ignore: [`**/*.md`],
      },
    },
  ],
};
