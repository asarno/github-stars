(this["webpackJsonpgithub-stars"]=this["webpackJsonpgithub-stars"]||[]).push([[0],{140:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(10),o=t.n(c),u=(t(90),t(39)),i=t(17),l=t(18);function s(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #007aff;\n    cursor: pointer;\n    margin: 1rem;\n"]);return s=function(){return e},e}function m(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    margin: 1rem;\n"]);return m=function(){return e},e}function f(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    max-width: 80vw;\n    flex-wrap: wrap;\n"]);return f=function(){return e},e}function v(){var e=Object(i.a)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    margin-top: 2rem;\n"]);return v=function(){return e},e}var d=l.a.div(v()),p=l.a.div(f()),g=l.a.div(m()),b=l.a.span(s()),h=t(176),E=t(172),y=t(175),j=t(174),w=function(e){var n=e.setQuery,t=e.type,c=e.setType,o=Object(r.useState)(""),i=Object(u.a)(o,2),l=i[0],s=i[1];return a.a.createElement(g,null,a.a.createElement(h.a,{value:t,indicatorColor:"primary",textColor:"primary",onChange:function(e,n){return c(n)},style:{margin:"1rem"}},a.a.createElement(E.a,{label:"users",value:"users"}),a.a.createElement(E.a,{label:"orgs",value:"orgs"})),a.a.createElement(y.a,{label:"enter ".concat(t),variant:"outlined",value:l,onChange:function(e){return s(e.target.value)},style:{margin:"1rem"}}),a.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){return n(l)},style:{margin:"1rem"}},"search"))},x=t(77),O=t(51),k=t.n(O),z=t(71),C=t(72),_=t.n(C).a.create({baseURL:"https://api.github.com"}),L=t(73);function S(e){return{name:e[0].owner.login,avatar:e[0].owner.avatar_url,repos:e.sort((function(e,n){return n.stargazers_count-e.stargazers_count})).map((function(e){var n=e.id,t=e.name,r=e.owner,a=e.full_name,c=e.stargazers_count,o=e.language,u=e.html_url;return{id:n,name:t,fullName:a,avatar:r.avatar_url,stars:c,language:o,url:u}}))}}function N(){return(N=Object(z.a)(k.a.mark((function e(n,t){var r,a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===n){e.next=8;break}return e.next=3,_.get("/".concat(t,"/").concat(n,"/repos"));case 3:return r=e.sent,a=r.status,c=r.data,L.strict.equal(a,200),e.abrupt("return",S(c));case 8:return e.abrupt("return",[]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,n){var t=Object(x.a)("/".concat(n,"/").concat(e),(function(){return function(e,n){return N.apply(this,arguments)}(e,n)})),r=t.data,a=t.error;return{data:r,error:a,isLoading:!r&&!a}}var B=t(74);function F(){var e=Object(i.a)(["\n\tdisplay: block;\n\tmargin: ",";\n"]);return F=function(){return e},e}function T(){var e=Object(i.a)(["\n    height: ",";\n    z-index: 11;\n"]);return T=function(){return e},e}var I=l.a.div(T(),(function(e){return e.isFullscreen?"50vh":"auto"})),J=Object(l.a)(B.BounceLoader)(F(),(function(e){return e.center?"auto":0})),Q=function(e){var n=e.isLoading,t=e.isFullscreen,a=void 0!==t&&t,c=e.color,o=void 0===c?"#1872e0":c,u=e.size,i=void 0===u?50:u;return r.createElement(I,{isFullscreen:a},r.createElement(J,{color:o,size:i,loading:n}))},W=t(173),M=t(76);function R(){var e=Object(i.a)(["\n    margin-right: 1rem;\n    font-size: 1.5rem;\n    color: ",";\n"]);return R=function(){return e},e}function U(){var e=Object(i.a)(["\n    margin: 1rem;\n    width: 300px;\n    cursor: pointer;\n    transition: transform 1s ease-out !important;\n\n    &:hover {\n       transform: scale(1.2);\n    }\n"]);return U=function(){return e},e}var $=Object(l.a)(W.a)(U()),A=l.a.i(R(),(function(e){return e.color}));var D=function(e){var n=e.name,t=e.stars,r=e.language,c=e.url;return a.a.createElement($,{onClick:function(){return window.open(c,"_blank")}},a.a.createElement(g,{style:{alignItems:"flex-start"}},a.a.createElement(p,{style:{margin:"0.5rem 0"}},a.a.createElement(A,{color:"#0f95f5",className:"fas fa-user"}),a.a.createElement("span",null,n)),a.a.createElement(p,{style:{margin:"0.5rem 0"}},a.a.createElement(A,{color:"#24d167",className:"fas fa-star"}),a.a.createElement(M.a,{value:t,displayType:"text",thousandSeparator:!0})),a.a.createElement(p,{style:{margin:"0.5rem 0"}},a.a.createElement(A,{color:"#8a22c5",className:"fas fa-code"}),a.a.createElement("span",null,r))))};function G(){var e=Object(i.a)(["\n    font-size: 1.3rem;\n"]);return G=function(){return e},e}function H(){var e=Object(i.a)(["\n    border-radius: 50%;\n    background: ",";\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 150px;\n    height: 150px;\n    margin-bottom: 0.5rem;\n"]);return H=function(){return e},e}var K=l.a.div(H(),(function(e){var n=e.src;return"url('".concat(n,"')")})),P=l.a.span(G());var V=function(e){var n,t=q(e.query,e.type),r=t.data,c=t.error,o=t.isLoading;return a.a.createElement(g,null,o&&a.a.createElement(Q,{isLoading:!0}),a.a.createElement(g,null,a.a.createElement(K,{src:null===r||void 0===r?void 0:r.avatar}),a.a.createElement(P,null,null===r||void 0===r?void 0:r.name)),a.a.createElement(p,{style:{justifyContent:"center"}},r&&(null===(n=r.repos)||void 0===n?void 0:n.length)>0&&r.repos.map((function(e){return a.a.createElement(D,Object.assign({key:e.id},e))}))),c&&a.a.createElement("span",null,"Error: ",c.response.data.message))};var X=function(){var e=Object(r.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)("users"),i=Object(u.a)(o,2),l=i[0],s=i[1];return a.a.createElement(d,null,a.a.createElement(w,{type:l,setType:s,setQuery:c}),a.a.createElement(V,{query:t,type:l}))},Y=t(12),Z=function(){var e=Object(Y.f)();return a.a.createElement(d,null,a.a.createElement("span",null,"route not found :("),a.a.createElement(b,{onClick:function(){return e.push("/")}},"return to home"))},ee=t(49);var ne=function(){return a.a.createElement(ee.a,{basename:"/github-stars"},a.a.createElement(Y.c,null,a.a.createElement(Y.a,{exact:!0,path:"/",component:X}),a.a.createElement(Y.a,{component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,n,t){e.exports=t(140)},90:function(e,n,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.4605d78e.chunk.js.map