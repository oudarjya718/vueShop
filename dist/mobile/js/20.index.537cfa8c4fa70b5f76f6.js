(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{257:function(t,a,e){(t.exports=e(4)(!1)).push([t.i,'.avator[data-v-b7c9eb30]{height:100vh;background:#333}.avator .header[data-v-b7c9eb30]{left:0;height:1.06667rem;top:0;width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#fff;padding:0 .2rem;font-size:14px}[data-dpr="2"] .avator .header[data-v-b7c9eb30]{font-size:28px}[data-dpr="3"] .avator .header[data-v-b7c9eb30]{font-size:42px}.avator .header .option[data-v-b7c9eb30]{font-size:40px;min-width:1rem;text-align:center}[data-dpr="2"] .avator .header .option[data-v-b7c9eb30]{font-size:80px}[data-dpr="3"] .avator .header .option[data-v-b7c9eb30]{font-size:120px}.avator .avator-img[data-v-b7c9eb30]{width:6rem;height:6rem;margin:3.73333rem 2rem}.avator .mask[data-v-b7c9eb30]{background:rgba(0,0,0,.6);height:100vh;width:100vw;position:absolute;top:0;left:0}.avator .mask div[data-v-b7c9eb30]{width:100vw;position:absolute;background:#fff;bottom:0}.avator .mask div.btn-able[data-v-b7c9eb30]{height:5rem}.avator .mask div.btn-disable[data-v-b7c9eb30]{height:2rem;border-top:.04rem solid #f5f5f5}.avator .mask div button[data-v-b7c9eb30]{width:9.33333rem;height:1rem;display:block;margin:.33333rem auto;font-size:16px;color:#fff;border:none;border-radius:.1rem;background:#b84747}[data-dpr="2"] .avator .mask div button[data-v-b7c9eb30]{font-size:32px}[data-dpr="3"] .avator .mask div button[data-v-b7c9eb30]{font-size:48px}.avator .mask div button.cancel[data-v-b7c9eb30]{background:#ccc}',""])},258:function(t,a,e){var o=e(257);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,e(3).default)("52fb6a97",o,!0,{})},308:function(t,a,e){"use strict";e.r(a);var o=e(0),i={store:o.a,data:function(){return{myInfo:o.a.state.myInfo,company:o.a.state.company,isShow:!1}},computed:{defaultImg:function(){return o.a.state.defaultImg}},mounted:function(){var t=this;document.querySelector(".mask").addEventListener("click",function(a){"btn-able"===a.path?t.isShow=!0:t.isShow=!1})},methods:{toggle:function(t){this.isShow=!this.isShow},upload:function(){var t=this,a=document.createElement("input");a.type="file",a.click(),a.addEventListener("change",function(a){t.ajax_upload_image(a)})},init_camera:function(){var t=this,a=document.createElement("input");a.type="file",a.accept="image/*",a.click(),a.addEventListener("change",function(a){t.ajax_upload_image(a)})},ajax_upload_image:function(t){var a=t.path[0].files[0],e=new FormData;e.append("file",a),this.$ajax({method:"post",url:"/upload",data:e}).then(function(t){o.a.commit("syncState",{stateName:"myInfo",stateValue:{avatarUrl:t.data[0].url}}),o.a.commit("syncSession","myInfo"),document.querySelector("img").src=t.data[0].url})}}},n=e(2),s=Object(n.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"avator"},[e("header",{staticClass:"header"},[e("router-link",{attrs:{fst:"",tag:"span",to:"/"+t.company+"/message"}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-jiantou-copy"}})]),t._v("\n      返回\n    ")]),t._v(" "),e("span",{staticClass:"option",on:{click:t.toggle}},[t._v("···")])],1),t._v(" "),e("img",{staticClass:"avator-img",attrs:{src:t.myInfo.avatarUrl,onerror:t.defaultImg}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"mask"},[e("div",{staticClass:"btn-able",attrs:{id:"btn-able"}},[e("button",{staticClass:"local-photo",on:{click:t.upload}},[t._v("本地相册")]),t._v(" "),e("button",{staticClass:"take-photo",on:{click:t.init_camera}},[t._v("拍照")])]),t._v(" "),e("div",{staticClass:"btn-disable",attrs:{id:"btn-disable"}},[e("button",{staticClass:"cancel",on:{click:t.toggle}},[t._v("取消")])])])])},[],!1,function(t){e(258)},"data-v-b7c9eb30",null);a.default=s.exports}}]);