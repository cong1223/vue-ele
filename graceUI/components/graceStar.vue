<template name="graceStart">
	<view class="grace-stars">
	  <view class="grace-stars-items" v-for="(item, index) in starNum" :key="index" @tap="changNum" :data-val="index">
		<image :src="currentNumber > index ? starImg[1] : starImg[0]" mode="widthFix"></image>
	  </view>
	  <view class="score" :style="{'display': scoreView ? 'block' : 'none'}">
			{{score}}
	  </view>
	</view>
</template>
<script>
export default {
	name: "graceStart",
	props:{
		starNum : {
		  type : Number,
		  default : 5
		},
		value : {
		  type : Number,
		  default : 0
		},
		starImg: {
			type : Array,
			default : function(){
				return [
					"../../static/images/star_0.png",
					"../../static/images/star_1.png"
				];
			}
		},
		canTap : {
		  type : Boolean,
		  default : true
		},
		score: {
			type: Number,
			default : 0
		},
		scoreView: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			currentNumber : 0
		}
	},
	created : function(){
		this.currentNumber = this.value;
	},
	methods: {
		changNum : function(e){
			if (!this.canTap){return ;}
			var val = Number(e.currentTarget.dataset.val);
			this.currentNumber = val + 1;
			this.$emit("starChange", this.currentNumber);
		}
	}
}
</script>
<style>
.grace-stars{padding:5px 5px 5px 0; display:flex; flex-wrap:nowrap; justify-content:space-between;}
.grace-stars-items{width:100%; margin:0 5px;display: flex;align-items: center;}
.grace-stars-items image{width:100%;}
.grace-stars .score{margin-left: 10upx; font-size: 22upx;display: flex;align-items: center; color: #666;}
</style>