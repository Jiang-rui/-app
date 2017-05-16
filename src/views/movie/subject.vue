<template>
	<div class="subject">
		<div class="header" :style="'backgroundImage:url('+ subject.images.large +')'">
		</div>
		<div class="content-wrapper">
			<h1 class="title">{{subject.title}}</h1>
			<div class="rating-wrapper">
				<star :size="36" :score="subject.rating.average"></star>
				<span class="rating">{{subject.rating.average}}</span>
				<span class="rating-count">{{subject.ratings_count}}人评价</span>
			</div>
			<div class="content">
				<div class="detail">
					<span class="country">{{subject.countries[0]}}</span>
					<span v-for="name in subject.aka">/{{name}}</span>
					<span v-for="director in subject.directors">/{{director.name}}(导演)</span>
					<span v-for="cast in subject.casts">/{{cast.name}}</span>
					<span class="year">/{{subject.year}}</span>
					<span class="wish">/{{subject.wish_count}}人想看</span>
					<span v-for="tag in subject.genres" :key="tag.id">/{{tag}}</span>
				</div>
				<div class="img" >
					<img :src="subject.images.medium" width="100" height="143">
				</div>
			</div>
			<div class="introduce">
				<h1 class="intro">{{subject.title}}的剧情介绍</h1>
				<p class="text">
					{{subject.summary}}
				</p>
			</div>
			<div class="unit">
				<h1 class="work">导演</h1>
				<div class="work-wrapper">
					<ul class="work-content">
						<li class="item" v-for="director in subject.directors">
							<div class="img-box" :style="'backgroundImage:url('+director.avatars.medium+')'"></div>
							<div class="text">
								<span class="name">{{director.name}}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="unit">
				<h1 class="work">主演</h1>
				<div class="work-wrapper">
					<ul class="work-content">
						<li class="item" v-for="cast in subject.casts">
							<div class="img-box" :style="'backgroundImage:url('+cast.avatars.medium+')'"></div>
							<div class="text">
								<span class="name">{{cast.name}}</span>
							</div>
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
	const HOST = '/api'

	export default{
		data(){
			return {
				subject:{},
			}
		},
		created(){
			let id = this.$route.params.id;
			console.log(id)
			axios.get(HOST + `/movie/subject/${id}`)
				.then((response) =>{
					this.subject = response.data;
					// console.log(this.subject)
				})	
		},
		components:{
			star
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.subject
	.header 
		width 100%
		padding-top 40%
		background-size cover
		background-repeat no-repeat
		filter blur(2px)
	.content-wrapper
		padding 20px
		.title
			font-size 24px
			color #000
			line-height 36px
		.rating-wrapper
			.star 
				display inline-block
			.rating 
				font-size 16px	
				color #494949
			.rating-count 
				color #aaa
				font-size 14px
		.content 	
			padding-top 25px
			position relative
			.detail 
				width 64%
				font-size 14px
				line-height 1.6
				color #494949
			.img 
				clear both
				position absolute
				top 30px
				right 0
		.introduce 
			padding-top 50px
			.intro 
				font-size 16px
				color #aaa
				line-height 40px
			.text
				font-size 14px
				line-height 20px
				color #494949
		.unit 
			padding-top 20px
			.work 
				font-size 18px
				line-height 36px
			.work-wrapper 
				width 100%
				.work-content
					width 100%
					display flex 
					justify-content space-between
					flex-wrap wrap
					.item 
						width 45%
						display flex
						margin-top 10px
						.img-box
							flex 0 0 80px
							width 80px
							height 115px
							background-size contain
							background-repeat no-repeat
						.text 
							padding-left 5px
							.name 
								font-size 14px
								
</style>