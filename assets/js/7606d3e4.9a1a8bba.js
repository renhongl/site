"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4359,6663,1351,1356,3974],{3773:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(7855),r=t(7294),i="home_CU7S",c=t(4996),o=t(9887),u=t(4480),l=t(5169),s=[{id:"win1",name:"\u524d\u7aef\u5c0f\u7ad9",path:"/leo",icon:"leetcode.svg",opened:!1,active:!1},{id:"win2",name:"Markdown Editor",path:"https://renhongl.github.io/markdown-editor/",icon:"graph.png",opened:!1,active:!1},{id:"win3",name:"Code Online",path:"https://renhongl.github.io/code-online/#/",icon:"js.png",opened:!1}];function d(){var e=(0,r.useState)(s),n=e[0],t=e[1];function d(e){t((function(n){for(var t,r=[].concat(n),i=(0,a.Z)(r);!(t=i()).done;){var c=t.value;if(c.id===e){c.opened=!c.opened;break}}return r}))}function m(e){t((function(n){for(var t,r=[].concat(n),i=(0,a.Z)(r);!(t=i()).done;){var c=t.value;c.id===e?c.active=!0:c.active=!1}return r}))}return r.createElement("section",{style:{backgroundImage:"url("+(0,c.Z)("/home/home-bg.jpg")+")"},className:i},r.createElement(o.default,null),r.createElement(u.default,{data:n,toggleWin:d}),n.filter((function(e){return e.opened})).map((function(e){return r.createElement(l.default,{key:e.id,data:e,toggleWin:d,toggleActive:m})})))}},4480:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a=t(7294),r="docker_t_iQ",i="itemWrap_j3tO",c="item_EgIG",o="opened_Qa8N",u=t(4996);t(1455);function l(e){var n=e.data,t=void 0===n?[]:n,l=e.toggleWin;return a.createElement("section",{className:r},t.map((function(e){return a.createElement("div",{className:i},a.createElement("div",{onClick:function(){return l(e.id)},key:e.id,className:c,style:{backgroundImage:"url("+(0,u.Z)("/img/"+e.icon)+")"}}),e.opened?a.createElement("span",{className:o}):null)})))}},9887:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var a=t(7294),r="header_w4aO",i=(t(4996),t(1455));function c(){return a.createElement("section",{className:r},a.createElement(i.default,null))}},1455:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var a=t(7294),r="time_rEtG";t(4996);function i(e){return Number(e)<10?"0"+e:e}function c(){var e=new Date;return i(e.getHours())+":"+i(e.getMinutes())}function o(){var e=(0,a.useState)(c()),n=e[0],t=e[1];return(0,a.useEffect)((function(){var e=setInterval((function(){t(c())}),1e3);return function(){clearInterval(e)}}),[]),a.createElement("section",{className:r},n)}},5169:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(7294),r="winWrap_WfG4",i="win_hJY7",c="winContent_LUJK",o="winTit_k4gq",u="red_saH_",l="winText_h0Vt",s=t(4996),d=(t(1455),t(3935),t(1193)),m=t.n(d),f=t(1706);function g(e){var n=e.data,t=void 0===n?{}:n,d=e.toggleWin,g=e.toggleActive;return a.createElement("div",{className:t.active?r:""},a.createElement(m(),{axis:"both",handle:"#win",defaultPosition:{x:50,y:50},position:null,scale:1},a.createElement(f.ResizableBox,{width:800,height:600,minConstraints:[100,100],maxConstraints:[1/0,1/0]},a.createElement("section",{className:i},a.createElement("div",{id:"win",className:o,onClick:function(){return g(t.id)}},a.createElement("span",{onClick:function(){return d(t.id)},className:u,style:{backgroundImage:"url("+(0,s.Z)("/home/close-hover.svg")+")"}}),a.createElement("span",{className:l},t.name)),a.createElement("div",{className:c},a.createElement("iframe",{width:"100%",height:"100%",src:t.path,frameBorder:"0"}))))))}}}]);