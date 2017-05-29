import Materialize from "materialize-css"
import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

$(document ).ready(function(){
	$('.modal').modal();
    $('.collapsible').collapsible();      
})

new Vue({
  el: '#app',
  render: h => h(App)
})
