"use strict";(self.webpackChunk_latop_ReactCodeCargo=self.webpackChunk_latop_ReactCodeCargo||[]).push([[3024],{78402:function(e,s,t){t.d(s,{r:function(){return a}});var a="";a=localStorage.getItem("token")?localStorage.getItem("token"):""},23024:function(e,s,t){t.r(s);var a=t(29439),r=t(72791),n=t(57689),c=t(11087),o=t(9085),i=(t(5462),t(78402),t(78983)),l=t(24846),d=t(99161),h=t(93647),u=t(80184);s.default=function(){var e=(0,r.useState)(""),s=(0,a.Z)(e,2),t=s[0],p=s[1],x=(0,r.useState)(""),m=(0,a.Z)(x,2),j=m[0],g=m[1],f=(0,r.useState)(null),v=(0,a.Z)(f,2),b=(v[0],v[1]),C=((0,n.s0)(),{});return(0,u.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,u.jsx)(i.KB,{children:(0,u.jsx)(i.rb,{className:"justify-content-center",children:(0,u.jsx)(i.b7,{md:8,children:(0,u.jsxs)(i.dL,{children:[(0,u.jsx)(i.xH,{className:"p-4",children:(0,u.jsx)(i.sl,{children:(0,u.jsxs)(i.lx,{children:[(0,u.jsx)("h1",{children:"Login"}),(0,u.jsx)("p",{className:"text-medium-emphasis"}),(0,u.jsxs)(i.YR,{className:"mb-3",children:[(0,u.jsx)(i.wV,{children:(0,u.jsx)(l.Z,{icon:d.E})}),(0,u.jsx)(i.jO,{placeholder:"Email",autoComplete:"username",value:t,onChange:function(e){p(e.target.value)}})]}),(0,u.jsxs)(i.YR,{className:"mb-4",children:[(0,u.jsx)(i.wV,{children:(0,u.jsx)(l.Z,{icon:h.U})}),(0,u.jsx)(i.jO,{type:"password",placeholder:"Senha",autoComplete:"current-password",value:j,onChange:function(e){g(e.target.value)}})]}),(0,u.jsxs)(i.rb,{children:[(0,u.jsx)(i.b7,{xs:6,children:(0,u.jsx)(i.u5,{color:"primary",className:"px-4",onClick:function(){var e={domain:"application",UserLogin:t,password:"123"};b(C),fetch("https://apicarga.azurewebsites.net/api/Login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){!0===e.authenticated?(localStorage.setItem("token",e.accessToken),o.Am.success("Login realizado com sucesso!"),window.location.href="/#/"):o.Am.error("Erro ao fazer login:")}))},children:"Login"})}),(0,u.jsxs)(i.b7,{xs:6,className:"text-right",children:[(0,u.jsx)(i.u5,{color:"link",className:"px-0"}),(0,u.jsx)(o.Ix,{autoClose:300,style:{top:"10%",left:"50%",transform:"translate(-50%, -50%)"}})]})]})]})})}),(0,u.jsx)(i.xH,{className:"text-white bg-primary py-5",style:{width:"44%"},children:(0,u.jsx)(i.sl,{className:"text-center",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"PepsiCo Login"}),(0,u.jsx)("p",{children:"Entre com sua conta SSO"}),(0,u.jsx)(c.rU,{to:"https://secure.pepsico.com/oauth2/default/v1/authorize?client_id=0oa1sb2bvrhNCWSmS0h8&response_type=code&response_mode=query&scope=openid&redirect_uri=https://pepsicobrasil.sigla.app&state=1",children:(0,u.jsx)(i.u5,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Login com SSO"})})]})})})]})})})})})}},93647:function(e,s,t){t.d(s,{U:function(){return a}});var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=3024.e9ae96d5.chunk.js.map