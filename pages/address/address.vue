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
				selectCity: '',
				search: '',
			};
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
				line-height: 25upx;
				width: 100%;
				border-radius: 5upx;
				text-align: center;
				font-size: 26upx;
			}
		}
	}
</style>
