(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"OM/L":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return E}));var r=a("q1tI"),l=a.n(r),n=a("Wbzz"),m=a("Bl7J"),i=a("vrFN"),c=a("gFwQ"),o=a("9eSz"),s=a.n(o),u=a("oWC5"),f=a.n(u),d=function(e){var t=e.tags,a=e.title,r=Object(n.useStaticQuery)("2814112853").allMarkdownRemark.edges.filter((function(e){if(e.node.frontmatter.title===a)return!1;for(var r=0;r<t.length;r++)if(e.node.frontmatter.tags.indexOf(t[r])>=0)return!0;return!1}));if(!r.length)return null;r.slice(0,6);return l.a.createElement("div",{className:"mt-80"},l.a.createElement("p",null,"関連記事"),l.a.createElement("ul",{className:"blog-post-nav d-flex flex-wrap"},r.map((function(e,t){return l.a.createElement("li",{className:"col-md-4 col-6 pl-10 pr-10",key:t},l.a.createElement(n.Link,{to:"/"+e.node.frontmatter.slug},e.node.frontmatter.thumnail?l.a.createElement(s.a,{fluid:e.node.frontmatter.thumnail.childImageSharp.fluid,imgStyle:{objectFit:"cover",objectPosition:"50% 50%"}}):l.a.createElement("div",{className:"gatsby-image-wrapper"},l.a.createElement("img",{src:f.a,alt:"",className:"default-thumnail"})),l.a.createElement("span",null,e.node.frontmatter.title)))}))))},p=a("N1om"),g=a.n(p),E=(t.default=function(e){var t,a=e.data,r=(e.pageContext,e.location),o=a.markdownRemark,u=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=a.site.siteMetadata.siteUrl,E=o.frontmatter.slug,h=a.previous,N=a.next,v=o.frontmatter.tags.map((function(e){return l.a.createElement("li",{class:"col"},l.a.createElement(n.Link,{to:"/tags/"+g()(e)+"/"},e))})),b=o.frontmatter.thumnail?l.a.createElement(s.a,{fluid:o.frontmatter.thumnail.childImageSharp.fluid}):"",w=o.frontmatter.thumnail?""+p+o.frontmatter.thumnail.childImageSharp.fluid.src:""+p+f.a;return l.a.createElement(m.a,{location:r,title:u},l.a.createElement(i.a,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt,image:w}),l.a.createElement("article",{className:"blog-post container-2",itemScope:"itemScope",itemType:"http://schema.org/Article"},l.a.createElement("header",{className:"text-center"},l.a.createElement("figure",null,l.a.createElement("div",{className:"posts__image"},b)),l.a.createElement("h1",{itemProp:"headline"},o.frontmatter.title),l.a.createElement("p",{className:"datetime"},o.frontmatter.date),l.a.createElement("ul",{class:"tag-group d-flex flex-wrap justify-content-center"},v),l.a.createElement(c.a,{title:o.frontmatter.title,url:p+"/"+E,description:o.excerpt})),l.a.createElement("section",{className:"articleBody",dangerouslySetInnerHTML:{__html:o.html},itemProp:"articleBody"})),l.a.createElement("nav",{className:"blog-post-nav container-2 mt-80"},l.a.createElement(d,{tags:o.frontmatter.tags,title:o.frontmatter.title}),l.a.createElement("p",{className:"mt-60"},"直近の記事"),l.a.createElement("ul",{className:"d-flex"},l.a.createElement("li",{className:"col-6 pl-10 pr-10"},h&&l.a.createElement(n.Link,{to:"/"+h.frontmatter.slug,rel:"prev"},h.frontmatter.thumnail?l.a.createElement(s.a,{fluid:h.frontmatter.thumnail.childImageSharp.fluid,imgStyle:{objectFit:"cover",objectPosition:"50% 50%"}}):l.a.createElement("div",{className:"gatsby-image-wrapper"},l.a.createElement("img",{src:f.a,alt:"",className:"default-thumnail"})),l.a.createElement("span",null,h.frontmatter.title))),l.a.createElement("li",{className:"col-6 pl-10 pr-10"},N&&l.a.createElement(n.Link,{to:"/"+N.frontmatter.slug,rel:"next"},N.frontmatter.thumnail?l.a.createElement(s.a,{fluid:N.frontmatter.thumnail.childImageSharp.fluid,imgStyle:{objectFit:"cover",objectPosition:"50% 50%"}}):l.a.createElement("div",{className:"gatsby-image-wrapper"},l.a.createElement("img",{src:f.a,alt:"",className:"default-thumnail"})),l.a.createElement("span",null,N.frontmatter.title))))))},"433380205")}}]);
//# sourceMappingURL=component---src-templates-works-post-js-4a35d0a44a5add83f6a6.js.map