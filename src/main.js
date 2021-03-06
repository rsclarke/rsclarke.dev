// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-ubuntu-mono')

//import '~/assets/base.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faDev, faTwitter, faKeybase,  faCreativeCommons, faCreativeCommonsBy, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faSitemap, faRss, faHeart, faPaperPlane, faFingerprint, faHashtag, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faDev, faTwitter, faKeybase, faCreativeCommons, faCreativeCommonsBy, faPatreon, faSitemap, faRss, faHeart, faPaperPlane, faFingerprint, faHashtag, faExternalLinkAlt)


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  head.bodyAttrs = {
    class: 'bg-dark bg-img font-mono text-light p-4'
  }

  head.link.push({
    rel: 'alternative',
    type: 'application/rss+xml',
    title: 'rsclarke.dev',
    href: "https://rsclarke.dev/rss.xml"
  })

  head.link.push({
    rel: 'alternative',
    type: 'application/atom+xml',
    title: 'rsclarke.dev',
    href: "https://rsclarke.dev/feed.atom"
  })
}
