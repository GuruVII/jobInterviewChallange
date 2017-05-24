<template>
	<div class="row">
		<div class="col s12 m9 offset-m1">
			<div class="card horizontal z-depth-0">
				<div class="card-image">
					<img src="./../assets/product.png">
				</div> 
				<div class="card-stacked">
					<div class="card-content">
					<!-- Product name -->
						<div class="product-information">
							<h5>Slimfist usnjen ovitek</h5>
							<h6>Ime Znamke</h6>
						</div>
						<!-- color and quantity -->
						<div class="product-information">
							<div class="row valign-wrapper">
								<div class="col l12 xl4 valign-wrapper">
									<span class="color-text">BARVA</span>
									<div class="circle-margin"></div>
									<div class=" circle blue-circle"></div>
									<div class="circle-margin"></div>
									<div class="circle red-circle"></div>
								</div>
								<div class="col l12 xl8">
									<div class="right">
									<span class="quantity-text">KOLIČINA</span>
									<a class="btn z-depth-0 right">
										<i class="material-icons tiny">add</i>
									</a><span class="quantity center-align right">2</span><a class="btn z-depth-0">
										<i class="material-icons tiny">remove</i>
									</a>
									</div>
								</div>
							</div>
						</div>
						<!-- price -->
						<div class="product-information">
							<p>CENA</p>
						</div>
						<!-- colour selection -->
						<div class="product-information">
							<p>IZBIRA BARVE</p>
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
	.card-content
		padding: 0px;
		margin: 0px 24px;
		h5
			margin-top: 0px;
			margin-bottom: 0px;	
		.row
			&.valign-wrapper
				margin-top: 20px;
		.product-information
			border-bottom: 1px solid #DDDDDD;
			padding: 25px 0px;
			h5
				color: #575757;
			h6
				color: #a0a0a0;
			.color-text
				color: #616161;
				margin-right: 10px;
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
				color: #616161

			.btn
				padding: 0px 8.25px;
				background-color: #cccccc;
				border-radius: 0px;
				.material-icons
					color: #575757;
					line-height: none;
	&.horizontal
		.card-image
			max-width: 40%;



</style>