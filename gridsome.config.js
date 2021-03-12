module.exports = {
  siteName: "Himalayeah",
  siteUrl: "https://www.aintnomountain.com",
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