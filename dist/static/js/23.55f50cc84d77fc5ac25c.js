webpackJsonp([23],{"A/E4":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("mvHQ"),s=e.n(n),a={data:function(){return{list:[{title:"视力检查",id:0},{title:"旧镜度数",id:1},{title:"电脑验光",id:2},{title:"小瞳验光",id:3},{title:"散瞳验光",id:4}]}},methods:{handleClick:function(t){var i=null;switch(t){case 0:i="list_vision";break;case 1:i="list_old_mirror";break;case 2:i="list_computer";break;case 3:i="list_hitomi";break;case 4:i="list_mydriasis"}this.$router.push({name:i,query:{data:s()()}})}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("ul",{staticClass:"list-ul"},t._l(t.list,function(i,n){return e("li",{key:n,on:{click:function(e){return t.handleClick(i.id)}}},[e("span",[t._v(t._s(i.title))]),t._v(" "),e("span",{staticClass:"icongengduo iconfont"})])}),0)])},staticRenderFns:[]};var r=e("VU/8")(a,l,!1,function(t){e("Yf42")},"data-v-2ea08562",null);i.default=r.exports},Yf42:function(t,i){}});
//# sourceMappingURL=23.55f50cc84d77fc5ac25c.js.map