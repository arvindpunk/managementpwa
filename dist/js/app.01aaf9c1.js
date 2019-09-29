(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3354:function(e,t,a){"use strict";var n=a("f4ef"),o=a.n(n);o.a},"3dfe":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{dark:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{on:{click:function(t){return e.$router.push("/")}}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Home")])],1)],1),a("v-list-item-group",{attrs:{color:"primary"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}},e._l(e.items,(function(t,n){return a("v-list-item",{key:n,on:{click:function(a){return e.$router.push(t.path)}}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"indigo",dark:"",flat:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("The Database")])],1),a("router-view")],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"indigo",dark:"",flat:""}},[a("v-toolbar-title",[e._v("Management")])],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}})],1)],1),a("v-card-actions",[a("v-btn",{staticClass:"flex-grow-1",attrs:{color:"indigo white--text"},on:{click:e.tryLogin}},[e._v("Login")])],1)],1)],1)],1)],1)],1)},i=[],l=a("bc3a"),c=a.n(l),u={name:"Login",props:{source:String},data:()=>({drawer:null,user:null,pass:null}),methods:{tryLogin:function(){console.log(this.user),console.log(this.pass);let e=new FormData;e.set("username",this.user),e.set("password",this.pass);let t="";t="https://hospital-waste-management-app.herokuapp.com/",c()({method:"post",url:t+"login",data:e,crossdomain:!0,withCredentials:!0}).then(e=>{console.log(e.data),console.log(e.headers),console.log(e.statusText),console.log(e.config),this.$router.push("/staff")}).catch(e=>{console.log("ERROR: "+e)})}}},d=u,p=(a("9285"),a("2877")),f=a("6544"),v=a.n(f),m=a("8336"),h=a("b0af"),g=a("99d9"),b=a("62ad"),w=a("a523"),y=a("a75b"),x=a("4bd4"),V=a("0fd9"),_=a("8654"),k=a("71d9"),C=a("2a7f"),O=Object(p["a"])(d,s,i,!1,null,"e99baa64",null),S=O.exports;v()(O,{VBtn:m["a"],VCard:h["a"],VCardActions:g["a"],VCardText:g["b"],VCol:b["a"],VContainer:w["a"],VContent:y["a"],VForm:x["a"],VRow:V["a"],VTextField:_["a"],VToolbar:k["a"],VToolbarTitle:C["a"]});var T={name:"App",data:()=>({drawer:null,item:3,items:[{title:"Bin Data",icon:"mdi-contact-mail",path:"/bin"},{title:"Staff Data",icon:"mdi-contact-mail",path:"/staff"},{title:"Inventory",icon:"mdi-contact-mail",path:"/inventory"}]})},j=T,I=(a("3354"),a("7496")),L=a("40dc"),D=a("5bc1"),P=a("132d"),A=a("8860"),E=a("da13"),F=a("1800"),R=a("5d23"),$=a("1baa"),B=a("f774"),N=Object(p["a"])(j,o,r,!1,null,"e7e0b73c",null),M=N.exports;v()(N,{VApp:I["a"],VAppBar:L["a"],VAppBarNavIcon:D["a"],VIcon:P["a"],VList:A["a"],VListItem:E["a"],VListItemAction:F["a"],VListItemContent:R["a"],VListItemGroup:$["a"],VListItemTitle:R["b"],VNavigationDrawer:B["a"],VToolbarTitle:C["a"]});var W=a("8c4f"),J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-content",{staticClass:"ma-3"},[a("v-card",[a("v-card-title",[e._v("Bin Information")]),a("v-text-field",{staticClass:"ma-3",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,search:e.search}})],1)],1)},q=[],G={props:{source:String},data:()=>({drawer:null,headers:[{text:"Bin ID",value:"binID"},{text:"Location",value:"location"}],items:[{binID:"a6g23gsd",location:"FF-13",history:[{content:"Syringe",contentType:"Reusable",timestamp:"28 Sep 2018 20:55:42"}]}]})},H=G,U=a("8fea"),z=Object(p["a"])(H,J,q,!1,null,null,null),K=z.exports;v()(z,{VCard:h["a"],VCardTitle:g["c"],VContent:y["a"],VDataTable:U["a"],VTextField:_["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-content",{staticClass:"ma-3"},[a("v-card",[a("v-card-title",[e._v("Staff Information")]),a("v-text-field",{staticClass:"ma-3",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,search:e.search}})],1)],1)},X=[],Y={props:{source:String},mounted(){let e="";e="https://hospital-waste-management-app.herokuapp.com/",c()({method:"get",url:e+"user/score",crossdomain:!0}).then(e=>{console.log("RESPONSE: "+e.data)}).catch(e=>{console.log("ERROR: "+e)})},data:()=>({drawer:null,headers:[{text:"Staff ID",value:"staffid",align:"left"},{text:"Awareness Score",value:"score"}],items:[{staffid:"Wenxuan",score:"101"},{staffid:"Utkarsh",score:"70"},{staffid:"Wintersea",score:"95"}]})},Z=Y,ee=Object(p["a"])(Z,Q,X,!1,null,null,null),te=ee.exports;v()(ee,{VCard:h["a"],VCardTitle:g["c"],VContent:y["a"],VDataTable:U["a"],VTextField:_["a"]});var ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-content",[a("div",{staticClass:"pa-3"},[a("h1",[e._v("Inventory - Work In Progress")])])])},ne=[],oe={name:"Inventory",props:{source:String},data:()=>({drawer:null})},re=oe,se=Object(p["a"])(re,ae,ne,!1,null,null,null),ie=se.exports;v()(se,{VContent:y["a"]});var le=a("0628"),ce=a.n(le);n["a"].use(W["a"]),n["a"].use(ce.a);const ue=new W["a"]({mode:"hash",base:"/",routes:[{path:"/",component:S},{path:"/bin",component:K},{path:"/staff",component:te},{path:"/inventory",component:ie}]});var de=ue,pe=a("9483");Object(pe["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var fe=a("f309");n["a"].use(fe["a"]);var ve=new fe["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({router:de,vuetify:ve,render:e=>e(M)}).$mount("#app")},9285:function(e,t,a){"use strict";var n=a("3dfe"),o=a.n(n);o.a},f4ef:function(e,t,a){}});
//# sourceMappingURL=app.01aaf9c1.js.map