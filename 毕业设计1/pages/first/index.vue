<template>
	<view class="first" :style="{backgroundImage:'url('+require('../../static/first/newb.png')+')'}">
		<view class="top">
			
		</view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item">
					<image src="http://p1.music.126.net/-emRzrwbJdqMmkRxYvUkEg==/109951164030387776.jpg" mode="" class="swiper-img"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="http://p1.music.126.net/dAYi5nXMYDL6csJWEdPO5g==/109951164030375896.jpg" mode="" class="swiper-img"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">					
					<image src="http://p1.music.126.net/BUj9IOnSkUDlcK_TFRnO9A==/109951164027533394.jpg" mode="" class="swiper-img"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="btn_box">
			<view class="btn_item" @click="changeType('mv')">
				<image :src="favorite" mode="" class="btn_img"></image>
				<view class="btn_text">
					每日推荐
				</view>
			</view>
			<view class="btn_item" @click="changeType('favorite')">
				<image :src="everyday" mode="" class="btn_img"></image>
				<view class="btn_text">
					我的收藏
				</view>
			</view>
			<view class="btn_item" @click="changeType('history')">
				<image :src="history" mode="" class="btn_img"></image>
				<view class="btn_text">
					播放历史
				</view> 
			</view>
		</view>
		<view style = 'height: 1px;width: 100%;background-color: #E0E0E0;margin-top: 30px;'></view>
		<view class="kind_title">{{title}}</view>
		<view class="commonlist" v-if="type == 'favorite' || type == 'history'">
			<view class="common_titlebox">
				<view class="title_head">
					<image class="title_head_img" :src = 'play' />
				</view> 
				<view class="title_text">播放全部</view>
				<view class="title_num">（共100首）</view>
				<view class="title_download">
					<image class="title_download_img"/>
				</view>
				<view class="title_delete">
					<image class="title_delete_img"/>
				</view>
			</view>
			<view class="common_itembox">	
				
				<view class="common_item" v-for="(item) in songlist" :key='item.name'>
					<view class="item_title">{{item.name}}</view>
					<view class="item_info">{{item.songer}}</view>
					<view class="item_delete"></view>
				</view>
			</view>	
		</view>
		<view class="list_box" v-if="type == 'mv'">
			<view class="list_item" v-for="(item) in listdata" :key="item.mv_id">
				<image class="list_img" :src ='item.picurl'></image>
				<view class="list_text">{{item.mvtitle}}</view>
			</view>
		</view>	
		<view class="down_tool">
			<view class="head_img" @click="gotoPlay()">
				<image class="real_head_box" :src = 'songlist[index].avatrul'></image>
			</view>
			<view class="song_info">
				<view class="song_title" @click="gotoPlay()">{{songlist[index].name}}</view>
				<view class="song_info_text">横滑切换上下曲</view>
			</view>
			<view class="song_menu">
				<image class="song_menu_btn" :src="menu"></image>
			</view>		
			<view class="song_act">
				<image class="song_play_btn" :src="play" @click="ctrlMusic('1')"></image>
			</view> 
		</view>
		<play-index 
			@changeShow='changeShow'
			@ctrlMusic='ctrlMusic' 
			@slipercent='slipercent'
			@changeIndex='changeIndex'
			v-bind:songer='songlist[index].songer'
			v-bind:name='songlist[index].name'
			v-bind:size='songlist[index].size'
			v-bind:specheight="specheight" 
			v-bind:musicplay='musicplay'
		></play-index>
	</view>
</template>

