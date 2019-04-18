<template>
	<view class="music_page">
		<view class="open_blueteeth" @click="openblueTeeth()">
			{{title}} 
		</view>
	</view>
</template>

<script>
	export default {
		data() { 
			return {
				title: '打开蓝牙',
			}
		},
		
		methods: {
			openblueTeeth(){
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
				uni.startBluetoothDevicesDiscovery({
				  success(res) {
					console.log(res,"success")
				  }
				})
			}
		}
	}
</script>

<style>
	.music_page {
		height : 100%;
		width : 100%;
		padding-top : 400upx;
	}
	.open_blueteeth {
		width : 200upx;
		color : #FFFFFF;
		font-size: 28upx;
		border: 2upx solid #CA0C16;
		border-radius : 32upx;
		margin : 0 auto;
		text-align: center;
		
	}
	
</style>
