(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{8776:(e,t,r)=>{Promise.resolve().then(r.bind(r,4208))},4208:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(5155),o=r(2115),i=r(7396),a=r(5565),l=r(8640),s=r.n(l),c=r(1902);let u=["/to_man.jpg","/unsubscribe-blurcover.png","/body.png","/proj.png","/punky.png","/ff.jpg","/mozart.jpg","/spoken.png","/ur.png","/rambax.png","/civil.png","/door.jpg","/textile.png"],d=["","/work/web","/work/video","/work/sound","/work/design","/work/photo","https://ariapero.myportfolio.com/voice","/wip","https://ariapero.myportfolio.com/composition","/work/instrumental","https://ariapero.myportfolio.com/installation","https://ariapero.myportfolio.com/fabrication","/work/textile"],p=[{title:"Transdisciplinearity",subtitle:"scroll down or use the links below to navigate"},{title:"Web",subtitle:"web development and ui/ux design"},{title:"Video",subtitle:"audiovisual media and experimental performance"},{title:"Sound",subtitle:"sound design and music production"},{title:"Design",subtitle:"graphic and creative design"},{title:"Photo",subtitle:"photography and editing"},{title:"Voice",subtitle:"classical & jazz (solo & choral) voice"},{title:"Poetry",subtitle:"spoken word performance and written poetry"},{title:"Composition",subtitle:"music composition"},{title:"Instrumental",subtitle:"instrumental performance (sabar drums and analog synthesizer)"},{title:"Installation",subtitle:"civil disobedience and public art"},{title:"Fabrication",subtitle:"physical fabrication and sculpture"},{title:"Textile",subtitle:"textile work and clothing design"}];function f(){let[e,t]=(0,o.useState)(0),r=(0,o.useRef)(null),l=(0,o.useRef)(!1),[f,m]=(0,o.useState)(!1),v=e=>{setTimeout(()=>{l.current=!1},e)},g=()=>{e<u.length-1&&t(e=>e+1)},h=()=>{e>0&&t(e=>e-1)},x=e=>{t(e)};return(0,o.useEffect)(()=>{let t=s()(e=>{if(e.preventDefault(),!l.current){let n=0;if(e instanceof WheelEvent)n=-e.deltaY;else if(e instanceof TouchEvent){var t;n=e.touches[0].clientY-((null===(t=r.current)||void 0===t?void 0:t.getBoundingClientRect().top)||0)}n<=-30&&(l.current=!0,g(),v(600)),n>=30&&(l.current=!0,h(),v(600))}},60),n=r.current;return n&&(n.addEventListener("wheel",t,{passive:!1}),n.addEventListener("touchmove",t,{passive:!1})),m(e>0),()=>{n&&(n.removeEventListener("wheel",t),n.removeEventListener("touchmove",t))}},[e]),(0,n.jsxs)("div",{ref:r,className:"h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory",children:[u.map((t,r)=>(0,n.jsxs)("section",{className:"\n            fixed w-full h-screen bg-cover bg-no-repeat bg-center overflow-hidden will-change-transform backface-hidden\n            transition-transform duration-1200 ease-cubic-bezier snap-start\n            ".concat(r===e?"z-10":"z-0","\n            ").concat(r<e?"down-scroll":r>e?"up-scroll":"","\n          "),style:{transform:"translateY(".concat((r-e)*100,"vh)")},children:[(0,n.jsx)(a.default,{src:t,alt:"Background ".concat(r+1),fill:!0,style:{objectFit:"cover"},quality:75,priority:0===r,loading:0===r?"eager":"lazy"}),(0,n.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-35"}),(0,n.jsxs)("div",{className:"\n            h-screen flex justify-center items-center flex-col text-center text-white font-inter\n          ",children:[0===r?(0,n.jsx)("h1",{className:"text-3xl md:text-[20vh] leading-tight font-sloop z-20",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.15)"},children:p[r].title}):(0,n.jsx)(i.default,{href:d[r],className:"text-3xl md:text-[20vh] leading-tight font-sloop z-20 hover:opacity-75 transition-opacity",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.15)"},children:p[r].title}),(0,n.jsx)("p",{className:"text-xl md:text-2xl mt-4 font-zen font-medium",children:p[r].subtitle}),0===r&&(0,n.jsxs)("div",{className:"mt-12 flex flex-col items-center",children:[(0,n.jsx)("p",{className:"text-xl mb-0 font-bold uppercase font-zen",style:{textShadow:"1px 1px 1px rgba(0,0,0, 0.5)"},children:"Table of Contents"}),p.slice(1).map((e,t)=>(0,n.jsxs)("button",{onClick:()=>x(t+1),className:"text-sm my-0 hover:underline focus:outline-none font-zen font-medium lowercase",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.5)"},children:[t+1,". ",e.title]},t))]})]})]},r)),f&&(0,n.jsxs)("div",{className:"fixed right-4 bottom-4 z-50 group",title:"Back to Top",children:[(0,n.jsx)("button",{onClick:()=>{t(0)},className:"bg-white bg-opacity-50 text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none",children:(0,n.jsx)(c.A,{className:"h-6 w-6"})}),(0,n.jsx)("span",{className:"absolute right-full mr-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-white bg-opacity-50 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:"Back to Top"})]})]})}},1933:(e,t,r)=>{var n=r(2673).Symbol;e.exports=n},3600:(e,t,r)=>{var n=r(1933),o=r(8273),i=r(6798),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},1004:(e,t,r)=>{var n=r(7550),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},4952:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},8273:(e,t,r)=>{var n=r(1933),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[l]=r:delete e[l]),o}},6798:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},2673:(e,t,r)=>{var n=r(4952),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},7550:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},719:(e,t,r)=>{var n=r(5255),o=r(1332),i=r(2816),a=Math.max,l=Math.min;e.exports=function(e,t,r){var s,c,u,d,p,f,m=0,v=!1,g=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var r=s,n=c;return s=c=void 0,m=t,d=e.apply(n,r)}function b(e){var r=e-f,n=e-m;return void 0===f||r>=t||r<0||g&&n>=u}function y(){var e,r,n,i=o();if(b(i))return w(i);p=setTimeout(y,(e=i-f,r=i-m,n=t-e,g?l(n,u-r):n))}function w(e){return(p=void 0,h&&s)?x(e):(s=c=void 0,d)}function j(){var e,r=o(),n=b(r);if(s=arguments,c=this,f=r,n){if(void 0===p)return m=e=f,p=setTimeout(y,t),v?x(e):d;if(g)return clearTimeout(p),p=setTimeout(y,t),x(f)}return void 0===p&&(p=setTimeout(y,t)),d}return t=i(t)||0,n(r)&&(v=!!r.leading,u=(g="maxWait"in r)?a(i(r.maxWait)||0,t):u,h="trailing"in r?!!r.trailing:h),j.cancel=function(){void 0!==p&&clearTimeout(p),m=0,s=f=c=p=void 0},j.flush=function(){return void 0===p?d:w(o())},j}},5255:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},4480:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3480:(e,t,r)=>{var n=r(3600),o=r(4480);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},1332:(e,t,r)=>{var n=r(2673);e.exports=function(){return n.Date.now()}},8640:(e,t,r)=>{var n=r(719),o=r(5255);e.exports=function(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw TypeError("Expected a function");return o(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}},2816:(e,t,r)=>{var n=r(1004),o=r(5255),i=r(3480),a=0/0,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=s.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):l.test(e)?a:+e}},7401:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:c="",children:u,iconNode:d,...p}=e;return(0,n.createElement)("svg",{ref:t,...a,width:o,height:o,stroke:r,strokeWidth:s?24*Number(l)/Number(o):l,className:i("lucide",c),...p},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:s,...c}=r;return(0,n.createElement)(l,{ref:a,iconNode:t,className:i("lucide-".concat(o(e)),s),...c})});return r.displayName="".concat(e),r}},1902:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(7401).A)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},5565:(e,t,r)=>{"use strict";r.d(t,{default:()=>o.a});var n=r(4146),o=r.n(n)},7396:(e,t,r)=>{"use strict";r.d(t,{default:()=>o.a});var n=r(4839),o=r.n(n)},4146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let n=r(306),o=r(666),i=r(7970),a=n._(r(5514));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=i.Image}},e=>{var t=t=>e(e.s=t);e.O(0,[839,970,441,517,358],()=>t(8776)),_N_E=e.O()}]);