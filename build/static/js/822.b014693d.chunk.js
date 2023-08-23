"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[822],{92256:function(e,l,i){i.d(l,{M:function(){return n},z:function(){return s}});var s=[{num:"00000017",client:"CviLux Group",createDate:"2023-08-10"},{num:"00000016",client:"CviLux Group",createDate:"2023-07-10"},{num:"00000015",client:"CviLux Group",createDate:"2023-06-10"},{num:"00000014",client:"CviLux Group",createDate:"2023-05-10"},{num:"00000013",client:"CviLux Group",createDate:"2023-04-10"}],n={basicInfo:{company:"CviLux Group",taxID:"23632274",contactPerson:"\u9ec3\u4f38\u5149",email:"Mason.Huang@cvilux.com",phone:"02-2620-1000",address:"251\u65b0\u5317\u5e02\u6de1\u6c34\u5340\u4e2d\u6b63\u6771\u8def\u4e00\u6bb53\u5df79\u865f9F"},quotationLists:[{productDes:"O365 E3 Sub Per User",partNum:"AAA-10842",startDate:null,measure:"1 Month(s)",quantity:12,unitPrice:808,QTY:0,country:"Taiwan",totalAmount:0,discount:0,discountUnitPrice:null,discountTotalAmount:null},{productDes:"M365 E3 Unified Sub Per User",partNum:"AAA-10756",startDate:null,measure:"1 Month(s)",quantity:12,unitPrice:1170,QTY:500,country:"Taiwan",totalAmount:7020,discount:25,discountUnitPrice:878,discountTotalAmount:5265}]}},62822:function(e,l,i){i.r(l),i.d(l,{default:function(){return j}});var s=i(93433),n=i(29439),c=i(72791),a=i(57689),r=i(24846),t=i(11941),o=["512 512","<rect width='368' height='32' x='72' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"],u=i(78983),d=i(92256),m=i(80184),x={basicInfo:{company:"",taxID:"",contactPerson:"",email:"",phone:"",address:""},itemDataLists:[{productDes:null,startDate:null,partNum:null,measure:null,quantity:null,unitPrice:null,QTY:null,country:null,totalAmount:null,discount:null,discountUnitPrice:null,discountTotalAmount:null}]},j=function(){var e=(0,a.UO)().childPath,l=(0,c.useState)(!1),i=(0,n.Z)(l,2),j=i[0],h=i[1],p=(0,c.useState)(0),b=(0,n.Z)(p,2),v=b[0],f=b[1],N=(0,c.useState)(x.basicInfo),D=(0,n.Z)(N,2),g=D[0],y=D[1],A=(0,c.useState)(x.itemDataLists),O=(0,n.Z)(A,2),P=O[0],C=O[1];return(0,c.useEffect)((function(){e&&"edit"===e?(y(d.M.basicInfo),C(d.M.quotationLists)):(y(x.basicInfo),C(x.itemDataLists))}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(u.rb,{className:"form-box",children:[(0,m.jsxs)(u.rb,{className:"mb-3",children:[(0,m.jsx)(u.b7,{md:4,children:(0,m.jsx)(u.jO,{label:"\u5ba2\u6236\u540d\u7a31",placeholder:"\u8acb\u8f38\u5165\u5ba2\u6236\u540d\u7a31",value:g.company})}),(0,m.jsx)(u.b7,{md:4,children:(0,m.jsx)(u.jO,{label:"\u7d71\u4e00\u7de8\u865f",placeholder:"\u8acb\u8f38\u5165\u7d71\u4e00\u7de8\u865f",value:g.taxID})})]}),(0,m.jsxs)(u.rb,{className:"mb-3",children:[(0,m.jsx)(u.b7,{md:4,children:(0,m.jsx)(u.jO,{label:"\u806f\u7d61\u4eba",placeholder:"\u8acb\u8f38\u5165\u59d3\u540d",value:g.contactPerson})}),(0,m.jsx)(u.b7,{md:4,children:(0,m.jsx)(u.jO,{type:"email",label:"Email",placeholder:"\u8acb\u8f38\u5165Email",value:g.email})}),(0,m.jsx)(u.b7,{md:4,children:(0,m.jsx)(u.jO,{label:"\u96fb\u8a71",placeholder:"\u8acb\u8f38\u5165\u96fb\u8a71",value:g.phone})})]}),(0,m.jsx)(u.rb,{children:(0,m.jsx)(u.b7,{md:12,children:(0,m.jsx)(u.jO,{label:"\u5730\u5740",placeholder:"\u8acb\u8f38\u5165\u5730\u5740",value:g.address})})})]}),(0,m.jsx)(u.rb,{className:"mb-2",children:(0,m.jsxs)("div",{className:"px-0 d-flex justify-content-between align-items-center",children:[(0,m.jsx)("h5",{className:"mb-0",children:"\u5831\u50f9\u9805\u76ee"}),(0,m.jsx)(u.u5,{color:"primary",shape:"rounded-pill",onClick:function(){var e=[].concat((0,s.Z)(P),[x.itemDataLists[0]]);C(e)},children:"\u65b0\u589e\u9805\u76ee"})]})}),(0,m.jsx)(u.rb,{className:"form-box px-2 overflow-scroll",children:(0,m.jsxs)(u.Sx,{hover:!0,className:"table-bg-none",children:[(0,m.jsx)(u.V,{children:(0,m.jsxs)(u.T6,{children:[(0,m.jsx)(u.is,{className:"col-2",scope:"col",children:"product description"}),(0,m.jsx)(u.is,{scope:"col",children:"part number"}),(0,m.jsx)(u.is,{scope:"col",children:"usage start date"}),(0,m.jsx)(u.is,{scope:"col",children:"unit of measure"}),(0,m.jsx)(u.is,{scope:"col",children:"unit of quantity"}),(0,m.jsx)(u.is,{scope:"col",children:"unit price (TWD)"}),(0,m.jsx)(u.is,{scope:"col",children:"license QTY"}),(0,m.jsx)(u.is,{scope:"col",children:"usage country"}),(0,m.jsx)(u.is,{scope:"col",children:"total amount (TWD)"}),(0,m.jsx)(u.is,{scope:"col",children:"customer discount %"}),(0,m.jsx)(u.is,{scope:"col",children:"discount unit price (TWD)"}),(0,m.jsx)(u.is,{scope:"col",children:"discount total amount (TWD)"}),(0,m.jsx)(u.is,{scope:"col"})]})}),(0,m.jsx)(u.NR,{children:P&&P.length?P.map((function(e,l){return(0,m.jsxs)(u.T6,{children:[(0,m.jsxs)(u.NN,{align:"middle",className:"d-flex align-items-center",children:[(0,m.jsx)(u.jO,{value:e.productDes||""}),(0,m.jsx)(r.Z,{icon:t.B,size:"xxl",className:"ms-1 action-icon",onClick:function(){return e=l,console.log("index",e),h(!0),void f(e);var e}})]}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)(u.jO,{value:e.partNum||""})}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)(u.jO,{value:e.startDate||""})}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)(u.jO,{value:e.measure||""})}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)(u.jO,{value:e.quantity||""})}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)(u.jO,{value:e.unitPrice||""})}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)(u.jO,{value:e.QTY||""})}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)(u.jO,{value:e.country||""})}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)(u.jO,{value:e.totalAmount||""})}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)(u.jO,{value:e.discount||""})}),(0,m.jsx)(u.NN,{align:"middle",children:e.discountUnitPrice||"-"}),(0,m.jsx)(u.NN,{align:"middle",children:e.discountTotalAmount||"-"}),(0,m.jsx)(u.NN,{align:"middle",children:(0,m.jsx)("div",{className:"d-flex align-items-center",onClick:function(){return function(e){if(!P||1!==P.length){var l=JSON.parse(JSON.stringify(P));l.splice(e,1),C(l)}}(l)},children:(0,m.jsx)("div",{className:"action-icon deleted-icon",children:(0,m.jsx)(r.Z,{className:"text-light",icon:o})})})})]},"".concat(e.productDes,"_").concat(l," "))})):null})]})}),(0,m.jsx)(u.rb,{className:"mb-2",children:(0,m.jsx)("div",{className:"px-0 d-flex justify-content-between align-items-center",children:(0,m.jsx)("h5",{className:"mb-0",children:"\u5099\u8a3b"})})}),(0,m.jsx)(u.rb,{className:"form-box px-2",children:(0,m.jsx)(u.b7,{md:12,children:(0,m.jsx)(u.PB,{rows:3})})}),(0,m.jsxs)(u.Tk,{visible:j,onClose:function(){return h(!1)},children:[(0,m.jsx)(u.p0,{children:(0,m.jsx)(u.fl,{children:"\u641c\u5c0b\u7522\u54c1\u9805\u76ee"})}),(0,m.jsx)(u.sD,{children:(0,m.jsxs)("div",{className:"px-2",children:[(0,m.jsx)(u.LX,{label:"\u7522\u54c1\u9805\u76ee",className:"mb-2",options:["\u8acb\u9078\u64c7\u7522\u54c1\u9805\u76ee",{label:"M365 Apps Enterprise Device Sub Per Device",value:"1GJ-00001"},{label:"Office Professional Plus ALng LSA",value:"269-05623"},{label:"Office Professional Plus ALng SASU Office Standard",value:"269-07493"}]}),(0,m.jsx)(u.LX,{label:"Level",className:"mb-2",options:["\u8acb\u9078\u64c7",{label:"A",value:"A"},{label:"B",value:"B"},{label:"C",value:"C"},{label:"D",value:"D"}]}),(0,m.jsx)(u.LX,{label:"Purchase Unit",className:"mb-2",options:["\u8acb\u9078\u64c7",{label:"1 month(s)",value:"1M"}]})]})}),(0,m.jsxs)(u.Ym,{children:[(0,m.jsx)(u.u5,{color:"secondary",onClick:function(){return h(!1)},children:"Close"}),(0,m.jsx)(u.u5,{color:"primary",onClick:function(){var e=P[v];e.productDes="M365 Apps Enterprise Device Sub Per Device",e.partNum="1GJ-00001",e.unitPrice=1e3;var l=P;l[v]=e,C(l),h(!1)},children:"\u9078\u64c7"})]})]})]})}},11941:function(e,l,i){i.d(l,{B:function(){return s}});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M334.627,16H48V496H472V153.373ZM440,464H80V48H321.373L440,166.627Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M239.861,152a95.861,95.861,0,1,0,53.624,175.284l68.03,68.029,22.627-22.626-67.5-67.5A95.816,95.816,0,0,0,239.861,152ZM176,247.861a63.862,63.862,0,1,1,63.861,63.861A63.933,63.933,0,0,1,176,247.861Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=822.b014693d.chunk.js.map