<template id="app">
  <div>
    
    <v-header></v-header>
	
  	<v-footer></v-footer>
  	
  	
  </div>
</template>

<script>
	import header from "./components/header.vue"
	import footer from "./components/footer.vue"
	export default {
	  name: 'app',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components:{
	  		'v-header':header,
	  		'v-footer':footer
	  }
	}
</script>

<style>

</style>
