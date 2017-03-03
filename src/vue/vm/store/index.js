import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,

	state: {
		user: {}
	},

	getters: {
		user: state => ({ ...state.user })
	},

	actions: {
		getUser: actions.getUser,
		signIn: actions.signIn,
		signOut: actions.signOut,
	},

	mutations: {
		setUser: mutations.setUser,
	}
})