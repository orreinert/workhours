(this.webpackJsonpworkhours=this.webpackJsonpworkhours||[]).push([[0],{44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),s=n.n(c),i=n(3),o=n.n(i),r=(n(44),n(4)),u=n(21),j=n(5),b=n(74);var O=function(){var e=Object(c.useState)(new Date("2017-05-24T07:00")),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(new Date("2017-05-24T08:00")),o=Object(r.a)(i,2),O=o[0],h=o[1],l=Object(c.useState)(new Date("2017-05-24T15:30")),d=Object(r.a)(l,2),g=d[0],p=d[1];return Object(a.jsxs)(j.a,{utils:u.a,children:[Object(a.jsx)("p",{children:"Arbeitszeit:"}),Object(a.jsx)(b.a,{value:O,onChange:function(e){h(new Date(e))},ampm:!1,orientation:"landscape",autoOk:!0}),Object(a.jsx)("p",{children:"Arbeitsbeginn:"}),Object(a.jsx)(b.a,{value:n,onChange:function(e){var t=new Date(e);s(new Date(e)),function(e){var t=0,n=O.getHours(),a=O.getMinutes();(n<6||6===n&&0===a)&&(t=0),(6===n&&a>=1||n>6)&&(t=30,n>=9&&a>=1&&(t+=15)),e.setHours(e.getHours()+n),e.setMinutes(e.getMinutes()+a+t),p(e)}(t)},ampm:!1,orientation:"landscape",autoOk:!0}),Object(a.jsx)("p",{children:"Arbeitsende:"}),Object(a.jsx)(b.a,{value:g,ampm:!1})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),h()}},[[51,1,2]]]);
//# sourceMappingURL=main.e81ed94f.chunk.js.map