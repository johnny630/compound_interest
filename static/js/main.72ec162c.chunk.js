(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(35)},26:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(5),o=n.n(l),i=(n(26),n(6)),c=n(7),u=n(11),s=n(9),p=n(12),m=(n(27),n(3)),d=(n(32),n(33),Object(m.b)(function(e){return{principal:e.interest.principal,interest:e.interest.interest,interest_period:e.interest.interest_period,money_per_period:e.interest.money_per_period,stop_money_years:e.interest.stop_money_years,deposit_years:e.interest.deposit_years}},function(e){return{onUpdateFormData:function(t,n){return e(function(e,t){return{type:"UPDATE_FORM_DATA",stateAttr:e,stateValue:t}}(t,n))},calculate:function(){return e({type:"CALCULATE_COMPOUND_INTEREST"})}}})(function(e){for(var t=[],n=1;t.push(n++)<20;);for(var r=t.map(function(e){return a.a.createElement("option",{key:e,value:.01*e},e,"%")}),l=[],o=0;l.push(o++)<=40;);var i=l.map(function(e){return a.a.createElement("option",{key:e,value:e},0===e?"\u4e0d\u505c\u6b62\u6295\u5165":e+"\u5e74\u5f8c\u505c\u6b62")}),c=function(t){console.log(t.target.id,t.target.value),e.onUpdateFormData(t.target.id,t.target.value)};return a.a.createElement("div",{id:"InterestForm"},a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"principal"},"\u672c\u91d1:"),a.a.createElement("input",{type:"number",defaultValue:e.principal,id:"principal",min:"1",onChange:function(e){return c(e)}})),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"interest"},"\u5e74\u5229\u7387:"),a.a.createElement("select",{id:"interest",defaultValue:e.interest,onChange:function(e){return c(e)}},r)),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"money_per_period"},"\u9031\u671f\u6295\u5165\u91d1\u984d:"),a.a.createElement("select",{id:"interest_period",defaultValue:e.interest_period,onChange:function(e){return c(e)}},a.a.createElement("option",{value:"month"},"\u6bcf\u6708"),a.a.createElement("option",{value:"year"},"\u6bcf\u5e74")),a.a.createElement("input",{type:"number",defaultValue:e.money_per_period,id:"money_per_period",min:"1",onChange:function(e){return c(e)}}),a.a.createElement("select",{id:"stop_money_years",defaultValue:e.stop_money_years,onChange:function(e){return c(e)}},i)),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"deposit_years"},"\u8a08\u7b97\u5e74\u4efd:"),a.a.createElement("input",{type:"number",defaultValue:e.deposit_years,id:"deposit_years",min:"1",onChange:function(e){return c(e)}})),a.a.createElement("button",{type:"button",className:"sendBtn",onClick:e.calculate},"send"))})),_=(n(34),function(e){console.log("InterestResult",e.result);var t=e.result?e.result.map(function(e){return a.a.createElement("tr",{key:e.period},a.a.createElement("td",null,e.period),a.a.createElement("td",null,e.total_principal_money),a.a.createElement("td",null,e.temp_interest_money),a.a.createElement("td",null,e.total_interest_money),a.a.createElement("td",null,e.total_money))}):null;return a.a.createElement("table",{className:"dataTable"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5e74\u6708"),a.a.createElement("th",null,"\u7e3d\u672c\u91d1"),a.a.createElement("th",null,"\u5229\u606f"),a.a.createElement("th",null,"\u7e3d\u5229\u606f"),a.a.createElement("th",null,"\u7e3d\u91d1\u984d"))),a.a.createElement("tbody",null,t))}),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{id:"CompoundInterest"},a.a.createElement("div",null,a.a.createElement(d,null)),a.a.createElement("div",null,a.a.createElement(_,{result:this.props.calculate_result})))}}]),t}(r.Component),E=Object(m.b)(function(e){return{calculate_result:e.interest.calculate_result}},null)(y),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return document.title="\u8907\u5229\u8a08\u7b97\u6a5f, Compute compound interest",a.a.createElement("div",{className:"App"},a.a.createElement(E,null))}}]),t}(r.Component),h=n(1),b=n(20);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(10),O=n(16),g={principal:1e6,interest:.03,interest_period:"month",money_per_period:5e4,stop_money_years:0,deposit_years:20,calculate_result:[]},j=function(e,t){return"month"===t?parseInt(e/12)+" \u5e74 "+String(e%12).padStart(2,"0")+" \u6708":e+" \u5e74"},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FORM_DATA":return Object(O.a)({},e,Object(v.a)({},t.stateAttr,isNaN(t.stateValue)?t.stateValue:+t.stateValue));case"CALCULATE_COMPOUND_INTEREST":return function(e,t){console.log(e.principal,e.interest,e.interest_period,e.money_per_period,e.deposit_years,e.stop_money_years);for(var n="month"===e.interest_period?(e.interest/12).toFixed(6):e.interest,r="month"===e.interest_period?12*e.deposit_years:e.deposit_years,a="month"===e.interest_period?12*e.stop_money_years:e.stop_money_years,l=e.principal,o=e.principal,i=0,c=[],u=1;u<=r;u++){var s=Math.round(l*n);i+=s,l+=s,c.push({period:j(u,e.interest_period),total_principal_money:o,temp_interest_money:s,total_interest_money:i,total_money:l}),(0===a||u<a)&&(l+=e.money_per_period,o+=e.money_per_period)}return console.log(c),Object(O.a)({},e,{calculate_result:c})}(e);default:return e}},w=h.d,A=Object(h.c)({interest:C}),T=Object(h.e)(A,w(Object(h.a)(b.a))),k=a.a.createElement(m.a,{store:T},a.a.createElement(f,null));o.a.render(k,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.72ec162c.chunk.js.map