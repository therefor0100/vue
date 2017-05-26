<template id="shouye">
	<div class="index">
		<swiper :options="swiperOption" class="aa">
			<swiper-slide class="a" v-for='(item,i) in arr'>
				<img :src="item.img1" alt="" class="img1"/>
				<div class="section">
					<p class="name">{{item.name}}</p>
					<p class="infor"><span class="author">作者：{{item.author}}</span><span>阅读量：{{item.people}}</span></p>
					<p class="cont">
						<span>{{item.cont1}}</span>
						<span>{{item.cont2}}</span>
					</p>
					<p class="jieshao">
						<i>剧情简介</i>
						<img :src="item.img2" alt="" />
						<span>{{item.jeishao}}</span>
					</p>
					<p class="content">
						<i>{{item.tit1}}</i>
						<img :src="item.img3" alt="" />
						<span>{{item.content1}}</span>
						<span>{{item.content2}}</span>
						<span>{{item.content3}}</span>
						<span>{{item.content4}}</span>
						<span>{{item.content5}}</span>
						<span>{{item.content6}}</span>
						<span>{{item.content0}}</span>
						<span>{{item.content7}}</span>
						<span>{{item.content8}}</span>
						<span>{{item.content9}}</span>	
						<span>(完)</span>
						<img :src="item.img4" alt="" />
					</p>
					<p class="tit">
						<i>{{item.author}}</i>
						<span>{{item.id}}</span>
					</p>
				</div>
			</swiper-slide>
			
		</swiper>
		
	</div>
</template>

<script>
	
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	
	export default{
		name:'shouye',
		data(){
			return{
				msg:'.影评',
				arr:[],
				swiperOption:{
					//这里配置要执行的命令，比如：autoplay自动播放等功能
					//滑动方向
					direction:"horizontal"
				}
			}
		},
		mounted:function(){
			var _this=this;
			this.$emit('to-parent',this.msg),
			
			axios.get('src/pinglun.json').then(function(res){
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
	.swiper-wrapper{
		display: -webkit-box;
		-webkit-box-orient: horizontal;
	}
	.index{
		margin-top: 0.7rem;
		margin-bottom: 0.7rem;
	}
	.index img{
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
	}
	.aa{
		flex: 1;
		overflow: hidden;
	}
	.a{
		width: 100%;
		overflow: hidden;
		min-height: 10rem;
		background-color: #fff;
	}
	.cont,.jieshao,.content{
		border-bottom: 1px dotted #ccc;
	}
	.section{
		margin-left: 0.25rem;
		margin-right: 0.25rem;
		font-size: 0.26rem;
		color: #666;
		line-height: 0.4rem;
	}
	.section img{
		width: 100%;
		height: 3.5rem;
	}
	.section i{
		font-size: 0.36rem;
		color: #333;
		font-family: "arial";
		
		margin-bottom: 0.15rem;
		display: block;
	}
	.index .img1{
		width: 100%;
		height: 4rem;
		margin-top: 0rem;
	}
	.name{
		font-size: 0.36rem;
		color: #222;
		font-weight: 600;
		line-height: 0.48rem;
	}
	.infor{
		font-size: 0.24rem;
		color: #999;
		margin-bottom: 0.15rem;
	}
	.infor .author{
		margin-right: 0.1rem;
		padding-right: 0.1rem;
		border-right: 1px solid #999;
	}
	.cont{
		padding: 0.15rem;
		color: #666;
		font-size: 0.24rem;
		margin-bottom: 0.2rem;
		background-color: #ccc;
	}
	.cont span{
		display: block;
	}
	.cont span:first-of-type{
		margin-bottom: 0.15rem;
	}
	.cont span:last-of-type{
		padding-bottom: 0.15rem;
	}
	.jieshao{
		margin-bottom: 0.2rem;
	}
	.jieshao img{
		
		margin-bottom: 0.2rem;
	}
	.jieshao span{
		margin-bottom: 0.2rem;
		display: block;
	}
	.content span{
		display: block;
		
	}
	.tit{
		margin-bottom: 0.2rem;
	}
	.content{
		margin-bottom: 0.2rem;
	}
</style>