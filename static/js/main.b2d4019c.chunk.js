(this.webpackJsonprsvp=this.webpackJsonprsvp||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(9),r=n.n(c),o=(n(20),n(7)),u=n(2);o.a.use(u.e).init({resources:{en:{translation:{welcome:"Welcome","loginPage.title":"Log In","loginPage.nameInput":"Name","loginPage.zipInput":"Zip Code","loginPage.submitButton":"Log In",userGreeting:"Welcome, {{name}}",coupleGreeting:"Welcome {{name}} and {{soName}}"}},kr:{translation:{welcome:"\ud658\uc601\ud558\ub2e4"}}},fallbackLng:"en",interpolation:{escapeValue:!1}});o.a,n(21);var s=n(30),l=n(13),p=n(8),j=n(6),m=n.n(j),b=n(14),g={method:"POST",url:"".concat("https://wrsvp-api.herokuapp.com/","authorizeUser"),body:{name:"",zip:""}},d=function(){var e=Object(b.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(g.url),e.abrupt("return",fetch(g.url,{method:g.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,zip:n})}).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=n(0),f=function(){var e=Object(s.a)().t,t=Object(a.useState)({name:"",zip:""}),n=Object(p.a)(t,2),i=n[0],c=i.name,r=i.zip,o=n[1],u=Object(a.useState)({}),l=Object(p.a)(u,2),j=l[0],m=l[1];return Object(h.jsxs)("div",{children:[j.displayName&&Object(h.jsx)("h1",{children:j.soName?e("coupleGreeting",{name:j.displayName,soName:j.soName}):e("userGreeting",{name:j.displayName})}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(c,r).then((function(e){console.log("submit",e),m(e)})).catch((function(e){console.error(e)}))},children:[Object(h.jsxs)("div",{children:[e("loginPage.nameInput"),Object(h.jsx)("input",{type:"text",onChange:function(e){return o((function(t){return{zip:t.zip,name:e.target.value}}))}})]}),Object(h.jsxs)("div",{children:[e("loginPage.zipInput"),Object(h.jsx)("input",{type:"text",onChange:function(e){return o((function(t){return{name:t.name,zip:e.target.value}}))}})]}),Object(h.jsx)("input",{type:"submit",title:e("loginPage.subitButton")})]})]})},O=function(e){Object(l.a)(e);var t=Object(s.a)().t;return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:t("loginPage.title")})}),Object(h.jsx)(f,{})]})};var v=function(){return Object(s.a)().t,Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(O,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()}},[[29,1,2]]]);
//# sourceMappingURL=main.b2d4019c.chunk.js.map