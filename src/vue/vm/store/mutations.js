import * as actions from './constants'

export default {
	[actions.setUser](state, user) {
		state.user = { 
			uid: user.uid,
			photoURL: user.photoURL,
			displayName: user.displayName,
			email: user.email 
		}
	},

	[actions.addTodo](state, todo) {
		state.todoList.push(todo)
	},

	[actions.setTodoList](state, todoList) {
		let list = []
		for (let key in todoList) {
			list.push(todoList[key])
		}
		
		state.todoList = list
	}
}
