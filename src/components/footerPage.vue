<template>
 <!-- footer -->
      <footer id="footer" class="page-footer">
        <div class="container hide-on-med-and-down">
          <div class="row">
            <div class="col l4 s12 footer-first-column">
              <img class="logo-bottom" src="./../assets/logo-black.png">
              <p class="">iPhone, iPad in iPod servis Ljubljana vam nudi hitro in zanesljivo popravilo Aplle naprav. Večinoma popravilo opravimo že v roku 1 ure.</p>
              <p>Nahajamo se v trgovskem centru murgle v Ljubljani (nad pošto)</p>
              <div class="hide-on-small-only social-media-logo-bottom">
                <a href="#"><img src="./../assets/tw-invert.png"></a>
                <a href="#"><img class="margin-left-15px" src="./../assets/fb-invert.png"></a>
                <a href="#"><img class="margin-left-15px" src="./../assets/inst-invert.png"></a>
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
                <img class="logo-bottom" src="./../assets/logo-black.png">
                <p class="">iPhone, iPad in iPod servis Ljubljana vam nudi hitro in zanesljivo popravilo Apple naprav. Večinoma popravilo opravimo že v roku 1 ure.</p>
                <p>Nahajamo se v trgovskem centru murgle v Ljubljani (nad pošto)</p>
                <div class="social-media-logo-bottom">
                  <a href="#"><img src="./../assets/tw-invert.png"></a>
                  <a href="#"><img class="margin-left-15px" src="./../assets/fb-invert.png"></a>
                  <a href="#"><img class="margin-left-15px" src="./../assets/inst-invert.png"></a>
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
</template>
<script>
  export default {
  name: 'footerPage'
}
</script>
<style lang="sass">
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

.margin-left-15px
  margin-left: 15px;

</style>

