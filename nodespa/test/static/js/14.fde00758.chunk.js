(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{543:function(e,t,a){"use strict";var n=a(520),o=a(2),r=a.n(o);t.a=function(e){var t=Object(n.a)({},e).message,a=void 0===t?"\u65e0\u7ed3\u679c":t;return r.a.createElement("div",{className:"normalFontSizeC shallowGreyColor",style:{textAlign:"center"}},a)}},570:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(81),o=a(82),r=a(84),i=a(83),c=a(85),s=a(2),l=a.n(s),u=a(571),d=a.n(u),p=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.rowData,n=e.style,o=void 0===n?null:n,r=e.className,i=void 0===r?null:r;return l.a.createElement("div",{onClick:t,className:i?"".concat(d.a.wrapper," ").concat(i):d.a.wrapper,style:o},l.a.createElement("img",{src:a.imgUrl,alt:""}),l.a.createElement("div",{className:"normalFontSizeC oneRowOverflowOmit"},a.title))}}]),t}(s.Component);p.defaultProps={onClick:function(){},rowData:{}}},571:function(e,t,a){e.exports={wrapper:"index_wrapper__3x62P"}},620:function(e,t,a){e.exports={wrapper:"searchBar_wrapper__1_htI",wrapper_search:"searchBar_wrapper_search__zrdU1"}},622:function(e,t,a){e.exports={mask:"index_mask__3t0eW",mask_wrapper:"index_mask_wrapper__2c0Xf",mask_wrapper_content:"index_mask_wrapper_content__1ideF"}},624:function(e,t,a){e.exports={wrapper:"filter_wrapper__3H58A"}},626:function(e,t,a){e.exports={wrapper:"classify_wrapper__1kjRn",active:"classify_active__2fTPt"}},628:function(e,t,a){e.exports={wrapper:"case_wrapper__1cBEl",list_row_wrapper:"case_list_row_wrapper__3pDV6",list_row_wrapper_content:"case_list_row_wrapper_content__1eRat",list_row_wrapper_content_footer:"case_list_row_wrapper_content_footer__2OjCx",filter_wrapper:"case_filter_wrapper__3NSP3",filter_item_wrapper:"case_filter_item_wrapper__2RDeT",active:"case_active__2FP4u"}},630:function(e,t,a){e.exports={tabs_content:"mountings_tabs_content__3tKbu",active:"mountings_active__-2UoE",list_row_wrapper:"mountings_list_row_wrapper__1oEuN"}},632:function(e,t,a){e.exports={filter_wrapper:"palette_filter_wrapper__3r3Hs"}},710:function(e,t,a){"use strict";a.r(t);a(567);var n=a(568),o=a.n(n),r=a(520),i=a(81),c=a(82),s=a(84),l=a(83),u=a(85),d=a(2),p=a.n(d),h=a(109),m=(a(554),a(555)),f=a.n(m),g=a(87),b=(a(226),a(156)),v=a.n(b),_=a(542),w=(a(548),a(549)),y=a.n(w),k=a(32),E=a.n(k),O=a(594),S=a(41),C=a(543),L=(a(613),a(616)),j=a.n(L),N=a(620),R=a.n(N),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.placeholder,a=e.extra,n=e.onSearch;return p.a.createElement("div",{className:R.a.wrapper},p.a.createElement(j.a,{className:R.a.wrapper_search,placeholder:t,onSubmit:n,onClear:n}),a)}}]),t}(d.Component);B.defaultProps={placeholder:"",extra:null,onSearch:function(){}};var x=a(622),I=a.n(x),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).renderModal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.visible,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.children,n=a.props,o=n.onCancel,r=n.maskClose;E.a.render(p.a.createElement("div",{className:I.a.mask,style:{transform:"translateX(".concat(e?0:"100%",")")},onClick:function(e){r&&o()}},p.a.createElement("div",{className:I.a.mask_wrapper},p.a.createElement("div",{className:I.a.mask_wrapper_content,onClick:function(e){e.stopPropagation()}},t))),a.modal)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.modal=document.createElement("div"),document.body.appendChild(this.modal),this.renderModal()}},{key:"componentWillReceiveProps",value:function(e){var t=e.visible,a=e.children;this.renderModal(t,a)}},{key:"componentWillUnmount",value:function(){E.a.unmountComponentAtNode(this.modal),document.body.removeChild(this.modal)}},{key:"render",value:function(){return p.a.createElement("noscript",null)}}]),t}(d.Component);T.defaultProps={onCancel:function(){},visible:!1,maskClose:!0};var D=a(624),M=a.n(D),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1},a.onCancel=function(){a.setState({visible:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.visible,a=this.props,n=a.children,o=a.onRest,r=a.onOk;return p.a.createElement("span",{onClick:function(t){e.setState({visible:!0})}},p.a.createElement("i",{className:"iconfont icon-filter",style:{fontSize:22}}),p.a.createElement(T,{visible:t,onCancel:this.onCancel},p.a.createElement("div",{className:M.a.wrapper},p.a.createElement("div",null,n),p.a.createElement("div",{className:"xBoth1px"},p.a.createElement("span",{onClick:o},"\u91cd\u7f6e"),p.a.createElement("span",{onClick:function(){r(),e.onCancel()}},"\u786e\u5b9a")))))}}]),t}(d.Component);P.defaultProps={onRest:function(){},onOk:function(){}};var z=a(626),A=a.n(z),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={current:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.source,a=e.itemClick,n=t[0].val;t.length&&(this.setState({current:n}),a(n))}},{key:"render",value:function(){var e=this,t=this.state.current,a=this.props,n=a.source,o=a.itemClick;return p.a.createElement("ul",{className:"".concat(A.a.wrapper," normalFontSizeC xBottom1px")},n.map(function(a,r){return p.a.createElement("li",{key:a.val,className:t===a.val?A.a.active:null,onClick:function(t){var n=e.state.current,r=a.val;n!==r&&(e.setState({current:r}),o(r))}},p.a.createElement("div",{style:{borderRight:r>=n.length-1?"none":null}},a.title))}))}}]),t}(d.Component);F.defaultProps={source:[],itemClick:function(){}};var H=a(112),U=a(86),W=a(155),G=a(628),J=a.n(G),X=Object(S.a)(function(){return Promise.all([a.e(1),a.e(4),a.e(26)]).then(a.bind(null,707))}),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={pageNo:1,pageSize:10,hasMore:!0,dataBlobs:[],dataSource:new y.a.DataSource({rowHasChanged:function(e,t){return e!==t}}),isLoading:!1,height:0,keyword:"",sceneId:"",areaIdList:[],huxingIdList:[],meritsIdList:[],priceIdList:[],styleIdList:[],sortColumn:"",caseBaseList:[]},a.goToDetail=function(e){var t=a.props,n=t.history,o=t.match;n.push({pathname:o.path+"/case",state:e})},a.getCaseBaseList=function(){Object(H.a)({url:U.a.caseBaseList}).then(function(e){a.setState({caseBaseList:e})}).catch(function(e){})},a.getCaseList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pageNo,n=void 0===t?a.state.pageNo:t,o=e.keyword,r=void 0===o?a.state.keyword:o,i=e.dataBlobs,c=void 0===i?a.state.dataBlobs:i,s=e.sortColumn,l=void 0===s?a.state.sortColumn:s,u=a.state,d=u.pageSize,p=u.sceneId,h=u.areaIdList,m=u.huxingIdList,f=u.meritsIdList,g=u.priceIdList,b=u.styleIdList,v=u.dataSource;a.setState({isLoading:!0,keyword:r,sortColumn:l}),Object(H.a)({url:U.a.pageCase,data:{pageNo:n,pageSize:d,keyword:r,sceneId:p,areaIdList:h,huxingIdList:m,meritsIdList:f,priceIdList:g,styleIdList:b,sortColumn:l}}).then(function(e){var t=e.list,o=e.pageTurn,r=o.nextPage,i=o.rowCount,s=Object(_.a)(c).concat(Object(_.a)(t));a.setState({hasMore:!(s.length>=i),pageNo:r,dataBlobs:s,dataSource:v.cloneWithRows(s.concat()),isLoading:!1}),1===n&&a.lv.scrollTo(0,0)}).catch(function(e){a.setState({isLoading:!1})})},a.onEndReached=function(e){var t=a.state,n=t.isLoading,o=t.hasMore;!n&&o&&a.getCaseList()},a.onRefresh=function(e){var t=Object(r.a)({},e);console.log(t)},a.onSearch=function(e){e!==a.state.keyword&&a.getCaseList({pageNo:1,keyword:e,dataBlobs:[]})},a.onOk=function(){a.getCaseList({pageNo:1,dataBlobs:[]})},a.whichOne=function(e,t,a,n,o,r,i){switch(e){case"space_material":t();break;case"style_material":a();break;case"luminance_material":n();break;case"price_material":o();break;case"area_material":r();break;case"household_material":i()}},a.onComment=function(e,t){t.stopPropagation(),a.goToDetail(e)},a.onLikes=function(e,t,n){n.stopPropagation(),Object(H.a)({url:U.a.saveLikes,data:{id:e.id,status:1}}).then(function(e){v.a.success(e,.7);var n=a.state,o=n.dataBlobs,r=n.dataSource,i=Object(_.a)(o),c=Object(g.a)({},i[t]);c.likes++,i.splice(t,1,c),a.setState({dataBlobs:i,dataSource:r.cloneWithRows(i)})}).catch(function(e){})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.documentElement.clientHeight-E.a.findDOMNode(this.lv).getBoundingClientRect().top;this.setState({height:e}),this.getCaseBaseList()}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.caseBaseList,o=a.sceneId,r=a.styleIdList,i=a.meritsIdList,c=a.priceIdList,s=a.areaIdList,l=a.huxingIdList,u=a.dataBlobs,d=a.dataSource,h=a.height,m=this.props.match;return p.a.createElement("div",{className:J.a.wrapper},p.a.createElement(B,{placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57",extra:p.a.createElement(P,{onRest:function(){t.setState({sceneId:"",styleIdList:[],meritsIdList:[],priceIdList:[],areaIdList:[],huxingIdList:[]})},onOk:this.onOk},p.a.createElement("div",null,n.map(function(a){return t.whichOne(a.key,function(){e=o},function(){e=r},function(){e=i},function(){e=c},function(){e=s},function(){e=l}),p.a.createElement("ul",{key:a.key,className:J.a.filter_wrapper},p.a.createElement("li",{className:"titleFontSizeC"},a.name),p.a.createElement("li",null,p.a.createElement("ul",{className:"".concat(J.a.filter_item_wrapper," normalFontSizeC")},a.data.map(function(n){return p.a.createElement("li",{key:n.id,onClick:function(e){var u=function(e){return e.filter(function(e){return e===n.id}).length?e.filter(function(e){return e!==n.id}):Object(_.a)(e).concat([n.id])};t.whichOne(a.key,function(){t.setState({sceneId:n.id===o?"":n.id})},function(){t.setState({styleIdList:u(r)})},function(){t.setState({meritsIdList:u(i)})},function(){t.setState({priceIdList:u(c)})},function(){t.setState({areaIdList:u(s)})},function(){t.setState({huxingIdList:u(l)})})},className:Array.isArray(e)&&e.some(function(e){return e===n.id})||n.id===e?J.a.active:null},n.name||n.range)}))))}))),onSearch:this.onSearch}),p.a.createElement(F,{source:[{title:"\u6700\u65b0",val:"a.create_time"},{title:"\u4eba\u6c14",val:"b.intents"},{title:"\u70b9\u8d5e",val:"b.likes"},{title:"\u6536\u85cf",val:"b.collects"}],itemClick:function(e){t.getCaseList({pageNo:1,dataBlobs:[],sortColumn:e})}}),p.a.createElement("div",{className:"bg_grey_list_view"},p.a.createElement(y.a,{ref:function(e){return t.lv=e},dataSource:d,renderHeader:function(){return u.length?null:p.a.createElement(C.a,null)},renderRow:function(e,a,n){return p.a.createElement("div",{key:e.id,className:J.a.list_row_wrapper,onClick:t.goToDetail.bind(t,e)},p.a.createElement("img",{src:W.c+e.surfacePlotUrl,alt:e.title}),p.a.createElement("div",{className:J.a.list_row_wrapper_content},p.a.createElement("p",{className:"titleFontSizeC twoRowsOverflowOmit"},e.title),p.a.createElement("p",{className:"textFontSizeC shallowGreyColor twoRowsOverflowOmit"},e.styleName),p.a.createElement("ul",{className:"".concat(J.a.list_row_wrapper_content_footer," textFontSizeC xTop1px")},p.a.createElement("li",null,p.a.createElement("i",{className:"iconfont icon-chakan"}),e.views),p.a.createElement("li",{onClick:t.onComment.bind(t,e),className:"yBoth1px"},p.a.createElement("i",{className:"iconfont icon-xiaoxi"}),e.comments),p.a.createElement("li",{onClick:t.onLikes.bind(t,e,n)},p.a.createElement("i",{className:"iconfont icon-i-good"}),e.likes))))},style:{height:h},onEndReached:this.onEndReached,onEndReachedThreshold:80,pullToRefresh:p.a.createElement(f.a,{direction:"down",distanceToRefresh:40,onRefresh:this.onRefresh})})),p.a.createElement(O.a,{path:m.path+"/case",component:X}))}}]),t}(d.Component),V=a(630),q=a.n(V),Q=Object(S.a)(function(){return Promise.all([a.e(1),a.e(27)]).then(a.bind(null,708))}),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={pageNo:1,pageSize:10,hasMore:!0,dataBlobs:[],dataSource:new y.a.DataSource({rowHasChanged:function(e,t){return e!==t}}),isLoading:!1,height:0,pid:"",brandname:"",keyword:"",brandList:[],classifyList:[]},a.goToDetail=function(e){var t=a.props,n=t.history,o=t.match;n.push({pathname:o.path+"/mountings",state:e})},a.getBrandList=function(){Object(H.a)({url:U.a.brandList}).then(function(e){a.setState({brandList:e})}).catch(function(e){console.log(e)})},a.getMountingsClassify=function(){Object(H.a)({url:U.a.partSortList,data:{pid:0}}).then(function(e){a.setState({classifyList:e})}).catch(function(e){console.log(e)})},a.getMountingsList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pageNo,n=void 0===t?a.state.pageNo:t,o=e.keyword,r=void 0===o?a.state.keyword:o,i=e.dataBlobs,c=void 0===i?a.state.dataBlobs:i,s=a.state,l=s.pageSize,u=s.pid,d=s.brandname,p=s.dataSource;a.setState({isLoading:!0,keyword:r}),Object(H.a)({url:U.a.partDetailList,data:{pageNo:n,pageSize:l,status:1,pid:u,brandname:d,keyword:r}}).then(function(e){var t=e.list,o=e.pageTurn,r=o.nextPage,i=o.rowCount,s=Object(_.a)(c).concat(Object(_.a)(t));a.setState({hasMore:!(s.length>=i),pageNo:r,dataBlobs:s,dataSource:p.cloneWithRows(s),isLoading:!1}),1===n&&a.lv.scrollTo(0,0)}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.renderContent=function(e){var t=Object(r.a)({},e),n=a.state,o=n.brandList,i=n.brandname,c=n.pid,s=t.children,l=t.name;return p.a.createElement("ul",{className:q.a.tabs_content},"\u54c1\u724c"===l?o.map(function(e){return p.a.createElement("li",{className:i===e.brandname?q.a.active:null,key:e.id,onClick:function(t){a.setState({brandname:i===e.brandname?"":e.brandname})}},e.brandname)}):s.map(function(e){return p.a.createElement("li",{className:c===e.id?q.a.active:null,key:e.id,onClick:function(t){a.setState({pid:c===e.id?"":e.id})}},e.name)}))},a.onEndReached=function(e){var t=a.state,n=t.isLoading,o=t.hasMore;!n&&o&&a.getMountingsList()},a.onRefresh=function(e){var t=Object(r.a)({},e);console.log(t)},a.onSearch=function(e){e!==a.state.keyword&&a.getMountingsList({pageNo:1,keyword:e,dataBlobs:[]})},a.onOk=function(){a.getMountingsList({pageNo:1,dataBlobs:[]})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.documentElement.clientHeight-E.a.findDOMNode(this.lv).getBoundingClientRect().top;this.setState({height:e}),this.getBrandList(),this.getMountingsClassify(),this.getMountingsList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.classifyList,n=t.dataBlobs,r=t.dataSource,i=t.height,c=this.props.match;return p.a.createElement("div",null,p.a.createElement(B,{placeholder:"\u8bf7\u8f93\u5165\u914d\u4ef6\u540d\u79f0",extra:p.a.createElement(P,{onRest:function(){e.setState({pid:"",brandname:""})},onOk:this.onOk},p.a.createElement(o.a,{tabs:[{name:"\u54c1\u724c"}].concat(Object(_.a)(a)),tabBarActiveTextColor:"#DA4943",tabBarUnderlineStyle:{borderColor:"#FF0000"},renderTabBar:function(e){return p.a.createElement(o.a.DefaultTabBar,Object.assign({renderTab:function(e){return e.name}},e,{page:3}))}},this.renderContent)),onSearch:this.onSearch}),p.a.createElement("div",{className:"bg_grey_list_view"},p.a.createElement(y.a,{ref:function(t){return e.lv=t},dataSource:r,renderHeader:function(){return n.length?null:p.a.createElement(C.a,null)},renderRow:function(t,a,n){return p.a.createElement("div",{onClick:e.goToDetail.bind(e,t),key:n,style:{marginRight:n%2===0?"2%":null},className:q.a.list_row_wrapper},p.a.createElement("div",{className:"xBottom1px"},p.a.createElement("img",{src:W.c+t.surfacePlotUrl,alt:t.name})),p.a.createElement("div",null,t.name))},style:{height:i},onEndReached:this.onEndReached,onEndReachedThreshold:60,pullToRefresh:p.a.createElement(f.a,{direction:"down",distanceToRefresh:40,onRefresh:this.onRefresh})})),p.a.createElement(O.a,{path:c.path+"/mountings",component:Q}))}}]),t}(d.Component),Z=a(570),$=a(632),ee=a.n($),te=Object(S.a)(function(){return Promise.all([a.e(1),a.e(28)]).then(a.bind(null,709))}),ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={classifyList:[],pageNo:1,pageSize:10,bid:"",keyword:"",hasMore:!0,dataBlobs:[],dataSource:new y.a.DataSource({rowHasChanged:function(e,t){return e!==t}}),isLoading:!1,height:0},a.goToDetail=function(e){var t=a.props,n=t.history,o=t.match;n.push({pathname:o.path+"/palette",state:e})},a.getPaletteClassify=function(){Object(H.a)({url:U.a.boardTypeList,data:{pageNo:1,pageSize:10,status:1}}).then(function(e){var t=e.list;a.setState({classifyList:t})}).catch(function(e){console.log(e)})},a.getPaletteList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pageNo,n=void 0===t?a.state.pageNo:t,o=e.keyword,r=void 0===o?a.state.keyword:o,i=e.dataBlobs,c=void 0===i?a.state.dataBlobs:i,s=a.state,l=s.pageSize,u=s.bid,d=s.dataSource;a.setState({isLoading:!0,bid:u,keyword:r}),Object(H.a)({url:U.a.boardDetailList,data:{pageNo:n,pageSize:l,status:1,bid:u,keyword:r}}).then(function(e){var t=e.list,o=e.pageTurn,r=o.nextPage,i=o.rowCount,s=Object(_.a)(c).concat(Object(_.a)(t));a.setState({hasMore:!(s.length>=i),pageNo:r,dataBlobs:s,dataSource:d.cloneWithRows(s),isLoading:!1}),1===n&&a.lv.scrollTo(0,0)}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.onEndReached=function(e){var t=a.state,n=t.isLoading,o=t.hasMore;!n&&o&&a.getPaletteList()},a.onRefresh=function(e){var t=Object(r.a)({},e);console.log(t)},a.onSearch=function(e){e!==a.state.keyword&&a.getPaletteList({pageNo:1,keyword:e,dataBlobs:[]})},a.onOk=function(){a.getPaletteList({pageNo:1,dataBlobs:[]})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.documentElement.clientHeight-E.a.findDOMNode(this.lv).getBoundingClientRect().top;this.setState({height:e}),this.getPaletteClassify(),this.getPaletteList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.classifyList,n=t.bid,o=t.dataBlobs,r=t.dataSource,i=t.height,c=this.props.match;return p.a.createElement("div",null,p.a.createElement(B,{placeholder:"\u8bf7\u8f93\u5165\u8272\u677f\u540d\u79f0",extra:p.a.createElement(P,{onRest:function(){e.setState({bid:""})},onOk:this.onOk},p.a.createElement("ul",{className:"".concat(ee.a.filter_wrapper," normalFontSizeC")},[{id:"",name:"\u5168\u90e8"}].concat(Object(_.a)(a)).map(function(t){return p.a.createElement("li",{className:n===t.id?"redColor xBottom1px":"xBottom1px",key:t.id,onClick:function(a){e.setState({bid:t.id})}},t.name)}))),onSearch:this.onSearch}),p.a.createElement("div",{className:"bg_grey_list_view"},p.a.createElement(y.a,{ref:function(t){return e.lv=t},dataSource:r,renderHeader:function(){return o.length?null:p.a.createElement(C.a,null)},renderRow:function(t,a,n){return p.a.createElement(Z.a,{style:{width:"49%",marginRight:n%2===0?"2%":null},onClick:e.goToDetail.bind(e,t),rowData:{imgUrl:W.c+t.imgUrl,title:t.title}})},style:{height:i},onEndReached:this.onEndReached,onEndReachedThreshold:60,pullToRefresh:p.a.createElement(f.a,{direction:"down",distanceToRefresh:40,onRefresh:this.onRefresh})})),p.a.createElement(O.a,{path:c.path+"/palette",component:te}))}}]),t}(d.Component);t.default=Object(h.b)(function(e){return{routeState:e.routeState}})(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={page:"case"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.routeState.pathname.split("/")[2];e&&this.setState({page:e})}},{key:"render",value:function(){var e=this,t=this.state.page,a=this.props,n=a.history,i=a.match;return p.a.createElement(o.a,{tabs:[{key:"case",title:"\u8bbe\u8ba1\u6848\u4f8b"},{key:"palette",title:"\u8272\u677f\u5e93"},{key:"mountings",title:"\u914d\u4ef6\u5e93"}],tabBarTextStyle:{color:"#AEAEAE"},tabBarActiveTextColor:"#DA4943",tabBarUnderlineStyle:{borderColor:"#FF0000"},prerenderingSiblingsNumber:0,page:t,onChange:function(t){var a=Object(r.a)({},t);e.setState({page:a.key})}},p.a.createElement(K,{key:"case",history:n,match:i}),p.a.createElement(ae,{key:"palette",history:n,match:i}),p.a.createElement(Y,{key:"mountings",history:n,match:i}))}}]),t}(d.Component))}}]);
//# sourceMappingURL=14.fde00758.chunk.js.map