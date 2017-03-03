import view from'./view.pug'
import { mapGetters, mapActions } from 'vuex'

export default {
    template: view,
    data: function() {
        return {
            newTodo: '',
            maxLength: 90,
            placeholder: 'write something here'
        }
    },
    computed: {
        ...mapGetters(['todoList'])
    },
    methods: {
        ...mapActions(['addTodo', 'updateTodo', 'removeTodo']),

        add() {
            if (this.newTodo.trim() === '') {
                this.newTodo = ''
                return
            }

            this.addTodo({
                userId: this.$store.state.user.uid,
                todo: {title: this.newTodo, date: new Date()}
            })
            this.newTodo = ''
        },

        remove(item) {
            this.removeTodo({
                userId: this.$store.state.user.uid,
                todo: item
            })
        },

        check(item) {
            this.updateTodo({
                userId: this.$store.state.user.uid,
                todo: Object.assign({}, item, {checked: !item.checked})
            })
        }
    }
}