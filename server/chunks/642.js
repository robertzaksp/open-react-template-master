exports.id=642,exports.ids=[642],exports.modules={3848:(e,t,r)=>{Promise.resolve().then(r.bind(r,2151)),Promise.resolve().then(r.bind(r,8859)),Promise.resolve().then(r.t.bind(r,5251,23)),Promise.resolve().then(r.t.bind(r,1297,23)),Promise.resolve().then(r.bind(r,9392))},4292:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9918,23)),Promise.resolve().then(r.t.bind(r,2057,23)),Promise.resolve().then(r.t.bind(r,6148,23)),Promise.resolve().then(r.t.bind(r,8359,23)),Promise.resolve().then(r.t.bind(r,1860,23)),Promise.resolve().then(r.t.bind(r,2427,23))},2151:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Banner});var n=r(80),s=r(9885);function Banner(){let[e,t]=(0,s.useState)(!0);return n.jsx(n.Fragment,{children:e&&n.jsx("div",{className:"fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50",children:(0,n.jsxs)("div",{className:"bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between",children:[(0,n.jsxs)("div",{className:"text-slate-500 inline-flex",children:[(0,n.jsxs)("a",{className:"font-medium hover:underline text-slate-50",href:"https://github.com/cruip/open-react-template",target:"_blank",rel:"noreferrer",children:["Download",n.jsx("span",{className:"hidden sm:inline",children:" on GitHub"})]})," ",n.jsx("span",{className:"italic px-1.5",children:"or"})," ",n.jsx("a",{className:"font-medium hover:underline text-emerald-400",href:"https://cruip.com/open-pro/",target:"_blank",rel:"noreferrer",children:"Check Premium Version"})]}),(0,n.jsxs)("button",{className:"text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700",onClick:()=>t(!1),children:[n.jsx("span",{className:"sr-only",children:"Close"}),n.jsx("svg",{className:"w-4 h-4 shrink-0 fill-current",viewBox:"0 0 16 16",children:n.jsx("path",{d:"M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"})})]})]})})})}},8859:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>MobileMenu});var n=r(80),s=r(9885),i=r(1440),a=r.n(i);function MobileMenu(){let[e,t]=(0,s.useState)(!1),r=(0,s.useRef)(null),i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let clickHandler=({target:n})=>{i.current&&r.current&&(!e||i.current.contains(n)||r.current.contains(n)||t(!1))};return document.addEventListener("click",clickHandler),()=>document.removeEventListener("click",clickHandler)}),(0,s.useEffect)(()=>{let keyHandler=({keyCode:r})=>{e&&27===r&&t(!1)};return document.addEventListener("keydown",keyHandler),()=>document.removeEventListener("keydown",keyHandler)}),(0,n.jsxs)("div",{className:"md:hidden",children:[(0,n.jsxs)("button",{ref:r,className:`hamburger ${e&&"active"}`,"aria-controls":"mobile-nav","aria-expanded":e,onClick:()=>t(!e),children:[n.jsx("span",{className:"sr-only",children:"Menu"}),(0,n.jsxs)("svg",{className:"w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{y:"4",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"11",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"18",width:"24",height:"2",rx:"1"})]})]}),n.jsx("nav",{id:"mobile-nav",ref:i,className:"absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out",style:e?{maxHeight:i.current?.scrollHeight,opacity:1}:{maxHeight:0,opacity:.8},children:(0,n.jsxs)("ul",{className:"bg-gray-800 px-4 py-2",children:[n.jsx("li",{children:n.jsx(a(),{href:"/signin",className:"flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center",onClick:()=>t(!1),children:"Sign in"})}),n.jsx("li",{children:n.jsx(a(),{href:"/signup",className:"font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out",onClick:()=>t(!1),children:"Sign up"})})]})})]})}},304:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>RootLayout,metadata:()=>w});var n=r(8144),s=r(4111),i=r.n(s),a=r(8566),l=r.n(a);r(2729);var o=r(4602),d=r.n(o),c=r(7536);let m=(0,c.createProxy)(String.raw`/Users/robert/Documents/Programming/ETNA/open-react-template-master/components/ui/mobile-menu.tsx`),{__esModule:h,$$typeof:u}=m,x=m.default,g={src:"/_next/static/media/etnalogo.d6c64877.png",height:120,width:280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbUlEQVR4nAVASwqCQBj+vhmjLHCXBm3rMt3ADtGyre3aeBovonv3gvgAGfDt/EI/jL4kPStIKisXTXgK0IuggUXLIIwEZKGB//XAo0OUk8VDAN/VzBi8fx8RGFchjV+3vO7m0/N+Hk2/KTOszg50wiVoPeQ6mAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3};var p=r(5042),f=r.n(p);let header=()=>n.jsx(n.Fragment,{children:n.jsx("header",{className:"absolute w-full z-30",children:n.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,n.jsxs)("div",{className:"flex items-center justify-between h-20",children:[n.jsx("div",{className:"shrink-0 mr-4",children:n.jsx(f(),{className:"max-w-full mx-auto md:max-w-none h-auto",src:g,width:280,height:120,style:{padding:40},alt:"Features 01"})}),n.jsx("nav",{className:"hidden md:flex md:grow",children:(0,n.jsxs)("ul",{className:"flex grow justify-end flex-wrap items-center",children:[n.jsx("li",{children:n.jsx(d(),{href:"/signin",className:"font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",children:"Try Demo"})}),n.jsx("li",{children:n.jsx(d(),{href:"/signup",className:"btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3",children:"Contact Us"})})]})}),n.jsx(x,{})]})})})}),A=(0,c.createProxy)(String.raw`/Users/robert/Documents/Programming/ETNA/open-react-template-master/components/banner.tsx`),{__esModule:v,$$typeof:b}=A,j=A.default,w={title:"Create Next App",description:"Generated by create next app"};function RootLayout({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:`${i().variable} ${l().variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`,children:(0,n.jsxs)("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[n.jsx(header,{}),e,n.jsx(j,{})]})})})}},9392:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n={src:"/_next/static/media/etnalogo.d6c64877.png",height:120,width:280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbUlEQVR4nAVASwqCQBj+vhmjLHCXBm3rMt3ADtGyre3aeBovonv3gvgAGfDt/EI/jL4kPStIKisXTXgK0IuggUXLIIwEZKGB//XAo0OUk8VDAN/VzBi8fx8RGFchjV+3vO7m0/N+Hk2/KTOszg50wiVoPeQ6mAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},2729:()=>{}};