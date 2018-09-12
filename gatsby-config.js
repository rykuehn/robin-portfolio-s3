module.exports = {
  siteMetadata: {
    title: "Robin Lawrence's Website",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-page-transitions',
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prettier`,
          },
        ],
      },
    },
  ],
}
