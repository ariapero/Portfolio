(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{8776:(t,e,n)=>{Promise.resolve().then(n.bind(n,4208))},4208:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var r=n(5155),i=n(2115),o=n(7396),a=n(8640),s=n.n(a);let l=["/to_man.jpg","/unsubscribe-blurcover.png","/body.png","/proj.png","/punky.png","/ff.jpg","/mozart.jpg","/spoken.png","/ur.png","/rambax.png","/civil.png","/door.jpg","/textile.png"],c=["","/work/web","/work/video","/wip","/wip","/wip","/wip","/wip","/wip","/wip","/wip","/wip","/wip"],u=[{title:"Transdisciplinearity",subtitle:"scroll down or use the links below to navigate"},{title:"Web",subtitle:"web development and ui/ux design"},{title:"Video",subtitle:"audiovisual media and experimental performance"},{title:"Sound",subtitle:"sound design and music production"},{title:"Design",subtitle:"graphic and creative design"},{title:"Photo",subtitle:"photography and editing"},{title:"Voice",subtitle:"classical & jazz (solo & choral) voice"},{title:"Poetry",subtitle:"spoken word performance and written poetry"},{title:"Composition",subtitle:"music composition"},{title:"Instrumental",subtitle:"instrumental performance (sabar drums and analog synthesizer)"},{title:"Installation",subtitle:"civil disobedience and public art"},{title:"Fabrication",subtitle:"physical fabrication and sculpture"},{title:"Textile",subtitle:"textile work and clothing design"}];function p(){let[t,e]=(0,i.useState)(0),n=(0,i.useRef)(null),a=(0,i.useRef)(!1),p="undefined"!=typeof navigator&&/Firefox/i.test(navigator.userAgent),d="undefined"!=typeof navigator&&(/MSIE/i.test(navigator.userAgent)||/Trident.*rv\:11\./i.test(navigator.userAgent)),[f,v]=(0,i.useState)(!1),g=t=>{setTimeout(()=>{a.current=!1},t)},b=()=>{t<l.length-1&&e(t=>t+1)},x=()=>{t>0&&e(t=>t-1)},h=t=>{e(t)};return(0,i.useEffect)(()=>{let e=s()(t=>{if(t.preventDefault(),!a.current){let e=-t.deltaY;e<=-30&&(a.current=!0,b(),g(600)),e>=30&&(a.current=!0,x(),g(600))}},60),r=n.current;return r&&r.addEventListener("wheel",e,{passive:!1}),v(t>0),()=>{r&&r.removeEventListener("wheel",e)}},[t,p,d]),(0,r.jsxs)("div",{ref:n,className:"h-screen overflow-hidden",children:[l.map((e,n)=>(0,r.jsxs)("section",{className:"\n            fixed w-full bg-cover bg-no-repeat bg-center overflow-hidden will-change-transform backface-hidden\n            transition-transform duration-1200 ease-cubic-bezier\n            ".concat(n===t?"z-10":"z-0","\n            ").concat(n<t?"down-scroll":n>t?"up-scroll":"","\n          "),style:{backgroundImage:"url(".concat(e,")"),height:"calc(100vh + 30vh)",transform:"translateY(".concat((n-t)*100,"vh)")},children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-35"}),(0,r.jsxs)("div",{className:"\n            h-screen flex justify-center items-center flex-col text-center text-white font-inter\n            transform transition-transform duration-[1700ms] ease-cubic-bezier\n            ".concat(n<t?"translate-y-[40vh]":n>t?"translate-y-[30vh]":"translate-y-[0vh]","\n          "),children:[0===n?(0,r.jsx)("h1",{className:"text-[20vh] leading-tight font-sloop z-20",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.15)"},children:u[n].title}):(0,r.jsx)(o.default,{href:c[n],className:"text-[20vh] leading-tight font-sloop z-20 hover:opacity-75 transition-opacity",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.15)"},children:u[n].title}),(0,r.jsx)("p",{className:"text-2xl mt-4 font-zen font-medium",children:u[n].subtitle}),0===n&&(0,r.jsxs)("div",{className:"mt-12 flex flex-col items-center",children:[(0,r.jsx)("p",{className:"text-xl mb-0 font-bold uppercase font-zen",style:{textShadow:"1px 1px 1px rgba(0,0,0, 0.5)"},children:"Table of Contents"}),u.slice(1).map((t,e)=>(0,r.jsxs)("button",{onClick:()=>h(e+1),className:"text-sm my-0 hover:underline focus:outline-none font-zen font-medium lowercase",style:{textShadow:"1px 1px 2px rgba(0,0,0, 0.5)"},children:[e+1,". ",t.title]},e))]})]})]},n)),f&&(0,r.jsxs)("div",{className:"fixed right-8 top-1/2 transform -translate-y-1/2 z-50 group",title:"Back to Top",children:[(0,r.jsx)("button",{onClick:()=>{e(0)},className:"bg-white bg-opacity-50 text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})}),(0,r.jsx)("span",{className:"absolute right-full mr-2 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-white bg-opacity-50 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:"Back to Top"})]})]})}},1933:(t,e,n)=>{var r=n(2673).Symbol;t.exports=r},3600:(t,e,n)=>{var r=n(1933),i=n(8273),o=n(6798),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},1004:(t,e,n)=>{var r=n(7550),i=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(i,""):t}},4952:(t,e,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},8273:(t,e,n)=>{var r=n(1933),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[s]=n:delete t[s]),i}},6798:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},2673:(t,e,n)=>{var r=n(4952),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},7550:t=>{var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},719:(t,e,n)=>{var r=n(5255),i=n(1332),o=n(2816),a=Math.max,s=Math.min;t.exports=function(t,e,n){var l,c,u,p,d,f,v=0,g=!1,b=!1,x=!0;if("function"!=typeof t)throw TypeError("Expected a function");function h(e){var n=l,r=c;return l=c=void 0,v=e,p=t.apply(r,n)}function m(t){var n=t-f,r=t-v;return void 0===f||n>=e||n<0||b&&r>=u}function y(){var t,n,r,o=i();if(m(o))return w(o);d=setTimeout(y,(t=o-f,n=o-v,r=e-t,b?s(r,u-n):r))}function w(t){return(d=void 0,x&&l)?h(t):(l=c=void 0,p)}function j(){var t,n=i(),r=m(n);if(l=arguments,c=this,f=n,r){if(void 0===d)return v=t=f,d=setTimeout(y,e),g?h(t):p;if(b)return clearTimeout(d),d=setTimeout(y,e),h(f)}return void 0===d&&(d=setTimeout(y,e)),p}return e=o(e)||0,r(n)&&(g=!!n.leading,u=(b="maxWait"in n)?a(o(n.maxWait)||0,e):u,x="trailing"in n?!!n.trailing:x),j.cancel=function(){void 0!==d&&clearTimeout(d),v=0,l=f=c=d=void 0},j.flush=function(){return void 0===d?p:w(i())},j}},5255:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},4480:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},3480:(t,e,n)=>{var r=n(3600),i=n(4480);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},1332:(t,e,n)=>{var r=n(2673);t.exports=function(){return r.Date.now()}},8640:(t,e,n)=>{var r=n(719),i=n(5255);t.exports=function(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:o,maxWait:e,trailing:a})}},2816:(t,e,n)=>{var r=n(1004),i=n(5255),o=n(3480),a=0/0,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return a;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=l.test(t);return n||c.test(t)?u(t.slice(2),n?2:8):s.test(t)?a:+t}},7396:(t,e,n)=>{"use strict";n.d(e,{default:()=>i.a});var r=n(4839),i=n.n(r)}},t=>{var e=e=>t(t.s=e);t.O(0,[839,441,517,358],()=>e(8776)),_N_E=t.O()}]);