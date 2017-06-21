<template>
	<div class="foot" v-show="songList.length > 0">
		<div class="player">
			<div class="player-content">
				<audio :src="audio.location" @canplay="canplaySong" @ended="playNext" id="audioPlay"/>
				<div class="cover" @click="showDetail">
					<img class="songLogo" :src="audio.albumPic" width="30" height="30" :alt="audio.name">
				</div>
				<div class="info">
					<div class="name">{{audio.name}}</div>
					<div class="artist">{{audio.singer}}</div>
				</div>
				<div class="control">
					<i class="iconfont1 iconfont icon-liebiao-copy-copy" @click="showDetail"></i>
					<i class="iconfont1 iconfont icon-bofang" v-show="!playing" @click="play"></i>
					<i class="iconfont1 iconfont icon-zanting" v-show="playing" @click="pause"></i>
					<i class="iconfont1 iconfont icon-xiayishou" @click='playNext'></i>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript2015">
import {mapMutations , mapState } from 'vuex'
	export default{
		data(){
			return {
				loadedTime: 0,
     			playerTime: 0,
			}
		},
		computed:mapState({
			audio: state => state.audio,
			playing: state => state.playing,
			loading: state => state.loading,
			songList: state => state.songList
		}),
		methods:{
			showDetail (){
				this.$store.commit('toggleDetail')
			},
			canplaySong (){
				this.$store.commit('closeLoading');
				this.$store.commit('play')
				document.getElementById('audioPlay').play()
			},
			pause(){
				this.$store.commit('pause')
				document.getElementById('audioPlay').pause()
			},
			play(){
				this.$store.commit('play');
				document.getElementById('audioPlay').play()
			},
			playNext(){
				document.getElementById('audioPlay').pause()
				this.$store.commit('pause')
				this.$store.commit('playNext')
			}
		}
	}
</script>
<style lang="less" scoped>
@import '../assets/font/iconfont.less';

.foot{
	width: 100%;
	height: 40px;
	z-index: 40;
	position: fixed;
	bottom: 0;
	left:0;
	background-color: rgba(255,255,255,0.8);
	.player{
		.player-content{
			display: flex;
			.cover{
				flex: 0 0 35px;
				padding: 5px 0 0 5px;
			}
			.info{
				padding: 0 0 0 10px;
				flex:1;
				.name{
					color:#000;
				}
				.artist{
					color:#666;
				}
			}
			.control{
				flex: 0 0 140px;
				.iconfont1{
					margin-right: 20px;
					display: block;
					line-height: 40px;	
					font-size: 25px;
					float:left;
					color:#ce3d3e;				
				}
				.icon-xiayishou{
					padding-top: 1px;
				}
			}
		}
	}
}
</style>