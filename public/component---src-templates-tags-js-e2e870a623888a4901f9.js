(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),l=a.n(n),r=(a("Wbzz"),a("6Gk8"),a("Bl7J")),c=a("vrFN"),m=a("NysD"),i=a("rgsX");a("r+vB"),a("9eSz"),a("N1om");t.default=function(e){var t=e.data,a=e.location,n=e.pageContext,s=t.allMarkdownRemark.nodes,o=t.allMarkdownRemark,u=n.tag,p=t.allMarkdownRemark,d=(p.edges,p.totalCount,""+u);return l.a.createElement(r.a,{location:a,title:d},l.a.createElement("div",{class:"container"},l.a.createElement(c.a,{title:u}),l.a.createElement("h1",{class:"heading-main"},l.a.createElement("span",null,d)),l.a.createElement(m.a,{tag:o}),l.a.createElement(i.a,{posts:s})))};var s="1159849808"},NysD:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("N1om"),c=a.n(r),m=(a("TJpk"),a("Wbzz"));t.a=function(e){e.tags;var t=Object(m.useStaticQuery)("2950059833");return l.a.createElement("div",{className:"tag-group"},l.a.createElement("div",{className:"d-md-flex align-items-center justify-content-center"},l.a.createElement("p",{className:"col-md-1"},"カテゴリー："),l.a.createElement("ul",{className:"col-md-11 d-flex flex-wrap align-items-center"},l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/"},"すべて")),t.allMarkdownRemark.group.map((function(e){return l.a.createElement("li",{key:e.tag},l.a.createElement(m.Link,{to:"/tags/"+c()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))})))))}},rgsX:function(e,t,a){"use strict";var n=a("dI71"),l=a("q1tI"),r=a.n(l),c=a("Wbzz"),m=a("9eSz"),i=a.n(m),s=a("N1om"),o=a.n(s),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.posts;return r.a.createElement("div",null,r.a.createElement("ol",{class:"d-md-flex flex-wrap"},e.map((function(e){var t=e.frontmatter.title||e.fields.slug,a=e.frontmatter.slug,n=e.frontmatter.date,l=e.frontmatter.thumnail.childImageSharp.fluid,m=e.frontmatter.tags.map((function(e){return r.a.createElement("li",{class:"col"},r.a.createElement(c.Link,{to:"/tags/"+o()(e)+"/"},e))}));return r.a.createElement("li",{class:"col-md-4",key:e.fields.slug},r.a.createElement("article",{className:"post-list-item p-md-10 pb-20",itemScope:"itemScope",itemType:"http://schema.org/Article"},r.a.createElement("header",null,r.a.createElement("figure",null,r.a.createElement("div",{className:"posts__image"},r.a.createElement(c.Link,{to:"/"+a,itemProp:"url"},r.a.createElement(i.a,{fluid:l})))),r.a.createElement("h2",{class:"post-hedding"},r.a.createElement(c.Link,{to:"/"+a,itemProp:"url"},r.a.createElement("span",{itemProp:"headline"},t)))),r.a.createElement("ul",{class:"tagname d-flex flex-wrap"},m),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description",class:"description"}),r.a.createElement("small",null,n))))}))))},t}(r.a.Component);t.a=u}}]);
//# sourceMappingURL=component---src-templates-tags-js-e2e870a623888a4901f9.js.map