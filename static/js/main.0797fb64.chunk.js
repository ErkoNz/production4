(this.webpackJsonpallprojects=this.webpackJsonpallprojects||[]).push([[0],{109:function(e,t,a){e.exports=a.p+"static/media/earth.cdc4522b.svg"},110:function(e,t,a){e.exports=a.p+"static/media/slovakiaIcon.a29682dd.svg"},123:function(e,t,a){e.exports=a(294)},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},136:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){},233:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(48),l=a.n(r),s=(a(128),a(129),a(21)),o=(a(130),a(109)),i=a.n(o),m=a(110),u=a.n(m);var d=function(){var e={color:"white"};return c.a.createElement("nav",{className:"navApp"},c.a.createElement("div",{className:"doubleClick",onClick:function(){window.location.href="#/Todo"}}),c.a.createElement("ul",{className:"navLinks"},c.a.createElement("li",null,c.a.createElement(s.b,{style:e,to:"/Covid/CovidApp"},c.a.createElement("div",null,c.a.createElement("img",{alt:"",src:i.a,className:"earthIcon"}),"Covid vo svete"))),c.a.createElement("li",null,c.a.createElement(s.b,{style:e,to:"/Covid/CovidSK"},c.a.createElement("div",null,c.a.createElement("img",{alt:"",src:u.a,className:"svkIcon"}),"Covid na Slovensku")))))},v=a(23),E=a(32),p=a(24),f=a.n(p),h=a(40),y=a(5),b=(a(89),a(136),a(49)),g=a.n(b),N=a(10),k=a(50);var j=function(e){var t=Object(n.useState)("cases"),a=Object(y.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(!0),i=Object(y.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)({transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}),v=Object(y.a)(d,2),E=v[0],p=v[1],f=Object(n.useState)({position:"absolute",left:"-1000px",transition:"all .2s ease-in",fontSize:"15px"}),h=Object(y.a)(f,2),b=h[0],g=h[1];function j(e){l(e===r?e+"2":e)}var O={transform:"rotateX(180deg)"};function C(e){if(e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function S(){u(!m),m?(p({transform:"rotate(180deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}),g({background:"rgb(234, 234, 234)",fontSize:"15px",transition:"all .2s ease-in"})):(g({position:"absolute",left:"-1000px",transition:"all .2s ease-in",fontSize:"15px"}),p({transform:"rotate(0deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}))}return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",id:"myInput",onKeyUp:function(){var e,t,a,n;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("myTable").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[0])&&((a.textContent||a.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},placeholder:"H\u013eada\u0165..",className:"inputSearch"}),c.a.createElement("div",{className:"divTable"},c.a.createElement("table",{id:"myTable"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{onClick:function(){return e.sortBy("totalTests"),j("totalTests")}},"Krajina","totalTests"===r?c.a.createElement(N.b,{className:"sortIcon"}):null,"totalTests2"===r?c.a.createElement(N.b,{style:O,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("cases"),j("cases")}},"Po\u010det nakazen\xfdch","cases"===r?c.a.createElement(N.b,{className:"sortIcon"}):null,"cases2"===r?c.a.createElement(N.b,{style:O,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("active"),j("active")}},"Akt\xedvne pr\xedpady","active"===r?c.a.createElement(N.b,{className:"sortIcon"}):null,"active2"===r?c.a.createElement(N.b,{style:O,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("todayCases"),j("todayCases")}},"Nov\xe9 pr\xedpady","todayCases"===r?c.a.createElement(N.b,{className:"sortIcon"}):null,"todayCases2"===r?c.a.createElement(N.b,{style:O,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("deaths"),j("deaths")}},"Po\u010det \xfamrt\xed","deaths"===r?c.a.createElement(N.b,{className:"sortIcon"}):null,"deaths2"===r?c.a.createElement(N.b,{style:O,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("todayDeaths"),j("todayDeaths")}},"Nov\xe9 \xfamrtia","todayDeaths"===r?c.a.createElement(N.b,{className:"sortIcon"}):null,"todayDeaths2"===r?c.a.createElement(N.b,{style:O,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("recovered"),j("recovered")}},"Po\u010det vylie\u010den\xfdch","recovered"===r?c.a.createElement(N.b,{className:"sortIcon"}):null,"recovered2"===r?c.a.createElement(N.b,{style:O,className:"sortIcon"}):null))),c.a.createElement("tbody",null,e.countriesData.map((function(t,a){return"World"===t.country?function(t,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{key:a,style:{background:"rgb(234, 234, 234)"}},c.a.createElement("td",{style:{width:"100px"},onClick:S},"Cel\xfd svet ",c.a.createElement("span",null,c.a.createElement(k.a,{style:E}))),c.a.createElement("td",null,C(t.cases)),c.a.createElement("td",null,C(t.active)),c.a.createElement("td",{style:{background:" rgb(254, 255, 194, .4)"}},"+",C(t.todayCases)," "),c.a.createElement("td",null,C(t.deaths)),c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",C(t.todayDeaths)," "),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},C(t.recovered))),e.countriesData.map((function(e,t){return"Europe"===e.country||"North America"===e.country||"Asia"===e.country||"Africa"===e.country||"South America"===e.country||"Oceania"===e.country?c.a.createElement("tr",{key:t,className:"kontinenty",style:b},c.a.createElement("td",{style:{width:"100px"},className:"kontinenty"},e.country," "),c.a.createElement("td",{className:"kontinenty"},C(e.cases)),c.a.createElement("td",{className:"kontinenty"},C(e.active)),c.a.createElement("td",{style:{background:" rgb(254, 255, 194, .4)"},className:"kontinenty"},"+",C(e.todayCases)," "),c.a.createElement("td",{className:"kontinenty"},C(e.deaths)),c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"},className:"kontinenty"},"+",C(e.todayDeaths)," "),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"},className:"kontinenty"},C(e.recovered))):null})))}(t,a):"Europe"===t.country||"North America"===t.country||"Asia"===t.country||"Africa"===t.country||"South America"===t.country||"Oceania"===t.country||"Total:"===t.country?null:c.a.createElement("tr",{key:a,style:(n=t.active,n?null:{background:"rgb(190, 245, 204)"})},c.a.createElement("td",{style:{width:"100px"}},"Slovakia"===t.country?c.a.createElement("div",{style:{fontWeight:"bold",textDecoration:"underline"}},c.a.createElement(s.b,{to:"/Covid/CovidSK"},t.country)):t.country,t.totalTests>0?c.a.createElement("div",{className:"firstCase"},"Po\u010det testov: ",c.a.createElement("div",{className:"firstCaseNumber"},C(t.totalTests))):null),c.a.createElement("td",null,C(t.cases)),c.a.createElement("td",null,C(t.active)," ",t.active?null:"0 !!!"),t.todayCases>0?c.a.createElement("td",{style:{background:" rgb(254, 255, 194)"}},"+",C(t.todayCases)," "):c.a.createElement("td",null),c.a.createElement("td",null,C(t.deaths)),t.todayDeaths>0?c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",C(t.todayDeaths)," "):c.a.createElement("td",null),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},C(t.recovered)));var n}))))))},O=a(113),C=a(114),S=a(111);a(228);var x=function(e){var t={labels:["Nakazen\xed","Vylie\u010den\xed","\xdamrtia"],datasets:[{label:"# of Votes",data:e.dataForGraph,backgroundColor:["#f85959","#17b978","#430d27"]}]};return c.a.createElement("div",null,c.a.createElement("div",{className:"dougnut"},c.a.createElement(S.a,{data:t,height:300,options:{maintainAspectRatio:!1,animation:{duration:2e3,easing:"easeOutQuint"}}})))};a(229);var D=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(y.a)(l,2),i=o[0],m=o[1],u=Object(n.useState)({countriesData:i,direction:{price_usd:"asc"}}),d=Object(y.a)(u,2),v=d[0],p=d[1];Object(n.useEffect)((function(){b(),k()}),[]);var b=function(){var e=Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coronavirus-19-api.herokuapp.com/all");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r([a.cases,a.recovered,a.deaths]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coronavirus-19-api.herokuapp.com/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,m(a),p({data:a.sort((function(e,t){return"asc"===v.direction.cases?parseFloat(e.cases)-parseFloat(t.cases):parseFloat(t.cases)-parseFloat(e.cases)})),direction:Object(E.a)({},"cases","asc"===v.direction.cases?"desc":"asc")});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function S(e){if(e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function D(e,t){if(e){var a=t/(e/100);return a=(a=(a=(a=t/(e/100)).toFixed(3)).toString()).replace(".",","),c.a.createElement("div",{className:"aktiveNakazenych"},c.a.createElement("span",null,"V percent\xe1ch:")," ",a,"%")}}return c.a.createElement("div",{className:"covidApp"},c.a.createElement("div",{className:"cardsDiv"},c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle"},c.a.createElement("img",{alt:"",src:g.a}))),c.a.createElement("div",{className:"textCard"}," Po\u010det nakazen\xfdch")),c.a.createElement("div",{className:"mainText"},S(a[0]),c.a.createElement("div",{className:"aktiveNakazenych"},c.a.createElement("span",null,"Po\u010det akt\xedvnych pr\xedpadov:")," ",S(a[0]-a[1]-a[2])))),c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle HP"},c.a.createElement(N.a,{color:"green"}))),c.a.createElement("div",{className:"textCard"}," Po\u010det vylie\u010den\xfdch")),c.a.createElement("div",{className:"mainText"},S(a[1]),D(a[0],a[1]))),c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle skull"},c.a.createElement(O.a,{color:"white"}))),c.a.createElement("div",{className:"textCard"}," Po\u010det \xfamrt\xed")),c.a.createElement("div",{className:"mainText"},S(a[2]),D(a[0],a[2])))),c.a.createElement(x,{dataForGraph:a}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"SlovenskeUdajeLink"},c.a.createElement(s.b,{to:"/Covid/CovidSK"},"Slovensk\xe9 \xfadaje ",c.a.createElement(C.a,{className:"iconSlovUdaje"}))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(j,{countriesData:i,sortBy:function(e){p({countriesData:i.sort((function(t,a){return"asc"===v.direction[e]?parseFloat(t[e])-parseFloat(a[e]):parseFloat(a[e])-parseFloat(t[e])})),direction:Object(E.a)({},e,"asc"===v.direction[e]?"desc":"asc")})}}))},F=a(83),T=a(84),P=a(59),I=a.n(P);a(230);var z=function(e,t,a){if("amountRecovered"===a){e.sort((function(e,a){var n=a.amount.recovered,c=e.amount.recovered;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))}else if("amountDelta"===JSON.parse(localStorage.getItem("zoradenieLocalStorage"))){e.sort((function(e,a){var n=e.amount.infected_delta,c=a.amount.infected_delta;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))}else if("amountInfected"===JSON.parse(localStorage.getItem("zoradenieLocalStorage"))){e.sort((function(e,a){var n=e.amount.infected,c=a.amount.infected;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))}else{e.sort((function(e,a){var n=e.amount.infected,c=a.amount.infected;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))}};var G=function(e){var t=e.tabulkaData,a=Object(n.useState)({}),r=Object(y.a)(a,2),l=(r[0],r[1]),s=Object(n.useState)(!1),o=Object(y.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)({display:"none"}),d=Object(y.a)(u,2),v=d[0],E=d[1],p=Object(n.useState)({boolean:!0,text:"Zobrazi\u0165 \xfadaje o jedntliv\xfdch obciach"}),f=Object(y.a)(p,2),h=f[0],b=f[1],g=Object(n.useState)({transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}),N=Object(y.a)(g,2),j=N[0],O=N[1];function C(e){localStorage.setItem("zoradenieLocalStorage",JSON.stringify(e)),m(!i),z(t,i,e)}return Object(n.useEffect)((function(){m(!i),z(t,i,"stlpec");var e=0,a=0;t.map((function(t){e+=t.females,a+=t.males})),l({labels:["\u017deny","Mu\u017ei"],data:[e,a],backgroundColor:["red","blue"]})}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"textPreZObrazenieTabulky",onClick:function(){h.boolean?(b({boolean:!h.boolean,text:"Schova\u0165 \xfadaje o jedntliv\xfdch obciach"}),E({display:"flex"}),O({transform:"rotateX(180deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"})):(b({boolean:!h.boolean,text:"Zobrazi\u0165 \xfadaje o jedntliv\xfdch obciach"}),E({display:"none"}),O({transform:"rotateX(0deg)",transition:"all .2s ease-in",marginBottom:"-3px",marginLeft:"3px"}))}},h.text," ",c.a.createElement(k.a,{style:j})),c.a.createElement("div",{style:v,className:"tabulkaOkrajDivMain"},c.a.createElement("br",null),c.a.createElement("input",{type:"text",id:"myInput",onKeyUp:function(){var e,t,a,n;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("myTable").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[0])&&((a.textContent||a.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},placeholder:"H\u013eada\u0165..",className:"inputSearch"}),c.a.createElement("div",{className:"tabulkaMesta"},c.a.createElement("table",{id:"myTable"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Obec"),c.a.createElement("th",{onClick:function(){return C("amountInfected")}},"Po\u010det nakazen\xfdch"),c.a.createElement("th",{onClick:function(){return C("amountDelta")}},"Za posledn\xfd de\u0148"))),c.a.createElement("tbody",null,t.map((function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.title),c.a.createElement("td",null,e.amount.infected),c.a.createElement("td",{style:{color:"red"}},e.amount.infected_delta>0?"+"+e.amount.infected_delta:null," ")))})))))))};function B(){var e=Object(F.a)(["\n    height: 100%;\n    animation: "," .7s;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    "]);return B=function(){return e},e}function _(){var e=Object(F.a)(["\n    0%{\n        height: 0%;\n      }\n      100%{\n        height: 100%;\n      }\n    "]);return _=function(){return e},e}var w=function(){var e=Object(n.useState)(),t=Object(y.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),s=Object(y.a)(l,2),o=s[0],i=s[1],m=Object(n.useState)(!1),u=Object(y.a)(m,2),d=u[0],v=u[1],p=Object(n.useState)({stav:!0,styling:{textDecoration:"none"}}),b=Object(y.a)(p,2),N=b[0],k=b[1],j=Object(n.useState)(),O=Object(y.a)(j,2),C=O[0],S=O[1],x=Object(n.useState)({background:"red"}),D=Object(y.a)(x,2),F=(D[0],D[1],Object(n.useState)({dataSvk:a,direction:{price_usd:"asc"}})),P=Object(y.a)(F,2),z=P[0],w=P[1];Object(n.useEffect)((function(){L()}),[]);var A=[83,102,50,42,120,129,118,197,228],L=function(){var e=Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mapa.covid.chat/map_data");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(Object.keys(a.chart).length-25),r([a]),w({dataSvk:a.map.sort((function(e,t){return"asc"===z.direction.cases?parseFloat(e.cases)-parseFloat(t.cases):parseFloat(t.cases)-parseFloat(e.cases)})),direction:Object(E.a)({},"cases","asc"===z.direction.cases?"desc":"asc")});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=Object(T.b)(_()),J=T.a.div(B(),K);function Z(){d?(i(Object.keys(a[0].chart).length-25),S({transform:"rotateY(0deg)"})):(i(-1),S({transform:"rotateY(180deg)"})),v(!d)}function U(){N.stav?k({stav:!1,styling:{textDecoration:"line-through"}}):k({stav:!0,styling:{textDecoration:"none"}})}return c.a.createElement("div",{className:"covidApp"},a?c.a.createElement(c.a.Fragment,null,function(){var e=a[0].chart[Object.keys(a[0].tested_chart).length].recovered,t=a[0].chart[Object.keys(a[0].tested_chart).length-1].recovered,n=e-t,r=0;n>0&&(r=e-t);var l=0;return(n=(e=a[0].chart[Object.keys(a[0].tested_chart).length].deaths)-(t=a[0].chart[Object.keys(a[0].tested_chart).length-1].deaths))>0&&(l=e-t),c.a.createElement("div",null,c.a.createElement("div",{className:"cardsDiv"},c.a.createElement("div",{className:"cards cardsSVK"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle"},c.a.createElement("img",{alt:"",src:g.a}))),c.a.createElement("div",{className:"textCard"},c.a.createElement("b",null,"Slovensk\xe9 \xfadaje"))),c.a.createElement("div",{className:"mainTextSK"},"Po\u010det testovan\xfdch: ",a[0].tested,c.a.createElement("br",null),"Z toho pozit\xedvnych testov: ",a[0].infected,c.a.createElement("br",null),"Po\u010det akt\xedvnych pr\xedpadov: ",c.a.createElement("b",null,a[0].active),c.a.createElement("br",null),"Po\u010det vylie\u010den\xfdch: ",c.a.createElement("span",{style:{color:"green"}},a[0].recovered),c.a.createElement("br",null),a[0].deaths>0?c.a.createElement(c.a.Fragment,null,"Po\u010det \xfamrt\xed: ",a[0].deaths,c.a.createElement("br",null)):null)),c.a.createElement("div",{className:"cards cardsSVK"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"textCard"},c.a.createElement("b",null,"\xdadaje za ",function(){var e=a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].day;return"Pondelok"===e?"pondelok":"Utorok"===e?"utorok":"Streda"===e?"stredu":"\u0160tvrtok"===e?"\u0161tvrtok":"Piatok"===e?"piatok":"Sobota"===e?"sobotu":"nede\u013eu"}()))),c.a.createElement("div",{className:"mainTextSK"},"Po\u010det nov\xfdch testovan\xfdch: ",c.a.createElement("span",null,a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].tested),c.a.createElement("br",null),"Po\u010det negat\xedvnych testov: ",c.a.createElement("span",null,a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].tested-a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].infected),c.a.createElement("br",null),"Po\u010det pozit\xedvnych testov: ",c.a.createElement("span",null,"+",a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].infected),r>0?c.a.createElement(c.a.Fragment,null," ",c.a.createElement("br",null),"Po\u010det nov\xfdch vylie\u010den\xfdch: ",r):null,l>0?c.a.createElement(c.a.Fragment,null,"  ",c.a.createElement("br",null),"Po\u010det nov\xfdch \xfamrt\xed: ",l):null))))}(),c.a.createElement(G,{tabulkaData:a[0].districts,sortBy:function(e){w({dataSvk:a[0].map.sort((function(t,a){return"asc"===z.direction[e]?parseFloat(t[e])-parseFloat(a[e]):c.a.createElement(c.a.Fragment,null,parseFloat(a[e])-parseFloat(t[e])," ")})),direction:Object(E.a)({},e,"asc"===z.direction[e]?"desc":"asc")})}}),function(){var e=100/a[0].chart[Object.keys(a[0].chart).length-1].infected;return c.a.createElement("div",{className:"outsideDivGraf"},c.a.createElement("h1",null,"Celkov\xfd pr\xedrastok nakazen\xfdch"),c.a.createElement("div",{className:"test",onClick:Z,style:C},c.a.createElement("div",{className:"wideArrow"},c.a.createElement("img",{alt:"",src:I.a}))),c.a.createElement("div",{className:"svkGraf"},a[0].chart.map((function(t,n){return n>o?c.a.createElement(J,{key:n},c.a.createElement("div",{className:"stlpcePrvehoGrafu tooltip",style:{height:"calc(".concat(e*t.infected,"% )")}},c.a.createElement("span",{className:"CountPrvehoGrafu"},t.infected),a[0].tested_chart[n-1]?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"countupFirstRed"},"+",a[0].tested_chart[n-1].infected)):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"countupFirstRed"},"+1")),d?n%2==0?c.a.createElement("div",{className:"spanDate"},t.date):null:c.a.createElement("div",{className:"spanDate"},t.date))):null}))),c.a.createElement("div",{className:"medzeraPodDatumomGraf1"}))}(),function(){var e=0;return N.stav?a&&(a[0].tested_chart.map((function(t){t.tested>e&&(e=t.tested-t.infected)})),e/=100):a&&(a[0].tested_chart.map((function(t){t.infected>e&&(e=t.infected)})),e/=100),c.a.createElement("div",{className:"outsideDivGraf"},c.a.createElement("h1",null,"Denn\xfd pr\xedrastok negat\xedvnych a pozit\xedvnych testov"),c.a.createElement("div",{className:"test",onClick:Z,style:C},c.a.createElement("div",{className:"wideArrow"},c.a.createElement("img",{alt:"",src:I.a}))),c.a.createElement("div",{className:"svkGraf"},-1===o?c.a.createElement(J,null,"  ",c.a.createElement("div",{className:"PozitivneTestyDruhyGraf",style:{height:"calc(".concat(1/e,"%)")}},c.a.createElement("div",{className:"spanDate"},"06-03-2020")),N.stav?c.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(306/e,"%)")}},c.a.createElement("span",{className:"CountDruhehoGrafu"},"306"),c.a.createElement("span",{className:"CountDruhehoGrafu nakazeniZaDen"},"+1")):c.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(1/e,"%)")}},c.a.createElement("span",{className:"CountDruhehoGrafu druhyGrafJedenTypSltpca"},"+1"))):"",a[0].tested_chart.map((function(t,a){return a>o-1?c.a.createElement(J,{key:a},c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"PozitivneTestyDruhyGraf",style:{height:"calc(".concat(t.infected/e,"% )")}},d&&a%2==0?null:c.a.createElement("div",{className:"spanDate"},t.date),N.stav?null:c.a.createElement("span",{className:" CountDruhehoGrafu druhyGrafJedenTypSltpca"},"+",t.infected)),A[a]?N.stav?c.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(A[a]/e,"% )")}},A[a]>99?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"CountDruhehoGrafu",style:{marginLeft:"-2px"}},A[a]),c.a.createElement("span",{className:" CountDruhehoGrafu nakazeniZaDen"},t.infected)):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"CountDruhehoGrafu"},A[a]),c.a.createElement("span",{className:" CountDruhehoGrafu nakazeniZaDen"},"+",t.infected))):null:N.stav?c.a.createElement("div",{className:"Graf2Stlpce",style:{height:"calc(".concat(t.tested/e,"%)")}},c.a.createElement("span",{className:"CountDruhehoGrafu"},t.tested-t.infected),c.a.createElement("span",{className:" CountDruhehoGrafu nakazeniZaDen"},"+",t.infected)):null)):null}))),c.a.createElement("div",{className:"vysvetlivkyPodGrafom"},c.a.createElement("div",{style:N.styling,onClick:U},c.a.createElement("div",{className:"blue"}),"Po\u010det negat\xedvnych testov"),c.a.createElement("div",null,c.a.createElement("div",{className:"red"}),"Po\u010det pozit\xedvnych testov")))}()):"",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null))},A=a(87),L=a(118),K=a.n(L);a(233);var J=function(e){var t=e.todo,a=e.toggleTodo;return c.a.createElement("div",{onClick:function(){a(t.id)}},c.a.createElement("div",{className:"todoList"},c.a.createElement("div",{className:"naLavo"},function(e){var t=e.slice(-4,-2),a=e.slice(-8,-4);return e.slice(-2)+"."+t+"."+a}(t.time)),c.a.createElement("input",{className:"checkboX",type:"checkbox",onChange:function(){},checked:t.complete}),c.a.createElement("div",{style:{textDecoration:t.complete?"line-through":""}},t.name)))};function Z(e){var t=e.todos,a=e.toggleTodo,n=e.time;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement(J,{key:e.id,todo:e,toggleTodo:a,time:n})})))}var U=function(e,t){e.sort((function(e,a){var n=e.time,c=a.time;return t?n>c?1:n<c?-1:0:c>n?1:c<n?-1:0}))},W=a(119),M=a.n(W);a(234);var V=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],r=t[1],l=Object(n.useRef)(),s=Object(n.useState)(!1),o=Object(y.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)(null),d=Object(y.a)(u,2),v=d[0],E=d[1],p=Object(n.useState)({display:"none"}),f=Object(y.a)(p,2),h=f[0],b=f[1];function g(){m(!i),U(a,i),localStorage.setItem("todoApp.todos",JSON.stringify(a))}return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoApp.todos"));e&&r(e),g()}),[]),Object(n.useEffect)((function(){localStorage.setItem("todoApp.todos",JSON.stringify(a))}),[a]),c.a.createElement("div",{className:"TodoMain"},c.a.createElement("h1",null,"Todo APP"),c.a.createElement("div",{className:"todo"},c.a.createElement(Z,{todos:a,toggleTodo:function(e){var t=Object(A.a)(a),n=t.find((function(t){return t.id===e}));n.complete=!n.complete,r(t)}}),c.a.createElement("form",{className:""},c.a.createElement("input",{placeholder:"Prida\u0165 nov\xe9 TODO",className:"inputTodo",ref:l,type:"text"}),c.a.createElement("div",{className:"divForDatePicker"},c.a.createElement(M.a,{style:{width:"100%"},className:"datePicker",selected:v,onChange:function(e){return E(e)},dateFormat:"dd/MM/yyyy",isClearable:!0,placeholderText:"Dokedy"})),c.a.createElement("div",{className:"musisVyplnitObePolia",style:h},"musi\u0161 vyplni\u0165 obe polia"),c.a.createElement("button",{className:"btn btn1",onClick:function(e){e.preventDefault();var t=l.current.value;if(v)var a=v,n=a.getFullYear()+("0"+(a.getMonth()+1)).slice(-2)+("0"+a.getDate()).slice(-2);t&&n?(b({display:"none"}),r((function(e){return[].concat(Object(A.a)(e),[{id:K()(),name:t,complete:!1,time:n}])})),l.current.value=null,E(null)):b({display:"block"})}},"Prida\u0165"),c.a.createElement("button",{className:"btn btn2",onClick:function(e){e.preventDefault();var t=a.filter((function(e){return!e.complete}));r(t)}},"Odstrani\u0165 hotov\xe9"),c.a.createElement("button",{className:"btn btnDel",onClick:function(e){e.preventDefault(),window.confirm("Are u sure?")&&r([])}},"Odstrani\u0165 v\u0161etky"),c.a.createElement("button",{className:"btn btn2",style:{width:"100%"},onClick:g},"Zoradi\u0165 pod\u013ea d\xe1tumu")),a.length>0&&0!==a.filter((function(e){return!e.complete})).length?c.a.createElement("div",{className:"nesplnene"},a.filter((function(e){return!e.complete})).length," nesplnen\xe9"):c.a.createElement("div",{className:"nesplnene splnene"},"V\u0161etky todo splnen\xe9")))},R=a(81);Object(R.polyfill)(),a(81).polyfill(),a(292);var X=function(){return c.a.createElement(s.a,{basename:"/"},c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/",component:D,exact:!0}),c.a.createElement(v.a,{path:"/Covid/CovidApp",component:D}),c.a.createElement(v.a,{path:"/Covid/CovidSK",component:w}),c.a.createElement(v.a,{path:"/Todo",component:V}))))};l.a.render(c.a.createElement(X,null),document.getElementById("root"))},49:function(e,t,a){e.exports=a.p+"static/media/coronaIcon.02ed3e1a.svg"},59:function(e,t,a){e.exports=a.p+"static/media/wideArrow.d20604a8.svg"},89:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.0797fb64.chunk.js.map