(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3482:(e,t,a)=>{Promise.resolve().then(a.bind(a,4764))},4764:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var i=a(5155),n=a(2115),r=a(7396),s=a(9053),l=a(1626),o=a(4999),c=a(4035),d=a(7833),h=a(7548),x=a(5683),u=a(444),m=a(5177),f=a(5565),p=a(4420),g=a(405);function y(e){let{src:t,alt:a,width:r,height:s}=e,[l,o]=(0,n.useState)(!0),c=(0,p.d)(0),d=(0,p.d)(0),h={damping:25,stiffness:700},x=(0,g.z)(c,h),m=(0,g.z)(d,h),y=(0,n.useCallback)(e=>{c.set(e.clientX-r/1.1),d.set(e.clientY-1.5*s)},[c,d,r,s]);return((0,n.useEffect)(()=>{let e=()=>{o(window.matchMedia("(pointer: coarse)").matches)};return e(),window.addEventListener("resize",e),l||window.addEventListener("mousemove",y),()=>{window.removeEventListener("resize",e),window.removeEventListener("mousemove",y)}},[l,y]),l)?null:(0,i.jsx)(u.P.div,{className:"pointer-events-none fixed z-50 hidden md:block",style:{x:x,y:m},children:(0,i.jsx)(f.default,{src:t,alt:a,width:r,height:s,className:"rounded-full",style:{filter:"drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"}})})}class v{constructor(e,t){this.x=e,this.y=t,this.lifetime=0}}let w=()=>{let e=(0,n.useRef)(null),[t,a]=(0,n.useState)({width:0,height:0}),r=(0,n.useRef)(0),s=[[255,0,0],[255,127,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[75,0,130],[143,0,255]];(0,n.useEffect)(()=>{let e=()=>{a({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,n.useEffect)(()=>{matchMedia("(pointer:fine)").matches&&l()},[t]);let l=()=>{let t=e.current;if(!t)return;let a=t.getContext("2d");if(!a)return;let i=[],n=(e,t)=>{let a=new v(e,t);i.push(a),r.current=(r.current+.02)%s.length},l=e=>{t&&n(e.clientX,e.clientY)};document.addEventListener("mousemove",l,!1);let o=(e,t,a)=>e.map((e,i)=>Math.round(e+a*(t[i]-e))),c=()=>{a.clearRect(0,0,a.canvas.width,a.canvas.height);for(let e=1;e<i.length;++e){let t=i[e],n=i[e-1];if(t.lifetime+=1,t.lifetime>50)i.shift();else{let l=7*(1-t.lifetime/50),c=a.createLinearGradient(n.x,n.y,t.x,t.y),d=(r.current+e/i.length)%s.length,h=Math.floor(d),x=(h+1)%s.length,u=s[h],m=s[x],f=o(u,m,d-h);c.addColorStop(0,"rgb(".concat(f[0],", ").concat(f[1],", ").concat(f[2],")")),c.addColorStop(1,"rgb(".concat(m[0],", ").concat(m[1],", ").concat(m[2],")")),a.lineWidth=l,a.lineCap="round",a.lineJoin="round",a.strokeStyle=c,a.beginPath(),a.moveTo(n.x,n.y),a.lineTo(t.x,t.y),a.stroke()}}requestAnimationFrame(c)};return c(),()=>{document.removeEventListener("mousemove",l)}};return(0,i.jsx)("canvas",{ref:e,width:t.width,height:t.height,className:"fixed inset-0 pointer-events-none z-50"})};function b(e){let{onLoadingComplete:t}=e,[a,r]=(0,n.useState)(0),[s,l]=(0,n.useState)(!1),[o,c]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=setInterval(()=>{r(t=>t>=100?(clearInterval(e),100):t+1)},30);return()=>clearInterval(e)},[]),(0,n.useEffect)(()=>{a>=30&&l(!0),100===a&&setTimeout(()=>{c(!0),setTimeout(t,1e3)},1e3)},[a,t]);let d={hidden:{y:50,opacity:0},visible:e=>({y:0,opacity:1,transition:{delay:.1*e,type:"spring",stiffness:200,damping:10}}),exit:e=>({y:-50,opacity:0,transition:{delay:.05*e,type:"spring",stiffness:200,damping:10}})};return(0,i.jsx)(x.N,{children:!o&&(0,i.jsx)(u.P.div,{className:"fixed inset-0 z-50 flex items-center justify-center bg-[#163734]",exit:{y:"-100%",transition:{duration:.8,ease:[.76,0,.24,1]}},children:(0,i.jsxs)("div",{className:"relative w-full max-w-xl px-4",children:[(0,i.jsx)(u.P.div,{className:"h-0.5 bg-[#238177]",initial:{width:0},animate:{width:"".concat(a,"%")},transition:{duration:.1,ease:"linear"}}),(0,i.jsx)(x.N,{children:s&&(0,i.jsx)(u.P.div,{className:"absolute left-0 right-0 -top-16 text-center overflow-hidden",initial:{opacity:1},exit:{opacity:0},children:(0,i.jsx)(u.P.h1,{className:"text-5xl font-bold text-white font-grand z-500",children:"Welcome!".split("").map((e,t)=>(0,i.jsx)(u.P.span,{variants:d,custom:t,initial:"hidden",animate:"visible",exit:"exit",style:{display:"inline-block"},children:e},"".concat(e,"-").concat(t)))})})})]})})})}function j(){let[e,t]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},3e3);return()=>clearTimeout(e)},[]),(0,i.jsx)(x.N,{mode:"wait",children:e?(0,i.jsx)(b,{onLoadingComplete:()=>t(!1)},"preloader"):(0,i.jsx)(u.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:(0,i.jsx)(m.default,{baseColor:"#163734",highlightColor:"#238177",children:(0,i.jsxs)("div",{className:"min-h-screen w-full relative overflow-hidden",children:[(0,i.jsx)(w,{}),(0,i.jsx)(y,{src:"/skate2.png",alt:"Ari Per\xf3 skating with their cat, Michi",width:65,height:60}),(0,i.jsx)(u.P.main,{className:"relative z-10 min-h-screen flex flex-col justify-center px-8 sm:px-12 lg:px-16",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:(0,i.jsxs)("div",{className:"max-w-xl",children:[(0,i.jsx)(u.P.h1,{className:"text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 font-reenie",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},children:"Ari Per\xf3"}),(0,i.jsxs)(u.P.div,{className:"space-y-2 text-lg sm:text-xl text-white/90 mb-12 font-inter",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8},children:[(0,i.jsx)("p",{children:"MIT Urban Science, CS, & Music"}),(0,i.jsx)("p",{children:"B.S. Candidate 2025"})]}),(0,i.jsxs)(u.P.nav,{className:"space-y-2",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.8},children:[(0,i.jsxs)(r.default,{href:"/bio",className:"flex items-center gap-2 text-white text-lg sm:text-xl hover:gap-4 transition-all duration-300 font-inter",children:["Bio ",(0,i.jsx)(s.A,{className:"h-5 w-5"})]}),(0,i.jsxs)(r.default,{href:"/work",className:"flex items-center gap-2 text-white text-lg sm:text-xl hover:gap-4 transition-all duration-300 font-inter",children:["Work ",(0,i.jsx)(s.A,{className:"h-5 w-5"})]}),(0,i.jsxs)(r.default,{href:"/docs/Ari_Pero_Resume.pdf",className:"flex items-center gap-2 text-white text-lg sm:text-xl hover:gap-4 transition-all duration-300 font-inter",target:"_blank",children:["Resume ",(0,i.jsx)(s.A,{className:"h-5 w-5"})]}),(0,i.jsxs)(r.default,{href:"https://ariapero.myportfolio.com/",className:"flex items-center gap-2 text-white text-lg sm:text-xl hover:gap-4 transition-all duration-300 font-inter",target:"_blank",children:["Ex-Portfolio ",(0,i.jsx)(s.A,{className:"h-5 w-5"})]})]})]})}),(0,i.jsx)("div",{className:"absolute right-8 inset-y-0 flex items-center",children:(0,i.jsxs)(u.P.div,{className:"flex flex-col gap-6 z-20",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:1,duration:.8},children:[(0,i.jsx)("a",{href:"https://github.com/ariapero",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,i.jsx)(l.A,{size:28})}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/ari-pero",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,i.jsx)(o.A,{size:28})}),(0,i.jsx)("a",{href:"https://www.instagram.com/ariapero",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,i.jsx)(c.A,{size:28})}),(0,i.jsx)("a",{href:"https://www.instagram.com/transindigena",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,i.jsx)(d.A,{size:28})}),(0,i.jsx)("a",{href:"https://dusp.mit.edu/people/ari-pero",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,i.jsx)(h.A,{size:28})})]})})]})})},"content")})}},4502:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var i=a(5155),n=a(2115),r=a(1722),s=a(9602);let l=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,i.jsx)(r.bL,{className:(0,s.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=unchecked]:bg-neutral-800",a),...n,ref:t,children:(0,i.jsx)(r.zi,{className:(0,s.cn)("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 dark:bg-neutral-950")})})});l.displayName=r.bL.displayName;var o=a(6195);let c=(0,a(652).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,i.jsx)(o.b,{ref:t,className:(0,s.cn)(c(),a),...n})});function h(e){let{onToggle:t}=e,[a,r]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{t(a)},[a,t]),(0,i.jsxs)("div",{className:"fixed top-4 right-4 z-50 flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1",children:[(0,i.jsx)(l,{id:"animated-bg",checked:a,onCheckedChange:r,className:"data-[state=checked]:bg-white/25 data-[state=unchecked]:bg-teal-600"}),(0,i.jsx)(d,{className:"text-white font-zen font-light",htmlFor:"animated-bg",children:a?"BG On":"BG Off"})]})}d.displayName=o.b.displayName},5177:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var i=a(5155),n=a(8803),r=a.n(n),s=a(2115),l=a(4502);function o(e){let{children:t,baseColor:a,highlightColor:n}=e,o=(0,s.useRef)(null),[c,d]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=e=>{if(!o.current||!c)return;let{clientX:t,clientY:a}=e;o.current.style.setProperty("--x","".concat(t,"px")),o.current.style.setProperty("--y","".concat(a,"px"))};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[c]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r(),{id:"43ea1920cc988dc7",dynamic:[a,n],children:".radial-background.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;height:100vh;width:100%;background-color:".concat(a,";-webkit-transition:opacity.3s ease;-moz-transition:opacity.3s ease;-o-transition:opacity.3s ease;transition:opacity.3s ease}.radial-background.animated.__jsx-style-dynamic-selector{background-image:-webkit-radial-gradient(var(--x,100px)var(--y,100px),circle farthest-side,").concat(n," 0%,transparent 100%);background-image:-moz-radial-gradient(var(--x,100px)var(--y,100px),circle farthest-side,").concat(n," 0%,transparent 100%);background-image:-o-radial-gradient(var(--x,100px)var(--y,100px),circle farthest-side,").concat(n," 0%,transparent 100%);background-image:radial-gradient(circle farthest-side at var(--x,100px)var(--y,100px),").concat(n," 0%,transparent 100%)}.content-wrapper.__jsx-style-dynamic-selector{position:relative;z-index:1}")}),(0,i.jsx)("div",{ref:o,className:r().dynamic([["43ea1920cc988dc7",[a,n]]])+" "+"radial-background ".concat(c?"animated bg-${baseColor}":"")}),(0,i.jsx)("div",{className:r().dynamic([["43ea1920cc988dc7",[a,n]]])+" content-wrapper",children:t}),(0,i.jsx)(l.A,{onToggle:d})]})}},9602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>r});var i=a(3463),n=a(9795);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.QP)((0,i.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[839,264,444,513,99,373,441,517,358],()=>t(3482)),_N_E=e.O()}]);