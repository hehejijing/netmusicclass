import Vue from "vue";
import App from "./App.vue";
import "@/assets/flexible.js";
import "@/assets/reset.css";

import router from "./router";
Vue.config.productionTip = false;
// 按需引入vant 组件
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Row,
  Col,
  Image as VanImage,
  Cell,
  Icon,
  Search,
  List
} from "vant";
// import { recommendSongListApi } from '@/api'

//测试接口请求
// recommendSongListApi({
//   limit:6
// }).then(res => console.log(res))

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Row);
Vue.use(Col);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
