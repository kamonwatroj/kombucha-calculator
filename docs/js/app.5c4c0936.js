(function(e){function t(t){for(var a,n,o=t[0],c=t[1],l=t[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,n=1;n<r.length;n++){var c=r[n];0!==s[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},s={app:0},i=[];function n(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d03acf49"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=s[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}s[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"slide-left"}},[r("router-view")],1)],1)},i=[],n={},o=n,c=(r("e043"),r("2877")),l=Object(c["a"])(o,s,i,!1,null,"ce9e3504",null),u=l.exports,d=(r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("section",{staticClass:"hero is-fullheight"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("Header"),r("Form"),r("Recipe"),r("Footer")],1)])])])},h=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("article",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("div",{staticClass:"content"},[r("div",{staticClass:"field"},[r("label",{staticClass:"label"},[e._v(e._s(e.$t("water")))]),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.water,expression:"water",modifiers:{lazy:!0}},{name:"money",rawName:"v-money",value:e.liters,expression:"liters"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("water")},domProps:{value:e.water},on:{keyup:function(t){return e.updateWater()},change:function(t){e.water=t.target.value}}})]),"0.00 L"!==e.water&&"0,00 L"!==e.water?r("p",{staticClass:"help"},[e._v(e._s(e.$t("waterRatioMessage",[e.waterProportion(.1),e.waterProportion(.9)])))]):e._e()]),r("div",{staticClass:"field"},[r("label",{staticClass:"label"},[e._v(e._s(e.$t("sugar")))]),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.sugar,expression:"sugar",modifiers:{lazy:!0}},{name:"money",rawName:"v-money",value:e.grams,expression:"grams"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("sugar")},domProps:{value:e.sugar},on:{keyup:function(t){return e.updateSugar()},change:function(t){e.sugar=t.target.value}}})])]),r("div",{staticClass:"field"},[r("label",{staticClass:"label"},[e._v(e._s(e.$t("tea")))]),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.tea,expression:"tea",modifiers:{lazy:!0}},{name:"money",rawName:"v-money",value:e.grams,expression:"grams"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("")},domProps:{value:e.tea},on:{keyup:function(t){return e.updateTea()},change:function(t){e.tea=t.target.value}}})])]),r("div",{staticClass:"field"},[r("label",{staticClass:"label"},[e._v("Starter")]),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.starter,expression:"starter",modifiers:{lazy:!0}},{name:"money",rawName:"v-money",value:e.liters,expression:"liters"}],staticClass:"input",attrs:{type:"text",placeholder:"Starter"},domProps:{value:e.starter},on:{keyup:function(t){return e.updateStarter()},change:function(t){e.starter=t.target.value}}})])]),r("div",{staticClass:"is-divider"}),r("div",{staticClass:"field"},[r("label",{staticClass:"label"},[e._v(e._s(e.$t("yields")))]),r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.yields,expression:"yields",modifiers:{lazy:!0}},{name:"money",rawName:"v-money",value:e.liters,expression:"liters"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("yields")},domProps:{value:e.yields},on:{change:function(t){e.yields=t.target.value}}})])])])])])])},f=[],b=(r("a4d3"),r("4de4"),r("4160"),r("b680"),r("e439"),r("dbb4"),r("b64b"),r("acd8"),r("ac1f"),r("5319"),r("159b"),r("2fa7")),v=r("716b"),g=r("2f62");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={name:"KombuchaForm",directives:{money:v["VMoney"]},computed:y({},Object(g["b"])(["recipe"])),data:function(){var e,t,r="";return"pt-br"===this.$route.query.l?(e=",",t=".",r="pt-br"):(e=".",t=",",r="en-us"),{lang:r,water:0,sugar:0,tea:0,starter:0,yields:0,liters:{decimal:e,thousands:t,suffix:" L",precision:2},grams:{decimal:e,thousands:t,suffix:" g",precision:0}}},methods:{toNumber:function(e){if("string"===typeof e)return"en-us"===this.lang?parseFloat(e.replace(/,/g,"")):parseFloat(e.replace(/\./g,"").replace(/,/g,"."))},waterProportion:function(e){var t=this.toNumber(this.water)*e;return t=t<1?(1e3*t).toFixed(0)+" mL":t.toFixed(2)+" L","pt-br"===this.lang&&(t=t.replace(/\./,",")),t},updateWater:function(){this.starter=(this.toNumber(this.water)*this.recipe.starter).toFixed(2),this.sugar=(this.toNumber(this.water)*this.recipe.sugar*10).toFixed(2),this.tea=(this.toNumber(this.water)*this.recipe.tea*10).toFixed(2),this.yields=(this.toNumber(this.water)+this.toNumber(this.water)*this.recipe.starter).toFixed(2)},updateSugar:function(){this.water=(this.toNumber(this.sugar)*(this.recipe.water/this.recipe.sugar/1e3)).toFixed(2),this.starter=(this.toNumber(this.sugar)*(this.recipe.starter/this.recipe.sugar/1e3)).toFixed(2),this.tea=(this.toNumber(this.sugar)*(this.recipe.tea/this.recipe.sugar/100)).toFixed(2),this.yields=(this.toNumber(this.water)+this.toNumber(this.water)*this.recipe.starter).toFixed(2)},updateTea:function(){this.water=(this.toNumber(this.tea)*(this.recipe.water/this.recipe.tea/1e3)).toFixed(2),this.starter=(this.toNumber(this.tea)*(this.recipe.starter/this.recipe.tea/1e3)).toFixed(2),this.sugar=(this.toNumber(this.tea)*(this.recipe.sugar/this.recipe.tea/100)).toFixed(2),this.yields=(this.toNumber(this.water)+this.toNumber(this.water)*this.recipe.starter).toFixed(2)},updateStarter:function(){this.water=(this.toNumber(this.starter)*(this.recipe.water/this.recipe.starter)).toFixed(2),this.tea=(this.toNumber(this.starter)*(this.recipe.tea/this.recipe.starter*10)).toFixed(2),this.sugar=(this.toNumber(this.starter)*(this.recipe.sugar/this.recipe.starter*10)).toFixed(2),this.yields=(this.toNumber(this.water)+this.toNumber(this.water)*this.recipe.starter).toFixed(2)}}},C=_,x=Object(c["a"])(C,m,f,!1,null,null,null),O=x.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("article",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("div",{staticClass:"content"},[e._m(0),r("h2",{staticClass:"is-size-5 has-text-weight-light"},[e._v(" "+e._s(e.$t("basedOn"))+" "),r("a",{attrs:{href:"https://www.reddit.com/r/Kombucha/comments/9udpx6/faq_and_master_recipe_check_here_first/",target:"_blank"}},[e._v(e._s(e.$t("kombuchaRecipe")))])])])])])])},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"title"},[r("a",{attrs:{href:"https://github.com/amimaro/kombucha-calculator",target:"_blank"}},[e._v("Kombucha Calculator")])])}],P={name:"KombuchaHeader"},F=P,$=Object(c["a"])(F,j,N,!1,null,null,null),k=$.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("article",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("div",{staticClass:"content has-text-centered"},[r("strong",[e._v("2019 amimaro")]),r("a",{attrs:{href:"https://github.com/amimaro",target:"_blank"}},[r("span",{staticClass:"icon is-medium"},[r("i",{staticClass:"fab fa-github"})])]),r("a",{attrs:{href:"https://www.instagram.com/amir.zln/",target:"_blank"}},[r("span",{staticClass:"icon is-medium"},[r("i",{staticClass:"fab fa-instagram"})])])])])])])}],z={name:"KombuchaFooter"},R=z,L=Object(c["a"])(R,S,E,!1,null,null,null),D=L.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("article",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("div",{staticClass:"content"},[r("h2",{staticClass:"is-size-5 has-text-weight-light"},[e._v(e._s(e.$t("recipe")))]),r("div",{staticClass:"columns is-centered"},[r("div",{staticClass:"column is-one-third"},[r("table",{staticClass:"table is-narrow is-striped"},[r("thead",[r("tr",[r("th",[e._v(e._s(e.$t("ingredient")))]),r("th",{staticClass:"has-text-right"},[e._v(e._s(e.$t("quantity")))])])]),r("tbody",[r("tr",[r("td",[e._v(e._s(e.$t("water")))]),r("td",{staticClass:"has-text-right"},[e._v(e._s(e.recipe.water)+" L")])]),r("tr",[r("td",[e._v(e._s(e.$t("sugar")))]),r("td",{staticClass:"has-text-right"},[e._v(e._s(1e3*e.recipe.sugar)+" g")])]),r("tr",[r("td",[e._v(e._s(e.$t("tea")))]),r("td",{staticClass:"has-text-right"},[e._v(e._s(1e3*e.recipe.tea)+" g")])]),r("tr",[r("td",[e._v("Starter")]),r("td",{staticClass:"has-text-right"},[e._v(e._s(1e3*e.recipe.starter)+" mL")])])])])])])])])])])},M=[];function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A={name:"KombuchaRecipe",computed:q({},Object(g["b"])(["recipe"]))},H=A,W=Object(c["a"])(H,K,M,!1,null,null,null),I=W.exports,J={name:"home",components:{Header:k,Form:O,Recipe:I,Footer:D}},Q=J,B=(r("faff"),Object(c["a"])(Q,p,h,!1,null,"6e7c3511",null)),U=B.exports;a["a"].use(d["a"]);var V=[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],Y=new d["a"]({mode:"history",base:"",routes:V}),G=Y;a["a"].use(g["a"]);var X=new g["a"].Store({state:{recipe:{water:1,sugar:.07,tea:.006,starter:.1}},mutations:{},actions:{},modules:{}}),Z=r("9483");Object(Z["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("3ca3"),r("ddb0"),r("2b3d");var ee=r("a925"),te={water:"Water",sugar:"Sugar",tea:"Tea",yields:"Yields",recipe:"Recipe",ingredient:"Ingredient",quantity:"Quantity",basedOn:"based on",kombuchaRecipe:"/r/Kombucha",waterRatioMessage:"Considering {0} for the concentrated tea and {1} of cold water."},re={water:"Água",sugar:"Açucar",tea:"Chá",yields:"Rendimento",recipe:"Receita",ingredient:"Ingrediente",quantity:"Quantidade",basedOn:"baseado em",kombuchaRecipe:"/r/Kombucha",waterRatioMessage:"Considerando {0} para o chá concentrado e {1} de água gelada."},ae={"en-us":te,"pt-br":re};a["a"].use(ee["a"]);var se=window.location.href,ie=new URL(se),ne=ie.searchParams.get("l"),oe=new ee["a"]({locale:ne||"en-us",fallbackLocale:"en-us",messages:ae});a["a"].config.productionTip=!1,r("5aea"),new a["a"]({router:G,store:X,i18n:oe,render:function(e){return e(u)}}).$mount("#app")},"5aea":function(e,t,r){},"654a":function(e,t,r){},a350:function(e,t,r){},e043:function(e,t,r){"use strict";var a=r("a350"),s=r.n(a);s.a},faff:function(e,t,r){"use strict";var a=r("654a"),s=r.n(a);s.a}});
//# sourceMappingURL=app.5c4c0936.js.map