webpackJsonp([24],{dL95:function(e,a){},zoMU:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("woOf"),s=t.n(i),r=t("UNGY"),o=t("rHil"),n=t("wwIJ"),l=t("npJY"),c=(r.a,o.a,n.a,{components:{Datetime:r.a,Group:o.a,Selector:n.a},data:function(){return{degreesList:["","0.1","0.12","0.15","0.2","0.25","0.3","0.4","0.5","0.6","0.8","1.0","1.2","1.5","2.0","0.08","0.06","0.05","0.04","0.02","树指","手动","光感","无光感"],selectDataList:["","底向in","底向out","底向up","底向down"],medicineList:["","托吡卡胺","环戊通","阿托品","其他"],value1:"",value2:"",archive:{type:"callback_examination",examination_time:this.currentDate(),sphere_od:void 0,sphere_os:void 0,cylinder_od:void 0,cylinder_os:void 0,axis_od:void 0,axis_os:void 0,prism_od:void 0,prism_os:void 0,base_od:void 0,base_os:void 0,corrected_visual_acuity_od:void 0,corrected_visual_acuity_os:void 0,mydriatic_drugs:void 0,pupillary_distance_od:void 0,pupillary_distance_os:void 0,pupillary_distance_ou:void 0,wear_distance:void 0,wear_near:void 0,nearly_attached_add:void 0}}},created:function(){this.eye_examination_id=this.$route.query.eye_examination_id,this.getData()},methods:{getData:function(){var e=this;Object(l.b)({type:this.archive.type,eye_examination_id:this.eye_examination_id}).then(function(a){s()(e.archive,a.data)})},handleClickSave:function(){var e=this,a=this.archive;a.eye_examination_id=this.eye_examination_id,Object(l.a)(a).then(function(a){e.getData()})},currentDate:function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},log:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(e,a)},onConfirm:function(e){console.log("on-confirm arg",e),console.log("current value",this.value1)},change:function(e){console.log("change",e)}}}),v={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("p",[e._v("小瞳复光")]),e._v(" "),t("group",[t("datetime",{attrs:{title:"检查日期"},on:{"on-change":e.change,"on-cancel":function(a){return e.log("cancel")},"on-confirm":e.onConfirm,"on-hide":function(a){return e.log("hide",a)}},model:{value:e.archive.examination_time,callback:function(a){e.$set(e.archive,"examination_time",a)},expression:"archive.examination_time"}})],1),e._v(" "),t("div",{staticClass:"container"},[t("h3",{staticClass:"title"},[e._v("右眼OD")]),e._v(" "),t("ul",{staticClass:"list"},[t("li",[t("span",{staticClass:"left-bar"},[e._v("球镜 DS")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.sphere_od,expression:"archive.sphere_od"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.sphere_od},on:{input:function(a){a.target.composing||e.$set(e.archive,"sphere_od",a.target.value)}}})]),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("柱镜 DC")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.cylinder_od,expression:"archive.cylinder_od"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.cylinder_od},on:{input:function(a){a.target.composing||e.$set(e.archive,"cylinder_od",a.target.value)}}})]),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("轴向 AX")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.axis_od,expression:"archive.axis_od"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.axis_od},on:{input:function(a){a.target.composing||e.$set(e.archive,"axis_od",a.target.value)}}})]),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("棱镜 △")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.prism_od,expression:"archive.prism_od"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.prism_od},on:{input:function(a){a.target.composing||e.$set(e.archive,"prism_od",a.target.value)}}})]),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("底向Base")]),e._v(" "),t("selector",{staticClass:"input-group-lg",attrs:{options:e.degreesList,dir:"rtl",title:""},model:{value:e.archive.base_od,callback:function(a){e.$set(e.archive,"base_od",a)},expression:"archive.base_od"}})],1),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("矫正视力")]),e._v(" "),t("selector",{staticClass:"input-group-lg",attrs:{options:e.selectDataList,dir:"rtl",title:""},model:{value:e.archive.corrected_visual_acuity_od,callback:function(a){e.$set(e.archive,"corrected_visual_acuity_od",a)},expression:"archive.corrected_visual_acuity_od"}})],1),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("瞳距PD （ OU ）")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.pupillary_distance_od,expression:"archive.pupillary_distance_od"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.pupillary_distance_od},on:{input:function(a){a.target.composing||e.$set(e.archive,"pupillary_distance_od",a.target.value)}}})])]),e._v(" "),t("h3",{staticClass:"title"},[e._v("左眼OS")]),e._v(" "),t("ul",{staticClass:"list"},[t("li",[t("span",{staticClass:"left-bar"},[e._v("球镜 DS")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.sphere_os,expression:"archive.sphere_os"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.sphere_os},on:{input:function(a){a.target.composing||e.$set(e.archive,"sphere_os",a.target.value)}}})]),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("柱镜 DC")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.cylinder_os,expression:"archive.cylinder_os"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.cylinder_os},on:{input:function(a){a.target.composing||e.$set(e.archive,"cylinder_os",a.target.value)}}})]),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("轴向 AX")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.axis_os,expression:"archive.axis_os"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.axis_os},on:{input:function(a){a.target.composing||e.$set(e.archive,"axis_os",a.target.value)}}})]),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("棱镜 △")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.prism_os,expression:"archive.prism_os"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.prism_os},on:{input:function(a){a.target.composing||e.$set(e.archive,"prism_os",a.target.value)}}})]),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("底向Base")]),e._v(" "),t("selector",{staticClass:"input-group-lg",attrs:{options:e.degreesList,dir:"rtl",title:""},model:{value:e.archive.base_os,callback:function(a){e.$set(e.archive,"base_os",a)},expression:"archive.base_os"}})],1),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("矫正视力")]),e._v(" "),t("selector",{staticClass:"input-group-lg",attrs:{options:e.selectDataList,dir:"rtl",title:""},model:{value:e.archive.corrected_visual_acuity_os,callback:function(a){e.$set(e.archive,"corrected_visual_acuity_os",a)},expression:"archive.corrected_visual_acuity_os"}})],1),e._v(" "),t("li",[t("span",{staticClass:"left-bar"},[e._v("瞳距PD （ L ）")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.pupillary_distance_os,expression:"archive.pupillary_distance_os"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.pupillary_distance_os},on:{input:function(a){a.target.composing||e.$set(e.archive,"pupillary_distance_os",a.target.value)}}})]),e._v(" "),t("li")]),e._v(" "),t("button",{staticClass:"btn btn-margin",on:{click:e.handleClickSave}},[e._v("保    存")])])],1)},staticRenderFns:[]};var u=t("VU/8")(c,v,!1,function(e){t("dL95")},"data-v-4693aeba",null);a.default=u.exports}});
//# sourceMappingURL=24.c79cc55f0fc3a2e5b1e0.js.map