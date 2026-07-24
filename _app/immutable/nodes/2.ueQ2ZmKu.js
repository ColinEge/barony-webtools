import{$ as e,C as t,D as n,G as r,N as i,S as a,T as o,U as s,et as c,nt as l,rt as u,u as d,w as f,x as p,z as m}from"../chunks/DeJ7nlfh.js";import"../chunks/xihTtKlq.js";import{t as h}from"../chunks/B7TyIBS2.js";var g=n(`<p class="mt-2 text-sm text-neutral-500"> </p>`),_=n(`<a class="
							group
							rounded-xl
							border border-neutral-800
							bg-neutral-900
							p-5
							transition
							hocus:border-primary-500
							hocus:ring-1
							hocus:ring-primary-500
						"><div class="flex items-center justify-between"><h3 class="
									font-medium
									text-neutral-100
									transition
									group-hocus:text-primary-400
								"> </h3> <span class="
									text-neutral-600
									transition
									group-hocus:text-primary-400
								">→</span></div> <!></a>`),v=n(`<section><h2 class="mb-3 text-xl font-semibold text-neutral-200"> </h2> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"></div></section>`),y=n(`<div class="space-y-8 mx-4 mt-2"></div>`);function b(n,b){c(b,!0);let x=Array.from(new Set(h.map(e=>e.game)));var S=y();p(S,21,()=>x,a,(e,n)=>{var c=v(),y=s(c),b=s(y,!0);u(y);var x=r(y,2);p(x,21,()=>h.filter(e=>e.game===i(n)),a,(e,n)=>{var a=_(),c=s(a),p=s(c),h=s(p,!0);u(p),l(2),u(c);var v=r(c,2),y=e=>{var t=g(),r=s(t,!0);u(t),m(()=>f(r,i(n).description)),o(e,t)};t(v,e=>{i(n).description&&e(y)}),u(a),m(()=>{d(a,`href`,i(n).href),f(h,i(n).title)}),o(e,a)}),u(x),u(c),m(()=>f(b,i(n))),o(e,c)}),u(S),o(n,S),e()}export{b as component};