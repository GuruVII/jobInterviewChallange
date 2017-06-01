<template>
	<ul id="sideMenuSubcomponent">
		<li><a :class="{selected : selectedType('ovitek', category[2])}" href="#">Ovitki</a></li>
		<li><a :class="{selected : selectedType('zascita', category[2])}" href="#">Zaščita zaslona</a></li>
		<li><a :class="{selected : selectedType('etui', category[2])}" href="#">Etuiji</a></li>
		<li><a :class="{selected : selectedType('kabel', category[2])}" href="#">Kabli<span class="hide-word">, polnilci</span>, ostalo</a></li>
	</ul>
	</div>
</template>
<script>
	export default {
  name: 'sideMenuSubcomponent',
  props: ["category"],
  methods: {
  	selectedType: function(itemType, currentItemType){
		if (itemType == currentItemType){
  			return true
  		}
  		else {
  			return false
  		};
  	}
  } 
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
		.selected
			color: #2c97de;
			white-space: nowrap;
		.hide-word
			@media(max-width: 1300px)
				display: none;
			@media(max-width: 1200px)
				display: inline;

</style>