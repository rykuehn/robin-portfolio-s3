module.exports = {
  siteMetadata: {
    title: "Robin Lawrence's Website",
  },
  plugins: ['gatsby-plugin-react-helmet', 
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 4000
      }
    }
  ],
}
