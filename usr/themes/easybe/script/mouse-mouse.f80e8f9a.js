"use strict";(self.webpackChunkeasybe=self.webpackChunkeasybe||[]).push([[8379],{42352:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var o=n(71606);function s(e){const t=document.createElement("div");t.className="cursor";const n=document.createElement("div");n.className="cursor-f";let s,c,i=0,d=0,l=0,u=0,a=e.size,r=e.sizeF;function p(e,t,n){return(1-n)*e+n*t}document.body.appendChild(t),document.body.appendChild(n),"ontouchstart"in window&&(t.style.display="none",n.style.display="none"),t.style.setProperty("--size",a+"px"),n.style.setProperty("--size",r+"px"),window.addEventListener("mousemove",(function(e){l=e.pageX,u=e.pageY,t.style.top=u-a/2+"px";let n=l-a/2,o=document.body.offsetWidth;n=n<0?0:o-a<n?o-a:n,t.style.left=n+"px"})),function e(){i=p(i,l,.16),d=p(d,u,.16),n.style.top=d-r/2+"px";let t=i-r/2,o=document.body.offsetWidth;t=t<0?0:o-r<t?o-r:t,n.style.left=t+"px",requestAnimationFrame(e)}();let f=!1;function y(e){o.p8.to(t,{scale:4.5}),o.p8.to(n,{scale:.4}),f=!0,s=e.clientY||e.touches[0].clientY||e.targetTouches[0].clientY}function m(e){o.p8.to(t,{scale:1}),o.p8.to(n,{scale:1}),c=e.clientY||c,f&&s&&Math.abs(s-c)>=40&&(f=!1,s=null,c=null)}window.addEventListener("mousedown",y,!1),window.addEventListener("touchstart",y,!1),window.addEventListener("touchmove",(function(e){f&&(c=e.touches[0].clientY||e.targetTouches[0].clientY)}),!1),window.addEventListener("touchend",m,!1),window.addEventListener("mouseup",m,!1)}}}]);