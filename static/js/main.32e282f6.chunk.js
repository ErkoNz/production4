(this.webpackJsonpallprojects=this.webpackJsonpallprojects||[]).push([[0],{102:function(e,t,a){},119:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(78),c=a.n(l),s=(a(94),a(95),a(8)),o=(a(96),a(79)),i=a.n(o),d=a(80),m=a.n(d);var u=function(){var e={color:"white"};return r.a.createElement("nav",{className:"navApp"},r.a.createElement("ul",{className:"navLinks"},r.a.createElement("li",null,r.a.createElement(s.b,{style:e,to:"/Covid/CovidApp"},r.a.createElement("div",null,r.a.createElement("img",{alt:"",src:i.a,className:"earthIcon"}),"Covid vo svete"))),r.a.createElement("li",null,r.a.createElement(s.b,{style:e,to:"/Covid/CovidSK"},r.a.createElement("div",null,r.a.createElement("img",{alt:"",src:m.a,className:"svkIcon"}),"Covid na Slovensku")))))},v=a(16),p=a(19),E=a(13),h=a.n(E),f=a(20),b=a(2),y=(a(54),a(102),a(33)),g=a.n(y),k=a(14),N=a(5),C=a(82),j=a.n(C);var x=function(e){return e&&e.prop>999?e.prop.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):e?e.prop:null},S=a(34);var O=function(e){var t=Object(n.useState)(),a=Object(b.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(),o=Object(b.a)(s,2),i=o[0],d=o[1],m=Object(n.useState)(!0),u=Object(b.a)(m,2),v=u[0],p=u[1],E=Object(n.useState)({transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}),h=Object(b.a)(E,2),f=h[0],y=h[1],g=Object(n.useState)({position:"absolute",left:"-1000px",transition:"all .2s ease-in"}),k=Object(b.a)(g,2),N=k[0],C=k[1];return Object(n.useEffect)((function(){if(j.a.get("https://disease.sh/v2/continents").then((function(e){c([e.data])})),l){var t=l[0].filter((function(t){return t.continent===e.kontinent}));d(t[0])}}),[e.kontinent]),N&&l&&f&&N&&e.mainData&&e?r.a.createElement(r.a.Fragment,null,console.log("PrvyRiadokTabulky"),"Svet"===e.kontinent?r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:-1,style:{background:"rgb(234, 234, 234)"}},r.a.createElement("td",{onClick:function(){p(!v),v?(y({transform:"rotate(180deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}),C({transition:"all .2s ease-in"})):(C({position:"absolute",left:"-1000px",transition:"all .2s ease-in"}),y({transform:"rotate(0deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}))}},r.a.createElement("span",{className:"spanJustHoverPointer"},"Cel\xfd Svet ",r.a.createElement(S.b,{style:f}),r.a.createElement("div",{className:"firstCase"},r.a.createElement("div",{className:"firstCaseNumber"},r.a.createElement(x,{prop:e.mainData[0].tests}))))),r.a.createElement("td",null,r.a.createElement(x,{prop:e.mainData[0].cases})),r.a.createElement("td",null,r.a.createElement(x,{prop:e.mainData[0].active})),r.a.createElement("td",{style:{background:"rgba(254, 255, 194, .4)"}},"+",r.a.createElement(x,{prop:e.mainData[0].todayCases})),r.a.createElement("td",null,r.a.createElement(x,{prop:e.mainData[0].deaths})),r.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",r.a.createElement(x,{prop:e.mainData[0].todayDeaths})),r.a.createElement("td",{style:{fontWeight:"bold",color:"#006600"}},r.a.createElement(x,{prop:e.mainData[0].recovered}))),l[0].map((function(e,t){return r.a.createElement("tr",{key:t,className:"zrolovaneKontinenty",style:N},r.a.createElement("td",{style:{width:"100px"}},e.continent,r.a.createElement("div",{className:"firstCase"},r.a.createElement("div",{className:"firstCaseNumber"},r.a.createElement(x,{prop:e.tests})))),r.a.createElement("td",null,r.a.createElement(x,{prop:e.cases})),r.a.createElement("td",null,r.a.createElement(x,{prop:e.active})),r.a.createElement("td",{style:{}},"+",r.a.createElement(x,{prop:e.todayCases})),r.a.createElement("td",null,r.a.createElement(x,{prop:e.deaths})),r.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",r.a.createElement(x,{prop:e.todayDeaths})),r.a.createElement("td",{style:{fontWeight:"bold",color:"#006600"}},r.a.createElement(x,{prop:e.recovered})))}))):r.a.createElement(r.a.Fragment,null,i?r.a.createElement("tr",{key:-10,style:{background:"rgb(234, 234, 234)"}},r.a.createElement("td",{style:{width:"100px"}},i.continent,r.a.createElement("div",{className:"firstCase"},r.a.createElement("div",{className:"firstCaseNumber"},r.a.createElement(x,{prop:i.tests})))),r.a.createElement("td",null,r.a.createElement(x,{prop:i.cases})),r.a.createElement("td",null,r.a.createElement(x,{prop:i.active})),r.a.createElement("td",{style:{}},"+",r.a.createElement(x,{prop:i.todayCases})),r.a.createElement("td",null,r.a.createElement(x,{prop:i.deaths})),r.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",r.a.createElement(x,{prop:i.todayDeaths})),r.a.createElement("td",{style:{fontWeight:"bold",color:"#006600"}},r.a.createElement(x,{prop:i.recovered}))):null)):null};a(119);var D=function(e){var t=Object(n.useState)("cases"),a=Object(b.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)("Svet"),i=Object(b.a)(o,2),d=i[0],m=i[1],u=Object(n.useState)(!1),v=Object(b.a)(u,2),p=v[0],E=v[1],h=Object(n.useState)({Svet:{background:"#e5e5e5",boxShadow:"inset 0px 0px 5px #c1c1c1"},Europe:null,V4:null,North_America:null,Asia:null,South_America:null,Africa:null,Australia_Oceania:null}),f=Object(b.a)(h,2),y=f[0],g=f[1],C={Svet:null,Europe:null,V4:null,North_America:null,Asia:null,South_America:null,Africa:null,Australia_Oceania:null},j={background:"#e5e5e5",boxShadow:"inset 0px 0px 5px rgb(179, 179, 179)"},S=Object(n.useReducer)((function(e,t){switch(t.type){case"Svet":return m("Svet"),g((function(e){return Object(k.a)({},C,{Svet:j})}));case"Europe":return m("Europe"),g((function(e){return Object(k.a)({},C,{Europe:j})}));case"V4":return m("V4"),g((function(e){return Object(k.a)({},C,{V4:j})}));case"North America":return m("North America"),g((function(e){return Object(k.a)({},C,{North_America:j})}));case"Asia":return m("Asia"),g((function(e){return Object(k.a)({},C,{Asia:j})}));case"South America":return m("South America"),g((function(e){return Object(k.a)({},C,{South_America:j})}));case"Africa":return m("Africa"),g((function(e){return Object(k.a)({},C,{Africa:j})}));case"Australia/Oceania":return m("Australia/Oceania"),g((function(e){return Object(k.a)({},C,{Australia_Oceania:j})}));default:throw new Error}}),1),D=Object(b.a)(S,2),A=(D[0],D[1]);function _(e){c(e===l?e+"2":e)}var I={transform:"rotateX(180deg)"};window.addEventListener("scroll",(function(){document.querySelector(".scrollingSvet")&&document.querySelector(".scrollingSvet").getBoundingClientRect().y<170&&E(!0)}));var P=function(e){return e?null:{background:"rgb(190, 245, 204)"}};return l&&d&&e?r.a.createElement(r.a.Fragment,null,console.log("svetTabulka"),r.a.createElement("input",{type:"text",id:"myInput",onKeyUp:function(){var e,t,a,n;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("myTable").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[0])&&((a.textContent||a.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},placeholder:"H\u013eada\u0165..",className:"inputSearch"}),r.a.createElement("div",{className:"kontinenty"},r.a.createElement("button",{onClick:function(){return A({type:"Svet"})},style:y.Svet},"Svet"),r.a.createElement("button",{onClick:function(){return A({type:"Europe"})},style:y.Europe},"Eur\xf3pa"),r.a.createElement("button",{onClick:function(){return A({type:"V4"})},style:y.V4},"V4"),r.a.createElement("button",{onClick:function(){return A({type:"North America"})},style:y.North_America},"Severn\xe1 Amerika"),r.a.createElement("button",{onClick:function(){return A({type:"Asia"})},style:y.Asia},"\xc1zia"),r.a.createElement("button",{onClick:function(){return A({type:"South America"})},style:y.South_America},"Ju\u017en\xe1 Amerika"),r.a.createElement("button",{onClick:function(){return A({type:"Africa"})},style:y.Africa},"Afrika"),r.a.createElement("button",{onClick:function(){return A({type:"Australia/Oceania"})},style:y.Australia_Oceania},"Austr\xe1lia/Oce\xe1nia")),r.a.createElement("div",{className:"divTable"},r.a.createElement("table",{id:"myTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return e.sortBy("tests")||_("tests")}},"Krajina",r.a.createElement("br",null),r.a.createElement("div",{className:"firstCase",style:{fontWeight:"normal"}},"Po\u010det testov"),"tests"===l?r.a.createElement(N.b,{className:"sortIcon"}):null,"tests2"===l?r.a.createElement(N.b,{style:I,className:"sortIcon"}):null),r.a.createElement("th",{onClick:function(){return e.sortBy("cases")||_("cases")}},"Po\u010det nakazen\xfdch","cases"===l?r.a.createElement(N.b,{className:"sortIcon"}):null,"cases2"===l?r.a.createElement(N.b,{style:I,className:"sortIcon"}):null),r.a.createElement("th",{onClick:function(){return e.sortBy("active")||_("active")}},"Akt\xedvne pr\xedpady","active"===l?r.a.createElement(N.b,{className:"sortIcon"}):null,"active2"===l?r.a.createElement(N.b,{style:I,className:"sortIcon"}):null),r.a.createElement("th",{onClick:function(){return e.sortBy("todayCases")||_("todayCases")}},"Nov\xe9 pr\xedpady","todayCases"===l?r.a.createElement(N.b,{className:"sortIcon"}):null,"todayCases2"===l?r.a.createElement(N.b,{style:I,className:"sortIcon"}):null),r.a.createElement("th",{onClick:function(){return e.sortBy("deaths")||_("deaths")}},"Po\u010det \xfamrt\xed","deaths"===l?r.a.createElement(N.b,{className:"sortIcon"}):null,"deaths2"===l?r.a.createElement(N.b,{style:I,className:"sortIcon"}):null),r.a.createElement("th",{onClick:function(){return e.sortBy("todayDeaths")||_("todayDeaths")}},"Nov\xe9 \xfamrtia","todayDeaths"===l?r.a.createElement(N.b,{className:"sortIcon"}):null,"todayDeaths2"===l?r.a.createElement(N.b,{style:I,className:"sortIcon"}):null),r.a.createElement("th",{onClick:function(){return e.sortBy("recovered")||_("recovered")}},"Po\u010det vylie\u010den\xfdch","recovered"===l?r.a.createElement(N.b,{className:"sortIcon"}):null,"recovered2"===l?r.a.createElement(N.b,{style:I,className:"sortIcon"}):null))),r.a.createElement("tbody",null,console.log("tbodyyyy"),r.a.createElement(O,{kontinent:d,mainData:e.mainData}),"Svet"===d?r.a.createElement(r.a.Fragment,null,e.countriesData.map((function(e,t){return p||t<20?r.a.createElement("tr",{className:"scrollingSvet",key:t,style:P(e.active)},r.a.createElement("td",{style:{width:"100px"}},r.a.createElement(s.b,{to:"/Covid/CovidApp/".concat(e.country)},r.a.createElement("span",{className:"KrajinaLink"},e.country),e.tests>0?r.a.createElement("div",{className:"firstCase"},r.a.createElement("div",{className:"firstCaseNumber"},r.a.createElement(x,{prop:e.tests}))):null)),r.a.createElement("td",null,r.a.createElement(x,{prop:e.cases})),r.a.createElement("td",null,e.active?r.a.createElement(x,{prop:e.active}):"0"),e.todayCases>0?r.a.createElement("td",{style:{background:" rgb(254, 255, 194)"}},"+",r.a.createElement(x,{prop:e.todayCases})," "):r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement(x,{prop:e.deaths})),e.todayDeaths>0?r.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",r.a.createElement(x,{prop:e.todayDeaths})," "):r.a.createElement("td",null),r.a.createElement("td",{style:{fontWeight:"bold",color:"#006600"}},r.a.createElement(x,{prop:e.recovered}))):null}))):"V4"===d?r.a.createElement(r.a.Fragment,null,e.countriesData.map((function(e,t){return"Slovakia"===e.country||"Czechia"===e.country||"Hungary"===e.country||"Poland"===e.country||"Austria"===e.country||"Ukraine"===e.country?r.a.createElement("tr",{className:"scrollingSvet",key:t,style:P(e.active)},console.log(e.country),r.a.createElement("td",{style:{width:"100px"}},r.a.createElement(s.b,{to:"/Covid/CovidApp/".concat(e.country)},r.a.createElement("span",{className:"KrajinaLink"},e.country),e.tests>0?r.a.createElement("div",{className:"firstCase"},r.a.createElement("div",{className:"firstCaseNumber"},r.a.createElement(x,{prop:e.tests}))):null)),r.a.createElement("td",null,r.a.createElement(x,{prop:e.cases})),r.a.createElement("td",null,e.active?r.a.createElement(x,{prop:e.active}):"0"),e.todayCases>0?r.a.createElement("td",{style:{background:" rgb(254, 255, 194)"}},"+",r.a.createElement(x,{prop:e.todayCases})," "):r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement(x,{prop:e.deaths})),e.todayDeaths>0?r.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",r.a.createElement(x,{prop:e.todayDeaths})," "):r.a.createElement("td",null),r.a.createElement("td",{style:{fontWeight:"bold",color:"#006600"}},r.a.createElement(x,{prop:e.recovered}))):null}))):e.countriesData.map((function(e,t){return e.continent===d?r.a.createElement("tr",{key:t,style:P(e.active)},r.a.createElement("td",{style:{width:"100px"}},r.a.createElement(s.b,{to:"/Covid/CovidApp/".concat(e.country)},r.a.createElement("span",{className:"KrajinaLink"},e.country),e.tests>0?r.a.createElement("div",{className:"firstCase"},r.a.createElement("div",{className:"firstCaseNumber"},r.a.createElement(x,{prop:e.tests}))):null)),r.a.createElement("td",null,r.a.createElement(x,{prop:e.cases})),r.a.createElement("td",null,e.active?r.a.createElement(x,{prop:e.active}):"0"),e.todayCases>0?r.a.createElement("td",{style:{background:" rgb(254, 255, 194)"}},"+",r.a.createElement(x,{prop:e.todayCases})," "):r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement(x,{prop:e.deaths})),e.todayDeaths>0?r.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",r.a.createElement(x,{prop:e.todayDeaths})," "):r.a.createElement("td",null),r.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},r.a.createElement(x,{prop:e.recovered}))):null})))),r.a.createElement("label",{htmlFor:"myInput"},"."))):null},A=a(84),_=a(50),I=a(15);a(211);var P=function(e){var t={labels:["Nakazen\xed","Vylie\u010den\xed","\xdamrtia"],datasets:[{label:"# of Votes",data:[e.cases,e.recovered,e.deaths],backgroundColor:["#f85959","#17b978","#430d27"]}]};return e&&t?r.a.createElement("div",null,console.log("DougnatChart"),r.a.createElement("div",{className:"dougnut"},r.a.createElement(I.c,{data:t,height:300,options:{maintainAspectRatio:!1,tooltips:{callbacks:{title:function(e,t){return t.labels[e[0].index]},label:function(e,t){var a=t.datasets[0],n=a.data[0]+a.data[1]+a.data[2],r=t.datasets[0].data[e.index]/n;return t.datasets[0].data[e.index]+" ("+Math.round(100*r)+"%)"}}},centerText:{display:!0,text:"90%"},animation:{duration:2e3,easing:"easeOutQuint"}}}))):null};var F=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(b.a)(c,2),i=o[0],d=o[1],m=Object(n.useState)(),u=Object(b.a)(m,2),v=u[0],E=u[1],y=Object(n.useState)({countriesData:v,direction:{price_usd:"asc"}}),k=Object(b.a)(y,2),C=k[0],j=k[1];function S(e,t){if(e){var a=t/(e/100);return a=(a=(a=(a=t/(e/100)).toFixed(3)).toString()).replace(".",","),r.a.createElement("div",{className:"aktiveNakazenych"},r.a.createElement("span",null,"V percent\xe1ch:")," ",a,"%")}}return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,d([a.cases,a.recovered,a.deaths]),l([a]),e.next=10,fetch("https://disease.sh/v2/countries");case 10:return n=e.sent,e.next=13,n.json();case 13:r=e.sent,E(r),j({data:r.sort((function(e,t){return"asc"===C.direction.cases?parseFloat(e.cases)-parseFloat(t.cases):parseFloat(t.cases)-parseFloat(e.cases)})),direction:{cases:"asc"===C.direction.cases?"desc":"asc"}});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a&&i&&v&&(C.direction.cases||C.direction.tests||C.direction.active||C.direction.todayCases||C.direction.deaths||C.direction.recovered||C.direction.todayDeaths)?r.a.createElement("div",{className:"covidApp"},console.log("CovidApp"),a?r.a.createElement("div",{className:"cardsDiv"},r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"topCard"},r.a.createElement("div",{className:"obrDiv"},r.a.createElement("div",{className:"circle"},r.a.createElement("img",{alt:"",src:g.a}))),r.a.createElement("div",{className:"textCard"},"Po\u010det nakazen\xfdch")),r.a.createElement("div",{className:"mainText"},r.a.createElement(x,{prop:a[0].cases}),r.a.createElement("div",{className:"aktiveNakazenych"},r.a.createElement("span",null,"Po\u010det akt\xedvnych pr\xedpadov:")," ",r.a.createElement(x,{prop:a[0].active})))),r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"topCard"},r.a.createElement("div",{className:"obrDiv"},r.a.createElement("div",{className:"circle HP"},r.a.createElement(N.a,{color:"green"}))),r.a.createElement("div",{className:"textCard"}," Po\u010det vylie\u010den\xfdch")),r.a.createElement("div",{className:"mainText"},r.a.createElement(x,{prop:a[0].recovered}),S(a[0].cases,a[0].recovered))),r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"topCard"},r.a.createElement("div",{className:"obrDiv"},r.a.createElement("div",{className:"circle skull"},r.a.createElement(A.a,{color:"white"}))),r.a.createElement("div",{className:"textCard"}," Po\u010det \xfamrt\xed")),r.a.createElement("div",{className:"mainText"},r.a.createElement(x,{prop:a[0].deaths}),S(a[0].cases,a[0].deaths)))):"",r.a.createElement(P,{cases:i[0],recovered:i[1],deaths:i[2]}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"SlovenskeUdajeLink"},r.a.createElement(s.b,{to:"/Covid/CovidSK"},"Slovensk\xe9 \xfadaje ",r.a.createElement(_.a,{className:"iconSlovUdaje"}))),r.a.createElement("br",null),r.a.createElement("div",{className:"SlovenskeUdajeLink"},r.a.createElement(s.b,{to:"/Covid/CovidApp/Svet"},"Grafy pre cel\xfd svet ",r.a.createElement(_.a,{className:"iconSlovUdaje"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(D,{countriesData:v,mainData:a,sortBy:function(e){j({countriesData:v.sort((function(t,a){return"asc"===C.direction[e]?parseFloat(t[e])-parseFloat(a[e]):parseFloat(a[e])-parseFloat(t[e])})),direction:Object(p.a)({},e,"asc"===C.direction[e]?"desc":"asc")})}})):null},z=a(51),B=a(52),G=a(35),w=a.n(G);a(212);var T=function(e,t,a){if("amountRecovered"===a){e.sort((function(e,a){var n=a.amount.recovered,r=e.amount.recovered;return t?n>r?1:n<r?-1:0:r>n?1:r<n?-1:0}))}else if("amountDelta"===JSON.parse(localStorage.getItem("zoradenieLocalStorage"))){e.sort((function(e,a){var n=e.amount.infected_delta,r=a.amount.infected_delta;return t?n>r?1:n<r?-1:0:r>n?1:r<n?-1:0}))}else if("amountInfected"===JSON.parse(localStorage.getItem("zoradenieLocalStorage"))){e.sort((function(e,a){var n=e.amount.infected,r=a.amount.infected;return t?n>r?1:n<r?-1:0:r>n?1:r<n?-1:0}))}else{e.sort((function(e,a){var n=e.amount.infected,r=a.amount.infected;return t?n>r?1:n<r?-1:0:r>n?1:r<n?-1:0}))}};var L=function(e){var t=e.tabulkaData,a=Object(n.useState)(!1),l=Object(b.a)(a,2),c=l[0],s=l[1],o=Object(n.useState)({display:"none"}),i=Object(b.a)(o,2),d=i[0],m=i[1],u=Object(n.useState)({boolean:!0,text:"Zobrazi\u0165 \xfadaje o jedntliv\xfdch obciach"}),v=Object(b.a)(u,2),p=v[0],E=v[1],h=Object(n.useState)({transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}),f=Object(b.a)(h,2),y=f[0],g=f[1];function k(e){localStorage.setItem("zoradenieLocalStorage",JSON.stringify(e)),s(!c),T(t,c,e)}return Object(n.useEffect)((function(){s((function(e){return!e})),T(t,c,"stlpec")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"textPreZObrazenieTabulky",onClick:function(){p.boolean?(E({boolean:!p.boolean,text:"Schova\u0165 \xfadaje o jedntliv\xfdch obciach"}),m({display:"flex"}),g({transform:"rotateX(180deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"})):(E({boolean:!p.boolean,text:"Zobrazi\u0165 \xfadaje o jedntliv\xfdch obciach"}),m({display:"none"}),g({transform:"rotateX(0deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}))}},p.text," ",r.a.createElement(S.a,{style:y})),r.a.createElement("div",{style:d,className:"tabulkaOkrajDivMain"},r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"myInput",onKeyUp:function(){var e,t,a,n;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("myTable").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[0])&&((a.textContent||a.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},placeholder:"H\u013eada\u0165..",className:"inputSearch"}),r.a.createElement("div",{className:"tabulkaMesta"},r.a.createElement("table",{id:"myTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Obec"),r.a.createElement("th",{onClick:function(){return k("amountInfected")}},"Po\u010det nakazen\xfdch"),r.a.createElement("th",{onClick:function(){return k("amountDelta")}},"Za posledn\xfd de\u0148"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:t},"Bratislava II"===e.title||"Bratislava III"===e.title||"Bratislava IV"===e.title||"Bratislava V"===e.title||"Ko\u0161ice II"===e.title||"Ko\u0161ice III"===e.title||"Ko\u0161ice IV"===e.title?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,"Bratislava I"===e.title?"Bratislava":"Ko\u0161ice I"===e.title?"Ko\u0161ice":e.title),r.a.createElement("td",null,e.amount.infected),r.a.createElement("td",{style:{color:"red"}},e.amount.infected_delta>0?"+"+e.amount.infected_delta:null))))})))))))};function V(){var e=Object(z.a)(["\n    height: 100%;\n    animation: "," .7s;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    "]);return V=function(){return e},e}function K(){var e=Object(z.a)(["\n    0%{\n        height: 0%;\n      }\n      100%{\n        height: 100%;\n      }\n    "]);return K=function(){return e},e}var W=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),s=Object(b.a)(c,2),o=s[0],i=s[1],d=Object(n.useState)(!1),m=Object(b.a)(d,2),u=m[0],v=m[1],E=Object(n.useState)({stav:!0,styling:{textDecoration:"none"}}),y=Object(b.a)(E,2),k=y[0],N=y[1],C=Object(n.useState)(),j=Object(b.a)(C,2),S=j[0],O=j[1],D=Object(n.useState)({dataSvk:a,direction:{price_usd:"asc"}}),A=Object(b.a)(D,2),_=A[0],I=A[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mapa.covid.chat/map_data");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(Object.keys(a.chart).length-25),l([a]),I({dataSvk:a.map.sort((function(e,t){return"asc"===_.direction.cases?parseFloat(e.cases)-parseFloat(t.cases):parseFloat(t.cases)-parseFloat(e.cases)})),direction:{cases:"asc"===_.direction.cases?"desc":"asc"}});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=[83,102,50,42,120,129,118,197,228],F=Object(B.b)(K()),z=B.a.div(V(),F);function G(){u?(i(Object.keys(a[0].chart).length-25),O({transform:"rotateY(0deg)"})):(i(-1),O({transform:"rotateY(180deg)"})),v(!u)}function T(){k.stav?N({stav:!1,styling:{textDecoration:"line-through"}}):N({stav:!0,styling:{textDecoration:"none"}})}return r.a.createElement("div",{className:"covidApp"},a?r.a.createElement(r.a.Fragment,null,function(){var e=a[0].chart[Object.keys(a[0].tested_chart).length].recovered,t=a[0].chart[Object.keys(a[0].tested_chart).length-1].recovered,n=e-t,l=0;n>0&&(l=e-t);var c=0;return(n=(e=a[0].chart[Object.keys(a[0].tested_chart).length].deaths)-(t=a[0].chart[Object.keys(a[0].tested_chart).length-1].deaths))>0&&(c=e-t),r.a.createElement("div",null,r.a.createElement("div",{className:"cardsDiv"},r.a.createElement("div",{className:"cards cardsSVK"},r.a.createElement("div",{className:"topCard"},r.a.createElement("div",{className:"obrDiv"},r.a.createElement("div",{className:"circle"},r.a.createElement("img",{alt:"",src:g.a}))),r.a.createElement("div",{className:"textCard"},r.a.createElement("b",null,"Slovensk\xe9 \xfadaje"))),r.a.createElement("div",{className:"mainTextSK"},"Po\u010det testovan\xfdch: ",r.a.createElement(x,{prop:a[0].tested}),r.a.createElement("br",null),"Z toho pozit\xedvnych testov: ",a[0].infected,r.a.createElement("br",null),"Po\u010det akt\xedvnych pr\xedpadov: ",r.a.createElement("b",null,a[0].active),r.a.createElement("br",null),"Po\u010det vylie\u010den\xfdch: ",r.a.createElement("span",{style:{color:"green"}},a[0].recovered),r.a.createElement("br",null),a[0].deaths>0?r.a.createElement(r.a.Fragment,null,"Po\u010det \xfamrt\xed: ",a[0].deaths,r.a.createElement("br",null)):null)),r.a.createElement("div",{className:"cards cardsSVK"},r.a.createElement("div",{className:"topCard"},r.a.createElement("div",{className:"textCard"},r.a.createElement("b",null,"\xdadaje za ",function(){var e=a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].day;return"Pondelok"===e?"pondelok":"Utorok"===e?"utorok":"Streda"===e?"stredu":"\u0160tvrtok"===e?"\u0161tvrtok":"Piatok"===e?"piatok":"Sobota"===e?"sobotu":"nede\u013eu"}()))),r.a.createElement("div",{className:"mainTextSK"},"Po\u010det nov\xfdch testovan\xfdch: ",r.a.createElement("span",null,a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].tested),r.a.createElement("br",null),"Po\u010det negat\xedvnych testov: ",r.a.createElement("span",null,a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].tested-a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].infected),r.a.createElement("br",null),"Po\u010det pozit\xedvnych testov: ",r.a.createElement("span",null,"+",a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].infected),l>0?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("br",null),"Po\u010det nov\xfdch vylie\u010den\xfdch: ",l):null,c>0?r.a.createElement(r.a.Fragment,null,"  ",r.a.createElement("br",null),"Po\u010det nov\xfdch \xfamrt\xed: ",c):null))))}(),r.a.createElement(L,{tabulkaData:a[0].districts,sortBy:function(e){I({dataSvk:a[0].map.sort((function(t,a){return"asc"===_.direction[e]?parseFloat(t[e])-parseFloat(a[e]):r.a.createElement(r.a.Fragment,null,parseFloat(a[e])-parseFloat(t[e])," ")})),direction:Object(p.a)({},e,"asc"===_.direction[e]?"desc":"asc")})}}),function(){var e=0;a[0].chart.map((function(t){return e<t.infected-t.recovered-t.deaths&&(e=t.infected-t.recovered-t.deaths),e}));var t=100/e;return r.a.createElement("div",{className:"outsideDivGraf"},r.a.createElement("h1",null,"Akt\xedvne pr\xedpady"),r.a.createElement("div",{className:"test",onClick:G,style:S},r.a.createElement("div",{className:"wideArrow"},r.a.createElement("img",{alt:"",src:w.a}))),r.a.createElement("div",{className:"svkGraf"},a[0].chart.map((function(e,a){return a>o?r.a.createElement(z,{key:a},r.a.createElement("div",{className:"aktivnePripadyGraf",style:{height:"calc(".concat(t*(e.infected-e.recovered-e.deaths),"% )")}},r.a.createElement("span",{className:"CountPrvehoGrafu"},e.infected-e.recovered-e.deaths),u?a%2===0?r.a.createElement("div",{className:"spanDate"},e.date):null:r.a.createElement("div",{className:"spanDate"},e.date))):null}))),r.a.createElement("div",{className:"medzeraPodDatumomGraf1"}))}(),function(){var e=100/a[0].chart[Object.keys(a[0].chart).length-1].infected;return r.a.createElement("div",{className:"outsideDivGraf"},r.a.createElement("h1",null,"Celkov\xfd pr\xedrastok nakazen\xfdch"),r.a.createElement("div",{className:"test",onClick:G,style:S},r.a.createElement("div",{className:"wideArrow"},r.a.createElement("img",{alt:"",src:w.a}))),r.a.createElement("div",{className:"svkGraf"},a[0].chart.map((function(t,n){return n>o?r.a.createElement(z,{key:n},r.a.createElement("div",{className:"stlpcePrvehoGrafu tooltip",style:{height:"calc(".concat(e*t.infected,"% )")}},r.a.createElement("span",{className:"CountPrvehoGrafu"},t.infected),a[0].tested_chart[n-1]?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"countupFirstRed"},"+",a[0].tested_chart[n-1].infected)):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"countupFirstRed"},"+1")),u?n%2===0?r.a.createElement("div",{className:"spanDate"},t.date):null:r.a.createElement("div",{className:"spanDate"},t.date))):null}))),r.a.createElement("div",{className:"medzeraPodDatumomGraf1"}))}(),function(){var e=0;return k.stav?a&&(a[0].tested_chart.map((function(t){return t.tested>e&&(e=t.tested-t.infected),e})),e/=100):a&&(a[0].tested_chart.map((function(t){return t.infected>e&&(e=t.infected),e})),e/=100),r.a.createElement("div",{className:"outsideDivGraf"},r.a.createElement("h1",null,"Denn\xfd pr\xedrastok negat\xedvnych a pozit\xedvnych testov"),r.a.createElement("div",{className:"test",onClick:G,style:S},r.a.createElement("div",{className:"wideArrow"},r.a.createElement("img",{alt:"",src:w.a}))),r.a.createElement("div",{className:"svkGraf"},-1===o?r.a.createElement(z,null,"  ",r.a.createElement("div",{className:"PozitivneTestyDruhyGraf",style:{height:"calc(".concat(1/e,"%)")}},r.a.createElement("div",{className:"spanDate"},"06-03-2020")),k.stav?r.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(306/e,"%)")}},r.a.createElement("span",{className:"CountDruhehoGrafu"},"306"),r.a.createElement("span",{className:"CountDruhehoGrafu nakazeniZaDen"},"+1")):r.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(1/e,"%)")}},r.a.createElement("span",{className:"CountDruhehoGrafu druhyGrafJedenTypSltpca"},"+1"))):"",a[0].tested_chart.map((function(t,a){return a>o-1?r.a.createElement(z,{key:a},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"PozitivneTestyDruhyGraf",style:{height:"calc(".concat(t.infected/e,"% )")}},u&&a%2===0?null:r.a.createElement("div",{className:"spanDate"},t.date),k.stav?null:r.a.createElement("span",{className:" CountDruhehoGrafu druhyGrafJedenTypSltpca"},"+",t.infected)),P[a]?k.stav?r.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(P[a]/e,"% )")}},P[a]>99?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"CountDruhehoGrafu",style:{marginLeft:"-2px"}},P[a]),r.a.createElement("span",{className:" CountDruhehoGrafu nakazeniZaDen"},t.infected)):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"CountDruhehoGrafu"},P[a]),r.a.createElement("span",{className:" CountDruhehoGrafu nakazeniZaDen"},"+",t.infected))):null:k.stav?r.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(t.tested/e,"%)")}},r.a.createElement("span",{className:"CountDruhehoGrafu"},t.tested-t.infected),r.a.createElement("span",{className:" CountDruhehoGrafu nakazeniZaDen"},"+",t.infected)):null)):null}))),r.a.createElement("div",{className:"vysvetlivkyPodGrafom"},r.a.createElement("div",{style:k.styling,onClick:T},r.a.createElement("div",{className:"blue"}),"Po\u010det negat\xedvnych testov"),r.a.createElement("div",null,r.a.createElement("div",{className:"red"}),"Po\u010det pozit\xedvnych testov")))}()):"",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))};a(213);var U=function(e){var t=e.props,a={dataSetsCases:{labels:t.datumy,datasets:[{label:"Po\u010det m\u0155tvych",backgroundColor:"grey",data:t.dataSetsDeaths.datasets[0].data},{label:"Po\u010det vylie\u010den\xfdch",backgroundColor:"#57C757",data:t.dataSetsRecovered.datasets[0].data},{label:"Po\u010det nakazen\xfdch",backgroundColor:"#FF4D4D",data:t.dataSetsCases.datasets[0].data}]},dataSetsActiveCases:{labels:t.datumy,datasets:t.dataSetsActiveCases.datasets},dataSetsDailyCases:{labels:t.datumy.slice(-(t.datumy.length-1)),datasets:t.dataSetsDailyCases.datasets},options:{maintainAspectRatio:!1,responsive:!0,legend:{position:"bottom",labels:{padding:25},onClick:function(e,t){I.b.defaults;var a=t.datasetIndex,n=this.chart,r=n.getDatasetMeta(a);r.hidden=null===r.hidden?!n.data.datasets[a].hidden:null,n.update()}},scales:{xAxes:[{stacked:!0,gridLines:{display:!1}}],yAxes:[{stacked:!0,ticks:{callback:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}}]},tooltips:{mode:"index",position:"nearest",intersect:!1,callbacks:{label:function(e,t){return(t.datasets[e.datasetIndex].label||"")+": "+e.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}},animation:{duration:500,onProgress:function(){if(!1===t.nacitatViacUdajov){var e=this.chart,a=e.ctx;a.textAlign="center",a.fillStyle="rgba(0, 0, 0, .75)",a.textBaseline="bottom",window.innerWidth>1220?a.font="bold 12px Arial":window.innerWidth>720?a.font="bold 11px Arial":a.font="bold 6px Arial",this.data.datasets.forEach((function(t,r){e.controller.getDatasetMeta(r).data.forEach((function(e,r){var l=t.data[r];if(r%2===0){if(!0===t.data._chartjs.listeners[0].chart.legend.legendItems[0].hidden||!1===t.data._chartjs.listeners[0].chart.legend.legendItems[0].hidden)if("Po\u010det m\u0155tvych"===t.data._chartjs.listeners[0].chart.legend.legendItems[0].text){var c=[];t.data._chartjs.listeners[0].chart.legend.legendItems.map((function(e,t){return c[t]=e.hidden,c})),"Po\u010det m\u0155tvych"===e._model.datasetLabel&&!1===c[0]?a.fillText(n(l),e._model.x,e._model.y-4):"Po\u010det vylie\u010den\xfdch"===e._model.datasetLabel&&!1===c[1]?a.fillText(n(l),e._model.x,e._model.y-4):"Po\u010det nakazen\xfdch"===e._model.datasetLabel&&!1===c[2]&&a.fillText(n(l),e._model.x,e._model.y-4)}else a.fillText(n(l),e._model.x,e._model.y-4)}else if(l<100&&(!0===t.data._chartjs.listeners[0].chart.legend.legendItems[0].hidden||!1===t.data._chartjs.listeners[0].chart.legend.legendItems[0].hidden))if("Po\u010det m\u0155tvych"===t.data._chartjs.listeners[0].chart.legend.legendItems[0].text){var s=[];t.data._chartjs.listeners[0].chart.legend.legendItems.map((function(e,t){return s[t]=e.hidden,s})),"Po\u010det m\u0155tvych"===e._model.datasetLabel&&!1===s[0]?a.fillText(n(l),e._model.x,e._model.y-4):"Po\u010det vylie\u010den\xfdch"===e._model.datasetLabel&&!1===s[1]?a.fillText(n(l),e._model.x,e._model.y-4):"Po\u010det nakazen\xfdch"===e._model.datasetLabel&&!1===s[2]&&a.fillText(n(l),e._model.x,e._model.y-4)}else a.fillText(n(l),e._model.x,e._model.y-4)}))}))}}}}};function n(e){return isNaN(e)||e<1e3?e:e<1e4?(e/1e3).toFixed(2)+"k":e<1e5?(e/1e3).toFixed(1)+"k":e<1e6?Math.round(e/1e3)+"k":e<1e7?(e/1e5).toFixed(1)+"M":e<1e9?(e/1e6).toFixed(1)+"M":e<1e12?Math.round(e/1e9)+"B":void 0}return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"mainDivPreGrafy"},r.a.createElement("div",{className:"barsGrafy"},r.a.createElement("h1",null,"Denn\xfd pr\xedrastok nakazen\xfdch"),r.a.createElement(I.a,{data:a.dataSetsDailyCases,options:a.options})),r.a.createElement("div",{className:"barsGrafy"},r.a.createElement("h1",null,"Celkov\xfd po\u010det akt\xedvnych pr\xedpadov"),r.a.createElement(I.a,{data:a.dataSetsActiveCases,options:a.options})),r.a.createElement("div",{className:"barsGrafy"},r.a.createElement("h1",null,"Celkov\xfd pr\xedrastok nakazen\xfdch/vylie\u010den\xfdch"),r.a.createElement(I.a,{data:a.dataSetsCases,options:a.options}))))};var R=function(e){var t=e.match,a=Object(n.useState)(),l=Object(b.a)(a,2),c=l[0],s=l[1],o=Object(n.useState)({text:"Zobrazuj\xfa sa \xfadaje za posledn\xfdch 30 dn\xed, kliknut\xedm sa na\u010d\xedtaj\xfa v\u0161etky dni",bool:!1}),i=Object(b.a)(o,2),d=i[0],m=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(h.a.mark((function e(){var a,n,r,l,c,o,i,m;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=[],m=[],"Svet"!==t.params.id){e.next=20;break}if(!1!==d.bool){e.next=8;break}return e.next=5,fetch("https://disease.sh/v2/historical/All");case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,fetch("https://disease.sh/v2/historical/All?lastdays=all");case 10:a=e.sent;case 11:return e.next=13,a.json();case 13:n=e.sent,r=Object.keys(n.cases),l=Object.values(n.cases),c=Object.values(n.recovered),o=Object.values(n.deaths),e.next=36;break;case 20:if(!1!==d.bool){e.next=26;break}return e.next=23,fetch("https://disease.sh/v2/historical/".concat(t.params.id));case 23:a=e.sent,e.next=29;break;case 26:return e.next=28,fetch("https://disease.sh/v2/historical/".concat(t.params.id,"/?lastdays=all"));case 28:a=e.sent;case 29:return e.next=31,a.json();case 31:n=e.sent,r=Object.keys(n.timeline.cases),l=Object.values(n.timeline.cases),c=Object.values(n.timeline.recovered),o=Object.values(n.timeline.deaths);case 36:r.map((function(e,t){if(l[t]>0){var a=new Date(e),n=a.getDate()+". "+(a.getMonth()+1)+". "+a.getFullYear();return r[t]=n}return null})),l.map((function(e,t){return m[t]=e-c[t]-o[t],t>0&&(i[t-1]=l[t]-l[t-1]),i})),l=l.filter((function(e){return 0!==e})),c=c.splice(-l.length),o=o.splice(-l.length),r=r.splice(-l.length),i=i.slice(-l.length),m=m.slice(-l.length),s({nacitatViacUdajov:d.bool,datumy:r,dataSetsCases:{datasets:[{label:"Celkov\xfd po\u010det nakazen\xfdch",data:l,backgroundColor:"rgb(249, 70, 68)",fillColor:"black",hoverBackgroundColor:"red"}]},dataSetsDeaths:{datasets:[{label:"Celkov\xfd po\u010det \xfamrt\xed",data:o,backgroundColor:"grey",hoverBackgroundColor:"grey"}]},dataSetsRecovered:{datasets:[{label:"Celkov\xfd po\u010det vylie\u010den\xfdch",data:c,backgroundColor:"green",hoverBackgroundColor:"green"}]},dataSetsActiveCases:{datasets:[{label:"Celkov\xfd po\u010det aktivnych pr\xedpadov",data:m,backgroundColor:"blue",hoverBackgroundColor:"blue"}]},dataSetsDailyCases:{datasets:[{label:"Denn\xfd pr\xedrastok nakazen\xfdch",data:i,backgroundColor:"salmon",hoverBackgroundColor:"salmon"}]}});case 45:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]),c?r.a.createElement("div",{className:"testingGrafy"},"Svet"===t.params.id?r.a.createElement("h1",null,"Covid-19 vo svete"):r.a.createElement("h1",null," Covid - 19 v krajine ",t.params.id),r.a.createElement(P,{cases:c.dataSetsCases.datasets[0].data[c.dataSetsCases.datasets[0].data.length-1],recovered:c.dataSetsRecovered.datasets[0].data[c.dataSetsRecovered.datasets[0].data.length-1],deaths:c.dataSetsDeaths.datasets[0].data[c.dataSetsDeaths.datasets[0].data.length-1]}),r.a.createElement("div",{className:"NacitatViacDniDoGrafov",onClick:function(){!1===d.bool?m({text:"Zobrazi\u0165 menej \xfadajov",bool:!d.bool}):m({text:"Zobrazuj\xfa sa \xfadaje za posledn\xfdch 30 dn\xed, kliknut\xedm sa na\u010d\xedtaj\xfa v\u0161etky dni",bool:!d.bool})}},d.text),r.a.createElement("div",null,r.a.createElement(U,{props:c}))):null};var Z=function(){return r.a.createElement(s.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",component:F,exact:!0}),r.a.createElement(v.a,{path:"/Covid/CovidSK",component:W}),r.a.createElement(v.a,{path:"/Covid/CovidApp",exact:!0,component:F}),r.a.createElement(v.a,{path:"/Covid/CovidApp/:id",component:R}))))};c.a.render(r.a.createElement(Z,null),document.getElementById("root"))},33:function(e,t,a){e.exports=a.p+"static/media/coronaIcon.02ed3e1a.svg"},35:function(e,t,a){e.exports=a.p+"static/media/wideArrow.d20604a8.svg"},54:function(e,t,a){},79:function(e,t,a){e.exports=a.p+"static/media/earth.cdc4522b.svg"},80:function(e,t,a){e.exports=a.p+"static/media/slovakiaIcon.a29682dd.svg"},89:function(e,t,a){e.exports=a(214)},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.32e282f6.chunk.js.map