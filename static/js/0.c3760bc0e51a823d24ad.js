webpackJsonp([0],{"2hTa":function(t,e){},"56F5":function(t,e){},A5eC:function(t,e){},"H/si":function(t,e){},MpTN:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=new(s("7+uW").default),i={data:function(){return{collapse:!1,fullscreen:!1}},computed:{},methods:{collapseChage:function(){this.collapse=!this.collapse,n.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"collapse-btn",on:{click:this.collapseChage}},[e("i",{staticClass:"el-icon-menu"})]),this._v(" "),e("div",{staticClass:"logo"},[this._v("3D")]),this._v(" "),e("div",{staticClass:"header-right"},[e("div",{staticClass:"header-user-con"},[e("div",{staticClass:"btn-fullscreen",on:{click:this.handleFullScreen}},[e("el-tooltip",{attrs:{effect:"dark",content:this.fullscreen?"Cancel Full Screen":"Full Screen",placement:"bottom"}},[e("i",{staticClass:"el-icon-rank"})])],1)])])])},staticRenderFns:[]};var a={data:function(){return{collapse:!1,items:[{icon:"el-icon-setting",index:"home",title:"Home"},{icon:"el-icon-tickets",index:"collection",title:"Collection"},{icon:"el-icon-message",index:"manage",title:"Manage"},{icon:"el-icon-star-on",index:"about",title:"About"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;n.$on("collapse",function(e){t.collapse=e})}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,function(e){return[e.subs?[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.index}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])})],2)]:[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},staticRenderFns:[]};var c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,function(e,n){return s("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),s("span",{staticClass:"tags-li-icon",on:{click:function(e){t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)})),t._v(" "),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),t._v(" "),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},staticRenderFns:[]};var r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[t._m(0),t._v(" "),s("div",{staticClass:"footer-right"},[s("div",{staticClass:"word",on:{click:function(e){t.handleShow()}}},[t._v("Site Map Reference")])]),t._v(" "),s("el-dialog",{attrs:{title:"POPUP",visible:t.visible,width:"30%"},on:{"update:visible":function(e){t.visible=e}}},[t._v("\n        this is a pop up modal\n        "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("Cancel")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-left"},[e("span",{staticClass:"word"},[this._v("@ Web 3D Application 2018")])])}]};var u={data:function(){return{collapse:!1}},components:{vHead:s("VU/8")(i,l,!1,function(t){s("2hTa")},"data-v-ba3b3a70",null).exports,vSidebar:s("VU/8")(a,o,!1,function(t){s("A5eC")},"data-v-2a1879a2",null).exports,vTags:s("VU/8")({data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.path},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.path&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.path});this.tagsList=e},setTags:function(t){!this.tagsList.some(function(e){return e.path===t.path})&&this.tagsList.push({title:t.meta.title,path:t.path})},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){this.setTags(this.$route)}},c,!1,function(t){s("H/si")},null,null).exports,vFooter:s("VU/8")({data:function(){return{collapse:!1,fullscreen:!1,visible:!1}},computed:{},methods:{handleShow:function(){this.visible=!0}}},r,!1,function(t){s("56F5")},"data-v-39efa37c",null).exports},created:function(){var t=this;n.$on("collapse",function(e){t.collapse=e})}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("v-head"),this._v(" "),e("v-sidebar"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("v-tags"),this._v(" "),e("div",{staticClass:"content"},[e("transition",{attrs:{name:"move",mode:"out-in"}},[e("keep-alive",[e("router-view")],1)],1)],1)],1),this._v(" "),e("v-footer")],1)},staticRenderFns:[]},h=s("VU/8")(u,d,!1,null,null,null);e.default=h.exports}});