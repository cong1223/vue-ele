<template>
	<view id="my">
		<!-- 自定义导航栏 -->
		<cmd-nav-bar
			:fixed="true" 
			background-color="#1296db"
			font-color="#fff"
			left-text="我的"
		/>
		<view class="header">
			<view class="login">
				<text>登录/注册</text>
				<text>登录后可享受更多特权</text>
			</view>
			<view class="goto">
				>
			</view>
		</view>
		<view class="my-count">
			<view class="count-item">
				<image src="../../static/xianjinyue.png" mode=""></image>
				<text>我的余额</text>
			</view>
			<view class="count-item sep">
				<image src="../../static/hongbao.png" mode=""></image>
				<text>我的红包</text>
			</view>
			<view class="count-item">
				<image src="../../static/jinbi.png" mode=""></image>
				<text>我的金币</text>
			</view>
		</view>
		<view class="my-center">
			<view class="item">
				<image src="" mode=""></image>
				<view class="">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	#my{
		.header{
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #1296db;
			color: white;
			.login{
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				padding: 50upx;
				text{
					&:nth-child(1){
						font-size: 36upx;
						margin-bottom: 15upx;
					}
					&:nth-child(2){
						font-size: 20upx;
					}
				}
			}
			.goto{
				padding-right: 15upx;
			}
		}
		.my-count{
			display: flex;
			border-bottom: 1upx solid #ccc;
			.count-item{
				padding: 30upx 0 15upx 0;
				width: 300upx;
				height: 120upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				image{
					width: 50upx;
					height: 50upx;
				}
				text{
					font-size: 22upx;
					margin-top: 30upx;
				}
			}
			.sep{
				border-style: solid;
				border-width: 1upx;
				border-color: transparent #ccc transparent #ccc;
			}
		}
		.my-center{
			
		}
	}
</style>
