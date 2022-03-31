"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4875],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,h=p["".concat(c,".").concat(f)]||p[f]||s[f]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"\u6811/Tree \u2713",tags:["\u6570\u636e\u7ed3\u6784"]},c=void 0,d={unversionedId:"\u6570\u636e\u7ed3\u6784/a5",id:"\u6570\u636e\u7ed3\u6784/a5",title:"\u6811/Tree \u2713",description:"\u63cf\u8ff0",source:"@site/docs/\u6570\u636e\u7ed3\u6784/a5.md",sourceDirName:"\u6570\u636e\u7ed3\u6784",slug:"/\u6570\u636e\u7ed3\u6784/a5",permalink:"/leo/docs/\u6570\u636e\u7ed3\u6784/a5",tags:[{label:"\u6570\u636e\u7ed3\u6784",permalink:"/leo/docs/tags/\u6570\u636e\u7ed3\u6784"}],version:"current",frontMatter:{title:"\u6811/Tree \u2713",tags:["\u6570\u636e\u7ed3\u6784"]},sidebar:"tutorialSidebar",previous:{title:"\u6808/Stack \u2713",permalink:"/leo/docs/\u6570\u636e\u7ed3\u6784/a4"},next:{title:"\u4e8c\u53c9\u6811/Binary Tree \u2713",permalink:"/leo/docs/\u6570\u636e\u7ed3\u6784/a6"}},u={},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5b9e\u73b0\u63a5\u53e3",id:"\u5b9e\u73b0\u63a5\u53e3",level:2},{value:"\u4e3b\u8981\u7b97\u6cd5\u5206\u6790",id:"\u4e3b\u8981\u7b97\u6cd5\u5206\u6790",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:2}],p={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u56fe\u8bba\u4e2d\uff0c\u6811\uff08\u82f1\u8bed\uff1aTree\uff09\u662f\u4e00\u79cd\u65e0\u5411\u56fe\uff08undirected graph\uff09\uff0c\u5176\u4e2d\u4efb\u610f\u4e24\u4e2a\u9876\u70b9\u95f4\u5b58\u5728\u552f\u4e00\u4e00\u6761\u8def\u5f84\u3002\u6216\u8005\u8bf4\uff0c\u53ea\u8981\u6ca1\u6709\u56de\u8def\u7684\u8fde\u901a\u56fe\u5c31\u662f\u6811\u3002\u68ee\u6797\u662f\u6307\u4e92\u76f8\u4e0d\u4ea4\u5e76\u6811\u7684\u96c6\u5408\u3002\u6811\u56fe\u5e7f\u6cdb\u5e94\u7528\u4e8e\u8ba1\u7b97\u673a\u79d1\u5b66\u7684\u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u6bd4\u5982\u4e8c\u53c9\u67e5\u627e\u6811\uff0c\u5806\uff0cTrie \u6811\u4ee5\u53ca\u6570\u636e\u538b\u7f29\u4e2d\u7684\u970d\u592b\u66fc\u6811\u7b49\u7b49\u3002")),(0,l.kt)("h2",{id:"\u5b9e\u73b0\u63a5\u53e3"},"\u5b9e\u73b0\u63a5\u53e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6df1\u5ea6\u904d\u5386",(0,l.kt)("inlineCode",{parentName:"li"},"deepTravers(callback)")),(0,l.kt)("li",{parentName:"ul"},"\u5e7f\u5ea6\u904d\u5386",(0,l.kt)("inlineCode",{parentName:"li"},"breadthTravers(callback)")),(0,l.kt)("li",{parentName:"ul"},"\u7ed9\u6307\u5b9a\u8282\u70b9\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"li"},"add(data, toData)")),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u6307\u5b9a\u8282\u70b9\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"li"},"remove(data, toData)")),(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u5305\u542b\u7ed9\u5b9a\u6570\u636e",(0,l.kt)("inlineCode",{parentName:"li"},"containes(data, tranvers)"))),(0,l.kt)("h2",{id:"\u4e3b\u8981\u7b97\u6cd5\u5206\u6790"},"\u4e3b\u8981\u7b97\u6cd5\u5206\u6790"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6df1\u5ea6\u904d\u5386\uff1a\u5373\u904d\u5386\u5b8c\u8fd9\u4e2a\u8282\u70b9\uff0c\u5c31\u53bb\u627e\u8be5\u8282\u70b9\u7684\u5b50\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u5e7f\u5ea6\u904d\u5386\uff1a\u5373\u5148\u904d\u5386\u5b8c\u8be5\u5c42\u6b21\u7684\u6240\u6709\u8282\u70b9\uff0c\u518d\u53bb\u904d\u5386\u4e0b\u4e00\u7ea7\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u8282\u70b9\u4f9d\u8d56\u904d\u5386\uff0c\u6240\u4ee5\u53ef\u4ee5\u5148\u5b9e\u73b0\u904d\u5386\u7684\u65b9\u6cd5\uff0c\u518d\u5b9e\u73b0\u589e\u5220\u64cd\u4f5c")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Node {\n    constructor(data) {\n        this.data = data;\n        this.parent = null;\n        this.children = [];\n    }\n}\n\nclass Tree {\n    constructor() {\n        this._root = null;\n    }\n\n    add(data, toData) {\n        if (toData === null) {\n            return this._root = new Node(data);\n        }\n        let target = this.getNodeByData(toData, this.deepTravers);\n        if (target !== null) {\n            let newNode = new Node(data);\n            newNode.parent = target.data;\n            target.children.push(newNode);\n        } else {\n            console.log(`Can not add to ${toData}`);\n        }\n    }\n\n    remove(data, toData) {\n        let target = this.getNodeByData(toData, this.breadthTravers);\n        if (target !== null) {\n            let index = 0;\n            for (let i = 0; i < target.children.length; i++) {\n                if (data === target.children[i].data) {\n                    index = i;\n                    break;\n                }\n            }\n            return target.children.splice(index, 1);\n        } else {\n            console.log(`Can not find ${data} from ${toData}`);\n        }\n    }\n\n    deepTravers(callback) {\n        const travers = (node) => {\n            callback(node);\n            for (let i = 0; i < node.children.length; i++) {\n                travers(node.children[i]);\n            }\n        }\n        travers(this._root);\n    }\n\n    breadthTravers(callback) {\n        let queue = [];\n        queue.push(this._root);\n        while (queue.length > 0) {\n            let curr = queue.shift();\n            callback(curr);\n            for (let i = 0; i < curr.children.length; i++) {\n                queue.push(curr.children[i]);\n            }\n        }\n    }\n\n    containes(data, travers) {\n        let contain = false;\n        travers.call(this, (node) => {\n            console.log(node.data, data);\n            if (node.data === data) {\n                contain = true;\n            }\n        });\n        return contain;\n    }\n\n    getNodeByData(data, travers) {\n        let result = null;\n        travers.call(this, (node) => {\n            if (node.data === data) {\n                result = node;\n            }\n        });\n        return result;\n    }\n\n    toString() {\n        return JSON.stringify(this._root);\n    }\n}\n")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u4ee3\u7801"},"\u6d4b\u8bd5\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let tree = new Tree();\ntree.add(43, null);\nconsole.log(tree.toString());\ntree.deepTravers((node) => console.log('Deep Travers:', node.data));\ntree.breadthTravers((node) => console.log('Breadth Travers:', node.data));\nconsole.log('Containes 43:', tree.containes(43, tree.deepTravers));\ntree.add(65, 44);\ntree.add(65, 43);\ntree.add(111, 65);\ntree.add(322, 111);\ntree.add(453, 43);\nconsole.log(tree.toString());\ntree.remove(322, 111);\n")),(0,l.kt)("a",{class:"stackblitz",href:"https://stackblitz.com/edit/node-wps8mf?file=data-structure%2F2Ftree.js"},"Try in StackBlitz ",(0,l.kt)("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",class:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},(0,l.kt)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}f.isMDXComponent=!0}}]);