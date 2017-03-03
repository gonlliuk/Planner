export function setUser(state, user) {
	state.user = { 
		uid: user.uid,
		photoURL: user.photoURL,
		displayName: user.displayName,
		email: user.email 
	}
}