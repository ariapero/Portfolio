(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3482:(e,t,a)=>{Promise.resolve().then(a.bind(a,7957))},7957:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var r=a(5155),i=a(7396),n=a(7401);let s=(0,n.A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),o=(0,n.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),l=(0,n.A)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),c=(0,n.A)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),d=(0,n.A)("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]),h=(0,n.A)("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);var x=a(6225),u=a(5177),m=a(2115),p=a(5565);function f(e){let{src:t,alt:a,width:i,height:n}=e,[s,o]=(0,m.useState)({x:0,y:0});return(0,m.useEffect)(()=>{let e=e=>{o({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),(0,r.jsx)(x.P.div,{className:"pointer-events-none fixed z-50",animate:{x:s.x-i/1.1,y:s.y-1.5*n},transition:{type:"spring",stiffness:150,damping:15},children:(0,r.jsx)(p.default,{src:t,alt:a,width:i,height:n,className:"rounded-full",style:{filter:"drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"}})})}class g{constructor(e,t){this.x=e,this.y=t,this.lifetime=0}}let y=()=>{let e=(0,m.useRef)(null),[t,a]=(0,m.useState)({width:0,height:0}),i=(0,m.useRef)(0),n=[[255,0,0],[255,127,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[75,0,130],[143,0,255]];(0,m.useEffect)(()=>{let e=()=>{a({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,m.useEffect)(()=>{matchMedia("(pointer:fine)").matches&&s()},[t]);let s=()=>{let t=e.current;if(!t)return;let a=t.getContext("2d");if(!a)return;let r=[],s=(e,t)=>{let a=new g(e,t);r.push(a),i.current=(i.current+.02)%n.length},o=e=>{t&&s(e.clientX,e.clientY)};document.addEventListener("mousemove",o,!1);let l=(e,t,a)=>e.map((e,r)=>Math.round(e+a*(t[r]-e))),c=()=>{a.clearRect(0,0,a.canvas.width,a.canvas.height);for(let e=1;e<r.length;++e){let t=r[e],s=r[e-1];if(t.lifetime+=1,t.lifetime>50)r.shift();else{let o=7*(1-t.lifetime/50),c=a.createLinearGradient(s.x,s.y,t.x,t.y),d=(i.current+e/r.length)%n.length,h=Math.floor(d),x=(h+1)%n.length,u=n[h],m=n[x],p=l(u,m,d-h);c.addColorStop(0,"rgb(".concat(p[0],", ").concat(p[1],", ").concat(p[2],")")),c.addColorStop(1,"rgb(".concat(m[0],", ").concat(m[1],", ").concat(m[2],")")),a.lineWidth=o,a.lineCap="round",a.lineJoin="round",a.strokeStyle=c,a.beginPath(),a.moveTo(s.x,s.y),a.lineTo(t.x,t.y),a.stroke()}}requestAnimationFrame(c)};return c(),()=>{document.removeEventListener("mousemove",o)}};return(0,r.jsx)("canvas",{ref:e,width:t.width,height:t.height,className:"fixed inset-0 pointer-events-none z-50"})};function v(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u.default,{baseColor:"#163734",highlightColor:"#238177",children:(0,r.jsxs)("div",{className:"min-h-screen w-full relative overflow-hidden",children:[(0,r.jsx)(y,{}),(0,r.jsx)(f,{src:"/skate2.png",alt:"Ari Per\xf3 skating with their cat, Michi",width:65,height:60}),(0,r.jsx)(x.P.main,{className:"relative z-10 min-h-screen flex flex-col justify-center px-8 sm:px-12 lg:px-16",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:(0,r.jsxs)("div",{className:"max-w-xl",children:[(0,r.jsx)(x.P.h1,{className:"text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 font-reenie",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},children:"Ari Per\xf3"}),(0,r.jsxs)(x.P.div,{className:"space-y-2 text-lg sm:text-xl text-white/90 mb-12 font-inter",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8},children:[(0,r.jsx)("p",{children:"MIT Urban Science, CS, & Music"}),(0,r.jsx)("p",{children:"B.S. Candidate 2025"})]}),(0,r.jsxs)(x.P.nav,{className:"space-y-4",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.8},children:[(0,r.jsxs)(i.default,{href:"/bio",className:"flex items-center gap-2 text-white text-lg sm:text-xl hover:gap-4 transition-all duration-300 font-inter",children:["Bio ",(0,r.jsx)(s,{className:"h-5 w-5"})]}),(0,r.jsxs)(i.default,{href:"/work",className:"flex items-center gap-2 text-white text-lg sm:text-xl hover:gap-4 transition-all duration-300 font-inter",children:["Work ",(0,r.jsx)(s,{className:"h-5 w-5"})]}),(0,r.jsxs)(i.default,{href:"https://ariapero.myportfolio.com/",className:"flex items-center gap-2 text-white text-lg sm:text-xl hover:gap-4 transition-all duration-300 font-inter",target:"_blank",children:["Prev. Portfolio ",(0,r.jsx)(s,{className:"h-5 w-5"})]})]})]})}),(0,r.jsx)("div",{className:"absolute right-8 inset-y-0 flex items-center",children:(0,r.jsxs)(x.P.div,{className:"flex flex-col gap-6 z-20",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:1,duration:.8},children:[(0,r.jsx)("a",{href:"https://github.com/ariapero",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,r.jsx)(o,{size:28})}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/ari-pero",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,r.jsx)(l,{size:28})}),(0,r.jsx)("a",{href:"https://www.instagram.com/ariapero",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,r.jsx)(c,{size:28})}),(0,r.jsx)("a",{href:"https://www.instagram.com/transindigena",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,r.jsx)(d,{size:28})}),(0,r.jsx)("a",{href:"https://dusp.mit.edu/people/ari-pero",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:opacity-50 transition-colors duration-300",children:(0,r.jsx)(h,{size:28})})]})})]})})})}},4502:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var r=a(5155),i=a(2115),n=a(1722),s=a(9602);let o=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(n.bL,{className:(0,s.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=unchecked]:bg-neutral-800",a),...i,ref:t,children:(0,r.jsx)(n.zi,{className:(0,s.cn)("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 dark:bg-neutral-950")})})});o.displayName=n.bL.displayName;var l=a(6195);let c=(0,a(652).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(l.b,{ref:t,className:(0,s.cn)(c(),a),...i})});function h(e){let{onToggle:t}=e,[a,n]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{t(a)},[a,t]),(0,r.jsxs)("div",{className:"fixed top-4 right-4 z-50 flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1",children:[(0,r.jsx)(o,{id:"animated-bg",checked:a,onCheckedChange:n,className:"data-[state=checked]:bg-white/25 data-[state=unchecked]:bg-teal-600"}),(0,r.jsx)(d,{className:"text-white font-zen font-light",htmlFor:"animated-bg",children:a?"BG On":"BG Off"})]})}d.displayName=l.b.displayName},5177:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var r=a(5155),i=a(8803),n=a.n(i),s=a(2115),o=a(4502);function l(e){let{children:t,baseColor:a,highlightColor:i}=e,l=(0,s.useRef)(null),[c,d]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let e=e=>{if(!l.current||!c)return;let{clientX:t,clientY:a}=e;l.current.style.setProperty("--x","".concat(t,"px")),l.current.style.setProperty("--y","".concat(a,"px"))};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n(),{id:"43ea1920cc988dc7",dynamic:[a,i],children:".radial-background.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;height:100vh;width:100%;background-color:".concat(a,";-webkit-transition:opacity.3s ease;-moz-transition:opacity.3s ease;-o-transition:opacity.3s ease;transition:opacity.3s ease}.radial-background.animated.__jsx-style-dynamic-selector{background-image:-webkit-radial-gradient(var(--x,100px)var(--y,100px),circle farthest-side,").concat(i," 0%,transparent 100%);background-image:-moz-radial-gradient(var(--x,100px)var(--y,100px),circle farthest-side,").concat(i," 0%,transparent 100%);background-image:-o-radial-gradient(var(--x,100px)var(--y,100px),circle farthest-side,").concat(i," 0%,transparent 100%);background-image:radial-gradient(circle farthest-side at var(--x,100px)var(--y,100px),").concat(i," 0%,transparent 100%)}.content-wrapper.__jsx-style-dynamic-selector{position:relative;z-index:1}")}),(0,r.jsx)("div",{ref:l,className:n().dynamic([["43ea1920cc988dc7",[a,i]]])+" "+"radial-background ".concat(c?"animated bg-${baseColor}":"")}),(0,r.jsx)("div",{className:n().dynamic([["43ea1920cc988dc7",[a,i]]])+" content-wrapper",children:t}),(0,r.jsx)(o.A,{onToggle:d})]})}},9602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>n});var r=a(3463),i=a(9795);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,i.QP)((0,r.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[839,264,225,513,99,441,517,358],()=>t(3482)),_N_E=e.O()}]);