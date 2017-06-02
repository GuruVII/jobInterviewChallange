<template>
  <div id="app">
  <!-- page top nav bar-->
  <top-bar></top-bar>
    <div class="container">
      <!-- item group banner -->
      <banner :banner-title="bannerTitle"></banner>
      <div class="row">
      <!-- product information -->
        <div class="col s12 m12 l9 xl8 offset-xl1">
          <product @bannerTitleEmit="getBannerTitle" @categoryEmit="getCategory" :id="id"></product>
        </div>
      <!-- side menu -->
        <div class="col l3 xl2 hide-on-med-and-down side-menu-position">
          <side-menu :categoryIndex="categoryIndex" :category="category" :doneCategory="doneCategory"></side-menu>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m12 l9 xl8 offset-xl1">
        <!-- similiar items -->
          <similiar-items :category="category" @newProductEmit="newProductEmit" :brandIndex = "brandIndex" :categoryIndex= "categoryIndex" ></similiar-items>
        </div>
      </div>     
    </div>
    <!-- page footer -->
   <footer-page></footer-page>
  </div>
</template>

<script>

import banner from './components/banner.vue'
import product from './components/product.vue'
import sideMenu from './components/sideMenu.vue'
import similiarItems from './components/similiarItems.vue'
import topBar from './components/topBar.vue'
import footerPage from './components/footerPage.vue'
import {getBrandsMixin} from "./mixins/getBrandsMixin"
import {getCategoriesMixin} from "./mixins/getCategoriesMixin"

export default {
  name: 'app',
  components: {
    banner,
    product,
    sideMenu,
    similiarItems,
    topBar,
    footerPage
  },
  mixins: [getBrandsMixin, getCategoriesMixin],
  data(){
    return{
      bannerTitle: "",
      category: [],
      id: "",
      brandIndex:{},
      categoryIndex: {},
      basket: {},
      doneCategory: false
    }

  },
  methods: {
    getBannerTitle: function(title){
      this.bannerTitle = title;
    },
    getCategory: function(category){
      this.category = [];
      this.category.push(...category)
    },
    newProductEmit : function(id){
      this.id = id;
    }
  },
  mounted(){
    this.getBrandsMixin();
    this.getCategoriesMixin();
  }
}
</script>
<style src="materialize-css/dist/css/materialize.min.css"></style>
<style lang="sass">

h1, h2 
  font-weight: normal;


ul 
  list-style-type: none;
  padding: 0;


li 
  display: inline-block;
  margin: 0 10px;
.margin-left-15px
  margin-left: 15px;

/* dropdown menu on mobile */
.dropdown-content
    li
      margin: 0px;
      & > a
        color:  #9B9B9B;

ul
  li
    & > a
      color:  #413f40;

/*other*/
.side-menu-position
  margin-top: 25px;
  padding-left: 0px !important;

</style>