// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MyPlugin from './sss'
import VueResource from 'vue-resource'
import store from './store'


Vue.config.productionTip = false
Vue.use(MyPlugin)
Vue.use(VueResource)

Vue.prototype.HTTP = 'https://www.easy-mock.com/mock/5acb03fa9a002152092083a2/example'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

