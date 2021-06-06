module.exports = {
  siteName: "Himalayeah!",
  siteUrl: "http://www.himalayeah.de",
  siteDescription: "",
  icon: 'src/favicon.png',
  titleTemplate: '%s',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
          typeName: 'Post',
          path: 'blog/*.md',
          route: '/blog/:slug',
      }
    },
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
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-PD6ZJ50QXS'
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
        externalLinksTarget: '_blank',
        externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        anchorClassName: 'icon icon-link',
        plugins: [
            '@gridsome/remark-prismjs'
        ]
    }
  },
};