import Materialize from "materialize-css"
import Vue from 'vue';
import marketCloud from "marketcloud-js";
import App from './App.vue';

/*marketcloud.products.list({})
.then(function(response){
  console.log("My products:",response.data);
})
.catch(function(error){
  console.log("Something went wrong",error);
})



marketcloud.categories.list({},function(err,products){
	console.log(products);
});

marketcloud.categories.getById(203574, function(err,response){
        console.log(response);      
});*/

$(document ).ready(function(){
	$('.modal').modal();
    $('.collapsible').collapsible();      
})

new Vue({
  el: '#app',
  render: h => h(App)
})
