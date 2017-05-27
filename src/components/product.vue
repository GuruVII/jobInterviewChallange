<template>
		<div>
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
							<div><span class="discount text">CENA: 109,99 €</span><span class="regular text">114,99 €</span></div>
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
				<div class="row" id="product-description">
					<h6>OPIS</h6>
					<div class="product-description-text">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec sem eget mi eleifend sodales. Ut dictum, est vitae fermentum aliquam, libero nisi blandit orci, in varius arcu risus id libero. Phasellus mollis neque quis purus convallis condimentum. Nunc sagittis velit ac hendrerit scelerisque. Curabitur efficitur convallis elit vitae blandit. Nullam convallis facilisis lacus, id varius tortor posuere eget. Quisque in dapibus sem, nec egestas ante. Mauris vel quam id ligula consectetur dapibus a et tellus. Maecenas eget facilisis nisi. Aliquam placerat iaculis dolor vitae luctus.
							<br>
							In volutpat sapien et lectus dignissim, sed porttitor metus placerat. Aenean a ligula dapibus, volutpat risus nec, lobortis magna. Nunc convallis sodales dapibus. Nam feugiat arcu arcu, at dignissim turpis rhoncus ac. Duis semper est nec justo malesuada dictum. Vivamus id elementum tellus. Vestibulum rhoncus ligula justo. Aenean eu orci vitae nisi lobortis eleifend ac eget erat. Donec feugiat urna id ullamcorper tempor. 
						</p>
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