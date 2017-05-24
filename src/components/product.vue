<template>
	<div class="row">
		<div class="col s12 m9 offset-m1">
			<div class="card horizontal z-depth-0">
				<div class="card-image">
					<img src="./../assets/product.png">
				</div> 
				<div class="card-stacked">
					<div class="card-content">
						<div class="product-information">
							<h5>Slimfist usnjen ovitek</h5>
							<h6>Ime Znamke</h6>
						</div>
						<div class="product-information">
							<p>BARVA KOLIČIMA</p>
						</div>
						<div class="product-information">
							<p>CENA</p>
						</div>
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
		.product-information
			border-bottom: 1px solid #DDDDDD;
			padding: 25px 0px;



</style>