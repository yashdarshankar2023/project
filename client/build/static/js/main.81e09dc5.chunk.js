(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){},173:function(e,a,t){e.exports=t(351)},180:function(e,a,t){},182:function(e,a,t){},184:function(e,a,t){},343:function(e,a,t){},346:function(e,a,t){},349:function(e,a,t){e.exports=t.p+"static/media/bed.937370d4.jpeg"},351:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(152),c=t.n(r),m=(t(180),t(182),t(23)),i=function(){return l.a.createElement("div",null,l.a.createElement("header",{id:"nav-wrapper"},l.a.createElement("nav",{id:"nav"},l.a.createElement("div",{class:"nav left"},l.a.createElement("span",{class:"gradient skew"},l.a.createElement("h1",{class:"logo un-skew"},l.a.createElement("a",{href:"#home"}))),l.a.createElement("button",{id:"menu",class:"btn-nav"},l.a.createElement("span",{class:"fas fa-bars"}))),l.a.createElement("div",{class:"nav right"},l.a.createElement(m.b,{to:"/",class:"nav-link"},l.a.createElement("span",{class:"nav-link-span"},l.a.createElement("span",{class:"u-nav"},"Home"))),l.a.createElement(m.b,{to:"/about",class:"nav-link"},l.a.createElement("span",{class:"nav-link-span"},l.a.createElement("span",{class:"u-nav"},"About Us"))),l.a.createElement(m.b,{to:"/admin",class:"nav-link"},l.a.createElement("span",{class:"nav-link-span"},l.a.createElement("span",{class:"u-nav"},"Admin")))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},u=t(8),s=(t(184),t(1)),d=(t(187),t(189),function(e){var a=l.a.useState([]),t=Object(u.a)(a,2),n=t[0],r=t[1];l.a.useEffect(function(){fetch("/api").then(function(e){return e.json()}).then(function(e){r(e)})},[]);var c=Object(s.l)();function m(e){c("/details",{state:{id:e}})}var i={_id:{$oid:"6386ff3f377dfdcf319dd8dd"},name:"hospitalA",application_id:"110011",vacancy:"32",contact:"7899216543",password:"Hospital@12345",general_bed:"10",icu_bed:"9",oxygen_bed:"12",ventilator_bed:"8",link:"https://medicaldialogues.in/h-upload/2022/08/30/184686-hospital-1.webp",general_bed_av:"3",icu_bed_av:"1",oxygen_bed_av:"2",ventilator_bed_av:"3",v_bed:"11",v_bed_av:"2"};return l.a.createElement("div",null,l.a.createElement("div",{class:"hover-table-layout"},l.a.createElement("div",{class:"listing-item"},l.a.createElement("figure",{class:"image"},l.a.createElement("img",{src:i.link,alt:"image"}),l.a.createElement("div",{class:"listing"},l.a.createElement("h4",null,i.name),l.a.createElement("h4",null,"Total :",i.vacancy),l.a.createElement("h4",null,"General : ",i.general_bed),l.a.createElement("h4",null,"Oxygen : ",i.oxygen_bed),l.a.createElement("h4",null,"ICU Bed :",i.icu_bed),l.a.createElement("h4",null,"ventilator Bed : ",i.v_bed),l.a.createElement("h4",null,l.a.createElement("button",{type:"button",class:"button",onClick:function(){return m(i)}},"Book Now"))))),l.a.createElement("div",{class:"listing-item"},l.a.createElement("figure",{class:"image"},l.a.createElement("img",{src:i.link,alt:"image"}),l.a.createElement("div",{class:"listing"},l.a.createElement("h4",null,i.name),l.a.createElement("h4",null,"Total :",i.vacancy),l.a.createElement("h4",null,"General : ",i.general_bed),l.a.createElement("h4",null,"Oxygen : ",i.oxygen_bed),l.a.createElement("h4",null,"ICU Bed :",i.icu_bed),l.a.createElement("h4",null,"ventilator Bed : ",i.v_bed),l.a.createElement("h4",null,l.a.createElement("button",{type:"button",class:"button",onClick:function(){return m(i)}},"Book Now"))))),n.map(function(e,a){return l.a.createElement("div",{class:"listing-item"},l.a.createElement("figure",{class:"image"},l.a.createElement("img",{src:e.link,alt:"image"}),l.a.createElement("div",{class:"listing"},l.a.createElement("h4",null,e.name),l.a.createElement("h4",null,"Total :",e.vacancy),l.a.createElement("h4",null,"General : ",e.general_bed),l.a.createElement("h4",null,"Oxygen : ",e.oxygen_bed),l.a.createElement("h4",null,"ICU Bed :",e.icu_bed),l.a.createElement("h4",null,"ventilator Bed : ",e.v_bed),l.a.createElement("h4",null,l.a.createElement("button",{type:"button",class:"button",onClick:function(){return m(e)}},"Book Now")))))})))}),o=(t(98),t(362)),E=t(339),b=t(111),p=t(352),v=t(358),f=t(359),h=t(360),g=t(341),A=t(342),y=t(113),w=t(353),B=t(168),_=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),r=a[0],c=a[1],m=Object(n.useState)(""),i=Object(u.a)(m,2),d=i[0],_=i[1],C=Object(n.useState)(""),X=Object(u.a)(C,2),x=X[0],F=(X[1],Object(n.useState)("")),N=Object(u.a)(F,2),P=(N[0],N[1],Object(s.i)());console.log(P.state.id.name);for(var q=[{name:"Regular Beds",value:parseInt(P.state.id.general_bed)},{name:"Oxygen Beds",value:parseInt(P.state.id.oxygen_bed)},{name:"ICU Beds",value:parseInt(P.state.id.icu_bed)},{name:"Ventilator Beds",value:parseInt(P.state.id.v_bed)}],D=["#0088FE","#00C49F","#FFBB28","#FF8042"],V=parseInt(P.state.id.general_bed),L=parseInt(P.state.id.general_bed_av),I=[],H=0;H<V;H++)I.push({key:H,value:"t"});for(H=0;H<L;H++)"t"===I[H].value&&(I[H].value="f");var O=parseInt(P.state.id.oxygen_bed),U=parseInt(P.state.id.oxygen_bed_av),j=[];for(H=0;H<O;H++)j.push({key:H,value:"t"});for(H=0;H<U;H++)"t"===j[H].value&&(j[H].value="f");var K=parseInt(P.state.id.icu_bed),Q=parseInt(P.state.id.icu_bed_av),T=[];for(H=0;H<K;H++)T.push({key:H,value:"t"});for(H=0;H<Q;H++)"t"==T[H].value&&(T[H].value="f");var k=parseInt(P.state.id.v_bed),z=parseInt(P.state.id.v_bed_av),S=[];for(H=0;H<k;H++)S.push({key:H,value:"t"});for(H=0;H<z;H++)"t"===S[H].value&&(S[H].value="f");var M=Math.PI/180,G=[{name:"Regular Beds",Total:parseInt(P.state.id.general_bed),Available:parseInt(P.state.id.general_bed_av)},{name:"Oxygen Beds",Total:parseInt(P.state.id.oxygen_bed),Available:parseInt(P.state.id.oxygen_bed_av)},{name:"ICU Beds",Total:parseInt(P.state.id.icu_bed),Available:parseInt(P.state.id.icu_bed_av)},{name:"Ventilator Beds",Total:parseInt(P.state.id.v_bed),Available:parseInt(P.state.id.v_bed_av)}],R=Object(n.useRef)();return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("br",null),l.a.createElement("h2",null,P.state.id.name),l.a.createElement("br",null),l.a.createElement("div",{className:"total_charts"},l.a.createElement("div",{className:"chart1"},l.a.createElement("br",null),l.a.createElement("h4",null,"Chart for all types of bed Available"),l.a.createElement(o.a,{width:400,height:600},l.a.createElement(E.a,{data:q,cx:"50%",cy:"35%",labelLine:!1,label:function(e){var a=e.cx,t=e.cy,n=e.midAngle,r=e.innerRadius,c=e.outerRadius,m=e.percent,i=(e.index,r+.5*(c-r)),u=a+i*Math.cos(-n*M),s=t+i*Math.sin(-n*M);return l.a.createElement("text",{x:u,y:s,fill:"white",textAnchor:u>a?"start":"end",dominantBaseline:"central"},"".concat((100*m).toFixed(0),"%"))},outerRadius:150,fill:"#8884d8",dataKey:"value"},q.map(function(e,a){return l.a.createElement(b.a,{key:"cell-".concat(a),fill:D[a%D.length]})})),l.a.createElement(p.a,null))),l.a.createElement("div",{className:"chart2"},l.a.createElement("br",null),l.a.createElement("h4",null,"Chart for Availabilty for individual beds"),l.a.createElement("br",null),l.a.createElement(v.a,{width:"100%",height:"80%"},l.a.createElement(f.a,{width:300,height:200,data:G,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(h.a,{strokeDasharray:"3 3"}),l.a.createElement(g.a,{dataKey:"name"}),l.a.createElement(A.a,null),l.a.createElement(p.a,null),l.a.createElement(y.a,null),l.a.createElement(w.a,{dataKey:"Total",fill:"lightblue"}),l.a.createElement(w.a,{dataKey:"Available",fill:"lightgreen"}))))),l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"types_charts"},l.a.createElement("div",{className:"diff_charts"},l.a.createElement("br",null),l.a.createElement("h3",null,"Regular Beds"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"bed_arrangement"},I.map(function(e){return l.a.createElement("div",{className:"bed_item"},"t"===e.value?l.a.createElement("img",{src:t(76),width:"40px"}):l.a.createElement("img",{src:t(77),width:"40px"}))})),l.a.createElement("br",null)),l.a.createElement("div",{className:"diff_charts"},l.a.createElement("br",null),l.a.createElement("h3",null,"Oxygen Beds"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"bed_arrangement"},j.map(function(e){return l.a.createElement("div",{className:"bed_item"},"t"===e.value?l.a.createElement("img",{src:t(76),width:"40px"}):l.a.createElement("img",{src:t(77),width:"40px"}))})),l.a.createElement("br",null)),l.a.createElement("div",{className:"diff_charts"},l.a.createElement("br",null),l.a.createElement("h3",null,"ICU Beds"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"bed_arrangement"},T.map(function(e){return l.a.createElement("div",{className:"bed_item"},"t"===e.value?l.a.createElement("img",{src:t(76),width:"40px"}):l.a.createElement("img",{src:t(77),width:"40px"}))})),l.a.createElement("br",null)),l.a.createElement("div",{className:"diff_charts"},l.a.createElement("br",null),l.a.createElement("h3",null,"Ventilator Beds"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"bed_arrangement"},S.map(function(e){return l.a.createElement("div",{className:"bed_item"},"t"===e.value?l.a.createElement("img",{src:t(76),width:"40px"}):l.a.createElement("img",{src:t(77),width:"40px"}))})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{className:"contact_form"},l.a.createElement("br",null),l.a.createElement("h2",null,l.a.createElement("b",null,"Book the Bed in Hospital")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{ref:R,onSubmit:function(e){e.preventDefault(),B.a.sendForm("service_zrc54nj","template_kvrs5bp",R.current,"-CTw5EdyGpJVcQ-XD").then(function(e){console.log(e.text)},function(e){console.log(e.text)});var a=P.state.id.name,t=P.state.id.oxygen_bed_av,n=P.state.id.general_bed_av,l=P.state.id.icu_bed_av,c=P.state.id.v_bed_av,m={name:r,age:d,email:x,hostname:a,oxygen:t,general:n,icu:l,ventilator:c},i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)};fetch("/regular_bed_log",i).then(function(e){return e.json()}).then(function(e){return console.log(e)}),e.target.reset()}},l.a.createElement("label",null,l.a.createElement("b",null,"Patient's Name")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Enter name",value:r,onChange:function(e){return c(e.target.value)},pattern:"[A-Za-z\\s]{1,60}",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h6",null,l.a.createElement("b",null,"Patient's Age")),l.a.createElement("input",{type:"number",placeholder:"Enter Age",id:"age",name:"age",value:d,onChange:function(e){return _(e.target.value)},min:"0",max:"100",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"hidden",name:"from_name",value:P.state.id.name}),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"radio",id:"General_Bed",name:"type_bed",value:"General Bed"}),l.a.createElement("label",{for:"General_Bed"},"General Bed"),l.a.createElement("input",{type:"radio",id:"Oxygen_Bed",name:"type_bed",value:"Oxygen Bed"}),l.a.createElement("label",{for:"Oxygen_Bed"},"Oxygen Bed"),l.a.createElement("input",{type:"radio",id:"ICU_bed",name:"type_bed",value:"ICU bed"}),l.a.createElement("label",{for:"ICU_bed"},"ICU bed"),l.a.createElement("input",{type:"radio",id:"Ventilator_bed",name:"type_bed",value:"Ventilator bed"}),l.a.createElement("label",{for:"Ventilator_bed"},"Ventilator bed"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h6",null,l.a.createElement("b",null,"Patient's Email")),l.a.createElement("input",{type:"email",name:"to_email",placeholder:"Enter Email",pattern:"[^ @]*@[^ @]*",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",class:"button"},"Submit"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))))},C=function(){var e=Object(s.i)();console.log(e.state.id.name);var a={hostname:e.state.id.name},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};fetch("/api_logs",t).then(function(e){return e.json()}).then(function(e){return console.log(e)});var n=Math.PI/180,r=[{name:"Regular Beds",value:parseInt(e.state.id.general_bed)},{name:"Oxygen Beds",value:parseInt(e.state.id.oxygen_bed)},{name:"ICU Beds",value:parseInt(e.state.id.icu_bed)},{name:"Ventilator Beds",value:parseInt(e.state.id.v_bed)}],c=["#0088FE","#00C49F","#FFBB28","#FF8042"],m=[{name:"Regular Beds",Total:parseInt(e.state.id.general_bed),Available:parseInt(e.state.id.general_bed_av)},{name:"Oxygen Beds",Total:parseInt(e.state.id.oxygen_bed),Available:parseInt(e.state.id.oxygen_bed_av)},{name:"ICU Beds",Total:parseInt(e.state.id.icu_bed),Available:parseInt(e.state.id.icu_bed_av)},{name:"Ventilator Beds",Total:parseInt(e.state.id.v_bed),Available:parseInt(e.state.id.v_bed_av)}],i=l.a.useState([]),d=Object(u.a)(i,2),B=d[0],_=d[1];return l.a.useEffect(function(){fetch("/api_logs").then(function(e){return e.json()}).then(function(e){_(e)})},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("h1",null,"Welcome to ",e.state.id.name)),l.a.createElement("hr",{style:{height:"10px"}}),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("h3",null,"Update Bed Occupation Details")),l.a.createElement("br",null),l.a.createElement("div",{className:"types_charts"},l.a.createElement("div",{className:"diff_charts"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Regular Beds"),l.a.createElement("br",null),l.a.createElement("p",null,"Current vacancy :- ",e.state.id.general_bed),l.a.createElement("form",{class:"form-container",method:"post",action:"/general_update"},l.a.createElement("input",{type:"hidden",placeholder:"Enter Name",id:"name",name:"name",value:e.state.id.name,required:!0}),l.a.createElement("input",{type:"number",placeholder:"New Vacancy",id:"vacancy",name:"vacancy",required:!0}),l.a.createElement("button",{type:"submit",class:"btn"},"Change"))),l.a.createElement("div",{className:"diff_charts"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Oxygen Beds"),l.a.createElement("br",null),l.a.createElement("p",null,"Current vacancy :- ",e.state.id.oxygen_bed),l.a.createElement("form",{class:"form-container",method:"post",action:"/oxygen_update"},l.a.createElement("input",{type:"hidden",placeholder:"Enter Name",id:"name",name:"name",value:e.state.id.name,required:!0}),l.a.createElement("input",{type:"number",placeholder:"New Vacancy",id:"vacancy",name:"vacancy",required:!0}),l.a.createElement("button",{type:"submit",class:"btn"},"Change"))),l.a.createElement("div",{className:"diff_charts"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"ICU Beds"),l.a.createElement("br",null),l.a.createElement("p",null,"Current vacancy :- ",e.state.id.icu_bed),l.a.createElement("form",{class:"form-container",method:"post",action:"/icu_update"},l.a.createElement("input",{type:"hidden",placeholder:"Enter Name",id:"name",name:"name",value:e.state.id.name,required:!0}),l.a.createElement("input",{type:"number",placeholder:"New Vacancy",id:"vacancy",name:"vacancy",required:!0}),l.a.createElement("button",{type:"submit",class:"btn"},"Change"))),l.a.createElement("div",{className:"diff_charts"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Ventilator Beds"),l.a.createElement("br",null),l.a.createElement("p",null,"Current vacancy :- ",e.state.id.v_bed),l.a.createElement("form",{class:"form-container",method:"post",action:"/ventilator_update"},l.a.createElement("input",{type:"hidden",placeholder:"Enter Name",id:"name",name:"name",value:e.state.id.name,required:!0}),l.a.createElement("input",{type:"number",placeholder:"New Vacancy",id:"vacancy",name:"vacancy",required:!0}),l.a.createElement("button",{type:"submit",class:"btn"},"Change")))),l.a.createElement("hr",{style:{height:"10px"}}),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("h3",null,"Charts")),l.a.createElement("br",null),l.a.createElement("div",{className:"total_charts"},l.a.createElement("div",{className:"chart1"},l.a.createElement("br",null),l.a.createElement("h4",null,"Chart for all types of bed Available"),l.a.createElement(o.a,{width:1e3,height:600},l.a.createElement(E.a,{data:r,cx:"30%",cy:"35%",labelLine:!1,label:function(e){var a=e.cx,t=e.cy,r=e.midAngle,c=e.innerRadius,m=e.outerRadius,i=e.percent,u=(e.index,c+.5*(m-c)),s=a+u*Math.cos(-r*n),d=t+u*Math.sin(-r*n);return l.a.createElement("text",{x:s,y:d,fill:"white",textAnchor:s>a?"start":"end",dominantBaseline:"central"},"".concat((100*i).toFixed(0),"%"))},outerRadius:150,fill:"#8884d8",dataKey:"value"},r.map(function(e,a){return l.a.createElement(b.a,{key:"cell-".concat(a),fill:c[a%c.length]})})),l.a.createElement(p.a,null))),l.a.createElement("div",{className:"chart2"},l.a.createElement("br",null),l.a.createElement("h4",null,"Chart for Availabilty for individual beds"),l.a.createElement("br",null),l.a.createElement(v.a,{width:"100%",height:"80%"},l.a.createElement(f.a,{width:300,height:200,data:m,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(h.a,{strokeDasharray:"3 3"}),l.a.createElement(g.a,{dataKey:"name"}),l.a.createElement(A.a,null),l.a.createElement(p.a,null),l.a.createElement(y.a,null),l.a.createElement(w.a,{dataKey:"Total",fill:"lightblue"}),l.a.createElement(w.a,{dataKey:"Available",fill:"lightgreen"}))))),l.a.createElement("hr",{style:{height:"10px"}}),l.a.createElement("center",null,l.a.createElement("h2",null,"Patient Logs"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Patient's Name"),l.a.createElement("th",null,"Patient's Age"))),B.map(function(e,a){return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.Name),l.a.createElement("td",null,e.Age)))}))))},X=(t(343),function(){var e=l.a.useState([]),a=Object(u.a)(e,2),t=a[0],n=a[1];return l.a.useEffect(function(){fetch("/api_logs").then(function(e){return e.json()}).then(function(e){n(e)})},[]),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Patient's Name"),l.a.createElement("th",null,"Patient's Age"),l.a.createElement("th",null,"Type of bed"))),t.map(function(e,a){return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.Name),l.a.createElement("td",null,e.Age),l.a.createElement("td",null,e.type_bed)))})))}),x=(t(112),function(){var e=Object(s.l)(),a=l.a.useState([]),t=Object(u.a)(a,2),n=t[0],r=t[1];l.a.useEffect(function(){fetch("/api").then(function(e){return e.json()}).then(function(e){r(e)})},[]);var c={_id:{$oid:"6386ff3f377dfdcf319dd8dd"},name:"hospitalA",application_id:"110011",vacancy:"32",contact:"7899216543",password:"Hospital@12345",general_bed:"10",icu_bed:"9",oxygen_bed:"12",ventilator_bed:"8",link:"https://medicaldialogues.in/h-upload/2022/08/30/184686-hospital-1.webp",general_bed_av:"3",icu_bed_av:"1",oxygen_bed_av:"2",ventilator_bed_av:"3",v_bed:"11",v_bed_av:"2"};return l.a.createElement("div",null,l.a.createElement("div",{id:"login-form-wrap"},l.a.createElement("h2",null,"Login"),l.a.createElement("form",{id:"login-form",method:"post",action:"/post"},l.a.createElement("p",null,l.a.createElement("input",{type:"text",id:"appid",name:"appid",placeholder:"Username",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"password",id:"password",name:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",placeholder:"Password",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("button",{class:"button",onClick:function(){var a=document.getElementById("appid").value,t=document.getElementById("password").value;n.map(function(n,l){n.name==a&&n.password==t&&(console.log("this"+c),e("/details_admin",{state:{id:n}}))})}},"Submit"))),l.a.createElement("div",{id:"create-account-wrap"},l.a.createElement("p",null,"Not a member? ",l.a.createElement(m.b,{to:"/signup"},"Create Account")))))}),F=function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"login-form-wrap"},l.a.createElement("h2",null,"Sign Up"),l.a.createElement("form",{id:"login-form",method:"post",action:"/signup"},l.a.createElement("p",null,l.a.createElement("input",{type:"text",id:"usernameregister",name:"usernameregister",placeholder:"Username",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"password",id:"passwordregister",name:"passwordregister",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",placeholder:"Password",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"password",id:"password1register",name:"password1register",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",placeholder:"Confirm Password",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"r_appid",name:"r_appid",min:"100000",max:"999999",placeholder:"Application ID",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"number",name:"number",pattern:"[0-9]",placeholder:"Contact",min:"7000000000",max:"9999999999",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"vacancyregister",name:"vacancyregister",pattern:"[0-9]",min:"0",max:"100000",placeholder:"Enter the total vacancy",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"generalbed",name:"generalbed",pattern:"[0-9]",min:"0",max:"100000",placeholder:"Enter total number of general bed",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"generalbedav",name:"generalbedav",pattern:"[0-9]",min:"0",max:"100000",placeholder:"Enter total number of available beds of general category",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"oxygenbed",name:"oxygenbed",pattern:"[0-9]",min:"0",max:"100000",placeholder:"Enter total number of oxygen bed",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"oxygenbedav",name:"oxygenbedav",pattern:"[0-9]",min:"0",max:"100000",placeholder:"Enter the number of oxygen bed available",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"icubed",name:"icubed",pattern:"[0-9]",min:"0",max:"100000",placeholder:"Enter total number of Icu bed",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"icubedav",name:"icubedav",pattern:"[0-9]",min:"0",max:"100000",placeholder:"Enter the number Icu bed available",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"ventilatorbed",name:"ventilatorbed",pattern:"[0-9]",min:"0",max:"100000",placeholder:"Enter the number of ventilator bed",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"number",id:"ventilatorbedav",name:"ventilatorbedav",pattern:"[0-9]",min:"0",max:"100000",placeholder:"Enter the number of ventilator bed available",required:!0}),l.a.createElement("i",{class:"validation"},l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("p",null,l.a.createElement("input",{type:"submit",id:"login",class:"button",value:"Login"}))),l.a.createElement("div",{id:"create-account-wrap"},l.a.createElement("p",null,"Already a member? ",l.a.createElement(m.b,{to:"/admin"},"Signin")))))},N=(t(346),function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"section"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"content-section"},l.a.createElement("div",{class:"title"},l.a.createElement("h1",null,"About Us")),l.a.createElement("br",null),l.a.createElement("div",{class:"content"},l.a.createElement("h2",null,"To develop a portal for detecting occupancy of beds in Hospitals"),l.a.createElement("p",null,"At the time pf pandemic/ crisis, Availability of beds in Hospitals decrease rapidly it become difficult for common people to track the Available beds in hospital This portal is created to get the information about the occupancy of bed and necessary items for the patients especially in emergency cases, this portal is created to provide quick remedy A portal will make them easy to find suitable hospitals according to situation with patient This portal makes it is easy to swift action in case of emergency and helps the patients to getimmediate healthcare."),l.a.createElement("br",null)),l.a.createElement("div",{class:"social"},l.a.createElement("a",{href:"https://www.facebook.com/AmorHospitals/"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement("a",{href:"https://twitter.com/hospitalnewscom?lang=en"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement("a",{href:"https://www.instagram.com/medicoverhospitals/?hl=en"},l.a.createElement("i",{class:"fab fa-instagram"})))),l.a.createElement("div",{class:"image-section"},l.a.createElement("img",{src:t(349)})))))});function P(){return l.a.createElement(m.a,null,l.a.createElement(i,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(d,null)}),l.a.createElement(s.a,{path:"/details",element:l.a.createElement(_,null)}),l.a.createElement(s.a,{path:"/logs",element:l.a.createElement(X,null)}),l.a.createElement(s.a,{path:"/admin",element:l.a.createElement(x,null)}),l.a.createElement(s.a,{path:"/signup",element:l.a.createElement(F,null)}),l.a.createElement(s.a,{path:"/about",element:l.a.createElement(N,null)}),l.a.createElement(s.a,{path:"/details_admin",element:l.a.createElement(C,null)})))}t.d(a,"default",function(){return P}),c.a.createRoot(document.getElementById("root")).render(l.a.createElement(P,null))},76:function(e,a,t){e.exports=t.p+"static/media/hospital-bed.0c202463.png"},77:function(e,a){e.exports="data:image/png;base64,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"},98:function(e,a,t){}},[[173,2,1]]]);
//# sourceMappingURL=main.81e09dc5.chunk.js.map