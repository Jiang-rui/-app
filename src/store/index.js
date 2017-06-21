import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api.js'
import axios from 'axios'
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		audio:{
			id: 0,
			name: '歌曲名称',
			singer: '演唱者',
			albumPic: '../assets/player-bar.png',
			location: '',
			album: ''
		},
		lyric: '',
		currentIndex: 0,  //当前所在的位置
		playing: false,  //是否正在播放
		loading: false,
		showDetail: false,
		songList: [],
		currentTime: 0,
		durationTime: 0,
		bufferedTime: 0,
		tmpCurrentTime: 0,
		change: false
	},
	getters:{
		playTime: state=>{
			return state.currentTime / state.durationTime * 100
		},
		prBufferedTime: state=>{
			return state.bufferedTime / state.durationTime * 100
		}
	},
	mutations:{
		play(state){
			state.playing = true;
		},
		pause(state){
			state.playing = false;
		},
		toggleDetail(state){
			state.showDetail = !state.showDetail;
		},
		setAudio(state){
			state.audio = state.songList[state.currentIndex-1]
		},
		setAudioIndex(state,index){
			state.audio = state.songList[index];
			state.currentIndex = index + 1;
		},
		removeAudio(state,index){
			state.songList.splice(index,1);
			if(state.songList.length === 0){
				state.audio={
					id:0,
					name:'歌曲名称',
					singer: '演唱者',
					albumPic: '/static/player-bar.png',
					location: '',
					album: ''
				}
				state.playing = false;
			}
		},
		setLocation(state,location){
			state.audio.location = location
		},
		updateCurrentTime(state,time){
			state.currentTime=time
		},
		updateBufferedTime(state,time){
			state.bufferedTime=time;
		},
		openLoading(state){
			state.loading = true;
		},
		closeLoading(state){
			state.loading = false;
		},
		resetAudio(state){
			state.currentTime =0
		},
		playNext(state){
			state.currentIndex++;
			if(state.currentIndex > state.songList.length){
				state.currentIndex =1;
			}
			state.audio = state.songList[state.currentIndex-1]
		},
		playPrev(state){
			state.currentIndex--;
			if(state.currentIndex <= 0){
				state.currentIndex = state.songList.length+1;
			}
			state.audio =state.songList[state.currentIndex - 1]
		},
		addToList(state,song){
			let flag =false
			state.songList.forEach((element,index) =>{
				if(element.id === song.id){
					flag =true;
					state.currentIndex = index + 1;
				}
			})
			if(!flag){
				state.songList.push(song);
				state.currentIndex =  state.songList.length;
			}
			console.log(state.songList)
		},
		setLrc(state,lrc){
			state.lyric = lrc;
		}
	},
	actions:{
		getSong({commit,state},id){
			commit('openLoading')
			axios.get(api.getSong(id)).then(res =>{
				let url = res.data.data[0].url
				console.log(url)
				commit('setAudio')
				commit('setLocation',url)
			})
		}
	}
})
export default store;