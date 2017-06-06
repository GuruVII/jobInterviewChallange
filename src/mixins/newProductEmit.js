const newProductEmit = {
	methods: {
		newProductEmit : function(id){
  		this.$emit("newProductEmit", id);
  		}	
	}
}

export {newProductEmit};