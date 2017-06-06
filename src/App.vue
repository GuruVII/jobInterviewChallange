<template>
  <div id="app">
  <!-- page top nav bar-->
  <top-bar :item="basket" @newProductEmit="newProductEmit"></top-bar>
    <div class="container">
      <!-- item group banner -->
      <banner :banner-title="bannerTitle"></banner>
      <div class="row">
      <!-- product information -->  
          <product @bannerTitleEmit="getBannerTitle" @addToBasketEmit="addToBasket" @categoryEmit="getCategory" :id="id" class="product-body"></product>
      <!-- side menu -->       
          <side-menu :categoryIndex="categoryIndex" :category="category" :doneCategory="doneCategory" @newProductEmit="newProductEmit"></side-menu>
      </div>
      <!-- similiar items -->
      <similiar-items :category="category" @newProductEmit="newProductEmit" @addToBasketEmit="addToBasket" :brandIndex = "brandIndex" :categoryIndex= "categoryIndex" ></similiar-items>  
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
      doneCategory: false,
      basket: []
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
    //this is pushed as a prop to the product component
    newProductEmit: function(id){
      this.id = id;
    },
    addToBasket: function(item){
      this.basket = []
      this.basket.push(...item)
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

.container
  @media (max-width: 992px) 
    width: 100%;
    margin: 0 auto;
  .row
    margin-left: 0;
    margin-right: 0;
</style>