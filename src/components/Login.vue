<template>
    <div class="login">
        <div class="form-section">
            <h1>Login</h1>
            <form action="#" @submit="login">
                <div>
                    <label for="name">Name</label>
                    <input type="text" v-model="user.name" id="name" placeholder="Name" />
                    <span class="error-span" v-show="errors.errorName">{{errors.errorName}}</span>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" v-model="user.password" id="password" placeholder="Password" />
                    <span class="error-span" v-show="errors.errorPassword">{{errors.errorPassword}}</span>
                </div>
                <input type="submit" id="submit" value="Login"/>
            </form>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            user:{
                name:"",
                password:"",
            },
            errors:{
                errorName:"",
                errorPassword:"",
            }
        }
    },
    methods: {
        login(e){
            e.preventDefault();
            if(this.user.name !== "ibrahim" && this.user.password !== "123"){
                this.errors.errorName = "Error Name";
                this.errors.errorPassword = "Error Password";
            }else if(this.user.name !== "ibrahim"){
                this.errors.errorName = "Error Name";
                this.errors.errorPassword = "";
            }else if(this.user.password !== "123"){
                this.errors.errorPassword = "Error Password";
                this.errors.errorName = "";
            }else{
                localStorage.setItem("is_login",JSON.stringify(this.user));
                this.$emit("authenticated", true);
                localStorage.setItem("authenticated",true);
                this.$router.replace({ name: "Home" });
            }
        }
    },
}
</script>

<style lang="scss">
.error-span{
    color:rgb(196, 40, 40);
    font-size: 14px;
    font-weight:500;
}
.login{
    display: flex;
    align-items: center;
    justify-content: center;
    height:100vh;
    background:#eee;
}
.form-section{
    width:300px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-radius: 8px;
    background-color: #fff;
    padding:18px;
    h1{
        color:#555;
        font-size:30px;
        font-weight:500;
        text-align: center;
        margin:16px 0;
    }
    form{
        display: flex;
        flex-direction: column;
        gap:20px;
        div{
            display: flex;
            flex-direction: column;
            gap: 4px;
            label{
                font-size:14px;
                color:#666;
                font-weight:300,
            }
            input{
                font-size:16px;
                color:#555;
                font-weight:300;
                width:100%;
                padding:10px;
                border: none;
                background-color: #eee;
                border-radius: 4px;
            }
        }
        input#submit{
            font-size:16px;
            color:#fff;
            font-weight:500;
            width:100%;
            padding:10px;
            border: none;
            background-color: #D8B330;
            border:1px solid #D8B330;
            cursor: pointer;
            transition: 0.25s ease-in all;
            &:hover{
                opacity: 0.8;
                color: #fff;
            }
        }
    }
}
</style>
