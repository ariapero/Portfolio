"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{7401:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(2115);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:u="",children:c,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:t,...o,width:l,height:l,stroke:r,strokeWidth:a?24*Number(s)/Number(l):s,className:i("lucide",u),...f},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),a=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:a,...u}=r;return(0,n.createElement)(s,{ref:o,iconNode:t,className:i("lucide-".concat(l(e)),a),...u})});return r.displayName="".concat(e),r}},7364:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},8068:(e,t,r)=>{r.d(t,{s:()=>i,t:()=>l});var n=r(2115);function l(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return n.useCallback(l(...e),e)}},2317:(e,t,r)=>{r.d(t,{DX:()=>o});var n=r(2115),l=r(8068),i=r(5155),o=n.forwardRef((e,t)=>{let{children:r,...l}=e,o=n.Children.toArray(r),a=o.find(u);if(a){let e=a.props.children,r=o.map(t=>t!==a?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,i.jsx)(s,{...l,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,i.jsx)(s,{...l,ref:t,children:r})});o.displayName="Slot";var s=n.forwardRef((e,t)=>{let{children:r,...i}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let l=e[n],i=t[n];/^on[A-Z]/.test(n)?l&&i?r[n]=(...e)=>{i(...e),l(...e)}:l&&(r[n]=l):"style"===n?r[n]={...l,...i}:"className"===n&&(r[n]=[l,i].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props),ref:t?(0,l.t)(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});s.displayName="SlotClone";var a=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function u(e){return n.isValidElement(e)&&e.type===a}},652:(e,t,r)=>{r.d(t,{F:()=>i});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(l&&(l+=" "),l+=n);else for(r in t)t[r]&&(l&&(l+=" "),l+=r)}return l}(e))&&(n&&(n+=" "),n+=t);return n},i=(e,t)=>r=>{var i;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:o,defaultVariants:s}=t,a=Object.keys(o).map(e=>{let t=null==r?void 0:r[e],l=null==s?void 0:s[e];if(null===t)return null;let i=n(t)||n(l);return o[e][i]}),u=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return l(e,a,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:r,className:n,...l}=t;return Object.entries(l).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...u}[t]):({...s,...u})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},5683:(e,t,r)=>{r.d(t,{N:()=>g});var n=r(5155),l=r(2115),i=r(9656),o=r(9234),s=r(7249);class a extends l.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:r}=e,i=(0,l.useId)(),o=(0,l.useRef)(null),u=(0,l.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,l.useContext)(s.Q);return(0,l.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:l}=u.current;if(r||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;let s=document.createElement("style");return c&&(s.nonce=c),document.head.appendChild(s),s.sheet&&s.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(n,"px !important;\n            left: ").concat(l,"px !important;\n          }\n        ")),()=>{document.head.removeChild(s)}},[r]),(0,n.jsx)(a,{isPresent:r,childRef:o,sizeRef:u,children:l.cloneElement(t,{ref:o})})}let c=e=>{let{children:t,initial:r,isPresent:s,onExitComplete:a,custom:c,presenceAffectsLayout:f,mode:p}=e,h=(0,o.M)(d),m=(0,l.useId)(),v=(0,l.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;a&&a()},[h,a]),g=(0,l.useMemo)(()=>({id:m,initial:r,isPresent:s,custom:c,onExitComplete:v,register:e=>(h.set(e,!1),()=>h.delete(e))}),f?[Math.random(),v]:[s,v]);return(0,l.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[s]),l.useEffect(()=>{s||h.size||!a||a()},[s]),"popLayout"===p&&(t=(0,n.jsx)(u,{isPresent:s,children:t})),(0,n.jsx)(i.t.Provider,{value:g,children:t})};function d(){return new Map}var f=r(4710),p=r(5749);let h=e=>e.key||"";function m(e){let t=[];return l.Children.forEach(e,e=>{(0,l.isValidElement)(e)&&t.push(e)}),t}var v=r(5403);let g=e=>{let{children:t,exitBeforeEnter:r,custom:i,initial:s=!0,onExitComplete:a,presenceAffectsLayout:u=!0,mode:d="sync"}=e;(0,p.V)(!r,"Replace exitBeforeEnter with mode='wait'");let g=(0,l.useMemo)(()=>m(t),[t]),y=g.map(h),w=(0,l.useRef)(!0),E=(0,l.useRef)(g),x=(0,o.M)(()=>new Map),[C,j]=(0,l.useState)(g),[R,k]=(0,l.useState)(g);(0,v.E)(()=>{w.current=!1,E.current=g;for(let e=0;e<R.length;e++){let t=h(R[e]);y.includes(t)?x.delete(t):!0!==x.get(t)&&x.set(t,!1)}},[R,y.length,y.join("-")]);let b=[];if(g!==C){let e=[...g];for(let t=0;t<R.length;t++){let r=R[t],n=h(r);y.includes(n)||(e.splice(t,0,r),b.push(r))}"wait"===d&&b.length&&(e=b),k(m(e)),j(g);return}let{forceRender:A}=(0,l.useContext)(f.L);return(0,n.jsx)(n.Fragment,{children:R.map(e=>{let t=h(e),r=g===R||y.includes(t);return(0,n.jsx)(c,{isPresent:r,initial:(!w.current||!!s)&&void 0,custom:r?void 0:i,presenceAffectsLayout:u,mode:d,onExitComplete:r?void 0:()=>{if(!x.has(t))return;x.set(t,!0);let e=!0;x.forEach(t=>{t||(e=!1)}),e&&(null==A||A(),k(E.current),a&&a())},children:e},t)})})}}}]);