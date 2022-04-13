"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9478],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:e},u),{},{components:n})):r.createElement(m,s({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2262:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],c={title:"\u72b6\u6001\u6a21\u5f0f/State Pattern",tags:["\u8bbe\u8ba1\u6a21\u5f0f"]},i=void 0,l={unversionedId:"\u8bbe\u8ba1\u6a21\u5f0f/a2",id:"\u8bbe\u8ba1\u6a21\u5f0f/a2",title:"\u72b6\u6001\u6a21\u5f0f/State Pattern",description:"\u5728\u72b6\u6001\u6a21\u5f0f\uff08State Pattern\uff09\u4e2d\uff0c\u7c7b\u7684\u884c\u4e3a\u662f\u57fa\u4e8e\u5b83\u7684\u72b6\u6001\u6539\u53d8\u7684\u3002\u8fd9\u79cd\u7c7b\u578b\u7684\u8bbe\u8ba1\u6a21\u5f0f\u5c5e\u4e8e\u884c\u4e3a\u578b\u6a21\u5f0f\u3002",source:"@site/docs/\u8bbe\u8ba1\u6a21\u5f0f/a2.md",sourceDirName:"\u8bbe\u8ba1\u6a21\u5f0f",slug:"/\u8bbe\u8ba1\u6a21\u5f0f/a2",permalink:"/leo/docs/\u8bbe\u8ba1\u6a21\u5f0f/a2",tags:[{label:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/leo/docs/tags/\u8bbe\u8ba1\u6a21\u5f0f"}],version:"current",frontMatter:{title:"\u72b6\u6001\u6a21\u5f0f/State Pattern",tags:["\u8bbe\u8ba1\u6a21\u5f0f"]},sidebar:"tutorialSidebar",previous:{title:"\u9002\u914d\u5668\u6a21\u5f0f/Adapter Pattern",permalink:"/leo/docs/\u8bbe\u8ba1\u6a21\u5f0f/a1"},next:{title:"\u88c5\u9970\u8005\u6a21\u5f0f",permalink:"/leo/docs/\u8bbe\u8ba1\u6a21\u5f0f/a3"}},u={},p=[],d={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ec0\u4e48\u662f\u72b6\u6001\u6a21\u5f0f"},"\u4ec0\u4e48\u662f\u72b6\u6001\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5728\u72b6\u6001\u6a21\u5f0f\uff08State Pattern\uff09\u4e2d\uff0c\u7c7b\u7684\u884c\u4e3a\u662f\u57fa\u4e8e\u5b83\u7684\u72b6\u6001\u6539\u53d8\u7684\u3002\u8fd9\u79cd\u7c7b\u578b\u7684\u8bbe\u8ba1\u6a21\u5f0f\u5c5e\u4e8e\u884c\u4e3a\u578b\u6a21\u5f0f\u3002"),(0,a.kt)("p",null,"\u5728\u72b6\u6001\u6a21\u5f0f\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u8868\u793a\u5404\u79cd\u72b6\u6001\u7684\u5bf9\u8c61\u548c\u4e00\u4e2a\u884c\u4e3a\u968f\u7740\u72b6\u6001\u5bf9\u8c61\u6539\u53d8\u800c\u6539\u53d8\u7684 context \u5bf9\u8c61\u3002"),(0,a.kt)("h1",{id:"\u9762\u5411\u5bf9\u8c61\u4f8b\u5b50"},"\u9762\u5411\u5bf9\u8c61\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class BasicState{\n    constructor(control) {\n        this.control = control;\n    }\n    \n    btnWasPressed(dom) {\n        throw new Error('Basic function must be rewrite');\n    }\n  \n    stopWasPressed(dom) {\n        throw new Error('Basic function must be rewrite');\n    }\n}\n\nclass StopState extends BasicState{\n    constructor(control) {\n        super(control);\n    }\n\n    btnWasPressed(dom) {\n        console.log('starting play');\n        dom.innerText = 'pause';\n        this.control.setState(this.control.playState);\n    }\n\n    stopWasPressed(dom) {\n        console.log('stoped');\n        dom.innerText = 'start';\n        this.control.setState(this.control.stopState);\n    }\n}\n\nclass PlayState extends BasicState{\n    constructor(control) {\n        super(control);\n    }\n\n    btnWasPressed(dom) {\n        console.log('paused');\n        dom.innerText = 'start';\n        this.control.setState(this.control.pauseState);\n    }\n\n    stopWasPressed(dom) {\n        console.log('stoped');\n        dom.innerText = 'start';\n        this.control.setState(this.control.stopState);\n    }\n}\n\n  \n\nclass PauseState extends BasicState{\n    constructor(control) {\n        super(control);\n    }\n\n    btnWasPressed(dom) {\n        console.log('starting play');\n        dom.innerText = 'pause';\n        this.control.setState(this.control.playState);\n    }\n\n    stopWasPressed(dom) {\n        console.log('stoped');\n        dom.innerText = 'start';\n        this.control.setState(this.control.stopState);\n    }\n}\n\n  \n\nexport default class Control{\n    constructor() {\n        this.stopState = new StopState(this);\n        this.playState = new PlayState(this);\n        this.pauseState = new PauseState(this);\n        this.currentState = this.stopState;\n    }\n\n    setState(state) {\n        this.currentState = state;\n    }\n}\n")))}f.isMDXComponent=!0}}]);