<template>
	<div class="music">
		<h1 class="title">全部歌单</h1>
		<div class="list">
			<ul class="list-wrapper">
				<li class="list-item" v-for="item in this.lists" :key="item.id">
					<router-link :to="{name:'listCard',params: {id: item.id}}">
						<div class="img-box" :style ="'backgroundImage:url('+item.coverImgUrl+')'">
							<span class="playcount"><span class="text">播放:{{item.playCount}}</span> </span>
						</div>
						<div class="desc">
							<p class="text">{{item.name}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
	</div>
</template>
<script type="text/ecmascript2015">

	// import axios from 'axios'
	import api from '../../api/api.js'
	export default{
		data(){
			return {
				offset:0,
				lists: [],
				scroller: null,
				loading: false
			}
		},
		mounted(){
			this.scroller = this.$el;
		},
		methods: {
			get(){
					this.loading = true;
					this.axios.get(api.getPlayListByWhere('全部','hot', this.offset, true, 8)).then((res)=>{
					let total = res.data.total;
					let playlists = res.data.playlists;
					this.lists = this.lists.concat(playlists);
					console.log(this.lists)
					this.offset += 6;
					if(this.offset > total){
						this.offset=total
					} 
					this.loading = false;
				})
			},
			loadMore(){
				this.load();
			}
		},
		created(){
			this.get()
		},
	}
</script>
<style lang="less" scoped>
.music{
	padding: 18px 0 0 18px;
	.title{
		font-size: 18px;
		padding: 2px 5px;
		border-left: 4px solid #ce3d3e;
	}
	.list{
		.list-wrapper{
			display: flex;
			flex-wrap: wrap;
			align-content: space-around;
			.list-item{
				width: 47%;
				padding-top: 10px;
				margin-right: 6px;
				.img-box{
					width: 100%;
					padding-top: 100%;
					background-size: contain;
					// overflow: hidden;
					background-repeat: no-repeat;
					position: relative;
					.playcount{
						display: block;
						width: 100%;
						background-color: rgba(0,0,0,0.7);
						position: absolute;
						bottom: 2px;
						font-size: 14px;
						line-height: 24px;
						text-align: right;
						color:#fff;
						.text{
							margin-right: 7px;
						}
					}
				}
				.desc{
					padding: 5px 0 0 2px;
					.text{
						font-size: 14px;
						line-height: 20px;
						color: #333;
					}
				}
			}
		}
	}
}
</style>