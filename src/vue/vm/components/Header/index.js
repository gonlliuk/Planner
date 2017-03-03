import view from './view.pug'
import { mapGetters, mapActions } from 'vuex'

export default {
	template: view,
	props: ['title'],
	computed: {
		...mapGetters(['user'])
	},
	methods: {
		...mapActions(['signIn', 'signOut'])
	}
}