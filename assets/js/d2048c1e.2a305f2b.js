"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6087],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1259:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"\u63d2\u5165\u6392\u5e8f/Insertion Sort \u2713",tags:["\u6392\u5e8f"]},c=void 0,u={unversionedId:"\u6392\u5e8f/a2",id:"\u6392\u5e8f/a2",title:"\u63d2\u5165\u6392\u5e8f/Insertion Sort \u2713",description:"\u76f4\u63a5\u63d2\u5165\u6392\u5e8f",source:"@site/docs/\u6392\u5e8f/a2.md",sourceDirName:"\u6392\u5e8f",slug:"/\u6392\u5e8f/a2",permalink:"/leo/docs/\u6392\u5e8f/a2",tags:[{label:"\u6392\u5e8f",permalink:"/leo/docs/tags/\u6392\u5e8f"}],version:"current",frontMatter:{title:"\u63d2\u5165\u6392\u5e8f/Insertion Sort \u2713",tags:["\u6392\u5e8f"]},sidebar:"tutorialSidebar",previous:{title:"\u5192\u6ce1\u6392\u5e8f/Bubble Sort \u2713",permalink:"/leo/docs/\u6392\u5e8f/a1"},next:{title:"\u5f52\u5e76\u6392\u5e8f/Merge Sort \u2713",permalink:"/leo/docs/\u6392\u5e8f/a3"}},s={},p=[{value:"\u76f4\u63a5\u63d2\u5165\u6392\u5e8f",id:"\u76f4\u63a5\u63d2\u5165\u6392\u5e8f",level:2},{value:"\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u7a7a\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",level:2},{value:"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f",id:"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u76f4\u63a5\u63d2\u5165\u6392\u5e8f"},"\u76f4\u63a5\u63d2\u5165\u6392\u5e8f"),(0,a.kt)("p",null,"\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\uff0c\u6307\u6bcf\u6b21\u4ece\u65e0\u5e8f\u8868\u4e2d\u53d6\u51fa\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u628a\u5b83\u63d2\u5165\u5230\u6709\u5e8f\u8868\u7684\u5408\u9002\u4f4d\u7f6e\uff0c\u4f7f\u6709\u5e8f\u8868\u4ecd\u7136\u6709\u5e8f\u3002\u5177\u4f53\u65b9\u6cd5\u662f\u7b2c\u4e00\u8d9f\u6bd4\u8f83\u524d\u4e24\u4e2a\u6570\uff0c\u7136\u540e\u628a\u7b2c\u4e8c\u4e2a\u6570\u6309\u5927\u5c0f\u63d2\u5165\u5230\u6709\u5e8f\u8868\u4e2d\uff1b \u7b2c\u4e8c\u8d9f\u628a\u7b2c\u4e09\u4e2a\u6570\u636e\u4e0e\u524d\u4e24\u4e2a\u6570\u4ece\u524d\u5411\u540e\u626b\u63cf\uff0c\u628a\u7b2c\u4e09\u4e2a\u6570\u6309\u5927\u5c0f\u63d2\u5165\u5230\u6709\u5e8f\u8868\u4e2d\uff1b\u4f9d\u6b21\u8fdb\u884c\u4e0b\u53bb\uff0c\u8fdb\u884c\u4e86(n-1)\u8d9f\u626b\u63cf\u4ee5\u540e\u5c31\u5b8c\u6210\u4e86\u6574\u4e2a\u6392\u5e8f\u8fc7\u7a0b\u3002\u5b83\u662f\u7531\u4e24\u5c42\u5d4c\u5957\u5faa\u73af\u7ec4\u6210\u7684\uff0c\u5916\u5c42\u5faa\u73af\u6807\u8bc6\u5e76\u51b3\u5b9a\u5f85\u6bd4\u8f83\u7684\u6570\u503c\uff0c\u5185\u5c42\u5faa\u73af\u4e3a\u5f85\u6bd4\u8f83\u6570\u503c\u786e\u5b9a\u5176\u6700\u7ec8\u4f4d\u7f6e\u3002\u76f4\u63a5\u63d2\u5165\u6392\u5e8f\u662f\u5c06\u5f85\u6bd4\u8f83\u7684\u6570\u503c\u4e0e\u5b83\u7684\u524d\u4e00\u4e2a\u6570\u503c\u8fdb\u884c\u6bd4\u8f83\uff0c\u6240\u4ee5\u5916\u5c42\u5faa\u73af\u662f\u4ece\u7b2c\u4e8c\u4e2a\u6570\u503c\u5f00\u59cb\u7684\u3002\u5f53\u524d\u4e00\u6570\u503c\u6bd4\u5f85\u6bd4\u8f83\u6570\u503c\u5927\u7684\u60c5\u51b5\u4e0b\u7ee7\u7eed\u5faa\u73af\u6bd4\u8f83\uff0c\u76f4\u5230\u627e\u5230\u6bd4\u5f85\u6bd4\u8f83\u6570\u503c\u5c0f\u7684\u5e76\u5c06\u5f85\u6bd4\u8f83\u6570\u503c\u7f6e\u5165\u5176\u540e\u4e00\u4f4d\u7f6e\uff0c\u7ed3\u675f\u8be5\u6b21\u5faa\u73af\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u76f4\u63a5\u63d2\u5165\u6392\u5e8f\n * \u628a\u5c06\u8981\u6392\u5e8f\u7684\u90a3\u4e2a\u4f9d\u6b21\u4e0e\u524d\u9762\u6392\u597d\u7684\u6bd4\u8f83\uff0c\u5012\u5e8f\u6bd4\u8f83\uff0c\u6bd4\u524d\u9762\u7684\u5c0f\uff0c\u5c31\u5f80\u524d\u6362\n * \u5faa\u73af\uff0c\u77e5\u9053\u6362\u5230\u524d\u9762\u6bd4\u5b83\u5c0f\n */\nconst insertSort = (arr) => {\n    for (let i = 1; i < arr.length; i++) {\n        let j = i;\n        while (j > 0 && arr[j] < arr[j - 1]) {\n            let temp = arr[j];\n            arr[j] = arr[j - 1];\n            arr[j - 1] = temp;\n            j--;\n        }\n    }\n    return arr;\n}\n")),(0,a.kt)("a",{class:"stackblitz",href:"https://stackblitz.com/edit/node-wps8mf?file=sort%2Finsertion-sort.js"},"Try in StackBlitz",(0,a.kt)("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},(0,a.kt)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))),(0,a.kt)("h2",{id:"\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u7a7a\u95f4\u590d\u6742\u5ea6"),(0,a.kt)("p",null,"O(1)"),(0,a.kt)("h2",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6"),(0,a.kt)("p",null,"O(n^2)"),(0,a.kt)("h2",{id:"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f"},"\u662f\u5426\u662f\u7a33\u5b9a\u6392\u5e8f"),(0,a.kt)("p",null,"\u662f"))}d.isMDXComponent=!0}}]);