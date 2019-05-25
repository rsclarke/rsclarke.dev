// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-ubuntu-mono')

import '~/assets/base.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faDev, faTwitter, faKeybase,  faCreativeCommons, faCreativeCommonsBy, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faSitemap, faRss, faHeart, faPaperPlane, faFingerprint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faDev, faTwitter, faKeybase, faCreativeCommons, faCreativeCommonsBy, faPatreon, faSitemap, faRss, faHeart, faPaperPlane, faFingerprint)


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  head.bodyAttrs = {
    class: 'bg-dark bg-img font-mono text-light pt-4 pl-4 pr-4'
  }
}
