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
			<view class="left" @tap="skipToChooseCity">
				<text>{{address}}</text>
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
				address: '杭州市',
				search: '',
			};
		},
		methods: {
			skipToChooseCity(){
				uni.navigateTo({
					url: '../city/city',
				});
			}
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
