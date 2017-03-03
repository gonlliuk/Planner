import firebase from 'firebase'
import * as actions from './constants'

export function getUser({commit}) {
	firebase.auth().onAuthStateChanged(user => {
		commit(actions.setUser, user || {})
	})
}

export function signIn({commit}) {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(result => {
		commit(actions.setUser, result.user)
	})
}

export function signOut({commit}) {
	firebase.auth().signOut().then(() => {
		commit(actions.setUser, {})
	})
}

export function getTodoList({commit}, userId) {
	firebase.database().ref(`/users/${userId}/todoList`).on('value', snap => {
		commit(actions.setTodoList, snap.val() || [])
	})
}

export function addTodo({commit}, payload) {
	const newKey = firebase.database().ref(`/users/${payload.userId}/`).child('todoList').push().key
	payload.todo.id = newKey
	firebase.database().ref(`/users/${payload.userId}/`).update({[`/todoList/${newKey}`]: payload.todo})
}

export function removeTodo({commit}, payload) {
	firebase.database().ref(`/users/${payload.userId}/`).update({[`/todoList/${payload.todo.id}`]: null})
}

export function updateTodo({commit}, payload) {
	firebase.database().ref(`/users/${payload.userId}/`).update({[`/todoList/${payload.todo.id}`]: payload.todo})
}
