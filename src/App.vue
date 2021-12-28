<template>
  <Header v-show="authenticated" :logout="logout" />
  <router-view @authenticated="setAuthenticated"/>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components:{
    Header
  },
  data() {
    return {
      authenticated: false,
    }
  },
  mounted() {
    let authenticated = localStorage.getItem("authenticated");
    this.authenticated = authenticated;
    if(!this.authenticated) {
      this.$router.replace({ name: "Login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      localStorage.removeItem("authenticated");
      this.authenticated = false;
    },
  }
}
</script>
<style lang="scss">
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
  background-color: #EEF2FF;
}
.container{
  width:82%;
  margin: auto;
  @media (max-width:991px) {
    width:100%;
    padding-left:15px;
    padding-right:15px;
  }
}
</style>
