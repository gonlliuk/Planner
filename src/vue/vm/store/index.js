import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

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

	actions: {
		getUser: actions.getUser,
		signIn: actions.signIn,
		signOut: actions.signOut,
		addTodo: actions.addTodo,
		updateTodo: actions.updateTodo,
		removeTodo: actions.removeTodo,
		getTodoList: actions.getTodoList,
	},

	mutations: {
		setUser: mutations.setUser,
		setTodoList: mutations.setTodoList,
	}
})