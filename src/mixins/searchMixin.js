const searchMixin = {
	methods: {
  	searchMixin: function(search){
  		var marketcloud = new Marketcloud.Client({
				publicKey : '0a47ca08-5370-496c-8379-db43829a406f'
			})
  		marketcloud.products.list({
		  q : search
		})
		.then((response)  => {
			// with each call the array is cleared so taht duplicates
			// 
			this.suggestedSearchItems = [];
		 	this.suggestedSearchItems = [...response.data];
		 	if (response.data.length == 0){
		 		this.searchDisplay = "none"
		 	}
		 	else {
		 		this.searchDisplay = "block"
		 	}
		})
		.catch( (error) => {
		  console.log("An error has occurred with searchMixin", error);
		})
  	}
  }
}
export {searchMixin};