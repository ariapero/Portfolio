(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{431:(e,t,i)=>{Promise.resolve().then(i.bind(i,6071))},6071:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var a=i(5155),s=i(2115),n=i(6225),r=i(5565),o=i(7396),l=i(4502);let d=()=>{let e=(0,s.useRef)(null),t=(0,s.useRef)(null),i=(0,s.useRef)(null),[n,r]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let a;if(!e.current||!t.current||!i.current)return;let s=Math.PI/180*45,r=t.current,o=i.current,l=r.getContext("2d"),d=o.getContext("2d"),c=[],h=0,u=e=>{let t=Math.random()*r.width,i=c[1],s=Math.round(Math.random())?Math.PI/2:2*Math.PI-Math.PI/2,n=.5+1*Math.random(),o=100+300*Math.random(),l=2+4*Math.random(),d=180+60*Math.random();a.set([t,i,s,n,0,o,l,d],e)},m=()=>{h++;for(let e=0;e<240;e+=8)p(e)},p=e=>{let t=a[e],i=a[e+1],n=a[e+2],r=a[e+3],o=a[e+4],l=a[e+5],d=a[e+6],c=a[e+7];g(t,i,o,l,d,c),o++,t+=Math.cos(n)*r,i+=Math.sin(n)*r;let m=Math.round(Math.random())?-1:1;n+=h%Math.round(58*Math.random())||Math.round(t)%6&&Math.round(i)%6?0:s*m,a.set([t,i,n,r,o,l,d,c],e),f(t,i),o>l&&u(e)},g=(e,t,i,a,s,n)=>{l.save(),l.strokeStyle="hsla(".concat(n,",75%,50%,").concat(.125*y(i,a),")"),l.beginPath(),l.arc(e,t,s,0,2*Math.PI),l.stroke(),l.closePath(),l.restore()},f=(e,t)=>{e>r.width&&(e=0),e<0&&(e=r.width),t>r.height&&(t=0),t<0&&(t=r.height)},b=()=>{let{innerWidth:e,innerHeight:t}=window;r.width=e,r.height=t,l.drawImage(o,0,0),o.width=e,o.height=t,d.drawImage(r,0,0),c[0]=.5*r.width,c[1]=.5*r.height},x=()=>{d.save(),d.fillStyle="hsla(150,80%,1%,1)",d.fillRect(0,0,o.width,o.height),d.restore(),d.save(),d.filter="blur(12px)",d.drawImage(r,0,0),d.restore(),d.save(),d.drawImage(r,0,0),d.restore()},v=()=>{n&&(m(),x()),requestAnimationFrame(v)},y=(e,t)=>{let i=.5*t;return Math.abs((e+i)%t-i)/i};return b(),(()=>{a=new Float32Array(240);for(let e=0;e<240;e+=8)u(e)})(),v(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{ref:e,className:"content--canvas bg-red-500 color-red",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"red",background:"red",color:"red",transition:"opacity 0.3s ease"},children:[(0,a.jsx)("canvas",{ref:t,style:{display:"none"}}),(0,a.jsx)("canvas",{ref:i,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%"}})]}),(0,a.jsx)(l.A,{onToggle:r}),(0,a.jsx)("div",{className:"".concat(n?"":"left-0 top-0 fixed inset-0 bg-black w-full h-full")})]})},c=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{}),(0,a.jsxs)(n.P.main,{className:"relative z-10 min-h-screen p-8 sm:p-12 lg:p-16 text-white",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-black opacity-40 w-full h-full"}),(0,a.jsxs)("div",{className:"relative z-10 max-w-7xl mx-auto",children:[(0,a.jsxs)(n.P.div,{className:"mb-20",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},children:[(0,a.jsx)(o.default,{href:"/",className:"text-4xl font-bold hover:opacity-80 transition-opacity font-reenie",children:"Ari Per\xf3"}),(0,a.jsxs)("div",{className:"mt-1 space-y-1 text-sm font-zen",children:[(0,a.jsx)("p",{children:"MIT DUSP, EECS, Music"}),(0,a.jsx)("p",{children:"B.S. Candidate 2025"}),(0,a.jsx)("p",{children:"ariapero@mit.edu"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row gap-12 lg:gap-20",children:[(0,a.jsxs)(n.P.div,{className:"space-y-8 lg:w-2/3",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8},children:[(0,a.jsxs)("h1",{className:"text-4xl sm:text-5xl font-bold leading-tight font-grand",children:["Art, Policy, & Technology",(0,a.jsx)("span",{className:"block font-normal",children:"for the common good"})]}),(0,a.jsxs)("div",{className:"space-y-6 text-m leading-relaxed z-10",style:{textShadow:"1px 1px 2px black"},children:[(0,a.jsxs)("p",{children:["Ari Per\xf3 has been committed to effecting political change since before they were old enough to vote. Since February 2018, they have been at the forefront of shaping national legislation as a founding member of"," ",(0,a.jsx)("b",{children:"Students Demand Action: Miami"}),". Ari is guided by the principle of 'pay it forward and pay it back,' inspiring peers to harness their political agency and empowering them with tools for tangible transformation."]}),(0,a.jsx)("p",{children:"Their interests converge around critical issues such as housing justice, leveraging social media for amplifying advocacy groups, environmentally conscious planning through indigenous and reparative paradigms, and holistic criminal justice reform––fighting for both racial and LGBTQ+ justice within the context of reducing incarceration. Utilizing technology, programming, machine vision, and urban science principles, they strive to drive transformation in these domains."}),(0,a.jsxs)("p",{children:["In line with these passions, Ari is both a scholar and Teaching Assistant in"," ",(0,a.jsx)("b",{children:(0,a.jsx)("a",{href:"https://impactclimate.mit.edu/get-involved/student-opportunities/climate-sustainability-scholars-program/",children:(0,a.jsx)("u",{children:"MIT's Climate and Sustainability Consortium (MCSC) Scholars Program"})})}),", where they support a community of like-minded students committed to environmental justice and sustainable development. Through the program, they have engaged deeply with coursework and research projects that address pressing climate and sustainability issues, while mentoring fellow scholars in navigating academic and professional pathways related to climate impact."]}),(0,a.jsxs)("p",{children:["Ari's undergraduate research in computer vision for biodiversity monitoring under the guidance of"," ",(0,a.jsx)("a",{href:"https://beerys.github.io/#:~:text=David%20Fang%20(Alumni)-,Ari%20Pero%20(Alumni),-Avi%20Sundaresan%20(Caltech",children:(0,a.jsx)("b",{children:(0,a.jsx)("u",{children:"Dr. Sara Beery"})})})," ","underscores their dedication to leveraging technology for environmental conservation. Their work explores the use of machine learning and visual AI to detect and analyze species across diverse ecosystems, contributing to the preservation of global biodiversity and advancing computational approaches to ecological monitoring."]}),(0,a.jsxs)("p",{children:["This past summer, Ari interned at"," ",(0,a.jsx)("a",{href:"https://www.aboutamazon.com/what-we-do/devices-services/project-kuiper",children:(0,a.jsx)("b",{children:(0,a.jsx)("u",{children:"Amazon Project Kuiper"})})}),". There, they designed a satellite CLI that reduced codebase size by ~25% and boosted developer productivity by ~20%, as well as developed Rust-/C++-based features to address security vulnerabilities in bootloader verification. This experience sharpened their technical abilities in embedded systems design and bolstered their commitment to creating scalable, efficient solutions with tangible impact."]}),(0,a.jsxs)("p",{children:["Originally from South Side, Chicago, IL, and now based in Miami, FL, Ari has spent the past three years anchoring their experiences at MIT in their desire to empower others: as an Active Community Engagement FPOP Coordinator, they introduce first-years to campus life through meticulously developed social justice workshops and service placements with local nonprofits. Ari also serves as a Teaching Assistant for the"," ",(0,a.jsx)("a",{href:"https://mites.mit.edu/discover-mites/mites-summer/",children:(0,a.jsx)("b",{children:(0,a.jsx)("u",{children:"MITES Summer program"})})}),", providing educational support and resources to fellow students to foster a diverse and inclusive learning environment. Additionally, as a dedicated"," ",(0,a.jsx)("a",{href:"https://pleasure.mit.edu/educators/ari-pero/",children:(0,a.jsx)("b",{children:(0,a.jsx)("u",{children:"PLEASURE Educator"})})}),", Ari contributes to eradicating sexual violence at MIT by leading educational presentations on topics like contraception and healthy relationships for athletes and FSILGs."]}),(0,a.jsxs)("p",{children:["Their commitment to public service has been recognized through accolades including selection as the"," ",(0,a.jsx)("a",{href:"https://ome.mit.edu/about/student-awards/distinguished-peers/ari-pero",children:(0,a.jsx)("b",{children:(0,a.jsx)("u",{children:"OME's 2022-2023 Distinguished Peer in Public Service"})})}),". They are also recognized as a Miami Ortega Foundation Scholar and Point Foundation Flagship Scholar and Spokesperson since 2021."]}),(0,a.jsx)("p",{children:"In Fall 2022, Ari assumed the presidency of G@MIT, MIT's LGBTQ+ cultural and activist organization. Through this office, they work to establish dedicated spaces for students with intersectional identities, foster constructive dialogue between queer students and MIT administration, and organize inclusive events for affirming LGBTQ+ experiences on campus."}),(0,a.jsx)("p",{children:"Ari has also been deeply involved in raising awareness of the countless injustices experienced by transgender individuals via their artistic pursuits. Their recent video installations and live performances explore the ongoing impact of their community’s history on present-day dynamics (shared fears and behaviors). These pieces capture Ari’s own emotions as a trans, Afro-Indigenous activist navigating complex systems of power and oppression, while shedding light on many of the less “palatable” and often overlooked challenges faced by black transgender women. This narrative extends into the context of NYC ballroom culture and the 80s AIDS crisis. Ari intends to leverage these projects as a conduit for enlightening allies on the trans experience."}),(0,a.jsx)("p",{children:"Before embarking on double majors in Urban Science & Planning with Computer Science and Music at MIT, Ari's foundation was classical vocal performance at their magnet arts high school. Their participation in the MIT Concert Choir, Chamber Chorus, Vocal Jazz Ensemble, FaMLE (MIT Laptop Ensemble), Rambax Senegalese Drum Ensemble, and Emerson Harris Scholars Program for Jazz and Classical Voice is a testament to their passion for music and artistic expression."})]})]}),(0,a.jsx)(n.P.div,{className:"sm:ml-auto w-[400px] h-full lg:w-[500px] h-[625px] z-100",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.6,duration:.8},children:(0,a.jsx)("div",{className:"relative w-full h-full z-100",children:(0,a.jsx)(r.default,{src:"/headshot.JPG",alt:"presentation",width:500,height:625,className:"object-cover rounded-lg z-100",priority:!0})})})]})]})]})]})},4502:(e,t,i)=>{"use strict";i.d(t,{A:()=>h});var a=i(5155),s=i(2115),n=i(1722),r=i(9602);let o=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)(n.bL,{className:(0,r.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=unchecked]:bg-neutral-800",i),...s,ref:t,children:(0,a.jsx)(n.zi,{className:(0,r.cn)("pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 dark:bg-neutral-950")})})});o.displayName=n.bL.displayName;var l=i(6195);let d=(0,i(652).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:i,...s}=e;return(0,a.jsx)(l.b,{ref:t,className:(0,r.cn)(d(),i),...s})});function h(e){let{onToggle:t}=e,[i,n]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{t(i)},[i,t]),(0,a.jsxs)("div",{className:"fixed top-4 right-4 z-50 flex items-center space-x-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1",children:[(0,a.jsx)(o,{id:"animated-bg",checked:i,onCheckedChange:n,className:"data-[state=checked]:bg-white/25 data-[state=unchecked]:bg-teal-600"}),(0,a.jsx)(c,{className:"text-white font-zen font-light",htmlFor:"animated-bg",children:i?"BG On":"BG Off"})]})}c.displayName=l.b.displayName},9602:(e,t,i)=>{"use strict";i.d(t,{cn:()=>n});var a=i(3463),s=i(9795);function n(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,s.QP)((0,a.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[839,606,513,565,441,517,358],()=>t(431)),_N_E=e.O()}]);