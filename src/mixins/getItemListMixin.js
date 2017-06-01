const getItemListMixin = {
	methods: {
		getItemListMixin: function(query){
			var marketcloud = new Marketcloud.Client({
				publicKey : '0a47ca08-5370-496c-8379-db43829a406f'
			})
			marketcloud.products.list(query)
			.then(response => {
				this.itemList = [];
			  this.itemList.push(...response.data);

			})
			.catch(error => {
			  console.log("Something went wrong with getItemList",error);
			})
		}
	}
}

export {getItemListMixin};