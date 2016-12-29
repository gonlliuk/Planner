import Vue from 'vue'
import { Header, TodoList, Checkbox } from './components'
import view from './view.pug'

Vue.component('Header', Header)
Vue.component('TodoList', TodoList)
Vue.component('Checkbox', Checkbox)

new Vue({
    template: view,
    data: {
    	title: 'Planner'
    },
    el: '#app'
})