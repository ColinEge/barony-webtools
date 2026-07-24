import{C as e,D as t,G as n,J as r,N as i,Q as a,T as o,U as s,Z as c,a as l,b as u,c as d,h as f,i as p,it as m,q as h,rt as g,z as _}from"./DeJ7nlfh.js";import"./xihTtKlq.js";var v=Symbol(`phosphor-svelte`);function y(){return a(v)?c(v):{}}var b=new Set([`$$slots`,`$$events`,`$$legacy`,`variant`,`class`,`children`]),x=t(`<button><!></button>`);function S(e,t){let n=p(t,`variant`,3,`secondary`),r=p(t,`class`,3,``),i=l(t,b),a={primary:`bg-primary-500 text-black`,secondary:`bg-neutral-900 text-neutral-100 border border-neutral-700`,danger:`bg-red-600 text-white`,ghost:`text-neutral-300`};var c=x();d(c,()=>({class:`
		inline-flex items-center justify-center gap-2
		rounded px-2 py-1
		transition-all duration-150
		active:translate-y-px
		active:scale-95	
		${a[n()]}
		${r()}
	`,...i})),u(s(c),()=>t.children??m),g(c),o(e,c)}var C=t(`<div class="flex items-center"><!></div>`),w=t(`<div class="
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
	"><div></div> <div class="flex-1 px-3 py-2"><!></div> <!></div>`);function T(t,r){let i=p(r,`selected`,3,!1);var a=w(),c=s(a);let l;var d=n(c,2);u(s(d),()=>r.children??m),g(d);var h=n(d,2),v=e=>{var t=C();u(s(t),()=>r.actions),g(t),o(e,t)};e(h,e=>{r.actions&&e(v)}),g(a),_(()=>l=f(c,1,`transition-all duration-200 ease-out`,null,l,{"w-1":!i(),"w-2":i(),"bg-transparent":!i(),"bg-primary-500":i()})),o(t,a)}var E=new class{#e=r(``);get title(){return i(this.#e)}set title(e){h(this.#e,e,!0)}#t=r(null);get actions(){return i(this.#t)}set actions(e){h(this.#t,e,!0)}};export{y as i,T as n,S as r,E as t};