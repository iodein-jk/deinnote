(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));var r=a("q1tI"),l=a.n(r),n=a("Wbzz"),i=a("Bl7J"),c=a("vrFN"),m=a("gFwQ"),o=a("9eSz"),s=a.n(o),u=function(e){var t=e.tags,a=e.title,r=Object(n.useStaticQuery)("933253614").allMarkdownRemark.edges.filter((function(e){if(e.node.frontmatter.title===a)return!1;for(var r=0;r<t.length;r++)if(e.node.frontmatter.tags.indexOf(t[r])>=0)return!0;return!1}));if(!r.length)return null;r.slice(0,6);return l.a.createElement("div",{className:"mt-80"},l.a.createElement("p",{className:"mt-60"},"関連記事"),l.a.createElement("ul",{className:"blog-post-nav d-flex flex-wrap"},r.map((function(e,t){return l.a.createElement("li",{className:"col-md-4 col-6 pl-10 pr-10",key:t},l.a.createElement(n.Link,{to:"/"+e.node.frontmatter.slug},l.a.createElement(s.a,{fluid:e.node.frontmatter.thumnail.childImageSharp.fluid,imgStyle:{objectFit:"cover",objectPosition:"50% 50%"}}),l.a.createElement("span",null,e.node.frontmatter.title)))}))))},f=a("N1om"),d=a.n(f),p=(t.default=function(e){var t,a=e.data,r=(e.pageContext,e.location),o=a.markdownRemark,f=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=a.previous,E=a.next,g=o.frontmatter.tags.map((function(e){return l.a.createElement("li",{class:"col"},l.a.createElement(n.Link,{to:"/tags/"+d()(e)+"/"},e))})),h=a.site.siteMetadata.siteUrl,v=o.frontmatter.slug;return l.a.createElement(i.a,{location:r,title:f},l.a.createElement(c.a,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt}),l.a.createElement("article",{className:"blog-post container-2",itemScope:"itemScope",itemType:"http://schema.org/Article"},l.a.createElement("header",{className:"text-center"},l.a.createElement("h1",{itemProp:"headline"},o.frontmatter.title),l.a.createElement("p",{className:"datetime"},o.frontmatter.date),l.a.createElement("ul",{class:"tag-group d-flex flex-wrap justify-content-center"},g),l.a.createElement(m.a,{title:o.frontmatter.title,url:h+"/"+v,description:o.excerpt}),l.a.createElement("figure",null,l.a.createElement("div",{className:"posts__image"},l.a.createElement(s.a,{className:"",fluid:o.frontmatter.thumnail.childImageSharp.fluid})))),l.a.createElement("section",{className:"articleBody",dangerouslySetInnerHTML:{__html:o.html},itemProp:"articleBody"})),l.a.createElement("nav",{className:"blog-post-nav container-2 mt-80"},l.a.createElement(u,{tags:o.frontmatter.tags,title:o.frontmatter.title}),l.a.createElement("p",{className:"mt-60"},"直近の記事"),l.a.createElement("ul",{className:"d-flex"},l.a.createElement("li",{className:"col-6 pl-10 pr-10"},p&&l.a.createElement(n.Link,{to:"/"+p.frontmatter.slug,rel:"prev"},l.a.createElement(s.a,{fluid:p.frontmatter.thumnail.childImageSharp.fluid,imgStyle:{objectFit:"cover",objectPosition:"50% 50%"}}),l.a.createElement("span",null,p.frontmatter.title))),l.a.createElement("li",{className:"col-6 pl-10 pr-10"},E&&l.a.createElement(n.Link,{to:"/"+E.frontmatter.slug,rel:"next"},l.a.createElement(s.a,{fluid:E.frontmatter.thumnail.childImageSharp.fluid,imgStyle:{objectFit:"cover",objectPosition:"50% 50%"}}),l.a.createElement("span",null,E.frontmatter.title))))))},"677333565")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f15a4989d325d5c10513.js.map