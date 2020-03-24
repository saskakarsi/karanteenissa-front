import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Services from './views/Services.vue'
import Contact from './views/Contact.vue'
import Tips from './views/Tips.vue'
import Mentalhealth from './views/Mentalhealth.vue'

import NotFound from './components/NotFound.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/services',
            component: Services,
            name: 'Services'
        },
        {
            path: '/tips',
            component: Tips,
            name: 'Tips'
        },
        {
            path: '/mentalhealth',
            component: Mentalhealth,
            name: 'Mentalhealth'
        },
        {
            path: '/contact',
            component: Contact,
            name: 'Contact'
        },
        {
            path: '*',
            component: NotFound,
            name: 'Not found'
        }
    ]
})