(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(9),c=a.n(s),i=(a(16),a(2)),l=a(7),o=a(10),u=a(3),d=a(4),m=a(6),j=a(5),b=(a(17),a(0)),f=function(e){var t=e.increased,a=e.employees;return Object(b.jsxs)("div",{className:"app_info",children:[Object(b.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"}),Object(b.jsxs)("div",{className:"app_info_list",children:[Object(b.jsxs)("h2",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432: ",a]}),Object(b.jsxs)("h2",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u043c\u0438\u0439: ",t]})]})]})},h=(a(19),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onUpSearch=function(e){var t=e.target.value;n.setState({term:t}),n.props.onUpdateSearch(t)},n.state={term:""},n}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430",value:this.state.term,onChange:this.onUpSearch})}}]),a}(n.Component));a(20);var p=function(e){var t=[{name:"all",label:"\u0412\u0441\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"},{name:"rise",label:"\u041d\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435"},{name:"moreThen500",label:"\u0417/\u041f \u0431\u043e\u043b\u044c\u0448\u0435 500 \u0440\u0443\u0431/\u0447\u0430\u0441"}].map((function(t){var a=t.name,n=t.label,r=e.filter===a?"btn-secondary":"btn-outline-secondary";return Object(b.jsx)("button",{className:"btn ".concat(r),onClick:function(){return e.onFilterSelect(a)},children:n},a)}));return Object(b.jsx)("div",{className:"btn-group",children:t})},O=a(11);a(21);var x=function(e){var t=e.name,a=e.salary,n=e.onDelete,r=e.onToggleProp,s="list-group-item d-flex justify-content-between";return e.increase&&(s+=" increase"),e.rise&&(s+=" like"),Object(b.jsxs)("li",{className:s,children:[Object(b.jsx)("span",{className:"list-group-item-label",onClick:r,"data-toggle":"rise",children:t}),Object(b.jsx)("input",{type:"text",className:"list-group-item-label",defaultValue:a+" \u0440\u0443\u0431/\u0447\u0430\u0441"}),Object(b.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(b.jsx)("button",{type:"button",className:"btn-cookie btn-sm",onClick:r,"data-toggle":"increase",children:Object(b.jsx)("i",{className:"fas fa-cookie"})}),Object(b.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:n,children:Object(b.jsx)("i",{className:"fas fa-trash"})}),Object(b.jsx)("i",{className:"fas fa-star"})]})]})},g=(a(22),["id"]);var v=function(e){var t=e.data,a=e.onDelete,n=e.onToggleProp,r=t.map((function(e){var t=e.id,r=Object(O.a)(e,g);return Object(b.jsx)(x,Object(l.a)(Object(l.a)({},r),{},{onDelete:function(){return a(t)},onToggleProp:function(e){return n(t,e.currentTarget.getAttribute("data-toggle"))}}),t)}));return Object(b.jsx)("ul",{className:"app-list list-group",children:r})},y=(a(23),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onValueChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault(),""!==n.state.name&&(n.props.onAdd(n.state.name,n.state.salary),n.setState({name:"",salary:""}))},n.state={name:"",salary:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.salary;return Object(b.jsxs)("div",{className:"app-add-form",children:[Object(b.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430:"}),Object(b.jsxs)("form",{className:"add-form d-flex",onSubmit:this.onSubmit,children:[Object(b.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f",onChange:this.onValueChange,name:"name",value:t}),Object(b.jsx)("input",{type:"number",className:"form-control new-post-label",placeholder:"\u0417/\u041f \u0432 \u0440\u0443\u0431/\u0447\u0430\u0441",onChange:this.onValueChange,name:"salary",value:a}),Object(b.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),a}(n.Component)),N=(a(24),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).deleteItem=function(e){n.setState((function(t){return{data:t.data.filter((function(t){return t.id!==e}))}}))},n.addItem=function(e,t){var a={name:e,salary:t,increase:!1,like:!1,id:n.maxId++};n.setState((function(e){var t=e.data;return{data:[].concat(Object(o.a)(t),[a])}}))},n.onToggleProp=function(e,t){n.setState((function(a){return{data:a.data.map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},Object(i.a)({},t,!a[t])):a}))}}))},n.searchEmp=function(e,t){return 0===t.length?e:e.filter((function(e){return e.name.indexOf(t)>-1}))},n.onUpdateSearch=function(e){n.setState({term:e})},n.filterPost=function(e,t){switch(t){case"rise":return e.filter((function(e){return e.rise}));case"moreThen500":return e.filter((function(e){return e.salary>500}));default:return e}},n.onFilterSelect=function(e){n.setState({filter:e})},n.state={data:[{id:1,name:"\u0420\u0443\u0441\u043b\u0430\u043d \u042e.",salary:1e3,rise:!0,increase:!1},{id:2,name:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u0411.",salary:900,rise:!1,increase:!1},{id:3,name:"\u041c\u0438\u0445\u0430\u0438\u043b \u0412.",salary:300,rise:!1,increase:!1},{id:4,name:"\u041d\u0438\u043a\u043e\u043b\u0430\u0439 \u0414.",salary:600,rise:!0,increase:!1},{id:5,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0418.",salary:500,rise:!1,increase:!1},{id:6,name:"\u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0416.",salary:800,rise:!0,increase:!1},{id:7,name:"\u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432 \u0415.",salary:400,rise:!1,increase:!1},{id:8,name:"\u0418\u0433\u043e\u0440\u044c \u041d.",salary:200,rise:!1,increase:!1}],term:"",filter:"all"},n.maxId=9,n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.term,n=e.filter,r=this.state.data.length,s=this.state.data.filter((function(e){return e.increase})).length,c=this.filterPost(this.searchEmp(t,a),n);return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(f,{employees:r,increased:s}),Object(b.jsxs)("div",{className:"search-panel",children:[Object(b.jsx)(h,{onUpdateSearch:this.onUpdateSearch}),Object(b.jsx)(p,{filter:n,onFilterSelect:this.onFilterSelect})]}),Object(b.jsx)(v,{data:c,onDelete:this.deleteItem,onToggleProp:this.onToggleProp}),Object(b.jsx)(y,{onAdd:this.addItem})]})}}]),a}(n.Component));c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.13d43b0a.chunk.js.map