(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6Gk8":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("9eSz"),s=a.n(l);t.a=function(){var e,t,a,r,l=Object(n.useStaticQuery)("3346997724"),d=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.social,c=null==l||null===(a=l.avatar)||void 0===a||null===(r=a.childImageSharp)||void 0===r?void 0:r.fixed;return i.a.createElement("div",{className:"bio border p-20 mt-60"},i.a.createElement("div",{className:"d-md-flex align-items-center"},i.a.createElement("div",{className:"col"},i.a.createElement("figure",{class:"p-20 text-center"},c&&i.a.createElement(s.a,{fixed:c,alt:(null==d?void 0:d.name)||"",className:"bio-avatar",imgStyle:{borderRadius:"100%"}}))),i.a.createElement("div",{className:"col"},i.a.createElement("dl",{className:"bio-description"},i.a.createElement("dt",{className:"text-center text-md-left"},i.a.createElement("strpng",null,d.name)),i.a.createElement("dd",null,i.a.createElement("p",null,"漫画をこよなく愛しています。 WEBデザイナー7年目の男性社会人。 現在大阪在住 目標は好きなことで働き、生活からストレスをなくすこと。固定費10万以内に抑えたい。"),i.a.createElement("ul",{className:"d-flex flex-wrap pt-10"},i.a.createElement("li",{class:"col"},(null==d?void 0:d.name)&&i.a.createElement("p",{className:"pr-10"},i.a.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||""),target:"_blank",rel:"noreferrer"},"Twitter")))))))))}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+o+l+s+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(O,(0,d.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,i(r),s):s})),O=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,N=e.draggable,I=g||h;if(!I)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,d.default)({opacity:k?1:0,transition:V?"opacity "+v+"ms":"none"},s),T="boolean"==typeof b?"lightgray":b,C={transitionDelay:v+"ms"},W=(0,d.default)({opacity:this.state.imgLoaded?0:1},V&&C,s,f),P={title:t,alt:this.state.isVisible?"":a,style:W,className:m,itemProp:E},j=this.state.isHydrated?p(I):I[0];if(g)return o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),T&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&C)}),j.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:P,imageVariants:I,generateSources:x}),j.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:P,imageVariants:I,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,S(I),o.default.createElement(O,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:I}))}}));if(h){var q=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete q.display,o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},T&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},V&&C)}),j.base64&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:P,imageVariants:I,generateSources:x}),j.tracedSVG&&o.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:P,imageVariants:I,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,S(I),o.default.createElement(O,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:I}))}}))}return null},t}(o.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function T(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:V,sizes:H,fixed:T(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:T(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=k;t.default=C},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=function(e){e.data;var t=["Home","Profile","Works"].map((function(e){var t="";return t="Home"===e?"/":"/"+e.toLowerCase()+"/",i.a.createElement("li",{key:t,className:"col-4 text-center"},i.a.createElement(n.Link,{to:t,className:"page-link d-flex align-items-center justify-content-center"},i.a.createElement("span",null,e)))}));return i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"container-2"},i.a.createElement("p",{className:"App-logo"},i.a.createElement(n.Link,{to:"/"},"DeinNote"))),i.a.createElement("nav",{className:"App-navbar d-none"},i.a.createElement("div",{className:"App-navbar-item container"},i.a.createElement("ul",{className:"d-flex"},t))))},s=function(){return i.a.createElement("footer",{class:"text-center pt-50"},i.a.createElement("p",null,i.a.createElement("small",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://iodein.com/"},"DeinNote"))))},d=a("6Gk8");t.a=function(e){var t=e.location,a=(e.title,e.children),r="/"===t.pathname;return i.a.createElement("div",{className:"global-wrapper","data-is-root-path":r},i.a.createElement(l,null),i.a.createElement("main",{className:"pt-md-60 pb-md-60 pt-md-30 pb-md-30"},a),i.a.createElement("div",{className:"container"},i.a.createElement(d.a,null)),i.a.createElement(s,null))}},vrFN:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("TJpk"),l=a("Wbzz"),s=function(e){var t,a,r,s=e.description,d=e.lang,o=e.meta,c=e.title,u=Object(l.useStaticQuery)("2841359383").site,f=s||u.siteMetadata.description,m=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return i.a.createElement(n.Helmet,{htmlAttributes:{lang:d},title:c,titleTemplate:m?"%s | "+m:null,meta:[{name:"description",content:f},{property:"og:title",content:c},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:f}].concat(o)})};s.defaultProps={lang:"ja",meta:[],description:""},t.a=s}}]);
//# sourceMappingURL=2d395fbf4b9870e5fd9d86f808ba935bc3f4f380-c455edb153aeb21a47f8.js.map