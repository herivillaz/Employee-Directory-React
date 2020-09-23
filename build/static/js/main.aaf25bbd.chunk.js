(this["webpackJsonpEmployee-Directory-React"]=this["webpackJsonpEmployee-Directory-React"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(12),s=a(13),u=a(14),i=a(17),m=a(16);var h=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var d=function(e){return r.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var p=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",{className:t},e.children)};var E=function(e){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,e.heading)),r.a.createElement("div",{className:"card-body"},e.children))};var f=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"}),r.a.createElement("br",null)),r.a.createElement("button",{type:"button",className:"btn btn-light sort",onClick:e.sortEmployees},"Sort/Organize"))};var v=a(15),y=a.n(v),g=function(){return y.a.get("https://randomuser.me/api/?results=40&nat=us")},C=function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase();return a<n?-1:a>n?1:0},b=function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase();return a<n?1:a>n?-1:0},S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={sortedresult:[],storeorder:"ASC",result:[],search:""},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(o.a)({},n,a),(function(){return console.log(e.state)}))},e.sortEmployees=function(t){t.preventDefault();var a=e.state.result,n=e.state.storeorder;a.sort("ASC"===n?b:C),n="ASC"===n?"DESC":"ASC",e.setState({sortedresult:a,storeorder:n})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){console.log(t),e.setState({result:t.data.results,sortedresult:t.data.results},(function(){return console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h,null,r.a.createElement(d,null,r.a.createElement(p,{size:"md-8"},r.a.createElement(E,{heading:this.state.result.Title||"Employee Directory"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"First"),r.a.createElement("th",{scope:"col"},"Last"),r.a.createElement("th",{scope:"col"},"Phone #"),r.a.createElement("th",{scope:"col"},"Email"))),r.a.createElement("tbody",null,this.state.sortedresult.length?this.state.sortedresult.filter((function(t){return"".concat(t.name.first.toLowerCase()," ").concat(t.name.last.toLowerCase()).includes(e.state.search.toLowerCase())})).map((function(e,t){return r.a.createElement("tr",{key:e.id.value},r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email))})):r.a.createElement("h3",null,"No Results to Display"))))),r.a.createElement(p,{size:"md-4"},r.a.createElement(E,{heading:"Search"},r.a.createElement(f,{value:this.state.search,handleInputChange:this.handleInputChange,sortEmployees:this.sortEmployees})))))}}]),a}(n.Component);var N=function(){return r.a.createElement(S,null)};a(40);c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.aaf25bbd.chunk.js.map