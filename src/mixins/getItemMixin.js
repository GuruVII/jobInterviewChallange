const getItemMixin = {
	methods: {
		getItemMixin: function(id){
			var marketcloud = new Marketcloud.Client({
				publicKey : '0a47ca08-5370-496c-8379-db43829a406f'
			})
			marketcloud.products.getById(id)
				.then(response => {			
  					this.product = response.data;
  					marketcloud.brands.getById(this.product.brand_id)
						.then(response => {
							console.log("The brand:",response.data);
							this.product.brand_name = response.data.name
							console.log("The product:",this.product);

						})
						.catch(error => {
							console.log("Something went wrong acquring the brand",error);
						})



  					// this changes the . in prices to , and . into ,
  					this.price = { price : this.product.price.toString().replace(/[,.]/g, function (m) {
											    // m is the match found in the string
											    // If `,` is matched return `.`, if `.` matched return `,`
											    return m === ',' ? '.' : ',';
											}),
  									discounted_price : this.product.price_discount.toString().replace(/[,.]/g, function (m) {
											    // m is the match found in the string
											    // If `,` is matched return `.`, if `.` matched return `,`
											    return m === ',' ? '.' : ',';
											})				
  					}
				})
				.catch(error => {
  					console.log("Something went wrong",error);
				})
		}
	}
}

export {getItemMixin};


