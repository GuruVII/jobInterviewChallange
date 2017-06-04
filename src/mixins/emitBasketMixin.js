  	//function that emits the current item on the screen
  	
const emitBasketMixin = {
	methods: {
  	emitBasketMixin: function(id, name, priceT, price, quantity, variant, img){
  		let basket = []
  		basket.push({id: id, name: name, discounted_price_text: priceT, discounted_price: price, quantity: quantity, variant: variant, img: img})
  		this.$emit("addToBasketEmit", basket);
  	}
  }
}
export {emitBasketMixin};