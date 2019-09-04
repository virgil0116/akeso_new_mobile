webpackJsonp([13],{"0rJ1":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("woOf"),s=a.n(i),o=a("UNGY"),r=a("rHil"),n=a("wwIJ"),c=a("rLAy"),l=a("npJY"),v=(o.a,r.a,n.a,c.a,{components:{Datetime:o.a,Group:r.a,Selector:n.a,Toast:c.a},data:function(){return{showPositionValue:!1,position:"default",toastText:"",text:"",degreesList:["","0.1","0.12","0.15","0.2","0.25","0.3","0.4","0.5","0.6","0.8","1.0","1.2","1.5","2.0","0.08","0.06","0.05","0.04","0.02","树指","手动","光感","无光感"],selectDataList:["","底向in","底向out","底向up","底向down"],medicineList:[{key:"",value:"无"},{key:"tropicamide",value:"托吡卡胺"},{key:"cyclopentadone",value:"环戊通"},{key:"atropine",value:"阿托品"},{key:"addition",value:"其他"}],eye_examination_id:void 0,archive:{type:"subjective_refraction",examination_time:this.currentDate(),sphere_od:void 0,sphere_os:void 0,cylinder_od:void 0,cylinder_os:void 0,axis_od:void 0,axis_os:void 0,prism_od:void 0,prism_os:void 0,base_od:void 0,base_os:void 0,corrected_visual_acuity_od:void 0,corrected_visual_acuity_os:void 0,mydriatic_drugs:void 0,pupillary_distance_od:void 0,pupillary_distance_os:void 0,pupillary_distance_ou:void 0,wear_distance:void 0,wear_near:void 0,nearly_attached_add:void 0}}},created:function(){this.eye_examination_id=this.$route.query.eye_examination_id,this.getData()},methods:{getData:function(){var e=this;Object(l.b)({type:this.archive.type,eye_examination_id:this.eye_examination_id}).then(function(t){s()(e.archive,t.data)})},handleClickSave:function(){var e=this,t=this.archive;t.eye_examination_id=this.eye_examination_id,Object(l.a)(t).then(function(t){"请求成功"===t.message&&200===t.status?(e.showPositionValue=!0,e.toastText="提交成功",e.text="success",e.timer=setTimeout(function(){e.$router.go(-1)},1e3)):(e.showPositionValue=!0,e.toastText="提交失败",e.text="warn")})},currentDate:function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},log:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(e,t)},onConfirm:function(e){console.log("on-confirm arg",e),console.log("current value",this.value1)},change:function(e){console.log("change",e)}}}),u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"tit-name"},[e._v("散瞳验光")]),e._v(" "),a("group",{staticClass:"tiems"},[a("datetime",{attrs:{title:"检查日期"},on:{"on-change":e.change,"on-cancel":function(t){return e.log("cancel")},"on-confirm":e.onConfirm,"on-hide":function(t){return e.log("hide",t)}},model:{value:e.archive.examination_time,callback:function(t){e.$set(e.archive,"examination_time",t)},expression:"archive.examination_time"}})],1),e._v(" "),a("div",{staticClass:"container"},[a("h3",{staticClass:"title"},[e._v("右眼OD")]),e._v(" "),a("ul",{staticClass:"list"},[a("li",[a("span",{staticClass:"left-bar"},[e._v("球镜 DS")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.sphere_od,expression:"archive.sphere_od"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.sphere_od},on:{input:function(t){t.target.composing||e.$set(e.archive,"sphere_od",t.target.value)}}})]),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("柱镜 DC")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.cylinder_od,expression:"archive.cylinder_od"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.cylinder_od},on:{input:function(t){t.target.composing||e.$set(e.archive,"cylinder_od",t.target.value)}}})]),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("轴向 AX")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.axis_od,expression:"archive.axis_od"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.axis_od},on:{input:function(t){t.target.composing||e.$set(e.archive,"axis_od",t.target.value)}}})]),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("棱镜 △")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.prism_od,expression:"archive.prism_od"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.prism_od},on:{input:function(t){t.target.composing||e.$set(e.archive,"prism_od",t.target.value)}}})]),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("底向Base")]),e._v(" "),a("selector",{staticClass:"input-group-lg",attrs:{options:e.degreesList,dir:"rtl",title:""},model:{value:e.archive.base_od,callback:function(t){e.$set(e.archive,"base_od",t)},expression:"archive.base_od"}})],1),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("矫正视力")]),e._v(" "),a("selector",{staticClass:"input-group-lg",attrs:{options:e.selectDataList,dir:"rtl",title:""},model:{value:e.archive.corrected_visual_acuity_od,callback:function(t){e.$set(e.archive,"corrected_visual_acuity_od",t)},expression:"archive.corrected_visual_acuity_od"}})],1)]),e._v(" "),a("h3",{staticClass:"title"},[e._v("左眼OS")]),e._v(" "),a("ul",{staticClass:"list"},[a("li",[a("span",{staticClass:"left-bar"},[e._v("球镜 DS")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.sphere_os,expression:"archive.sphere_os"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.sphere_os},on:{input:function(t){t.target.composing||e.$set(e.archive,"sphere_os",t.target.value)}}})]),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("柱镜 DC")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.cylinder_os,expression:"archive.cylinder_os"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.cylinder_os},on:{input:function(t){t.target.composing||e.$set(e.archive,"cylinder_os",t.target.value)}}})]),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("轴向 AX")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.axis_os,expression:"archive.axis_os"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.axis_os},on:{input:function(t){t.target.composing||e.$set(e.archive,"axis_os",t.target.value)}}})]),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("棱镜 △")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.archive.prism_os,expression:"archive.prism_os"}],staticClass:"input-group-lg",attrs:{type:"number"},domProps:{value:e.archive.prism_os},on:{input:function(t){t.target.composing||e.$set(e.archive,"prism_os",t.target.value)}}})]),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("底向Base")]),e._v(" "),a("selector",{staticClass:"input-group-lg",attrs:{options:e.degreesList,dir:"rtl",title:""},model:{value:e.archive.base_os,callback:function(t){e.$set(e.archive,"base_os",t)},expression:"archive.base_os"}})],1),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("矫正视力")]),e._v(" "),a("selector",{staticClass:"input-group-lg",attrs:{options:e.selectDataList,dir:"rtl",title:""},model:{value:e.archive.corrected_visual_acuity_os,callback:function(t){e.$set(e.archive,"corrected_visual_acuity_os",t)},expression:"archive.corrected_visual_acuity_os"}})],1),e._v(" "),a("li",[a("span",{staticClass:"left-bar"},[e._v("散瞳药物")]),e._v(" "),a("selector",{staticClass:"input-group-lg",attrs:{options:e.medicineList,dir:"rtl",title:""},model:{value:e.archive.mydriatic_drugs,callback:function(t){e.$set(e.archive,"mydriatic_drugs",t)},expression:"archive.mydriatic_drugs"}})],1)]),e._v(" "),a("button",{staticClass:"btn btn-margin",on:{click:e.handleClickSave}},[e._v("保    存")])]),e._v(" "),a("toast",{attrs:{time:1e3,position:e.position,text:e.toastText,type:e.text,"is-show-mask":""},model:{value:e.showPositionValue,callback:function(t){e.showPositionValue=t},expression:"showPositionValue"}})],1)},staticRenderFns:[]};var d=a("VU/8")(v,u,!1,function(e){a("re+4")},"data-v-f89491be",null);t.default=d.exports},"re+4":function(e,t){}});
//# sourceMappingURL=13.d9e762cff12b65720a48.js.map