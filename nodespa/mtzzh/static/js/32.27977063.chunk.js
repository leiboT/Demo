(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{794:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return N});a(535);var n=a(536),l=a.n(n),i=(a(616),a(617)),c=a.n(i),s=(a(573),a(574)),o=a.n(s),r=(a(795),a(801)),u=a.n(r),m=(a(643),a(811)),p=a.n(m),d=(a(527),a(529)),f=a.n(d),h=(a(571),a(572)),g=a.n(h),v=a(85),E=a(86),b=a(88),y=a(87),k=a(89),_=a(2),C=a.n(_),O=a(819),I=a.n(O),w=a(66),j=a(51),N=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(l)))).state={files:[],multiple:!0,BaseDataList:[],PickerValue:""},a.init=function(){Object(w.a)({url:j.a.getBaseDataList,data:{type:"CRM140_fClmTypeID"}}).then(function(e){var t=[];e.forEach(function(e,a){t.push({label:e.fdesc,value:e.fcode})}),a.setState({BaseDataList:t})}).catch(function(e){console.log(e)})},a.onChange=function(e,t,n){console.log(e,t,n),a.setState({files:e})},a.sqOk=function(e){console.log(e),a.setState({PickerValue:e})},a.commit=function(){Object(w.a)({url:"/storejps/claim/save",data:{custproblem:"\u60c5\u554a\u706b\u5c71\u7206\u53d1\u6536\u6b3e\u5bbd\u5ea6\u675c\u5361\u8fea",fasksettledate:"2018-10-20",fclmtypeid:"100541",fordid:"1001088",imgList:[]}}).then(function(e){})},a}return Object(k.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var e=this,t=this.state,a=t.files,n=t.storeId,i=t.datePickerValue,s=t.textareaValue;return C.a.createElement("div",{className:I.a.apply},C.a.createElement("div",{className:I.a.item},C.a.createElement(g.a,{value:n,onChange:function(t){e.setState({storeId:t.target.value})}},"\u8ba2\u5355\u53f7")),C.a.createElement("div",{className:I.a.item},C.a.createElement(p.a,{data:this.state.BaseDataList,value:this.state.PickerValue,onOk:this.sqOk,cols:1},C.a.createElement(f.a.Item,{arrow:"horizontal"},"\u8bc9\u6c42"))),C.a.createElement("div",{className:I.a.item+" "+I.a.mb8},C.a.createElement(u.a,{data:this.state.BaseDataList,value:i,onChange:function(t){e.setState({datePickerValue:t.target.value})}},C.a.createElement(f.a.Item,{arrow:"horizontal"},"\u8981\u6c42\u5b8c\u6210\u65e5\u671f"))),C.a.createElement("div",{className:I.a.item},C.a.createElement(f.a.Item,null,"\u95ee\u9898\u63cf\u8ff0",C.a.createElement(o.a,{placeholder:"\u8bf7\u8f93\u5165\u95ee\u9898\u63cf\u8ff0","data-seed":"logId",value:s,onChange:function(t){e.setState({textareaValue:t.target.value})},ref:function(t){return e.autoFocusInst=t},autoHeight:!0}))),C.a.createElement("div",{className:I.a.item},C.a.createElement(f.a.Item,null,"\u62cd\u7167\u4e0a\u4f20",C.a.createElement("span",null,"(",a.length,"/10)"),C.a.createElement(c.a,{files:a,onChange:this.onChange,onImageClick:function(e,t){return console.log(e,t)},selectable:a.length<10,multiple:this.state.multiple}))),C.a.createElement("div",{className:I.a.paddingbox},C.a.createElement(l.a,{type:"primary",onClick:this.commit},"\u63d0\u4ea4")))}}]),t}(_.Component)},819:function(e,t,a){e.exports={apply:"apply_apply__1soCr",item:"apply_item__3A6Nk",mb8:"apply_mb8__cV_Od",paddingbox:"apply_paddingbox__3yqy8"}}}]);
//# sourceMappingURL=32.27977063.chunk.js.map