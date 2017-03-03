import view from'./view.pug'
import { mapGetters, mapActions } from 'vuex'

export default {
    template: view,
    data: function() {
        return {
            newTodo: '',
            placeholder: 'plan some staff to do'
        }
    },
    computed: {
        ...mapGetters(['todoList'])
    },
    methods: {
        ...mapActions(['addTodo', 'updateTodo', 'removeTodo']),

        add() {
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