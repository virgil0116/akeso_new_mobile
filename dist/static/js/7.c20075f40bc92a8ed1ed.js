webpackJsonp([7],{"4k5h":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("mvHQ"),i=n.n(o),s=n("W7dX"),a=n.n(s),l=n("te2A"),r={methods:{getLayout:function(){return"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout?"VIEW_BOX":""},addModalClassName:function(){"function"==typeof this.shouldPreventScroll&&this.shouldPreventScroll()||"VIEW_BOX"===this.getLayout()&&(l.a.addClass(document.body,"vux-modal-open"),l.a.addClass(document.querySelector("#vux_view_box_body"),"vux-modal-open-for-container"))},removeModalClassName:function(){"VIEW_BOX"===this.getLayout()&&(l.a.removeClass(document.body,"vux-modal-open"),l.a.removeClass(document.querySelector("#vux_view_box_body"),"vux-modal-open-for-container"))}},beforeDestroy:function(){this.removeModalClassName()},deactivated:function(){this.removeModalClassName()}},u=(Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[r],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var d=n("VU/8")(u,c,!1,function(t){n("6Erz")},null,null).exports,h=(Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:d},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-confirm"},[n("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?n("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var n=t.msg,o=e.target,i=!!o.checked;if(Array.isArray(n)){var s=t._i(n,null);o.checked?s<0&&(t.msg=n.concat([null])):s>-1&&(t.msg=n.slice(0,s).concat(n.slice(s+1)))}else t.msg=i}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?n("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var f=n("VU/8")(h,m,!1,function(t){n("PgbK")},null,null).exports,v=n("63CM"),p=(v.a,{name:"Child",directives:{TransferDom:v.a},components:{Confirm:f},data:function(){return{avatar:a.a,show:!1}},methods:{onCancel:function(){console.log("on cancel")},onConfirm:function(t){console.log("on confirm"),t&&alert(t)},onHide:function(){console.log("on hide")},onShow:function(){console.log("on show")},handleClick:function(){this.show=!0},handleChild:function(){console.log(111),this.$router.push({name:"child_details",query:{data:i()()}})},handleList:function(){this.$router.push({name:"classification",query:{data:i()()}})}}}),g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header",on:{click:t.handleChild}},[n("img",{staticClass:"avatar",attrs:{src:t.avatar,alt:""}}),t._v(" "),t._m(0),t._v(" "),n("span",{staticClass:"icongengduo iconfont btn-click"})]),t._v(" "),n("div",{staticClass:"list"},[t._m(1),t._v(" "),n("div",{staticClass:"item-list",on:{click:t.handleList}},[n("span",[t._v("屈光档案")]),t._v(" "),n("span",{staticClass:"icongengduo iconfont"})])]),t._v(" "),n("div",{staticClass:"btn-box"},[n("button",{staticClass:"btn",on:{click:t.handleClick}},[t._v("新建屈光档案")])]),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("confirm",{attrs:{title:"提示"},on:{"on-cancel":t.onCancel,"on-confirm":t.onConfirm,"on-show":t.onShow,"on-hide":t.onHide},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("p",{staticStyle:{"text-align":"center"}},[t._v("您确定要创建屈光档案嘛？")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("p",{staticClass:"name"},[this._v("名字")]),this._v(" "),e("span",[this._v("男")]),this._v(" "),e("span",[this._v("0岁")]),this._v(" "),e("span",[this._v("100CM")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"title"},[this._v("共有"),e("span",{staticClass:"c-blue"},[this._v("1")]),this._v("份屈光档案的报告")])}]};var _=n("VU/8")(p,g,!1,function(t){n("z5+7")},"data-v-e337cfe8",null);e.default=_.exports},"6Erz":function(t,e){},PgbK:function(t,e){},"z5+7":function(t,e){}});
//# sourceMappingURL=7.c20075f40bc92a8ed1ed.js.map