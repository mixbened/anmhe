module.exports = {
  siteName: "Ain't No Mountain High Enough",
  siteUrl: "https://www.aintnomountain.com",
  plugins: [
    {
      use: "@gridsome/source-airtable",
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tables: [
          {
            name: "Events",
            typeName: "Event", //required - needs to match template name
            select: {}, 
            links: [], 
          },
        ],
        tableName: "Events", 
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-MR9FXDD4T8'
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
  templates: {
    Event: "/events/:id",
  },
};