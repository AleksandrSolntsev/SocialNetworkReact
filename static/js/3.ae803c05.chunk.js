(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{296:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1QGRD",dialogsItems:"Dialogs_dialogsItems__wkOQt",dialog:"Dialogs_dialog__CY9X6",active:"Dialogs_active__3zB6M",messages:"Dialogs_messages__2464a",message:"Dialogs_message__28oB4"}},297:function(e,s,a){"use strict";a.r(s);a(1);var i=a(296),t=a.n(i),n=a(13),c=a(0),d=function(e){var s="/dialogs/"+e.id;return Object(c.jsx)("div",{className:t.a.dialog,children:Object(c.jsx)(n.b,{to:s,className:function(e){return e.isActive?t.a.active:"inactive"},children:e.name})})},o=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:t.a.message,children:e.message})})},l=a(11),g=a(92),r=a(131),j=a(29),m=a(39),b=Object(m.a)(10),u=Object(r.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{component:j.b,validate:[m.b,b],name:"newMessageBody",placeholder:"Enter You Message"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Send"})})]})})),O=function(e){var s=e.dialogPage,a=s.dialogData.map((function(e){return Object(c.jsx)(d,{name:e.name,id:e.id},e.id)})),i=s.messagesData.map((function(e){return Object(c.jsx)(o,{message:e.message,id:e.id},e.id)}));return e.isAuth?Object(c.jsxs)("div",{className:t.a.dialogs,children:[Object(c.jsx)("div",{className:t.a.dialogsItems,children:a}),Object(c.jsx)("div",{className:t.a.messages,children:Object(c.jsx)("div",{children:i})}),Object(c.jsx)(u,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(c.jsx)(l.a,{to:"/login"})},h=a(130),v=a(12),x=a(66),_=a(9);s.default=Object(_.d)(Object(v.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{sendMessage:function(s){e(Object(h.b)(s))}}})),x.a)(O)}}]);
//# sourceMappingURL=3.ae803c05.chunk.js.map