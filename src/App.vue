<template>
  <div id="app">
  <!-- the top black bar -->
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <p class="left"><span class="top-bar-border">040 666 296</span><a href="mailto:info@idoktor.si">info@idoktor.si</a></p>
          <a href="#"><img class="right hide-on-small-only" src="./assets/tw.png"></a>
          <a href="#"><img class="right hide-on-small-only" src="./assets/fb.png"></a>
          <a href="#"><img class="right hide-on-small-only" src="./assets/inst.png"></a>
          <p class="right address">Center Murgle, <span class="hide-on-med-and-down">Cesta v mestni log 55/e40,</span> Ljubljana</p>  
        </div>
      </div>
    </div>
    <nav class="white z-depth-0" role="navigation">
      <div class="nav-wrapper container">
        <div class="row">
          <a href="#" data-activates="nav-mobile"  data-constrainWidth="false" data-belowOrigin="true" class="button-collapse dropdown-button left"><i class="material-icons">menu</i></a>
          <a id="logo-container" href="#" class="brand-logo left"><img src="./assets/logo.png"></a>
          <div class="circle-number right nav-menu icon-div center-align">1</div>
          <div class="right nav-menu icon-div">
            <i class="material-icons nav-icons nav-icon-right">add_shopping_cart</i>
          </div>
          <div class="right nav-menu icon-div">
            <i class="material-icons nav-icons nav-icon-left">search</i> 
          </div>
          <!-- navbar links -->
          <ul class="hide-on-med-and-down right nav-menu nav-menu-items">
            <li><a href="#" class="nav-menu-item">Domov</a></li>
            <li><a href="#" class="nav-menu-item">Servis</a></li>
            <li><a href="#" class="nav-menu-item">Apple dodatki</a></li>
            <li><a href="#" class="nav-menu-item">Apple rezervni deli</a></li>
            <li><a href="#" class="nav-menu-item">Ovitki po naročilu</a></li>
          </ul>
          <!-- mobile dropdown menu content -->
          <ul id="nav-mobile" class="dropdown-content">
            <li><a href="#">Domov</a></li>
            <li><a href="#">Servis</a></li>
            <li><a href="#">Apple dodatki</a></li>
            <li><a href="#">Apple rezervni deli</a></li>
            <li><a href="#">Ovitki po naročilu</a></li>
          </ul>        
        </div>

    </div>
    </nav>
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
          <side-menu></side-menu>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m12 l9 xl8 offset-xl1">
        <!-- similiar items -->
          <similiar-items :category="category" @newProductEmit="newProductEmit"></similiar-items>
        </div>
      </div>
    </div>
    <!-- footer -->
      <footer id="footer" class="page-footer">
        <div class="container hide-on-med-and-down">
          <div class="row">
            <div class="col l4 s12 footer-first-column">
              <img class="logo-bottom" src="./assets/logo-black.png">
              <p class="">iPhone, iPad in iPod servis Ljubljana vam nudi hitro in zanesljivo popravilo Aplle naprav. Večinoma popravilo opravimo že v roku 1 ure.</p>
              <p>Nahajamo se v trgovskem centru murgle v Ljubljani (nad pošto)</p>
              <div class="hide-on-small-only social-media-logo-bottom">
                <a href="#"><img src="./assets/tw-invert.png"></a>
                <a href="#"><img class="margin-left-15px" src="./assets/fb-invert.png"></a>
                <a href="#"><img class="margin-left-15px" src="./assets/inst-invert.png"></a>
              </div>
            </div>
            <div class="col l2 s12 footer-second-column">
              <h6 class="">POVEZAVE</h6>
              <ul>
                <li class=""><a class="" href="#!">Domov</a></li>
                <li class=""><a class="" href="#!">Servis</a></li>
                <li class=""><a class="" href="#!">Apple Dodatki</a></li>
                <li class=""><a class="" href="#!">Apple rezervni deli</a></li>
                <li class=""><a class="" href="#!">Ovitek po naročilu</a></li>
                <li class=""><a class="" href="#!">Blog</a></li>
                <li class=""><a class="" href="#!">Kontakt</a></li>
              </ul>
              <ul>
                <li class=""><a class="" href="#!">Moj Račun</a></li>
                <li class=""><a class="" href="#!">Zgodovina Transkacij</a></li>
              </ul>
            </div>
            <div class="col l2 s12 footer-third-column">
              <h6 class="">OSTALO</h6>
              <ul>
                <li><a class="" href="#!">O nas</a></li>
                <li><a class="" href="#!">Dostava</a></li>
                <li><a class="" href="#!">Pogoji poslovanja</a></li>
                <li><a class="" href="#!">Piškotki</a></li>
                <li><a class="" href="#!">Vračila</a></li>
              </ul>
            </div>
            <div class="col l4 s12">
              <h6 class="">PRIJAVA NA E-NOVICE</h6>
              <form>
                <input id="last_name" type="text" class="validate newsletter-form-input" placeholder="vaše ime ..."/>
                <input id="last_name" type="text" class="validate newsletter-form-input" placeholder="vaš email ..."/>
                <div>
                  <input type="checkbox" class="filled-in" id="splosni-pogoji"/>
                  <label for="splosni-pogoji">Strinjam se s <a href="#">splošnimi pogoji</a></label>
                </div>
                <button type="submit" name="action" class="btn button">Prijavi se</button>
              </form>
            </div>
          </div>
        </div>
        <div class="container hide-on-large-only footer-collapsible">
          <div class="row">
            <div class="col l4 s6">
                <img class="logo-bottom" src="./assets/logo-black.png">
                <p class="">iPhone, iPad in iPod servis Ljubljana vam nudi hitro in zanesljivo popravilo Apple naprav. Večinoma popravilo opravimo že v roku 1 ure.</p>
                <p>Nahajamo se v trgovskem centru murgle v Ljubljani (nad pošto)</p>
                <div class="social-media-logo-bottom">
                  <a href="#"><img src="./assets/tw-invert.png"></a>
                  <a href="#"><img class="margin-left-15px" src="./assets/fb-invert.png"></a>
                  <a href="#"><img class="margin-left-15px" src="./assets/inst-invert.png"></a>
                </div>
            </div>
          </div>
          <ul class="collapsible" data-collapsible="accordion">
            <li>
              <div class="collapsible-header">POVEZAVE</div>
              <div class="collapsible-body">
                  <ul>
                    <li class=""><a class="" href="#!">Domov</a></li>
                    <li class=""><a class="" href="#!">Servis</a></li>
                    <li class=""><a class="" href="#!">Apple Dodatki</a></li>
                    <li class=""><a class="" href="#!">Apple rezervni deli</a></li>
                    <li class=""><a class="" href="#!">Ovitek po naročilu</a></li>
                    <li class=""><a class="" href="#!">Blog</a></li>
                    <li class=""><a class="" href="#!">Kontakt</a></li>
                  </ul>
                  <ul class="my-account-collapsible">
                    <li class=""><a class="" href="#!">Moj Račun</a></li>
                    <li class=""><a class="" href="#!">Zgodovina Transkacij</a></li>
                  </ul>
              </div>
            </li>
            <li>
              <div class="collapsible-header">OSTALO</div>
              <div class="collapsible-body">
                <ul>
                  <li><a class="" href="#!">O nas</a></li>
                  <li><a class="" href="#!">Dostava</a></li>
                  <li><a class="" href="#!">Pogoji poslovanja</a></li>
                  <li><a class="" href="#!">Piškotki</a></li>
                  <li><a class="" href="#!">Vračila</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div class="collapsible-header">PRIJAVA NA E-NOVICE</div>
              <div class="collapsible-body">
                <form>
                  <input id="last_name-collapsible" type="text" class="validate newsletter-form-input" placeholder="vaše ime ..."/>
                  <input id="last_name-collapsible" type="text" class="validate newsletter-form-input" placeholder="vaš email ..."/>
                  <div>
                    <input type="checkbox" class="filled-in" id="splosni-pogoji-collapsible"/>
                    <label for="splosni-pogoji-collapsible">Strinjam se s <a href="#">splošnimi pogoji</a></label>
                  </div>
                  <button type="submit" name="action" class="btn button">Prijavi se</button>
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer-copyright">
            <div class="container">
              <div>
                iDoktor  &nbsp;|&nbsp;&nbsp; iPhone, iPad, iPod servis Center Murgle Ljubljana
              </div>
              <div>Made as part of a job interview</div>
          </div>
        </div>  
      </footer>
  </div>
