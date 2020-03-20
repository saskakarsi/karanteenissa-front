import Vue from 'vue'
import Router from 'vue-router'

import Services from './views/Services.vue'

import NotFound from './components/NotFound.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Services,
            name: 'Services'
        },
        {
            path: '*',
            component: NotFound,
            name: 'Not found'
        }
    ]
})