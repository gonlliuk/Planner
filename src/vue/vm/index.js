import Vue from 'vue'
import firebase from 'firebase'
import { Header, TodoList, Checkbox } from './components'
import view from './view.pug'

const firebaseConfig = {
    apiKey: "AIzaSyCssiUJC7M4fAV8qGsgtrvnHywS4Zc7E_k",
    authDomain: "planner-faf0d.firebaseapp.com",
    databaseURL: "https://planner-faf0d.firebaseio.com",
    storageBucket: "planner-faf0d.appspot.com",
    messagingSenderId: "98892695131"
};

firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(user => {
	console.log(user)
	initVue(user)
})

Vue.component('Header', Header)
Vue.component('TodoList', TodoList)
Vue.component('Checkbox', Checkbox)

function initVue(user) {
	new Vue({
    template: view,
    data: {
    	title: 'Planner',
    	user: user
    },
    methods: {
    	signIn: function() {
			const _this = this;
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider).then(result => {
				_this.user = result.user
			})

		},
    	signOut: function() {
    		this.user = null
    	}
    },
    el: '#app'
})
}