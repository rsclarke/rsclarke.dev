// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
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
  templates: {
    Article: '/articles/:slug',
    Vuln: '/vulns/:slug',
    Hashtag: '/hashtags/:id',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/articles/**/*.md',
        typeName: 'Article',
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Hashtag',
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
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Hashtag',
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
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: [],
        config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/vulns/*': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/hashtags/*': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/code': {
            changefreq: 'monthly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        },
        staticUrls: [
          {
            url: '/feed.atom',
            title: 'Atom feed'
          },
          {
            url: '/rss.xml',
            title: 'RSS feed'
          }
        ]
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_self',
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
          tailwind,
          purgecss,
        ]
      }
    }
  }
}
