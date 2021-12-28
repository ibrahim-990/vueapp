<template>
    <div id="todo">
        <div class="container">
            <form action="#" @submit="onSubmit">
                <input type="text" v-model="todo.text" placeholder="Add Todo" />
                <input type="submit" :value="formAction" />
            </form>
            <div class="group-todo">
                <div class="todo" v-for="(todo,index) in todos" :key="index">
                    <p :class="todo.complete ? 'active':''">{{todo.text}}</p>
                    <div class="action">
                        <i class="las la-check" :class="todo.complete ? 'active':''" @click="changeStatus(index)"></i>
                        <i class="las la-calendar-minus" @click="removeTodo(index)"></i>
                        <i class="las la-highlighter" @click="editTodo(index)"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var dataTodo = JSON.parse(localStorage.getItem("dataTodo")) || new Array();
export default {
    name:"todo",
    data() {
        return {
            todo:{
                text:"",
                complete:false,
            },
            todos:[],
            complete:false,
            formAction:'Add',
            indexTodo:"",
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault();
            if(this.formAction === "Add"){
                if(this.todo.text){
                    dataTodo.push(this.todo);
                    this.todos = dataTodo;
                    localStorage.setItem("dataTodo",JSON.stringify(this.todos));
                    this.resetForm();
                }
            }else{
                this.saveEdit();
                this.resetForm();
                this.formAction = "Add";
            }
        },
        changeStatus(e){
            this.todos[e].complete = !this.todos[e].complete;
            localStorage.setItem("dataTodo",JSON.stringify(this.todos));
        },
        removeTodo(e){
            let confirmed = confirm('Are You Sure To Delete');
            if(confirmed){
                this.todos.splice(e,1);
                localStorage.setItem("dataTodo",JSON.stringify(this.todos));
            }else{
                return;
            }
        },
        editTodo(e){
            this.formAction = "Update";
            this.todo = {
                text:this.todos[e].text,
                complete:this.todos[e].complete,
            };
            this.indexTodo = e;
        },
        saveEdit(){
            this.todos[this.indexTodo] = this.todo;
            localStorage.setItem("dataTodo",JSON.stringify(this.todos));
        },
        resetForm(){
            this.todo = {
                text:"",
                complete:false,
            }
        }
    },
    created() {
        this.todos = dataTodo;
    },
}
</script>

<style lang="scss" scoped>
#todo{
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top:25px;
        @media(max-width:450px){
            margin-top:25px;
        }
        form{
            display: flex;
            width:420px;
            @media(max-width:450px){
                width:100%;
            }
            input{
                width:100%;
                padding:12px 15px;
                border:none;
                outline: none;
                &[type="submit"]{
                    width:80px;
                    cursor: pointer;
                    background-color: #D8B330;
                    color:#fff;
                }
            }
        }
        .group-todo{
            margin-top:15px;
            display: flex;
            flex-direction: column;
            gap:15px;
            width:420px;
            @media(max-width:450px){
                width:100%;
            }
            .todo{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding:12px;
                background-color: #fff;
                border-radius: 5px;
                gap:12px;
                @media(max-width:450px){
                    flex-direction: column;
                    align-items: flex-start;
                    gap:25px;
                }
                p{
                    font-size:14px;
                    color:#666;
                    font-weight:300;
                    width: 80%;
                    @media(max-width:450px){
                        width:100%;
                        font-size:13px;
                    }
                    &.active{
                        text-decoration: line-through;
                        text-decoration-color: rgb(89, 139, 185);
                    }
                }
                .action{
                    display: flex;
                    align-items: center;
                    gap:10px;
                    i{
                        cursor: pointer;
                        &:nth-child(1){
                            background-color: rgb(62, 92, 88);
                            padding:6px;
                            color:#fff;
                            border-radius: 5px;
                            &.active{
                                background-color: rgb(89, 139, 185);
                            }
                        }
                        &:nth-child(2){
                            background-color: rgb(212, 68, 68);
                            padding:6px;
                            color:#fff;
                            border-radius: 5px;
                        }
                        &:nth-child(3){
                            background-color: rgb(31, 235, 157);
                            padding:6px;
                            color:#fff;
                            border-radius: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>