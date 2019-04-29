<template>
	<view class="first">
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
			<view class="btn_item">
				<image :src="favorite" mode="" class="btn_img"></image>
				<view class="btn_text">
					每日推荐
				</view>
			</view>
			<view class="btn_item">
				<image :src="everyday" mode="" class="btn_img"></image>
				<view class="btn_text">
					我的收藏
				</view>
			</view>
			<view class="btn_item">
				<image :src="history" mode="" class="btn_img"></image>
				<view class="btn_text">
					播放历史
				</view> 
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				favorite : '../../static/favorite.png',
				history : '../../static/history.png',
				everyday : '../../static/everyday.png'
			}
		}, 
		methods: {
			
		}
	}
</script>

<style>
	.first {
		padding: 0 16upx;
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
		width : 100upx;
		height : 100upx;
		display: block;
		margin: 0 auto;
	}
	.btn_text {
		font-size: 32upx;
		color : #4D4D4D;
		text-align: center;
		margin-top : 16upx;
	}
</style>
