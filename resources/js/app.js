import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsisV, 
    faLink, 
    faChevronRight,
    faChevronLeft,
    faReply,
    faShare,
    faCheck,
    faTimes,
    faTint
} from '@fortawesome/free-solid-svg-icons'

import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import { store, mutations } from './OrderStore'

const el = document.getElementById('app')

Vue.use(InertiaApp)

// add fontawesome icons
library.add(faEllipsisV, 
    faLink, 
    faChevronRight, 
    faChevronLeft,
    faReply,
    faShare,
    faCheck,
    faTimes,
    faTint)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => require(`./Pages/${name}`).default,
    },
  }),
}).$mount(el)