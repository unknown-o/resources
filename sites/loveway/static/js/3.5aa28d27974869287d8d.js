webpackJsonp([3],{vkyI:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("Cz8s"),s=a("vLgD"),r={data:function(){return{rData:[],title:"未知表白墙",subTitle:"主页",isLoading:!0,pageURL:"/",imgList:[]}},components:{headerComponent:e.a},methods:{getRandom:function(t,i){return Math.floor(Math.random()*(i-t)+t)},randomImage:function(){return"this.src='https://static.llilii.cn/images/kagamine/"+this.imgList.file_name[this.getRandom(0,this.imgList.file_num)]+"'"}},mounted:function(){Object(s.a)(this,{url:"https://static.llilii.cn/images/kagamine/img_list.json",method:"get"},function(t,i){t.imgList=i}),Object(s.a)(this,{url:"https://api.llilii.cn/loveway/getInfo.php",method:"get"},function(t,i){t.rData=i})}},d={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("headerComponent",{attrs:{title:t.title,subTitle:t.subTitle,isLoading:t.isLoading,pageURL:t.pageURL}}),t._v(" "),a("div",{staticClass:"mdui-container",staticStyle:{"max-width":"600px"}},[t.rData!=[]?a("div",t._l(t.rData,function(i){return a("div",[a("br"),a("br"),t._v(" "),a("div",{staticClass:"mdui-card mdui-hoverable",staticStyle:{"border-radius":"16px"}},[a("div",{staticClass:"mdui-card-header"},[a("img",{staticClass:"mdui-card-header-avatar",attrs:{src:i.avatar}}),t._v(" "),a("div",{staticClass:"mdui-card-header-title"},[t._v(t._s(i.confessor))]),t._v(" "),a("div",{staticClass:"mdui-card-header-subtitle"},[t._v(t._s(i.time))])]),t._v(" "),a("div",{staticClass:"mdui-card-media"},[""!=i.image?a("div",[a("img",{staticStyle:{"max-height":"1000px"},attrs:{onerror:t.randomImage(i.image),src:i.image}})]):a("div",[a("div",{staticClass:"mdui-divider"})])]),t._v(" "),a("div",{staticClass:"mdui-card-primary"},[a("div",{staticClass:"mdui-card-primary-title"},[t._v("To "+t._s(i.to))]),t._v(" "),a("div",{staticClass:"mdui-card-primary-subtitle"},[t._v("\n              "+t._s(i.introduction)+"\n            ")])]),t._v(" "),a("div",{staticClass:"mdui-card-content"},[t._v("\n            "+t._s(i.content)+"\n          ")])])])}),0):t._e(),t._v(" "),a("br"),a("br")])],1)},staticRenderFns:[]},n=a("VU/8")(r,d,!1,null,null,null);i.default=n.exports}});
//# sourceMappingURL=3.5aa28d27974869287d8d.js.map