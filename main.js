var app = new Vue(
    {
        el: '#root',
        data: {
            newTodo: '',
            todoList: [
                'cucinare',
                'portare fuori il cane',
                'esercitazione VUE'
            ]
        },
        methods: {
            addTodo(){
                this.todoList.push(this.newTodo);
                this.newTodo='';
                console.log(this.todoList);
            },
            deleteTodo(todoIndex){
                this.todoList.splice(todoIndex, 1);

            }
        },
        mounted() {

        }
    }
);
