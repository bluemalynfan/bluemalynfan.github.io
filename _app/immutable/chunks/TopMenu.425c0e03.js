import{s as v,n as h}from"./scheduler.63274e7e.js";import{S as y,i as p,g as f,s as _,h as d,j as g,y as b,c as k,f as x,k as o,a as w,x as m}from"./index.d5163801.js";function V(r){let t,e,n='<a class="flex text-9xl font-bold font-nanumGothic" style="background: linear-gradient(to bottom right, #5D67F4, #4541B0); -webkit-background-clip: text; color: transparent;" href="/">M</a> <a class="flex text-xl font-bold font-nanumGothic mb-[0.3rem]" href="/">ALYN</a>',l,s,u='<a class="flex" href="/about">About</a> <a class="flex" href="/gallery">Gallery</a> <a class="flex" href="https://twitter.com/malyn_Official" target="_blank">Commission</a>',c;return{c(){t=f("div"),e=f("div"),e.innerHTML=n,l=_(),s=f("div"),s.innerHTML=u,this.h()},l(a){t=d(a,"DIV",{class:!0,style:!0});var i=g(t);e=d(i,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-jy934s"&&(e.innerHTML=n),l=k(i),s=d(i,"DIV",{class:!0,"data-svelte-h":!0}),b(s)!=="svelte-nqnc9n"&&(s.innerHTML=u),i.forEach(x),this.h()},h(){o(e,"class","absolute left-[20%] bottom-[2rem] text-black font-nanumGothic flex flex-row items-end"),o(s,"class","absolute left-0 bottom-0 w-full mb-[0.5rem] text-black text-xl font-nanumGothic flex flex-row gap-[3rem] justify-center items-end"),o(t,"class","fixed left-0 top-0 w-full h-[11.375rem] bg-white"),o(t,"style",c=" transition: all 0.3s ease-in-out;"+(r[0]?"opacity: 1; visibility: visible;":"opacity: 0; visibility: hidden;"))},m(a,i){w(a,t,i),m(t,e),m(t,l),m(t,s)},p(a,[i]){i&1&&c!==(c=" transition: all 0.3s ease-in-out;"+(a[0]?"opacity: 1; visibility: visible;":"opacity: 0; visibility: hidden;"))&&o(t,"style",c)},i:h,o:h,d(a){a&&x(t)}}}function M(r,t,e){let{isVisible:n=!0}=t;return r.$$set=l=>{"isVisible"in l&&e(0,n=l.isVisible)},[n]}class L extends y{constructor(t){super(),p(this,t,M,V,v,{isVisible:0})}}export{L as T};