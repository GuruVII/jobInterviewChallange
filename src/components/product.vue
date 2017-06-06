<template>
		<div class="col s12 m12 l9 xl8 offset-xl1 product-body">
			<div class="card horizontal product-card z-depth-0">
			<!-- product name only visible on devices with width < 600px -->
				<div class="name-top hide-on-med-and-up">
								<h5>{{product.name}}</h5>
								<h6>{{this.brand}}</h6>
				</div>
				<div class="card-image">
					<img :src="image">
				</div>
				<div class="card-stacked">
					<div class="card-content">
					<!-- Product name -->
						<div class="product-information name hide-on-small-only">
							<h5>{{product.name}}</h5>
							<h6>{{this.brand}}</h6>
						</div>
						<!-- color and quantity -->
						<div class="product-information color-quantity">
							<div class="color valign-wrapper" v-if="product.has_variants">
								<span class="color-text">BARVA</span>
								<div v-for="color in product.variants">
									<div class="circle-margin"></div>
									<div class="circle" v-bind:style="{'background-color': color.description}"></div>
								</div>		
							</div>
							<div>
								<div class="quantity-selector">
									<span class="quantity-text valign-wrapper">KOLIČINA</span>
									<a class="btn z-depth-0 right">
										<i class="material-icons tiny" @click="quantity +=1">add</i>
									</a>
									<span class="quantity center-align right">{{quantity}}</span>
									<a class="btn z-depth-0">
										<i class="material-icons tiny" @click="quantity -=1">remove</i>
									</a>
								</div>
							</div>
						</div>
						<!-- price -->
						<div class="product-information price">
							<div><span class="discount text">CENA: {{price.discounted_price}} €</span><span class="regular text">{{price.price}} €</span></div>
							<div><a class="btn button z-depth-0" @click="addToBasket"><span class="hide-text">DODAJ </span>V KOŠARO</a></div>
						</div>
						<!-- variant selection -->
						<div class="product-information color-select" v-if="product.has_variants">
								<a v-for="item in product.variants" @click="changeVariants(item.id)"><img :src="item.images[0]"></a>
						</div>
					</div>
					</div>
				</div>
				<div class="row" id="product-description">
					<h6>OPIS</h6>
					<div class="product-description-text">
						<p v-html="product.description">
						</p>
					</div>
				</div>
			</div>
		   
</template>
<script>
	import {getItemMixin} from "./../mixins/getItemMixin";
	import {emitBasketMixin} from "./../mixins/emitBasketMixin";
	export default {
  name: 'product',
  mixins: [getItemMixin, emitBasketMixin],
  props: ["id"],
  data(){
  	return{
  		variant: 0,
  		product: {},
  		price: {},
  		quantity: 0,
  		brand: "",
  		image: ""
  	}
  },
  watch: {
  	quantity: function() {
  		if (this.quantity < 0 ){
  			this.quantity = 0
  		}
  	},
  	//when product changes, we have to emit a few pieces of information
  	product: { 
  		handler: function(){
	  		this.$emit("bannerTitleEmit", this.product.name),
	  		//this emit is used to determine similiar items.
	  		this.$emit("categoryEmit", [ this.product.id, this.product.category_id, this.product.product_type]);
  		},
  		deep: true
  	},
  	id: function(){
  		this.getItemMixin(this.id)
  		this.quantity = 0;
  		this.variant = 0;
  		}
  },
  methods: {
  	changeVariants : function(variant){
  		this.variant = variant - 1
  		this.image = this.product.variants[this.variant].images[0];
  		this.quantity = 0;
  	},
  	addToBasket: function(){
  		if (this.quantity == 0){
  			return
  		}
  		this.emitBasketMixin(this.product.id, this.product.name, this.price.discounted_price, this.product.price_discount, this.quantity, this.variant, this.image)
  		this.quantity = 0;
  	}
  },
  mounted() {
  	this.getItemMixin(203582)
  	this.quantity = 0
  }
}
</script>
<style lang="sass">

.product-body
  @media(min-width: 993px)
  	margin-top: 50px;
.card
	.name-top
		align-self: flex-start;
		h5
			color: #575757;
		h6
			color: #a0a0a0;
	.card-content
		padding-top: 0px;
	&.product-card
		@media(max-width: 600px)
			display: flex;
			flex-flow: column wrap
			justify-content: center;
			align-items: center;
			
		.card-image
			width: 338px;
		padding: 0px;
		margin: 0px 0px 0px 24px;
		h5
			margin-top: 0px;
			margin-bottom: 0px;	
		.row
			&.valign-wrapper
				margin-top: 20px;
				@media(max-width: 1201px)
					display: inline;
					
		.product-information
			border-bottom: 1px solid #DDDDDD;
			padding: 25px 0px;
			a
				cursor: pointer;
			&.color-quantity, .quantity-selector, 
					display: flex;
					flex-flow: row wrap;
			&.color-quantity
			justify-content: space-between;
			.quantity-selector
				justify-content: flex-end;
			&.name, &.name-top
				padding-top: 0px
			.color-text
				color: #616161;
				margin-right: 10px;
			h5
				color: #575757;
			h6
				color: #a0a0a0;
			.circle-margin
				margin-left: 1px;
			.circle
				height: 19px
				width: 19px
				display: inline-block;
			.quantity
				border: 1px solid #cccccc;
				width: 36px;
				height: 36px;
				padding-top: 4px;
				display: block;
				margin-bottom: 2px;
				line-height: 25px;
				@media(max-width: 1200px)
					padding-top: 5px;
			.quantity-text
				margin-right: 10px;
				color: #616161;
				@media (max-width: 428px)
					display: none;
			.btn
				padding: 0px 8.25px;
				background-color: #cccccc;
				border-radius: 0px;
				.material-icons
					color: #575757;
					line-height: none;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
			&.price
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				.text
					color: #616161;
					font-size: 1.3em;
					line-height: 35px;
				.discount
					font-weight: bold;
					word-break: keep-all;
					white-space: nowrap;
				.regular
					margin-left: 10px;
					text-decoration: line-through;
					word-break: keep-all ;
					white-space: nowrap;
				.button
					background-color: #01afef; 
					padding: 0px 30px;
			&.color-select
				img
					max-height: 60px;
					border: 1px solid #DDDDDD;
#product-description
	margin-left: 24px;
	h6
		color: #3a3839;
		padding-bottom: 2px;
		border-bottom: 2px solid #01afef;
		display: inline-block;
	p 
		color: #999999;
		size: 1em;
	.product-description-text
		padding-right: 25px;
		

					





</style>