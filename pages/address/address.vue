<template>
	<view id="address">
		<!-- 自定义导航栏 -->
		<cmd-nav-bar
			:fixed="false" 
			background-color="#1296db"
			left-text="收货地址"
			back
			font-color="#fff"
		/>
		<view class="search">
			<view class="left" @tap="selectCityPage">
				<text>{{selectCity}}</text>
				<text class="ele-iconfont ele-xiangxia">&#xe609;</text>
			</view>
			<input type="text" v-model="search" placeholder="小区/写字楼/学校等"/>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectCity: '杭州市',
				search: '',
			};
		},
		onLoad() {
			//判断城市数据,如果没有,就重新请求一次.
			if (this.selectCity) {} else {
				this.getLocation();
			}
		},
		onShow() {
			const selectCity = uni.getStorageSync('selectCity');
			if(selectCity){
				this.selectCity = selectCity;
			}
		},
		methods: {
			// 跳转到城市选择页面
			selectCityPage(){
				uni.navigateTo({
					url: '../city/city',
				});
			},
			// 获取位置信息
			getLocation() {
				uni.getLocation({
					type: 'wgs84',
					success: res => {
						console.log(res);
						let latitude = res.latitude;
						let longitude = res.longitude;
						uni.request({
							url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude +
								'&key=UGMBZ-S5AKU-YQGV3-47M5J-BAQ62-ZBBJW',
							success: data => {
								console.log(data);
								this.selectCity = data.data.result.address_component.city;
							}
						});
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	$blue: #1296db;
	#address{
		.search{
			padding: 15upx 30upx;
			background-color: $blue;
			display: flex;
			align-items: center;
			.left{
				display: flex;
				align-items: center;
				color: white;
				width: 25%;
				text{
					&:nth-child(1){
						font-size: 24upx;
					}
				}
			} 
			input{
				background-color: white;
				height: 25upx;
				width: 100%;
				border-radius: 5upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 26upx;
			}
		}
	}
</style>
