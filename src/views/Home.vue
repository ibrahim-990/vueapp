<template>
  <div class="home">
    <Hero/>
    <div class="container">
      <div class="head">
        <h1>Companies</h1>
      </div>
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
      <div class="link-sec">
        <router-link to="/Component" class="link-to-page">Component</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Component from "../components/Component.vue";
import Hero from "../components/Hero.vue";
export default {
  name: 'Home',
  components:{
    Component,
    Hero
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
            this.companies = companies.slice(0,4);
        });
    },
}
</script>

<style lang="scss">
.link-sec{
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px 0;
}
.link-to-page{
  padding:10px 20px;
  text-decoration: none;
  color:#D8B330;
  font-size:18px;
  font-weight:500;
  border:1px solid #D8B330;
  transition: 0.25s ease-in all;
  &:hover{
    background: #D8B330;
    color:#fff;
    transform: translateY(-4px);
  }
}
</style>
