"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[130],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3932:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"\u5806\u6392\u5e8f/Heap Sort \u2713",tags:["\u6392\u5e8f"]},c=void 0,u={unversionedId:"\u6392\u5e8f/a6",id:"\u6392\u5e8f/a6",title:"\u5806\u6392\u5e8f/Heap Sort \u2713",description:"\u5806\u6392\u5e8f",source:"@site/docs/\u6392\u5e8f/a6.md",sourceDirName:"\u6392\u5e8f",slug:"/\u6392\u5e8f/a6",permalink:"/leo/docs/\u6392\u5e8f/a6",tags:[{label:"\u6392\u5e8f",permalink:"/leo/docs/tags/\u6392\u5e8f"}],version:"current",frontMatter:{title:"\u5806\u6392\u5e8f/Heap Sort \u2713",tags:["\u6392\u5e8f"]},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u6392\u5e8f/Selection Sort \u2713",permalink:"/leo/docs/\u6392\u5e8f/a5"},next:{title:"\u57fa\u6570\u6392\u5e8f/Radix Sort",permalink:"/leo/docs/\u6392\u5e8f/a7"}},p={},s=[{value:"\u5806\u6392\u5e8f",id:"\u5806\u6392\u5e8f",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5806\u6392\u5e8f"},"\u5806\u6392\u5e8f"),(0,o.kt)("p",null,"\u5806\u6392\u5e8f(Heap Sort)\u662f\u5229\u7528\u5806\u8fd9\u79cd\u6570\u636e\u7ed3\u6784\u800c\u8bbe\u8ba1\u7684\u4e00\u79cd\u6392\u5e8f\u7b97\u6cd5\uff0c\u5806\u6392\u5e8f\u662f\u4e00\u79cd\u9009\u62e9\u6392\u5e8f\uff0c\u5b83\u7684\u6700\u574f\uff0c\u6700\u597d\uff0c\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\u5747\u4e3a O(nlogn)\uff0c\u5b83\u4e5f\u662f\u4e0d\u7a33\u5b9a\u6392\u5e8f\u3002\u9996\u5148\u7b80\u5355\u4e86\u89e3\u4e0b\u5806\u7ed3\u6784\u3002"),(0,o.kt)("p",null,"\u5806\u6392\u5e8f\u7684\u57fa\u672c\u601d\u60f3\u662f\uff1a\u5c06\u5f85\u6392\u5e8f\u5e8f\u5217\u6784\u9020\u6210\u4e00\u4e2a\u5927\u9876\u5806\uff0c\u6b64\u65f6\uff0c\u6574\u4e2a\u5e8f\u5217\u7684\u6700\u5927\u503c\u5c31\u662f\u5806\u9876\u7684\u6839\u8282\u70b9\u3002\u5c06\u5176\u4e0e\u672b\u5c3e\u5143\u7d20\u8fdb\u884c\u4ea4\u6362\uff0c\u6b64\u65f6\u672b\u5c3e\u5c31\u4e3a\u6700\u5927\u503c\u3002\u7136\u540e\u5c06\u5269\u4f59 n-1 \u4e2a\u5143\u7d20\u91cd\u65b0\u6784\u9020\u6210\u4e00\u4e2a\u5806\uff0c\u8fd9\u6837\u4f1a\u5f97\u5230 n \u4e2a\u5143\u7d20\u7684\u6b21\u5c0f\u503c\u3002\u5982\u6b64\u53cd\u590d\u6267\u884c\uff0c\u4fbf\u80fd\u5f97\u5230\u4e00\u4e2a\u6709\u5e8f\u5e8f\u5217\u4e86\u3002"),(0,o.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6784\u9020\u521d\u59cb\u5806\u3002\u5c06\u7ed9\u5b9a\u65e0\u5e8f\u5e8f\u5217\u6784\u9020\u6210\u4e00\u4e2a\u5927\u9876\u5806\uff08\u4e00\u822c\u5347\u5e8f\u91c7\u7528\u5927\u9876\u5806\uff0c\u964d\u5e8f\u91c7\u7528\u5c0f\u9876\u5806)\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u5806\u9876\u5143\u7d20\u4e0e\u672b\u5c3e\u5143\u7d20\u8fdb\u884c\u4ea4\u6362\uff0c\u4f7f\u672b\u5c3e\u5143\u7d20\u6700\u5927\u3002\u7136\u540e\u7ee7\u7eed\u8c03\u6574\u5806\uff0c\u518d\u5c06\u5806\u9876\u5143\u7d20\u4e0e\u672b\u5c3e\u5143\u7d20\u4ea4\u6362\uff0c\u5f97\u5230\u7b2c\u4e8c\u5927\u5143\u7d20\u3002\u5982\u6b64\u53cd\u590d\u8fdb\u884c\u4ea4\u6362\u3001\u91cd\u5efa\u3001\u4ea4\u6362\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53cd\u590d\u6267\u884c\u8c03\u6574+\u4ea4\u6362\u6b65\u9aa4\uff0c\u76f4\u5230\u6574\u4e2a\u5e8f\u5217\u6709\u5e8f\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u5806\u6392\u5e8f\u4f7f\u7528\u7684\u521b\u5efa\u9876\u5806\nconst createMaxHeap = (arr, len) => {\n    const create = (arr, i, len) => {\n        let maxIndex = i;\n        let left = 2 * i;\n        let right = 2 * i + 1;\n        if (left < len && arr[maxIndex] < arr[left]) {\n            maxIndex = left;\n        }\n        if (right < len && arr[maxIndex] < arr[right]) {\n            maxIndex = right;\n        }\n        let temp = arr[maxIndex];\n        arr[maxIndex] = arr[i];\n        arr[i] = temp;\n    }\n    for (let i = Math.floor(len / 2); i >= 0; i--) {\n        create(arr, i, len);\n    }\n}\n\n/**\n * \u5806\u6392\u5e8f\n * \u5faa\u73af\u521b\u5efa\u6700\u5c0f\u5806\uff0c\u4f9d\u6b21\u53d6\u51fa\u5806\u9876\u5143\u7d20\n */\nconst heapSort = (arr) => {\n    for (let i = arr.length - 1; i >= 0; i--) {\n        createMaxHeap(arr, i + 1);\n        let max = arr[0];\n        arr[0] = arr[i];\n        arr[i] = max;\n    }\n    return arr;\n}\n")),(0,o.kt)("a",{class:"stackblitz",href:"https://stackblitz.com/edit/node-wps8mf?file=sort%2Fheap-sort.js"},"Try in StackBlitz",(0,o.kt)("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},(0,o.kt)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}m.isMDXComponent=!0}}]);