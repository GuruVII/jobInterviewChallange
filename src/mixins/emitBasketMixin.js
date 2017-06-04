  	//function that emits the current item on the screen
  	
const emitBasketMixin = {
	methods: {
  	emitBasketMixin: function(){
  		let basket = []
  		basket.push({id: this.product.id, name: this.product.name, discounted_price: this.price.discounted_price, quantity: this.quantity, variant: this.variant, img: this.image})
  		this.$emit("addToBasketEmit", basket);
  	}
  }
}
export {emitBasketMixin};