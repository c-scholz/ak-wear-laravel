import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import { store, mutations } from './OrderStore'

const el = document.getElementById('app')

Vue.use(InertiaApp)

// add fontawesome icons
library.add(faLink)
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faReply)
library.add(faCheck)
library.add(faShare)
library.add(faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => require(`./Pages/${name}`).default,
    },
  }),
}).$mount(el)