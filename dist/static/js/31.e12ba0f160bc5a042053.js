webpackJsonp([31],{evom:function(t,e){},lzGw:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("vLgD");function n(t){return Object(s.a)({url:"/api/m1/codes/sign_up_in",method:"get",params:t})}function o(t){return Object(s.a)({url:"/api/m1/users",method:"post",data:t})}var a={name:"SignIn",data:function(){return{doctor_id:this.$route.query.doctor_id,phoneNum:"",verifyNum:"",btnContent:"获取验证码",time:0,disabled:!1,toastShow:!1,toastText:"",user_id:void 0}},methods:{blur:function(t){this.$refs[t].scrollIntoView(!1)},handleClickLogin:function(){var t=this;/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phoneNum)?""!==this.verifyNum?o({phone:this.phoneNum,code:this.verifyNum}).then(function(e){t.user_id=e.data.userId,t.$router.push({path:"/child_select",query:{doctor_id:t.doctor_id,user_id:t.user_id}})}):this.toast("请输入验证码"):this.toast("手机号不合法")},sendSmsCode:function(){var t=this;this.phoneNum?/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phoneNum)?n({phone:this.phoneNum}).then(function(e){t.time=60,t.timer()}):this.toast("手机号不合法"):this.toast("请输入手机号码")},timer:function(){if(this.time>0){this.time--,this.btnContent=this.time+"s后重新获取",this.disabled=!0;var t=setTimeout(this.timer,1e3)}else 0===this.time&&(this.btnContent="获取验证码",clearTimeout(t),this.disabled=!1)},toast:function(t){var e=this;e.toastText=t,e.toastShow=!0,setTimeout(function(){e.toastShow=!1},1500)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"bg-banner"}),t._v(" "),i("div",{staticClass:"from-box"},[i("p",{staticClass:"title"},[t._v("请您输入手机号获取验证码登录后才能查看绑定机构/医生")]),t._v(" "),i("div",{staticClass:"phone-content"},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNum,expression:"phoneNum"}],ref:"input",staticClass:"phone-num border",attrs:{type:"number",placeholder:"请输入手机号码"},domProps:{value:t.phoneNum},on:{blur:function(e){return t.blur("input")},input:function(e){e.target.composing||(t.phoneNum=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"verify-box clearfix"},[i("div",{staticClass:"input-group",staticStyle:{width:"100%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.verifyNum,expression:"verifyNum"}],ref:"input",staticClass:"verify-num",attrs:{maxlength:"6",onkeyup:"this.value=this.value.replace(/[^\\d]/g,'')",type:"text",placeholder:"请输入验证码"},domProps:{value:t.verifyNum},on:{blur:function(e){return t.blur("input")},input:function(e){e.target.composing||(t.verifyNum=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"verify-btn"},[i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.btnContent,expression:"btnContent"}],staticClass:"verify",attrs:{type:"button"},domProps:{value:t.btnContent},on:{click:t.sendSmsCode,input:function(e){e.target.composing||(t.btnContent=e.target.value)}}},"input",{disabled:t.disabled},!1))])])])]),t._v(" "),i("button",{staticClass:"button",on:{click:t.handleClickLogin}},[t._v("登录")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.toastShow,expression:"toastShow"}],staticClass:"toast"},[t._v("\n    "+t._s(t.toastText)+"\n  ")])])},staticRenderFns:[]};var u=i("VU/8")(a,r,!1,function(t){i("evom")},"data-v-2a27d524",null);e.default=u.exports}});
//# sourceMappingURL=31.e12ba0f160bc5a042053.js.map