(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{63:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),o=n(0),i=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("h1",{className:"py-4",children:"Inside about page"})})},l=n(4),u=n.n(l),j=n(10),m=n(11),b=n(5),d=n(31),p=n(32),h=n(16),x=n.n(h).a.create({baseURL:"http://my-json-server.typicode.com/nirajgole/json-server/",headers:{"Content-type":"application/json"}}),O=new(function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"createUser",value:function(e){return x.post("/users",e)}},{key:"getUsers",value:function(){return x.get("/users")}},{key:"updateUser",value:function(e,t){return x.put("/users/".concat(e),t)}},{key:"viewUser",value:function(e){return x.get("/users/".concat(e))}},{key:"deleteUser",value:function(e){return x.delete("/users/".concat(e))}}]),e}()),f=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){r()}),[]);var r=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getUsers();case 2:t=e.sent,c(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.deleteUser(t);case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"py-4",children:"Inside home page"}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{className:"thead-dark",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"#"}),Object(o.jsx)("th",{scope:"col",children:"Name"}),Object(o.jsx)("th",{scope:"col",children:"User Name"}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:"Action"})]})}),Object(o.jsx)("tbody",{children:n.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:t+1}),Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.username}),Object(o.jsx)("td",{children:e.email}),Object(o.jsxs)("td",{children:[Object(o.jsx)(b.b,{className:"btn btn-primary mr-2",to:"users/".concat(e.id),children:"View"}),Object(o.jsx)(b.b,{className:"btn btn-outline-primary mr-2",to:"users/edit/".concat(e.id),children:"Edit"}),Object(o.jsx)(b.b,{className:"btn btn-danger",onClick:function(){return s(e.id)},children:"Delete"})]})]},t)}))})]})]})},v=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("h1",{className:"py-4",children:"Inside contact page"})})},N=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",children:Object(o.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.c,{className:"nav-link",exact:!0,to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.c,{className:"nav-link",exact:!0,to:"/about",children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.c,{className:"nav-link",exact:!0,to:"/contact",children:"Contact"})})]})}),Object(o.jsx)(b.b,{className:"btn btn-outline-light",to:"/users/add",children:"Add User"})]})})},g=n(2),y=(n(63),function(){var e=Object(a.useState)({name:"",username:"",email:"",website:"",phone:""}),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(g.g)().id;Object(a.useEffect)((function(){s()}),[]);var s=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.viewUser(r);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container py-4",children:[Object(o.jsx)(b.b,{className:"btn btn-primary",to:"/",children:"back to Home"}),Object(o.jsxs)("h1",{className:"display-4",children:["User Id: ",r]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("ul",{className:"list-group w-50",children:[Object(o.jsxs)("li",{className:"list-group-item",children:["name: ",n.name]}),Object(o.jsxs)("li",{className:"list-group-item",children:["user name: ",n.username]}),Object(o.jsxs)("li",{className:"list-group-item",children:["email: ",n.email]}),Object(o.jsxs)("li",{className:"list-group-item",children:["phone: ",n.phone]}),Object(o.jsxs)("li",{className:"list-group-item",children:["website: ",n.website]})]})]})}),w=n(13),k=n(14),U=function(){var e=Object(g.f)(),t=Object(a.useState)({name:"",username:"",email:"",website:"",phone:""}),n=Object(m.a)(t,2),c=n[0],r=n[1],s=function(e){r(Object(k.a)(Object(k.a)({},c),{},Object(w.a)({},e.target.name,e.target.value)))},i=function(){var t=Object(j.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,O.createUser(c);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=c.name,b=c.username,d=c.email,p=c.website,h=c.phone;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(o.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(o.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:l,onChange:function(e){return s(e)}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:b,onChange:function(e){return s(e)}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:d,onChange:function(e){return s(e)}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:h,onChange:function(e){return s(e)}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:p,onChange:function(e){return s(e)}})}),Object(o.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})})},E=function(){var e=Object(g.g)().id,t=Object(g.f)(),n=Object(a.useState)({name:"",username:"",email:"",website:"",phone:""}),c=Object(m.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){f()}),[]);var i=function(e){s(Object(k.a)(Object(k.a)({},r),{},Object(w.a)({},e.target.name,e.target.value)))},l=function(){var n=Object(j.a)(u.a.mark((function n(a){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.next=3,O.updateUser(e,r);case 3:t.push("/");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),b=r.name,d=r.username,p=r.email,h=r.website,x=r.phone,f=function(){var t=Object(j.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.viewUser(e);case 2:n=t.sent,s(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(o.jsx)("h2",{className:"text-center mb-4",children:"Edit a user"}),Object(o.jsxs)("form",{onSubmit:function(e){return l(e)},children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:b,onChange:function(e){return i(e)}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:d,onChange:function(e){return i(e)}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:p,onChange:function(e){return i(e)}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:x,onChange:function(e){return i(e)}})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:h,onChange:function(e){return i(e)}})}),Object(o.jsx)("button",{className:"btn btn-primary btn-block",children:"Update User"})]})]})})})};var C=function(){return Object(o.jsx)(b.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(N,{}),Object(o.jsxs)(g.c,{children:[Object(o.jsx)(g.a,{exact:!0,path:"/home",component:f}),Object(o.jsx)(g.a,{exact:!0,path:"/about",component:i}),Object(o.jsx)(g.a,{exact:!0,path:"/contact",component:v}),Object(o.jsx)(g.a,{exact:!0,path:"/users/add",component:U}),Object(o.jsx)(g.a,{exact:!0,path:"/users/edit/:id",component:E}),Object(o.jsx)(g.a,{exact:!0,path:"/users/:id",component:y})]})]})})};n(64);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.c0255e18.chunk.js.map