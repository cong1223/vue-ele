<template>
	<view id="index">
		<!-- 自定义导航栏 -->
		<cmd-nav-bar
			:fixed="true" 
			background-color="#1296db"
			left-text="饿了么"
			font-color="#fff"
		/>
		<!-- 导航栏占位区开始 -->
		<cmd-nav-bar
			:fixed="false" 
			background-color="#fff"
		/>
		<!-- 导航栏占位区结束-->
		<view class="info">
			<view class="addr" @tap="skipToLocation">
				<text class="ele-iconfont ele-pos">&#xe604;</text>
				<text>{{address}}</text>
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
		<view class="search">
			<view class="search-box" style="width:96%; padding:20upx 2%; background:#00C777; flex-wrap:nowrap;">
				<view class="search" @tap="skipSearch">
					<image src="../../static/sousuo.png"></image>
					<text class="flex-center">搜索</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: '获取位置',
			}
		},
		onLoad() {

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
			}
		}
	}
</script>

<style lang="scss">
	$blue: #1296db;
	#index{
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
	}
</style>
