(this.webpackJsonpseth_ullman_test=this.webpackJsonpseth_ullman_test||[]).push([[0],{15:function(e,t,a){e.exports=a(43)},20:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),o=a.n(l),r=(a(4),a(20),a(1)),i=a(13),u=a.n(i),s=a(14),m=function(e){return c.a.createElement("div",{className:"user-location"},c.a.createElement(s.a,{size:"40"}),c.a.createElement("div",null,"Lat: ".concat(Math.ceil(100*e.lat)/100,", Lng: ").concat(Math.ceil(100*e.lng)/100)))},d=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(0),i=Object(r.a)(o,2),s=i[0],d=i[1],f=Object(n.useState)(5),b=Object(r.a)(f,2),E=b[0],g=b[1],j=Object(n.useState)(0),O=Object(r.a)(j,2),p=O[0],v=O[1],h=Object(n.useState)(0),S=Object(r.a)(h,2),N=S[0],M=S[1];Object(n.useEffect)((function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){v(e.coords.latitude),M(e.coords.longitude)}))}),[]);return c.a.createElement("div",{className:"map-div"},c.a.createElement("button",{onClick:function(){l(p),d(N),g(11)},className:"find-me"},"Find Me"),c.a.createElement(u.a,{className:"map",defaultCenter:{lat:59.955413,lng:30.337844},defaultZoom:5,zoom:E,center:{lat:a,lng:s},controlSize:20},c.a.createElement(m,{lat:p,lng:N})))};a(42);var f=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(d,null))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.32030632.chunk.js.map