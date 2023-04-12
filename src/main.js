import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'document-register-element/build/document-register-element'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)
// Vue.config.productionTip = false

App.store = store
App.router = router
Vue.customElement('rspnd-chat', App)
