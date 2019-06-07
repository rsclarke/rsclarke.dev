// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const tailwind = require('tailwindcss')
const stringify = require('rehype-stringify')
const path = require('path')

const unified = require('unified')
const markdown = require('remark-parse')
const r2r = require('remark-rehype')

function toHTML(content){
  return unified()
    .use(markdown)
    .use(r2r)
    .use(stringify)
    .processSync(content)
    .toString()
}

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
          author: 'Author',
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
          author: 'Author',
          tags: {
            typeName: 'Hashtag',
            route: '/hashtags/:id',
            create: true,
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Article'], //extend with Vuln
        feedOptions: {
          title: 'rsclarke.dev',
          description: 'Security research and tech articles published by Richard Clarke (@rsclarke)',
          id: "https://rsclarke.dev",
          link: "https://rsclarke.dev",
          language: 'en',
          image: "https://rsclarke.dev/me.jpg",
          favicon: "https://rsclarke.dev/me.jpg",
          copyright: "Creative Commons - Attribution 4.0 International (CC-BY 4.0)",
          feedLinks: {
            atom: "https://rsclarke.dev/feed.atom"
          },
          author: {
            name: "rsclarke",
            email: "rsclrk@pm.me",
            link: "https://rsclarke.dev"
          }
        },
        rss: {
          enabled: true,
          output: '/rss.xml'
        },
        atom: {
          enabled: true,
          output: '/feed.atom'
        },
        json: {
          enabled: false,
          output: '/feed.json'
        },
        maxItems: 15,
        htmlFields: ['content'],
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          description: node.description,
          content: toHTML(node.content)
        })
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
