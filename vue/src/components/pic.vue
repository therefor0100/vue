<template id="pic">
	
		
	<div class="index">
		<swiper :options="swiperOption" class="aa">
			<swiper-slide class="a" v-for='(item,i) in arr'>
					<img :src="item.img1" alt="" />
				<div class="section">
					<p class="sort">
						<i>{{item.tit}}</i>
						<span>摄影师&copy;{{item.author}}</span>
					</p>
					<p class="sortjieshao">

						<span>{{item.cont}}</span>
						<span>{{item.from}}</span>
					</p>
	
				</div>
			</swiper-slide>
			
		</swiper>
		
	</div>
</template>

<script>
	
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	
	export default{
		name:'pic',
		data(){
			return{
				msg:'.美图',
				arr:[],
				swiperOption:{
					direction:"horizontal"
				}
			}
		},
		mounted:function(){
			var _this=this;
			this.$emit('to-parent',this.msg)
			
			
			axios.get('src/pic.json').then(function(res){
					console.log(res.data)
					_this.arr=res.data
				
			})
		},
		components:{
			swiper,
			swiperSlide
		}
	}
</script>

<style>
	.sortjieshao{
		margin-top: 0.2rem;
		padding: 0.1rem;
		background-color: #ccc;
	}
	.sortjieshao span{
		display: block;
	}
	.sortjieshao span:last-of-type{
		margin-top: 0.2rem;
		text-align: right;
	}
</style>