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