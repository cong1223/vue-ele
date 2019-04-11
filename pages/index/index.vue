<template>
	<view id="index">
		<!-- 自定义导航栏 -->
		<cmd-nav-bar
			:fixed="true" 
			background-color="#1296db"
			font-color="#fff"
			left-text="饿了么"
		/>
		<view class="info">
			<view class="addr" @tap="skipToLocation">
				<text class="ele-iconfont ele-pos">&#xe604;</text>
				<text>{{selectCity}}</text>
				<text class="ele-iconfont ele-xiangxia">&#xe609;</text>
			</view>
			<view class="temp">
				<view class="left">
					<text>29°</text>
					<text> 晴夜</text>
				</view>
				<text class="ele-iconfont ele-night">&#xe6ae;</text>
			</view>
		</view>
		<view class="search-area">
			<view class="search" @tap="skipSearch">
				<image src="../../static/sousuo.png"></image>
				<text>搜索商家、商品名称</text>
			</view>
		</view>
		<swiper class="swiper-sort" :indicator-dots="true" :autoplay="false">
			<swiper-item>
				<view class="swiper-item">
					<view class="item-col">
						<view class="item">
							<image src="../../static/food-1.png" mode="widthFix"></image>
							<text>美食</text>
						</view>
						<view class="item">
							<image src="../../static/food-2.png" mode="widthFix"></image>
							<text>商超便利</text>
						</view>
					</view>
					<view class="item-col">
						<view class="item">
							<image src="../../static/food-3.png" mode="widthFix"></image>
							<text>水果</text>
						</view>
						<view class="item">
							<image src="../../static/food-4.png" mode="widthFix"></image>
							<text>医疗健康</text>
						</view>
					</view>
					<view class="item-col">
						<view class="item">
							<image src="../../static/food-5.png" mode="widthFix"></image>
							<text>异国料理</text>
						</view>
						<view class="item">
							<image src="../../static/food-6.png" mode="widthFix"></image>
							<text>地方小吃</text>
						</view>
					</view>
					<view class="item-col">
						<view class="item">
							<image src="../../static/food-7.png" mode="widthFix"></image>
							<text>麻辣烫</text>
						</view>
						<view class="item">
							<image src="../../static/food-8.png" mode="widthFix"></image>
							<text>素食简餐</text>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="item-col">
						<view class="item">
							<image src="../../static/food-9.png" mode="widthFix"></image>
							<text>大牌惠吃</text>
						</view>
						<view class="item">
							<image src="../../static/food-10.png" mode="widthFix"></image>
							<text>鸭脖卤味</text>
						</view>
					</view>
					<view class="item-col">
						<view class="item">
							<image src="../../static/food-11.png" mode="widthFix"></image>
							<text>汉堡披萨</text>
						</view>
					</view>
					<view class="item-col">
						<view class="item">
							<image src="../../static/food-12.png" mode="widthFix"></image>
							<text>包子粥铺</text>
						</view>
					</view>
					<view class="item-col">
						<view class="item">
							<image src="../../static/food-13.png" mode="widthFix"></image>
							<text>米粉面馆</text>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="shop-list">
			<view class="list-sort">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectCity: '',
			}
		},
		onLoad() {
			//判断城市数据,如果没有,就重新请求一次.
			if (!this.selectCity){
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
			// 点击搜索跳转到搜索页面
			skipSearch() {
				uni.navigateTo({
					url: '../search/search'
				});
			},
			// 跳转获取位置页面
			skipToLocation(){
				uni.navigateTo({
					url: "../address/address"
				})
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
								uni.setStorageSync('selectCity', data.data.result.address_component.city);
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
	#index{
		background-color: antiquewhite;
		.info{
			background-color: $blue;
			padding: 20upx 20upx;
			display: flex;
			justify-content: space-between;
			color: #fff;
			.addr{
				display: flex;
				align-items: center;
				font-size: 28upx;
				.ele-pos{
					font-size: 24upx;
				}
			}
			.temp{
				font-size: 24upx;
				display: flex;
				align-items: center;
				.left{
					display: flex;
					flex-direction: column;
					margin-right: 10upx;
					text{
						&:nth-child(2){
							font-size: 22upx;
						}
					}
				}
				.ele-night{
					font-size: 30upx;
				}
			}
		}
		.search-area{
			padding: 20upx;
			background-color: #1296db;
			.search{
				background-color: #fff;
				border-radius: 40upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28upx;
				height: 70upx;
				image{
					width: 40upx;
					height: 40upx;
				}
				text{
					margin-right: 10upx;
				}
			}
		}
		.swiper-sort{
			background-color: #fff;
			padding: 20upx;
			.swiper-item{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.item-col{
					display: flex;
					flex-direction: column;
					align-items: center;
					.item{
						display: flex;
						flex-direction: column;
						margin: 10upx 30upx;
						justify-content: center;
						align-items: center;
						image{
							width: 60upx;
							height: 60upx;
						}
						text{
							font-size: 28upx;
						}
					}
				}
			}
		}
	}
</style>
