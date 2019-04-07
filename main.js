import Vue from 'vue'
import App from './App'
// 注册全局组件-自定义导航
import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
Vue.component('cmd-nav-bar',cmdNavBar) 

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
