<template>
	<view id="city">
		!-- 自定义导航栏 -->
		<cmd-nav-bar
			:fixed="true" 
			background-color="#1296db"
			back
			left-text="选择城市"
			font-color="#fff"
		/>
		<!-- 导航栏占位区开始 -->
		<cmd-nav-bar
			:fixed="false" 
			background-color="#fff"
		/>
		<!-- 导航栏占位区结束-->
		<cityPicker></cityPicker>
	</view>
</template>

<script>
	import cityPicker from '../../components/city-picker/mpvueCityPicker.vue'
	export default {
		components: {
			cityPicker
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
