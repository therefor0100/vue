<template id="footer">
	<div>
		
		<mt-tabbar fixed>
			  <mt-tab-item id="影评" to='/shouye'>
			   <router-link to='/shouye'>
			   		<i class="iconfont" :tit1="str">&#xe649;</i>
			   </router-link>
			  </mt-tab-item>
			  <mt-tab-item id="美文" to='/essay'>
			  	<router-link to='/essay'>
			  		<i class="iconfont">&#xe65b;</i>
			  	</router-link>
			   
			  </mt-tab-item>
			  <mt-tab-item id="美图" to='pic'>
			  	<router-link to='/pic'>
			  		<i class="iconfont">&#xe61e;</i>
			  	</router-link>
			    
			  </mt-tab-item>
			  <mt-tab-item id="登录" to='/login'>
			  	<router-link to='/login'>
			  		<i class="iconfont">&#xe605;</i>
			  	</router-link>
			    
			  </mt-tab-item>
		</mt-tabbar>
		
		
		
	</div>
</template>

<script>
//	import shouye from './components/shouye.vue'
	
	export default{
		name:'footer',
		data(){
			return{
				str:'11'
			}
		},
		methods:{
//			tap:function(){
//				
//				alert("影评")
//			},
//			tap1:function(){
//				alert("美文")
//			},
//			tap2:function(){
//				alert("美图")
//			},
//			tap3:function(){
//				alert("登录")
//			}
//		},
		},
		components:{
			
		}
	}
</script>

<style>
	.iconfont{
		color: #5F5F5F;
		font-size: 0.36rem;
		line-height: 0.5rem;
	}
</style>