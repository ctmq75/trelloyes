(this.webpackJsonptrelloyes=this.webpackJsonptrelloyes||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),l=n.n(i),c=n(3),d=n(4),s=n(6),o=n(5);n(12);function m(e){return r.a.createElement("div",{className:"Card"},r.a.createElement("button",{type:"button"},"delete"),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.content))}n(13);function u(e){return r.a.createElement("section",{className:"List"},r.a.createElement("header",{className:"List-header"},r.a.createElement("h2",null,e.header)),r.a.createElement("div",{className:"List-cards"},e.cards.map((function(e){return r.a.createElement(m,{key:e.id,title:e.title,content:e.content})})),r.a.createElement("button",{type:"button",className:"List-add-button"},"+ Add Random Card")))}n(14);var h=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.store;return r.a.createElement("section",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Trelloyes!")),r.a.createElement("div",{className:"App-list"},e.lists.map((function(t){return r.a.createElement(u,{key:t.id,header:t.header,cards:t.cardIds.map((function(t){return e.allCards[t]}))})}))))}}]),n}(a.Component);h.defaultProps={store:{lists:[],allCards:{}}};var p=h;n(15);l.a.render(r.a.createElement(p,{store:{lists:[{id:"1",header:"First list",cardIds:["a","b","e","f","g","j","l","m"]},{id:"2",header:"Second list",cardIds:["b","c","d","f","h","i","k"]},{id:"3",header:"Third list",cardIds:["a","b","c","d","e","f","g","h","i","j","k","l","m"]},{id:"4",header:"Fourth list",cardIds:["l","m"]}],allCards:{a:{id:"a",title:"First card",content:"lorem ipsum"},b:{id:"b",title:"Second card",content:"lorem ipsum"},c:{id:"c",title:"Third card",content:"lorem ipsum"},d:{id:"d",title:"Fourth card",content:"lorem ipsum"},e:{id:"e",title:"Fifth card",content:"lorem ipsum"},f:{id:"f",title:"Sixth card",content:"lorem ipsum"},g:{id:"g",title:"Seventh card",content:"lorem ipsum"},h:{id:"h",title:"Eighth card",content:"lorem ipsum"},i:{id:"i",title:"Ninth card",content:"lorem ipsum"},j:{id:"j",title:"Tenth card",content:"lorem ipsum"},k:{id:"k",title:"Eleventh card",content:"lorem ipsum"},l:{id:"l",title:"Twelfth card",content:"lorem ipsum"},m:{id:"m",title:"Thirteenth card",content:"lorem ipsum"}}}}),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.4f93dda1.chunk.js.map