<template>
	<div class="play-list" v-show="showDetail" @click="show($event)">
		<div class="mask" ></div>
		<transition name='show'>
			<div class="list-content" v-show="showDetail">
				<h1 class="title">播放列表({{songList.length}})</h1>
				<div class="list-wrapper">
					<ul class="list">
						<li class="song" v-for="(song,index) in songList" @click='playAudio(index)'>
							<span class="name" :class="{now:index+1===currentIndex}">{{song.name}}-{{song.singer}}</span>
							<span class="clear" @click="remove(index)">移除</span>
						</li>
					</ul>
				</div>
			</div>
		</transition>
		
	</div>
</template>
<script type="text/ecmascript2015">
    import { mapState } from 'vuex'
	export default{
		computed:mapState({
			songList:state => state.songList,
			showDetail: state => state.showDetail,
			currentIndex: state => state.currentIndex
		}),
		methods:{
			remove(index){
				this.$store.commit('removeAudio',index);
				if(this.songList.length === 0){
					this.$store.commit('toggleDetail');
				}
			},
			show(event){
				event.stopPropagation();
				console.log(11)
				let target = event.target;
				if(target.className === 'mask'){
					this.$store.commit('toggleDetail');
				}
			},
			playAudio(index){
				this.$store.commit('setAudioIndex',index);
			}
		}
	}
</script>
<style lang="less" scoped>
.play-list{
	.mask{
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.8);
		z-index: 50;
	}
	.show-enter-active,.show-leave-active{
		transition:0.5s;
	}
	.show-enter,.show-leave-to{
		transform:translateY(100%);
	}
	.list-content{
		background-color: #fff;
		width:100%;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 60;
		.title{
			font-size: 18px;
			text-align: center;
		}
		.list-wrapper{
			border-top: 1px solid #e0e0e0;
			height: 300px;
			.list{
				.song{
					padding: 20px 0;
					border-bottom: 1px solid #f0f0f0;
					.name{
						font-size: 14px;
						padding: 0 20px;
					}
					.now{
						color:#ce3d3e;
					}
					.clear{
						float:right;
						font-size: 12px;
						padding: 0 20px;
						color:#888;
					}
				}
			}
		}
	}
}
</style>