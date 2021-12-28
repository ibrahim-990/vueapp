import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as firebase from "firebase/app";
import initializeApp from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB4z8reBVK1u2G3CshtVB9er2zjLRsiNbE",
    authDomain: "vue-auth-99.firebaseapp.com",
    projectId: "vue-auth-99",
    storageBucket: "vue-auth-99.appspot.com",
    messagingSenderId: "133393454703",
    appId: "1:133393454703:web:e24748a7167717dda39f9a"
};
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
