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
          <div class="circle-number right nav-menu icon-div center-align"><div class="circle-number-text">1</div></div>
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
            <li><a href="#">Serivs</a></li>
            <li><a href="#">Apple dodatki</a></li>
            <li><a href="#">Apple rezervni deli</a></li>
            <li><a href="#">Ovitki po naročilu</a></li>
          </ul>        
        </div>

    </div>
    </nav>
    <div class="container">
      <!-- item group banner -->
      <banner></banner>
    </div>
    

    <!--<footer class="page-footer orange">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Company Bio</h5>
            <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Settings</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
              <li><a class="white-text" href="#!">Link 2</a></li>
              <li><a class="white-text" href="#!">Link 3</a></li>
              <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li><a class="white-text" href="#!">Link 1</a></li>
              <li><a class="white-text" href="#!">Link 2</a></li>
              <li><a class="white-text" href="#!">Link 3</a></li>
              <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<script>

import banner from './components/banner.vue'

export default {
  name: 'app',
  components: {banner}
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
    .circle-number-text
      font-size: 1.2em;
      margin-top: 2px;
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

    

</style>