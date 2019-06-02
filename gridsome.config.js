// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const tailwind = require('tailwindcss')

const stringify = require('rehype-stringify')

const path = require('path')

module.exports = {
  host: "0.0.0.0",
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
        route: '/article/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true,
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/bugs/**/*.md',
        typeName: 'Bug',
        route: '/bug/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true,
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      //useBuiltIns: false,
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      stringifier: stringify,
      plugins: [
        [ 'remark-rehype', {allowDangerousHTML: true}],
        [ 'rehype-raw' ],
        [ 'rehype-shiki', {theme: path.resolve('src/assets', 'rsclarke.tmTheme'), useBackground: false}],
        [ 'rehype-add-classes', {
            a: 'text-blue',
            blockquote: 'ml-4 pl-4 pr-8 mb-4 border-l-4 border-light border-solid rounded',
            p: 'tracking-wide text-justify leading-relaxed mb-4',
            'h1,h2,h3,h4,h5,h6': 'tracking-wider font-normal text-red mb-4',
            h1: 'text-4xl',
            h2: 'text-3xl',
            h3: 'text-2xl',
            'h4,h5,h6': 'text-xl font-medium',
            pre: 'p-4 mb-4 text-xl',
            code: 'font-mono',
            'p > code': ' text-xl bg-light text-dark rounded p-1',
            'h1 > code': 'bg-light text-dark rounded p-1',
            'h2 > code': 'bg-light text-dark rounded p-1',
            'h3 > code': 'bg-light text-dark rounded p-1',
            'h4 > code': 'bg-light text-dark rounded p-1',
            'h5 > code': 'bg-light text-dark rounded p-1',
            'h6 > code': 'bg-light text-dark rounded p-1',
            'ul,ol': 'mb-4'
        }]        
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
