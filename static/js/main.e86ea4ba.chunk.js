(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{114:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(32),i=n.n(a),s=n(34),o=n(38),j=n(15),l=n(52),u=n.n(l),b=n(75),d=n(198),h=n(199),O=n(106),x=n(201),p=n(202),f=(n(113),n(114),n(53));n(115),n(194);f.a.initializeApp({apiKey:"AIzaSyBipiTv1lThCOYOoscLLMDRR6Cnz8RqmzA",authDomain:"nwiter-cd17d.firebaseapp.com",projectId:"nwiter-cd17d",storageBucket:"nwiter-cd17d.appspot.com",messagingSenderId:"257800727565",appId:"1:257800727565:web:9b231f4d84debda88eb944"});var g=f.a.storage(),m=f.a,w=f.a.auth(),v=n(4),C=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],j=i[1],l=Object(c.useState)(!1),f=Object(s.a)(l,2),g=f[0],C=f[1],I=Object(c.useState)(""),P=Object(s.a)(I,2),k=P[0],S=P[1],y=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?r(c):"password"===n&&j(c)},A=function(){var e=Object(b.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!g){e.next=7;break}return e.next=4,w.signInWithEmailAndPassword(n,o);case 4:c=e.sent,e.next=10;break;case 7:return e.next=9,w.createUserWithEmailAndPassword(n,o);case 9:c=e.sent;case 10:console.log(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),S(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t?n=new m.auth.GoogleAuthProvider:"github"===t&&(n=new m.auth.GithubAuthProvider),e.next=3,w.signInWithPopup(n);case 3:c=e.sent,console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"login-form",children:[Object(v.jsxs)(d.a,{onFinish:A,children:[Object(v.jsx)(d.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(v.jsx)(h.a,{name:"email",prefix:Object(v.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Email",value:n,onChange:y})}),Object(v.jsx)(d.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(v.jsx)(h.a,{name:"password",prefix:Object(v.jsx)(p.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",value:o,onChange:y})}),Object(v.jsx)(d.a.Item,{children:Object(v.jsx)(O.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:!1===g?"Create new account":"Log In"})})]}),Object(v.jsx)("span",{className:"text-error",children:k}),Object(v.jsx)("span",{children:"Or login with"}),Object(v.jsxs)("div",{className:"login-social",children:[Object(v.jsx)(O.a,{name:"google",onClick:function(){return F("google")},children:"Continue with Google"}),Object(v.jsx)(O.a,{name:"github",onClick:function(){return F("github")},children:"Continue with Github"}),Object(v.jsx)("span",{onClick:function(){return C((function(e){return!e}))},children:g?"Sign In":"Create new account"})]})]})},I=function(){j.a;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("button",{onClick:function(){w.signOut()},children:"Log Out"})})},P=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("span",{children:"Home"})})},k=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/profile",children:"Profile"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/editprofile",children:"Edit Profile"})}),Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/uploadfile",children:"Upload File"})})]})})})};var S=function(){return Object(v.jsx)("span",{children:"EditProfile"})},y=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],j=i[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&r(e.target.files[0])}}),Object(v.jsx)("button",{onClick:function(){g.ref("WP/".concat(n.name)).put(n).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){g.ref("WP").child(n.name).getDownloadURL().then((function(e){j(e)}))})),console.log("file",n)},children:"Upload"}),Object(v.jsx)("a",{href:o,children:o})]})})},A=function(e){var t=e.isLoggedIn;return console.log(t),Object(v.jsxs)(o.a,{children:[t&&Object(v.jsx)(k,{}),Object(v.jsx)(j.d,{children:!0===t?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(j.b,{exact:!0,path:"/",children:Object(v.jsx)(P,{})}),Object(v.jsx)(j.b,{exact:!0,path:"/profile",children:Object(v.jsx)(I,{})}),Object(v.jsx)(j.b,{exact:!0,path:"/editprofile",children:Object(v.jsx)(S,{})}),Object(v.jsx)(j.b,{exact:!0,path:"/uploadfile",children:Object(v.jsx)(y,{})})]}):Object(v.jsx)(j.b,{exact:!0,path:"/",children:Object(v.jsx)(C,{})})})]})};var F=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(s.a)(a,2),o=i[0],j=i[1];return Object(c.useEffect)((function(){w.onAuthStateChanged((function(e){j(!!e),r(!0)}))}),[]),Object(v.jsxs)(v.Fragment,{children:[n?Object(v.jsx)(A,{isLoggedIn:o}):"Initializing....",Object(v.jsxs)("footer",{className:"text-center",children:["\xa9 ",(new Date).getFullYear()," Nwitter"]})]})};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.e86ea4ba.chunk.js.map