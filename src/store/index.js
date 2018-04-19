import Vue from 'vue'
import Vuex from 'vuex'
import home from './home.js'
import header from './header.js'
import footer from './footer.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home: home,
        header: header,
        footer: footer

    }
})


