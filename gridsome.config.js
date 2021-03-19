module.exports = {
  siteName: "Himalayeah!",
  siteUrl: "http://www.himalayeah.de",
  icon: 'src/favicon.png',
  titleTemplate: '%s',
  plugins: [
    
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
        }
      }
    }
  ],
  
};