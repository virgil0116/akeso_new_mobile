webpackJsonp([4],{"/OYK":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("vLgD");function s(t){return Object(e.a)({url:"/api/m1/doctors/"+t.id,method:"get",params:t})}var r=i("W7dX"),n=i.n(r),d={name:"Doctor",data:function(){return{id:this.$route.query.id,doctor:{id:void 0,workingYears:void 0,name:void 0,description:void 0},avatar:n.a,btnText:""}},created:function(){this.getData()},methods:{handleClickBind:function(){this.$router.push({path:"/sign_in",query:{doctor_id:this.id}})},getData:function(){var t=this;s({id:this.id}).then(function(a){t.doctor=a.data,t.$store.state.doctor=a.data.baseType,t.btnText="doctor"===a.data.baseType?"绑定此视光师":"绑定此机构"})}}},o={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"header-img"},[i("img",{staticClass:"img",attrs:{src:t.doctor.avatarUrl?t.doctor.avatarUrl:t.avatar,alt:""}})])]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[t._v(t._s(t.doctor.name))]),t._v(" "),i("div",{staticClass:"title"}),t._v(" "),void 0!==t.doctor.serviceNames&&t.doctor.serviceNames.length>0?i("div",{staticClass:"details details-span"},[i("span",[t._v("业务擅长：")]),t._l(t.doctor.serviceNames,function(a,e){return i("span",{key:e},[t._v(t._s(a)+"；")])})],2):t._e(),t._v(" "),i("div",{staticClass:"details"},[t._v(t._s(t.doctor.description))])]),t._v(" "),i("button",{staticClass:"button",on:{click:t.handleClickBind}},[t._v(t._s(t.btnText))])])},staticRenderFns:[]};var c=i("VU/8")(d,o,!1,function(t){i("Y33d")},"data-v-352a82fb",null);a.default=c.exports},W7dX:function(t,a,i){t.exports=i.p+"static/img/header-avatar.6b07044.png"},Y33d:function(t,a){}});
//# sourceMappingURL=4.1934770568d8df2801ed.js.map