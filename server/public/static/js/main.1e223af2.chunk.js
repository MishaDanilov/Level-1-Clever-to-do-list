(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{64:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=n(58),r=n.n(s),i=(n(64),n(65),n(41)),l=n(12),o=n(15);function d(){}var u=Object(a.createContext)({token:null,userId:null,login:d,logout:d,isAuthenticated:!1,changeEvents:d,taskList:[],setTaskList:d}),j=n(35),b=n(45),h=n(13),f=n.n(h),O=n(24),m=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),i=r[0],l=r[1];return{loading:n,request:Object(a.useCallback)(function(){var e=Object(O.a)(f.a.mark((function e(t){var n,a,s,r,i,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,s=o.length>3&&void 0!==o[3]?o[3]:{},c(!0),e.prev=4,a&&(a=JSON.stringify(a),s["Content-Type"]="application/json"),"http://localhost:3001"+t,e.next=9,fetch(t,{method:n,body:a,headers:s});case 9:return r=e.sent,e.next=12,r.json();case 12:if(i=e.sent,r.ok){e.next=15;break}throw new Error(i.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a.");case 15:return c(!1),e.abrupt("return",i);case 19:e.prev=19,e.t0=e.catch(4),c(!1),l(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(a.useCallback)((function(){return l(null)}),[])}},x=n(37),v=n(6),p=function(e){var t=e.title,n=e.date,c=e.id,s=Object(a.useContext)(u);return Object(v.jsx)("li",{className:"py-2",children:Object(v.jsxs)("div",{className:"flex text-sm flex-1 justify-between",children:[Object(v.jsx)("h3",{className:"font-medium ".concat(s.taskList.find((function(e){return e.id===c})).done?"done":""),children:t}),Object(v.jsx)("p",{className:"text-gray-500",children:n})]})})},g=n(16),k=function(e){var t,n,a,c,s,r,i,l=e.locale,o=void 0===l?g.a:l;return[{day:0,label:null===(t=o.localize)||void 0===t?void 0:t.day(0)},{day:1,label:null===(n=o.localize)||void 0===n?void 0:n.day(1)},{day:2,label:null===(a=o.localize)||void 0===a?void 0:a.day(2)},{day:3,label:null===(c=o.localize)||void 0===c?void 0:c.day(3)},{day:4,label:null===(s=o.localize)||void 0===s?void 0:s.day(4)},{day:5,label:null===(r=o.localize)||void 0===r?void 0:r.day(5)},{day:6,label:null===(i=o.localize)||void 0===i?void 0:i.day(6)}]},N=n(39),y=n(31),w=c.a.createContext({});var C={l3:"lg:grid-cols-3",l4:"lg:grid-cols-4",l5:"lg:grid-cols-5",l6:"lg:grid-cols-6",l7:"lg:grid-cols-7"};function E(e){var t=e.omitDays,n=e.events,a=e.children,c=e.modal,s=Object(x.useMonthlyCalendar)(),r=function(e){var t=e.days,n=e.omitDays,a=e.locale,c=k({locale:a}),s=t;n&&(c=k({locale:a}).filter((function(e){return!n.includes(e.day)})),s=t.filter((function(e){return!n.includes(Object(N.a)(e))})));var r=Object(N.a)(s[0]);if(n){var i=n.filter((function(e){return e<r})).length;r-=i}return{headings:c,daysToRender:s,padding:new Array(r).fill(0)}}({days:s.days,omitDays:t,locale:s.locale}),i=r.headings,l=r.daysToRender,o=r.padding,d=[];c&&d.push("disabled");var u="border-b-2 p-2 border-r-2 lg:block hidden";return Object(v.jsx)("div",{className:d.join(" "),children:Object(v.jsx)("div",{className:"bg-white border-l-2 border-t-2",children:Object(v.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ".concat(C["l".concat(i.length)]),children:[i.map((function(e){return Object(v.jsx)("div",{className:u,"aria-label":"Day of Week",children:e.label},e.day)})),o.map((function(e,t){return Object(v.jsx)("div",{className:u,"aria-label":"Empty Day"},t)})),l.map((function(e){return Object(v.jsx)(w.Provider,{value:{day:e,events:n.filter((function(t){return Object(y.a)(t.date,e)}))},children:a},e.toISOString())}))]})})})}function L(e){var t=e.renderDay,n=e.setModal,c=Object(x.useMonthlyCalendar)().locale,s=Object(a.useContext)(w),r=s.day,i=s.events,l=Object(b.a)(r,"d",{locale:c});return Object(v.jsxs)("div",{id:"".concat(r.getDate()),"aria-label":"Events for day ".concat(l),className:"h-48 p-2 border-b-2 border-r-2 hover-day-body",onClick:function(e){!function(e){n(e)}(r)},children:[Object(v.jsxs)("div",{className:"flex justify-between",children:[Object(v.jsx)("div",{className:"font-bold",children:l}),Object(v.jsx)("div",{className:"lg:hidden block",children:Object(b.a)(r,"EEEE",{locale:c})})]}),Object(v.jsx)("ul",{className:"divide-gray-200 divide-y overflow-hidden max-h-36 overflow-y-auto",children:t(i)})]})}var T=n(44),S=n(55),D=n(29),I=function(){var e=Object(x.useMonthlyCalendar)(),t=e.currentMonth,n=e.onCurrentMonthChange;return Object(v.jsxs)("div",{className:"nav-flex mb-4",children:[Object(v.jsx)("button",{onClick:function(){n(Object(T.a)(t,1))},className:"cursor-pointer nav-button",children:Object(v.jsx)("i",{className:"material-icons",children:"arrow_back"})}),Object(v.jsx)("div",{className:"ml-4 mr-4 w-32 text-center nav-month",children:Object(b.a)(t,Object(S.a)(t)===Object(S.a)(new Date)?"LLLL":"LLLL yyyy")}),Object(v.jsx)("button",{onClick:function(){return n(Object(D.a)(t,1))},className:"cursor-pointer nav-button",children:Object(v.jsx)("i",{className:"material-icons",children:"arrow_forward"})})]})},M=n(36),F=n(27),P=function(){return Object(a.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])};function J(e){var t=m(),n=t.error,c=t.clearError,s=Object(a.useState)(!1),r=Object(o.a)(s,2),i=r[0],l=r[1],d=Object(a.useContext)(u),j=P(),b=Object(a.useState)({title:e.title,content:e.content,date:e.date,done:e.done}),h=Object(o.a)(b,2),f=h[0],O=h[1],x=function(e){O(Object(F.a)(Object(F.a)({},f),{},Object(M.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){window.M.updateTextFields()}),[i]),Object(a.useEffect)((function(){j(n),c()}),[n,j,c]),i?Object(v.jsxs)("li",{className:"collection-tasks",children:[Object(v.jsxs)("div",{className:"content-task",children:[Object(v.jsx)("a",{href:"#!",style:{width:"5%"},className:d.taskList.find((function(t){return t.id===e.id})).done?"done-task":"active-task",onClick:function(){return e.setDoneTaskById(e.id)},children:Object(v.jsx)("i",{className:"material-icons",children:"grade"})}),Object(v.jsxs)("div",{className:"left-margin",style:{width:"95%"},children:[Object(v.jsxs)("div",{className:"input-field col",children:[Object(v.jsx)("input",{id:"title",type:"text",className:"validate",name:"title",onChange:x,value:f.title}),Object(v.jsx)("label",{htmlFor:"title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})]}),Object(v.jsxs)("div",{className:"input-field col",children:[Object(v.jsx)("textarea",{id:"icon_prefix2",className:"materialize-textarea textarea-task",name:"content",onChange:x,value:f.content}),Object(v.jsx)("label",{htmlFor:"icon_prefix2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})]})]}),Object(v.jsxs)("div",{className:"nav-task",children:[Object(v.jsx)("a",{href:"#!",className:"remove-task",title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",style:{color:"rgb(77,47,194)"},onClick:function(){e.sendEditTask(f,e.id)},children:Object(v.jsx)("i",{className:"material-icons",children:"send"})}),Object(v.jsx)("a",{href:"#!",className:"remove-task",title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",onClick:function(){return l(!1)},children:Object(v.jsx)("i",{className:"material-icons",children:"create"})}),Object(v.jsx)("a",{href:"#!",className:"remove-task",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){return e.removeTaskById(e.id)},children:Object(v.jsx)("i",{className:"material-icons",children:"delete"})})]})]}):Object(v.jsxs)("li",{className:"collection-tasks",children:[Object(v.jsxs)("div",{className:"content-task",children:[Object(v.jsx)("a",{href:"#!",className:d.taskList.find((function(t){return t.id===e.id})).done?"done-task":"active-task",onClick:function(){return e.setDoneTaskById(e.id)},children:Object(v.jsx)("i",{className:"material-icons",children:"grade"})}),Object(v.jsxs)("div",{className:"left-margin",children:[Object(v.jsx)("h1",{className:d.taskList.find((function(t){return t.id===e.id})).done?"done-title-task":"title-task",children:e.title}),Object(v.jsx)("p",{children:e.content})]})]}),Object(v.jsxs)("div",{className:"nav-task",children:[Object(v.jsx)("a",{href:"#!",className:"remove-task",title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",onClick:function(){return l(!0)},children:Object(v.jsx)("i",{className:"material-icons",children:"create"})}),Object(v.jsx)("a",{href:"#!",className:"remove-task left-margin",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){return e.removeTaskById(e.id)},children:Object(v.jsx)("i",{className:"material-icons",children:"delete"})})]})]})}function z(e){var t=e.closeModal,n=e.items,s=e.day,r=Object(a.useContext)(u),i=P(),l=m(),d=l.request,j=l.error,b=l.clearError,h=Object(a.useState)({title:"",content:"",hours:"",minutes:"",date:""}),x=Object(o.a)(h,2),p=x[0],g=x[1],k=function(e){g(Object(F.a)(Object(F.a)({},p),{},Object(M.a)({},e.target.name,e.target.value)))},N=function(){var e=Object(O.a)(f.a.mark((function e(){var t,n,a,c,l,o,u,j;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p.title&&p.content&&p.hours&&p.minutes){e.next=3;break}throw new Error("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f.");case 3:return t="".concat(s.getFullYear(),"-").concat(s.getMonth()<10?"0"+JSON.stringify(s.getMonth()+1):JSON.stringify(s.getMonth()+1),"-").concat(s.getDate()<10?"0"+JSON.stringify(s.getDate()):JSON.stringify(s.getDate()),"T").concat(p.hours<10?"0"+p.hours:p.hours,":").concat(p.minutes<10?"0"+p.minutes:p.minutes,":00"),e.next=6,d("/tasks/".concat(r.userId),"POST",{title:p.title,content:p.content,date:t});case 6:if(!(n=e.sent)){e.next=13;break}a=n.title,c=n.content,l=n.date,o=n.done,u=n.id,j={title:a,content:c,date:new Date(l),done:o,id:u},r.setTaskList(r.taskList.concat(j)),e.next=14;break;case 13:throw new Error("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0432\u043e\u0434\u0430");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),i(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("/tasks/".concat(t),"delete");case 3:if(n=e.sent){e.next=8;break}throw new Error("\u0417\u0430\u0434\u0430\u0447\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.");case 8:n.status?(r.changeEvents(r.userId),i(n.message)):i(n.message);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),i(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=function(){return new Promise((function(e,n){var a=r.taskList.find((function(e){return e.id===t}));a.done?(a.done=!1,e(a)):(a.done=!0,e(a)),n()}))},e.next=4,n();case 4:return a=e.sent,e.next=7,d("/tasks/".concat(t),"PUT",{title:a.title,content:a.content,date:a.date,done:a.done});case 7:r.setTaskList(r.taskList),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),i(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(O.a)(f.a.mark((function e(t,n){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.title&&t.content){e.next=3;break}throw new Error("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f.");case 3:return a=function(){return new Promise((function(e,a){var c=r.taskList.find((function(e){return e.id===n}));c&&(c.title=t.title,c.content=t.content,e(c)),a()}))},e.next=6,a();case 6:return c=e.sent,e.next=9,d("/tasks/".concat(n),"PUT",{title:c.title,content:c.content,date:c.date,done:c.done});case 9:r.setTaskList(r.taskList),i("\u0417\u0430\u0434\u0430\u0447\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),i(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i(j),b()}),[j,i,b]),Object(v.jsx)(c.a.Fragment,{children:Object(v.jsxs)("div",{id:"modal1",className:"modal modal-fixed-footer",children:[Object(v.jsx)("div",{className:"modal-content",children:Object(v.jsx)("ul",{children:n.filter((function(e){return e.date.getDate()===s.getDate()&&e.date.getMonth()===s.getMonth()})).map((function(e,t){return Object(v.jsx)(J,{setDoneTaskById:w,removeTaskById:y,title:e.title,content:e.content,date:e.date,indexItem:t,id:e.id,done:e.done,sendEditTask:C})}))})}),Object(v.jsx)("div",{className:"modal-footer",children:Object(v.jsxs)("div",{className:"footer-nav-block",children:[Object(v.jsx)("div",{className:"footer-add-task",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("form",{className:"col s12",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"input-field col s5",children:[Object(v.jsx)("i",{className:"material-icons prefix",children:"title"}),Object(v.jsx)("input",{id:"titleAdd",type:"text",className:"validate",name:"title",onChange:k}),Object(v.jsx)("label",{htmlFor:"titleAdd",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})]}),Object(v.jsxs)("div",{className:"input-field col s3",children:[Object(v.jsx)("i",{className:"material-icons prefix",children:"access_time"}),Object(v.jsx)("input",{id:"hours",type:"text",className:"validate",name:"hours",onChange:k}),Object(v.jsx)("label",{htmlFor:"hours",children:"\u0427\u0430\u0441\u044b"})]}),Object(v.jsxs)("div",{className:"input-field col s3",children:[Object(v.jsx)("i",{className:"material-icons prefix",children:"access_time"}),Object(v.jsx)("input",{id:"minutes",type:"text",className:"validate",name:"minutes",onChange:k}),Object(v.jsx)("label",{htmlFor:"minutes",children:"\u041c\u0438\u043d\u0443\u0442\u044b"})]}),Object(v.jsxs)("div",{className:"input-field col s12",children:[Object(v.jsx)("textarea",{id:"icon_prefix2",className:"materialize-textarea textarea-task",name:"content",onChange:k}),Object(v.jsx)("label",{htmlFor:"icon_prefix2",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})]})})})}),Object(v.jsx)("div",{className:"footer-nav-content",children:Object(v.jsxs)("div",{className:"footer-nav",children:[Object(v.jsxs)("a",{className:"button-add-task",onClick:N,href:"#!",children:[Object(v.jsx)("i",{className:"Medium material-icons",children:"add"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"]}),Object(v.jsx)("a",{href:"#!",className:"modal-close waves-effect waves-green btn-flat",onClick:t,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})]})})]})})}var B=function(){var e=Object(a.useState)(Object(j.a)(new Date)),t=Object(o.a)(e,2),n=t[0],c=t[1],s=P(),r=m(),i=r.error,l=r.clearError,d=Object(a.useContext)(u);Object(a.useEffect)((function(){"[]"===JSON.stringify(d.taskList)&&d.userId&&(console.log("request..."),d.changeEvents(d.userId))}),[]),Object(a.useEffect)((function(){s(i),l()}),[i,s,l]);var h=Object(a.useState)(null),f=Object(o.a)(h,2),O=f[0],g=f[1];return Object(v.jsxs)(x.MonthlyCalendar,{currentMonth:n,onCurrentMonthChange:function(e){c(e)},children:[O&&Object(v.jsx)(z,{closeModal:function(){g(null)},items:d.taskList,day:O}),Object(v.jsx)(I,{}),Object(v.jsx)(E,{events:d.taskList,modal:O,children:Object(v.jsx)(L,{renderDay:function(e){return e.map((function(e,t){return Object(v.jsx)(p,{title:e.title,date:Object(b.a)(e.date,"k:mm"),id:e.id},t)}))},setModal:g})})]})};function _(){var e=Object(a.useContext)(u),t=m(),n=t.loading,c=t.request,s=t.error,r=t.clearError,i=Object(a.useState)({email:"",password:""}),l=Object(o.a)(i,2),d=l[0],j=l[1],b=P();Object(a.useEffect)((function(){b(s),r()}),[s,b,r]),Object(a.useEffect)((function(){window.M.updateTextFields()}),[]);var h=function(e){j(Object(F.a)(Object(F.a)({},d),{},Object(M.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("/register","POST",Object(F.a)({},d));case 3:t=e.sent,b(t.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var t=Object(O.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c("/login","POST",Object(F.a)({},d));case 3:n=t.sent,e.login(n.token,n.userId),e.changeEvents(n.userId),console.log("Data:",n),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col s4 offset-s4",children:Object(v.jsxs)("div",{className:"card blue-grey darken-1",children:[Object(v.jsxs)("div",{className:"card-content white-text",children:[Object(v.jsx)("span",{className:"card-title",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"input-field",children:[Object(v.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",id:"email",type:"text",name:"email",onChange:h}),Object(v.jsx)("label",{htmlFor:"email",children:"\u041f\u043e\u0447\u0442\u0430"})]}),Object(v.jsxs)("div",{className:"input-field",children:[Object(v.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",onChange:h}),Object(v.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"})]})]})]}),Object(v.jsxs)("div",{className:"card-action",children:[Object(v.jsx)("button",{className:"waves-effect waves-light btn-small",onClick:p,disabled:n,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(v.jsx)("button",{className:"waves-effect waves-light btn-small left-margin",onClick:x,disabled:n,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})})})}var q="userData";function A(){var e=Object(l.g)(),t=Object(a.useContext)(u);return Object(v.jsx)("nav",{children:Object(v.jsxs)("div",{className:"nav-wrapper blue-grey darken-1",children:[Object(v.jsx)(i.b,{to:"/tasks",className:"brand-logo left-margin",children:"ToDo"}),Object(v.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(v.jsx)("li",{children:Object(v.jsx)(i.b,{to:"/tasks",children:"\u0417\u0430\u0434\u0430\u0447\u0438"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"/",onClick:function(n){n.preventDefault(),t.logout(),t.setTaskList([]),e.push("/")},children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})})}var G=function(){var e=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),i=r[0],l=r[1],d=Object(a.useCallback)((function(e,t){c(e),l(t),localStorage.setItem(q,JSON.stringify({userId:t,token:e}))}),[]),u=Object(a.useCallback)((function(){c(null),l(null),localStorage.removeItem(q)}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(q));e&&e.token&&d(e.token,e.userId)}),[d]),{login:d,logout:u,token:n,userId:i}}(),t=e.login,n=e.logout,c=e.token,s=e.userId,r=function(){var e=m().request,t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],s=n[1];return{taskList:c,changeEvents:Object(a.useCallback)(function(){var t=Object(O.a)(f.a.mark((function t(n){var a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/tasks/".concat(n),"GET");case 2:a=t.sent,c=a.map((function(e){var t=e.title,n=e.date,a=e.content,c=e.done,s=e.id;return{title:t,content:a,date:new Date(n),done:c,id:s}})),s(c);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),setTaskList:s}}(),d=r.taskList,j=r.changeEvents,b=r.setTaskList,h=!!c,x=function(e){return e?Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{path:"/tasks",exact:!0,children:Object(v.jsx)(B,{})}),Object(v.jsx)(l.a,{to:"/tasks"})]}):Object(v.jsxs)(l.d,{children:[Object(v.jsx)(l.b,{path:"/",exact:!0,children:Object(v.jsx)(_,{})}),Object(v.jsx)(l.a,{to:"/"})]})}(h);return Object(v.jsx)(u.Provider,{value:{token:c,login:t,logout:n,userId:s,taskList:d,changeEvents:j,setTaskList:b},children:Object(v.jsxs)(i.a,{children:[h&&Object(v.jsx)(A,{}),Object(v.jsx)("div",{className:"calendar-container",children:x})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root")),R()}},[[73,1,2]]]);
//# sourceMappingURL=main.1e223af2.chunk.js.map