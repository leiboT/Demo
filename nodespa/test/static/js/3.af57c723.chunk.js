(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{520:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",function(){return r})},521:function(e,t,n){"use strict";n.r(t);var r=n(42),o=n.n(r),i=n(23),a=n.n(i),u=n(24),c=n.n(u),l=n(14),s=n.n(l),f=n(25),d=n.n(f),h=n(2),p=n.n(h),v=n(43),g=n.n(v),m=function(e){function t(){a()(this,t);var e=s()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(t){e.triggerEvent("TouchStart",!0,t)},e.onTouchMove=function(t){e.triggerEvent("TouchMove",!1,t)},e.onTouchEnd=function(t){e.triggerEvent("TouchEnd",!1,t)},e.onTouchCancel=function(t){e.triggerEvent("TouchCancel",!1,t)},e.onMouseDown=function(t){e.triggerEvent("MouseDown",!0,t)},e.onMouseUp=function(t){e.triggerEvent("MouseUp",!1,t)},e.onMouseLeave=function(t){e.triggerEvent("MouseLeave",!1,t)},e}return d()(t,e),c()(t,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,t,n){var r="on"+e,o=this.props.children;o.props[r]&&o.props[r](n),t!==this.state.active&&this.setState({active:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.disabled,r=e.activeClassName,i=e.activeStyle,a=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},u=p.a.Children.only(t);if(!n&&this.state.active){var c=u.props,l=c.style,s=c.className;return!1!==i&&(i&&(l=o()({},l,i)),s=g()(s,r)),p.a.cloneElement(u,o()({className:s,style:l},a))}return p.a.cloneElement(u,a)}}]),t}(p.a.Component),y=m;m.defaultProps={disabled:!1},n.d(t,"default",function(){return y})},523:function(e,t,n){"use strict";n(223),n(534)},526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(42)),o=f(n(23)),i=f(n(24)),a=f(n(14)),u=f(n(25)),c=f(n(43)),l=f(n(2)),s=f(n(536));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},h=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.children,o=e.className,i=e.style,a=e.renderHeader,u=e.renderFooter,s=d(e,["prefixCls","children","className","style","renderHeader","renderFooter"]),f=(0,c.default)(t,o);return l.default.createElement("div",(0,r.default)({className:f,style:i},s),a?l.default.createElement("div",{className:t+"-header"},"function"===typeof a?a():a):null,n?l.default.createElement("div",{className:t+"-body"},n):null,u?l.default.createElement("div",{className:t+"-footer"},"function"===typeof u?u():u):null)}}]),t}(l.default.Component);t.default=h,h.Item=s.default,h.defaultProps={prefixCls:"am-list"},e.exports=t.default},534:function(e,t,n){},536:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Brief=void 0;var r=d(n(42)),o=d(n(13)),i=d(n(23)),a=d(n(24)),u=d(n(14)),c=d(n(25)),l=d(n(43)),s=d(n(2)),f=d(n(521));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},p=t.Brief=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)}}]),t}(s.default.Component),v=function(e){function t(e){(0,i.default)(this,t);var n=(0,u.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=function(e){var t=n.props,r=t.onClick,o=t.platform;if(r&&"android"===o){n.debounceTimeout&&(clearTimeout(n.debounceTimeout),n.debounceTimeout=null);var i=e.currentTarget,a=Math.max(i.offsetHeight,i.offsetWidth),u=e.currentTarget.getBoundingClientRect(),c={width:a+"px",height:a+"px",left:e.clientX-u.left-i.offsetWidth/2+"px",top:e.clientY-u.top-i.offsetWidth/2+"px"};n.setState({coverRippleStyle:c,RippleClicked:!0},function(){n.debounceTimeout=setTimeout(function(){n.setState({coverRippleStyle:{display:"none"},RippleClicked:!1})},1e3)})}r&&r(e)},n.state={coverRippleStyle:{display:"none"},RippleClicked:!1},n}return(0,c.default)(t,e),(0,a.default)(t,[{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null)}},{key:"render",value:function(){var e,t,n,i=this,a=this.props,u=a.prefixCls,c=a.className,d=a.activeStyle,p=a.error,v=a.align,g=a.wrap,m=a.disabled,y=a.children,b=a.multipleLine,T=a.thumb,S=a.extra,E=a.arrow,C=a.onClick,P=h(a,["prefixCls","className","activeStyle","error","align","wrap","disabled","children","multipleLine","thumb","extra","arrow","onClick"]),M=(P.platform,h(P,["platform"])),w=this.state,_=w.coverRippleStyle,k=w.RippleClicked,O=(0,l.default)(u+"-item",c,(e={},(0,o.default)(e,u+"-item-disabled",m),(0,o.default)(e,u+"-item-error",p),(0,o.default)(e,u+"-item-top","top"===v),(0,o.default)(e,u+"-item-middle","middle"===v),(0,o.default)(e,u+"-item-bottom","bottom"===v),e)),x=(0,l.default)(u+"-ripple",(0,o.default)({},u+"-ripple-animate",k)),G=(0,l.default)(u+"-line",(t={},(0,o.default)(t,u+"-line-multiple",b),(0,o.default)(t,u+"-line-wrap",g),t)),N=(0,l.default)(u+"-arrow",(n={},(0,o.default)(n,u+"-arrow-horizontal","horizontal"===E),(0,o.default)(n,u+"-arrow-vertical","down"===E||"up"===E),(0,o.default)(n,u+"-arrow-vertical-up","up"===E),n)),j=s.default.createElement("div",(0,r.default)({},M,{onClick:function(e){i.onClick(e)},className:O}),T?s.default.createElement("div",{className:u+"-thumb"},"string"===typeof T?s.default.createElement("img",{src:T}):T):null,s.default.createElement("div",{className:G},void 0!==y&&s.default.createElement("div",{className:u+"-content"},y),void 0!==S&&s.default.createElement("div",{className:u+"-extra"},S),E&&s.default.createElement("div",{className:N,"aria-hidden":"true"})),s.default.createElement("div",{style:_,className:x})),R={};return Object.keys(M).forEach(function(e){/onTouch/i.test(e)&&(R[e]=M[e],delete M[e])}),s.default.createElement(f.default,(0,r.default)({},R,{disabled:m||!C,activeStyle:d,activeClassName:u+"-item-active"}),j)}}]),t}(s.default.Component);v.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1,platform:"ios"},v.Brief=p,t.default=v},582:function(e,t,n){"use strict";var r=n(42),o=n.n(r),i=n(23),a=n.n(i),u=n(24),c=n.n(u),l=n(14),s=n.n(l),f=n(25),d=n.n(f),h=n(2),p=n.n(h),v=1,g=2,m=4,y=8,b=16,T=g|m,S=y|b,E=T|S,C={time:251},P={threshold:10,velocity:.3};function M(e,t){return Math.sqrt(e*e+t*t)}function w(e,t){var n=Math.atan2(t,e);return 180/(Math.PI/n)}function _(){return Date.now()}function k(e){if(!(e.length<2)){var t=e[0],n=t.x,r=t.y,o=e[1],i=o.x-n,a=o.y-r;return{x:i,y:a,z:M(i,a),angle:w(i,a)}}}function O(e,t){return e+t[0].toUpperCase()+t.slice(1)}function x(e){var t=void 0;switch(e){case v:break;case g:t="left";break;case m:t="right";break;case y:t="up";break;case b:t="down"}return t}var G={all:E,vertical:S,horizontal:T},N=function(e){function t(e){a()(this,t);var n=s()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.triggerEvent=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var i=n.props[e];"function"===typeof i&&i.apply(void 0,[n.getGestureState()].concat(r))},n.triggerCombineEvent=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];n.triggerEvent.apply(n,[e].concat(o)),n.triggerSubEvent.apply(n,[e,t].concat(o))},n.triggerSubEvent=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];if(t){var a=O(e,t);n.triggerEvent.apply(n,[a].concat(o))}},n.triggerPinchEvent=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];var a=n.gesture.scale;"move"===t&&"number"===typeof a&&(a>1&&n.triggerEvent("onPinchOut"),a<1&&n.triggerEvent("onPinchIn")),n.triggerCombineEvent.apply(n,[e,t].concat(o))},n.initPressTimer=function(){n.cleanPressTimer(),n.pressTimer=setTimeout(function(){n.setGestureState({press:!0}),n.triggerEvent("onPress")},C.time)},n.cleanPressTimer=function(){n.pressTimer&&clearTimeout(n.pressTimer)},n.setGestureState=function(e){n.gesture||(n.gesture={}),n.gesture.touches&&(n.gesture.preTouches=n.gesture.touches),n.gesture=o()({},n.gesture,e)},n.getGestureState=function(){return n.gesture?o()({},n.gesture):n.gesture},n.cleanGestureState=function(){delete n.gesture},n.getTouches=function(e){return Array.prototype.slice.call(e.touches).map(function(e){return{x:e.screenX,y:e.screenY}})},n.triggerUserCb=function(e,t){var r=O("onTouch",e);r in n.props&&n.props[r](t)},n._handleTouchStart=function(e){n.triggerUserCb("start",e),n.event=e,e.touches.length>1&&e.preventDefault(),n.initGestureStatus(e),n.initPressTimer(),n.checkIfMultiTouchStart()},n.initGestureStatus=function(e){n.cleanGestureState();var t=n.getTouches(e),r=_(),o=k(t);n.setGestureState({startTime:r,startTouches:t,startMutliFingerStatus:o,time:r,touches:t,mutliFingerStatus:o,srcEvent:n.event})},n.checkIfMultiTouchStart=function(){var e=n.props,t=e.enablePinch,r=e.enableRotate,o=n.gesture.touches;if(o.length>1&&(t||r)){if(t){var i=k(o);n.setGestureState({startMutliFingerStatus:i,pinch:!0,scale:1}),n.triggerCombineEvent("onPinch","start")}r&&(n.setGestureState({rotate:!0,rotation:0}),n.triggerCombineEvent("onRotate","start"))}},n._handleTouchMove=function(e){n.triggerUserCb("move",e),n.event=e,n.gesture&&(n.cleanPressTimer(),n.updateGestureStatus(e),n.checkIfSingleTouchMove(),n.checkIfMultiTouchMove())},n.checkIfMultiTouchMove=function(){var e=n.gesture,t=e.pinch,r=e.rotate,o=e.touches,i=e.startMutliFingerStatus,a=e.mutliFingerStatus;if(t||r){if(o.length<2)return n.setGestureState({pinch:!1,rotate:!1}),t&&n.triggerCombineEvent("onPinch","cancel"),void(r&&n.triggerCombineEvent("onRotate","cancel"));if(t){var u=a.z/i.z;n.setGestureState({scale:u}),n.triggerPinchEvent("onPinch","move")}if(r){var c=function(e,t){var n=e.angle;return t.angle-n}(i,a);n.setGestureState({rotation:c}),n.triggerCombineEvent("onRotate","move")}}},n.allowGesture=function(){return e=n.gesture.direction,!!(n.directionSetting&e);var e},n.checkIfSingleTouchMove=function(){var e=n.gesture,t=e.pan,r=e.touches,o=e.moveStatus,i=e.preTouches,a=e.availablePan,u=void 0===a||a;if(r.length>1)return n.setGestureState({pan:!1}),void(t&&n.triggerCombineEvent("onPan","cancel"));if(o&&u){var c=function(e,t){var n=e.x,r=e.y,o=t.x-n,i=t.y-r;return 0===o&&0===i?v:Math.abs(o)>=Math.abs(i)?o<0?g:m:i<0?y:b}(i[0],r[0]);n.setGestureState({direction:c});var l=x(c);if(!n.allowGesture())return void(t||n.setGestureState({availablePan:!1}));t?(n.triggerCombineEvent("onPan",l),n.triggerSubEvent("onPan","move")):(n.triggerCombineEvent("onPan","start"),n.setGestureState({pan:!0,availablePan:!0}))}},n.checkIfMultiTouchEnd=function(e){var t=n.gesture,r=t.pinch,o=t.rotate;r&&n.triggerCombineEvent("onPinch",e),o&&n.triggerCombineEvent("onRotate",e)},n.updateGestureStatus=function(e){var t=_();if(n.setGestureState({time:t}),e.touches&&e.touches.length){var r=n.gesture,o=r.startTime,i=r.startTouches,a=r.pinch,u=r.rotate,c=n.getTouches(e),l=function(e,t,n){var r=e[0],o=r.x,i=r.y,a=t[0],u=a.x-o,c=a.y-i,l=M(u,c);return{x:u,y:c,z:l,time:n,velocity:l/n,angle:w(u,c)}}(i,c,t-o),s=void 0;(a||u)&&(s=k(c)),n.setGestureState({touches:c,mutliFingerStatus:s,moveStatus:l})}},n._handleTouchEnd=function(e){n.triggerUserCb("end",e),n.event=e,n.gesture&&(n.cleanPressTimer(),n.updateGestureStatus(e),n.doSingleTouchEnd("end"),n.checkIfMultiTouchEnd("end"))},n._handleTouchCancel=function(e){n.triggerUserCb("cancel",e),n.event=e,n.gesture&&(n.cleanPressTimer(),n.updateGestureStatus(e),n.doSingleTouchEnd("cancel"),n.checkIfMultiTouchEnd("cancel"))},n.triggerAllowEvent=function(e,t){n.allowGesture()?n.triggerCombineEvent(e,t):n.triggerSubEvent(e,t)},n.doSingleTouchEnd=function(e){var t=n.gesture,r=t.moveStatus,o=t.pinch,i=t.rotate,a=t.press,u=t.pan,c=t.direction;if(!o&&!i){if(r){var l=function(e,t){return Math.abs(e)>=P.threshold&&Math.abs(t)>P.velocity}(r.z,r.velocity);if(n.setGestureState({swipe:l}),u&&n.triggerAllowEvent("onPan",e),l){var s=x(c);return void n.triggerAllowEvent("onSwipe",s)}}a?n.triggerEvent("onPressUp"):n.triggerEvent("onTap")}},n.getTouchAction=function(){var e=n.props,t=e.enablePinch,r=e.enableRotate,o=n.directionSetting;return t||r||o===E?"pan-x pan-y":o===S?"pan-x":o===T?"pan-y":"auto"},n.directionSetting=G[e.direction],n}return d()(t,e),c()(t,[{key:"componentWillUnmount",value:function(){this.cleanPressTimer()}},{key:"render",value:function(){var e=this.props.children,t=p.a.Children.only(e),n=this.getTouchAction(),r={onTouchStart:this._handleTouchStart,onTouchMove:this._handleTouchMove,onTouchCancel:this._handleTouchCancel,onTouchEnd:this._handleTouchEnd};return p.a.cloneElement(t,o()({},r,{style:o()({touchAction:n},t.props.style||{})}))}}]),t}(h.Component);t.a=N;N.defaultProps={enableRotate:!1,enablePinch:!1,direction:"all"}}}]);
//# sourceMappingURL=3.af57c723.chunk.js.map