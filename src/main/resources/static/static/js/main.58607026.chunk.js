(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(24),r=a.n(s),i=a(5),l=a(6),o=a(8),d=a(7),j=a(4),b=a(9),h=a(11),u=(a(54),a(19)),p=a(42),m=a(3),O="GET_ERRORS",x="GET_DOCTORS",v="GET_DOCTOR",f="GET_PATIENT_SAVE",N="GET_QUEUE",g="GET_TOKEN",y="GET_DOCTOR_TABLE",k="GET_QUEUE_TABLE",w={doctors:[],doctor:{}};var C={errors:{}};var T={patient:{},queue:[]};var E={token:[],validToken:!1};var _={tables:[],user:{}};var S=Object(u.c)({doctors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(m.a)(Object(m.a)({},e),{},{doctors:t.payload});case v:return Object(m.a)(Object(m.a)({},e),{},{doctor:t.payload});default:return e}},patient:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(m.a)(Object(m.a)({},e),{},{patient:t.payload});case N:return Object(m.a)(Object(m.a)({},e),{},{queue:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(m.a)(Object(m.a)({},e),{},{errors:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(m.a)(Object(m.a)({},e),{},{token:t.payload,validToken:!!t.payload});default:return e}},tables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(m.a)(Object(m.a)({},e),{},{tables:t.payload.tables,user:t.payload.user});case k:return Object(m.a)(Object(m.a)({},e),{},{tables:t.payload});default:return e}}}),D={},R=[p.a],A=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),q=window.navigator.userAgent.includes("Chrome")&&A?Object(u.e)(S,D,Object(u.d)(u.a.apply(void 0,R),A)):Object(u.e)(S,D,Object(u.d)(u.a.apply(void 0,R))),I=a(10),P=a.n(I),B=a(17),L=a(13),U=a.n(L),F=function(){return function(){var e=Object(B.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("https://clinic-react-spring.herokuapp.com/api/doctor");case 2:a=e.sent,console.log(a);try{t({type:y,payload:a.data.body})}catch(n){t({type:O,payload:n.data})}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=a(0);function Q(){return Object(M.jsxs)("div",{className:"footer",children:[Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)("div",{className:"education",children:[Object(M.jsx)("div",{className:"clinic",children:"Clinic_Name"}),Object(M.jsxs)("div",{className:"footer-ul",children:[Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{className:"avtive",children:"About us"}),Object(M.jsx)("li",{children:"Doctors"}),Object(M.jsx)("li",{children:"Payment"}),Object(M.jsx)("li",{children:"wffhrieuf"})]}),Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{className:"avtive",children:"About us"}),Object(M.jsx)("li",{children:"Doctors"}),Object(M.jsx)("li",{children:"Payment"}),Object(M.jsx)("li",{children:"wffhrieuf"})]}),Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{className:"avtive",children:"About us"}),Object(M.jsx)("li",{children:"Doctors"}),Object(M.jsx)("li",{children:"Payment"}),Object(M.jsx)("li",{children:"wffhrieuf"})]})]})]})}),Object(M.jsx)("div",{className:"reserve",children:"All service reserved || 2021-2021"})]})}var W=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.doctor;return Object(M.jsxs)("div",{className:"card",children:[Object(M.jsx)("img",{className:"card-img-top",src:"/images/3.jpg",alt:"rasm topilmadi"}),Object(M.jsxs)("div",{className:"card-body",children:[Object(M.jsx)("p",{className:"job",children:e.speciality}),Object(M.jsxs)("p",{className:"card-title",children:[e.firstName," ",e.lastName]}),Object(M.jsx)(j.b,{to:"/listRegister/".concat(e.id),className:"btn btn-primary",children:"Qabulga yozilish"})]})]})}}]),a}(n.Component),G=(a(78),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(M.jsxs)("nav",{className:"navbar navbar-dark",children:[Object(M.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Name"}),Object(M.jsxs)("ul",{className:"navbar-nav",children:[Object(M.jsx)("li",{className:"nav-item first",children:Object(M.jsxs)(j.b,{className:"nav-link",to:"#",children:[Object(M.jsx)("i",{className:"fa fa-phone"}),"9387458324"]})}),Object(M.jsx)("li",{className:"nav-item",children:Object(M.jsxs)(j.b,{className:"nav-link",to:"#",children:[Object(M.jsx)("i",{className:"fa fa-phone"}),"1003"]})}),Object(M.jsx)("li",{className:"nav-item",children:Object(M.jsx)(j.b,{className:"nav-link",to:"#",children:"Rus"})}),Object(M.jsx)("li",{className:"nav-item",children:Object(M.jsx)(j.b,{className:"nav-link",to:"#",children:"Uzb"})}),Object(M.jsx)("li",{className:"nav-item",children:Object(M.jsx)(j.b,{className:"nav-link",to:"/login",children:"Login"})})]})]})}}]),a}(n.Component)),V=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllDoctors()}},{key:"render",value:function(){var e=this.props.doctors.doctors;return Object(M.jsxs)("div",{className:"container-fuild",children:[Object(M.jsxs)("div",{className:"container",children:[Object(M.jsx)(G,{}),Object(M.jsxs)("div",{className:"header",children:[Object(M.jsxs)("div",{className:"lorem",children:[Object(M.jsx)("h1",{children:"Lorem Ipsum"}),Object(M.jsx)("p",{children:"Lorem ipsum is simvefsoivov ornibnu nirunb nirutun unrtub eoubviru nrtuparghru rtubirtoj rt rpotjhtr jortjhoitbj erthbu tijriubhiu retpu jrotjoitrj rotiohegorij rotigjoergjpo jrotjo"})]}),Object(M.jsx)("div",{className:"cards",children:e.filter((function(e){return"admin"!==e.roles[0].roleName})).map((function(e){return Object(M.jsx)(W,{doctor:e},e.id)}))})]})]}),Object(M.jsx)(Q,{})]})}}]),a}(n.Component),z=Object(h.b)((function(e){return{doctors:e.doctors}}),{getAllDoctors:function(){return function(){var e=Object(B.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("https://clinic-react-spring.herokuapp.com/api/user");case 2:a=e.sent,t({type:x,payload:a.data.body});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(V),X=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(M.jsx)("div",{children:Object(M.jsx)("h1",{className:"event-danger text-center",children:"Something is wrong!!"})})}}]),a}(n.Component),J=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(M.jsx)("div",{children:"Not Found"})}}]),a}(n.Component),K=a(22),H=a(20),Y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={firstName:"",lastName:"",phone:""},e.onChange=e.onChange.bind(Object(H.a)(e)),e.onSubmit=e.onSubmit.bind(Object(H.a)(e)),e}return Object(l.a)(a,[{key:"onChange",value:function(e){this.setState(Object(K.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={firstName:this.state.firstName,lastName:this.state.lastName,phone:this.state.phone,doctorId:this.props.data.id};this.props.addPatient(t,this.props.history)}},{key:"render",value:function(){var e=this.props.patient.queue,t=e.length;return Object(M.jsxs)("div",{className:"list",children:[Object(M.jsx)("p",{children:"Toshkent viloyat xususiy klinika stomotologi"}),Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-md-4",children:Object(M.jsx)("img",{className:"img",src:"/images/sullivan.jpg",alt:"rasm topilmadi"})}),Object(M.jsx)("div",{className:"col-md-8",children:Object(M.jsxs)("p",{className:"fullName",children:[this.props.data.firstName," ",this.props.data.lastName," ",this.props.data.middleName]})})]}),Object(M.jsxs)("div",{className:"row",children:[Object(M.jsxs)("div",{className:"col",children:[Object(M.jsxs)("p",{className:"job",children:[Object(M.jsx)("b",{children:"Mutaxasisligi:"}),this.props.data.speciality]}),Object(M.jsxs)("p",{className:"job",children:[Object(M.jsx)("b",{children:"O'quv yo'nalishi"})," ",this.props.data.speciality]}),Object(M.jsxs)("p",{className:"job",children:[Object(M.jsx)("b",{children:"O'quv yo'nalishi"})," ",this.props.data.speciality]})]}),Object(M.jsx)("div",{className:"col",children:Object(M.jsx)(j.b,{to:"/",className:"btn btn-success",children:"Boshqa bo'lim tanlash"})})]}),Object(M.jsx)("div",{className:"row",children:Object(M.jsx)("div",{className:"col-md-12",children:Object(M.jsx)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#myModal",children:"Ro'yhatga yozilish"})})}),Object(M.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(M.jsx)("div",{className:"col-md-4 mb-4",children:Object(M.jsxs)("p",{className:"btn-green index",children:[t+1,")",e.id]})},e.id)}))}),Object(M.jsx)("div",{className:"modal",id:"submit",children:Object(M.jsx)("div",{className:"modal-dialog",children:Object(M.jsx)("div",{className:"modal-content",children:Object(M.jsx)("div",{className:"modal-body",children:Object(M.jsxs)("form",{className:"needs-validation",children:[Object(M.jsxs)("p",{children:[Object(M.jsx)("div",{style:{width:"200px",display:"inline-block"},children:"Ism:"})," ",Object(M.jsx)("strong",{children:this.state.firstName})," "]}),Object(M.jsxs)("p",{children:[Object(M.jsx)("div",{style:{width:"200px",display:"inline-block"},children:"Familiya:"})," ",Object(M.jsx)("strong",{children:this.state.lastName})," "]}),Object(M.jsxs)("p",{children:[Object(M.jsx)("div",{style:{width:"200px",display:"inline-block"},children:"Tel-raqam:"})," ",Object(M.jsx)("strong",{children:this.state.phone})," "]}),Object(M.jsxs)("p",{children:[Object(M.jsx)("div",{style:{width:"200px",display:"inline-block"},children:"Price:"})," ",Object(M.jsx)("strong",{children:this.props.data.price})," "]}),Object(M.jsxs)("p",{children:[Object(M.jsx)("div",{style:{width:"200px",display:"inline-block"},children:"navbat:"})," ",Object(M.jsx)("strong",{children:t+1})," "]}),Object(M.jsxs)("p",{children:[Object(M.jsx)("div",{style:{width:"200px",display:"inline-block"},children:"Id-raqam:"})," ",Object(M.jsx)("strong",{children:this.props.data.id})," "]}),Object(M.jsx)("div",{className:"col-md-12",children:Object(M.jsx)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-dismiss":"modal",onClick:this.onSubmit,children:"Tasdiqlash"})})]})})})})}),Object(M.jsx)("div",{className:"modal",id:"myModal",children:Object(M.jsx)("div",{className:"modal-dialog",children:Object(M.jsxs)("div",{className:"modal-content",children:[Object(M.jsx)("div",{className:"modal-body",children:Object(M.jsxs)("form",{className:"needs-validation",children:[Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"First Name:"}),Object(M.jsx)("input",{type:"text",className:"form-control",id:"uname",placeholder:"Enter firstName",name:"firstName",onChange:this.onChange}),Object(M.jsx)("div",{className:"valid-feedback",children:"Valid."}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Last Name:"}),Object(M.jsx)("input",{type:"text",className:"form-control",id:"pwd",placeholder:"Enter lastName",name:"lastName",onChange:this.onChange}),Object(M.jsx)("div",{className:"valid-feedback",children:"Valid."}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Phone number:"}),Object(M.jsx)("input",{type:"text",className:"form-control",id:"phone",placeholder:"+998936667205",name:"phone",onChange:this.onChange}),Object(M.jsx)("div",{className:"valid-feedback",children:"Valid."}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(M.jsx)("div",{className:"col-md-12",children:Object(M.jsx)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#submit","data-dismiss":"modal",children:"Ro'yhatga yozilish"})})]})}),Object(M.jsx)("div",{className:"modal-footer",children:Object(M.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",children:"Close"})})]})})})]})}}]),a}(n.Component),Z=Object(h.b)((function(e){return{patient:e.patient,errors:e.errors}}),{addPatient:function(e,t){return function(){var a=Object(B.a)(P.a.mark((function a(n){var c;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U.a.post("https://clinic-react-spring.herokuapp.com/api/patient",e);case 2:return c=a.sent,a.prev=3,n({type:f,payload:c.data.body}),a.next=7,t.push("/listRegister/".concat(e.doctorId));case 7:console.log("/listRegister/".concat(e.doctorId)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),n({type:O,payload:a.t0.data});case 13:case 14:case"end":return a.stop()}}),a,null,[[3,10]])})));return function(e){return a.apply(this,arguments)}}()}})(Y),$=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getDoctor(e),this.props.getQueue(e)}},{key:"render",value:function(){var e=this.props,t=e.queue,a=e.doctor;return Object(M.jsxs)("div",{className:"container-fuild bg",children:[Object(M.jsx)(G,{}),Object(M.jsx)("div",{className:"container",children:Object(M.jsx)(Z,{data:a,queue:t})}),Object(M.jsx)(Q,{})]})}}]),a}(n.Component),ee=Object(h.b)((function(e){return{doctor:e.doctors.doctor,queue:e.patient.queue}}),{getDoctor:function(e){return function(){var t=Object(B.a)(P.a.mark((function t(a){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.get("https://clinic-react-spring.herokuapp.com/api/user/".concat(e));case 2:n=t.sent,a({type:v,payload:n.data.body});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getQueue:function(e){return function(){var t=Object(B.a)(P.a.mark((function t(a){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.get("https://clinic-react-spring.herokuapp.com/api/queue/".concat(e));case 2:n=t.sent,a({type:N,payload:n.data.body});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})($),te=a(25),ae=function(e){e&&(U.a.defaults.headers.common.Authorization=e)},ne=function(e){return{type:g,payload:e}},ce=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={username:"",password:""},e.onChange=e.onChange.bind(Object(H.a)(e)),e.onSubmit=e.onSubmit.bind(Object(H.a)(e)),e}return Object(l.a)(a,[{key:"onChange",value:function(e){this.setState(Object(K.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.getToken(t,this.props.history)}},{key:"render",value:function(){return Object(M.jsxs)("div",{className:"container m-5",children:[Object(M.jsx)("h1",{className:"text-center",children:"Login"}),Object(M.jsx)("div",{className:"mt-5",style:{width:"400px"},children:Object(M.jsxs)("form",{className:"needs-validation",onSubmit:this.onSubmit,children:[Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Username:"}),Object(M.jsx)("input",{type:"text",className:"form-control",id:"uname",placeholder:"Enter username",name:"username",onChange:this.onChange}),Object(M.jsx)("div",{className:"valid-feedback",children:"Valid."}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("label",{children:"Password:"}),Object(M.jsx)("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Enter password",name:"password",onChange:this.onChange}),Object(M.jsx)("div",{className:"valid-feedback",children:"Valid."}),Object(M.jsx)("div",{className:"invalid-feedback",children:"Please fill out this field."})]}),Object(M.jsx)("div",{className:"col-md-12",children:Object(M.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})})]})})]})}}]),a}(n.Component),se=Object(h.b)((function(e){return{errors:e.errors}}),{getToken:function(e,t){return function(){var a=Object(B.a)(P.a.mark((function a(n){var c,s,r;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U.a.post("https://clinic-react-spring.herokuapp.com/api/auth/login",e);case 2:c=a.sent,s=c.data.body,localStorage.setItem("jwtToken",s),ae(s),r=Object(te.a)(s),a.prev=7,n(ne(r)),a.t0=r.role[0].roleName,a.next="doctor"===a.t0?12:"admin"===a.t0?14:16;break;case 12:return t.push("/doctor"),a.abrupt("break",17);case 14:return t.push("/admin"),a.abrupt("break",17);case 16:t.push("/");case 17:a.next=23;break;case 19:a.prev=19,a.t1=a.catch(7),n({type:O,payload:a.t1.data}),t.push("/login");case 23:case"end":return a.stop()}}),a,null,[[7,19]])})));return function(e){return a.apply(this,arguments)}}()}})(ce),re=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).logout=function(){e.props.logout(),window.location.href="/"},e}return Object(l.a)(a,[{key:"signUpChecking",value:function(e){var t=e.token;return e.validToken?"doctor"===t.role[0].roleName?Object(M.jsxs)(j.b,{className:"nav-link",to:"/doctor",children:[Object(M.jsx)("i",{className:"fas fa-user-circle mr-1"}),"My books"]}):Object(M.jsx)(j.b,{className:"nav-link text-white",to:"/admin",children:"Rental management"}):Object(M.jsx)(j.b,{className:"nav-link text-white",to:"/login",children:"Sign Up"})}},{key:"signInChecking",value:function(e){return e.validToken?Object(M.jsx)(j.b,{className:"nav-link bg-red text-white",onClick:this.logout,to:"logout",children:"Logout"}):Object(M.jsx)(j.b,{className:"nav-link text-white",to:"/login",children:"Login"})}},{key:"render",value:function(){return Object(M.jsxs)("nav",{className:" navbar bg-info",children:[Object(M.jsx)(j.b,{className:"navbar-brand text-white",to:"/",children:"Name"}),Object(M.jsxs)("ul",{className:"navbar-nav",children:[Object(M.jsx)("li",{className:"nav-item first",children:Object(M.jsxs)(j.b,{className:"nav-link text-white",to:"#",children:[Object(M.jsx)("i",{className:"fa fa-phone"}),"9387458324"]})}),Object(M.jsx)("li",{className:"nav-item",children:Object(M.jsxs)(j.b,{className:"nav-link text-white",to:"#",children:[Object(M.jsx)("i",{className:"fa fa-phone"}),"1003"]})}),Object(M.jsx)("li",{className:"nav-item",children:Object(M.jsx)(j.b,{className:"nav-link text-white",to:"#",children:"Rus"})}),Object(M.jsx)("li",{className:"nav-item",children:Object(M.jsx)(j.b,{className:"nav-link text-white",to:"#",children:"Uzb"})}),Object(M.jsx)("li",{className:"nav-item",children:this.signInChecking(this.props.auth)})]})]})}}]),a}(n.Component),ie=Object(h.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){localStorage.removeItem("jwtToken"),ae(!1),e(ne({}))}}})(re),le=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={tables:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllQueue("A")}},{key:"componentWillReceiveProps",value:function(e){this.setState({tables:e.tables})}},{key:"onClick",value:function(e){this.props.getAllQueue(e),this.setState({tables:this.props.tables})}},{key:"render",value:function(){var e,t=this,a=this.state.tables;return console.log(a),a.length>0?(e=a.map((function(e){return Object(M.jsxs)("tr",{className:"text-center",children:[Object(M.jsx)("td",{children:e.name}),Object(M.jsx)("td",{children:e.id}),Object(M.jsx)("td",{children:e.patient.firstName}),Object(M.jsx)("td",{children:e.patient.lastName}),Object(M.jsx)("td",{children:e.patient.phone}),Object(M.jsx)("td",{children:Object(M.jsx)("button",{className:"btn btn-primary",style:{width:"100px",fontWeight:"bold",verticalAlign:"center"},children:"ok"})}),Object(M.jsx)("td",{children:Object(M.jsx)("button",{className:"btn btn-danger",style:{width:"100px",fontWeight:"bold",verticalAlign:"center"},children:"delete"})})]},e.id)})),console.log(this.state)):e="loading...",Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{style:{width:"1400px",margin:"0 auto"},children:[Object(M.jsx)(ie,{}),Object(M.jsxs)("div",{className:"btn-group ",children:[Object(M.jsx)("button",{type:"button",class:"btn btn-light border pr-5 pl-5 mr-2",style:{borderRadius:"10px",fontWeight:"bold"},onClick:function(){return t.onClick("A")},children:"A"}),Object(M.jsx)("button",{type:"button",class:"btn btn-light border pr-5 pl-5 mr-2",style:{borderRadius:"10px",fontWeight:"bold"},onClick:function(){return t.onClick("B")},children:"B"}),Object(M.jsx)("button",{type:"button",class:"btn btn-light border pr-5 pl-5 mr-2",style:{borderRadius:"10px",fontWeight:"bold"},onClick:function(){return t.onClick("C")},children:"C"}),Object(M.jsx)("button",{type:"button",class:"btn btn-light border pr-5 pl-5 mr-2",style:{borderRadius:"10px",fontWeight:"bold"},onClick:function(){return t.onClick("D")},children:"D"}),Object(M.jsx)("button",{type:"button",class:"btn btn-light border pr-5 pl-5 mr-2",style:{borderRadius:"10px",fontWeight:"bold"},onClick:function(){return t.onClick("E")},children:"E"}),Object(M.jsx)("button",{type:"button",class:"btn btn-light border pr-5 pl-5 mr-2",style:{borderRadius:"10px",fontWeight:"bold"},onClick:function(){return t.onClick("F")},children:"F"})]}),Object(M.jsxs)("table",{className:"table table-sm border-bottom",style:{borderTop:"none"},children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{className:"text-center",children:[Object(M.jsx)("th",{className:"pt-2 pb-2",children:"Navbat_r"}),Object(M.jsx)("th",{className:"pt-2 pb-2",children:"#Id raqam"}),Object(M.jsx)("th",{className:"pt-2 pb-2",children:"Bemor_ismi"}),Object(M.jsx)("th",{className:"pt-2 pb-2",children:"Bemor_Fam"}),Object(M.jsx)("th",{className:"pt-2 pb-2",children:"Bemor_tel"}),Object(M.jsx)("th",{className:"pt-2 pb-2"}),Object(M.jsx)("th",{className:"pt-2 pb-2"})]})}),Object(M.jsx)("tbody",{children:e})]})]})})}}]),a}(n.Component),oe=Object(h.b)((function(e){return{tables:e.tables.tables}}),{getAllQueue:function(e){return function(){var t=Object(B.a)(P.a.mark((function t(a){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.post("https://clinic-react-spring.herokuapp.com/api/queue",e);case 2:n=t.sent,console.log(n);try{a({type:k,payload:n.data.body})}catch(c){a({type:O,payload:n.data.body})}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(le),de=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={errors:""},e.onClick=e.onClick.bind(Object(H.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getDoctorTable()}},{key:"onClick",value:function(e){this.props.accepted(e)}},{key:"render",value:function(){var e=this,t=0,a=this.props.tables,n=this.props.user,c=n.firstName,s=n.lastName,r=n.middleName,i=n.speciality;return Object(M.jsxs)("div",{className:"doctor",children:[Object(M.jsx)(ie,{}),Object(M.jsxs)("div",{className:"row",children:[Object(M.jsxs)("div",{className:"col-md-3 bg-primary text-center",style:{height:"500px",color:"white"},children:[Object(M.jsxs)("p",{style:{color:"white",fontSize:"18px",padding:"20px",width:"300px",margin:"0 auto"},className:"m-4",children:["Toshkent viloyati xususiy klinika ",i]}),Object(M.jsx)("img",{className:"card-img-top mb-4",src:"/images/3.jpg",alt:"rasm topilmadi"}),Object(M.jsx)("p",{children:Object(M.jsxs)("strong",{children:[c," ",s," ",r]})})]}),Object(M.jsx)("div",{className:"col-md-9 ",children:Object(M.jsxs)("table",{className:"table table-bordered table-sm table-striped",children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{className:"text-center p-5",children:[Object(M.jsx)("th",{children:"Navbat"}),Object(M.jsx)("th",{children:"#Id raqam"}),Object(M.jsx)("th",{children:"Bemor_ismi"}),Object(M.jsx)("th",{children:"Bemor_Fam"}),Object(M.jsx)("th",{children:"Bemor_tel"}),Object(M.jsx)("th",{})]})}),Object(M.jsx)("tbody",{children:a.map((function(a){return Object(M.jsxs)("tr",{className:"text-center ",children:[Object(M.jsx)("td",{children:t+=1}),Object(M.jsxs)("td",{children:["#",a.id]}),Object(M.jsx)("td",{children:a.patient.firstName}),Object(M.jsx)("td",{children:a.patient.lastName}),Object(M.jsx)("td",{children:a.patient.phone}),Object(M.jsx)("td",{className:"text-center",children:Object(M.jsx)("button",{onClick:function(){return e.onClick(a.id)},className:"".concat(a.accepted?"btn btn-light":"btn btn-primary"),children:"Qabulni yakunlash"})})]},a.id)}))})]})})]})]})}}]),a}(n.Component),je=Object(h.b)((function(e){return{tables:e.tables.tables,user:e.tables.user}}),{getDoctorTable:F,accepted:function(e){return function(){var t=Object(B.a)(P.a.mark((function t(a){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.get("https://clinic-react-spring.herokuapp.com/api/doctor/".concat(e));case 2:a(F());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(de),be=a(43),he=Object(h.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(be.a)(e,["component","auth"]);return Object(M.jsx)(b.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return!0===a.validToken?Object(M.jsx)(t,Object(m.a)({},e)):Object(M.jsx)(b.a,{to:"/login"})}}))})),ue=localStorage.jwtToken;if(ue){ae(ue);var pe=Object(te.a)(ue);q.dispatch({type:g,payload:pe})}var me=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(M.jsx)(h.a,{store:q,children:Object(M.jsxs)(j.a,{children:[Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(b.b,{exact:!0,path:"/",component:z}),Object(M.jsx)(b.b,{exact:!0,path:"/listRegister/:id",component:ee}),Object(M.jsx)(b.b,{exact:!0,path:"/login",component:se}),Object(M.jsx)(b.b,{exact:!0,path:"/notFound",component:J}),Object(M.jsx)(b.b,{exact:!0,path:"/wrong",component:X})]}),Object(M.jsx)(b.d,{children:Object(M.jsx)(he,{exact:!0,path:"/admin",component:oe})}),Object(M.jsx)(b.d,{children:Object(M.jsx)(he,{exact:!0,path:"/doctor",component:je})})]})})}}]),a}(n.Component);r.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(me,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.58607026.chunk.js.map