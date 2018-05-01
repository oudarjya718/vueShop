// package
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// local
// import fstList from './fst.list.json';
import api from '@/api';
import '@/assets/mock';

Vue.use(Vuex);
Vue.prototype.$ajax = axios;

// 储存总的数据
export default new Vuex.Store({
  state () {
    console.log('state from vuex');
    return {
      home: [],         // 首页1
      list: [],         // 商品列表
      home1: [],        // 首页2
      orderlist: [],    // 订单列表
      showWhat: '',     // 展示哪个组件？
      selectList: JSON.parse(sessionStorage.getItem('selectList')) || [],
      myInfo: JSON.parse(sessionStorage.getItem('myInfo')) || {},
      company: location.pathname.match(/(?<=\/)\w+/) ? location.pathname.match(/(?<=\/)\w+/)[0]: 'fst',
      defaultImg: 'this.src="' + require('@/assets/images/gooli_bj.png') + '"'
    };
  },
  mutations: {
    // 同步一些数据到 sessionStorage
    sync: (state,data) => {
      sessionStorage.setItem(data,JSON.stringify(state[data])); 
    },

    home: async state => {
      if(state.home.length !== 0) return;
      state.home = await api.getStore({url: `/api/${state.company}`})
    },

    home1: async state => {
      if(state.home1.length !== 0) return;
      state.home1 = await api.getStore({url: `/api/${state.company}1`})
    },

    list: async state => {
      if(state.list.length !== 0) return;
      state.list = await api.getStore({url: `/api/${state.company}list`})
    },

    orderlist: async state => {
      if(state.orderlist.length !== 0) return;
      state.orderlist = await api.getOrderlist({url: `/api/${state.company}orderlist`})
    },
  }
});