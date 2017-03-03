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
            title: 'Planner',
            loading: true,
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['getUser', 'getTodoList'])
    },
    beforeMount() {
        const _this = this
        this.getUser()
        this.$store.subscribe(function(mutation, state) {
            switch (mutation.type) {
                case 'setUser':
                    state.user.uid ? _this.getTodoList(state.user.uid) : _this.loading = false
                    break
                case 'setTodoList':
                    _this.loading = false
                    break
            }
        })
    }
})