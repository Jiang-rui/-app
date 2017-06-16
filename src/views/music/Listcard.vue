<template>
	<div class="listcard">
		<div class="header" :style="'backgroundImage: url('+list.coverImgUrl+')'">
		</div>
		<div class="avatar">
			<img :src="list.coverImgUrl" width="150" height="150">
			<div class="content">
				<span class="name">{{list.name}}</span>
				<p class="author-wrapper">by:<span class="author">{{list.creator.nickname}}</span></p>
			</div>
		</div>
		<div class="tagdesc">
			<div class="tag">
			   标签：
				<span class="tag-item" v-for="tag in list.tags">
					{{tag}}
				</span>
			</div>
			<div class="intro">
				<p class="text">简介：<span class="desc">{{list.description}}</span></p>
			</div>
		</div>
		<div class="songlist">
			<h1 class="title">歌单列表</h1>
			<div class="song-wrapper">
				<ul >
					<li class="song-item" v-for="(song,index) in songs">
						<span class="sortnum">{{index+1}}</span>
						<div class="song">
							<span class="song-name">{{song.name}}</span>
							<span class="song-author">{{song.ar[0].name}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript2015">
	import api from '../../api/api.js'
	export default{
		data(){
			return {
				songs: [],
				list: {},
				plays: [],
				id: 0
			}
		},
		methods:{
			get(){
				this.axios.get(api.getPlayListDetail(this.$route.params.id)).then((res)=>{
				this.songs = res.data.playlist.tracks;
				this.list =res.data.playlist;
				// console.log(this.list);
				// console.log(this.songs)
				})
			}
		},
		beforeRouteEnter(to,from,next){
			next(vm =>{
				console.log(111)
				if (parseInt(to.params.id) !== parseInt(vm.id)){
					console.log(222)
					vm.get()
				}
			})
		}
	}
</script>
<style lang="less" scoped>
.listcard{
	z-index:30;
	background-color: #f5f5f5;
	.header{
		width: 100%;
		height: 200px;
		background-size: cover;
		background-position: 0 -100px;
		filter:blur(10px);
	}
	.avatar{
		display: inline-block;
		position: relative;
		padding-bottom: 20px;
		border-bottom: 2px solid #f0f0f0;
		img{
			border-radius: 2px;
			position: absolute;
			top:-75px;
			left:20px;
		}
		.content{
			padding: 20px 0 0 175px;
			.name{
				font-size: 14px;
				color:#333;
				line-height: 20px;
			}
			.author-wrapper{
				padding-left: 70px;
				.author{
					font-size: 14px;
					color:#d33a31;
					line-height: 20px;
					padding-left: 5px;
				}
			}
		}
	}
	.tagdesc{
		padding: 20px 0 0 20px;
		color:#666;
		font-size: 16px;
		.tag-item{
			display: inline-block;
			font-size: 12px;
			line-height: 14px;
			color:#666;
			padding: 0 5px;
			border: 1px solid #888;
			border-radius: 10px;
			margin-left: 10px;
		}
		.intro{
			padding-top: 20px;
			.desc{
				font-size: 14px;
				line-height: 18px;
				color:#666;
			}
		}
	}
	.songlist{
		padding-top: 20px;
		.title{
			background-color: #e0e0e0;
			color:#333;
			padding-left: 18px;
			font-size: 14px;
			line-height: 26px;
			font-weight: 400;
		}
		.song-wrapper{
			padding: 18px;
			.song-item{
				padding-bottom: 18px;
				display: flex;
				.sortnum{
					color:#888;
					flex:0 0 20px;
					margin-top: 13px;
				}
				.song{
					flex:1;
					display: inline-block;
					border-bottom: 1px solid #e0e0e0;
					margin-left: 10px;
					padding-bottom: 10px;
					.song-name{
						display: block;
						font-size: 16px;
						line-height: 26px;
					}
					.song-author{
						font-size: 14px;
						color:#888;
					}
				}
			}
		}
	}
}
</style>