(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),i=a("Bl7J"),m=a("vrFN"),c=a("gFwQ"),o=a("9eSz"),s=a.n(o),d=function(e){var t=e.tags,a=e.title,l=Object(r.useStaticQuery)("4237805904").allMarkdownRemark.edges.filter((function(e){if(e.node.frontmatter.title===a)return!1;for(var l=0;l<t.length;l++)if(e.node.frontmatter.tags.indexOf(t[l])>=0)return!0;return!1}));if(!l.length)return null;l.slice(0,6);return n.a.createElement("div",{className:"mt-80"},n.a.createElement("h2",null,"関連記事"),n.a.createElement("ul",{className:"blog-post-nav d-md-flex flex-wrap"},l.map((function(e,t){return n.a.createElement("li",{className:"col-md-6 pl-10 pr-10",key:t},n.a.createElement(r.Link,{to:e.node.fields.slug,itemProp:"url"},n.a.createElement(s.a,{fluid:e.node.frontmatter.thumnail.childImageSharp.fluid}),n.a.createElement("span",null,e.node.frontmatter.title)))}))))},u=a("N1om"),f=a.n(u),p=(t.default=function(e){var t,a=e.data,l=(e.pageContext,e.location),o=a.markdownRemark,u=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=a.previous,E=a.next,g=o.frontmatter.tags.map((function(e){return n.a.createElement("li",{class:"col"},n.a.createElement(r.Link,{to:"/tags/"+f()(e)+"/"},e))})),h=a.site.siteMetadata.siteUrl,N=o.fields.slug;return console.log(E),n.a.createElement(i.a,{location:l,title:u},n.a.createElement(m.a,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt}),n.a.createElement("article",{className:"blog-post container-2",itemScope:"itemScope",itemType:"http://schema.org/Article"},n.a.createElement("header",{className:"text-center"},n.a.createElement("h1",{itemProp:"headline"},o.frontmatter.title),n.a.createElement("p",{className:"datetime"},o.frontmatter.date),n.a.createElement("ul",{class:"tagname d-flex flex-wrap justify-content-center"},g),n.a.createElement(c.a,{title:o.frontmatter.title,url:""+h+N,description:o.excerpt}),n.a.createElement("figure",null,n.a.createElement("div",{className:"posts__image"},n.a.createElement(s.a,{className:"",fluid:o.frontmatter.thumnail.childImageSharp.fluid})))),n.a.createElement("div",{className:"posts-index",dangerouslySetInnerHTML:{__html:o.tableOfContents}}),n.a.createElement("section",{className:"articleBody",dangerouslySetInnerHTML:{__html:o.html},itemProp:"articleBody"})),n.a.createElement("nav",{className:"blog-post-nav container-2 mt-80"},n.a.createElement(d,{tags:o.frontmatter.tags,title:o.frontmatter.title}),n.a.createElement("ul",{className:"d-md-flex"},n.a.createElement("li",{className:"col-md-6 pl-10 pr-10"},p&&n.a.createElement(r.Link,{to:""+p.fields.slug,rel:"prev"},n.a.createElement(s.a,{fluid:p.frontmatter.thumnail.childImageSharp.fluid}),n.a.createElement("span",null,p.frontmatter.title))),n.a.createElement("li",{className:"col-md-6 pl-10 pr-10"},E&&n.a.createElement(r.Link,{to:""+E.fields.slug,rel:"next"},n.a.createElement(s.a,{fluid:E.frontmatter.thumnail.childImageSharp.fluid}),n.a.createElement("span",null,E.frontmatter.title))))))},"451123335")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1de3024818f259c64679.js.map