(this.webpackJsonpallprojects=this.webpackJsonpallprojects||[]).push([[0],{118:function(e,t,a){e.exports=a.p+"static/media/earth.cdc4522b.svg"},119:function(e,t,a){e.exports=a.p+"static/media/slovakiaIcon.a29682dd.svg"},133:function(e,t,a){e.exports=a(320)},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},145:function(e,t,a){},162:function(e,t,a){},254:function(e,t,a){},256:function(e,t,a){},259:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(48),r=a.n(l),s=(a(138),a(139),a(16)),o=(a(140),a(118)),i=a.n(o),m=a(119),d=a.n(m);var u=function(){var e={color:"white"};return c.a.createElement("nav",{className:"navApp"},c.a.createElement("div",{className:"doubleClick",onClick:function(){window.location.href="#/Todo"}}),c.a.createElement("ul",{className:"navLinks"},c.a.createElement("li",null,c.a.createElement(s.b,{style:e,to:"/Covid/CovidApp"},c.a.createElement("div",null,c.a.createElement("img",{alt:"",src:i.a,className:"earthIcon"}),"Covid vo svete"))),c.a.createElement("li",null,c.a.createElement(s.b,{style:e,to:"/Covid/CovidSK"},c.a.createElement("div",null,c.a.createElement("img",{alt:"",src:d.a,className:"svkIcon"}),"Covid na Slovensku")))))},E=a(24),v=a(49),p=a(5),f=(a(90),a(145),a(50)),h=a.n(f),b=a(10),y=a(39),g=a.n(y);var N=function(e){return e?e.prop.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):null},k=a(51);var C=function(e){var t=Object(n.useState)(),a=Object(p.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(),o=Object(p.a)(s,2),i=o[0],m=o[1],d=Object(n.useState)(!0),u=Object(p.a)(d,2),E=u[0],v=u[1],f=Object(n.useState)({transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}),h=Object(p.a)(f,2),b=h[0],y=h[1],C=Object(n.useState)({position:"absolute",left:"-1000px",transition:"all .2s ease-in",fontSize:"15px"}),O=Object(p.a)(C,2),j=O[0],S=O[1];return Object(n.useEffect)((function(){if(g.a.get("https://disease.sh/v2/continents").then((function(e){r([e.data])})),l){var t=l[0].filter((function(t){return t.continent===e.kontinent}));m(t[0])}}),[e.kontinent]),e.mainData?"Svet"===e.kontinent?c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{key:-1,style:{background:"rgb(234, 234, 234)"}},c.a.createElement("td",{style:{width:"100px"},onClick:function(){v(!E),E?(y({transform:"rotate(180deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}),S({background:"rgb(234, 234, 234)",fontSize:"15px",transition:"all .2s ease-in"})):(S({position:"absolute",left:"-1000px",transition:"all .2s ease-in",fontSize:"15px"}),y({transform:"rotate(0deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}))}},"Cel\xfd Svet ",c.a.createElement(k.b,{style:b}),c.a.createElement("div",{className:"firstCase"},"Po\u010det testov: ",c.a.createElement("div",{className:"firstCaseNumber"},c.a.createElement(N,{prop:e.mainData[0].tests})))),c.a.createElement("td",null,c.a.createElement(N,{prop:e.mainData[0].cases})),c.a.createElement("td",null,c.a.createElement(N,{prop:e.mainData[0].active})),c.a.createElement("td",{style:{background:" rgb(254, 255, 194, .4)"}},"+",c.a.createElement(N,{prop:e.mainData[0].todayCases})),c.a.createElement("td",null,c.a.createElement(N,{prop:e.mainData[0].deaths})),c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",c.a.createElement(N,{prop:e.mainData[0].todayDeaths})),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},c.a.createElement(N,{prop:e.mainData[0].recovered}))),l?l[0].map((function(e,t){return c.a.createElement("tr",{key:t,style:{background:"rgb(234, 234, 234)"}&&j},c.a.createElement("td",{style:{width:"100px"}},e.continent,c.a.createElement("div",{className:"firstCase"},"Po\u010det testov: ",c.a.createElement("div",{className:"firstCaseNumber"},c.a.createElement(N,{prop:e.tests})))),c.a.createElement("td",null,c.a.createElement(N,{prop:e.cases})),c.a.createElement("td",null,c.a.createElement(N,{prop:e.active})),c.a.createElement("td",{style:{background:" rgb(254, 255, 194, .4)"}},"+",c.a.createElement(N,{prop:e.todayCases})),c.a.createElement("td",null,c.a.createElement(N,{prop:e.deaths})),c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",c.a.createElement(N,{prop:e.todayDeaths})),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},c.a.createElement(N,{prop:e.recovered})))})):null):c.a.createElement(c.a.Fragment,null,i?c.a.createElement("tr",{key:-10,style:{background:"rgb(234, 234, 234)"}},c.a.createElement("td",{style:{width:"100px"}},i.continent,c.a.createElement("div",{className:"firstCase"},"Po\u010det testov: ",c.a.createElement("div",{className:"firstCaseNumber"},c.a.createElement(N,{prop:i.tests})))),c.a.createElement("td",null,c.a.createElement(N,{prop:i.cases})),c.a.createElement("td",null,c.a.createElement(N,{prop:i.active})),c.a.createElement("td",{style:{background:" rgb(254, 255, 194, .4)"}},"+",c.a.createElement(N,{prop:i.todayCases})),c.a.createElement("td",null,c.a.createElement(N,{prop:i.deaths})),c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",c.a.createElement(N,{prop:i.todayDeaths})),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},c.a.createElement(N,{prop:i.recovered}))):null):null};a(162);var O=function(e){var t=Object(n.useState)("cases"),a=Object(p.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)("Svet"),i=Object(p.a)(o,2),m=i[0],d=i[1];function u(e){r(e===l?e+"2":e)}var E={transform:"rotateX(180deg)"};function v(e){return e?null:{background:"rgb(190, 245, 204)"}}var f=function(e){d(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",null,c.a.createElement("label",null,"a"),c.a.createElement("input",{type:"text",id:"myInput",onKeyUp:function(){var e,t,a,n;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("myTable").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[0])&&((a.textContent||a.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},placeholder:"H\u013eada\u0165..",className:"inputSearch"})),c.a.createElement("div",{className:"kontinenty"},c.a.createElement("button",{onClick:function(){return f("Svet")}},"Svet"),c.a.createElement("button",{onClick:function(){return f("Europe")}},"Eur\xf3pa"),c.a.createElement("button",{onClick:function(){return f("North America")}},"Severn\xe1 Amerika"),c.a.createElement("button",{onClick:function(){return f("Asia")}},"\xc1zia"),c.a.createElement("button",{onClick:function(){return f("South America")}},"Ju\u017en\xe1 Amerika"),c.a.createElement("button",{onClick:function(){return f("Africa")}},"Afrika"),c.a.createElement("button",{onClick:function(){return f("Australia/Oceania")}},"Austr\xe1lia/Oce\xe1nia")),c.a.createElement("div",{className:"divTable"},c.a.createElement("table",{id:"myTable"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{onClick:function(){return e.sortBy("tests")&&u("tests")}},"Krajina","tests"===l?c.a.createElement(b.b,{className:"sortIcon"}):null,"tests2"===l?c.a.createElement(b.b,{style:E,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("cases")&&u("cases")}},"Po\u010det nakazen\xfdch","cases"===l?c.a.createElement(b.b,{className:"sortIcon"}):null,"cases2"===l?c.a.createElement(b.b,{style:E,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("active")&&u("active")}},"Akt\xedvne pr\xedpady","active"===l?c.a.createElement(b.b,{className:"sortIcon"}):null,"active2"===l?c.a.createElement(b.b,{style:E,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("todayCases")&&u("todayCases")}},"Nov\xe9 pr\xedpady","todayCases"===l?c.a.createElement(b.b,{className:"sortIcon"}):null,"todayCases2"===l?c.a.createElement(b.b,{style:E,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("deaths")&&u("deaths")}},"Po\u010det \xfamrt\xed","deaths"===l?c.a.createElement(b.b,{className:"sortIcon"}):null,"deaths2"===l?c.a.createElement(b.b,{style:E,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("todayDeaths")&&u("todayDeaths")}},"Nov\xe9 \xfamrtia","todayDeaths"===l?c.a.createElement(b.b,{className:"sortIcon"}):null,"todayDeaths2"===l?c.a.createElement(b.b,{style:E,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("recovered")&&u("recovered")}},"Po\u010det vylie\u010den\xfdch","recovered"===l?c.a.createElement(b.b,{className:"sortIcon"}):null,"recovered2"===l?c.a.createElement(b.b,{style:E,className:"sortIcon"}):null))),c.a.createElement("tbody",null,c.a.createElement(C,{kontinent:m,mainData:e.mainData}),"Svet"===m?c.a.createElement(c.a.Fragment,null,e.countriesData.map((function(e,t){return c.a.createElement("tr",{key:t,style:v(e.active)},c.a.createElement("td",{style:{width:"100px"}},"Slovakia"===e.country?c.a.createElement("div",{style:{fontWeight:"bold",textDecoration:"underline"}},c.a.createElement(s.b,{to:"/Covid/CovidSK"},e.country)):e.country,e.tests>0?c.a.createElement("div",{className:"firstCase"},"Po\u010det testov:",c.a.createElement("div",{className:"firstCaseNumber"},c.a.createElement(N,{prop:e.tests}))):null),c.a.createElement("td",null,c.a.createElement(N,{prop:e.cases})),c.a.createElement("td",null,e.active?c.a.createElement(N,{prop:e.active}):"0"),e.todayCases>0?c.a.createElement("td",{style:{background:" rgb(254, 255, 194)"}},"+",c.a.createElement(N,{prop:e.todayCases})," "):c.a.createElement("td",null),c.a.createElement("td",null,c.a.createElement(N,{prop:e.deaths})),e.todayDeaths>0?c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",c.a.createElement(N,{prop:e.todayDeaths})," "):c.a.createElement("td",null),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},c.a.createElement(N,{prop:e.recovered})))}))):e.countriesData.map((function(e,t){return e.continent===m?c.a.createElement("tr",{key:t,style:v(e.active)},c.a.createElement("td",{style:{width:"100px"}},"Slovakia"===e.country?c.a.createElement("div",{style:{fontWeight:"bold",textDecoration:"underline"}},c.a.createElement(s.b,{to:"/Covid/CovidSK"},e.country)):e.country,e.tests>0?c.a.createElement("div",{className:"firstCase"},"Po\u010det testov:",c.a.createElement("div",{className:"firstCaseNumber"},c.a.createElement(N,{prop:e.tests}))):null),c.a.createElement("td",null,c.a.createElement(N,{prop:e.cases})),c.a.createElement("td",null,e.active?c.a.createElement(N,{prop:e.active}):"0"),e.todayCases>0?c.a.createElement("td",{style:{background:" rgb(254, 255, 194)"}},"+",c.a.createElement(N,{prop:e.todayCases})," "):c.a.createElement("td",null),c.a.createElement("td",null,c.a.createElement(N,{prop:e.deaths})),e.todayDeaths>0?c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",c.a.createElement(N,{prop:e.todayDeaths})," "):c.a.createElement("td",null),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},c.a.createElement(N,{prop:e.recovered}))):null}))))))},j=a(122),S=a(123),D=a(120);a(254);var x=function(e){var t={labels:["Nakazen\xed","Vylie\u010den\xed","\xdamrtia"],datasets:[{label:"# of Votes",data:e.dataForGraph,backgroundColor:["#f85959","#17b978","#430d27"]}]};return c.a.createElement("div",null,c.a.createElement("div",{className:"dougnut"},c.a.createElement(D.a,{data:t,height:300,options:{maintainAspectRatio:!1,animation:{duration:2e3,easing:"easeOutQuint"}}})))};var I=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(),o=Object(p.a)(r,2),i=o[0],m=o[1],d=Object(n.useState)([]),u=Object(p.a)(d,2),E=u[0],f=u[1],y=Object(n.useState)({countriesData:E,direction:{price_usd:"asc"}}),k=Object(p.a)(y,2),C=k[0],D=k[1];function I(e,t){if(e){var a=t/(e/100);return a=(a=(a=(a=t/(e/100)).toFixed(3)).toString()).replace(".",","),c.a.createElement("div",{className:"aktiveNakazenych"},c.a.createElement("span",null,"V percent\xe1ch:")," ",a,"%")}}return Object(n.useEffect)((function(){g.a.get("https://disease.sh/v2/all").then((function(e){m([e.data.cases,e.data.recovered,e.data.deaths]),l([e.data])})),g.a.get("https://disease.sh/v2/countries").then((function(e){f(e.data),D({data:e.data.sort((function(e,t){return"asc"===C.direction.cases?parseFloat(e.cases)-parseFloat(t.cases):parseFloat(t.cases)-parseFloat(e.cases)})),direction:{cases:"asc"===C.direction.cases?"desc":"asc"}})}))}),[]),c.a.createElement("div",{className:"covidApp"},a?c.a.createElement("div",{className:"cardsDiv"},c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle"},c.a.createElement("img",{alt:"",src:h.a}))),c.a.createElement("div",{className:"textCard"},"Po\u010det nakazen\xfdch")),c.a.createElement("div",{className:"mainText"},c.a.createElement(N,{prop:a[0].cases}),c.a.createElement("div",{className:"aktiveNakazenych"},c.a.createElement("span",null,"Po\u010det akt\xedvnych pr\xedpadov:")," ",c.a.createElement(N,{prop:a[0].active})))),c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle HP"},c.a.createElement(b.a,{color:"green"}))),c.a.createElement("div",{className:"textCard"}," Po\u010det vylie\u010den\xfdch")),c.a.createElement("div",{className:"mainText"},c.a.createElement(N,{prop:a[0].recovered}),I(a[0].cases,a[0].recovered))),c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle skull"},c.a.createElement(j.a,{color:"white"}))),c.a.createElement("div",{className:"textCard"}," Po\u010det \xfamrt\xed")),c.a.createElement("div",{className:"mainText"},c.a.createElement(N,{prop:a[0].deaths}),I(a[0].cases,a[0].deaths)))):"",c.a.createElement(x,{dataForGraph:i}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"SlovenskeUdajeLink"},c.a.createElement(s.b,{to:"/Covid/CovidSK"},"Slovensk\xe9 \xfadaje ",c.a.createElement(S.a,{className:"iconSlovUdaje"}))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(O,{countriesData:E,mainData:a,sortBy:function(e){D({countriesData:E.sort((function(t,a){return"asc"===C.direction[e]?parseFloat(t[e])-parseFloat(a[e]):parseFloat(a[e])-parseFloat(t[e])})),direction:Object(v.a)({},e,"asc"===C.direction[e]?"desc":"asc")})}}))},P=a(83),F=a(84),G=a.n(F),T=a(124),B=a(85),z=a(60),A=a.n(z);a(256);var _=function(e,t,a){if("amountRecovered"===a){e.sort((function(e,a){var n=a.amount.recovered,c=e.amount.recovered;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))}else if("amountDelta"===JSON.parse(localStorage.getItem("zoradenieLocalStorage"))){e.sort((function(e,a){var n=e.amount.infected_delta,c=a.amount.infected_delta;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))}else if("amountInfected"===JSON.parse(localStorage.getItem("zoradenieLocalStorage"))){e.sort((function(e,a){var n=e.amount.infected,c=a.amount.infected;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))}else{e.sort((function(e,a){var n=e.amount.infected,c=a.amount.infected;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))}};var w=function(e){var t=e.tabulkaData,a=Object(n.useState)(!1),l=Object(p.a)(a,2),r=l[0],s=l[1],o=Object(n.useState)({display:"none"}),i=Object(p.a)(o,2),m=i[0],d=i[1],u=Object(n.useState)({boolean:!0,text:"Zobrazi\u0165 \xfadaje o jedntliv\xfdch obciach"}),E=Object(p.a)(u,2),v=E[0],f=E[1],h=Object(n.useState)({transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}),b=Object(p.a)(h,2),y=b[0],g=b[1];function N(e){localStorage.setItem("zoradenieLocalStorage",JSON.stringify(e)),s(!r),_(t,r,e)}return Object(n.useEffect)((function(){s((function(e){return!e})),_(t,r,"stlpec")}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"textPreZObrazenieTabulky",onClick:function(){v.boolean?(f({boolean:!v.boolean,text:"Schova\u0165 \xfadaje o jedntliv\xfdch obciach"}),d({display:"flex"}),g({transform:"rotateX(180deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"})):(f({boolean:!v.boolean,text:"Zobrazi\u0165 \xfadaje o jedntliv\xfdch obciach"}),d({display:"none"}),g({transform:"rotateX(0deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}))}},v.text," ",c.a.createElement(k.a,{style:y})),c.a.createElement("div",{style:m,className:"tabulkaOkrajDivMain"},c.a.createElement("br",null),c.a.createElement("input",{type:"text",id:"myInput",onKeyUp:function(){var e,t,a,n;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("myTable").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[0])&&((a.textContent||a.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},placeholder:"H\u013eada\u0165..",className:"inputSearch"}),c.a.createElement("div",{className:"tabulkaMesta"},c.a.createElement("table",{id:"myTable"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Obec"),c.a.createElement("th",{onClick:function(){return N("amountInfected")}},"Po\u010det nakazen\xfdch"),c.a.createElement("th",{onClick:function(){return N("amountDelta")}},"Za posledn\xfd de\u0148"))),c.a.createElement("tbody",null,t.map((function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{key:t},"Bratislava II"===e.title||"Bratislava III"===e.title||"Bratislava IV"===e.title||"Bratislava V"===e.title||"Ko\u0161ice II"===e.title||"Ko\u0161ice III"===e.title||"Ko\u0161ice IV"===e.title?null:c.a.createElement(c.a.Fragment,null,c.a.createElement("td",null,"Bratislava I"===e.title?"Bratislava":"Ko\u0161ice I"===e.title?"Ko\u0161ice":e.title),c.a.createElement("td",null,e.amount.infected),c.a.createElement("td",{style:{color:"red"}},e.amount.infected_delta>0?"+"+e.amount.infected_delta:null))))})))))))};function K(){var e=Object(P.a)(["\n    height: 100%;\n    animation: "," .7s;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    "]);return K=function(){return e},e}function L(){var e=Object(P.a)(["\n    0%{\n        height: 0%;\n      }\n      100%{\n        height: 100%;\n      }\n    "]);return L=function(){return e},e}var W=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(),s=Object(p.a)(r,2),o=s[0],i=s[1],m=Object(n.useState)(!1),d=Object(p.a)(m,2),u=d[0],E=d[1],f=Object(n.useState)({stav:!0,styling:{textDecoration:"none"}}),b=Object(p.a)(f,2),y=b[0],g=b[1],k=Object(n.useState)(),C=Object(p.a)(k,2),O=C[0],j=C[1],S=Object(n.useState)({dataSvk:a,direction:{price_usd:"asc"}}),D=Object(p.a)(S,2),x=D[0],I=D[1];Object(n.useEffect)((function(){(function(){var e=Object(T.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mapa.covid.chat/map_data");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(Object.keys(a.chart).length-25),l([a]),I({dataSvk:a.map.sort((function(e,t){return"asc"===x.direction.cases?parseFloat(e.cases)-parseFloat(t.cases):parseFloat(t.cases)-parseFloat(e.cases)})),direction:{cases:"asc"===x.direction.cases?"desc":"asc"}});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=[83,102,50,42,120,129,118,197,228],F=Object(B.b)(L()),z=B.a.div(K(),F);function _(){u?(i(Object.keys(a[0].chart).length-25),j({transform:"rotateY(0deg)"})):(i(-1),j({transform:"rotateY(180deg)"})),E(!u)}function W(){y.stav?g({stav:!1,styling:{textDecoration:"line-through"}}):g({stav:!0,styling:{textDecoration:"none"}})}return c.a.createElement("div",{className:"covidApp"},a?c.a.createElement(c.a.Fragment,null,function(){var e=a[0].chart[Object.keys(a[0].tested_chart).length].recovered,t=a[0].chart[Object.keys(a[0].tested_chart).length-1].recovered,n=e-t,l=0;n>0&&(l=e-t);var r=0;return(n=(e=a[0].chart[Object.keys(a[0].tested_chart).length].deaths)-(t=a[0].chart[Object.keys(a[0].tested_chart).length-1].deaths))>0&&(r=e-t),c.a.createElement("div",null,c.a.createElement("div",{className:"cardsDiv"},c.a.createElement("div",{className:"cards cardsSVK"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle"},c.a.createElement("img",{alt:"",src:h.a}))),c.a.createElement("div",{className:"textCard"},c.a.createElement("b",null,"Slovensk\xe9 \xfadaje"))),c.a.createElement("div",{className:"mainTextSK"},"Po\u010det testovan\xfdch: ",c.a.createElement(N,{prop:a[0].tested}),c.a.createElement("br",null),"Z toho pozit\xedvnych testov: ",a[0].infected,c.a.createElement("br",null),"Po\u010det akt\xedvnych pr\xedpadov: ",c.a.createElement("b",null,a[0].active),c.a.createElement("br",null),"Po\u010det vylie\u010den\xfdch: ",c.a.createElement("span",{style:{color:"green"}},a[0].recovered),c.a.createElement("br",null),a[0].deaths>0?c.a.createElement(c.a.Fragment,null,"Po\u010det \xfamrt\xed: ",a[0].deaths,c.a.createElement("br",null)):null)),c.a.createElement("div",{className:"cards cardsSVK"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"textCard"},c.a.createElement("b",null,"\xdadaje za ",function(){var e=a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].day;return"Pondelok"===e?"pondelok":"Utorok"===e?"utorok":"Streda"===e?"stredu":"\u0160tvrtok"===e?"\u0161tvrtok":"Piatok"===e?"piatok":"Sobota"===e?"sobotu":"nede\u013eu"}()))),c.a.createElement("div",{className:"mainTextSK"},"Po\u010det nov\xfdch testovan\xfdch: ",c.a.createElement("span",null,a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].tested),c.a.createElement("br",null),"Po\u010det negat\xedvnych testov: ",c.a.createElement("span",null,a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].tested-a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].infected),c.a.createElement("br",null),"Po\u010det pozit\xedvnych testov: ",c.a.createElement("span",null,"+",a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].infected),l>0?c.a.createElement(c.a.Fragment,null," ",c.a.createElement("br",null),"Po\u010det nov\xfdch vylie\u010den\xfdch: ",l):null,r>0?c.a.createElement(c.a.Fragment,null,"  ",c.a.createElement("br",null),"Po\u010det nov\xfdch \xfamrt\xed: ",r):null))))}(),c.a.createElement(w,{tabulkaData:a[0].districts,sortBy:function(e){I({dataSvk:a[0].map.sort((function(t,a){return"asc"===x.direction[e]?parseFloat(t[e])-parseFloat(a[e]):c.a.createElement(c.a.Fragment,null,parseFloat(a[e])-parseFloat(t[e])," ")})),direction:Object(v.a)({},e,"asc"===x.direction[e]?"desc":"asc")})}}),function(){var e=0;a[0].chart.map((function(t){return e<t.infected-t.recovered-t.deaths&&(e=t.infected-t.recovered-t.deaths),e}));var t=100/e;return c.a.createElement("div",{className:"outsideDivGraf"},c.a.createElement("h1",null,"Akt\xedvne pr\xedpady"),c.a.createElement("div",{className:"test",onClick:_,style:O},c.a.createElement("div",{className:"wideArrow"},c.a.createElement("img",{alt:"",src:A.a}))),c.a.createElement("div",{className:"svkGraf"},a[0].chart.map((function(e,a){return a>o?c.a.createElement(z,{key:a},c.a.createElement("div",{className:"aktivnePripadyGraf",style:{height:"calc(".concat(t*(e.infected-e.recovered-e.deaths),"% )")}},c.a.createElement("span",{className:"CountPrvehoGrafu"},e.infected-e.recovered-e.deaths),u?a%2===0?c.a.createElement("div",{className:"spanDate"},e.date):null:c.a.createElement("div",{className:"spanDate"},e.date))):null}))),c.a.createElement("div",{className:"medzeraPodDatumomGraf1"}))}(),function(){var e=100/a[0].chart[Object.keys(a[0].chart).length-1].infected;return c.a.createElement("div",{className:"outsideDivGraf"},c.a.createElement("h1",null,"Celkov\xfd pr\xedrastok nakazen\xfdch"),c.a.createElement("div",{className:"test",onClick:_,style:O},c.a.createElement("div",{className:"wideArrow"},c.a.createElement("img",{alt:"",src:A.a}))),c.a.createElement("div",{className:"svkGraf"},a[0].chart.map((function(t,n){return n>o?c.a.createElement(z,{key:n},c.a.createElement("div",{className:"stlpcePrvehoGrafu tooltip",style:{height:"calc(".concat(e*t.infected,"% )")}},c.a.createElement("span",{className:"CountPrvehoGrafu"},t.infected),a[0].tested_chart[n-1]?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"countupFirstRed"},"+",a[0].tested_chart[n-1].infected)):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"countupFirstRed"},"+1")),u?n%2===0?c.a.createElement("div",{className:"spanDate"},t.date):null:c.a.createElement("div",{className:"spanDate"},t.date))):null}))),c.a.createElement("div",{className:"medzeraPodDatumomGraf1"}))}(),function(){var e=0;return y.stav?a&&(a[0].tested_chart.map((function(t){return t.tested>e&&(e=t.tested-t.infected),e})),e/=100):a&&(a[0].tested_chart.map((function(t){return t.infected>e&&(e=t.infected),e})),e/=100),c.a.createElement("div",{className:"outsideDivGraf"},c.a.createElement("h1",null,"Denn\xfd pr\xedrastok negat\xedvnych a pozit\xedvnych testov"),c.a.createElement("div",{className:"test",onClick:_,style:O},c.a.createElement("div",{className:"wideArrow"},c.a.createElement("img",{alt:"",src:A.a}))),c.a.createElement("div",{className:"svkGraf"},-1===o?c.a.createElement(z,null,"  ",c.a.createElement("div",{className:"PozitivneTestyDruhyGraf",style:{height:"calc(".concat(1/e,"%)")}},c.a.createElement("div",{className:"spanDate"},"06-03-2020")),y.stav?c.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(306/e,"%)")}},c.a.createElement("span",{className:"CountDruhehoGrafu"},"306"),c.a.createElement("span",{className:"CountDruhehoGrafu nakazeniZaDen"},"+1")):c.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(1/e,"%)")}},c.a.createElement("span",{className:"CountDruhehoGrafu druhyGrafJedenTypSltpca"},"+1"))):"",a[0].tested_chart.map((function(t,a){return a>o-1?c.a.createElement(z,{key:a},c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"PozitivneTestyDruhyGraf",style:{height:"calc(".concat(t.infected/e,"% )")}},u&&a%2===0?null:c.a.createElement("div",{className:"spanDate"},t.date),y.stav?null:c.a.createElement("span",{className:" CountDruhehoGrafu druhyGrafJedenTypSltpca"},"+",t.infected)),P[a]?y.stav?c.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(P[a]/e,"% )")}},P[a]>99?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"CountDruhehoGrafu",style:{marginLeft:"-2px"}},P[a]),c.a.createElement("span",{className:" CountDruhehoGrafu nakazeniZaDen"},t.infected)):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"CountDruhehoGrafu"},P[a]),c.a.createElement("span",{className:" CountDruhehoGrafu nakazeniZaDen"},"+",t.infected))):null:y.stav?c.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(t.tested/e,"%)")}},c.a.createElement("span",{className:"CountDruhehoGrafu"},t.tested-t.infected),c.a.createElement("span",{className:" CountDruhehoGrafu nakazeniZaDen"},"+",t.infected)):null)):null}))),c.a.createElement("div",{className:"vysvetlivkyPodGrafom"},c.a.createElement("div",{style:y.styling,onClick:W},c.a.createElement("div",{className:"blue"}),"Po\u010det negat\xedvnych testov"),c.a.createElement("div",null,c.a.createElement("div",{className:"red"}),"Po\u010det pozit\xedvnych testov")))}()):"",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null))},J=a(88),V=a(128),Z=a.n(V);a(259);var U=function(e){var t=e.todo,a=e.toggleTodo;return c.a.createElement("div",{onClick:function(){a(t.id)}},c.a.createElement("div",{className:"todoList"},c.a.createElement("div",{className:"naLavo"},function(e){var t=e.slice(-4,-2),a=e.slice(-8,-4);return e.slice(-2)+"."+t+"."+a}(t.time)),c.a.createElement("input",{className:"checkboX",type:"checkbox",onChange:function(){},checked:t.complete}),c.a.createElement("div",{style:{textDecoration:t.complete?"line-through":""}},t.name)))};function M(e){var t=e.todos,a=e.toggleTodo,n=e.time;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement(U,{key:e.id,todo:e,toggleTodo:a,time:n})})))}var R=function(e,t){e.sort((function(e,a){var n=e.time,c=a.time;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))},X=a(129),H=a.n(X);a(260);var Y=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1],r=Object(n.useRef)(),s=Object(n.useState)(!1),o=Object(p.a)(s,2),i=o[0],m=o[1],d=Object(n.useState)(null),u=Object(p.a)(d,2),E=u[0],v=u[1],f=Object(n.useState)({display:"none"}),h=Object(p.a)(f,2),b=h[0],y=h[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoApp.todos"));e&&l(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("todoApp.todos",JSON.stringify(a))}),[a]),c.a.createElement("div",{className:"TodoMain"},c.a.createElement("h1",null,"Todo APP"),c.a.createElement("div",{className:"todo"},c.a.createElement(M,{todos:a,toggleTodo:function(e){var t=Object(J.a)(a),n=t.find((function(t){return t.id===e}));n.complete=!n.complete,l(t)}}),c.a.createElement("form",{className:""},c.a.createElement("input",{placeholder:"Prida\u0165 nov\xe9 TODO",className:"inputTodo",ref:r,type:"text"}),c.a.createElement("div",{className:"divForDatePicker"},c.a.createElement(H.a,{style:{width:"100%"},className:"datePicker",selected:E,onChange:function(e){return v(e)},dateFormat:"dd/MM/yyyy",isClearable:!0,placeholderText:"Dokedy"})),c.a.createElement("div",{className:"musisVyplnitObePolia",style:b},"musi\u0161 vyplni\u0165 obe polia"),c.a.createElement("button",{className:"btn btn1",onClick:function(e){e.preventDefault();var t=r.current.value;if(E)var a=E,n=a.getFullYear()+("0"+(a.getMonth()+1)).slice(-2)+("0"+a.getDate()).slice(-2);t&&n?(y({display:"none"}),l((function(e){return[].concat(Object(J.a)(e),[{id:Z()(),name:t,complete:!1,time:n}])})),r.current.value=null,v(null)):y({display:"block"})}},"Prida\u0165"),c.a.createElement("button",{className:"btn btn2",onClick:function(e){e.preventDefault();var t=a.filter((function(e){return!e.complete}));l(t)}},"Odstrani\u0165 hotov\xe9"),c.a.createElement("button",{className:"btn btnDel",onClick:function(e){e.preventDefault(),window.confirm("Are u sure?")&&l([])}},"Odstrani\u0165 v\u0161etky"),c.a.createElement("button",{className:"btn btn2",style:{width:"100%"},onClick:function(){m(!i),R(a,i),localStorage.setItem("todoApp.todos",JSON.stringify(a))}},"Zoradi\u0165 pod\u013ea d\xe1tumu")),a.length>0&&0!==a.filter((function(e){return!e.complete})).length?c.a.createElement("div",{className:"nesplnene"},a.filter((function(e){return!e.complete})).length," nesplnen\xe9"):c.a.createElement("div",{className:"nesplnene splnene"},"V\u0161etky todo splnen\xe9")))},Q=a(81);Object(Q.polyfill)(),a(81).polyfill(),a(318);var q=function(){return c.a.createElement(s.a,{basename:"/"},c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(E.c,null,c.a.createElement(E.a,{path:"/",component:I,exact:!0}),c.a.createElement(E.a,{path:"/Covid/CovidApp",component:I}),c.a.createElement(E.a,{path:"/Covid/CovidSK",component:W}),c.a.createElement(E.a,{path:"/Todo",component:Y}))))};r.a.render(c.a.createElement(q,null),document.getElementById("root"))},50:function(e,t,a){e.exports=a.p+"static/media/coronaIcon.02ed3e1a.svg"},60:function(e,t,a){e.exports=a.p+"static/media/wideArrow.d20604a8.svg"},90:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.4494c045.chunk.js.map