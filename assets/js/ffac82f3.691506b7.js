"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3974,1356],{4480:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(7294),u="docker_t_iQ",a="itemWrap_j3tO",c="item_EgIG",i="opened_Qa8N",s=n(4996);n(1455);function o(e){var t=e.data,n=void 0===t?[]:t,o=e.toggleWin;return r.createElement("section",{className:u},n.map((function(e){return r.createElement("div",{className:a},r.createElement("div",{onClick:function(){return o(e.id)},key:e.id,className:c,style:{backgroundImage:"url("+(0,s.Z)("/img/"+e.icon)+")"}}),e.opened?r.createElement("span",{className:i}):null)})))}},1455:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(7294),u="time_rEtG";n(4996);function a(e){return Number(e)<10?"0"+e:e}function c(){var e=new Date;return a(e.getHours())+":"+a(e.getMinutes())}function i(){var e=(0,r.useState)(c()),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=setInterval((function(){n(c())}),1e3);return function(){clearInterval(e)}}),[]),r.createElement("section",{className:u},t)}}}]);