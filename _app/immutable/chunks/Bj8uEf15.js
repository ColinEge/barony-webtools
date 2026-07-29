import{$ as e,C as t,D as n,J as r,K as i,N as a,Q as o,T as s,W as c,Y as l,a as u,at as d,b as f,c as p,h as m,i as h,it as g,z as _}from"./r6z1PlyH.js";import"./xihTtKlq.js";var v=Symbol(`phosphor-svelte`);function y(){return e(v)?o(v):{}}var b=new Set([`$$slots`,`$$events`,`$$legacy`,`variant`,`class`,`children`]),x=n(`<button><!></button>`);function S(e,t){let n=h(t,`variant`,3,`secondary`),r=h(t,`class`,3,``),i=u(t,b),a={primary:`bg-primary-500 text-black`,secondary:`bg-neutral-900 text-neutral-100 border border-neutral-700`,danger:`bg-red-600 text-white`,ghost:`text-neutral-300`};var o=x();p(o,()=>({class:`
		inline-flex items-center justify-center gap-2
		rounded px-2 py-1
		transition-all duration-150
		active:translate-y-px
		active:scale-95	
		${a[n()]}
		${r()}
	`,...i})),f(c(o),()=>t.children??d),g(o),s(e,o)}var C=n(`<div class="flex items-center"><!></div>`),w=n(`<div class="
		mb-2
		flex
		items-stretch
		overflow-hidden
		rounded
		border
		border-neutral-800
		bg-neutral-900
		transition-colors
		duration-150
		hover:bg-neutral-800
	"><div></div> <div class="flex-1 px-3 py-2"><!></div> <!></div>`);function T(e,n){let r=h(n,`selected`,3,!1);var a=w(),o=c(a);let l;var u=i(o,2);f(c(u),()=>n.children??d),g(u);var p=i(u,2),v=e=>{var t=C();f(c(t),()=>n.actions),g(t),s(e,t)};t(p,e=>{n.actions&&e(v)}),g(a),_(()=>l=m(o,1,`transition-all duration-200 ease-out`,null,l,{"w-1":!r(),"w-2":r(),"bg-transparent":!r(),"bg-primary-500":r()})),s(e,a)}var E=new class{#e=l(``);get title(){return a(this.#e)}set title(e){r(this.#e,e,!0)}#t=l(null);get actions(){return a(this.#t)}set actions(e){r(this.#t,e,!0)}};export{y as i,T as n,S as r,E as t};