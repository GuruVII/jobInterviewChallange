const getItemMixin = {
	methods: {
		getItemMixin: function(){
			var marketcloud = new Marketcloud.Client({
				publicKey : '0a47ca08-5370-496c-8379-db43829a406f'
			})
			marketcloud.products.getById(203582)
				.then(function(response){
  					console.log("The product:",response.data);
				})
				.catch(function(error){
  					console.log("Something went wrong 2",error);
				})
		}
	}
}

export {getItemMixin};


