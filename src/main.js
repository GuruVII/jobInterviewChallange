$(document ).ready(function(){  
      ///this prevents the cartdropdown from closing when you remove an item
  $('.item-clear').click(function(event){
    event.stopPropagation();    
  });
  $('.top-search-input').click(function(event){
    event.stopPropagation(); 
  });
  
	$('.shopping-cart').dropdown({
    belowOrigin: true, // Displays dropdown below the button
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on click
    alignment: 'right', // Aligns dropdown to left or right edge (works with constrain_width)
    gutter: 0 // Spacing from edge   
    });

  $('.top-search-dropdown').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'right', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})


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

