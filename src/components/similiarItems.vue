<template>
	<div id="similiar-items">
		<div class="row" v-if="doneItemList">
	        <div class="col s6 m4 l4 xl4" v-for="item in itemList" v-if="item.id != category[0]" @click="newProductCalled(item.id)">
	          <div class="card z-depth-0">
	            <div class="card-image">
	              <img :src="item.images[0]">
	            </div>
	            <div class="card-content">
	              
	            </div>
	            <div class="card-action">
	            	<p class="name">{{item.name}}</p>
	              	<p class="product-type">{{categoryIndex[item.category_id]["name"]}}</p>
	            	<div class="card-action-bottom">
		              <i class="material-icons">add_shopping_cart</i>
  					<!-- Modal Trigger -->
		              <a href="#"><i class="material-icons">search</i></a>
		              <i class="material-icons check-circle" v-if="item.stock_status == 'in_stock'">check_circle</i>
		              <i class="material-icons check-circle" v-if="item.stock_status == null">check_circle</i>
		              <i class="material-icons cancel" v-if="item.stock_status == 'out_of_stock'">cancel</i>

		              <!-- because prices are using . instead , we've made a subcomponent that changes how the prices look -->
		              <span class="price"><similiar-items-price :price="item.price_discount"></similiar-items-price></span>
	              	</div>
	            </div>
	          </div>
	        </div>
	 		
      	</div>
	</div>
</template>
<script>
import {getItemListMixin} from "./../mixins/getItemListMixin";
import similiarItemsPrice from './similiarItemsPrice.vue';

export default {
  name: 'similiarItems',
  mixins: [getItemListMixin],
  components: {
  	similiarItemsPrice
  },
  props: ["category", "categoryIndex", "brandIndex"],
   data(){
  	return {
  		itemList: [],
  		doneItemList: false
  	}
  },
  watch: { 
  		category: { 
	  		handler: function(){
	  			//this makes a call for similiar items (items that have the same category and product type)
		  		this.getItemListMixin({category_id : this.category[1],
	  									product_type: this.category[2]})
  			},
  		deep: true
  	}
  	
  },
  methods: {
  	newProductCalled : function(id){
  		this.$emit("newProductEmit", id);
  	}
  }
}
</script>
<style lang="sass" scoped>
	#similiar-items
		margin-left: 24px;
		.card			
			border: 2px solid #DDDDDD;
			border-radius: 1em;
			overflow: hidden;
			@media(max-width: 600px)
				border-radius: 0px;
			img
				height: 250px;
		.product-type
			color: #333132;
			font-size: 1em;
		.card-action
			border-top: 3px solid #DDDDDD;
			padding: 14px;
			@media(max-width: 400px)
				padding: 5px;
			p
				margin-top: 0px;
			.name
				color: #333132;
				font-weight: bold;
				font-size: 1.1em				
			.card-action-bottom
				display: flex
				justify-content: space-between;
				align-items: center;
				border-top: none;
				.price
					color: #2c97de;
					font-weight: bold
					@media(max-width: 400px)
						font-size: 0.8em;
				a
					color: #666666;
					margin: 0;
					display: flex;
			.check-circle
				align-self: center;
				color: #7ed321;
			.cancel
				align-self: center;
				color: #cc0000;




</style>