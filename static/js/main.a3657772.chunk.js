(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{242:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(33),s=n.n(r),i=n(35),o=n(54),l=n(8),u=n(27);var j=function(){return Object(l.jsx)("span",{children:"EditProfile"})},d=n(84);n(167),n(244),n(169);d.a.initializeApp({apiKey:"AIzaSyBipiTv1lThCOYOoscLLMDRR6Cnz8RqmzA",authDomain:"nwiter-cd17d.firebaseapp.com",databaseURL:"https://nwiter-cd17d-default-rtdb.firebaseio.com",projectId:"nwiter-cd17d",storageBucket:"nwiter-cd17d.appspot.com",messagingSenderId:"257800727565",appId:"1:257800727565:web:9b231f4d84debda88eb944"});var b=d.a.database(),h=d.a.storage(),O=d.a,p=d.a.auth(),f=function(){var e=Object(u.f)(),t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:function(){e.push("/")},children:"Home"}),Object(l.jsx)("button",{onClick:function(){p.signOut().then((function(){e.push("/")})).catch((function(e){r(e)}))},children:"Log Out"}),c]})},m=n(126),x=n(251),g=n(152),v=n(247),w=n(250),I=n(43),y=n(246),S=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],j={beforeUpload:function(e){return"application/haansofthwp"!==e.type&&g.b.error("".concat(e.name," is not a hwp file")),"application/haansofthwp"===e.type||v.a.LIST_IGNORE},onChange:function(e){c(e.fileList[0].originFileObj)}},d=function(e,t,n,a,c,r,s,i){O.database().ref("wpdb/"+e+"/"+t).set({FileDest:n,FileDestName:a,FileSrc:c,FileSrcName:r,HtmlResult:s,IsComplete:i})},f=Object(a.useState)(),S=Object(i.a)(f,2),k=S[0],C=S[1],N=Object(a.useState)(""),F=Object(i.a)(N,2),L=F[0],P=F[1];Object(a.useEffect)((function(){b.ref("wpdb/").on("value",(function(e){var t=e.val();C(Object.values(t[p.currentUser.uid]))}))}),[]),Object(a.useEffect)((function(){b.ref("wpdb/").on("value",(function(e){var t=e.val();C(Object.values(t[p.currentUser.uid]))}))}),[]);var U=[{title:"FileSrcName",dataIndex:"FileDestName",key:"FileSrcName",render:function(e,t){return Object(l.jsx)("span",{children:t.FileSrcName})}},{title:"FileDestName",dataIndex:"FileDestName",key:"FileDestName",render:function(e,t){return Object(l.jsx)("span",{children:t.FileDestName})}},{title:"IsComplete",dataIndex:"IsComplete",key:"IsComplete",render:function(e,t){return Object(l.jsx)("span",{children:t.IsComplete?"Completed":"Running"})}},{title:"Action",key:"action",render:function(e,t){return Object(l.jsx)(w.b,{size:"middle",children:Object(l.jsx)("a",{onClick:function(){return function(e){P(e.HtmlResult)}(t)},children:"Show HTML Result"})})}}];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"upload-page",children:[Object(l.jsxs)("div",{className:"upload-area",children:[Object(l.jsx)(v.a,Object(m.a)(Object(m.a)({},j),{},{maxCount:1,children:Object(l.jsx)(I.a,{icon:Object(l.jsx)(x.a,{}),children:"Upload hwp only"})})),Object(l.jsx)(I.a,{onClick:function(){var e=h.ref("WP/"+n.name).put(n);u("Uploading...."),e.on("state_changed",(function(e){}),(function(e){console.log(e),u(e.message)}),(function(){h.ref("WP").child(n.name).getDownloadURL().then((function(e){u("Upload successfull!!!");var t=b.ref().push().key;d(p.currentUser.uid,t,"dest","dest name",e,n.name,"<b>aaa</b>",!0)}))}))},children:"Upload"}),Object(l.jsx)("span",{children:o})]}),Object(l.jsx)(y.a,{columns:U,dataSource:k}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:L}})]})})},k=n(94),C=n.n(k),N=n(125),F=n(252),L=n(253),P=n(254),U=n(255),D=n(248),R=n(249),A=(n(140),n(242),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],j=Object(a.useState)(!0),d=Object(i.a)(j,2),b=d[0],h=d[1],f=Object(a.useState)(""),m=Object(i.a)(f,2),x=m[0],g=m[1],v=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},w=function(){var e=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!b){e.next=7;break}return e.next=4,p.signInWithEmailAndPassword(n,o);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,p.createUserWithEmailAndPassword(n,o);case 9:a=e.sent;case 10:console.log(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),g(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(N.a)(C.a.mark((function e(t){var n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t?n=new O.auth.GoogleAuthProvider:"github"===t&&(n=new O.auth.GithubAuthProvider),e.next=3,p.signInWithPopup(n);case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"login-form",children:[Object(l.jsxs)(D.a,{onFinish:w,children:[Object(l.jsx)(D.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(l.jsx)(R.a,{name:"email",prefix:Object(l.jsx)(F.a,{className:"site-form-item-icon"}),placeholder:"Email",value:n,onChange:v})}),Object(l.jsx)(D.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(l.jsx)(R.a,{name:"password",prefix:Object(l.jsx)(L.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",value:o,onChange:v})}),Object(l.jsxs)(D.a.Item,{children:[Object(l.jsx)(I.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:!1===b?"Create new account":"Log In"}),Object(l.jsx)("a",{onClick:function(){return h((function(e){return!e}))},className:"sign-up-link",children:b?"Sign up here":"Sign in here"})]})]}),Object(l.jsx)("span",{className:"text-error",children:x}),Object(l.jsx)("span",{children:"Or sign in with"}),Object(l.jsxs)("div",{className:"login-social",children:[Object(l.jsx)(I.a,{icon:Object(l.jsx)(P.a,{}),name:"google",onClick:function(){return y("google")},type:"primary",danger:!0,children:"Google"}),Object(l.jsx)(I.a,{icon:Object(l.jsx)(U.a,{}),name:"github",onClick:function(){return y("github")},children:"Github"})]})]})}),E=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("span",{children:"Home"})})},H=n(73),z=function(){var e=Object(u.f)(),t=function(){p.signOut().then((function(){e.push("/")})).catch((function(e){console.log(e)}))};return Object(l.jsxs)(H.a,{onClick:function(n){"/logout"===n.key?t():e.push(n.key)},style:{width:256},defaultSelectedKeys:["/"],mode:"inline",children:[Object(l.jsx)(H.a.Item,{children:"Home"},"/"),Object(l.jsx)(H.a.Item,{children:"Profile"},"/profile"),Object(l.jsx)(H.a.Item,{children:"Upload File"},"/uploadfile"),Object(l.jsx)(H.a.Item,{children:Object(l.jsx)(I.a,{type:"primary",block:!0,children:"Logout"})},"/logout")]})},T=function(e){var t=e.isLoggedIn;return console.log(t?"login success":"login false"),Object(l.jsx)(o.a,{children:Object(l.jsx)(u.c,{children:!0===t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(z,{}),Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(E,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/profile",children:Object(l.jsx)(f,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/editprofile",children:Object(l.jsx)(j,{})}),Object(l.jsx)(u.a,{exact:!0,path:"/uploadfile",children:Object(l.jsx)(S,{isLoggedIn:t})})]}):Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(A,{})})})})};var G=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){p.onAuthStateChanged((function(e){u(!!e),c(!0)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[n?Object(l.jsx)(T,{isLoggedIn:o}):"Initializing....",Object(l.jsxs)("footer",{className:"text-center",children:["\xa9 ",(new Date).getFullYear()," Nwitter"]})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.a3657772.chunk.js.map