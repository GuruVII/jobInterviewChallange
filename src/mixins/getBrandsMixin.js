const getBrandsMixin = {
	methods: {
		getBrandsMixin: function(){
			var marketcloud = new Marketcloud.Client({
				publicKey : '0a47ca08-5370-496c-8379-db43829a406f'
			})
			marketcloud.brands.list({})
			.then(response => {
				console.log(response.data)
				response.data.forEach((item) => {
					var id = item.id
					this.brandIndex[id] = item;
				})
			})
			.catch(error => {
			  console.log("Something went wrong with getBrandsMixin",error);
			})
		}
	}
}

export {getBrandsMixin};