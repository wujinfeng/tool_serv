(function(t){function e(e){for(var a,i,l=e[0],o=e[1],u=e[2],p=0,d=[];p<l.length;p++)i=l[p],r[i]&&d.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"2ee1":function(t,e,n){"use strict";var a=n("bf78"),r=n.n(a);r.a},"2f49":function(t,e,n){},"35b3":function(t,e,n){"use strict";var a=n("3638"),r=n.n(a);r.a},3638:function(t,e,n){},3914:function(t,e,n){"use strict";var a=n("4ddb"),r=n.n(a);r.a},"4ddb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("e382"),n("5aea");var a=n("2b0e"),r=n("5c96"),s=n.n(r),i=n("bc3a"),l=n.n(i),o=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:18}},[n("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.inputStr,callback:function(e){t.inputStr=e},expression:"inputStr"}})],1),n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-setting"},on:{click:t.submit}},[t._v("加密")])],1)],1),n("el-row",[n("el-table",{attrs:{border:"",data:t.tableData}},[n("el-table-column",{attrs:{prop:"name",label:"类型",width:"120"}}),n("el-table-column",{attrs:{prop:"str",label:"结果"}})],1)],1),n("el-row",{staticClass:"tip"},[n("p",[t._v("\n            MD5（中文名为消息摘要算法第五版）为计算机安全领域广泛使用的一种散列函数，用以提供消息的完整性保护。\n            该算法的文件号为RFC 1321（R.Rivest,MIT Laboratory for Computer Science and RSA Data Security Inc. April 1992）。\n        ")]),n("p",[t._v("\n            MD5即Message-Digest Algorithm\n            5（信息-摘要算法5），用于确保信息传输完整一致。是计算机广泛使用的杂凑算法之一（又译摘要算法、哈希算法），\n            主流编程语言普遍已有MD5实现。 将数据（如汉字）运算为另一固定长度值，是杂凑算法的基础原理，\n            MD5的前身有MD2、MD3和MD4。\n        ")]),n("p",[t._v("MD5算法具有以下特点：")]),n("ul",[n("li",[t._v("压缩性：任意长度的数据，算出的MD5值长度都是固定的。")]),n("li",[t._v("容易计算：从原数据计算出MD5值很容易。")]),n("li",[t._v("抗修改性：对原数据进行任何改动，哪怕只修改1个字节，所得到的MD5值都有很大区别。")]),n("li",[t._v("强抗碰撞：已知原数据和其MD5值，想找到一个具有相同MD5值的数据（即伪造数据）是非常困难的")])])])],1)},c=[],p=n("6821f"),d=n.n(p),f={name:"Md5",data:function(){return{inputStr:"",tableData:[{name:"字符串",str:""},{name:"32位小写",str:""},{name:"32位大写",str:""}]}},methods:{submit:function(){var t=d()(this.inputStr);this.tableData[0].str=this.inputStr,this.tableData[1].str=t.toLowerCase(),this.tableData[2].str=t.toUpperCase()}}},m=f,b=(n("35b3"),n("2877")),v=Object(b["a"])(m,u,c,!1,null,"16ac984b",null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("el-row",{attrs:{gutter:10}},[n("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.inputStr,callback:function(e){t.inputStr=e},expression:"inputStr"}})],1),n("el-row",[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-d-arrow-right"},on:{click:t.base64Encode}},[t._v("编码")]),n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-d-arrow-left"},on:{click:t.base64Decode}},[t._v("解码")])],1),n("el-row",[n("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1),n("el-row",{staticClass:"tip"},[n("p",[t._v("\n            Base64是网络上最常见的用于传输8Bit字节代码的编码方式之一，\n            在了解Base64编码之前，先了解几个基本概念：位、字节。\n        ")]),n("p",[t._v('\n            位："位(bit)"是计算机中最小的数据单位。每一位的状态只能是0或1；\n        ')]),n("p",[t._v('\n            字节：8个二进制位构成1个"字节(Byte)"，字节是存储空间的基本计量单位。\n            1个字节可以储存1个英文字母，2个字节可以存储1个汉字；\n        ')]),n("p",[t._v("Base64编码的作用")]),n("p",[t._v("\n            因为有些网络传送渠道并不支持所有的字节，例如传统的邮件只支持可见字符的传送，\n            像ASCII码的控制字符就不能通过邮件传送。这样就受到了很大的限制，\n            比如图片二进制流的每个字节不可能全部是可见字符，所以就传送不了。\n            最好的方法就是在不改变传统协议的情况下，开辟一种新的方案来支持二进制文件的传送。\n            把不可见字符用可见字符来表示。而Base64就是一种基于64个可见字符来表示二进制数据的表示方法。\n        ")])])],1)},_=[],w=n("27ae"),x={name:"Base64str",data:function(){return{inputStr:"",result:""}},methods:{base64Encode:function(){this.result=w["Base64"].encode(this.inputStr)},base64Decode:function(){this.result=w["Base64"].decode(this.inputStr)}}},y=x,S=(n("69dd"),Object(b["a"])(y,g,_,!1,null,"07b6b340",null)),j=S.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("el-row",{attrs:{gutter:10}},[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":t.change,"file-list":t.fileList,"auto-upload":!1}},[n("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",icon:"el-icon-upload"},slot:"trigger"},[t._v("\n                选取文件\n            ")]),n("span",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件")])],1)],1),n("el-row",[n("el-input",{attrs:{type:"textarea",rows:"10",placeholder:"请先上传图片"},model:{value:t.base64Result,callback:function(e){t.base64Result=e},expression:"base64Result"}})],1),n("el-row",[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-picture-outline"},on:{click:t.toImg}},[t._v("base64字符转为图片")])],1),n("el-row",[n("img",{attrs:{src:t.imgSrc}})]),n("el-row",{staticClass:"tip"},[n("ul",[n("li",[t._v("将图片转换为Base64编码，可以不用上传图片，即可保存到网页中。")]),n("li",[t._v('生成的代码为"data:image/jpeg;base64, ....."，你只需要全部复制插入到相应位置。')]),n("li",[t._v('CSS中使用：background-image: url("data:image/png;base64,BeRo0KLta=...");')]),n("li",[t._v('HTML中使用：<img src="data:image/png;base64,BeRo0KLta=..." />')])])])],1)},D=[],C={name:"Base64img",data:function(){return{base64Result:"",fileList:[],imgSrc:""}},mounted:function(){"undefined"===typeof FileReader&&alert("抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！")},methods:{toImg:function(){this.imgSrc=this.base64Result},change:function(t){var e=this;e.fileList=[],console.log(t),e.imgSrc="";var n=t.raw.type;if("image/png"===n||"image/jpg"===n){var a=new FileReader;a.onload=function(){e.base64Result=a.result},a.readAsDataURL(t.raw)}else e.$message.error("请上传支持的图片")}}},M=C,R=(n("2ee1"),Object(b["a"])(M,k,D,!1,null,"51655fb6",null)),O=R.exports;a["default"].use(o["a"]);var B=new o["a"]({routes:[{path:"/",component:h},{path:"/md5",component:h},{path:"/base64str",component:j},{path:"/base64img",component:O}]}),E=B,I=(n("0fae"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-header",[n("Header")],1),n("el-container",[n("el-main",[n("router-view")],1),n("el-aside",[n("Aside")],1)],1),n("el-footer",[n("Footer")],1)],1)],1)}),$=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#409EFF","text-color":"#dddddd",router:"","active-text-color":"#ffffff"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"/md5"}},[t._v("md5加密")]),n("el-submenu",{attrs:{index:""}},[n("template",{slot:"title"},[t._v("base64")]),n("el-menu-item",{attrs:{index:"/base64str"}},[t._v("加密解密")]),n("el-menu-item",{attrs:{index:"/base64img"}},[t._v("图片转换")])],2)],1)],1)},F=[],L={name:"Header",data:function(){return{activeIndex:"/md5"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},P=L,z=(n("3914"),Object(b["a"])(P,A,F,!1,null,"43db645c",null)),T=z.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("p",[t._v("©2018-2019 md5,base64在线工具 All Rights Reserved. | "),n("a",{attrs:{href:"http://www.miitbeian.gov.cn/"}},[t._v("京ICP备18032610号-1")])])])}],K={name:"Footer",data:function(){return{}},methods:{}},U=K,N=(n("b149"),Object(b["a"])(U,H,J,!1,null,"4653d469",null)),q=N.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("p",[t._v("推荐优质项目：")]),n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex}},[n("el-menu-item",{attrs:{index:"1"}},[n("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank"}},[t._v("vue.js")])]),n("el-menu-item",{attrs:{index:"2"}},[n("a",{attrs:{href:"https://webpack.js.org/",target:"_blank"}},[t._v("webpack.js")])]),n("el-menu-item",{attrs:{index:"3"}},[n("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank"}},[t._v("nodejs")])]),n("el-menu-item",{attrs:{index:"4"}},[n("a",{attrs:{href:"https://koa.bootcss.com/",target:"_blank"}},[t._v("koa.js")])]),n("el-menu-item",{attrs:{index:"5"}},[n("a",{attrs:{href:"https://expressjs.com/",target:"_blank"}},[t._v("expressjs")])]),n("el-menu-item",{attrs:{index:"6"}},[n("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/menu",target:"_blank"}},[t._v("饿了吗ui库")])]),n("el-menu-item",{attrs:{index:"7"}},[n("a",{attrs:{href:"http://www.bootcss.com/",target:"_blank"}},[t._v("Bootstrap")])])],1)],1)},Q=[],V={name:"Aside",data:function(){return{activeIndex:"1"}},methods:{}},W=V,X=(n("c55d"),Object(b["a"])(W,G,Q,!1,null,"317bd62a",null)),Y=X.exports,Z={name:"App",components:{Header:T,Footer:q,Aside:Y}},tt=Z,et=(n("034f"),Object(b["a"])(tt,I,$,!1,null,null,null)),nt=et.exports;a["default"].use(s.a),a["default"].config.productionTip=!1,a["default"].prototype.$axios=l.a,new a["default"]({router:E,render:function(t){return t(nt)}}).$mount("#app")},"5aea":function(t,e,n){},"64a9":function(t,e,n){},"69dd":function(t,e,n){"use strict";var a=n("d9f7"),r=n.n(a);r.a},b149:function(t,e,n){"use strict";var a=n("eb92"),r=n.n(a);r.a},bf78:function(t,e,n){},c55d:function(t,e,n){"use strict";var a=n("2f49"),r=n.n(a);r.a},d9f7:function(t,e,n){},e382:function(t,e,n){},eb92:function(t,e,n){}});
//# sourceMappingURL=app.cee00983.js.map