import view from './view.pug'
import firebase from 'firebase'

export default {
	template: view,
	props: ['title', 'user'],
	computed: {
	},
	methods: {
		signOut: function() {
			const _this = this;
			firebase.auth().signOut().then( () => {
				_this.$emit('signOut')
			})

		}
	}
}