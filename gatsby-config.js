const { name } = require('./package.json');

module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  siteMetadata: {
    title: `Eurogroupe`,
    description: `Laure Giletti and Gregory Dapra are working together as Eurogroupe since 2012. They operate within the fields of graphic design and web development.`
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2000,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
              quality: 84,
              disableBgImage: true,
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Eurogroupe',
        short_name: 'EUR',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'standalone',
        icon: `static/android-chrome-512x512.png`,
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-preact'
  ]
};
