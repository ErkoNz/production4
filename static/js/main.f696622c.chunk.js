(this.webpackJsonpallprojects=this.webpackJsonpallprojects||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/coronaIcon.02ed3e1a.svg"},27:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/earth.cdc4522b.svg"},30:function(e,t,a){e.exports=a.p+"static/media/slovakiaIcon.a29682dd.svg"},36:function(e,t,a){e.exports=a(54)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(28),l=a.n(r),s=(a(41),a(42),a(8)),o=(a(43),a(29)),m=a.n(o),i=a(30),d=a.n(i);var u=function(){var e={color:"white"};return c.a.createElement("nav",{className:"navApp"},c.a.createElement("ul",{className:"navLinks"},c.a.createElement("li",null,c.a.createElement(s.b,{style:e,to:"/Covid/CovidApp"},c.a.createElement("div",null,c.a.createElement("img",{alt:"",src:m.a,className:"earthIcon"}),"Covid vo svete"))),c.a.createElement("li",null,c.a.createElement(s.b,{style:e,to:"/Covid/CovidSK"},c.a.createElement("div",null,c.a.createElement("img",{alt:"",src:d.a,className:"svkIcon"}),"Covid na slovensku")))))},v=a(10),E=a(22),h=a(11),p=a.n(h),f=a(15),y=a(9),N=(a(27),a(49),a(17)),b=a.n(N),g=a(3);var k=function(e){var t=Object(n.useState)("cases"),a=Object(y.a)(t,2),r=a[0],l=a[1];function o(e){l(e===r?e+"2":e)}var m={transform:"rotateX(180deg)"};function i(e){if(e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",id:"myInput",onKeyUp:function(){var e,t,a,n;for(e=document.getElementById("myInput").value.toUpperCase(),t=document.getElementById("myTable").getElementsByTagName("tr"),n=0;n<t.length;n++)(a=t[n].getElementsByTagName("td")[0])&&((a.textContent||a.innerText).toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none")},placeholder:"H\u013eada\u0165..",className:"inputSearch"}),c.a.createElement("div",{className:"divTable"},c.a.createElement("table",{id:"myTable"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{onClick:function(){return e.sortBy("totalTests"),o("totalTests")}},"Krajina","totalTests"===r?c.a.createElement(g.b,{className:"sortIcon"}):null,"totalTests2"===r?c.a.createElement(g.b,{style:m,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("cases"),o("cases")}},"Po\u010det nakazen\xfdch","cases"===r?c.a.createElement(g.b,{className:"sortIcon"}):null,"cases2"===r?c.a.createElement(g.b,{style:m,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("active"),o("active")}},"Akt\xedvne pr\xedpady","active"===r?c.a.createElement(g.b,{className:"sortIcon"}):null,"active2"===r?c.a.createElement(g.b,{style:m,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("todayCases"),o("todayCases")}},"Nov\xe9 pr\xedpady","todayCases"===r?c.a.createElement(g.b,{className:"sortIcon"}):null,"todayCases2"===r?c.a.createElement(g.b,{style:m,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("deaths"),o("deaths")}},"Po\u010det \xfamrt\xed","deaths"===r?c.a.createElement(g.b,{className:"sortIcon"}):null,"deaths2"===r?c.a.createElement(g.b,{style:m,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("todayDeaths"),o("todayDeaths")}},"Nov\xe9 \xfamrtia","todayDeaths"===r?c.a.createElement(g.b,{className:"sortIcon"}):null,"todayDeaths2"===r?c.a.createElement(g.b,{style:m,className:"sortIcon"}):null),c.a.createElement("th",{onClick:function(){return e.sortBy("recovered"),o("recovered")}},"Po\u010det vylie\u010den\xfdch","recovered"===r?c.a.createElement(g.b,{className:"sortIcon"}):null,"recovered2"===r?c.a.createElement(g.b,{style:m,className:"sortIcon"}):null))),c.a.createElement("tbody",null,e.countriesData.map((function(e,t){return"World"===e.country?function(e,t){return c.a.createElement("tr",{key:t,style:{background:"rgb(214, 214, 214)"}},c.a.createElement("td",{style:{width:"100px"}},e.country),c.a.createElement("td",null,i(e.cases)),c.a.createElement("td",null,i(e.active)),c.a.createElement("td",{style:{background:" rgb(254, 255, 194, .4)"}},"+",i(e.todayCases)," "),c.a.createElement("td",null,i(e.deaths)),c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",i(e.todayDeaths)," "),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},i(e.recovered)))}(e,t):c.a.createElement("tr",{key:t},c.a.createElement("td",{style:{width:"100px"}},"Slovakia"===e.country?c.a.createElement("div",{style:{fontWeight:"bold",textDecoration:"underline"}},c.a.createElement(s.b,{to:"/Covid/CovidSK"},e.country)):e.country,e.totalTests>0?c.a.createElement("div",{className:"firstCase"},"Po\u010det testov: ",c.a.createElement("div",{className:"firstCaseNumber"},i(e.totalTests))):null),c.a.createElement("td",null,i(e.cases)),c.a.createElement("td",null,i(e.active)),e.todayCases>0?c.a.createElement("td",{style:{background:" rgb(254, 255, 194)"}},"+",i(e.todayCases)," "):c.a.createElement("td",null),c.a.createElement("td",null,i(e.deaths)),e.todayDeaths>0?c.a.createElement("td",{style:{color:" rgba(156, 20, 20, 0.849)",fontWeight:"bold"}},"+",i(e.todayDeaths)," "):c.a.createElement("td",null),c.a.createElement("td",{style:{fontWeight:"bold",color:"green"}},i(e.recovered)))}))))))},C=a(19);var x=function(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(y.a)(l,2),m=o[0],i=o[1],d=Object(n.useState)({countriesData:m,direction:{price_usd:"asc"}}),u=Object(y.a)(d,2),v=u[0],h=u[1];Object(n.useEffect)((function(){N(),x()}),[]);var N=function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coronavirus-19-api.herokuapp.com/all");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r([a.cases,a.recovered,a.deaths]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://coronavirus-19-api.herokuapp.com/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a),h({data:a.sort((function(e,t){return"asc"===v.direction.cases?parseFloat(e.cases)-parseFloat(t.cases):parseFloat(t.cases)-parseFloat(e.cases)})),direction:Object(E.a)({},"cases","asc"===v.direction.cases?"desc":"asc")});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function D(e){if(e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}function j(e,t){if(e){var a=t/(e/100);return a=(a=(a=(a=t/(e/100)).toFixed(3)).toString()).replace(".",","),c.a.createElement("div",{className:"aktiveNakazenych"},c.a.createElement("span",null,"V percent\xe1ch:")," ",a,"%")}}return c.a.createElement("div",{className:"covidApp"},c.a.createElement("div",{className:"cardsDiv"},c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle"},c.a.createElement("img",{alt:"",src:b.a}))),c.a.createElement("div",{className:"textCard"}," Po\u010det nakazen\xfdch")),c.a.createElement("div",{className:"mainText"},D(a[0]),c.a.createElement("div",{className:"aktiveNakazenych"},c.a.createElement("span",null,"Po\u010det akt\xedvnych pr\xedpadov:")," ",D(a[0]-a[1]-a[2])))),c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle HP"},c.a.createElement(g.a,{color:"green"}))),c.a.createElement("div",{className:"textCard"}," Po\u010det vylie\u010den\xfdch")),c.a.createElement("div",{className:"mainText"},D(a[1]),j(a[0],a[1]))),c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle skull"},c.a.createElement(C.a,{color:"white"}))),c.a.createElement("div",{className:"textCard"}," Po\u010det \xfamrt\xed")),c.a.createElement("div",{className:"mainText"},D(a[2]),j(a[0],a[2])))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"slovenskeUdaje"},c.a.createElement(s.b,{to:"/Covid/CovidSK"},"Slovensk\xe9 \xfadaje")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(k,{countriesData:m,sortBy:function(e){h({countriesData:m.sort((function(t,a){return"asc"===v.direction[e]?parseFloat(t[e])-parseFloat(a[e]):parseFloat(a[e])-parseFloat(t[e])})),direction:Object(E.a)({},e,"asc"===v.direction[e]?"desc":"asc")})}}))},D=a(23),j=a(6),P=a.n(j),O=a(24);a(52);function I(){var e=Object(D.a)(["\n    height: 100%;\n    animation: "," 2s;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    "]);return I=function(){return e},e}function F(){var e=Object(D.a)(["\n    0%{\n        height: 0%;\n      }\n      100%{\n        height: 100%;\n      }\n    "]);return F=function(){return e},e}var T=function(){var e=Object(n.useState)(),t=Object(y.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){s()}),[]);var l=[83,102,50,42,120,129,118,197,228],s=function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mapa.covid.chat/map_data");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r([a]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=Object(O.b)(F()),m=O.a.div(I(),o);return c.a.createElement("div",{className:"covidApp"},a?c.a.createElement(c.a.Fragment,null,function(){var e=a[0].chart[Object.keys(a[0].tested_chart).length].recovered,t=a[0].chart[Object.keys(a[0].tested_chart).length-1].recovered,n=e-t,r=0;n>0&&(r=e-t);var l=0;return(n=(e=a[0].chart[Object.keys(a[0].tested_chart).length].recovered)-(t=a[0].chart[Object.keys(a[0].tested_chart).length-1].recovered))>0&&(l=e-t),console.log(a[0]),c.a.createElement("div",null,c.a.createElement("div",{className:"cardsDiv"},c.a.createElement("div",{className:"cards cardsSVK"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"obrDiv"},c.a.createElement("div",{className:"circle"},c.a.createElement("img",{alt:"",src:b.a}))),c.a.createElement("div",{className:"textCard"},c.a.createElement("b",null,"Slovensk\xe9 \xfadaje"))),c.a.createElement("div",{className:"mainTextSK"},"Po\u010det testovan\xfdch: ",a[0].tested,c.a.createElement("br",null),"Po\u010det negat\xedvnych testov: ",a[0].tested-a[0].infected,c.a.createElement("br",null),"Po\u010det pozit\xedvnych testov: ",a[0].infected,c.a.createElement("br",null),"Po\u010det vylie\u010den\xfdch: ",a[0].recovered,c.a.createElement("br",null),a[0].deaths>0?c.a.createElement(c.a.Fragment,null,"Po\u010det \xfamrti\xed: ",a[0].deaths,c.a.createElement("br",null)):null)),c.a.createElement("div",{className:"cards cardsSVK"},c.a.createElement("div",{className:"topCard"},c.a.createElement("div",{className:"textCard"},c.a.createElement("b",null,"\xdadaje za posledn\xfd de\u0148"))),c.a.createElement("div",{className:"mainTextSK"},"Po\u010det nov\xfdch testovan\xfdch: ",c.a.createElement("span",null,a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].tested),c.a.createElement("br",null),"Po\u010det negat\xedvnych testov: ",c.a.createElement("span",null,a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].tested-a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].infected),c.a.createElement("br",null),"Po\u010det pozit\xedvnych testov: ",c.a.createElement("span",null,"+",a[0].tested_chart[Object.keys(a[0].tested_chart).length-1].infected),r>0?c.a.createElement(c.a.Fragment,null," ",c.a.createElement("br",null),"Po\u010det nov\xfdch vylie\u010den\xfdch: ",r,c.a.createElement("br",null)):null,l>0?c.a.createElement(c.a.Fragment,null," Po\u010det nov\xfdch \xfamrt\xed: ",l,c.a.createElement("br",null)):null))))}(),c.a.createElement("div",{className:"tooltip"},"Hover over me",c.a.createElement("div",{className:"tooltiptext"},"Tooltip text")),function(){var e=100/a[0].chart[Object.keys(a[0].chart).length-1].infected;return c.a.createElement("div",{className:"outsideDivGraf"},c.a.createElement("div",{className:"svkGraf"},a[0].chart.map((function(t,n){return c.a.createElement(m,{key:n},c.a.createElement("div",{className:"stlpcePrvehoGrafu tooltip",style:{height:"calc(".concat(e*t.infected,"% )")}},c.a.createElement(P.a,{className:"CountPrvehoGrafu",end:parseInt(t.infected)}),a[0].tested_chart[n-1]?c.a.createElement(c.a.Fragment,null," ",c.a.createElement(P.a,{className:"countupFirstRed",prefix:"+",end:parseInt(a[0].tested_chart[n-1].infected)}),c.a.createElement("div",{className:"tooltiptext"},"Po\u010det nakazen\xfdch: ",t.infected," ",c.a.createElement("br",null),"Po\u010det nov\xfdch nakazen\xfdch: ",a[0].tested_chart[n-1].infected)):c.a.createElement(c.a.Fragment,null,c.a.createElement(P.a,{className:"countupFirstRed",prefix:"+",end:1}),c.a.createElement("div",{className:"tooltiptext"},"Po\u010det nakazen\xfdch: ",t.infected," ",c.a.createElement("br",null),"Po\u010det nov\xfdch nakazen\xfdch: 1")),c.a.createElement("div",{className:"spanDate"},t.date)))}))),c.a.createElement("div",{className:"medzeraPodDatumomGraf1"}))}(),function(){var e=0;return a&&(a[0].tested_chart.map((function(t){t.tested>e&&(e=t.tested-t.infected)})),e/=100),c.a.createElement("div",{className:"outsideDivGraf"},c.a.createElement("div",{className:"svkGraf"},c.a.createElement("div",{className:"testDElete"}),c.a.createElement(m,null,"  ",c.a.createElement("div",{className:"PozitivneTestyDruhyGraf",style:{height:" 3px"}},c.a.createElement("div",{className:"spanDate"},"06-03-2020")),c.a.createElement("div",{className:"dayX2 dayX2pom",style:{height:"calc(".concat(306/e,"% + 3px)")}},c.a.createElement(P.a,{className:"countupX2 CountDruhehoGrafu",end:306}),c.a.createElement(P.a,{className:"countup CountDruhehoGrafu nakazeniZaDen",prefix:"+",end:1}))),a[0].tested_chart.map((function(t,a){return c.a.createElement(m,{key:a},c.a.createElement(c.a.Fragment,null,0===t.infected?c.a.createElement("div",{className:"PozitivneTestyDruhyGraf"},c.a.createElement("div",{className:"spanDate"},t.date)):c.a.createElement("div",{className:"PozitivneTestyDruhyGraf",style:{height:"calc(".concat(t.infected/e,"% + 3px)")}},c.a.createElement("div",{className:"spanDate"},t.date)),l[a]?c.a.createElement("div",{className:"dayX2",style:{height:"calc(".concat(l[a]/e,"% + 3px)")}},l[a]>99?c.a.createElement(c.a.Fragment,null,c.a.createElement(P.a,{className:"countupX2 CountDruhehoGrafu",end:l[a],style:{marginLeft:"-2px"}}),c.a.createElement(P.a,{className:"countup2 CountDruhehoGrafu nakazeniZaDen",prefix:"+",end:t.infected})):c.a.createElement(c.a.Fragment,null,c.a.createElement(P.a,{className:"countupX2 CountDruhehoGrafu",end:l[a]}),c.a.createElement(P.a,{className:"countup2 CountDruhehoGrafu nakazeniZaDen",prefix:"+",end:t.infected}))):c.a.createElement("div",{className:"dayX2",style:{height:"calc(".concat(t.tested/e,"% + 3px)")}},c.a.createElement(P.a,{className:"countupX2 CountDruhehoGrafu",end:t.tested-t.infected}),c.a.createElement(P.a,{className:"countup2 CountDruhehoGrafu nakazeniZaDen",prefix:"+",end:t.infected}))))}))),c.a.createElement("div",{className:"vysvetlivkyPodGrafom"},c.a.createElement("div",null,c.a.createElement("div",{className:"blue"}),"Po\u010det negat\xedvnych testov"),c.a.createElement("div",null,c.a.createElement("div",{className:"red"}),"Po\u010det pozit\xedvnych testov")))}()):"")};var z=function(){return c.a.createElement("div",null,c.a.createElement(T,null))},S=function(){return c.a.createElement(s.a,{basename:"/"},c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/",component:z,exact:!0}),c.a.createElement(v.a,{path:"/Covid/CovidApp",component:x}),c.a.createElement(v.a,{path:"/Covid/CovidSK",component:T}))))};l.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f696622c.chunk.js.map