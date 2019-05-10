// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const tailwind = require('tailwindcss')

module.exports = {
  siteName: 'rsclarke.dev',
  siteUrl: 'https://rsclarke.dev',
  siteDescription: 'Security research published by Richard Clarke (@rsclarke)',
  titleTemplate: '%s - Richard Clarke (@rsclarke)',
  icon: 'src/assets/me.jpg',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/articles/**/*.md',
        typeName: 'ArticlePost',
        route: '/articles/:slug',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/bugs/**/*.md',
        typeName: 'BugPost',
        route: '/bugs/:slug',
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'nord' } ]
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwind('./tailwind.js')
        ]
      }
    }
  }
}
