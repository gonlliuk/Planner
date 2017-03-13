import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,

	state: {
		user: {},
		todoList: []
	},

	getters: {
		user: state => ({ ...state.user }),
		todoList: state => [...state.todoList]
	},

	actions,

	mutations
})