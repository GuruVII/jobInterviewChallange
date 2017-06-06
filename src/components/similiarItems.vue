<template>
<div class="row">
    <div class="col s12 m12 l9 xl8 offset-xl1">
		<div id="similiar-items">
			<div class="row" v-if="doneItemList">
		        <div class="col s6 m4 l4 xl4" v-for="(item, index) in itemList" v-if="item.id != category[0]">
		          <div class="card z-depth-0">
		            <div class="card-image"  @click="newProductEmit(item.id)" :style="{'background-image': 'url(' + item.images[0] + ')'}">
		            </div>
		            <div class="card-action">
		            	<p class="name"  @click="newProductEmit(item.id)">{{item.name}}</p>
		              	<p class="product-type">{{categoryIndex[item.category_id]["name"]}}</p>
		            	<div class="card-action-bottom">
		            	<!-- name, price text, price, qauntity, variant, image location-->
			              <i class="material-icons" @click="emitBasketMixin(item.id, item.name, item.price_discount.toFixed(2).toString().replace(/[,.]/g, function (m) {
				    return m === ',' ? '.' : ',';})	, item.price_discount, 1, 0, item.images[0])">add_shopping_cart</i>
	  					<!-- Modal Trigger -->
			              <a href="#"><i class="material-icons">search</i></a>
			              <i class="material-icons check-circle" v-if="item.stock_status == 'in_stock'">check_circle</i>
			              <i class="material-icons check-circle" v-if="item.stock_status == null">check_circle</i>
			              <i class="material-icons cancel" v-if="item.stock_status == 'out_of_stock'">cancel</i>

			              <!-- because prices are using . instead , we've made a subcomponent that changes how the prices look -->
			              <span class="price"><similiar-items-price :price="item.price_discount"></similiar-items-price>&nbsp;€</span>
		              	</div>
		            </div>
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
import {emitBasketMixin} from "./../mixins/emitBasketMixin";
import {newProductEmit} from "./../mixins/newProductEmit";

export default {
  name: 'similiarItems',
  mixins: [getItemListMixin, emitBasketMixin, newProductEmit],
  components: {
  	similiarItemsPrice
  },
  //category props is contains the current products categoryID and product_type
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
		  		this.getItemListMixin({
		  			category_id : this.category[1],
	  				product_type: this.category[2]
	  			})
  			},
  		deep: true
  	}
  	
  },
  methods: {
  	priceEmit: function(price){
  		this.priceTextArray.push(price);
  	}
  }
}
</script>
<style lang="sass" scoped>
	#similiar-items
		padding-left: 24px;
		.card			
			border: 2px solid #DDDDDD;
			border-radius: 1em;
			overflow: hidden;
			@media(max-width: 600px)
				border-radius: 0px;
			.card-image
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
				min-height: 150px;
				@media(min-width: 992px)
					min-height: 250px
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
					display: flex;
					flex-flow: row wrap;
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