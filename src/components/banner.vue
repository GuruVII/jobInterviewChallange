<template>
	<div class="row">
		<div class="col s12" id="banner">
			<h4 class="center-align banner-text">Lorem Ipsum > Lorem ipsum 2</h4>
		</div>
	</div>
</template>
<script>
	export default {
  name: 'banner'
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
</style>