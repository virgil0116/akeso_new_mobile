webpackJsonp([34],{"A/E4":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{eye_examination_id:void 0,list:[{title:"视力检查",id:0},{title:"旧镜度数",id:1},{title:"电脑验光",id:2},{title:"小瞳验光",id:3},{title:"散瞳验光",id:4}]}},created:function(){this.eye_examination_id=this.$route.query.eye_examination_id},methods:{handleClick:function(i){var t=null;switch(i){case 0:t="list_vision";break;case 1:t="list_old_mirror";break;case 2:t="list_computer";break;case 3:t="list_hitomi";break;case 4:t="list_mydriasis"}this.$router.push({name:t,query:{eye_examination_id:this.eye_examination_id}})}}},a={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"container"},[e("ul",{staticClass:"list-ul"},i._l(i.list,function(t,n){return e("li",{key:n,on:{click:function(e){return i.handleClick(t.id)}}},[e("span",[i._v(i._s(t.title))]),i._v(" "),e("span",{staticClass:"icongengduo iconfont"})])}),0)])},staticRenderFns:[]};var s=e("VU/8")(n,a,!1,function(i){e("GvLr")},"data-v-02364e3a",null);t.default=s.exports},GvLr:function(i,t){}});
//# sourceMappingURL=34.6cf219cdd76712893b73.js.map