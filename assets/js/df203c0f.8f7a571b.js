"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9924],{9853:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var c=a(7294),l=a(2600),n=a(9960),s=a(5979),r=a(5999),o=a(4739),g=a(6010);function i(e){var t=e.doc;return c.createElement("article",{className:"margin-vert--lg"},c.createElement(n.Z,{to:t.permalink},c.createElement("h2",null,t.title)),t.description&&c.createElement("p",null,t.description))}function m(e){var t,a=e.tag,m=(t=(0,s.c2)().selectMessage,function(e){return t(e,(0,r.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),d=(0,r.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:m(a.docs.length),tagName:a.name});return c.createElement(s.FG,{className:(0,g.Z)(s.kM.wrapper.docsPages,s.kM.page.docsTagDocListPage)},c.createElement(s.d,{title:d}),c.createElement(o.Z,{tag:"doc_tag_doc_list"}),c.createElement(l.Z,null,c.createElement("div",{className:"container margin-vert--lg"},c.createElement("div",{className:"row"},c.createElement("main",{className:"col col--8 col--offset-2"},c.createElement("header",{className:"margin-bottom--xl"},c.createElement("h1",null,d),c.createElement(n.Z,{href:a.allTagsPath},c.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.createElement("section",{className:"margin-vert--lg"},a.docs.map((function(e){return c.createElement(i,{key:e.id,doc:e})}))))))))}}}]);