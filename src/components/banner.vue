<template>
	<div class="row">
		<div class="col s12" id="banner">
			<h4 class="center-align banner-text">{{bannerTitle}}</h4>
		</div>
	</div>
</template>
<script>
	export default {
  name: 'banner',
  props: ["bannerTitle"]
}
</script>
<style lang="sass">
	#banner
		background-image: url("./../assets/background-banner.png");
		background-size: cover;
		color: #666666
		.banner-text
			margin-top: 50px
			margin-bottom: 50px;
			@media(max-width: 600px)
				font-size: 1.3em
</style>