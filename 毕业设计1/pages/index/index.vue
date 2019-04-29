<template>
	<view class="first_page">
		<view class="title">
			音乐，音悦
		</view>
		<view class="spec_title">
			开启手环模式
		</view>
		<view class="btn_left">
			同意
		</view>
		<view class="btn_right">
			不同意
		</view>
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
		height : 100%;
		background-color: #D23226;
		
	}
	.title {
		padding-top:290upx;
		text-align: center;
		color : white;
		font-size: 70upx;
	}
	.spec_title {
		position: absolute;
		bottom: 250upx;
		color : white;
		font-size: 36upx;
		text-align: center;
		width: 100%;
	}
	.btn_left {
		width : 150upx;
		height : 60upx;
		border : 1px solid white;
		border-radius: 28upx;
		font-size: 36upx;
		line-height: 61upx;
		color : white;
		text-align: center;
		position: absolute;
		bottom: 130upx;
		left: 145upx;
	}
	
	.btn_right {
		width : 150upx;
		height : 60upx;
		border : 1px solid white;
		border-radius: 28upx;
		font-size: 36upx;
		line-height: 61upx;
		color : white;
		text-align: center;
		position: absolute;
		bottom: 130upx;
		right: 145upx;
		
	}
	
	page  {
		height : 100%;
	}
</style>
