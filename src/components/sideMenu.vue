<template>
	<div>
		<div id="search">
			<input type="text" placeholder="Iskanje..."><div><i class="material-icons">search</i></div>
		</div>
		<ul id="sub-menu">
			<h6>KATEROGIJE</h6>
			<li>
				<a class="not-selected"href="#">iPhone 6/6s</a>				
			</li>
			<li>
				<a class="selected"href="#">iPhone 7</a>
				<side-menu-subcomponent></side-menu-subcomponent>
			</li>
			<li>
				<a class="not-selected" href="#">iPhone 7 Plus</a></li>
			<li>
			<a class="not-selected" href="#">iPhone 5/5s</a></li>
			<li>
			<a class="not-selected"href="#">iPhone 4/4s</a></li>
		</ul>
	</div>
</template>
<script>
import sideMenuSubcomponent from './sideMenuSubcomponent.vue'

	export default {
  name: 'sideMenu',
  components: {
  	sideMenuSubcomponent
  }
}
</script>
<style lang="sass" scoped>
#search
	box-shadow: 0 0 2px #b7b7b7;
	display: flex;
	flex-flow: nowrap row;
	justify-content: flex-between;
	align-items: center;
	input
		color: #999999;
		width: 72%;
		border: none;
		margin: 0px 0px 0px 10px
		&:focus
			box-shadow: none;
			border-bottom: none;
	.material-icons
		color: #999999;
		margin-top: 5px;
#sub-menu
	box-shadow: 0 0 2px #b7b7b7;
	font-size: 0.9em;
	padding: 5px 0px 10px 10px;
	li
		display: list-item;
		margin-top: 5px;
	.not-selected
		color: #999999;
	.selected
		color: #2c97de;
	h6
		color: #333132;
		font-weight: 500;
		margin-left: 10px;
		padding-left: 5px;
		border-left: 2px solid #00AEEF;


</style>