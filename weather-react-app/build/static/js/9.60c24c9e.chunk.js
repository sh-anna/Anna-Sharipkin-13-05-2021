(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[9],{165:function(e,t,a){"use strict";a.r(t);var r=a(97),n=a.n(r),c=a(98),s=a(49),o=a(1),l=a.n(o),u=a(103),i=a(125),f=a(130),d=a(50),b=a(101),h=a(8),j=a(99),O=a(164);t.default=function(){var e=Object(o.useContext)(u.a),t=Object(o.useState)({}),a=Object(s.a)(t,2),r=a[0],m=a[1],w=Object(o.useState)({}),g=Object(s.a)(w,2),v=g[0],p=g[1],E=Object(o.useState)([]),y=Object(s.a)(E,2),F=y[0],x=y[1],S=Object(o.useState)(!1),N=Object(s.a)(S,2),k=N[0],C=N[1],I=Object(o.useState)(!1),J=Object(s.a)(I,2),L=J[0],M=J[1],P=function(){if(Object(j.a)(e.address)){var t=e.address.cityName;return Object(j.a)(t)&&!t.includes("undefined")&&!t.includes("null")}return!1},T=function(e,t,a){Object(j.a)(e)&&Object(j.a)(t)&&(p(e),m(t),x(a))},q=function(){var t=Object(c.a)(n.a.mark((function t(){var a,r,c,s,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,C(!0),t.next=4,Object(i.a)(e);case 4:a=t.sent,r=a.weatherCurrent,c=a.weatherForecast,s=a.alerts,o=a.error,Object(O.a)(o)?(T(r,c,s),M(!1)):M(!0),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),M(!0),h.a(t.t0);case 16:return t.prev=16,C(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,12,16,19]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){C(e.showLoader)}),[e.showLoader]),Object(o.useEffect)((function(){Object(j.a)(e.latlong)?q():M(!0);var t=setInterval((function(){q()}),36e5);return function(){clearInterval(t)}}),[e.latlong]),l.a.createElement(o.Fragment,null,k?l.a.createElement(d.a,{loaderText:P()?"Fetching weather forecast for ".concat(e.address.cityName," \ud83d\ude0e"):"Fetching address information using your geolocation coordinates"}):l.a.createElement(o.Fragment,null,L?l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"sm:w-full lg:w-2/3 xl:w-1/2"},l.a.createElement(b.a,{errorMessage:P()?"Something went wrong. Failed to fetch weather forecast for ".concat(e.address.cityName,"! \ud83d\ude22"):"Failed to fetch address information for your geolocation. Please search for any city to get weather forecast!!"}))):l.a.createElement(o.Fragment,null,Object(j.a)(v)?l.a.createElement(f.a,{weatherCurrent:v,weatherForecast:r,alerts:F,address:e.address,latlong:e.latlong}):null)))}}}]);
//# sourceMappingURL=9.60c24c9e.chunk.js.map