<template>
    <div id="component">
        <div class="container">
            <div class="head">
                <h1>Companies</h1>
                <span @click="showFilter = !showFilter">Categories</span>
            </div>
            <ul class="filter" v-show="showFilter">
                <li @click="filterClick">business-focused focused</li>
                <li @click="filterClick">business</li>
                <li @click="filterClick">bu focused</li>
                <li @click="filterClick">business-focused</li>
                <li @click="filterClick">focused</li>
                <li @click="filterClick">business-focused</li>
                <li @click="filterClick">business-focused focused</li>
                <li @click="filterClick">business</li>
                <li @click="filterClick">bu focused</li>
                <li @click="filterClick">business-focused</li>
                <li @click="filterClick">focused</li>
                <li @click="filterClick">business-focused</li>
                <li @click="filterClick">business-focused</li>
                <li @click="filterClick">business-focused</li>
                <li>focused</li>
                <li>business-focused</li>
                <li>business-focused</li>
                <li>focused</li>
                <li>business-focused</li>
                <li>focused</li>
                <li>business-focused</li>
                <li>business-focused</li>
                <li>focused</li>
                <li>business-focused</li>
                <li>business-focused</li>
                <li>focused</li>
                <li>business-focused</li>
                <li>focused</li>
                <li>business-focused</li>
            </ul>
            <div class="boxes">
                <div class="box" v-for="company in companies" :key="company.id">
                    <img src="../../imgs/block.png" alt="img"/>
                    <span class="title">{{slice(company.name,25)}}</span>
                    <h2>{{slice(company.slogan,25)}}</h2>
                    <div class="details">
                        <ul>
                            <li>
                                <label class="company__label">Country</label>
                                <span class="country">{{company.country}}</span>
                            </li>
                            <li>
                                <label class="company__rating">Rating</label>
                                <span class="rating">{{company.rating}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"component",
    components: {
        'icon': { 
            template: '<svg><use :xlink:href="use"/></svg>', props: ['use'] 
        }
    },
    data() {
        return {
            companies:[],
            showFilter:false,
        }
    },
    methods: {
        slice(value,num){
            if(value.length > 25){
                return value.slice(0,num) + '...';
            }else{
                return value;
            }
        },
        filterClick(e){
            let target = e.target.textContent;
        }
    },
    beforeMount() {
        fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/mock-data.json')
            .then(response => response.json())
        .then(companies => {
            this.companies = companies;
        });
    },
}
</script>
<style lang="scss">

.head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 30px;
        color:#888;
        font-weight: bold;
        margin:25px 0;
    }
    span{
        color:#666;
        font-size:20px;
        font-weight:200;
        cursor: pointer;
        transition: 0.25s ease-in all;
        &:hover{
            color:#D8B330;
        }
    }
}
.filter{
    display:flex;
    align-items: center;
    padding:0;
    margin:0;
    list-style-type:none;
    flex-wrap: wrap;
    gap:10px;
    margin:10px 0 30px;
    li{
        padding:10px;
        border-radius: 5px;
        border:1px solid #eee;
        cursor: pointer;
        transition: 0.25s ease-in all;
        font-size:14px;
        font-weight:300;
        color:#777;
        @media(max-width:640px){
            font-size: 12px;
            padding:8px;
        }
        &:hover{
            border:1px solid #D8B330;
        }
    }
}
.boxes{
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    gap:30px;
    padding-bottom: 30px;
    
    .box{
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        border-radius: 14px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap:30px;
        padding-top:25px;
        transition: 0.25s ease-in all;
        overflow: hidden;
        background-color: #fff;
        @media(min-width:991px){
            &:hover{
            transform: scale(1.1);
        }
        }
        img{
            width:120px;
            object-fit: cover;
            width:50px;
        }
        span{
            &.title{
                font-size: 16px;
                font-weight: 200;
                color:#777;
                padding:0 15px;
                display:block;
                text-align: center;
            }
        }
        h2{
            color:#555;
            font-size: 17px;
            font-weight: 500;
            padding:0 15px;
            text-align: center;
        }
        .details{
            width:100%;
            border-top:1px solid #eee;
            padding:15px;
            background-color: #fbfbfb;
            ul{
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-between;
                li{
                    display: flex;
                    flex-direction: column;
                    gap:10px;
                    &:last-child{
                        align-items: center;
                    }
                    label{
                        font-size:14px;
                        color:#888;
                        font-weight:200;
                    }
                    span{
                        font-size:13px;
                        color:#888;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
