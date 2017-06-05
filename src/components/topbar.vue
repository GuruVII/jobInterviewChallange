
    <template>
  <!-- the top black bar -->
  <div>
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <p class="left"><span class="top-bar-border">040 666 296</span><a href="mailto:info@idoktor.si">info@idoktor.si</a></p>
          <a href="#"><img class="right hide-on-small-only" src="./../assets/tw.png"></a>
          <a href="#"><img class="right hide-on-small-only" src="./../assets/fb.png"></a>
          <a href="#"><img class="right hide-on-small-only" src="./../assets/inst.png"></a>
          <p class="right address"><span class="hide-on-med-and-down">Center Murgle,</span> Cesta v mestni log 55/e40, Ljubljana</p>  
        </div>
      </div>
    </div>
    <nav class="white z-depth-0" role="navigation">
      <div class="nav-wrapper container">
        <div class="row">
          <a href="#" data-activates="nav-mobile"  data-constrainWidth="false" data-belowOrigin="true" class="button-collapse dropdown-button left"><i class="material-icons">menu</i></a>
          <a id="logo-container" href="#" class="brand-logo left"><img src="./../assets/logo.png"></a>
          <div class="circle-number right nav-menu icon-div center-align">{{totalQuantityComputed}}</div>
          <div class="right nav-menu icon-div">
            <a data-activates='shopping-cart' class="shopping-cart"href="#"> <i class="material-icons nav-icons nav-icon-right">add_shopping_cart</i></a>
          </div>
          <ul id='shopping-cart' class='dropdown-content'>
            <li class="cart-item" v-for="(item, index) in basket"><div class="basket-name">{{item.name}}</div> <div class="basket-quantity">x {{item.quantity}}</div> <div class="basket-price">{{(item.quantity*item.discounted_price).toFixed(2).toString().replace(/[,.]/g, function (m) {
            return m === ',' ? '.' : ',';})}} €</div> <i class="material-icons item-clear" @click="removeItem(index)">clear</i></li>
            <li class="total-price">TOTAL:
            {{totalPrice}} €</li>
            <li class="blagajna-li"><a href="#" class="btn">Na Blagajno</a></li>
          </ul>
          <div class="right nav-menu icon-div">
            <i class="material-icons nav-icons nav-icon-left">search</i> 
          </div>
          <!-- navbar links -->
          <ul class="hide-on-med-and-down right nav-menu nav-menu-items">
            <li><a href="#" class="nav-menu-item" @click= "intoLocalStorage">Domov</a></li>
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
</div>
</template>
<script>
	export default {
  name: 'topBar',
  props: ["item"],
  data(){
    return { 
      basket: [],
      duplicates: false,
      totalQuantity: 0
    }
  },
  watch: {
    item: function(){

      var item = this.item[0] 
        this.basket.forEach((currentValue) => {
        //this checks, if the item is already present in the basket
          if ((currentValue.id == item.id) && (currentValue.variant == item.variant)){
            currentValue.quantity += item.quantity
            this.duplicates = true;
            this.totalQuantity += item.quantity
            return  
          }
        })
        // if duplicates is false, it means that the item in the item array isn't already in the basket
        if (this.duplicates == false){
          this.basket.push(...this.item);
          this.totalQuantity += item.quantity;
        }
        this.duplicates = false;
        this.intoLocalStorage()     
     }
  },
  computed: {
    totalQuantityComputed: function(){
      if (this.totalQuantity > 20){
        return "20+"
      }
      else {
        return this.totalQuantity
      }
    },
    quantityPriceComputed: function(){
      return item.discounted_price*item.quantity
    },
    totalPrice: function(){
      let price = 0;
      this.basket.forEach((currentValue) => {
        price +=currentValue.quantity*currentValue.discounted_price
      })
      return price.toFixed(2).toString().replace(/[,.]/g, function (m) {return m === ',' ? '.' : ',';})
    }
  },
  methods :{
    removeItem: function (index) {
      this.totalQuantity -= this.basket[index].quantity
      this.basket.splice(this.basket.indexOf(index), 1);
      this.intoLocalStorage();
    },
    //this function saves the basket in local storage
    intoLocalStorage: function(){
      let basket = JSON.stringify(this.basket);
      localStorage.setItem("basket", basket)
      localStorage.setItem("timeOfCreation", Date.now())
    },
    checkLocalStorage: function(){
      console.log("checking local storage")
      console.log(Date.now())
      if (localStorage.getItem("basket") != null){
        if ((localStorage.getItem("timeOfCreation")+3600000) > Date.now()){
          let basket = JSON.parse(localStorage.getItem("basket")); 
          console.log("basket is:",basket)
          this.basket = basket;
          this.basket.forEach((currentValue)=>{
          this.totalQuantity += currentValue.quantity;
          })
        }
        else {
          localStorage.getItem("basket", "")
        }
      }
    }
  },
  mounted(){
    this.checkLocalStorage();
  }
}
</script>
<style lang="sass">
/* black bar on top of the page */
.top-bar
  background-color: #222222;
  color: #EEEEEE;
  min-height: 30px;
  .row
    margin: 0px 5px 0px 5px;
  .top-bar-border
    border-right: 1px solid #EEEEEE;
    padding-right: 10px;
  a 
    color: #EEEEEE;
    padding-left: 10px;
  .address  
    @media(min-width: 600)
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
    font-size: 1.05em;
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

/* dropdown cart */
#shopping-cart
  width: 270px !important;
  li
    &:hover 
      background-color: white !important;
  .cart-item
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 0.9em !important;
    color: #666666
    min-height: 10px;
    margin-top: 10px;
    border-bottom: 1px solid #fff
    i
      font-size: 1.4em !important;
      color: #cc0000;
      height: 19px;
      line-height: 19px;
    .basket-name
      width: 130px
    .basket-quantity
      width: 35px;
    .basket-price
      width: 60px;
  .total-price
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 10px;
    padding-right: 10px;
    font-weight: bold;
  .blagajna-li
    min-height: 0px;
    .btn
      background-color: #01afef;
      color: #fff
      line-height: 10px;
      margin: -2px 0px 0px 0px
</style>