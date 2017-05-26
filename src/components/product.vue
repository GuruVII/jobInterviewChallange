<template>
	<div class="row">
		<div class="col s12 xl9 offset-xl1">
			<div class="card horizontal product-card z-depth-0">
			<!-- product name only visible on devices with width < 600px -->
				<div class="name-top hide-on-med-and-up">
								<h5>Slimfist usnjen ovitek</h5>
								<h6>Ime Znamke</h6>
				</div>
				<div class="card-image">
					<img src="./../assets/product.png">
				</div> 
				<div class="card-stacked">
					<div class="card-content">
					<!-- Product name -->
						<div class="product-information name hide-on-small-only">
							<h5>Slimfist usnjen ovitek</h5>
							<h6>Ime Znamke</h6>
						</div>
						<!-- color and quantity -->
						<div class="product-information color-quantity">
							<div class="color valign-wrapper">
								<span class="color-text">BARVA</span>
								<div class="circle-margin"></div>
								<div class=" circle blue-circle"></div>
								<div class="circle-margin"></div>
								<div class="circle red-circle"></div>
							</div>
							<div>
								<div class="quantity-selector">
								<span class="quantity-text valign-wrapper">KOLIČINA</span>
								<a class="btn z-depth-0 right">
									<i class="material-icons tiny">add</i>
								</a><span class="quantity center-align right">2</span><a class="btn z-depth-0">
									<i class="material-icons tiny">remove</i>
								</a>
								</div>
							</div>
						</div>
						<!-- price -->
						<div class="product-information price">
							<div><span class="discount text">CENA: 109,99 €</span><span class="normal text">114,99 €</span></div>
							<div><a class="btn button z-depth-0"><span class="hide-text">DODAJ </span>V KOŠARO</a></div>
						</div>
						<!-- colour selection -->
						<div class="product-information color-select">
								<a href="#"><img src="./../assets/tinyPhoneBlue.png"></a>
								<a href="#"><img src="./../assets/tinyPhoneBlue.png"></a>
								<a href="#"><img src="./../assets/tinyPhoneBlue.png"></a>
								<a href="#"><img src="./../assets/tinyPhoneBlue.png"></a>
								<a href="#"><img src="./../assets/tinyPhoneBlue.png"></a>
						</div>
					</div>
					</div>
				</div>
		   </div>
		</div>
	</div>
</template>
<script>
	export default {
  name: 'product'
}
</script>
<style lang="sass">
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
			max-width: 40%;
		padding: 0px;
		margin: 0px 24px;
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
				&.red-circle
					background-color: #ff9c83;
				&.blue-circle
					background-color: #2ce0fb;
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
				.normal
					margin-left: 10px;
					text-decoration: line-through;
				.button
					background-color: #01afef; 
					padding: 0px 30px;
			&.color-select
				img
					max-height: 60px;
					border: 1px solid #DDDDDD;

					





</style>