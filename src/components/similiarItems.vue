<template>
<div class="row">
	<div class="col s12 m12 l9 xl8 offset-xl1">
		<div id="similiar-items">
			<h5 class="similiar-items-title">PODOBNI IZDELKI</h5>
			<div class="row" v-if="doneItemList">
				<div class="col s6 m4 l4 xl4" v-for="(item, index) in itemList" v-if="item.id != category[0]">
					<div class="card z-depth-0">
						<div class="card-image"  @click="newProductEmit(item.id)" :style="{'background-image': 'url(' + item.images[0] + ')'}"></div>
						<div class="card-action">
							<p class="name"  @click="newProductEmit(item.id)">{{item.name}}</p>
							<p class="product-type">{{categoryIndex[item.category_id]["name"]}}</p>
							<div class="card-action-bottom">
								<!-- name, price text, price, qauntity, variant, image location-->
								<span class="tooltip">
									<i class="material-icons" @click="emitBasketMixin(item.id, item.name, item.price_discount.toFixed(2).toString().replace(/[,.]/g, function (m) {
				    return m === ',' ? '.' : ',';})	, item.price_discount, 1, 0, item.images[0])">add_shopping_cart</i>
									<span class="tooltiptext">Dodaj v voziček</span>
								</span>
								<a href="#" class="modal-picture" @click="toggleModalWindows(index)">
									<i class="material-icons">search</i>
								</a>
								<div class="tooltip" v-if="item.stock_status == 'in_stock'">
									<i class="material-icons check-circle">check_circle</i>
									<span class="tooltiptext">Na zalogi</span>
								</div>
								<div class="tooltip" v-if="item.stock_status == null">
									<i class="material-icons check-circle">check_circle</i>
									<span class="tooltiptext">Na zalogi</span>
								</div>
								<div class="tooltip"  v-if="item.stock_status == 'out_of_stock'">
									<i class="material-icons cancel">cancel</i>
									<span class="tooltiptext">Ni na zalogi</span>
								</div>
								<!-- because prices are using . instead , we've made a subcomponent that changes how the prices look -->
								<span class="price">
									<similiar-items-price :price="item.price_discount"></similiar-items-price>&nbsp;€
								</span>
							</div>
						</div>
						<!-- becuase we don't want overflow in card-action hidden, but we need to hide due to border radius, this div replaces the bottom padding of card-action -->
						<div class="overflow-compensator"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- The Modal -->
	<div class="modal-img" :style="{display : modalView}" @click="toggleModalWindows(0)">
		<!-- Modal content -->
		<div class="modal-img-content">
			<img :src="modalViewImg">
			<span class="close">&times;</span>
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
  		doneItemList: false,
  		modalView: "none",
  		modalViewImg : ""
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
  	},
  	toggleModalWindows: function(index){
  		let imgObject = this.itemList[index]
  		this.modalViewImg = imgObject.images[0];
  		if (this.modalView == "none"){
  			this.modalView = "block"
  		}
  		else {
  			this.modalView ="none"
  		}
  	}
  }
}
</script>
<style lang="sass" scoped>
.modal-img
	display: none; 
	position: fixed; 
	z-index: 1; 
	left: 0;
	top: 0;
	width: 100%; 
	height: 100%; 
	overflow: auto; 
	background-color: rgb(0,0,0); 
	background-color: rgba(0,0,0,0.4); 
	.modal-img-content
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		margin: 15% auto; 
		padding: 20px;
		img
			background-color: white;
			max-width: 90%;
			max-height: 90%;
		.close
			line-height: 10px;
			margin-left: 5px;
			color: #e4e4e4;
			font-size: 28px;
			font-weight: bold;

			&:hover, &:focus
				color: black;
				text-decoration: none;
				cursor: pointer;
.make-visible
	display: block !important


#similiar-items
	padding-left: 12.5px;
	.similiar-items-title
		padding-left: 11.5px;
		font-weight: bold;
		color: #575757;
	.card			
		border: 2px solid #DDDDDD;
		border-radius: 1em;
		@media(max-width: 600px)
			border-radius: 0px;
		.card-image
			overflow: hidden;
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			min-height: 150px;
			@media(min-width: 992px)
				min-height: 250px
		.overflow-compensator
			height: 14px
			overflow: hidden;	
	.product-type
		color: #333132;
		font-size: 1em;
	.card-action
		border-top: 3px solid #DDDDDD;
		padding: 14px 14px 0px 14px;
		@media(max-width: 400px)
			padding: 5px;
		p
			margin-top: 0px;
		.name
			color: #333132;
			font-weight: bold;
			font-size: 1.1em
			cursor: pointer;
		.check-circle
			align-self: center;
			color: #7ed321;
		.cancel
			align-self: center;
			color: #cc0000;				
		.card-action-bottom
			margin-top: -10px
			display: flex
			flex-flow: row wrap;
			justify-content: space-between;
			align-items: center;
			border-top: none;
			.modal-picture
				margin-top: 10px
				margin-right: 7px
			.price
				margin-top: 10px;
				display: flex;
				flex-flow: row nowrap;
				color: #2c97de;
				font-weight: bold;
				@media(max-width: 400px)
					font-size: 0.8em;
			a
				color: #666666;
				margin: 0;
				display: flex;
			.tooltip
				margin-right: 7px
				margin-top: 10px
				display: flex;
				position: relative;
				justify-content: center;
				cursor: pointer;
				-webkit-user-select: none;  
				-moz-user-select: none;
				-ms-user-select: none;
				.tooltiptext
					position: absolute;
					visibility: hidden;
					width: 120px;
					color: #575757;
					border: 1px solid #cccccc;
					background-color: rgba(204, 204, 204, 0.3);
					border-radius: 6px;
					text-align: center;
					padding: 5px 0;
					z-index: 999;
					top: 100%;
					left: 50%;
					margin-left: -60px;
				&:hover
					.tooltiptext
						visibility: visible;

</style>