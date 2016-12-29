import view from './view.pug'

export default {
    template: view,
    props: ['state'],
    methods: {
        check: function() {
            this.$emit('check')
        },

        getCheckboxClass: function() {
        	console.log(this.state)
        	return this.state ? 'checkbox--checked' : 'checkbox--unchecked'
        }
    }
}