<template>
	<ul id="sideMenuSubcomponent">
		<li><a class="selected"href="#">Ovitki</a></li>
		<li><a class="not-selected"href="#">Zaščita zaslona</a></li>
		<li><a class="not-selected"href="#">Etuiji</a></li>
		<li><a class="not-selected"href="#">Kabli<span class="hide-word">, polnilci</span>, ostalo</a></li>
	</ul>
	</div>
</template>
<script>
	export default {
  name: 'sideMenuSubcomponent', 
}
</script>
<style lang="sass" scoped>
#sideMenuSubcomponent
	margin-left: 10px
	font-size: 0.8em;
	white-space: inherit;
	li
		display: list-item;
		color: #999999;
		white-space: nowrap;
		&.selected
			color: #2c97de;
			white-space: nowrap;
		.hide-word
			@media(max-width: 1300px)
				display: none;
			@media(max-width: 1200px)
				display: inline;

</style>