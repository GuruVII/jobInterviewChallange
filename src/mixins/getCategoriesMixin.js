const getCategoriesMixin = {
	methods: {
		getCategoriesMixin: function(){
			var marketcloud = new Marketcloud.Client({
				publicKey : '0a47ca08-5370-496c-8379-db43829a406f'
			})
			marketcloud.categories.list({})
			.then(response => {
				console.log(response.data)
				response.data.forEach((item) => {
					var id = item.id
					this.categoryIndex[id] = item;
				})
			})
			.catch(error => {
			  console.log("Something went wrong with getCategoriesMixin",error);
			})
		}
	}
}

export {getCategoriesMixin};