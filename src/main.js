import $ from "jquery";
import Materialize from "materialize-css"
import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

$(document ).ready(function(){

$(".dropdown-button").dropdown();
        
})

new Vue({
  el: '#app',
  render: h => h(App)
})
