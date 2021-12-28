<template>
    <div id="posts">
        <div class="container">
            <div class="post" v-for="post in posts" :key="post.id">
                <span id="id">{{post.id}}</span>
                <h1 class="title">{{post.title}}</h1>
                <p class="description">{{post.body}}</p>
                <div class="action">
                    <i class="las la-heart"></i>
                    <i class="las la-comment-alt"></i>
                    <i class="las la-external-link-alt"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"posts",
    data() {
        return {
            posts:[],
        }
    },
    beforeMount() {
        fetch('https://gorest.co.in/public/v1/posts')
            .then(response => response.json())
        .then(response => {
            this.posts = response.data;
        });
    },
}
</script>
<style lang="scss" scoped>
#posts{
    margin-top:40px;
    .container{
        display:grid;
        grid-template-columns: repeat(auto-fill,minmax(270px,1fr));
        gap:30px;
        padding-bottom: 30px;
        .post{
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
            border-radius: 14px;
            display: flex;
            flex-direction: column;
            gap:15px;
            transition: 0.25s ease-in all;
            position: relative;
            height:auto;
            @media(min-width:991px){
                &:hover{
                transform: scale(1.03);
            }
            }
            h1{
                font-size: 18px;
                color:#888;
                font-weight: 500;
                padding:35px 18px 0 18px;
                @media(max-width:991px){
                    font-size: 15px;
                }
            }
            p{
                font-size: 14px;
                color:#888;
                font-weight: 300;
                line-height: 24px;
                display:block;
                padding:10px 18px 0;
                @media(max-width:991px){
                    font-size: 12px;
                }
            }
            span{
                &#id{
                    font-size: 12px;
                    color:#fff;
                    border-radius: 5px;
                    padding:4px;
                    font-weight: 300;
                    position: absolute;
                    background-color: #D8B330;
                    top: -10px;
                    left:20px;
                }
            }
            .action{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width:100%;
                padding:16px 18px;
                padding:15px;
                background-color: #fbfbfb;
                margin-top:auto;
                i{
                    font-size:26px;
                    cursor: pointer;
                    color:#D8B330;
                }
            }
        }
    }
}
</style>
