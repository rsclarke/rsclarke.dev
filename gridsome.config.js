// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const tailwind = require('tailwindcss')
const stringify = require('rehype-stringify')
const path = require('path')

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
        typeName: 'Article',
        route: '/articles/:slug',
        refs: {
          tags: {
            typeName: 'Hashtag',
            route: '/hashtags/:id',
            create: true,
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/vulns/**/*.md',
        typeName: 'Vuln',
        route: '/vulns/:slug',
        refs: {
          tags: {
            typeName: 'Hashtag',
            route: '/hashtags/:id',
            create: true,
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksRel: ['noopener', 'noreferrer'],
      stringifier: stringify,
      plugins: [
        [ 'remark-rehype', {allowDangerousHTML: true}],
        [ 'rehype-raw' ],
        [ 'rehype-shiki', {theme: path.resolve('src/assets', 'rsclarke.tmTheme'), useBackground: false}],
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwind('./tailwind.config.js')
        ]
      }
    }
  }
}
