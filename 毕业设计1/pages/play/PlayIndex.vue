<template>
	<view class="audio" :style="{backgroundImage:'url('+require('../../static/audio/bac.png')+')',height : specheight}">
		<view class="top_bar" >
			<image src='../../static/icon/refresh_arrow@2x.png' mode="" class="back_btn" @click="gotoback()"></image>
			<view class="song_title">
				{{name}}
			</view> 
			<view class="songer">
				{{songer}} 
			</view>
			<image src='../../static/icon/share@2x.png' mode="" class="share"></image>
		</view>
		<image src='../../static/audio/spec.png' mode=""  class="spec_img" v-bind:class="{spec_img1: isActive,spec_img2 : !isActive}"></image>
		<view class="circle_box">
			<image src='../../static/audio/spec_back.png' mode="" class="spec_backimg"></image>
		</view>
		<view class="firstbtn_box">
			<image src='../../static/icon/like@2x.png' mode="" class="firstbtn_item"></image>
			<image src='../../static/icon/pull_down@2x.png' mode="" class="firstbtn_item"></image>
			<image src='../../static/icon/comment@2x.png' mode="" class="firstbtn_item"></image>
		</view>
		<view class="program">
			<view class="start">
				{{starttime}}
			</view>
			<slider   step="1" backgroundColor = '#9E9E9E' 
					  activeColor = '#FFFFFF' 
					  block-size = '12' 
					  block-color = '#FFFFFF' 
					  class="slider"
					  value='percent'
					  @change = 'changepercent'/>
			<view class="end">
				{{alltime}}
			</view>
		</view>
		<view class="actbtn_box">
			<image src='../../static/icon/dantype.png' mode="" class="norbtn"></image>
			<image src='../../static/icon/last@2x.png' mode="" class="norbtn" @click="changeSong(2)"></image>
			<image src='../../static/icon/play@2x.png' mode="" class="playbtn" @click="changeStyle()"></image>
			<image src='../../static/icon/next@2x.png' mode="" class="norbtn" @click="changeSong(1)"></image>
			<image src='../../static/icon/sort@2x.png' mode="" class="norbtn" @click="changeShow(1)"></image>
		</view>
		<view class="unshow" v-if="showflag">
			<view class="opaview" @click="changeShow(2)"  v-bind:style="{opacity: opacity}">
			</view>
			<view class="unshow_list" v-bind:style="{height: height + 'px' }">
				<view class="list_title">
					<view class="list_title_message">
						<image src='../../static/icon/dantype1@2x.png' mode="" class="message_img"></image>
						<view class="message_text">
							单曲循环 （50）
						</view>
					</view>
					<view class="list_title_clear">
						<image src= '../../static/icon/delete@2x.png' mode="" class="message_img"></image>
					</view>
				</view>
				 <scroll-view  scroll-y="true" class="scroll-Y" >
                   <view class="scroll_item">
						<view class="scroll_message">
							<view class="scro_song_title">
								讲不出再见
							</view>
							<view class="scro_songer">
								-谭咏麟
							</view>
						</view>
						<view class="scroll_clear">
							<image src='../../static/icon/close@2x.png' mode="" class="srcoll_close"></image>
						</view>
                   </view>
				   <view class="scroll_item">
						<view class="scroll_message">
							<view class="scro_song_title">
								讲不出再见
							</view>
							<view class="scro_songer">
								-谭咏麟
							</view>
						</view>
						<view class="scroll_clear">
							<image :src="close" mode="" class="srcoll_close"></image>
						</view>
				   </view>
                </scroll-view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		props: [ 
			'specheight',
			'musicplay',
			'songer',
			'name',
			'size'
		],
		data () {
			return {
				showflag : false,
				height : 0,
				opacity : 0,
				isActive : false,
				song : this.songer,
				songName : this.name, 
				alltime : '',
				starttime : '00:00',
				percent : '0',
			}
		},
		
		watch: {
			musicplay(newValue, oldValue) {
				if(this.musicplay == 'pause'){
					this.isActive  = false;
				}
				if(this.musicplay == 'play'){
					this.isActive = true; 
				}
			},
			
		},
		mounted(){
			var min = parseInt(Number(this.size)/60)
			if(min<10){
				min = '0' + min
			}
			var sec = parseInt(Number(this.size)%60)
			if(sec<10){
				sec = '0' + sec
			}
			this.alltime = min + ':' + sec;
		},
		methods: {
			changeShow(flag) {
				if(flag == 1){
					this.showflag = true;
					this.$nextTick(function(){
						this.opacity = 0.7
						this.height = 450;
					})
					
				}
				if(flag == 2){
					this.opacity = 0
					this.height = 0;
					setTimeout(()=>{
						this.showflag = false;
					},700)
				}
			},
			changeStyle(){
				if(this.musicplay == 'pause'){
					this.isActive  = false;
				}
				if(this.musicplay == 'play'){
					this.isActive = true;
				}
				
				this.ctrlMusci()
				
			},
			gotoback(){
				this.$emit('changeShow')
			},
			ctrlMusci(){
				this.$emit('ctrlMusic','1')
			},
			changepercent(e){
				console.log(e.detail.value)
				var percent = e.detail.value
				this.$emit('slipercent',percent)
			},
			changeSong(flag){
				this.$emit('changeIndex',flag)
			}
		},
		onLoad(opation) {
			console.log(this.specheight)
		}
	}
