(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2872:function(e,t,s){Promise.resolve().then(s.bind(s,5934)),Promise.resolve().then(s.t.bind(s,2972,23)),Promise.resolve().then(s.t.bind(s,768,23)),Promise.resolve().then(s.t.bind(s,681,23)),Promise.resolve().then(s.t.bind(s,2778,23)),Promise.resolve().then(s.bind(s,1781)),Promise.resolve().then(s.bind(s,6265)),Promise.resolve().then(s.bind(s,3089)),Promise.resolve().then(s.bind(s,933)),Promise.resolve().then(s.bind(s,2092))},1781:function(e,t,s){"use strict";s.d(t,{default:function(){return v}});var r=s(7437),a=s(7648),i=s(2265),n=s(4930),o=s(6474);let l=i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.fC,{ref:t,className:(0,o.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",s),...a})});l.displayName=n.fC.displayName;let d=i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.Ee,{ref:t,className:(0,o.cn)("aspect-square h-full w-full",s),...a})});d.displayName=n.Ee.displayName;let c=i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.NY,{ref:t,className:(0,o.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",s),...a})});c.displayName=n.NY.displayName;var u=s(5934),m=s(8293),f=s(2489),x=s(6275),p=s(2369),h=s(9376);function v(){let{data:e}=(0,u.kP)(),t=(0,h.usePathname)(),[s,n]=(0,i.useState)(!1),o=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{href:"/",className:"hover:text-primary duration-300 ease-in-out transition-colors ".concat("/"===t?"text-primary":""),onClick:()=>n(!1),children:"HOME"}),(0,r.jsx)(a.default,{href:"/products",className:"hover:text-primary duration-300 ease-in-out transition-colors ".concat("/products"===t?"text-primary":""),onClick:()=>n(!1),children:"PRODUCTS"}),(0,r.jsx)(a.default,{href:"/about",className:"hover:text-primary duration-300 ease-in-out transition-colors ".concat("/about"===t?"text-primary":""),onClick:()=>n(!1),children:"ABOUT"}),(0,r.jsx)(a.default,{href:"/faq",className:"hover:text-primary duration-300 ease-in-out transition-colors ".concat("/faq"===t?"text-primary":""),onClick:()=>n(!1),children:"FAQ"})]});return(0,r.jsxs)("nav",{className:"bg-background/80 fixed z-20 backdrop-blur-sm w-full mx-auto",children:[(0,r.jsxs)("div",{className:"mx-auto flex justify-between items-center py-4 px-7 md:px-12",children:[(0,r.jsx)(a.default,{href:"/",className:"text-white text-lg font-bold animate-fade-in",children:(0,r.jsx)("img",{alt:"Tartaro Logo",src:"/logo.svg",className:"h-8"})}),(0,r.jsx)("div",{className:"hidden md:flex items-center justify-center space-x-8 text-white animate-fade-in",children:(0,r.jsx)(o,{})}),(0,r.jsxs)("div",{className:"flex items-center justify-center space-x-4 md:space-x-8 text-white animate-fade-in",children:[(0,r.jsx)(a.default,{href:"/cart",className:"hover:text-primary duration-300 ease-in-out transition-colors ".concat("/cart"===t?"text-primary":""),children:(0,r.jsx)(x.Z,{})}),e?(0,r.jsx)(a.default,{href:"/dashboard",className:"block",children:(0,r.jsxs)(l,{children:[(0,r.jsx)(d,{src:e.user.image}),(0,r.jsx)(c,{children:(0,r.jsx)(p.Z,{className:"/dashboard"===t?"text-primary":""})})]})}):(0,r.jsx)(a.default,{href:"/login",className:"block",children:(0,r.jsx)(p.Z,{className:"/login"===t?"text-primary":""})}),(0,r.jsx)("button",{onClick:()=>n(!s),className:"md:hidden text-white",children:s?(0,r.jsx)(f.Z,{}):(0,r.jsx)(m.Z,{})})]})]}),(0,r.jsx)("div",{className:"md:hidden z-30 transform ".concat(s?"translate-x-0":"translate-x-full"," transition-transform duration-300 ease-in-out backdrop-blur-sm min-w-full min-h-[100svh] fixed bg-bg"),children:(0,r.jsx)("div",{className:"absolute top-0 left-0 min-w-full min-h-[100svh] flex items-center justify-center",children:(0,r.jsx)("div",{className:"flex flex-col items-center justify-center h-full space-y-8 text-white text-lg",children:(0,r.jsx)(o,{})})})})]})}},6265:function(e,t,s){"use strict";s.d(t,{default:function(){return o}});var r=s(7437),a=s(2265),i=s(5365),n=s(3089);function o(e){let{children:t}=e,{initializeNotifications:s}=(0,i.E)();return(0,a.useEffect)(()=>{s()},[]),(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)(n.default,{})]})}},3089:function(e,t,s){"use strict";s.d(t,{default:function(){return g}});var r=s(7437),a=s(2265),i=s(2489),n=s(4449),o=s(322),l=s(9501),d=s(6770),c=s(3032);function u(e){let{setShowNewsletter:t}=e,{toast:s}=(0,d.pm)(),{register:a,handleSubmit:u,reset:m,formState:{errors:f,isSubmitting:x}}=(0,l.cI)(),p=async e=>{try{localStorage.setItem("hasSubscribed","true"),t(!1),s({title:"Success!",description:"Thank you for subscribing to our newsletter!",duration:3e3}),m()}catch(e){s({title:"Error",description:"There was a problem with your subscription.",variant:"destructive",duration:3e3})}};return(0,r.jsxs)("div",{className:"bg-card p-4 rounded-lg shadow-lg border animate-fade-in-right max-w-[90svw] sm:max-w-[340px] sm:min-w-[320px]",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,r.jsx)("h3",{className:"font-semibold",children:"Subscribe to Newsletter"}),(0,r.jsx)("button",{onClick:()=>t(!1),children:(0,r.jsx)(i.Z,{className:"h-4 w-4 hover:text-primary transition-colors duration-200 ease-in-out"})})]}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"Get 10% off your first order!"}),(0,r.jsxs)("form",{onSubmit:u(p),className:"space-y-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(c._,{htmlFor:"email",className:"sr-only",children:"Email"}),(0,r.jsx)(o.I,{id:"email",type:"email",...a("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}),placeholder:"Enter your email",className:"hover:border-primary transition-colors duration-200 ease-in-out focus-visible:ring-primary ".concat(f.email&&"border-red-500")}),f.email&&(0,r.jsx)("p",{className:"mt-1 text-xs text-red-500",children:f.email.message})]}),(0,r.jsx)(n.z,{type:"submit",className:"w-full",size:"sm",disabled:x,children:x?"Subscribing...":"Subscribe"})]})]})}var m=s(6127),f=s(6474);let x=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(m.fC,{className:(0,f.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",s),...a,ref:t,children:(0,r.jsx)(m.bU,{className:(0,f.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});x.displayName=m.fC.displayName;var p=s(7648);let h=[{id:"essential",name:"Essential",description:"Required for the website to function properly",required:!0},{id:"analytics",name:"Analytics",description:"Help us understand how visitors interact with our website"},{id:"marketing",name:"Marketing",description:"Used to deliver personalized advertisements"}];function v(e){let{setShowCookies:t}=e,[s,o]=(0,a.useState)(!1),[l,c]=(0,a.useState)({essential:!0,analytics:!1,marketing:!1}),{toast:u}=(0,d.pm)(),m=e=>{"essential"!==e&&c(t=>({...t,[e]:!t[e]}))};return(0,r.jsxs)("div",{className:"bg-card p-6 rounded-lg shadow-lg border max-w-[90svw] animate-fade-in-right sm:w-[520px]",children:[(0,r.jsxs)("div",{className:"flex justify-between items-start mb-4",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"Cookie Settings"}),(0,r.jsx)("button",{onClick:()=>t(!1),children:(0,r.jsx)(i.Z,{className:"h-4 w-4 hover:text-primary transition-colors duration-200 ease-in-out"})})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"We use cookies to enhance your browsing experience and analyze our traffic. Please choose your preferences below."}),s?(0,r.jsx)("div",{className:"space-y-4",children:h.map(e=>(0,r.jsxs)("div",{className:"flex items-start space-x-3 p-3 bg-muted/50 rounded-lg",children:[(0,r.jsx)(x,{checked:l[e.id],onCheckedChange:()=>m(e.id),disabled:e.required}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium",children:e.name}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:e.description})]})]},e.id))}):null,(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)(n.z,{onClick:()=>o(!s),variant:"outline",size:"sm",className:"hover:border-primary transition-colors duration-200 ease-in-out focus-visible:ring-primary hover:text-primary hover:bg-transparent",children:s?"Hide Settings":"Customize Settings"}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)(n.z,{variant:"ghost",onClick:()=>{localStorage.setItem("cookiePreferences",JSON.stringify(l)),localStorage.setItem("hasAcceptedCookies","true"),t(!1),u({title:"Preferences Saved",description:"Your cookie preferences have been updated"})},className:"flex-1",size:"sm",children:"Save Preferences"}),(0,r.jsx)(n.z,{onClick:()=>{localStorage.setItem("hasAcceptedCookies","true"),t(!1)},className:"flex-1",size:"sm",children:"Accept All"})]})]}),(0,r.jsxs)("p",{className:"text-xs text-muted-foreground",children:['By clicking "Accept All", you agree to our'," ",(0,r.jsx)(p.default,{href:"/privacy-policy",className:"underline hover:text-primary",children:"Privacy Policy"}),"."]})]})]})}var b=s(5365);function g(){let{showNewsletter:e,showCookies:t,setNotificationState:s,initializeNotifications:i}=(0,b.E)();return(0,a.useEffect)(()=>{i()},[]),(0,r.jsxs)("div",{className:"fixed bottom-4 left-4 space-y-4 z-50",children:[e&&(0,r.jsx)(u,{setShowNewsletter:e=>s("showNewsletter",e)}),t&&(0,r.jsx)(v,{setShowCookies:e=>s("showCookies",e)})]})}},4449:function(e,t,s){"use strict";s.d(t,{d:function(){return l},z:function(){return d}});var r=s(7437),a=s(2265),i=s(8482),n=s(535),o=s(6474);let l=(0,n.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:s,variant:a,size:n,asChild:d=!1,...c}=e,u=d?i.g7:"button";return(0,r.jsx)(u,{className:(0,o.cn)(l({variant:a,size:n,className:s})),ref:t,...c})});d.displayName="Button"},322:function(e,t,s){"use strict";s.d(t,{I:function(){return n}});var r=s(7437),a=s(2265),i=s(6474);let n=a.forwardRef((e,t)=>{let{className:s,type:a,...n}=e;return(0,r.jsx)("input",{type:a,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...n})});n.displayName="Input"},3032:function(e,t,s){"use strict";s.d(t,{_:function(){return d}});var r=s(7437),a=s(2265),i=s(6394),n=s(535),o=s(6474);let l=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(i.f,{ref:t,className:(0,o.cn)(l(),s),...a})});d.displayName=i.f.displayName},933:function(e,t,s){"use strict";s.d(t,{ThemeProvider:function(){return i}});var r=s(7437),a=s(5922);function i(e){let{children:t,...s}=e;return(0,r.jsx)(a.f,{...s,children:t})}},2092:function(e,t,s){"use strict";s.d(t,{Toaster:function(){return v}});var r=s(7437),a=s(6770),i=s(2265),n=s(2143),o=s(535),l=s(2489),d=s(6474);let c=n.zt,u=i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.l_,{ref:t,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...a})});u.displayName=n.l_.displayName;let m=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),f=i.forwardRef((e,t)=>{let{className:s,variant:a,...i}=e;return(0,r.jsx)(n.fC,{ref:t,className:(0,d.cn)(m({variant:a}),s),...i})});f.displayName=n.fC.displayName,i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.aU,{ref:t,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...a})}).displayName=n.aU.displayName;let x=i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.x8,{ref:t,className:(0,d.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...a,children:(0,r.jsx)(l.Z,{className:"h-4 w-4"})})});x.displayName=n.x8.displayName;let p=i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.Dx,{ref:t,className:(0,d.cn)("text-sm font-semibold [&+div]:text-xs",s),...a})});p.displayName=n.Dx.displayName;let h=i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.dk,{ref:t,className:(0,d.cn)("text-sm opacity-90",s),...a})});function v(){let{toasts:e}=(0,a.pm)();return(0,r.jsxs)(c,{children:[e.map(function(e){let{id:t,title:s,description:a,action:i,...n}=e;return(0,r.jsxs)(f,{...n,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[s&&(0,r.jsx)(p,{children:s}),a&&(0,r.jsx)(h,{children:a})]}),i,(0,r.jsx)(x,{})]},t)}),(0,r.jsx)(u,{})]})}h.displayName=n.dk.displayName},6770:function(e,t,s){"use strict";s.d(t,{pm:function(){return m}});var r=s(2265);let a=0,i=new Map,n=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?n(s):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=o(d,e),l.forEach(e=>{e(d)})}function u(e){let{...t}=e,s=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:s});return c({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function m(){let[e,t]=r.useState(d);return r.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},6474:function(e,t,s){"use strict";s.d(t,{cn:function(){return i}});var r=s(1994),a=s(3335);function i(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}},5365:function(e,t,s){"use strict";s.d(t,{E:function(){return o}});var r=s(3011),a=s(6885);let i=0,n=()=>(i=(i+1)%Number.MAX_SAFE_INTEGER).toString(),o=(0,r.U)((0,a.tJ)((e,t)=>({toasts:[],hasAcceptedCookies:!1,hasSubscribed:!1,showNewsletter:!1,showCookies:!1,toastTimeouts:new Map,addToast:s=>{let r=n();e(e=>({toasts:[{...s,id:r,open:!0},...e.toasts].slice(0,1)}));let a=setTimeout(()=>{t().removeToast(r)},1e6);return t().toastTimeouts.set(r,a),r},updateToast:(t,s)=>{e(e=>({toasts:e.toasts.map(e=>e.id===t?{...e,...s}:e)}))},dismissToast:s=>{e(e=>({toasts:e.toasts.map(e=>e.id===s?{...e,open:!1}:e)})),t().removeToast(s)},removeToast:s=>{let r=t().toastTimeouts.get(s);r&&clearTimeout(r),t().toastTimeouts.delete(s),e(e=>({toasts:e.toasts.filter(e=>e.id!==s)}))},setNotificationState:(t,s)=>{e({[t]:s})},initializeNotifications:()=>{let{hasAcceptedCookies:s,hasSubscribed:r}=t();s||e({showCookies:!0}),r||setTimeout(()=>{e({showNewsletter:!0})},1e3)}}),{name:"toast-storage",partialize:e=>({hasAcceptedCookies:e.hasAcceptedCookies,hasSubscribed:e.hasSubscribed})}))},2778:function(){}},function(e){e.O(0,[981,969,648,501,934,725,336,971,117,744],function(){return e(e.s=2872)}),_N_E=e.O()}]);