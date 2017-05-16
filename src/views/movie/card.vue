<template>
<div class="card-wrapper">
	<div class="card" v-if="list === 'in_theaters'">
		<h1 class="title">影院热映</h1>

		 <div class="content">
		 	<ul class="content-wrapper">
				<li v-for = "subject in in_theaters" :key="subject.id" class="item">
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
	<div class="card" v-else-if="list === 'coming_soon'">
		<h1 class="title">即将上映</h1>
		 <div class="content">
		 	<ul class="content-wrapper">
				<li v-for = "subject in coming_soon" :key="subject.id" class="item">
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
	<div class="card" v-else-if="list === 'top250'">
		<h1 class="title">历史排行榜</h1>
		 <div class="content">
		 	<ul class="content-wrapper">
				<li v-for = "subject in top250" :key="subject.id" class="item">
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
	<div class="card" v-else-if="list === 'us_box'">
		<h1 class="title">北美票房榜</h1>
		 <div class="content">
		 	<ul class="content-wrapper">
				<li v-for = "item in us_box" :key="item.subject.id" class="item">
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
	
</template>
<script type="text/ecmascript2015">
	
	const HOST = '/api/'
	import axios from 'axios'
	import star from '../../components/star/star.vue'
	export default{
		data(){
			return {
				in_theaters:[],
				coming_soon: [],
				top250: [],
				us_box: [],
				list:''
			}
		},
		created(){
			let list = this.$route.params.list;
			this.list = list;
			if(list === 'in_theaters' || list === 'coming_soon'){
				axios.get(HOST+`movie/${list}`,{ params:{
				start:0,
				city:'深圳'
				}})
				.then((response) =>{
					if(list === 'in_theaters'){
						this.in_theaters = response.data.subjects;
						console.log(this.in_theaters)
					}else{
						this.coming_soon = response.data.subjects;
					}
				})
				.catch((err) =>{
					console.log(err)
				})
			}else if(list === 'top250'){
				axios.get(HOST+'movie/top250',{params: {
					start:0,
				}})
				.then((response) =>{
					this.top250 = response.data.subjects
				})
				.catch((err)=>{
					console.log(err)
				})
			}else if(list === 'us_box'){
				axios.get(HOST+'movie/us_box',{params: {
					date: ''
				}})
				.then((response) =>{
					this.us_box = response.data.subjects
				})
				.catch((err)=>{
					console.log(err)
				})
			}
			
			// console.log(this.coming_soon)
			// console.log(this.top250)
			// console.log(this.us_box)
		},
		components:{
			star
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.card-wrapper
	width 100%
	padding 18px
	.card 
		.title
			font-size 24px
		.content 
			.content-wrapper
				display flex
				flex-wrap wrap
				.item 
					margin-top 18px
					width 100px
					margin-right 18px
					.image-box 
						width 100px
						padding-top 143%
						background-size conver
					.title-box 
						width 100%
						padding 5px 3px
						overflow hidden
						text-overflow ellipsis
						white-space nowrap
						.title 
							
							font-size 14px
							color #333
							margin-bottom 0
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