(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(20),s=n.n(a),i=(n(28),n(21)),o=n(15),u=n(8),j=n(9),b=n(10),d=n(11),l=n(18),h=n.n(l),O=n(4),p=n(2),m=n(0),x=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),f=x,v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(m.jsx)("h1",{children:"Bank of React"}),Object(m.jsx)(O.b,{to:"/userProfile",children:"User Profile"}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"/login",children:"Login"}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"/credits",children:"Credits"}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"/debits",children:"Debits"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(f,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),g=v,S=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"User Profile"}),Object(m.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(m.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),B=S,L=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=Object(o.a)({},c.state.user);t.userName=e.target.value,c.setState({user:t})},c.handleSubmit=function(e){e.preventDefault(),c.props.mockLogIn(c.state.user),c.setState({redirect:!0})},c.state={user:{userName:c.props.user.userName,password:""},redirect:!1},c}return Object(j.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(m.jsx)(p.a,{to:"/userProfile"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"User Name"}),Object(m.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password"})]}),Object(m.jsx)("button",{children:"Log In"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),y=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Credits"}),e.credits.map((function(e){var t=e.date.slice(0,10);return Object(m.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)})),Object(m.jsxs)("form",{onSubmit:e.addCredit,children:[Object(m.jsx)("input",{type:"text",name:"description",placeholder:"Description"}),Object(m.jsx)("input",{type:"number",name:"amount",placeholder:"Amount",min:"0",step:"0.01"}),Object(m.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(f,{accountBalance:e.accountBalance}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"/",children:"Return to Home"})]})},C=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Debits"}),e.debits.map((function(e){var t=e.date.slice(0,10);return Object(m.jsxs)("li",{children:[e.amount," ",e.description," ",t]},e.id)})),Object(m.jsxs)("form",{onSubmit:e.addDebit,children:[Object(m.jsx)("input",{type:"text",name:"description",placeholder:"Description"}),Object(m.jsx)("input",{type:"number",name:"amount",placeholder:"Amount",min:"0",step:"0.01"}),Object(m.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(f,{accountBalance:e.accountBalance}),Object(m.jsx)("br",{}),Object(m.jsx)(O.b,{to:"/",children:"Return to Home"})]})},k=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.addCredit=function(t){t.preventDefault(),e.setState({creditList:e.state.creditList.concat([{description:t.target.elements.description.value,amount:t.target.elements.amount.value,date:(new Date).toISOString().slice(0,10)}])}),e.setState({accountBalance:(parseFloat(e.state.accountBalance)+parseFloat(t.target.elements.amount.value)).toFixed(2)}),console.log(e.creditList),console.log(e.accountBalance)},e.addDebit=function(t){t.preventDefault(),e.setState({debitList:e.state.debitList.concat([{description:t.target.elements.description.value,amount:t.target.elements.amount.value,date:(new Date).toISOString().slice(0,10)}])}),e.setState({accountBalance:(parseFloat(e.state.accountBalance)-parseFloat(t.target.elements.amount.value)).toFixed(2)}),console.log(e.debitList),console.log(e.accountBalance)},e.state={accountBalance:0,creditList:[],debitList:[],currentUser:{userName:"Jiahao Li",memberSince:"08/04/2001"}},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(h.a.mark((function e(){var t,n,c,r,a,s=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://johnnylaicode.github.io/api/credits.json").then((function(e){return e.json()})).then((function(e){s.setState({creditList:e})}));case 2:return e.next=4,fetch("https://johnnylaicode.github.io/api/debits.json").then((function(e){return e.json()})).then((function(e){s.setState({debitList:e})}));case 4:t=this.state.creditList,n=this.state.debitList,c=0,r=0,t.forEach((function(e){c+=e.amount})),n.forEach((function(e){r+=e.amount})),a=(c-r).toFixed(2),this.setState({accountBalance:a});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.jsx)(O.a,{basename:"/CSCI39548-Assignment-4",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(g,{accountBalance:e.state.accountBalance})}}),Object(m.jsx)(p.b,{exact:!0,path:"/userProfile",render:function(){return Object(m.jsx)(B,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(m.jsx)(p.b,{exact:!0,path:"/login",render:function(){return Object(m.jsx)(L,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(m.jsx)(p.b,{exact:!0,path:"/credits",render:function(){return Object(m.jsx)(y,{credits:e.state.creditList,addCredit:e.addCredit,accountBalance:e.state.accountBalance})}}),Object(m.jsx)(p.b,{exact:!0,path:"/debits",render:function(){return Object(m.jsx)(C,{debits:e.state.debitList,addDebit:e.addDebit,accountBalance:e.state.accountBalance})}})]})})}}]),n}(c.Component),D=k,N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.67cf024a.chunk.js.map