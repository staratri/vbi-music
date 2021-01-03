import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vSelect from 'vue-select'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'material' // set your iconPack, defaults to material. material|fontawesome|custom-class
})

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.commit('playlist/initializeStore')
  },
  render: h => h(App)
}).$mount('#app')
