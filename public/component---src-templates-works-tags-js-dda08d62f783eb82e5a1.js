(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{paXG:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=(a("Wbzz"),a("Bl7J")),c=a("vrFN"),o=a("epnY"),i=a("q1mH");a("r+vB");t.default=function(e){var t=e.data,a=e.location,n=e.pageContext,s=t.allMarkdownRemark.nodes,m=t.allMarkdownRemark,u=n.tag,p=t.allMarkdownRemark,d=(p.edges,p.totalCount,""+u);return r.a.createElement(l.a,{location:a,title:d},r.a.createElement("div",{class:"container"},r.a.createElement(c.a,{title:u}),r.a.createElement("h1",{class:"heading-main"},r.a.createElement("span",null,d)),r.a.createElement(o.a,{tag:m}),r.a.createElement(i.a,{posts:s})))};var s="3343436474"},q1mH:function(e,t,a){"use strict";var n=a("dI71"),r=a("q1tI"),l=a.n(r),c=a("Wbzz"),o=a("9eSz"),i=a.n(o),s=a("N1om"),m=a.n(s),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.posts;return l.a.createElement("div",null,l.a.createElement("ol",{class:"d-md-flex flex-wrap"},e.map((function(e){var t=e.frontmatter.title||e.fields.slug,a=e.frontmatter.slug,n=(e.frontmatter.date,e.frontmatter.thumnail.childImageSharp.fluid),r=e.frontmatter.tags.map((function(e){return l.a.createElement("li",{class:"col"},l.a.createElement(c.Link,{to:"/works-tags/"+m()(e)+"/"},e))}));return l.a.createElement("li",{class:"col-md-3",key:e.fields.slug},l.a.createElement("article",{className:"work-list-item p-md-10 pb-20",itemScope:"itemScope",itemType:"http://schema.org/Article"},l.a.createElement("header",null,l.a.createElement("figure",null,l.a.createElement("div",{className:"posts__image"},l.a.createElement(c.Link,{to:"/"+a,itemProp:"url"},l.a.createElement(i.a,{fluid:n,imgStyle:{objectFit:"cover",objectPosition:"50% 50%"}})))),l.a.createElement("h2",{class:"post-hedding"},l.a.createElement(c.Link,{to:"/"+a,itemProp:"url"},l.a.createElement("span",{itemProp:"headline"},t)))),l.a.createElement("ul",{class:"tagname d-flex flex-wrap"},r)))}))))},t}(l.a.Component);t.a=u},"r+vB":function(e,t,a){"use strict";var n=a("dI71"),r=a("q1tI"),l=a.n(r),c=a("Wbzz"),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.pages,t=e.currentPage,a=e.numPages,n=1===t,r=t===a,o=t-1==1?"/":"/"+(t-1).toString(),i="/"+(t+1).toString();return l.a.createElement("div",{class:"pagenation d-flex flex-wrap justify-content-center"},l.a.createElement("div",{class:"col"},!n&&l.a.createElement(c.Link,{to:o}," ← 前のページ ")),l.a.createElement("div",{class:"col d-flex flex-wrap justify-content-center"},Array.from({length:a},(function(e,t){return l.a.createElement(c.Link,{key:"pagination-number"+(t+1),to:"/"+(0===t?"":t+1)},t+1)}))),l.a.createElement("div",{class:"col"},!r&&l.a.createElement(c.Link,{to:i}," 次のページ → ")))},t}(l.a.Component);t.a=o}}]);
//# sourceMappingURL=component---src-templates-works-tags-js-dda08d62f783eb82e5a1.js.map