module.exports = {
  siteMetadata: {
    title: 'RBL Art Design - Modern Web Design',
    author: 'SalemAziel',
    description: 'Web Design for the modern world',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'rbl-art-design',
        short_name: 'rblartdesign',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/logo-idea1-150px-whiteshadow.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
