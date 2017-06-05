<template>
	<div class="col l3 xl2 hide-on-med-and-down side-menu-position">
		<div class="search-dropdown">
		<div id="search">
			<input type="text" placeholder="Iskanje..." v-model="searchTerm"><div><i class="material-icons">search</i></div>
		</div>
			<div class="search-dropdown-content" :style="{display : searchDisplay}">
			<ul>
				<li v-for="item in suggestedSearchItems">{{item.name}}</li>
			</ul>
			</div>
		</div>
		<!-- done is only true after a successful API call.-->
		<ul id="sub-menu"  v-if="doneCategory">
			<h6>KATEROGIJE</h6>
			<li v-for="item in categoryIndex">
				<a class="not-selected" :class="{'selected' : selectedCategory(item.id, category[1])}" href="#">{{item.name}}</a>
				<side-menu-subcomponent v-if="item.id == category[1]" :category="category"></side-menu-subcomponent>		
			</li>
		</ul>
	</div>
</template>
<script>
import sideMenuSubcomponent from './sideMenuSubcomponent.vue'
import {getCategoriesMixin} from "./../mixins/getCategoriesMixin";
import {searchMixin} from "./../mixins/searchMixin";


export default {
  name: 'sideMenu',
  components: {
  	sideMenuSubcomponent
  },
  props: ["category", "categoryIndex", "doneCategory"],
  mixins: [getCategoriesMixin, searchMixin],
  data(){
  	return {
  		searchTerm: "",
  		suggestedSearchItems: [],
  		searchDisplay: "none"
  	}
  },
  methods: {
  	selectedCategory: function(categoryId, selectedCategoryID){
  		if (categoryId == selectedCategoryID){
  			return true
  		}
  		else {
  			return false
  		};
  	}
  },
  watch: {
  	searchTerm: function(){
  		if (this.searchTerm.length > 2){
  			this.searchMixin(this.searchTerm) 		
  		}
  		if (this.searchTerm.length < 2){
  			this.suggestedSearchItems = []
  			this.searchDisplay = "none"
  		}
  	}
  },
  mounted(){
  	this.getCategoriesMixin()
  }
}

</script>
<style lang="sass" scoped>
.search-dropdown     
	position: relative;
	display: inline-block;
	.search-dropdown-content 
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		padding: 12px 16px;
		z-index: 999;

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
		color: #2c97de !important;
	h6
		color: #333132;
		font-weight: 500;
		margin-left: 10px;
		padding-left: 5px;
		border-left: 2px solid #00AEEF;

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
				
.side-menu-position
  margin-top: 25px;
  padding-left: 0px !important;

</style>