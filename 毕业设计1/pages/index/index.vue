<template>
	<view class="first_page">
		<image class="logo" src="/static/logo.png"></image>
		<view class="music_agree" v-if="agree_back">
			<view class="agree_content">
				<view class="gotoMusic_btn" @click="gotoMusic()">
					{{agree_content}}
				</view>
			</view>
			<view class="agree_other" @click="makeOtherHide()">
				
			</view>
		</view>
		<view  class="music_btn" @click = 'getAgree()'>{{title}}</view>
	</view>
</template> 

<script>
	export default {
		data() { 
			return {
				title: '点击一下，极速体验!',
				agree_back : false,
				agree_content : '同意'
			}
		},
		
		methods: {
			gotoMusic(){
				uni.navigateTo({
					url : '/pages/music/index'
				})
			},
			getAgree(){
				this.agree_back = true;
				console.log(this.agree_back)
			},
			makeOtherHide(){
				this.agree_back = false;
			}
		}
	}
</script>

<style>
	.first_page {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.music_btn {
		height : 50upx;
		width : 100%;
		margin-top : 200upx;
		text-align: center;
	}
	.music_agree {
		height : 100%;
		width : 100%;
		position : absolute;
		top : 0;
		left : 0;
		z-index : 100;
		
	}
	.agree_content {
		width : 500upx;
		height : 800upx;
		background-color: #FFFFFF;
		position: relative;
		margin : 200upx auto ;
		z-index: 102;
		border-radius: 32upx;
		text-align: center;
	}
	.agree_other {
		height  : 100%;
		width : 100%;
		position: absolute;
		top : 0;
		left : 0;
		z-index: 101;
		width : 100%;
		opacity: 0.4;
		background: #4D4D4D;
	}
	.gotoMusic_btn {
		width :200upx;
		position: absolute;
		left : 150upx;
		bottom : 100upx;
		border : 2upx solid #CA0C16;
		border-radius: 32upx;
	}
</style>
