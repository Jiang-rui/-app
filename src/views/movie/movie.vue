<template>
	<div class="movie" >
	  	<div class="movie-box">
	  		<div class="unit-content">
	  			<div class="header">
	  				<h1 class="title">正在热映</h1>
	  				<router-link :to="{path: '/movie/in_theaters'}">更多</router-link>
	  			</div>
	  			<div class="content">
	  				<ul class="content-wrapper" @touchstart="slide($event)">
	  					<li v-for = "subject in inTheaters_show" :key="subject.id" class="item">
	  						<router-link :to="{name:'subject',params:{id: subject.id}}">
	  							<div class="image-box" :style="'backgroundImage:url('+subject.images.medium+')'"></div>
	  							<div class="title-box"><p class="title">{{subject.title}}</p></div>
	  							<div class="rating-box" v-if = 'subject.rating.average > 0'>
	  								<star :size="24" :score="subject.rating.average"></star>
	  								<span class="rating">{{subject.rating.average}}</span>
	  							</div>
	  							<div class="rating-box" v-else>
									<span class="no-rating">暂无评分</span>
								</div>
	  						</router-link>
	  					</li>
	  				</ul>
	  			</div>
	  		</div>
	  		<div class="unit-content">
	  			<div class="header">
	  				<h1 class="title">即将上映</h1>
	  				<router-link :to="{path: '/movie/coming_soon'}">更多</router-link>
	  			</div>
	  			<div class="content">
	  				<ul class="content-wrapper" @touchstart="slide($event)">
	  					<li v-for = "subject in comingSoon_show" :key="subject.id" class="item">
	  						<router-link :to="{name:'subject',params:{id: subject.id}}">
	  							<div class="image-box" :style="'backgroundImage:url('+subject.images.medium+')'"></div>
	  							<div class="title-box"><p class="title">{{subject.title}}</p></div>
	  							<div class="rating-box" v-if = 'subject.rating.average > 0'>
	  								<star :size="24" :score="subject.rating.average"></star>
	  								<span class="rating">{{subject.rating.average}}</span>
	  							</div>
	  							<div class="rating-box" v-else>
									<span class="no-rating">暂无评分</span>
								</div>
	  						</router-link>
	  					</li>
	  				</ul>
	  			</div>
	  		</div>
	  			<div class="unit-content">
	  			<div class="header">
	  				<h1 class="title">历史排行</h1>
	  				<router-link :to="{path: '/movie/top250'}">更多</router-link>
	  			</div>
	  			<div class="content">
	  				<ul class="content-wrapper" @touchstart="slide($event)">
	  					<li v-for = "subject in top250_show" :key="subject.id" class="item">
	  						<router-link :to="{name:'subject',params:{id: subject.id}}">
	  							<div class="image-box" :style="'backgroundImage:url('+subject.images.medium+')'"></div>
	  							<div class="title-box"><p class="title">{{subject.title}}</p></div>
	  							<div class="rating-box" v-if = 'subject.rating.average > 0'>
	  								<star :size="24" :score="subject.rating.average"></star>
	  								<span class="rating">{{subject.rating.average}}</span>
	  							</div>
	  							<div class="rating-box" v-else>
									<span class="no-rating">暂无评分</span>
								</div>
	  						</router-link>
	  					</li>
	  				</ul>
	  			</div>
	  		</div>
	  			<div class="unit-content">
		  			<div class="header">
		  				<h1 class="title">北美票房排行榜</h1>
		  				<router-link :to="{path: '/movie/us_box'}">更多</router-link>
		  			</div>
		  			<div class="content">
		  				<ul class="content-wrapper" @touchstart="slide($event)">
		  					<li v-for = "item in usBox_show" :key="item.subject.id" class="item">
		  						<router-link :to="{name:'subject',params:{id: item.subject.id}}">
		  							<div class="image-box" :style="'backgroundImage:url('+item.subject.images.medium+')'"></div>
		  							<div class="title-box"><p class="title">{{item.subject.title}}</p></div>
		  							<div class="rating-box" v-if = 'item.subject.rating.average > 0'>
		  								<star :size="24" :score="item.subject.rating.average"></star>
		  								<span class="rating">{{item.subject.rating.average}}</span>
		  							</div>
		  							<div class="rating-box" v-else>
										<span class="no-rating">暂无评分</span>
									</div>
		  						</router-link>
		  					</li>
		  				</ul>
		  			</div>
		  		</div>
	  	</div>
	</div>
</template>
<script type="text/ecmascript2015">
	import axios from 'axios'
	import star from '../../components/star/star.vue'
	const HOST = '/api/'

	let left = 0;
	export default{
		data(){
			return {
				inTheaters_show: [],
				comingSoon_show: [],
				top250_show: [],
				usBox_show: [],
				city:'深圳',
			}
		},
		created(){
			axios.get(HOST+'movie/in_theaters',{ params: {
					start: 0,
					count: 20,
					city:this.city
				} })
				.then((response) =>{
					this.inTheaters_show = response.data.subjects.slice(0,8);
					})
				.catch((err) => {
					console.log(err)
				});
			axios.get(HOST + 'movie/coming_soon',{params: {
					start: 0,
					count: 20,
					city:this.city
				}})
				.then( (response) =>{
					this.comingSoon_show = response.data.subjects.slice(0,8);
				})
				.catch((err) => {
					console.log(err)
				});
			axios.get(HOST + 'movie/top250',{params:{
				start:0,
				count:20,
			}})
			.then( (response) =>{
				this.top250_show = response.data.subjects.slice(0,8);
				// console.log(this.top250_show)
			})
			axios.get(HOST + 'movie/us_box',{params: {
				date:''
			}})
				.then((response) =>{
					this.usBox_show = response.data.subjects.slice(0,8);
					// console.log(this.usBox_show)
				})
	
		},
		methods:{
			slide(event){
				let x = event.touches[0].clientX;
				// console.log(x)
				let target = event.currentTarget;
				
				// console.log(left)
				target.addEventListener('touchmove', function (event) {
					/* body... */
					event.preventDefault()
					let x2 = event.touches[0].clientX;
					let touch = x2 - x;
					// this.move = this.move + touch;
					// console.log(this.move)
					 left += touch
					 if(left > 0){
					 	left = 0;
					 }else if(left < -540){
					 	left = -540
					 }
					// console.log(left)
					let that = this;
					setTimeout(function () {
						/* body... */
						that.style.transform = `translateX(${left}px)`;
					}, 100)
				}, false)	
			}	
		},
		mounted(){
			// this.$emit('readyOn');
		},
		components: {
			star
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.movie 
	.movie-box
		padding 0 16px;
		.unit-content 
			padding-top 10px
			padding-bottom 20px
			.header
				position relative
				.title
					font-size 14px
					color #333
					line-height 24px
				&>a
					padding 5px
					color #00b600
					font-size 12px
					line-height 24px
					position absolute
					right 0
					top 0
			.content 
				width 100%
				overflow hidden
				padding-top 14px
				.content-wrapper
					display flex 
					flex-wrap nowrap
					flex-direction row
					width 980px
					.item 
						width 100px
						margin-right 10px
						&>a 
							display block
							clear both
							.image-box 
								width 100%
								padding-top 143%
								background-size cover
							.title-box 
								width 100%
								padding 5px 3px
								.title 
									width 100%
									overflow hidden
									text-overflow ellipsis
									white-space nowrap
									font-size 14px
									color #333
							.rating-box 
								padding-left 4px
								.star
									display inline-block
								.rating
									display inline-block
									font-size 10px
									padding-left 2px
								.no-rating 
									display inline-block 
									font-size 12px
									color red
</style>	