<script>
	import PlayIndex from '../play/PlayIndex.vue'
	export default {
		components: {
			PlayIndex
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				favorite : '../../static/favorite.png',
				history : '../../static/history.png',
				everyday : '../../static/everyday.png',
				menu :  '../../static/first/menu.png',
				play :  '../../static/first/play.png',
				back : 	'../../static/first/newb.png',
				title : '热门MV',
				listdata : [],
				type : 'mv',
				
				musicplay : 'pause',
				specheight : '0',
				ctrlFlag : false,
				songlist : [
					{
						songer : '张国荣',
						name : '风继续吹',
						src : '../../static/music/1.mp3',
						avatrul : 'https://p2.music.126.net/FEgl2i8gDkOdppr5Ko3kEA==/69269232562640.jpg?param=34y34',
						size : '416'
					},
					{
						songer : '谭咏麟',
						name : '讲不出再见',
						src : '../../static/music/2.mp3',
						avatrul : 'https://p2.music.126.net/ow3GKMyAg8hdWDRmhKl4iw==/109951163066633801.jpg?param=34y34',
						size : '294'
					},
					{
						songer : '张国荣',
						name : '风再起时',
						src : '../../static/music/3.mp3',
						avatrul : 'https://p1.music.126.net/UI_5fJZa9AHRfJ1AywjSog==/78065325577772.jpg?param=34y34',
						size : '270'
					},
					{
						songer : '谭咏麟',
						name : '朋友',
						src : '../../static/music/4.mp3',
						avatrul : 'https://p2.music.126.net/ow3GKMyAg8hdWDRmhKl4iw==/109951163066633801.jpg?param=34y34',
						size : '289'
					}
				],
				avatrul : 'https://p2.music.126.net/ow3GKMyAg8hdWDRmhKl4iw==/109951163066633801.jpg?param=34y34',
				size : '294',
				index: '3'
			}
		}, 
		watch: {
			ctrlFlag(newValue, oldValue) {
				this.ctrlMusic('1'); 
			}
		},
		methods: {
			getMessage(){
				uni.request({
					url: 'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag?g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=GB2312&notice=0&platform=yqq.json&needNewCode=0&cmd=shoubo&lan=all', //仅为示例，并非真实接口地址。
					method : 'GET',
					success: (res) => {
						console.log(JSON.stringify(res.data.data.mvlist) );
						this.listdata = res.data.data.mvlist;
						this.text = 'request success';
					}
				});
			},
			changeType(flag){
				this.type = flag
				console.log(this.type)
				//this.openBlue();
			},
			gotoPlay(){
				console.log(123456)
				this.specheight = '100%';
				// uni.navigateTo({
				// 	url: `/pages/play/index?songName=${this.songName}&songer=${this.songer}`,
				// });
				
			},
			openBlue(){
				uni.openBluetoothAdapter({
				  success(res) {
					console.log(res,13455)
				  },
				  fail(error) {
				  	console.log(error)
				  },
				  complete() {
				  	console.log("finally")
				  }
				}),
				uni.createBLEConnection({
				  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
				  deviceId : 'E5:26:24:93:53:0E',
				  success(res) {
					console.log(res,888888888)
				  }
				}),				
				uni.onBLECharacteristicValueChange( (res)=> {
				  //console.log(`characteristic ${res.characteristicId} has changed, now is ${JSON.stringify(res) }`)
				  this.ctrlFlag = !this.ctrlFlag; 
				  //console.log(ab2hex(res.value))
				   //console.log('characteristic value comed:', res)
				}),
				uni.notifyBLECharacteristicValueChange({
				  state: true, // 启用 notify 功能
				  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
				  deviceId : 'E5:26:24:93:53:0E',
				  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
				  serviceId : '0000180D-0000-1000-8000-00805F9B34FB',
				  // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
				  characteristicId : '00002A37-0000-1000-8000-00805F9B34FB',
				  success(res) {
					console.log('notifyBLECharacteristicValueChange success', res.errMsg)
					uni.showToast({
						title: '手环连接成功',
						duration: 2000
					});
				  },
				  fail(error){
					  console.log(JSON.stringify(error))
				  }
				})
				
			},
			ctrlMusic(flag){
				if(flag == 1){
					switch (this.musicplay){
						case 'pause': this.innerAudioContext.play();this.musicplay = 'play';
							this.innerAudioContext.onPlay(() => {
							  console.log('开始播放');
							  console.log(this.innerAudioContext.duration);
							});
							break;
						
						default:  this.innerAudioContext.pause();this.musicplay = 'pause';
							break;
					}
				
				}
				if(flag == 2){
					this.innerAudioContext.stop();
					this.musicplay = 'pause';
				}
			},
			changeShow(){
				this.specheight = '0';
			},
			slipercent(percent){
				console.log(percent)
				var position = Number(this.songlist[this.index].size)/100*Number(percent);
				this.innerAudioContext.seek(position);
			},
			changeIndex(flag){
				console.log(flag)
				if(flag == 1){
					this.index ++;
					if(this.index == 4){
						this.index = 0
					}
				}
				if(flag == 2){
					this.index --;
					if(this.index == -1){
						this.index = 3
					}
				}
				console.log(this.index)
				//this.innerAudioContext.destroy()
				this.innerAudioContext.src = this.songlist[this.index].src;  
				this.innerAudioContext.play();
			},
			 
		},
		onLoad(opation) {
			console.log(opation.isBlue)
			if(opation.isBlue == 'blue'){
				this.openBlue();
				console.log('acbadaseff')
			}
			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.src = this.songlist[this.index].src;  
			console.log(this.innerAudioContext.currentTime)
			this.innerAudioContext.onTimeUpdate(()=>{
				console.log('1544464')
			})
			this.innerAudioContext.onEnded(()=>{
				console.log('555555') 
			})
			this.innerAudioContext.loop = true;
			this.innerAudioContext.onPlay(() => {
			  console.log('开始播放');
			  console.log(this.innerAudioContext.duration);
			});
			this.innerAudioContext.onError((res) => {
			  console.log(res.errMsg);
			  console.log(res.errCode);
			});
		},
		beforeMount(){
			
			
		}
	
	}
