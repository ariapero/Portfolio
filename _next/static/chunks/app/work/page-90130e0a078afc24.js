(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{8776:(t,e,n)=>{Promise.resolve().then(n.bind(n,4208))},4208:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var r=n(5155),o=n(2115),i=n(7396),a=n(5565),l=n(8640),s=n.n(l);let c=["/to_man.jpg","/unsubscribe-blurcover.png","/body.png","/proj.png","/punky.png","/ff.jpg","/mozart.jpg","/spoken.png","/ur.png","/rambax.png","/civil.png","/door.jpg","/textile.png"],u=["","/work/web","/work/video","/work/sound","/work/design","/work/photo","https://ariapero.myportfolio.com/voice","/wip","https://ariapero.myportfolio.com/composition","/work/instrumental","https://ariapero.myportfolio.com/installation","https://ariapero.myportfolio.com/fabrication","/work/textile"],p=[{title:"Transdisciplinearity",subtitle:"scroll down or use the links below to navigate"},{title:"Web",subtitle:"web development and ui/ux design"},{title:"Video",subtitle:"audiovisual media and experimental performance"},{title:"Sound",subtitle:"sound design and music production"},{title:"Design",subtitle:"graphic and creative design"},{title:"Photo",subtitle:"photography and editing"},{title:"Voice",subtitle:"classical & jazz (solo & choral) voice"},{title:"Poetry",subtitle:"spoken word performance and written poetry"},{title:"Composition",subtitle:"music composition"},{title:"Instrumental",subtitle:"instrumental performance (sabar drums and analog synthesizer)"},{title:"Installation",subtitle:"civil disobedience and public art"},{title:"Fabrication",subtitle:"physical fabrication and sculpture"},{title:"Textile",subtitle:"textile work and clothing design"}];function d(){let[t,e]=(0,o.useState)(0),n=(0,o.useRef)(null),l=(0,o.useRef)(!1),[d,f]=(0,o.useState)(!1),[m,v]=(0,o.useState)(!1),g=t=>{setTimeout(()=>{l.current=!1},t)},x=()=>{t<c.length-1&&e(t=>t+1)},h=()=>{t>0&&e(t=>t-1)},b=t=>{e(t)};return(0,o.useEffect)(()=>{let t=()=>{f(window.innerWidth<768)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),(0,o.useEffect)(()=>{let e=s()(t=>{if(!d&&(t.preventDefault(),!l.current)){let e=-t.deltaY;e<=-30&&(l.current=!0,x(),g(600)),e>=30&&(l.current=!0,h(),g(600))}},60),r=n.current;return r&&!d&&r.addEventListener("wheel",e,{passive:!1}),v(t>0),()=>{r&&r.removeEventListener("wheel",e)}},[t,d]),(0,r.jsxs)("div",{ref:n,className:"min-h-screen ".concat(d?"overflow-y-auto":"overflow-hidden"),children:[c.map((e,n)=>(0,r.jsxs)("section",{className:"\n            ".concat(d?"relative min-h-screen":"fixed w-full","\n            bg-cover bg-no-repeat bg-center overflow-hidden will-change-transform backface-hidden\n            transition-transform duration-1200 ease-cubic-bezier\n            ").concat(n===t?"z-10":"z-0","\n            ").concat(!d&&(n<t?"down-scroll":n>t?"up-scroll":""),"\n          "),style:d?{}:{height:"calc(100vh + 30vh)",transform:"translateY(".concat((n-t)*100,"vh)")},children:[(0,r.jsx)(a.default,{src:e,alt:"Background ".concat(n+1),fill:!0,style:{objectFit:"cover"},quality:75,priority:0===n,loading:0===n?"eager":"lazy"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-35"}),(0,r.jsxs)("div",{className:"\n            h-screen flex justify-center items-center flex-col text-center text-white font-inter\n            ".concat(d?"":"\n              transform transition-transform duration-[1700ms] ease-cubic-bezier\n              ".concat(n<t?"translate-y-[40vh]":n>t?"translate-y-[30vh]":"translate-y-[0vh]","\n            "),"\n          "),children:[0===n?(0,r.jsx)("h1",{className:"text-7xl md:text-[20vh] leading-tight font-sloop z-20",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.15)"},children:p[n].title}):(0,r.jsx)(i.default,{href:u[n],className:"text-7xl md:text-[20vh] leading-tight font-sloop z-20 hover:opacity-75 transition-opacity",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.15)"},children:p[n].title}),(0,r.jsx)("p",{className:"text-2xl mt-4 font-zen font-medium",children:p[n].subtitle}),0===n&&(0,r.jsxs)("div",{className:"mt-12 flex flex-col items-center",children:[(0,r.jsx)("p",{className:"text-xl md:text-xl mb-0 font-bold uppercase font-zen",style:{textShadow:"1px 1px 1px rgba(0,0,0, 0.5)"},children:"Table of Contents"}),p.slice(1).map((t,e)=>(0,r.jsxs)("button",{onClick:()=>b(e+1),className:"text-sm my-0 hover:underline focus:outline-none font-zen font-medium lowercase",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.5)"},children:[e+1,". ",t.title]},e))]})]})]},n)),!d&&m&&(0,r.jsxs)("div",{className:"fixed right-8 top-1/2 transform -translate-y-1/2 z-50 group",title:"Back to Top",children:[(0,r.jsx)("button",{onClick:()=>{e(0)},className:"bg-white bg-opacity-50 text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})}),(0,r.jsx)("span",{className:"absolute right-full mr-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-white bg-opacity-50 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:"Back to Top"})]})]})}},1933:(t,e,n)=>{var r=n(2673).Symbol;t.exports=r},3600:(t,e,n)=>{var r=n(1933),o=n(8273),i=n(6798),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},1004:(t,e,n)=>{var r=n(7550),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},4952:(t,e,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},8273:(t,e,n)=>{var r=n(1933),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[l]=n:delete t[l]),o}},6798:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},2673:(t,e,n)=>{var r=n(4952),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},7550:t=>{var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},719:(t,e,n)=>{var r=n(5255),o=n(1332),i=n(2816),a=Math.max,l=Math.min;t.exports=function(t,e,n){var s,c,u,p,d,f,m=0,v=!1,g=!1,x=!0;if("function"!=typeof t)throw TypeError("Expected a function");function h(e){var n=s,r=c;return s=c=void 0,m=e,p=t.apply(r,n)}function b(t){var n=t-f,r=t-m;return void 0===f||n>=e||n<0||g&&r>=u}function y(){var t,n,r,i=o();if(b(i))return w(i);d=setTimeout(y,(t=i-f,n=i-m,r=e-t,g?l(r,u-n):r))}function w(t){return(d=void 0,x&&s)?h(t):(s=c=void 0,p)}function j(){var t,n=o(),r=b(n);if(s=arguments,c=this,f=n,r){if(void 0===d)return m=t=f,d=setTimeout(y,e),v?h(t):p;if(g)return clearTimeout(d),d=setTimeout(y,e),h(f)}return void 0===d&&(d=setTimeout(y,e)),p}return e=i(e)||0,r(n)&&(v=!!n.leading,u=(g="maxWait"in n)?a(i(n.maxWait)||0,e):u,x="trailing"in n?!!n.trailing:x),j.cancel=function(){void 0!==d&&clearTimeout(d),m=0,s=f=c=d=void 0},j.flush=function(){return void 0===d?p:w(o())},j}},5255:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},4480:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},3480:(t,e,n)=>{var r=n(3600),o=n(4480);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},1332:(t,e,n)=>{var r=n(2673);t.exports=function(){return r.Date.now()}},8640:(t,e,n)=>{var r=n(719),o=n(5255);t.exports=function(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:i,maxWait:e,trailing:a})}},2816:(t,e,n)=>{var r=n(1004),o=n(5255),i=n(3480),a=0/0,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=s.test(t);return n||c.test(t)?u(t.slice(2),n?2:8):l.test(t)?a:+t}},5565:(t,e,n)=>{"use strict";n.d(e,{default:()=>o.a});var r=n(4146),o=n.n(r)},7396:(t,e,n)=>{"use strict";n.d(e,{default:()=>o.a});var r=n(4839),o=n.n(r)},4146:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{default:function(){return s},getImageProps:function(){return l}});let r=n(306),o=n(666),i=n(7970),a=r._(n(5514));function l(t){let{props:e}=(0,o.getImgProps)(t,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,n]of Object.entries(e))void 0===n&&delete e[t];return{props:e}}let s=i.Image}},t=>{var e=e=>t(t.s=e);t.O(0,[839,970,441,517,358],()=>e(8776)),_N_E=t.O()}]);