</script>

<style>
	page {
		height : 100%;
	}
	.audio {
		height: 0;
		width: 100%;
		overflow: hidden;
		background-size: contain;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 101;
		transition: height 0.5s;
		-webkit-transitin : height 0.5s;
	}
	.top_bar {
		padding: 30px 16px 0 16px;
		height : 53px;
		position : relative;
	}
	.back_btn {
		width : 20px;
		height : 20px;
		position: absolute;
		top: 47px;
		left:16px;   
	}
	.song_title {
		position: absolute;
		left : 46px;
		top: 30px;
		color : white;
		font-size: 21px;
	}
	.songer {
		position: absolute;
		top: 60px;
		left: 46px;
		color :#E0E0E0;
		font-size: 15px; 
	}
	.share {
		width  : 20px;
		height : 20px;
		position: absolute;
		top: 47px;
		right : 16px;
	}
	.spec_img {
		width : 162px;
		height : 135px;
		position: absolute;
		top : 93px;
		right : 51px;
		
	}
	.spec_img1 {
		transform: rotate(20deg);
		transform-origin:11% 12%;
		transition: transform 0.5s;
		-webkit-transitin : transform 0.5s;
	}
	.spec_img2 {
		transform: rotate(0);
		transform-origin:11% 12%;
		transition: transform 0.5s;
		-webkit-transitin : transform 0.5s;
	}
	.circle_box {
		width: 297px;
		height: 297px;
		margin : 114px auto 0;
		background: #303034;
		border: 6px solid #7F7B7B;
		box-shadow: 0 2px 4px 0 rgba(153,153,153,0.50);
		border-radius: 50%;
	}
	.spec_backimg {
		display: block;
		width: 201px;
		height: 201px;
		margin: 48px;
	}
	.firstbtn_box {
		height: 26px;
		margin-top: 115px;
		display: flex;
		justify-content: space-around;
		padding: 0 60px;
	}
	.firstbtn_item {
		width : 26px;
		height : 26px;
		display: block;
	}
	.program {
		margin-top : 25px;
		height: 15px;
		padding: 0 16px;
	}
	.slider {
		width: 280px;
		float: left;
		margin: 0 auto;
	}
	.start {
		float: left;
		font-size: 11px;
		color: #E0E0E0;
		margin-top: 3px;
		margin-right: 8px;
	}
	.end {
		float: left;
		font-size: 11px;
		color: #E0E0E0;
		margin-top: 3px;
		margin-left: 4px;
	}
	.actbtn_box {
		margin-top: 28px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 40px;
	}
	.norbtn {
		width: 20px;
		height: 20px;
	}
	.playbtn {
		width: 45px;
		height: 45px;
	}
	.unshow {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 100;
	}
	.opaview {
		height: 100%;
		background: #000000;
		opacity: 0;
		transition: opacity 0.5s;
		-webkit-transitin : opacity 0.5s;
	}
	.unshow_list {
		position: absolute;
		left: 0;
		bottom: 0;
 		background: #FFFFFF;
		width: 368px;
		height: 0;
		border-radius: 23px 23px 3px 3px;
		padding: 0 12px;
		transition: height 0.5s;
		-webkit-transitin : height 0.5s;
	}
	.list_title {
		height: 53px;
		border-bottom: 1px solid #E0E0E0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.list_title_message {
		display: flex;
		align-items: center;
	}
	.message_img {
		width:18px ;
		height: 18px;
	}
	.message_text {
		margin-left: 6px;
		font-size: 17px;
		color: #4D4D4D;
	}
	.scroll-Y {
		height: 360px;
		overflow: hidden;
		padding-top: 28px;
	}
	.scroll_item {
		margin-bottom : 29px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.scroll_message {
		display: flex;
		align-items: center;
	}
	.scro_song_title {
		font-size: 15px;
		color: #4D4D4D;
	}
	.scro_songer {
		margin-left: 6px;
		font-size: 10px;
		color: #818181;
	}
	.srcoll_close {
		width: 16px;
		height: 16px;
	}
</style>