</template>

<script>

import banner from './components/banner.vue'
import product from './components/product.vue'
import sideMenu from './components/sideMenu.vue'
import similiarItems from './components/similiarItems.vue'

export default {
  name: 'app',
  components: {
    banner,
    product,
    sideMenu,
    similiarItems
  },
  data(){
    return{
      bannerTitle: "",
      category: [],
      id: ""
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

/* black bar on top of the page */
.top-bar
  background-color: #222222;
  color: #EEEEEE;
  min-height: 30px;
  .row
    margin: 0px;
  .top-bar-border
    border-right: 1px solid #EEEEEE;
    padding-right: 10px;
  a 
    color: #EEEEEE;
    padding-left: 10px;
  .address
    padding-right: 20px;
    @media (max-width: 440px)
       display: none;
  img
    padding-left: 10px;
    height: 20px;
    margin-top: 15px;

/* navigation menu */
.nav-wrapper
  img
    width: 50%;
    padding-top: 25px;
    padding-bottom: 25px;
    @media (max-width: 992px)
      width: auto;
      height: 64px;
      padding-top: 0px;
      padding-bottom: 0px;
    @media (max-width: 600px)
      width: auto;
      height: 56px;
    @media (max-width: 420px)
      height: 30px;
      margin-top: 13px;
  .nav-menu
    margin-top: 40px;
    margin-bottom: 25px;
    @media (max-width: 650px)
      margin-top: 0px;
      margin-bottom: 0px;
  .circle-number
    background-color: #00aeef;
    font-weight: bold;
    height: 29px;
    width: 29px;
    color: white;
    border-radius: 50%;
    margin-left: 10px;
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px)
      margin-right: 20px;
  .icon-div
    margin-top: 35px;
    @media (max-width: 992px)
      margin-top: 28px;
    @media (max-width: 600px)
      margin-top: 20px;
    .nav-icons
      color: #666666;
      height: inherit;
      line-height: normal;
    .nav-icon-left
      border-right: #00aeef solid 2px;
      padding-right: 15px;
    .nav-icon-right
      padding-left: 15px;
  .brand-logo
    left: auto !important

.nav-wrapper
.container
  @media (max-width: 992px) 
    width: 98%;
  

nav
  line-height: normal;
  a
    color: #413f40;
  ul
    a
    .nav-menu-item
      @media (max-width: 1265px)
        font-size: 0.8em;
        padding-left: 10px;
        padding-right: 10px
      @media (max-width: 1060px)
        padding-left: 5px;
        padding-right: 5px
/* footer */
.page-footer
  font-size: 0.9em;
  background-color: #f6f6f6;
  color: #666666;
  .logo-bottom
    max-width: 40%;
  .social-media-logo-bottom
    img
      height: 24px;
  ul   
    li
      display: list-item;
      list-style-type: disc;    
  form
    width: 90%;
    display: flex
    flex-flow: wrap column;
    justify-content: flex-start;
    justify-content: flex-end;
    label
      color: #666666
      a
        color: #666666;
    .newsletter-form-input
      background-color: white;
      padding-left: 10px;
      border: none;
      &:focus
        box-shadow: none;
        border-bottom: none;
      &::-webkit-input-placeholder
        color: #666666;
        margin-left: 10px;
      &::-moz-placeholder
        color: #666666;
        margin-left: 10px;
      &:-moz-placeholder
        color: #666666;
        margin-left: 10px;
    .filled-in[type="checkbox"]:checked + label::after
      background-color: #01afef;
    .button
      margin-top: 10px;
      background-color: #01afef; 
      padding: 0px 30px;
      align-self: flex-end;

  .footer-collapsible
    li
      list-style-type: none;
      li
        list-style-type: disc;
      .my-account-collapsible
        margin-top: 10px;
    .logo-bottom
        width: 50%;


  .footer-copyright
    background-color: #222222;
    .container
      display: flex;
      justify-content: space-between;


  

/*other*/
.side-menu-position
  margin-top: 25px;
  padding-left: 0px !important;

</style>