webpackJsonp([4],{"+vrq":function(e,t){},C98X:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("pFYg"),s=i.n(n),r=i("WL3N"),a=i("rHil"),c=i("EmH9"),l=i("etVR"),u=i("oWtu"),o=(a.a,c.a,l.a,u.a,{name:"ChildSelect",components:{Group:a.a,CheckIcon:c.a,Checklist:l.a,Icon:u.a},data:function(){return{test:[],currentValue:[],children:[],child_id:void 0,user_id:this.$route.query.user_id,doctor_id:this.$route.query.doctor_id,checked_list:[],toastShow:!1,toastText:""}},created:function(){this.getList()},methods:{getList:function(){var e=this;Object(r.d)({user_id:this.user_id}).then(function(t){e.children=t.data.items,console.log("chidlren => ",s()(e.children)),console.log("chidlren => ",e.children)})},handleClickAdd:function(){this.$router.push({path:"/create_child",query:{user_id:this.user_id,doctor_id:this.doctor_id}})},handleClickNext:function(){var e=this;if(void 0===this.child_id)return console.log("请选择儿童"),void this.toast("请选择儿童");Object(r.a)({child_id:this.child_id,doctor_id:this.doctor_id}).then(function(t){e.$router.push({path:"/bind_success",query:{child_id:e.child_id}})})},change:function(e,t){var i=this.currentValue.length;i>1&&(this.currentValue=[this.currentValue[i-1]]),this.child_id=this.currentValue[0],console.log("currentValue => ",this.currentValue),console.log("change",e,t)},toast:function(e){var t=this;t.toastText=e,t.toastShow=!0,setTimeout(function(){t.toastShow=!1},1500)}}}),h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[e._m(0),e._v(" "),i("div",{staticClass:"list"},[i("group",[i("Checklist",{attrs:{options:e.test,max:1},model:{value:e.checked_list,callback:function(t){e.checked_list=t},expression:"checked_list"}})],1),e._v(" "),i("group",[i("div",{staticClass:"-weui-cells weui-cells_checkbox"},e._l(e.children,function(t){return i("label",{key:t.id,class:t.bindState?"weui-cell weui-check_label b-disabled":"weui-cell weui-check_label"},[i("div",{staticClass:"weui-cell__hd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-check",attrs:{name:t.name,disabled:t.bindState,type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.currentValue)?e._i(e.currentValue,t.id)>-1:e.currentValue},on:{change:[function(i){var n=e.currentValue,s=i.target,r=!!s.checked;if(Array.isArray(n)){var a=t.id,c=e._i(n,a);s.checked?c<0&&(e.currentValue=n.concat([a])):c>-1&&(e.currentValue=n.slice(0,c).concat(n.slice(c+1)))}else e.currentValue=r},e.change]}}),e._v(" "),i("i",{class:t.bindState?"weui-icon weui_icon_success weui-icon-success":"weui-icon-checked vux-checklist-icon-checked"})]),e._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("p",[e._v(e._s(t.name)+" "+e._s(t.doctorName))])])])}),0)])],1),e._v(" "),i("button",{staticClass:"button",on:{click:e.handleClickAdd}},[e._v("创建孩子")]),e._v(" "),i("button",{staticClass:"button",on:{click:e.handleClickNext}},[e._v("下一步")]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.toastShow,expression:"toastShow"}],staticClass:"toast"},[e._v("\n    "+e._s(e.toastText)+"\n  ")])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("p",{staticClass:"title"},[this._v("您已注册成为AKESO的用户，")]),this._v(" "),t("p",{staticClass:"title"},[this._v("请您选择您需要绑定机构的孩子。")])])}]};var d=i("VU/8")(o,h,!1,function(e){i("zg6k")},"data-v-dfafad1c",null);t.default=d.exports},HHx2:function(e,t,i){"use strict";e.exports=function(e){if(!Array.isArray(e))throw new TypeError("Expected Array, got "+typeof e);for(var t,i,n=e.length,s=e.slice();n;)t=Math.floor(Math.random()*n--),i=s[n],s[n]=s[t],s[t]=i;return s}},dpWl:function(e,t){},etVR:function(e,t,i){"use strict";var n=i("fZjL"),s=i.n(n),r=i("mvHQ"),a=i.n(r),c=i("f6Hi"),l=(String,{name:"tip",props:{align:{type:String,default:"left"}}}),u={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vux-group-tip",style:{"text-align":this.align}},[this._t("default")],2)},staticRenderFns:[]};var o=i("VU/8")(l,u,!1,function(e){i("dpWl")},null,null).exports,h=i("oWtu"),d=i("kbG3"),_=i("q5lo"),v=i("HHx2"),m=i.n(v);h.a,d.a,_.e,_.b,c.a,String,Boolean,String,Boolean,Array,Array,Number,Number,Boolean,Boolean,Boolean,String,Boolean,_.e,_.b,_.a;var f={name:"checklist",components:{Tip:o,Icon:h.a,InlineDesc:d.a},filters:{getValue:_.e,getKey:_.b},mixins:[c.a],props:{name:String,showError:Boolean,title:String,required:{type:Boolean,default:!1},options:{type:Array,required:!0},value:{type:Array,default:function(){return[]}},max:Number,min:Number,fillMode:Boolean,randomOrder:Boolean,checkDisabled:{type:Boolean,default:!0},labelPosition:{type:String,default:"right"},disabled:Boolean},data:function(){return{currentValue:[],currentOptions:this.options,tempValue:""}},beforeUpdate:function(){if(this.isRadio){var e=this.currentValue.length;e>1&&(this.currentValue=[this.currentValue[e-1]]);var t=p(this.currentValue);this.tempValue=t.length?t[0]:""}},created:function(){this.handleChangeEvent=!0,this.value&&(this.currentValue=this.value,this.isRadio&&(this.tempValue=this.isRadio?this.value[0]:this.value)),this.randomOrder?this.currentOptions=m()(this.options):this.currentOptions=this.options},methods:{getValue:_.e,getKey:_.b,getInlineDesc:_.a,getFullValue:function(){var e=Object(_.d)(this.options,this.value);return this.currentValue.map(function(t,i){return{value:t,label:e[i]}})},isDisabled:function(e){return!!this.checkDisabled&&(this._max>1&&(-1===this.currentValue.indexOf(e)&&this.currentValue.length===this._max))}},computed:{isRadio:function(){return void 0!==this.max&&1===this.max},_total:function(){return this.fillMode?this.options.length+1:this.options.length},_min:function(){if(!this.required&&!this.min)return 0;if(!this.required&&this.min)return Math.min(this._total,this.min);if(this.required){if(this.min){var e=Math.max(1,this.min);return Math.min(this._total,e)}return 1}},_max:function(){return(this.required||this.max)&&this.max?this.max>this._total?this._total:this.max:this._total},valid:function(){return this.currentValue.length>=this._min&&this.currentValue.length<=this._max}},watch:{tempValue:function(e){var t=e?[e]:[];this.$emit("input",t),this.$emit("on-change",t,Object(_.d)(this.options,t))},value:function(e){a()(e)!==a()(this.currentValue)&&(this.currentValue=e)},options:function(e){this.currentOptions=e},currentValue:function(e){var t=p(e);if(!this.isRadio){this.$emit("input",t),this.$emit("on-change",t,Object(_.d)(this.options,t));var i={};this._min&&(this.required?this.currentValue.length<this._min&&(i={min:this._min}):this.currentValue.length&&this.currentValue.length<this._min&&(i={min:this._min})),!this.valid&&this.dirty&&s()(i).length?this.$emit("on-error",i):this.$emit("on-clear-error")}}}};function p(e){return JSON.parse(a()(e))}var g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.disabled?"vux-checklist-disabled":""},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],staticClass:"weui-cells__title"},[e._v(e._s(e.title))]),e._v(" "),e._t("after-title"),e._v(" "),i("div",{staticClass:"weui-cells weui-cells_checkbox"},e._l(e.currentOptions,function(t,n){return i("label",{staticClass:"weui-cell weui-check_label",class:{"vux-checklist-label-left":"left"===e.labelPosition},attrs:{for:"checkbox_"+e.uuid+"_"+n}},[i("div",{staticClass:"weui-cell__hd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-check",attrs:{type:"checkbox",name:"vux-checkbox-"+e.uuid,id:e.disabled?"":"checkbox_"+e.uuid+"_"+n,disabled:e.isDisabled(e.getKey(t))},domProps:{value:e.getKey(t),checked:Array.isArray(e.currentValue)?e._i(e.currentValue,e.getKey(t))>-1:e.currentValue},on:{change:function(i){var n=e.currentValue,s=i.target,r=!!s.checked;if(Array.isArray(n)){var a=e.getKey(t),c=e._i(n,a);s.checked?c<0&&(e.currentValue=n.concat([a])):c>-1&&(e.currentValue=n.slice(0,c).concat(n.slice(c+1)))}else e.currentValue=r}}}),e._v(" "),i("i",{staticClass:"weui-icon-checked vux-checklist-icon-checked"})]),e._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("p",{domProps:{innerHTML:e._s(e.getValue(t))}}),e._v(" "),e.getInlineDesc(t)?i("inline-desc",[e._v(e._s(e.getInlineDesc(t)))]):e._e()],1)])}),0),e._v(" "),e._t("footer")],2)},staticRenderFns:[]};var b=i("VU/8")(f,g,!1,function(e){i("+vrq")},null,null);t.a=b.exports},zg6k:function(e,t){}});
//# sourceMappingURL=4.231c06e97c9093afee79.js.map