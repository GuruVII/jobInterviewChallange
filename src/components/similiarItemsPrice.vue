<template>
	<div>
	{{convertedPrice}} €
	</div>
</template>
<script>
	export default {
  name: 'similiarItemsPrice',
  props: ["price"],
  data(){
  	return{
  		convertedPrice:""
  	}
  },
  methods: {
  	convertPrice : function(){
  		
		this.convertedPrice =  this.price.toFixed(2).toString().replace(/[,.]/g, function (m) {
				    // m is the match found in the string
				    // If `,` is matched return `.`, if `.` matched return `,`
				    return m === ',' ? '.' : ',';
				})					
  	}
  },
  mounted(){
  	this.convertPrice()
  }
}
</script>
<style lang="sass">
</style>
