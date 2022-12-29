import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index.js'
import {
  Icon,
  Cell,
  CellGroup,
  Tag,
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image as VanImage,
  CountDown,
  Sidebar,
  SidebarItem,
  SubmitBar,
  Card,
  NavBar,
  SwipeCell,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku,
  ContactCard,
  AddressList,
  AddressEdit,
  Form,
  Field,
  Checkbox,
  CheckboxGroup,
  Popup,
  Picker
} from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(VanImage)
  .use(CountDown).use(Sidebar).use(SidebarItem).use(SubmitBar).use(Card).use(NavBar).use(SwipeCell).use(Button)
  .use(Tag).use(Cell).use(CellGroup).use(Icon).use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon)
  .use(Sku).use(ContactCard).use(AddressList).use(AddressEdit).use(Form).use(Field).use(Checkbox).use(CheckboxGroup)
  .use(Popup).use(Picker)
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
