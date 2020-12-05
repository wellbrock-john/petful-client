(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{1084:function(e,t,n){},1085:function(e,t,n){},1086:function(e,t,n){},1092:function(e,t,n){"use strict";n.r(t);n(31);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),c=(n(36),n(8)),u=n(1),i=n(28),d=n(20),p=n(26),s=n(21),m=n(22),h=n(27),E=n(23),f=n(29),g=(n(37),n(24)),y=n.n(g),v=(n(1084),function(e){var t=e.handleNewPerson,n=e.currentPerson,a=e.people;return o.a.createElement("section",{id:"people-section"},!n&&o.a.createElement("div",{id:"enter-queue"},o.a.createElement("p",null,"Take your spot in the queue to adopt your new pet!"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(e.target.name.value),e.target.name.value=""}},o.a.createElement("input",{required:!0,id:"name",type:"text",placeholder:"Name"}),o.a.createElement("input",{type:"submit",value:"Enter queue"}))),o.a.createElement("p",{id:"current-queue"},"Currently in queue:"),o.a.createElement("ul",null,a.map((function(e,t){return o.a.createElement("li",{key:t},e)}))))}),b=(n(1085),function(e){var t=e.canAdopt,n=e.handleAdopt,a=e.data;return o.a.createElement("section",{className:"pet-section"},!a&&o.a.createElement("p",null,"There are no more of this pet type left to adopt."),a&&o.a.createElement("div",{className:"pet-div"},o.a.createElement("div",{id:"pet-img",style:{backgroundImage:"url(".concat(a.imageURL,")")}}),o.a.createElement("h2",null,a.name),o.a.createElement("p",null,a.imageDescription),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Age:"),o.a.createElement("td",null,a.age)),o.a.createElement("tr",null,o.a.createElement("td",null,"Breed:"),o.a.createElement("td",null,a.breed)),o.a.createElement("tr",null,o.a.createElement("td",null,"Gender:"),o.a.createElement("td",null,a.gender)),o.a.createElement("tr",null,o.a.createElement("td",null,"Story:"),o.a.createElement("td",null,a.story))))),a&&t&&o.a.createElement("button",{id:"adopt-me-btn",onClick:n},"^ Adopt Me! ^"))}),A="https://mighty-woodland-15089.herokuapp.com",P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={loadingStatus:"loading",message:null,canAdopt:!1,currentPerson:null,cat:{},dog:{},people:[]},n.handleNewPerson=function(e){n.setState({currentPerson:e}),n.addToQueue(e),n.startAutomation()},n.addToQueue=function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})};fetch("".concat(A,"/people"),t).then((function(e){return e.json()})).then((function(){n.setState({people:[].concat(Object(p.a)(n.state.people),[e])})}))},n.handleAdopt=function(e){n.adopt(e),n.setState({canAdopt:!1,currentPerson:null})},n.adopt=function(e){if(n.state[e]){var t={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:e})};fetch("".concat(A,"/pets"),t).then((function(e){return e.json()})).then((function(e){var t=Object(d.a)(n.state.people),a=(t[0],t.slice(1)),o=a[0]===n.state.currentPerson,r=o?"It's your turn!":e.message;n.setState({canAdopt:o,cat:e.cat,dog:e.dog,message:r,people:a})}))}},n.startAutomation=function(){var e=setInterval((function(){var e=["cat","dog"][Math.round(Math.random())];n.adopt(e),n.addToQueue(y.a.name.findName())}),3e3),t=setInterval((function(){n.state.canAdopt&&(clearInterval(e),clearInterval(t))}))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=fetch("".concat(A,"/pets")).then((function(e){return e.json()})),n=fetch("".concat(A,"/people")).then((function(e){return e.json()}));Promise.all([t,n]).then((function(t){var n=Object(i.a)(t,2),a=n[0],o=n[1];e.setState({loadingStatus:"loaded",cat:a.cat,dog:a.dog,people:o})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"adopt",className:this.state.loadingStatus},o.a.createElement("section",{id:"loading"},o.a.createElement("span",null,"Loading...")),o.a.createElement("section",{id:"pets"},o.a.createElement(b,{data:this.state.cat,canAdopt:this.state.canAdopt,handleAdopt:function(){e.adopt("cat")}}),o.a.createElement(b,{data:this.state.dog,canAdopt:this.state.canAdopt,handleAdopt:function(){e.adopt("dog")}})),o.a.createElement("p",{id:"message"},this.state.message),o.a.createElement(v,{currentPerson:this.state.currentPerson,handleNewPerson:this.handleNewPerson,people:this.state.people}))}}]),t}(o.a.Component),j=(n(1086),function(){return o.a.createElement("section",{id:"landing"},o.a.createElement("img",{alt:"Puppy",src:"https://place-puppy.com/240x240"}),o.a.createElement("p",null,"Here at Petful, we can help you find the perfect furry little companion. Enter your name to be put in our adoption queue. Then, you only need to wait until your turn comes around to be matched with your new best friend."),o.a.createElement("button",{id:"landing-btn"},o.a.createElement(c.b,{to:"/adopt"},"Start here!")))});var S=function(){return o.a.createElement(c.a,null,o.a.createElement("header",null,o.a.createElement(c.b,{to:"/"},"Petful")),o.a.createElement("main",null,o.a.createElement(u.a,{exact:!0,path:"/",component:j}),o.a.createElement(u.a,{exact:!0,path:"/adopt",component:P})))};l.a.render(o.a.createElement(S,null),document.getElementById("root"))},30:function(e,t,n){e.exports=n(1092)},31:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){}},[[30,1,2]]]);
//# sourceMappingURL=main.778b2055.chunk.js.map