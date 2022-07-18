"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4781],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||c;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2601:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),i=["components"],o={title:"React\u4ecb\u7ecd",tags:["React"]},l=void 0,u={unversionedId:"react/index",id:"react/index",title:"React\u4ecb\u7ecd",description:"React \u8d77\u6e90\u4e0e\u53d1\u5c55 \u200b",source:"@site/docs/react/index.md",sourceDirName:"react",slug:"/react/",permalink:"/site/docs/react/",tags:[{label:"React",permalink:"/site/docs/tags/react"}],version:"current",frontMatter:{title:"React\u4ecb\u7ecd",tags:["React"]},sidebar:"interview",next:{title:"Create-React-App",permalink:"/site/docs/react/a1"}},p={},s=[{value:"React \u8d77\u6e90\u4e0e\u53d1\u5c55 \u200b",id:"react-\u8d77\u6e90\u4e0e\u53d1\u5c55-",level:2},{value:"React \u4e0e\u4f20\u7edf MVC \u7684\u5173\u7cfb",id:"react-\u4e0e\u4f20\u7edf-mvc-\u7684\u5173\u7cfb",level:2},{value:"React \u7684\u7279\u6027",id:"react-\u7684\u7279\u6027",level:2},{value:"\u865a\u62df DOM",id:"\u865a\u62df-dom",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"react-\u8d77\u6e90\u4e0e\u53d1\u5c55-"},"React \u8d77\u6e90\u4e0e\u53d1\u5c55 \u200b"),(0,c.kt)("p",null,"React \u8d77\u6e90\u4e8e Facebook \u7684\u5185\u90e8\u9879\u76ee\uff0c\u56e0\u4e3a\u8be5\u516c\u53f8\u5bf9\u5e02\u573a\u4e0a\u6240\u6709 JavaScript MVC \u6846\u67b6\uff0c\u90fd\u4e0d\u6ee1\u610f\uff0c\u5c31\u51b3 \u5b9a\u81ea\u5df1\u5199\u4e00\u5957\uff0c\u7528\u6765\u67b6\u8bbe Instagram \u7684\u7f51\u7ad9\u3002\u505a\u51fa\u6765\u4ee5\u540e\uff0c\u53d1\u73b0\u8fd9\u5957\u4e1c\u897f\u5f88\u597d\u7528\uff0c\u5c31\u5728 2013 \u5e74 5 \u6708\u5f00\u6e90 \u4e86\u3002"),(0,c.kt)("h2",{id:"react-\u4e0e\u4f20\u7edf-mvc-\u7684\u5173\u7cfb"},"React \u4e0e\u4f20\u7edf MVC \u7684\u5173\u7cfb"),(0,c.kt)("p",null,"\u8f7b\u91cf\u7ea7\u7684\u89c6\u56fe\u5c42\u5e93\uff01A JavaScript library for building user interfaces React \u4e0d\u662f\u4e00\u4e2a\u5b8c\u6574\u7684 MVC \u6846\u67b6\uff0c\u6700\u591a\u53ef\u4ee5\u8ba4\u4e3a\u662f MVC \u4e2d\u7684 V\uff08View\uff09\uff0c\u751a\u81f3 React \u5e76\u4e0d\u975e\u5e38\u8ba4\u53ef MVC \u5f00 \u53d1\u6a21\u5f0f\uff1bReact \u6784\u5efa\u9875\u9762 UI \u7684\u5e93\u3002\u53ef\u4ee5\u7b80\u5355\u5730\u7406\u89e3\u4e3a\uff0cReact \u5c06\u754c\u9762\u5206\u6210\u4e86\u5404\u4e2a\u72ec\u7acb\u7684\u5c0f\u5757\uff0c\u6bcf\u4e00\u4e2a\u5757 \u5c31\u662f\u7ec4\u4ef6\uff0c\u8fd9\u4e9b\u7ec4\u4ef6\u4e4b\u95f4\u53ef\u4ee5\u7ec4\u5408\u3001\u5d4c\u5957\uff0c\u5c31\u6210\u4e86\u6211\u4eec\u7684\u9875\u9762\u3002"),(0,c.kt)("h2",{id:"react-\u7684\u7279\u6027"},"React \u7684\u7279\u6027"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5f0f\u8bbe\u8ba1-React \u91c7\u7528\u58f0\u660e\u8303\u5f0f\uff0c\u53ef\u4ee5\u8f7b\u677e\u7684\u63cf\u8ff0\u5e94\u7528\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u9ad8\u6548-React \u901a\u8fc7\u5bf9 DOM \u7684\u6a21\u62df\uff08\u865a\u62df DOM\uff09\uff0c\u6700\u5927\u9650\u5ea6\u7684\u51cf\u5c11\u4e0e DOM \u7684\u4ea4\u4e92\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u7075\u6d3b-React \u53ef\u4ee5\u4e0e\u5df2\u77e5\u7684\u5e93\u6216\u8005\u6846\u67b6\u5f88\u597d\u7684\u914d\u5408\u3002"),(0,c.kt)("li",{parentName:"ul"},"JSX-JSX \u662f Javascript \u8bed\u6cd5\u7684\u6269\u5c55\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6-\u901a\u8fc7 React \u6784\u5efa\u7ec4\u4ef6\uff0c\u4f7f\u5f97\u4ee3\u7801\u66f4\u52a0\u5bb9\u6613\u5f97\u5230\u670d\u7528\uff0c\u80fd\u591f\u5f88\u597d\u7684\u5e94\u7528\u5728\u5927\u9879\u76ee\u7684\u5f00\u53d1\u4e2d\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u5355\u9879\u54cd\u5e94\u7684\u6570\u636e\u6d41-React \u5b9e\u73b0\u4e86\u5355\u5411\u54cd\u5e94\u7684\u6570\u636e\u6d41\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u91cd\u590d\u4ee3\u7801\uff0c\u8fd9\u4e5f\u662f\u5b83\u4e3a\u4ec0\u4e48\u6bd4\u4f20\u7edf\u6570\u636e\u7ed1\u5b9a\u66f4\u7b80\u5355\u3002")),(0,c.kt)("h2",{id:"\u865a\u62df-dom"},"\u865a\u62df DOM"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u4f20\u7edf DOM \u771f\u5b9e\u9875\u9762\u5bf9\u5e94\u4e00\u4e2a DOM \u6811\u3002\u5728\u4f20\u7edf\u9875\u9762\u5f00\u53d1\u6a21\u5f0f\u4e2d\uff0c\u6bcf\u6b21\u9700\u8981\u66f4\u65b0\u9875\u9762\u65f6\uff0c\u90fd\u8981\u624b\u52a8\u64cd\u4f5c DOM \u6765\u8fdb\u884c\u66f4\u65b0\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u865a\u62df DOM DOM \u64cd\u4f5c\u975e\u5e38\u6602\u8d35\u3002\u6211\u4eec\u90fd\u77e5\u9053\u5728\u524d\u7aef\u5f00\u53d1\u4e2d\uff0c\u6027\u80fd\u6d88\u8017\u6700\u597d\u7684\u5c31\u662f DOM \u64cd\u4f5c\uff0c\u800c\u4e14\u8fd9\u90e8\u5206\u4ee3\u7801\u4f1a\u8ba9\u6574\u4f53\u9879\u76ee\u7684\u4ee3\u7801\u53d8\u5f97\u96be\u4ee5\u7ef4\u62a4\u3002React \u628a\u771f\u5b9e DOM \u6811\u8f6c\u6362\u6210 Javascript \u5bf9\u8c61\u6811\uff0c\u4e5f\u5c31\u662f Virtual DOM\u3002")))}m.isMDXComponent=!0}}]);