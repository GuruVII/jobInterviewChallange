<template>
  <div id="app">
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
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Logo</a>
      <ul class="hide-on-med-and-down right">
        <li><a href="#">Domov</a></li>
        <li><a href="#">Servis</a></li>
        <li><a href="#">Apple dodatki</a></li>
        <li><a href="#">Apple rezervni deli</a></li>
        <li><a href="#">Ovitki po naročilu</a></li>
      </ul>

    <ul id="nav-mobile" class="dropdown-content">
      <li><a href="#">Domov</a></li>
      <li><a href="#">Serivs</a></li>
      <li><a href="#">Apple dodatki</a></li>
      <li><a href="#">Apple rezervni deli</a></li>
      <li><a href="#">Ovitki po naročilu</a></li>
    </ul>
        <a href="#" data-activates="nav-mobile"  data-constrainWidth="false" data-belowOrigin="true" class="button-collapse dropdown-button"><i class="material-icons">menu</i></a>
      </div>
    </nav>
    <footer class="page-footer orange">
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
    </footer>
  </div>
</template>

<script>


export default {
  name: 'app'
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

.dropdown-content
    li
      margin: 0px;
      & > a
        color:  #9B9B9B;

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
    height: 25px;
    margin-top: 13px;

</style>