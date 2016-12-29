import view from'./view.pug'

export default {
    template: view,
    data: function() {
        return {
            items: [],
            newTodo: '',
            placeholder: 'plan some staff to do'
        }
    },
    methods: {
        add: function() {
            this.newTodo !== '' && this.items.unshift({
                title: this.newTodo,
                checked: false
            })
            this.newTodo = ''
        },

        remove: function(index) {
            this.items.splice(index, 1)
        },

        check: function(item) {
            item.checked = !item.checked
        }
    }
}