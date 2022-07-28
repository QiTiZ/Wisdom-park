import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入初始化样式文件
import './assets/css/global.less'

// 导入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 日期格式化函数
import dayjs from 'dayjs'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.filter('BeijingTime', () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
