import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import firebase from 'firebase'
import firebaseConf from './firebaseConf'
import store from './store'
import { Header, TodoList, Checkbox } from './components'
import view from './view.pug'

firebase.initializeApp(firebaseConf)

Vue.component('Header', Header)
Vue.component('TodoList', TodoList)
Vue.component('Checkbox', Checkbox)

new Vue({
    el: '#app',
    template: view,
    store: store,
    data() {
    	return {
            title: 'Planner'
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['getUser'])
    },
    beforeMount() {
        this.getUser()
    }
})