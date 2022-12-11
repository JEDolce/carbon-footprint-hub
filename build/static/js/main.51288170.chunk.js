(this["webpackJsonpcarbon-footprint"]=this["webpackJsonpcarbon-footprint"]||[]).push([[0],{188:function(e,t,c){},321:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(54),l=c.n(s),r=(c(188),c(1)),i=function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsxs)("p",{className:"copyright",children:["\xa9\xa0",Object(r.jsxs)("span",{id:"date",style:{fontSize:"0.75rem"},children:[(new Date).getFullYear(),"\xa0"]}),"JEDolce para HUB 2030 S.R.L - Todos los derechos reservados"]})})},o=c(8),d=function(){var e=Object(o.l)();return Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navContainer",children:[Object(r.jsx)("div",{className:"logoContainer",children:Object(r.jsx)("img",{src:"http://hub2030.com/wp-content/uploads/2022/09/HUB_Logo_azul.png",alt:"logo"})}),Object(r.jsxs)("h1",{children:["Calculadora de Huella de CO",Object(r.jsx)("span",{style:{fontSize:"1rem"},children:"2"})]}),Object(r.jsxs)("div",{className:"linksContainer",children:[Object(r.jsx)("span",{className:"navItem",onClick:function(){return e("/")},children:"Informaci\xf3n"}),Object(r.jsx)("span",{className:"navItem",children:"Login"})]})]})})},j=function(){var e=Object(o.l)();return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"card",style:{alignItems:"center",padding:"2rem",minWidth:"40rem",lineHeight:"1.5rem"},children:[Object(r.jsx)("h2",{children:"Informaci\xf3n sobre el c\xe1lculo de Huella"}),Object(r.jsxs)("p",{children:["La huella de carbono es un indicador que mide la cantidad total de gases de efecto invernadero (GEI) que son generados por ciertas actividades. Estos gases incluyen dioxido de carbono (CO",Object(r.jsx)("span",{style:{fontSize:"0.6rem"},children:"2"}),"), metano (CH",Object(r.jsx)("span",{style:{fontSize:"0.6rem"},children:"4"}),") y \xf3xido nitroso (N",Object(r.jsx)("span",{style:{fontSize:"0.6rem"},children:"2"}),"O), entre otros. Conociendo el tama\xf1o de la huella, es posible dise\xf1ar e implementar una estrategia adecuada de reducci\xf3n o compensaci\xf3n de emisiones, que permita descarbonizar operaciones y mitigar el impacto ambiental de una organizaci\xf3n."]}),Object(r.jsxs)("p",{children:["Los est\xe1ndares m\xe1s utilizados para medir la huella de carbono de una organizaci\xf3n son el ",Object(r.jsx)("b",{children:"GHG Protocol"})," y la norma ",Object(r.jsx)("b",{children:"ISO 14064-1"}),"."]}),Object(r.jsx)("p",{children:"Esta calculadora tiene por objetivo proporcionar una estimaci\xf3n de la huella de carbono, a trav\xe9s de la aplicaci\xf3n de los conceptos fundamentales establecidos en los est\xe1ndares mencionados anteriormente."}),Object(r.jsx)("button",{onClick:function(){return e("/form")},style:{marginTop:"1.5rem"},children:"Comenzar"})]})})})},b=c(9),h=c(18),m=c(22),u=[{id:1,name:"gas",type:"text",placeholder:"Consumo de Gas Natural en m3",label:"Gas Natural",co2:2.01193,ch4:.00274,n2o:.00107},{id:2,name:"gasoil",type:"text",placeholder:"Consumo de Gasoil en L",label:"Gasoil",co2:2.52058,ch4:26e-5,n2o:.037},{id:3,name:"nafta",type:"text",placeholder:"Consumo de Nafta en L",label:"Nafta",co2:2.14805,ch4:.0072,n2o:.0066},{id:4,name:"fueloil",type:"text",placeholder:"Consumo de Fueloil en L",label:"Fueloil",co2:3.16262,ch4:.00473,n2o:.00788},{id:5,name:"lpg",type:"text",placeholder:"Consumo de LPG en kg",label:"LPG",co2:2.93518,ch4:.00228,n2o:.00183},{id:6,name:"r22",type:"text",placeholder:"Refill R22 en Kg",label:"R22",co2:1810,ch4:0,n2o:0},{id:7,name:"r134",type:"text",placeholder:"Refill R134 en Kg",label:"R134",co2:1100,ch4:0,n2o:0},{id:8,name:"r407c",type:"text",placeholder:"Refill R407c en Kg",label:"R407c",co2:1774,ch4:0,n2o:0},{id:9,name:"r410a",type:"text",placeholder:"Refill R410a en Kg",label:"R410a",co2:2088,ch4:0,n2o:0},{id:10,name:"r141b",type:"text",placeholder:"Refill R141b en Kg",label:"R141b ",co2:725,ch4:0,n2o:0},{id:11,name:"electricidad",type:"text",placeholder:"Consumo Electrico en kWh",label:"Electricidad",co2:.19121,ch4:8e-4,n2o:.00137},{id:12,name:"vapor",type:"text",placeholder:"Consumo de Vapor en m3",label:"Vapor",co2:1,ch4:0,n2o:0},{id:13,name:"home",type:"text",placeholder:"Horas de Home Office",label:"Home Office",co2:.34075,ch4:0,n2o:0},{id:14,name:"traslados",type:"text",placeholder:"Consumo de Nafta por Transporte Privado",label:"Transporte Privado",co2:1,ch4:0,n2o:0},{id:15,name:"publico",type:"text",placeholder:"km Recorridos en Transporte Publico",label:"Transporte Publico",co2:1,ch4:0,n2o:0},{id:16,name:"cabotaje",type:"text",placeholder:"km Recorridos en Vuelos de Cabojate",label:"Vuelos Cabojate",co2:1,ch4:0,n2o:0},{id:17,name:"internacional",type:"text",placeholder:"km Recorridos en Vuelos Internacionales",label:"Vuelos Internacionales",co2:1,ch4:0,n2o:0},{id:18,name:"alojamiento",type:"text",placeholder:"Noches de Hotel",label:"Alojamiento",co2:1,ch4:0,n2o:0},{id:19,name:"terrestre",type:"text",placeholder:"km de Flete Terrestre",label:"Flete Terrestre",co2:1,ch4:0,n2o:0},{id:20,name:"maritimo",type:"text",placeholder:"km de Flete Mar\xedtimo/Aereo",label:"Flete Mar\xedtimo/Aereo",co2:1,ch4:0,n2o:0},{id:21,name:"agua",type:"text",placeholder:"m3 de Agua Consumida",label:"Agua Corriente",co2:1,ch4:0,n2o:0},{id:22,name:"tratamiento",type:"text",placeholder:"m3 de Agua Tratada",label:"Agua Tratada",co2:1,ch4:0,n2o:0},{id:23,name:"residuos",type:"text",placeholder:"kg de Residuos",label:"Residuos",co2:1,ch4:0,n2o:0}],O=function(e){var t=e.scopeState,c=e.setScopeState;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"step-title",children:"Alcance 1"}),Object(r.jsxs)("div",{className:"cardContainer",style:{display:"flex"},children:[Object(r.jsxs)("div",{className:"cardLeft",style:{flex:2,lineHeight:"1.5rem",margin:"1rem 1.5rem 1rem 0"},children:[Object(r.jsx)("b",{children:"Emisiones directas de GEI"}),Object(r.jsx)("p",{children:"Emisiones provenientes de fuentes que son propiedad o est\xe1n controladas por la empresa, es decir, dentro de los l\xedmites de la organizaci\xf3n. Por ejemplo, las emisiones generadas por la quema de combustibles en veh\xedculos propiedad de la organizaci\xf3n."}),Object(r.jsx)("p",{style:{margin:0,alignSelf:"start"},children:"Incluye:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Combustibles"}),Object(r.jsx)("li",{children:"Refrigerantes"}),Object(r.jsx)("li",{children:"Actividades Agr\xedcolas"})]})]}),Object(r.jsx)("div",{className:"cardCenter",children:Object(r.jsx)("div",{className:"line"})}),Object(r.jsxs)("div",{className:"cardRight",style:{flex:3,margin:"1rem 0 1rem 1.5rem"},children:[Object(r.jsx)("h3",{children:"Combustibles"}),u.map((function(e){return e.id>0&&e.id<6&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"inputsContainer",children:[Object(r.jsx)("label",{children:e.label}),Object(r.jsx)("input",Object(m.a)(Object(m.a)({},e),{},{type:e.type,placeholder:e.placeholder,value:t[e.name],onChange:function(e){return c(Object(m.a)(Object(m.a)({},t),{},Object(h.a)({},e.target.name,e.target.value)))}}))]},e.id)})}))]}),Object(r.jsx)("div",{className:"cardCenter",children:Object(r.jsx)("div",{className:"line"})}),Object(r.jsxs)("div",{className:"cardRight",style:{flex:3,margin:"1rem 0 1rem 1.5rem"},children:[Object(r.jsx)("h3",{children:"Refrigerantes"}),u.map((function(e){return e.id>5&&e.id<11&&Object(r.jsxs)("div",{className:"inputsContainer",children:[Object(r.jsx)("label",{children:e.label}),Object(r.jsx)("input",Object(m.a)(Object(m.a)({},e),{},{type:e.type,placeholder:e.placeholder,value:t[e.name],onChange:function(e){return c(Object(m.a)(Object(m.a)({},t),{},Object(h.a)({},e.target.name,e.target.value)))}}))]},e.id)}))]})]})]})},p=function(e){var t=e.scopeState,c=e.setScopeState;return Object(r.jsxs)("div",{className:"card",style:{minWidth:"40rem"},children:[Object(r.jsx)("div",{className:"step-title",children:"Alcance 2"}),Object(r.jsxs)("div",{className:"cardContainer",style:{display:"flex"},children:[Object(r.jsxs)("div",{className:"cardLeft",style:{flex:2,lineHeight:"1.5rem",margin:"1rem 1.5rem 1rem 0"},children:[Object(r.jsx)("b",{children:"Emisiones indirectas de GEI"}),Object(r.jsx)("p",{children:"Emisiones provenientes de la generaci\xf3n de energ\xeda comprada, en forma de electricidad, calor o vapor; que es utiliza por la organizaci\xf3n."})]}),Object(r.jsx)("div",{className:"cardCenter",children:Object(r.jsx)("div",{className:"line"})}),Object(r.jsx)("div",{className:"cardRight",style:{flex:3,margin:"1rem 0 1rem 1.5rem"},children:u.map((function(e){return e.id>10&&e.id<13&&Object(r.jsxs)("div",{className:"inputsContainer",children:[Object(r.jsx)("label",{children:e.label}),Object(r.jsx)("input",Object(m.a)(Object(m.a)({},e),{},{type:e.type,placeholder:e.placeholder,value:t[e.name],onChange:function(e){return c(Object(m.a)(Object(m.a)({},t),{},Object(h.a)({},e.target.name,e.target.value)))}}))]},e.id)}))})]})]})},x=function(e){var t=e.scopeState,c=e.setScopeState;return Object(r.jsxs)("div",{className:"card",style:{minWidth:"72rem"},children:[Object(r.jsx)("div",{className:"step-title",children:"Alcance 3"}),Object(r.jsxs)("div",{className:"cardContainer",style:{display:"flex"},children:[Object(r.jsxs)("div",{className:"cardLeft",style:{flex:2,lineHeight:"1.5rem",margin:"1rem 1.5rem 1rem 0"},children:[Object(r.jsx)("b",{children:"Otras Emisiones indirectas de GEI"}),Object(r.jsx)("p",{children:"Emisiones que ocurren debido a las actividades de la organizaci\xf3n, pero que se generan a partir de fuentes que no son de su propiedad ni control, por ejemplo, viajes a\xe9reos."}),Object(r.jsx)("p",{style:{margin:0,alignSelf:"start"},children:"Incluye:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Transporte"}),Object(r.jsx)("li",{children:"Trabajo remoto / Home Office"}),Object(r.jsx)("li",{children:"Viajes"}),Object(r.jsx)("li",{children:"Estadias de hotel"}),Object(r.jsx)("li",{children:"Fletes"}),Object(r.jsx)("li",{children:"Tratamiento de agua"}),Object(r.jsx)("li",{children:"Residuos"})]})]}),Object(r.jsx)("div",{className:"cardCenter",children:Object(r.jsx)("div",{className:"line"})}),Object(r.jsx)("div",{className:"cardRight",style:{flex:3,margin:"1rem 0 1rem 0"},children:u.map((function(e){return e.id>12&&e.id<19&&Object(r.jsxs)("div",{className:"inputsContainer",children:[Object(r.jsx)("label",{children:e.label}),Object(r.jsx)("input",Object(m.a)(Object(m.a)({},e),{},{type:e.type,placeholder:e.placeholder,value:t[e.name],onChange:function(e){return c(Object(m.a)(Object(m.a)({},t),{},Object(h.a)({},e.target.name,e.target.value)))}}))]},e.id)}))}),Object(r.jsx)("div",{className:"cardCenter",children:Object(r.jsx)("div",{className:"line"})}),Object(r.jsx)("div",{className:"cardRight",style:{flex:3,margin:"1rem 0 1rem 0"},children:u.map((function(e){return e.id>18&&Object(r.jsxs)("div",{className:"inputsContainer",children:[Object(r.jsx)("label",{children:e.label}),Object(r.jsx)("input",Object(m.a)(Object(m.a)({},e),{},{type:e.type,placeholder:e.placeholder,value:t[e.name],onChange:function(e){return c(Object(m.a)(Object(m.a)({},t),{},Object(h.a)({},e.target.name,e.target.value)))}}))]},e.id)}))})]})]})},v=c(42);function f(e){var t=e.props,c=t.page,a=t.setPage,n=t.compList,s=t.scopeState;return Object(r.jsxs)("div",{className:"button-area",children:[c>0&&Object(r.jsx)("button",{onClick:function(){return a(c-1)},children:"Back"}),c<n.length-1&&Object(r.jsx)("button",{onClick:function(){return a(c+1)},children:"Next"}),c===n.length-1&&Object(r.jsx)("div",{className:"link",children:Object(r.jsx)(v.b,{to:"/results",state:{scopeState:s},style:{textDecoration:"none",color:"white"},children:"Calcular Huella"})})]})}var g=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(u),l=Object(b.a)(s,2),i=l[0],o=l[1],d=[Object(r.jsx)(O,{scopeState:i,setScopeState:o}),Object(r.jsx)(p,{scopeState:i,setScopeState:o}),Object(r.jsx)(x,{scopeState:i,setScopeState:o})];return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{children:d[c]}),Object(r.jsx)(f,{props:{page:c,setPage:n,compList:d,scopeState:i}})]})})},y=[[u[0].co2,u[0].ch4,u[0].n2o],[u[1].co2,u[1].ch4,u[1].n2o],[u[2].co2,u[2].ch4,u[2].n2o],[u[3].co2,u[3].ch4,u[3].n2o],[u[4].co2,u[4].ch4,u[4].n2o],[u[5].co2,u[5].ch4,u[5].n2o],[u[6].co2,u[6].ch4,u[6].n2o],[u[7].co2,u[7].ch4,u[7].n2o],[u[8].co2,u[8].ch4,u[8].n2o],[u[9].co2,u[9].ch4,u[9].n2o],[u[10].co2,u[10].ch4,u[10].n2o],[u[11].co2,u[11].ch4,u[11].n2o],[u[12].co2,u[12].ch4,u[12].n2o],[u[13].co2,u[13].ch4,u[13].n2o],[u[14].co2,u[14].ch4,u[14].n2o],[u[15].co2,u[15].ch4,u[15].n2o],[u[16].co2,u[16].ch4,u[16].n2o],[u[17].co2,u[17].ch4,u[17].n2o],[u[18].co2,u[18].ch4,u[18].n2o],[u[19].co2,u[19].ch4,u[19].n2o],[u[20].co2,u[20].ch4,u[20].n2o],[u[21].co2,u[21].ch4,u[21].n2o],[u[22].co2,u[22].ch4,u[22].n2o]],N=c(329),R=c(169),C=c(98),S=c(77),k=["#78909C","#595959","#045E85"];function E(e){var t=e.scopes,c=[{name:"Alcance 1",value:t[0]},{name:"Alcance 2",value:t[1]},{name:"Alcance 3",value:t[2]}];return Object(r.jsx)("div",{className:"chart",children:Object(r.jsxs)(N.a,{width:400,height:300,onMouseEnter:a.PureComponent.onPieEnter,children:[Object(r.jsx)(R.a,{data:c,cx:"center",cy:"center",innerRadius:60,outerRadius:80,fill:"#8884d8",paddingAngle:5,dataKey:"value",children:c.map((function(e,t){return Object(r.jsx)(C.a,{fill:k[t%k.length]},"cell-".concat(t))}))}),Object(r.jsx)(S.a,{})]})})}var z=c(325),A=c(326),F=c(327),H=c(175),I=c(176),L=c(81),T=c(178);function G(e){var t=e.sortedObj,c=[{name:Object.keys(t)[0],Fuente:Object.values(t)[0],amt:2400},{name:Object.keys(t)[1],Fuente:Object.values(t)[1],amt:2400},{name:Object.keys(t)[2],Fuente:Object.values(t)[2],amt:2400},{name:Object.keys(t)[3],Fuente:Object.values(t)[3],amt:2400},{name:Object.keys(t)[4],Fuente:Object.values(t)[4],amt:2400},{name:Object.keys(t)[5],Fuente:Object.values(t)[5],amt:2400},{name:Object.keys(t)[6],Fuente:Object.values(t)[6],amt:2400},{name:Object.keys(t)[7],Fuente:Object.values(t)[7],amt:2400}];return Object(r.jsx)(z.a,{width:"100%",height:"100%",children:Object(r.jsx)("div",{className:"chart",children:Object(r.jsxs)(A.a,{width:800,height:300,data:c,margin:{top:10,right:30,left:20,bottom:5},children:[Object(r.jsx)(F.a,{strokeDasharray:"3 3"}),Object(r.jsx)(H.a,{dataKey:"name"}),Object(r.jsx)(I.a,{}),Object(r.jsx)(L.a,{}),Object(r.jsx)(S.a,{}),Object(r.jsx)(T.a,{dataKey:"Fuente",fill:"#78909C"})]})})})}var P=function(){var e=Object(o.j)().state.scopeState,t=[e.gas,e.gasoil,e.nafta,e.fueloil,e.lpg,e.r22,e.r134,e.r407c,e.r410a,e.r141b,e.electricidad,e.vapor,e.home,e.traslados,e.publico,e.cabotaje,e.internacional,e.alojamiento,e.terrestre,e.maritimo,e.agua,e.tratamiento,e.residuos],c={gasResult:[],gasoilResult:[],naftaResult:[],fueloilResult:[],lpgResult:[],r22Result:[],r134Result:[],r407cResult:[],r410aResult:[],r141bResult:[],electricResult:[],vaporResult:[],homeResult:[],trasladosResult:[],publicoResult:[],cabotajeResult:[],interResult:[],hotelResult:[],terrestreResult:[],maritimoResult:[],aguaResult:[],tratResult:[],residuosResult:[]},a=[],n=0,s=0,l=0,i=0;y.forEach((function(e){!function(e,t,c,a){e.map((function(e){return t[Object.keys(t)[a]].push(Math.round(e*c[a]*100)/100)}))}(e,c,t,i),a[i]=function(e,t){return t[Object.keys(t)[e]].reduce((function(e,t){return Math.round(100*(e+t))/100}),0)}(i,c),i++}));for(var d={Gas:a[0],Gasoil:a[1],Nafta:a[2],Fueloil:a[3],Lpg:a[4],R22:a[5],R134:a[6],R407c:a[7],R410a:a[8],R141b:a[9],Electricidad:a[10],Vapor:a[11],"Home Office":a[12],Traslados:a[13],"Transp. Publico":a[14],Cabotaje:a[15],"Vuelos Internac.":a[16],Hotel:a[17],"F. Terrestre":a[18],"F. Maritimo":a[19],Agua:a[20],Efluentes:a[21],Residuos:a[22]},j=0;j<10;j++)n+=a[j];for(var O=10;O<12;O++)s+=a[O];for(var p=12;p<a.length-1;p++)l+=a[p];var x=[n,s,l];[].concat(a).sort((function(e,t){return e>t?-1:e<t?1:0}));var f=Object.entries(d).sort((function(e,t){var c=Object(b.a)(e,2)[1];return Object(b.a)(t,2)[1]-c})).reduce((function(e,t){var c=Object(b.a)(t,2),a=c[0],n=c[1];return Object(m.a)(Object(m.a)({},e),{},Object(h.a)({},a,n))}),{});return Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)("div",{className:"left",children:Object(r.jsxs)("div",{className:"resultContainer",children:[Object(r.jsxs)("div",{style:{padding:"1rem 1rem 1rem 2rem"},children:[Object(r.jsx)("h2",{children:"Resultados"}),Object(r.jsx)("p",{children:"Su huella de carbono es de:"}),Object(r.jsxs)("h2",{style:{textAlign:"center",margin:"2rem"},children:[Object.values(a).reduce((function(e,t){return Math.round(100*(e+t))/100}),0)," kg CO",Object(r.jsx)("span",{style:{fontSize:"1rem"},children:"2e"})]}),Object(r.jsx)("p",{children:"Resultados por alcance:"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Alcance 1: \xa0",Math.round(100*n)/100," kg CO",Object(r.jsx)("span",{style:{fontSize:"0.6rem"},children:"2e"})]}),Object(r.jsxs)("li",{children:["Alcance 2: \xa0",Math.round(100*s)/100," kg CO",Object(r.jsx)("span",{style:{fontSize:"0.6rem"},children:"2e"})]}),Object(r.jsxs)("li",{children:["Alcance 3: \xa0",Math.round(100*l)/100," kg CO",Object(r.jsx)("span",{style:{fontSize:"0.6rem"},children:"2e"})]})]})]}),Object(r.jsx)("div",{className:"link recalcBtn",children:Object(r.jsx)(v.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"Calcular Nuevamente"})})]})}),Object(r.jsxs)("div",{className:"right",children:[Object(r.jsxs)("div",{className:"up",style:{display:"flex"},children:[Object(r.jsx)(E,{style:{flex:1},scopes:x}),Object(r.jsx)(G,{style:{flex:1},sortedObj:f})]}),Object(r.jsx)("div",{className:"down",children:Object(r.jsxs)("div",{className:"chart",children:[Object(r.jsx)("h3",{children:"Emisiones de GEI de sus actividades:"}),Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Componente"}),Object(r.jsxs)("th",{children:["Emisiones CO",Object(r.jsx)("span",{style:{fontSize:"0.75rem"},children:"2e"})]}),Object(r.jsxs)("th",{children:["Emisiones CO",Object(r.jsx)("span",{style:{fontSize:"0.75rem"},children:"2"})]}),Object(r.jsxs)("th",{children:["Emisiones CH",Object(r.jsx)("span",{style:{fontSize:"0.75rem"},children:"4"})]}),Object(r.jsxs)("th",{children:["Emisiones N",Object(r.jsx)("span",{style:{fontSize:"0.75rem"},children:"2"}),"O"]})]}),u.map((function(e){return e.id<8&&Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{textAlign:"left"},children:e.label}),Object(r.jsx)("td",{style:{fontWeight:"bold"},children:Object.values(a)[e.id-1]}),Object(r.jsx)("td",{children:Object.values(c)[e.id-1][0]}),Object(r.jsx)("td",{children:Object.values(c)[e.id-1][1]}),Object(r.jsx)("td",{children:Object.values(c)[e.id-1][2]})]},e.id)}))]})})]})})]})]})};var M=function(){return Object(r.jsxs)(v.a,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/",element:Object(r.jsx)(j,{})}),Object(r.jsx)(o.a,{path:"/form",element:Object(r.jsx)(g,{})}),Object(r.jsx)(o.a,{path:"/results",element:Object(r.jsx)(P,{})})]}),Object(r.jsx)(i,{})]})};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(M,{})}),document.getElementById("root"))}},[[321,1,2]]]);
//# sourceMappingURL=main.51288170.chunk.js.map