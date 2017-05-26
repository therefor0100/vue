import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueRouter from "vue-router"
import axios from 'axios'


Vue.use(Mint);
Vue.use(VueRouter)

Vue.prototype.$ajax = axios

import shouye from "./components/shouye.vue"
import essay from "./components/essay.vue"
import pic from "./components/pic.vue"
import login from "./components/login.vue"


var route=[
//	{path:'/',component:content},
	{path:'/shouye',component:shouye
			
	},
	{path:"/essay",component:essay},
	{path:'/pic',component:pic},
	{path:'/login',component:login},
	{path:'*',redirect:'/shouye'}

]

var router=new VueRouter({
		routes:route
})

new Vue({
  el: '#app',
  router:router,
  
  render: h => h(App)
  
  
})
