(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{8776:(t,e,r)=>{Promise.resolve().then(r.bind(r,4208))},4208:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>f});var n=r(5155),o=r(2115),i=r(7396),a=r(5565),l=r(8640),s=r.n(l),c=r(1902);let u=["/to_man.jpg","/unsubscribe-blurcover.png","/body.png","/proj.png","/punky.png","/ff.jpg","/mozart.jpg","/spoken.png","/ur.png","/rambax.png","/civil.png","/door.jpg","/textile.jpg"],d=["","/work/web","/work/video","/work/sound","/work/design","/work/photo","https://ariapero.myportfolio.com/voice","/wip","https://ariapero.myportfolio.com/composition","/work/instrumental","https://ariapero.myportfolio.com/installation","https://ariapero.myportfolio.com/fabrication","/work/textile"],p=[{title:"Transdisciplinearity",subtitle:"scroll down or use the links below to navigate"},{title:"Web",subtitle:"web dev, civic tech, and ui/ux design"},{title:"Video",subtitle:"audiovisual media and experimental performance"},{title:"Sound",subtitle:"sound design and music production"},{title:"Design",subtitle:"graphic and creative design"},{title:"Photo",subtitle:"photography and editing"},{title:"Voice",subtitle:"classical & jazz (solo & choral) voice"},{title:"Poetry",subtitle:"spoken word performance and written poetry"},{title:"Composition",subtitle:"music composition"},{title:"Instrumental",subtitle:"instrumental performance (sabar drums and analog synthesizer)"},{title:"Installation",subtitle:"civil disobedience and public art"},{title:"Fabrication",subtitle:"physical fabrication and sculpture"},{title:"Textile",subtitle:"textile work and clothing design"}];function f(){let[t,e]=(0,o.useState)(0),r=(0,o.useRef)(null),[l,f]=(0,o.useState)(!1),[m,g]=(0,o.useState)(!1),h=t=>{r.current&&r.current.scrollTo({top:t*window.innerHeight,behavior:"smooth"})},v=t=>{e(t),h(t)};return(0,o.useEffect)(()=>{let t=()=>{f(window.innerWidth<768)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),(0,o.useEffect)(()=>{let n=s()(()=>{if(r.current){let n=r.current.scrollTop,o=window.innerHeight,i=Math.round(n/o);Math.abs(n-t*o)>o/2&&e(i),g(i>0)}},100),o=r.current;return o&&o.addEventListener("scroll",n),()=>{o&&o.removeEventListener("scroll",n)}},[t]),(0,n.jsxs)("div",{ref:r,className:"h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory",style:{scrollSnapType:"y mandatory",scrollBehavior:"smooth"},children:[u.map((t,e)=>(0,n.jsxs)("section",{className:"\n            relative w-full h-screen bg-cover bg-no-repeat bg-center overflow-hidden\n            snap-start\n          ",children:[(0,n.jsx)("div",{className:"absolute inset-0",style:{height:"calc(100vh + 25vh)"},children:(0,n.jsx)(a.default,{src:t,alt:"Background ".concat(e+1),fill:!0,style:{objectFit:"cover"},quality:75,priority:0===e,loading:0===e?"eager":"lazy"})}),(0,n.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-35"}),(0,n.jsxs)("div",{className:"absolute inset-0 flex justify-center items-center flex-col text-center text-white font-inter transform -translate-y-5 md:-translate-y-0",children:[0===e?(0,n.jsx)("h1",{className:"z-20 text-[5vh] md:text-[20vh] leading-tight tracking-tighter md:tracking-normal uppercase md:capitalize font-medium md:font-normal font-zen md:font-sloop",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.15)"},children:p[e].title}):(0,n.jsx)(i.default,{href:d[e],className:"z-20 text-[8vh] md:text-[20vh] leading-tight tracking-tighter md:tracking-normal uppercase md:capitalize font-medium md:font-normal font-zen md:font-sloop hover:opacity-75 transition-opacity",style:l?{textShadow:"1px 1px 2px rgba(0,0,0, 0.5)"}:{textShadow:"1px 1px 2px rgba(0,0,0, 0.15)"},children:p[e].title}),(0,n.jsx)("p",{className:"text-xl md:text-2xl mt-2 md:mt-4 font-zen font-medium z-10",children:p[e].subtitle}),0===e&&(0,n.jsxs)("div",{className:"mt-12 flex flex-col items-center z-10",children:[(0,n.jsx)("p",{className:"text-xl md:text-xl mb-0 font-bold uppercase font-zen tracking-tight md:tracking-normal",style:{textShadow:"1px 1px 1px rgba(0,0,0, 0.5)"},children:"Table of Contents"}),p.slice(1).map((t,e)=>(0,n.jsxs)("button",{onClick:()=>v(e+1),className:"text-sm my-0 hover:underline focus:outline-none font-zen font-medium lowercase",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.5)"},children:[e+1,". ",t.title]},e))]})]})]},e)),m&&(0,n.jsxs)("div",{className:"fixed right-8 top-1/2 transform -translate-y-1/2 z-50 group",title:"Back to Top",children:[(0,n.jsx)("button",{onClick:()=>{e(0),h(0)},className:"bg-white bg-opacity-50 text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none",children:(0,n.jsx)(c.A,{className:"h-6 w-6"})}),(0,n.jsx)("span",{className:"absolute right-full mr-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-white bg-opacity-50 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:"Back to Top"})]})]})}},1933:(t,e,r)=>{var n=r(2673).Symbol;t.exports=n},3600:(t,e,r)=>{var n=r(1933),o=r(8273),i=r(6798),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},1004:(t,e,r)=>{var n=r(7550),o=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(o,""):t}},4952:(t,e,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},8273:(t,e,r)=>{var n=r(1933),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,l),r=t[l];try{t[l]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[l]=r:delete t[l]),o}},6798:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},2673:(t,e,r)=>{var n=r(4952),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},7550:t=>{var e=/\s/;t.exports=function(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}},719:(t,e,r)=>{var n=r(5255),o=r(1332),i=r(2816),a=Math.max,l=Math.min;t.exports=function(t,e,r){var s,c,u,d,p,f,m=0,g=!1,h=!1,v=!0;if("function"!=typeof t)throw TypeError("Expected a function");function x(e){var r=s,n=c;return s=c=void 0,m=e,d=t.apply(n,r)}function b(t){var r=t-f,n=t-m;return void 0===f||r>=e||r<0||h&&n>=u}function y(){var t,r,n,i=o();if(b(i))return w(i);p=setTimeout(y,(t=i-f,r=i-m,n=e-t,h?l(n,u-r):n))}function w(t){return(p=void 0,v&&s)?x(t):(s=c=void 0,d)}function j(){var t,r=o(),n=b(r);if(s=arguments,c=this,f=r,n){if(void 0===p)return m=t=f,p=setTimeout(y,e),g?x(t):d;if(h)return clearTimeout(p),p=setTimeout(y,e),x(f)}return void 0===p&&(p=setTimeout(y,e)),d}return e=i(e)||0,n(r)&&(g=!!r.leading,u=(h="maxWait"in r)?a(i(r.maxWait)||0,e):u,v="trailing"in r?!!r.trailing:v),j.cancel=function(){void 0!==p&&clearTimeout(p),m=0,s=f=c=p=void 0},j.flush=function(){return void 0===p?d:w(o())},j}},5255:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},4480:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},3480:(t,e,r)=>{var n=r(3600),o=r(4480);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},1332:(t,e,r)=>{var n=r(2673);t.exports=function(){return n.Date.now()}},8640:(t,e,r)=>{var n=r(719),o=r(5255);t.exports=function(t,e,r){var i=!0,a=!0;if("function"!=typeof t)throw TypeError("Expected a function");return o(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),n(t,e,{leading:i,maxWait:e,trailing:a})}},2816:(t,e,r)=>{var n=r(1004),o=r(5255),i=r(3480),a=0/0,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var r=s.test(t);return r||c.test(t)?u(t.slice(2),r?2:8):l.test(t)?a:+t}},7401:(t,e,r)=>{"use strict";r.d(e,{A:()=>s});var n=r(2115);let o=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.filter((t,e,r)=>!!t&&""!==t.trim()&&r.indexOf(t)===e).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((t,e)=>{let{color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:c="",children:u,iconNode:d,...p}=t;return(0,n.createElement)("svg",{ref:e,...a,width:o,height:o,stroke:r,strokeWidth:s?24*Number(l)/Number(o):l,className:i("lucide",c),...p},[...d.map(t=>{let[e,r]=t;return(0,n.createElement)(e,r)}),...Array.isArray(u)?u:[u]])}),s=(t,e)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:s,...c}=r;return(0,n.createElement)(l,{ref:a,iconNode:e,className:i("lucide-".concat(o(t)),s),...c})});return r.displayName="".concat(t),r}},1902:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});let n=(0,r(7401).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},5565:(t,e,r)=>{"use strict";r.d(e,{default:()=>o.a});var n=r(4146),o=r.n(n)},7396:(t,e,r)=>{"use strict";r.d(e,{default:()=>o.a});var n=r(4839),o=r.n(n)},4146:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{default:function(){return s},getImageProps:function(){return l}});let n=r(306),o=r(666),i=r(7970),a=n._(r(5514));function l(t){let{props:e}=(0,o.getImgProps)(t,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,r]of Object.entries(e))void 0===r&&delete e[t];return{props:e}}let s=i.Image}},t=>{var e=e=>t(t.s=e);t.O(0,[839,970,441,517,358],()=>e(8776)),_N_E=t.O()}]);