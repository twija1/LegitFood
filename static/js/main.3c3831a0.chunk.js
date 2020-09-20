(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{121:function(e,t,a){e.exports=a(154)},126:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c);a(126);var i,o=function(){return r.a.createElement("div",null,"Landing Page")},u=a(59),m=a(31),s=a(107),d=a(197),E=a(198),p=a(216),f=a(215),g=a(87),h=a(199),b=a(200),v=a(201),y=a(202),j=a(196),O=a(26),C=a(30),k=a(21),I=(i={},Object(C.a)(i,"SET_ITEM",(function(e,t){var a=t.itemId,n=t.quantity,r=e.cart.find((function(e){return e.id===a}))?e.cart.map((function(e){return e.id===a?Object(k.a)(Object(k.a)({},e),{},{quantity:n}):e})):[].concat(Object(u.a)(e.cart),[{id:a,quantity:n}]);return Object(k.a)(Object(k.a)({},e),{},{cart:r.filter((function(e){return e.quantity>=1}))})})),Object(C.a)(i,"DELETE_ITEM",(function(e,t){var a=t.itemId,n=e.cart.filter((function(e){return e.id!==a}));return Object(k.a)(Object(k.a)({},e),{},{cart:n})})),Object(C.a)(i,"SET_DATA",(function(e,t){var a=t.data;return Object(k.a)(Object(k.a)({},e),{},{data:a})})),Object(C.a)(i,"INCREMENT",(function(e,t){var a=t.itemId,n=e.cart.find((function(e){var t=e.id;return a===t}))?e.cart.map((function(e){return e.id===a?Object(k.a)(Object(k.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(u.a)(e.cart),[{id:a,quantity:1}]);return Object(k.a)(Object(k.a)({},e),{},{cart:n})})),i),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],cart:[]},t=arguments.length>1?arguments[1]:void 0,a=I[t.type];return a?a(e,t.args):e},T=a(12),x=a(187),N=a(53),w=a(217),q=a(190),A=a(32),D=a.n(A),M=a(3),_=a(104),L=a.n(_),z=a(105),F=a.n(z),B=D()((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:{color:e.palette.secondary.main,backgroundColor:Object(T.d)(e.palette.secondary.light,.75)},title:{flex:"1 1 100%"}}}));var P=function(e){var t=e.numSelected,a=e.deleteItems,n=B();return r.a.createElement(x.a,{className:Object(M.a)(n.root,Object(C.a)({},n.highlight,t>0))},t>0?r.a.createElement(N.a,{className:n.title,color:"inherit",variant:"subtitle1",component:"div"},t," selected"):r.a.createElement(N.a,{className:n.title,variant:"h6",id:"tableTitle",component:"div"},"Your Cart"),t>0?r.a.createElement(w.a,{title:"Delete"},r.a.createElement(q.a,{"aria-label":"delete",onClick:a},r.a.createElement(L.a,null))):r.a.createElement(w.a,{title:"Filter list"},r.a.createElement(q.a,{"aria-label":"filter list"},r.a.createElement(F.a,null))))},Q=a(191),R=a(192),W=a(193),J=a(195);var G=function(e){var t=e.onClose,a=e.open,c=e.onOrder,l=Object(n.useState)(""),i=Object(m.a)(l,2),o=i[0],u=i[1],s=Object(n.useState)(""),d=Object(m.a)(s,2),E=d[0],p=d[1],g=function(){return t()};return r.a.createElement(Q.a,{onClose:g,open:a},r.a.createElement(R.a,null,r.a.createElement(W.a,null,"Complete form"),r.a.createElement(f.a,{required:!0,autoFocus:!0,margin:"dense",fullWidth:!0,label:"Location",onChange:function(e){return u(e.target.value)}}),r.a.createElement(f.a,{fullWidth:!0,margin:"dense",label:"Comment",onChange:function(e){return p(e.target.value)}})),r.a.createElement(J.a,null,r.a.createElement(j.a,{onClick:function(){c(o,E),g()}},"order")))},Y=a(39);var K=function(e){var t=e.open,a=e.onClose,n=Object(Y.d)();return r.a.createElement(Q.a,{open:t,onClose:function(){return a()},disableBackdropClick:!0,disableEscapeKeyDown:!0},r.a.createElement(R.a,null,r.a.createElement(W.a,null,"Your Cart is empty!"),r.a.createElement(J.a,null,r.a.createElement(j.a,{onClick:function(){n.push("/food-page")}},"Go to food list"))))};var U=Object(s.a)((function(e){return{table:{minWidth:700},paper:{width:"100%",marginBottom:e.spacing(2)},checkout:{float:"right"},qty:{width:80}}}));var H=function(){var e=U(),t=Object(O.b)(),a=Object(O.c)((function(e){return e.cart})),c=Object(O.c)((function(e){return e.data})),l=Object(n.useState)([]),i=Object(m.a)(l,2),o=i[0],s=i[1],C=Object(n.useState)(!1),k=Object(m.a)(C,2),I=k[0],S=k[1],T=Object(n.useMemo)((function(){return a.map((function(e){var t=e.id,a=e.quantity;return{item:c.find((function(e){return e.id===t})),quantity:a}}))}),[a,c]),x=Object(n.useState)(0===T.length),N=Object(m.a)(x,2),w=N[0],q=N[1],A=function(e){return(100*e/100).toFixed(2)},D=T.map((function(e){var t=e.item,a=e.quantity;return t.price*a})).reduce((function(e,t){return e+t}),0),M=A(10+D),_=T.map((function(a){var n=a.item,c=a.quantity;return r.a.createElement(d.a,{key:n.id},r.a.createElement(E.a,{padding:"checkbox"},r.a.createElement(p.a,{checked:o.includes(n.id),onChange:function(){return e=n.id,void(o.includes(e)?s(o.filter((function(t){return e!==t}))):s([].concat(Object(u.a)(o),[e])));var e}})),r.a.createElement(E.a,{align:"left"},n.name),r.a.createElement(E.a,{align:"center"},r.a.createElement(f.a,{type:"number",value:c,onChange:function(e){return function(e,a){var n=Math.floor(e.target.value);t(n>0?{type:"SET_ITEM",args:{itemId:a,quantity:n}}:{type:"SET_ITEM",args:{itemId:a,quantity:1}})}(e,n.id)},size:"small",variant:"outlined",className:e.qty})),r.a.createElement(E.a,{align:"center"},A(n.price)),r.a.createElement(E.a,{align:"right"},A(n.price*c)))}));return r.a.createElement("div",null,0===T.length?r.a.createElement(K,{open:w,onClose:function(){q(!1)}}):r.a.createElement(g.a,{className:e.paper},r.a.createElement(P,{numSelected:o.length,deleteItems:function(){o.map((function(e){return t({type:"DELETE_ITEM",args:{itemId:e}})})),s([])}}),r.a.createElement(h.a,{component:g.a},r.a.createElement(b.a,{classes:e.table,"aria-label":"spanning table",size:"small"},r.a.createElement(v.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null),r.a.createElement(E.a,{align:"left",colSpan:3},"Details"),r.a.createElement(E.a,{align:"right"},"Price")),r.a.createElement(d.a,null,r.a.createElement(E.a,{padding:"checkbox"},r.a.createElement(p.a,{indeterminate:o.length>0&&o.length<T.length,onChange:function(){o.length===T.length?s([]):s(T.map((function(e){return e.item.id})))},checked:o.length===T.length&&T.length>0})),r.a.createElement(E.a,{align:"left"},"Desc"),r.a.createElement(E.a,{align:"center"},"Qty."),r.a.createElement(E.a,{align:"center"},"Unit"),r.a.createElement(E.a,{align:"right"},"Sum"))),r.a.createElement(y.a,null,_,r.a.createElement(d.a,null,r.a.createElement(E.a,{rowSpan:3,colSpan:3}),r.a.createElement(E.a,{align:"left"},"Subtotal"),r.a.createElement(E.a,{align:"right"},A(D))),r.a.createElement(d.a,null,r.a.createElement(E.a,{align:"left"},"Delivery"),r.a.createElement(E.a,{align:"right"},A(10))),r.a.createElement(d.a,null,r.a.createElement(E.a,{align:"left"},"Total"),r.a.createElement(E.a,{align:"right"},M))))),r.a.createElement(j.a,{disabled:0===T.length,className:e.checkout,onClick:function(){S(!0)}},"Checkout")),r.a.createElement(G,{open:I,onClose:function(){S(!1)},onOrder:function(e,t){console.log("".concat(e,", ").concat(t,", ").concat(a)),function(e,t,a){fetch("http://localhost:8080/orders",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({dishes:e,location:t,comment:a})}).then((function(e){return e.json()})).catch((function(e){return e}))}(a.map((function(e){return{dishId:e.id,quantity:e.quantity}})),e,t)}}))},V=a(203),X=a(204),Z=a(207),$=a(206),ee=a(205),te=a(208),ae=D()({card:{maxWidth:345,textAlign:"center"},actionArea:{height:150}});var ne=function(e){var t=e.item,a=e.onClick,n=e.incrementQuantity,c=ae(),l=t.id,i=t.name,o=t.photo,u=t.price,m=t.description;return r.a.createElement(V.a,{className:c.card},r.a.createElement(X.a,{onClick:function(){return a(t)}},r.a.createElement(ee.a,{image:o,title:i,className:c.actionArea}),r.a.createElement($.a,null,r.a.createElement(N.a,{gutterBottom:!0,variant:"h5",component:"h2"},i),r.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"p"},m))),r.a.createElement(Z.a,null,r.a.createElement(te.a,{container:!0,justify:"space-around"},r.a.createElement(j.a,{size:"small",color:"primary",onClick:function(){n(l)}},"Add to cart"),r.a.createElement(N.a,null,"Price"),r.a.createElement(N.a,null,Number.parseFloat(u).toFixed(2)," z\u0142"))))},re=a(209),ce=D()({card:{width:345},actionArea:{height:150},img:{height:"50%",width:"50%",float:"left",marginRight:5},content:{justifyContent:"space-between",flexDirection:"row"},allergens:{clear:"left"}});var le=function(e){var t=e.onClose,a=e.open,n=e.item,c=e.incrementQuantity,l=ce(),i=n.ingredients?n.ingredients.join(", "):"",o=n.allergens?n.allergens.join(", "):"";return r.a.createElement(Q.a,{onClose:function(){t()},open:a},r.a.createElement(re.a,{style:{textAlign:"center",fontSize:50},disableTypography:!0,children:n.name}),r.a.createElement(R.a,{className:l.content},r.a.createElement("img",{src:n.photo,alt:n.name,className:l.img}),r.a.createElement(W.a,null,n.description,"Ingredients: ",i),r.a.createElement(W.a,{className:l.allergens},"Allergens: ",o)),r.a.createElement(J.a,null,r.a.createElement(j.a,{onClick:function(){c(n.id),t()}},"Add to cart")))};var ie=function(){var e=Object(n.useState)({open:!1,data:{}}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(O.c)((function(e){return e.data})),i=Object(O.b)(),o=function(e){c({open:!0,data:e})},u=function(e){i({type:"INCREMENT",args:{itemId:e}})},s=l.map((function(e){return r.a.createElement(te.a,{item:!0,xs:12,sm:4,key:e.id},r.a.createElement(ne,{item:e,onClick:o,incrementQuantity:u}))}));return r.a.createElement(te.a,{container:!0,spacing:3},s,a.open&&r.a.createElement(le,{item:a.data,open:a.open,onClose:function(){c({open:!1,data:{}})},incrementQuantity:u}))},oe=a(210),ue=a(211),me=a(212),se=a(213),de=a(214),Ee=a(52),pe=a(57),fe=a(218),ge=a(194);var he=function(e){var t=e.drawerList,a=e.classes;return r.a.createElement(fe.a,{className:a.drawer,variant:"permanent",anchor:"left",classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(ge.a,null,t))},be=D()((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,padding:16},content:{flexGrow:1,padding:e.spacing(3)},drawer:{flexShrink:0,width:100},drawerPaper:{width:100},toolbar:e.mixins.toolbar,root:{display:"flex"}}}));var ve=function(){var e=be(),t=Object(O.b)();Object(n.useEffect)((function(){fetch("http://localhost:8080/dishes").then((function(e){return e.json()})).then((function(e){return t({type:"SET_DATA",args:{data:e}})}))}),[t]);var a=[{text:"Main",link:"/landing-page"},{text:"Food",link:"/food-page"},{text:"Cart",link:"/shopping-cart-page"}].map((function(e,t){return r.a.createElement(oe.a,{alignItems:"center",button:!0,key:t,component:pe.b,to:e.link},r.a.createElement(ue.a,{style:{textAlign:"center"},primary:e.text}))}));return r.a.createElement("div",{className:e.root},r.a.createElement(me.a,null),r.a.createElement(se.a,{position:"fixed",className:e.appBar},r.a.createElement(N.a,{variant:"h6"},"LegitFood")),r.a.createElement(he,{drawerList:a,classes:e}),r.a.createElement(de.a,{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement("div",null,r.a.createElement(Ee.c,null,r.a.createElement(Ee.a,{exact:!0,from:"/",to:"/landing-page"}),r.a.createElement(Ee.b,{path:"/food-page",component:function(){return r.a.createElement(ie,null)}}),r.a.createElement(Ee.b,{path:"/shopping-cart-page",component:function(){return r.a.createElement(H,null)}}),r.a.createElement(Ee.b,{exact:!0,path:"/landing-page",component:function(){return r.a.createElement(o,null)}})))))},ye=a(66),je={setItem:function(){return S.dispatch({type:"SET_ITEM"})},deleteItem:function(){return S.dispatch({type:"DELETE_ITEM"})},setData:function(){return S.dispatch({type:"SET_DATA"})},increment:function(){return S.dispatch({type:"INCREMENT"})},getState:S.getState,subscribe:S.subscribe,storeInstance:Object(ye.b)(S)};l.a.render(r.a.createElement(O.a,{store:je.storeInstance},r.a.createElement(pe.a,null,r.a.createElement(ve,null))),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.3c3831a0.chunk.js.map