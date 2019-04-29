<template>
	<view class="music_page">
		<!-- <view class="open_blueteeth" @click="openblueTeeth()">
			{{title}} 
		</view> -->
		<view class="music_circle">
			
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
				
				// function ab2hex(buffer) {
				//   const hexArr = Array.prototype.map.call(
				// 	new Uint8Array(buffer),
				// 	function (bit) {
				// 	  return ('00' + bit.toString(16)).slice(-2)
				// 	}
				//   )
				//   return hexArr.join('')
				// }
				// uni.onBluetoothDeviceFound(function (devices) {
				//   console.log('new device list has founded')
				//   console.log(typeof devices)
				//   //console.log(ab2hex(devices[0].advertisData))
			 //      console.log(JSON.stringify(devices))
				//   uni.stopBluetoothDevicesDiscovery({
				// 	  success(res) {
				// 		console.log(res)
				// 	  }
				// 	})
				// })
				uni.getConnectedBluetoothDevices({
					success(res) {
						console.log(JSON.stringify(res.devices))
						uni.getBluetoothDevices({
						  success(res) {
							console.log(JSON.stringify(res),99999999)
							// if (res.devices[0]) {
							//   console.log(ab2hex(res.devices[0].advertisData))
							// }
						  }
						})
					}
				})
				
			}
		},
		componentDidShow(){
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
</script>

<style>
	.music_page {
		height : 100%;
		width : 100%;
		padding-top : 160upx;
		
	}
	.open_blueteeth {
		width : 200upx;
		color : black;
		font-size: 28upx;
		border: 2upx solid #CA0C16;
		border-radius : 32upx;
		margin : 0 auto;
		text-align: center;
		
	}
	.music_circle {
		height : 684upx;
		width : 684upx;
		border-radius: 50%;
		background-color: black;
		margin : 0 auto;
	}
	
</style>