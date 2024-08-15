var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function p(){return s(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function f(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t){return""===t?null:+t}function g(t,n){n=""+n,t.data!==n&&(t.data=n)}function m(t,n){t.value=null==n?"":n}function y(t,n,e,o){null==e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let b;function w(t){b=t}function $(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const _=[],k=[];let x=[];const v=[],C=Promise.resolve();let E=!1;function j(t){x.push(t)}const z=new Set;let N=0;function O(){if(0!==N)return;const t=b;do{try{for(;N<_.length;){const t=_[N];N++,w(t),S(t.$$)}}catch(t){throw _.length=0,N=0,t}for(w(null),_.length=0,N=0;k.length;)k.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];z.has(n)||(z.add(n),n())}x.length=0}while(_.length);for(;v.length;)v.pop()();E=!1,z.clear(),w(t)}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const L=new Set;function A(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];x.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),x=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function T(t,n){-1===t.$$.dirty[0]&&(_.push(t),E||(E=!0,C.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function P(c,i,u,l,s,p,d,f=[-1]){const h=b;w(c);const g=c.$$={fragment:null,ctx:[],props:p,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:i.target||h.$$.root};d&&d(g.root);let m=!1;if(g.ctx=u?u(c,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&s(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),m&&T(c,t)),n})):[],g.update(),m=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();i.intro&&((y=c.$$.fragment)&&y.i&&(L.delete(y),y.i($))),function(t,e,c,i){const{fragment:u,after_update:a}=t.$$;u&&u.m(e,c),i||j((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(j)}(c,i.target,i.anchor,i.customElement),O()}var y,$;w(h)}class R{$destroy(){A(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(t,n,e){const o=t.slice();return o[36]=n[e],o}function J(n){let e,o,r;return{c(){e=l("button"),e.textContent="Login"},m(t,c){u(t,e,c),o||(r=d(e,"click",n[14]),o=!0)},p:t,d(t){t&&a(e),o=!1,r()}}}function M(n){let e,o,r;return{c(){e=l("button"),e.textContent="Logout"},m(t,c){u(t,e,c),o||(r=d(e,"click",n[15]),o=!0)},p:t,d(t){t&&a(e),o=!1,r()}}}function U(t){let n,e,r,c,f,h,m,y,b,w,$,_=t[36].url_name+"";function k(){return t[20](t[36])}function x(){return t[21](t[36])}function v(){return t[22](t[36])}return{c(){n=l("li"),e=s(_),r=p(),c=l("button"),c.textContent="Load",f=p(),h=l("button"),h.textContent="Update",m=p(),y=l("button"),y.textContent="Delete",b=p()},m(t,o){u(t,n,o),i(n,e),i(n,r),i(n,c),i(n,f),i(n,h),i(n,m),i(n,y),i(n,b),w||($=[d(c,"click",k),d(h,"click",x),d(y,"click",v)],w=!0)},p(n,o){t=n,512&o[0]&&_!==(_=t[36].url_name+"")&&g(e,_)},d(t){t&&a(n),w=!1,o($)}}}function G(t){let n,e,r,c;return{c(){n=l("button"),e=s(t[4]),f(n,"id","error_message"),y(n,"background","none"),y(n,"border","none"),y(n,"padding","0"),y(n,"margin","0"),y(n,"color","inherit"),y(n,"font","inherit"),y(n,"cursor","pointer")},m(o,a){u(o,n,a),i(n,e),r||(c=[d(n,"click",t[23]),d(n,"keydown",t[24])],r=!0)},p(t,n){16&n[0]&&g(e,t[4])},d(t){t&&a(n),r=!1,o(c)}}}function W(n){let e,o,r;return{c(){e=l("button"),e.textContent="Change List Name"},m(t,c){u(t,e,c),o||(r=d(e,"click",n[12]),o=!0)},p:t,d(t){t&&a(e),o=!1,r()}}}function B(t){let n,e,r,c,i;return{c(){n=l("input"),e=p(),r=l("button"),r.textContent="Update",f(n,"type","text")},m(o,a){u(o,n,a),m(n,t[3]),u(o,e,a),u(o,r,a),c||(i=[d(n,"input",t[28]),d(r,"click",t[13])],c=!0)},p(t,e){8&e[0]&&n.value!==t[3]&&m(n,t[3])},d(t){t&&a(n),t&&a(e),t&&a(r),c=!1,o(i)}}}function D(n){let e,r,c,b,w,$,_,k,x,v,C,E,j,z,N,O,S,L,A,T,P,R,D,K,F,V,q,H,Y,Q,X,Z,tt,nt,et,ot,rt,ct,it;function ut(t,n){return t[6]?M:J}let at=ut(n),lt=at(n),st=n[9],pt=[];for(let t=0;t<st.length;t+=1)pt[t]=U(I(n,st,t));let dt=n[4]&&G(n);function ft(t,n){return t[5]?B:W}let ht=ft(n),gt=ht(n);return{c(){e=l("div"),r=l("div"),c=l("h1"),c.textContent="サービス名",b=p(),lt.c(),w=p(),$=l("div"),_=l("div"),k=l("ul");for(let t=0;t<pt.length;t+=1)pt[t].c();x=p(),v=l("div"),dt&&dt.c(),C=p(),E=l("p"),j=s(n[4]),z=p(),N=l("button"),N.textContent="Test URL List",O=p(),S=l("p"),L=s(n[8]),A=p(),T=l("p"),P=s(n[3]),R=p(),gt.c(),D=p(),K=l("label"),K.textContent="Open Volume:",F=p(),V=l("input"),H=p(),Y=l("textarea"),Q=p(),X=l("button"),X.textContent="実行",Z=p(),tt=l("button"),tt.textContent="Create Record",nt=p(),et=l("p"),ot=s("uid: "),rt=s(n[7]),f(r,"class","header svelte-anizpz"),f(_,"class","left-column svelte-anizpz"),y(E,"background","none"),y(E,"border","none"),y(E,"padding","0"),y(E,"margin","0"),y(E,"color","inherit"),y(E,"font","inherit"),y(E,"cursor","pointer"),f(K,"for","open_volume"),f(V,"type","number"),f(V,"id","open_volume"),f(V,"min","1"),f(V,"max",q=n[2].length),f(Y,"placeholder","URLリストを入力してください"),f(Y,"class","svelte-anizpz"),f(v,"class","right-column svelte-anizpz"),f($,"class","content svelte-anizpz"),f(e,"class","container svelte-anizpz")},m(t,o){u(t,e,o),i(e,r),i(r,c),i(r,b),lt.m(r,null),i(e,w),i(e,$),i($,_),i(_,k);for(let t=0;t<pt.length;t+=1)pt[t]&&pt[t].m(k,null);i($,x),i($,v),dt&&dt.m(v,null),i(v,C),i(v,E),i(E,j),i(v,z),i(v,N),i(v,O),i(v,S),i(S,L),i(v,A),i(v,T),i(T,P),i(v,R),gt.m(v,null),i(v,D),i(v,K),i(v,F),i(v,V),m(V,n[1]),i(v,H),i(v,Y),m(Y,n[0]),i(v,Q),i(v,X),i(v,Z),i(v,tt),i(v,nt),i(v,et),i(et,ot),i(et,rt),ct||(it=[d(E,"click",n[25]),d(E,"keydown",n[26]),d(N,"click",n[27]),d(V,"input",n[29]),d(Y,"input",n[30]),d(X,"click",n[11]),d(tt,"click",n[16])],ct=!0)},p(t,n){if(at===(at=ut(t))&&lt?lt.p(t,n):(lt.d(1),lt=at(t),lt&&(lt.c(),lt.m(r,null))),393729&n[0]){let e;for(st=t[9],e=0;e<st.length;e+=1){const o=I(t,st,e);pt[e]?pt[e].p(o,n):(pt[e]=U(o),pt[e].c(),pt[e].m(k,null))}for(;e<pt.length;e+=1)pt[e].d(1);pt.length=st.length}t[4]?dt?dt.p(t,n):(dt=G(t),dt.c(),dt.m(v,C)):dt&&(dt.d(1),dt=null),16&n[0]&&g(j,t[4]),256&n[0]&&g(L,t[8]),8&n[0]&&g(P,t[3]),ht===(ht=ft(t))&&gt?gt.p(t,n):(gt.d(1),gt=ht(t),gt&&(gt.c(),gt.m(v,D))),4&n[0]&&q!==(q=t[2].length)&&f(V,"max",q),2&n[0]&&h(V.value)!==t[1]&&m(V,t[1]),1&n[0]&&m(Y,t[0]),128&n[0]&&g(rt,t[7])},i:t,o:t,d(t){t&&a(e),lt.d(),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(pt,t),dt&&dt.d(),gt.d(),ct=!1,o(it)}}}function K(t,n,e){firebase.initializeApp({apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"});const o=new firebase.auth.GoogleAuthProvider;let r="GAFAM";const c="https://www.google.com\nhttps://www.amazon.co.jp\nhttps://www.apple.com/jp\nhttps://www.microsoft.com/ja-jp\nhttps://www.facebook.com";let i="https://www.google.com\nhttps://www.amazon.com\nhttps://www.apple.com\nhttps://www.microsoft.com\nhttps://www.facebook.com",u=1,a=[],l=[],s=[],p="",d=!1,f=null,g="",m="Not logged in",y=[];async function b(){try{console.log("fetch_data");const t=await fetch("https://cotton-concrete-catsup.glitch.me/pop_up_url/read",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:g})}),n=await t.json();e(9,y=n.all_json)}catch(t){console.error("Error fetching data:",t)}}async function w(t){try{if(!confirm("更新しますか？"))return;const n=await fetch("https://cotton-concrete-catsup.glitch.me/pop_up_url/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,uid:g,url_name:r,url_list:i})}),e=await n.json();console.log("Record updated:",e),b()}catch(t){console.error("Error updating record:",t)}}async function _(t){try{const n=await fetch("https://cotton-concrete-catsup.glitch.me/pop_up_url/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,uid:g})}),e=await n.json();console.log("Record deleted:",e),b()}catch(t){console.error("Error deleting record:",t)}}$((()=>{firebase.auth().onAuthStateChanged((t=>{e(6,f=t),f?(e(8,m=`Logged in as: ${f.displayName}`),e(7,g=f.uid),b()):(e(8,m="Not logged in"),e(7,g=""))})),b()}));return t.$$.update=()=>{524295&t.$$.dirty[0]&&(e(19,a=i.split("\n").filter((t=>""!==t.trim()))),a.length>100?e(4,p="URLリストは100行までです。"):e(4,p=""),e(2,l=Array.from({length:a.length},((t,n)=>n+1))),l.length>0&&e(1,u=Math.max(u,l[l.length-1])))},[i,u,l,r,p,d,f,g,m,y,c,async function(){s=a.slice(0,u),s.forEach((t=>function(t){window.open(t,"_blank")}(t)))},function(){e(5,d=!d)},function(){e(5,d=!1)},function(){firebase.auth().signInWithPopup(o).then((t=>{e(6,f=t.user),e(8,m=`Logged in as: ${f.displayName}`)})).catch((t=>{console.error("Error during Google login:",t),alert("Google login failed. "+t.message)}))},function(){firebase.auth().signOut().then((()=>{e(6,f=null),e(8,m="Not logged in")})).catch((t=>{console.error("Error during sign-out:",t),alert("Sign out failed. "+t.message)}))},async function(){try{const t=await fetch("https://cotton-concrete-catsup.glitch.me/pop_up_url/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:g,url_name:r,url_list:i})}),n=await t.json();console.log("Record created:",n),b()}catch(t){console.error("Error creating record:",t)}},w,_,a,t=>e(0,i=t.url_list),t=>w(t.id),t=>_(t.id),()=>e(4,p=""),t=>{"Enter"!==t.key&&" "!==t.key||e(4,p="")},()=>e(4,p=""),t=>{"Enter"!==t.key&&" "!==t.key||e(4,p="")},()=>e(0,i=c),function(){r=this.value,e(3,r)},function(){u=h(this.value),e(1,u),e(0,i),e(19,a),e(2,l)},function(){i=this.value,e(0,i)}]}return new class extends R{constructor(t){super(),P(this,t,K,D,c,{},null,[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
