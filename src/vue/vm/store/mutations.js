export function setUser(state, user) {
	state.user = { 
		uid: user.uid,
		photoURL: user.photoURL,
		displayName: user.displayName,
		email: user.email 
	}
}

export function addTodo(state, todo) {
	state.todoList.push(todo)
}

export function setTodoList(state, todoList) {
	let list = []
	for (let key in todoList) {
		list.push(todoList[key])
	}
	
	state.todoList = list
}