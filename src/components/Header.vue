<template>
    <div id="header">
        <div class="container">
            <ul class="links">
                <li><router-link to="/" class="active">Home</router-link></li>
                <li><router-link to="/component">Component</router-link></li>
                <li><router-link to="/posts">Posts</router-link></li>
                <li><router-link to="/todolist">TodoList</router-link></li>
                <li><router-link to="/login" @click="logout">Logout</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"header",
    props:['logout'],
}
</script>
<style lang="scss" scoped>
#header{
    background-color: #fff;
    height:60px;
    display: flex;
    align-items: center;
    border-bottom:1px solid #eee;
    width:100%;
    @media(max-width:445px){
        height:65px;
        overflow-x: scroll;
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px transparent;
            background-color: transparent;
            border-radius: 10px;
        }
        &::-webkit-scrollbar {
            height: 4px;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #D8B330;
        }
    }
    // box-shadow: 0px 0px 3px rgba(0,0,0,0.1);
    .links{
        list-style-type: none;
        padding: 0;
        margin:0;
        display: flex;
        gap: 30px;
        @media(max-width:640px){
            gap: 20px;
        }
        li{
            height:60px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover{
                a{
                    color:#D8B330;
                }
            }
            a{
                transition: 0.25s ease-in all;
                color:#888;
                text-decoration: none;
                &.active{
                    color:#D8B330
                }
            }
        }
    }
}
</style>