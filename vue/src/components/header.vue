<template id="header">
	<div>
		
		<mt-header style="height: 0.7rem;" class='aa' fixed>
			  <div slot="left">
			    <mt-button icon="1" ><i class='head0'>10</i><span class="tit0">个</span><span class='tit1'>{{str1}}</span></mt-button>
			  </div>
			 <!-- <mt-button icon="more" slot="right"><span class="time" ></span></mt-button>-->
		</mt-header>
		
		<router-view @to-parent='getdata' style='margin-top: 0.7rem;'></router-view>
	</div>
</template>

<script>
	export default{
		name:"header",
		data(){
			return{
				
				str1:'.影评'
			}
		},
		methods:{
			getdata:function(res){
				this.str1=res
			}
		}
			
	}
</script>

<style>
	.aa{
		background-color: rgba(255,255,255,0.5);
		color: #333;
	}
	.aa i{
		font-style: normal;
		font-size: 0.46rem;
	}
	.aa .tit0{
		padding: 0.02rem;
		background-color: #F00202;
		font-size: 0.24rem;
		color: #fff;
		margin-left: 0.1rem;
		margin-right: 0.1rem;
	}
	.aa .tit1{
		font-size: 0.24rem;
	}
</style>