webpackJsonp([12],{C35m:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("7Ah8"),s=i("wwIJ"),_=i("UNGY"),l=i("rHil"),u=i("vLgD");function n(t){return Object(u.a)({url:"/api/m1/visual_acuity_tests",method:"post",data:t})}function c(t){return Object(u.a)({url:"/api/m1/visual_acuity_tests",method:"get",params:t})}e.a,s.a,_.a,l.a;var o={components:{PopupPicker:e.a,Selector:s.a,Datetime:_.a,Group:l.a},data:function(){return{degreesList:["","0.1","0.12","0.15","0.2","0.25","0.3","0.4","0.5","0.6","0.8","1.0","1.2","1.5","2.0","0.08","0.06","0.05","0.04","0.02","树指","手动","光感","无光感"],selectDataList:["","0.03","0.04","0.05","0.06","0.08","0.1","0.12","0.15","0.2","0.25","0.3","0.4","0.5","0.6","0.8","1.0","1.2"],value1:"",value2:"",eye_examination_id:void 0,visual_acuity_test:{examination_time:this.currentDate(),naked_eye_distant_visual_acuity_od:void 0,naked_eye_distant_visual_acuity_os:void 0,naked_eye_distant_visual_acuity_ou:void 0,naked_eye_near_visual_acuity_od:void 0,naked_eye_near_visual_acuity_os:void 0,naked_eye_near_visual_acuity_ou:void 0,wear_glass_distant_visual_acuity_od:void 0,wear_glass_distant_visual_acuity_os:void 0,wear_glass_distant_visual_acuity_ou:void 0}}},created:function(){this.eye_examination_id=this.$route.query.eye_examination_id,this.getData()},methods:{getData:function(){var t=this;c({eye_examination_id:this.eye_examination_id}).then(function(a){t.visual_acuity_test=a.data})},handleClickSave:function(){var t=this.visual_acuity_test;t.eye_examination_id=this.eye_examination_id,n(t).then(function(t){console.log("res data => ",t.data)})},currentDate:function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},handleClick:function(){console.log(this.value1[0],this.value2)},log:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(t,a)},onConfirm:function(t){console.log("on-confirm arg",t),console.log("current value",this.value1)},change:function(t){console.log("change",t)}}},r={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("p",[t._v("视力检查")]),t._v(" "),i("group",[i("datetime",{attrs:{title:"检查日期"},on:{"on-change":t.change,"on-cancel":function(a){return t.log("cancel")},"on-confirm":t.onConfirm,"on-hide":function(a){return t.log("hide",a)}},model:{value:t.visual_acuity_test.examination_time,callback:function(a){t.$set(t.visual_acuity_test,"examination_time",a)},expression:"visual_acuity_test.examination_time"}})],1),t._v(" "),i("div",{staticClass:"container"},[i("h3",{staticClass:"title"},[t._v("右眼OD")]),t._v(" "),i("ul",{staticClass:"list"},[i("li",[i("span",{staticClass:"left-bar"},[t._v("裸眼远视力")]),t._v(" "),i("selector",{staticClass:"input-group-lg",attrs:{options:t.degreesList,dir:"rtl",title:""},model:{value:t.visual_acuity_test.naked_eye_distant_visual_acuity_od,callback:function(a){t.$set(t.visual_acuity_test,"naked_eye_distant_visual_acuity_od",a)},expression:"visual_acuity_test.naked_eye_distant_visual_acuity_od"}})],1),t._v(" "),i("li",[i("span",{staticClass:"left-bar"},[t._v("戴镜远视力")]),t._v(" "),i("selector",{staticClass:"input-group-lg",attrs:{options:t.degreesList,dir:"rtl",title:""},model:{value:t.visual_acuity_test.wear_glass_distant_visual_acuity_od,callback:function(a){t.$set(t.visual_acuity_test,"wear_glass_distant_visual_acuity_od",a)},expression:"visual_acuity_test.wear_glass_distant_visual_acuity_od"}})],1),t._v(" "),i("li",[i("span",{staticClass:"left-bar",on:{click:t.handleClick}},[t._v("裸眼近视力")]),t._v(" "),i("selector",{staticClass:"input-group-lg",attrs:{options:t.selectDataList,dir:"rtl",title:""},model:{value:t.visual_acuity_test.naked_eye_near_visual_acuity_od,callback:function(a){t.$set(t.visual_acuity_test,"naked_eye_near_visual_acuity_od",a)},expression:"visual_acuity_test.naked_eye_near_visual_acuity_od"}})],1)]),t._v(" "),i("h3",{staticClass:"title"},[t._v("左眼OS")]),t._v(" "),i("ul",{staticClass:"list"},[i("li",[i("span",{staticClass:"left-bar"},[t._v("裸眼远视力")]),t._v(" "),i("selector",{staticClass:"input-group-lg",attrs:{options:t.degreesList,dir:"rtl",title:""},model:{value:t.visual_acuity_test.naked_eye_distant_visual_acuity_os,callback:function(a){t.$set(t.visual_acuity_test,"naked_eye_distant_visual_acuity_os",a)},expression:"visual_acuity_test.naked_eye_distant_visual_acuity_os"}})],1),t._v(" "),i("li",[i("span",{staticClass:"left-bar"},[t._v("戴镜远视力")]),t._v(" "),i("selector",{staticClass:"input-group-lg",attrs:{options:t.degreesList,dir:"rtl",title:""},model:{value:t.visual_acuity_test.wear_glass_distant_visual_acuity_os,callback:function(a){t.$set(t.visual_acuity_test,"wear_glass_distant_visual_acuity_os",a)},expression:"visual_acuity_test.wear_glass_distant_visual_acuity_os"}})],1),t._v(" "),i("li",[i("span",{staticClass:"left-bar",on:{click:t.handleClick}},[t._v("裸眼近视力")]),t._v(" "),i("selector",{staticClass:"input-group-lg",attrs:{options:t.selectDataList,dir:"rtl",title:""},model:{value:t.visual_acuity_test.naked_eye_near_visual_acuity_os,callback:function(a){t.$set(t.visual_acuity_test,"naked_eye_near_visual_acuity_os",a)},expression:"visual_acuity_test.naked_eye_near_visual_acuity_os"}})],1)]),t._v(" "),i("h3",{staticClass:"title"},[t._v("双眼OU")]),t._v(" "),i("ul",{staticClass:"list"},[i("li",[i("span",{staticClass:"left-bar"},[t._v("裸眼远视力")]),t._v(" "),i("selector",{staticClass:"input-group-lg",attrs:{options:t.degreesList,dir:"rtl",title:""},model:{value:t.visual_acuity_test.naked_eye_distant_visual_acuity_ou,callback:function(a){t.$set(t.visual_acuity_test,"naked_eye_distant_visual_acuity_ou",a)},expression:"visual_acuity_test.naked_eye_distant_visual_acuity_ou"}})],1),t._v(" "),i("li",[i("span",{staticClass:"left-bar"},[t._v("戴镜远视力")]),t._v(" "),i("selector",{staticClass:"input-group-lg",attrs:{options:t.degreesList,dir:"rtl",title:""},model:{value:t.visual_acuity_test.wear_glass_distant_visual_acuity_ou,callback:function(a){t.$set(t.visual_acuity_test,"wear_glass_distant_visual_acuity_ou",a)},expression:"visual_acuity_test.wear_glass_distant_visual_acuity_ou"}})],1),t._v(" "),i("li",[i("span",{staticClass:"left-bar",on:{click:t.handleClick}},[t._v("裸眼近视力")]),t._v(" "),i("selector",{staticClass:"input-group-lg",attrs:{options:t.selectDataList,dir:"rtl",title:""},model:{value:t.visual_acuity_test.naked_eye_near_visual_acuity_ou,callback:function(a){t.$set(t.visual_acuity_test,"naked_eye_near_visual_acuity_ou",a)},expression:"visual_acuity_test.naked_eye_near_visual_acuity_ou"}})],1),t._v(" "),i("li")]),t._v(" "),i("button",{staticClass:"btn btn-margin",on:{click:t.handleClickSave}},[t._v("保    存")])])],1)},staticRenderFns:[]};var v=i("VU/8")(o,r,!1,function(t){i("a2NA")},"data-v-cba6f57e",null);a.default=v.exports},a2NA:function(t,a){}});
//# sourceMappingURL=12.07244486eda026e57f5e.js.map