</script>

<style>
	page {  
		height : 100%;
	}
	.first {
		padding: 0 16upx;
		background-image: url('../../static/first/newb.png');
		background-size:cover ;
		background-position: left top;
		height: 100%;
  	}
	.top {
		height : 40upx;
	}
	.swiper-item {
		width : 100%;
		height : 382px;
		border-radius: 16upx;
		overflow: hidden;
		margin-top : 48upx;
	}
	.swiper-img {
		width : 100%;
		height : 191upx;
		border-radius: 16upx;
	}
	.btn_box {
		display: flex;
		justify-content: space-evenly;
		margin-top : 30upx;
	}
	.btn_item {
		
	}
	.btn_img { 
		width : 75upx;
		height : 75upx;
		display: block;
		margin: 0 auto;
	}
	.btn_text {
		font-size: 32upx;
		color : #4D4D4D;
		text-align: center;
		margin-top : 16upx;
	}
	.kind_title {
		margin-top : 23px;
		color : #4D4D4D;
		font-size: 22px;
		text-align: center;
		font-weight: 600;
	}
	
	.list_box {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		display: -webkit-flex;
		padding-bottom : 90px;
	}
	.list_item {
		width : 183px;  
		margin-top: 24px;
	}
	.list_img {
		width : 183px;
		height : 83px;
		border-radius: 8px;
	}
	.list_text {
		max-width: 183px;
		font-size: 16px;
		color: #4D4D4D;
		line-height: 20px;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient : verticel;
		-webkit-box-clamp : 2;
		word-break: break-all;
		margin-top : 9px;
		overflow: hidden;
	}
	.down_tool {
		width: 100%;
		height: 44px;
		padding: 11px 16px 11px 16px;
		border-top:1upx solid #E0E0E0 ;
		position: fixed;
		bottom: 0;
		left : 0;
		z-index: 100;
		 
	}
	.head_img {
		width : 44px ;
		height : 44px;
		border-radius: 50%;
		background: #D8D8D8;
		float :left;
	}
	.real_head_box {
		width: 44px;
		height: 44px;
		border-radius: 50%;
	}
	.song_info {
		margin-left : 8px;
		float : left;
		
	}
	.song_title {
		color : #4D4D4D;
		font-size: 18px;
	}
	.song_info_text {
		font-size: 14px;
		color : #999999;
	}
	.song_act {
		widht : 40px;
		height : 40px;
		float :right ;
		margin-right: 16px;
	}
	.song_play_btn {
		width : 30px;
		height : 30px;
		margin-top : 5px;
	}
	.song_menu {
		float : right ;
		width : 30px;
		height : 30px;
		margin-right: 32px;
		 margin-top: 5px;
	}
	.song_menu_btn {
		width : 23px;
		height : 23px;
		margin-top : 4px;
	}
	.commonlist {
		padding-top: 26px;
		height: auto;
	}
	.common_titlebox {
		position: relative;
	}
	.title_head {
		position: absolute;
		top: 0;
		left : 0;
		width : 24px;
		height : 24px;
	}
	.title_head_img {
		width : 24px;
		height : 24px;
	}
	.title_text {
		position: absolute;
		font-size: 20px;
		color : #4D4D4D;
		top: 0;
		left: 32px;
	}
	.title_num {
		font-size: 20px;
		color : #3F3F3F;
		position: absolute;
		top: 0;
		left: 115px;
	}
	.title_download {
		width : 24px;
		height :24px;
		position: absolute;
		top: 0;
		right: 40px;
	}
	.title_download_img{
		width : 24px;
		height : 24px;
	}
	.title_delete {
		width : 24px;
		height : 24px;
		position: absolute;
		top: 0;
		right: 0;
	}
	.title_delete_img {
		width : 24px;
		height : 24px;
	}
	.common_itembox {
		margin-top : 60px;
		position: relative;
	}
	.common_item {
		margin-top : 15px;
		height: 50px;
		position: relative;
		
	}
	.item_title {
		font-size: 20px;
		color: #4D4D4D;
		position: absolute;
		top: 0;
		left : 0;
	}
	.item_info {
		position: absolute;
		bottom:0 ;
		left : 0;
		font-size: 12px;
		color: #818181;
	}
	.item_delete {
		position: absolute;
		right: 0;
		top: 0;
	}
</style>
