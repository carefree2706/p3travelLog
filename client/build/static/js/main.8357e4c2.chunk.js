(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(41),r=n.n(s),l=n(14),o=n.n(l),i=n(13),u=n(16),j=n(21),b=n(8),d=(n(51),n(19)),O=n(88),p=n(90),h=n(17),m=n.n(h),x=n(44),f=n(89),g=(n(71),n(4));function v(e){var t=e.setShowRegister,n=Object(c.useState)(!1),a=Object(b.a)(n,2),s=a[0],r=a[1],l=Object(c.useState)(!1),i=Object(b.a)(l,2),j=i[0],d=i[1],p=Object(c.useRef)(),h=Object(c.useRef)(),x=Object(c.useRef)(),v=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:p.current.value,email:h.current.value,password:x.current.value},e.prev=2,e.next=5,m.a.post("api/users/register",n);case 5:d(!1),r(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),d(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"registerContainer",children:[Object(g.jsxs)("div",{className:"logo",children:[Object(g.jsx)(O.a,{className:"logoIcon"}),Object(g.jsx)("span",{children:"Journey"})]}),Object(g.jsxs)("form",{onSubmit:v,children:[Object(g.jsx)("input",{autoFocus:!0,placeholder:"username",ref:p}),Object(g.jsx)("input",{type:"email",placeholder:"email",ref:h}),Object(g.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:x}),Object(g.jsx)("button",{className:"registerBtn",type:"submit",children:"Register"}),s&&Object(g.jsx)("span",{className:"success",children:"Successfull. You can login now!"}),j&&Object(g.jsx)("span",{className:"failure",children:"opps,Something went wrong!"})]}),Object(g.jsx)(f.a,{className:"registerCancel",onClick:function(){return t(!1)}})]})}n(75);function w(e){var t=e.setShowLogin,n=e.setCurrentUsername,a=e.myStorage,s=Object(c.useState)(!1),r=Object(b.a)(s,2),l=r[0],i=r[1],j=Object(c.useRef)(),d=Object(c.useRef)(),p=function(){var e=Object(u.a)(o.a.mark((function e(c){var s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s={username:j.current.value,password:d.current.value},e.prev=2,e.next=5,m.a.post("api/users/login",s);case 5:r=e.sent,n(r.data.username),a.setItem("user",r.data.username),t(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),i(!0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"loginContainer",children:[Object(g.jsxs)("div",{className:"logo",children:[Object(g.jsx)(O.a,{className:"logoIcon"}),Object(g.jsx)("span",{children:"Journey"})]}),Object(g.jsxs)("form",{onSubmit:p,children:[Object(g.jsx)("input",{autoFocus:!0,placeholder:"username",ref:j}),Object(g.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:d}),Object(g.jsx)("button",{className:"loginBtn",type:"submit",children:"Login"}),l&&Object(g.jsx)("span",{className:"failure",children:"oops, Something went wrong!"})]}),Object(g.jsx)(f.a,{className:"loginCancel",onClick:function(){return t(!1)}})]})}var S=function(){var e=window.localStorage,t=Object(c.useState)(e.getItem("user")),n=Object(b.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),l=Object(b.a)(r,2),h=l[0],f=l[1],S=Object(c.useState)(null),N=Object(b.a)(S,2),C=N[0],k=N[1],y=Object(c.useState)(null),R=Object(b.a)(y,2),z=R[0],I=R[1],J=Object(c.useState)(null),L=Object(b.a)(J,2),A=L[0],B=L[1],D=Object(c.useState)(null),F=Object(b.a)(D,2),T=F[0],E=F[1],U=Object(c.useState)(0),Y=Object(b.a)(U,2),_=Y[0],q=Y[1],G=Object(c.useState)({latitude:1.3521,longitude:103.8198,zoom:4}),M=Object(b.a)(G,2),P=M[0],W=M[1],Z=Object(c.useState)(!1),H=Object(b.a)(Z,2),V=H[0],X=H[1],K=Object(c.useState)(!1),Q=Object(b.a)(K,2),$=Q[0],ee=Q[1],te=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:a,title:A,desc:T,rating:_,lat:z.lat,long:z.long},e.prev=2,e.next=5,m.a.post("api/pins",n);case 5:c=e.sent,f([].concat(Object(i.a)(h),[c.data])),I(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("api/pins");case 3:t=e.sent,f(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(g.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(g.jsxs)(d.c,Object(j.a)(Object(j.a)({},P),{},{mapboxApiAccessToken:"pk.eyJ1IjoiZG9uYWxkd3UiLCJhIjoiY2twNGxwcXdpMWlsNjJ0cHFnejR4dTE1ZSJ9.AcvCnOeSCehrep6Jt57mmA",width:"100%",height:"100%",transitionDuration:"20",mapStyle:"mapbox://styles/donaldwu/ckp4oxxuq1s1q17mz2k2989vc",onViewportChange:function(e){return W(e)},onDblClick:a&&function(e){var t=Object(b.a)(e.lngLat,2),n=t[0],c=t[1];I({lat:c,long:n})},children:[h.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{latitude:e.lat,longitude:e.long,offsetLeft:-3.5*P.zoom,offsetTop:-7*P.zoom,children:Object(g.jsx)(O.a,{style:{fontSize:7*P.zoom,color:a===e.username?"gold":"slateblue",cursor:"pointer"},onClick:function(){return t=e._id,n=e.lat,c=e.long,k(t),void W(Object(j.a)(Object(j.a)({},P),{},{latitude:n,longitude:c}));var t,n,c}})}),e._id===C&&Object(g.jsx)(d.b,{latitude:e.lat,longitude:e.long,closeButton:!0,closeOnClick:!1,onClose:function(){return k(null)},anchor:"left",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("label",{children:"Place"}),Object(g.jsx)("h4",{className:"place",children:e.title}),Object(g.jsx)("label",{children:"Review"}),Object(g.jsx)("p",{className:"desc",children:e.desc}),Object(g.jsx)("label",{children:"Rating"}),Object(g.jsx)("div",{className:"stars",children:Array(e.rating).fill(Object(g.jsx)(p.a,{className:"star"}))}),Object(g.jsx)("label",{children:"Information"}),Object(g.jsxs)("span",{className:"username",children:["Created by ",Object(g.jsx)("b",{children:e.username})]}),Object(g.jsx)("span",{className:"date",children:Object(x.a)(e.createdAt)})]})},e._id)]})})),z&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{latitude:z.lat,longitude:z.long,offsetLeft:-3.5*P.zoom,offsetTop:-7*P.zoom,children:Object(g.jsx)(O.a,{style:{fontSize:7*P.zoom,color:"tomato",cursor:"pointer"}})}),Object(g.jsx)(d.b,{latitude:z.lat,longitude:z.long,closeButton:!0,closeOnClick:!1,onClose:function(){return I(null)},anchor:"left",children:Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:te,children:[Object(g.jsx)("label",{children:"Title"}),Object(g.jsx)("input",{placeholder:"Enter a title",autoFocus:!0,onChange:function(e){return B(e.target.value)}}),Object(g.jsx)("label",{children:"Description"}),Object(g.jsx)("textarea",{placeholder:"Say us something about this place.",onChange:function(e){return E(e.target.value)}}),Object(g.jsx)("label",{children:"Rating"}),Object(g.jsxs)("select",{onChange:function(e){return q(e.target.value)},children:[Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"})]}),Object(g.jsx)("button",{type:"submit",className:"submitButton",children:"Add Pin"})]})})})]}),a?Object(g.jsx)("button",{className:"button logout",onClick:function(){s(null),e.removeItem("user")},children:"Log out"}):Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("button",{className:"button login",onClick:function(){return ee(!0)},children:"Log in"}),Object(g.jsx)("button",{className:"button register",onClick:function(){return X(!0)},children:"Register"})]}),V&&Object(g.jsx)(v,{setShowRegister:X}),$&&Object(g.jsx)(w,{setShowLogin:ee,setCurrentUsername:s,myStorage:e})]}))})};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.8357e4c2.chunk.js.map