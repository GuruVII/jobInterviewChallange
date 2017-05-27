<template>
	<div id="similiar-items">
		<div class="row">
	        <div class="col s6 m4 l4 xl4">
	          <div class="card z-depth-0">
	            <div class="card-image">
	              <img src="./../assets/products.png">
	            </div>
	            <div class="card-content">
	              
	            </div>
	            <div class="card-action">
	            	<p class="name">Slimfit usnjen ovitek</p>
	              	<p class="product-type">Apple - iPhone 6/6s</p>
	            	<div class="card-action-bottom">
		              <i class="material-icons">add_shopping_cart</i>
  					<!-- Modal Trigger -->
		              <a href="#"><i class="material-icons">search</i></a>
		              <i class="material-icons check-circle">check_circle</i>
		              <span class="price">999.99 €</span>
	              	</div>
	            </div>
	          </div>
	        </div>
	 		
      	</div>
	</div>
</template>
<script>

export default {
  name: 'similiarItems',
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
		.name
			color: #333132;
			font-weight: bold;
			font-size: 1.1em
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
				color: #7ed321




</style>