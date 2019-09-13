!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("react"),require("prop-types"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom"],e):(t=t||self).ImageMasonryExample=e(t.React,t.PropTypes,t.ReactDOM)}(this,(function(t,e,n){"use strict";var r="default"in t?t.default:t;"default"in e&&e.default;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),a="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,h="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),f="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(h):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},l=2;var p=20,d=["top","right","bottom","left","width","height","size","weight"],v="undefined"!=typeof MutationObserver,b=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function i(){n&&(n=!1,t()),r&&c()}function s(){f(i)}function c(){var t=Date.now();if(n){if(t-o<l)return;r=!0}else n=!0,r=!1,setTimeout(s,e);o=t}return c}(this.refresh.bind(this),p)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){a&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),v?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){a&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;d.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),m=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},g=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||h},y=M(0,0,0,0);function w(t){return parseFloat(t)||0}function _(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+w(t["border-"+n+"-width"])}),0)}function O(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return y;var r=g(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=w(i)}return e}(r),i=o.left+o.right,s=o.top+o.bottom,c=w(r.width),u=w(r.height);if("border-box"===r.boxSizing&&(Math.round(c+i)!==e&&(c-=_(r,"left","right")+i),Math.round(u+s)!==n&&(u-=_(r,"top","bottom")+s)),!function(t){return t===g(t).document.documentElement}(t)){var a=Math.round(c+i)-e,h=Math.round(u+s)-n;1!==Math.abs(a)&&(c-=a),1!==Math.abs(h)&&(u-=h)}return M(o.left,o.top,c,u)}var E="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof g(t).SVGGraphicsElement}:function(t){return t instanceof g(t).SVGElement&&"function"==typeof t.getBBox};function x(t){return a?E(t)?function(t){var e=t.getBBox();return M(0,0,e.width,e.height)}(t):O(t):y}function M(t,e,n,r){return{x:t,y:e,width:n,height:r}}var j=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=M(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=x(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),T=function(t,e){var n,r,o,i,s,c,u,a=(r=(n=e).x,o=n.y,i=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(c.prototype),m(u,{x:r,y:o,width:i,height:s,top:o,right:r+i,bottom:s+o,left:r}),u);m(this,{target:t,contentRect:a})},R=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new u,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new j(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new T(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),S="undefined"!=typeof WeakMap?new WeakMap:new u,k=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=b.getInstance(),r=new R(e,n,this);S.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){k.prototype[t]=function(){var e;return(e=S.get(this))[t].apply(e,arguments)}}));var A=void 0!==h.ResizeObserver?h.ResizeObserver:k,P=function(t){var e=[],n=null,r=function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];e=o,n||(n=requestAnimationFrame((function(){n=null,t.apply(void 0,e)})))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r};function z(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var D="object"==typeof global&&global&&global.Object===Object&&global,H="object"==typeof self&&self&&self.Object===Object&&self,W=D||H||Function("return this")(),C=function(){return W.Date.now()},F=W.Symbol,q=Object.prototype,L=q.hasOwnProperty,U=q.toString,V=F?F.toStringTag:void 0;var G=Object.prototype.toString;var N="[object Null]",I="[object Undefined]",B=F?F.toStringTag:void 0;function Z(t){return null==t?void 0===t?I:N:B&&B in Object(t)?function(t){var e=L.call(t,V),n=t[V];try{t[V]=void 0;var r=!0}catch(t){}var o=U.call(t);return r&&(e?t[V]=n:delete t[V]),o}(t):function(t){return G.call(t)}(t)}var Q="[object Symbol]";var Y=NaN,$=/^\s+|\s+$/g,J=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,X=/^0o[0-7]+$/i,tt=parseInt;function et(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&Z(t)==Q}(t))return Y;if(z(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=z(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace($,"");var n=K.test(t);return n||X.test(t)?tt(t.slice(2),n?2:8):J.test(t)?Y:+t}var nt="Expected a function",rt=Math.max,ot=Math.min;function it(t,e,n){var r,o,i,s,c,u,a=0,h=!1,f=!1,l=!0;if("function"!=typeof t)throw new TypeError(nt);function p(e){var n=r,i=o;return r=o=void 0,a=e,s=t.apply(i,n)}function d(t){var n=t-u;return void 0===u||n>=e||n<0||f&&t-a>=i}function v(){var t=C();if(d(t))return b(t);c=setTimeout(v,function(t){var n=e-(t-u);return f?ot(n,i-(t-a)):n}(t))}function b(t){return c=void 0,l&&r?p(t):(r=o=void 0,s)}function m(){var t=C(),n=d(t);if(r=arguments,o=this,u=t,n){if(void 0===c)return function(t){return a=t,c=setTimeout(v,e),h?p(t):s}(u);if(f)return clearTimeout(c),c=setTimeout(v,e),p(u)}return void 0===c&&(c=setTimeout(v,e)),s}return e=et(e)||0,z(n)&&(h=!!n.leading,i=(f="maxWait"in n)?rt(et(n.maxWait)||0,e):i,l="trailing"in n?!!n.trailing:l),m.cancel=function(){void 0!==c&&clearTimeout(c),a=0,r=u=o=c=void 0},m.flush=function(){return void 0===c?s:b(C())},m}var st="Expected a function";var ct={debounce:it,throttle:function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(st);return z(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),it(t,e,{leading:r,maxWait:e,trailing:o})}},ut=function(t){return ct[t]},at=function(t){return"function"==typeof t},ht=function(){return"undefined"==typeof window},ft=function(t){return t instanceof Element||t instanceof HTMLDocument};function lt(t){return(lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function dt(t,e){return!e||"object"!==lt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function vt(t){return(vt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function bt(t,e){return(bt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var mt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),dt(this,vt(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bt(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return this.props.children}}])&&pt(n.prototype,r),o&&pt(n,o),e}(t.PureComponent);function gt(t){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function yt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function wt(t){return(wt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _t(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ot(t,e){return(Ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var xt=function(e){function o(e){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),r=function(t,e){return!e||"object"!==gt(e)&&"function"!=typeof e?_t(t):e}(this,wt(o).call(this,e)),Et(_t(r),"cancelHandler",(function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)})),Et(_t(r),"rafClean",(function(){r.raf&&r.raf.cancel&&(r.raf.cancel(),r.raf=null)})),Et(_t(r),"toggleObserver",(function(t){var e=r.getElement();e&&r.resizeObserver[t]&&r.resizeObserver[t](e)})),Et(_t(r),"getElement",(function(){var t=r.props,e=t.querySelector,o=t.targetDomEl;if(!ht()){if(e)return document.querySelector(e);if(o&&ft(o))return o;var i=r.element&&n.findDOMNode(r.element);if(i)return i.parentElement}})),Et(_t(r),"createUpdater",(function(){return r.rafClean(),r.raf=P((function(t){var e=t.width,n=t.height,o=r.props.onResize;at(o)&&o(e,n),r.setState({width:e,height:n})})),r.raf})),Et(_t(r),"createResizeHandler",(function(t){var e=r.state,n=e.width,o=e.height,i=r.props,s=i.handleWidth,c=i.handleHeight;if(s||c){var u=r.createUpdater();t.forEach((function(t){var e=t&&t.contentRect||{},i=e.width,a=e.height,h=s&&n!==i||c&&o!==a;!r.skipOnMount&&h&&!ht()&&u({width:i,height:a}),r.skipOnMount=!1}))}})),Et(_t(r),"onRef",(function(t){r.element=t})),Et(_t(r),"getRenderType",(function(){var e=r.props,n=e.render,o=e.children;return at(n)?"renderProp":at(o)?"childFunction":t.isValidElement(o)?"child":Array.isArray(o)?"childArray":"parent"})),Et(_t(r),"getTargetComponent",(function(){var e=r.props,n=e.render,o=e.children,i=e.nodeType,s=r.state,c={width:s.width,height:s.height};switch(r.getRenderType()){case"renderProp":return t.cloneElement(n(c),{key:"resize-detector"});case"childFunction":return t.cloneElement(o(c));case"child":return t.cloneElement(o,c);case"childArray":return o.map((function(e){return!!e&&t.cloneElement(e,c)}));default:return t.createElement(i)}}));var i=e.skipOnMount,s=e.refreshMode,c=e.refreshRate,u=e.refreshOptions;r.state={width:void 0,height:void 0},r.skipOnMount=i,r.raf=null,r.element=null,r.unmounted=!1;var a=ut(s);return r.resizeHandler=a?a(r.createResizeHandler,c,u):r.createResizeHandler,r.resizeObserver=new A(r.resizeHandler),r}var i,s,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ot(t,e)}(o,e),i=o,(s=[{key:"componentDidMount",value:function(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function(){this.toggleObserver("unobserve"),this.rafClean(),this.cancelHandler(),this.unmounted=!0}},{key:"render",value:function(){return r.createElement(mt,{ref:this.onRef},this.getTargetComponent())}}])&&yt(i.prototype,s),c&&yt(i,c),o}(t.PureComponent);xt.propTypes={handleWidth:e.bool,handleHeight:e.bool,skipOnMount:e.bool,refreshRate:e.number,refreshMode:e.string,refreshOptions:e.shape({leading:e.bool,trailing:e.bool}),querySelector:e.string,targetDomEl:e.any,onResize:e.func,render:e.func,children:e.any,nodeType:e.node},xt.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,refreshOptions:void 0,querySelector:null,targetDomEl:null,onResize:null,render:void 0,children:null,nodeType:"div"};var Mt={single_source_shortest_paths:function(t,e,n){var r={},o={};o[e]=0;var i,s,c,u,a,h,f=new jt((function(t){return t.cost}));for(f.push({value:e,cost:0});f.size();)for(var l in s=(i=f.pop()).value,c=i.cost,u=t(s)||{})a=c+u[l],h=o[l],(void 0===o[l]||h>a)&&(o[l]=a,f.push({value:l,cost:a}),r[l]=s);if(void 0===o[n]){var p=["Could not find a path from ",e," to ",n,"."].join("");throw new Error(p)}return r},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,e,n){var r=Mt.single_source_shortest_paths(t,e,n);return Mt.extract_shortest_path_from_predecessor_list(r,n)}};function jt(t){this.content=[],this.scoreFunction=t}function Tt(t,e){return e/t}function Rt(t,e){return t/e}function St(t,e,n){return function(t,e){return t*e}(e,Tt(t.reduce((function(t,e){return t+e.scaledWidth}),0),n))}function kt(t,e,n,r,o){var i=St(t.slice(e,n),r,o);return Math.pow(Math.abs(i-o),2)}function At(t,e,n){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=t.map((function(t){var e=Tt(t.width,t.height);return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{ratio:e,scaledWidth:Rt(n,e),scaledHeight:n,scaledWidthPc:0})})),u=Mt.find_path((function(t){var o={};o[t=+t]=0;for(var i=t+1;i<c.length+1&&!(i-t>r);++i)o[""+i]=kt(c,t,i,e,n);return o}),"0",c.length),a=[],h=[],f=0;f<u.length;f++)u[f+1]&&function(){var t=c.slice(+u[f],+u[f+1]),r=St(t,e,n);t.forEach((function(t){t.scaledWidth=Rt(r,t.ratio),t.scaledHeight=r,t.scaledWidthPc=t.scaledWidth/e*100,h.push(t)})),a.push(t)}();return s?a:h}function Pt(t){var e=t.image,n=t.index,o=t.onClick,i=e.src,s=e.alt,c={width:e.scaledWidthPc+"%",height:e.scaledHeight+"px"};return r.createElement("div",{className:"image-masonry-item",style:c,onClick:function(t){o(n,t)}},r.createElement("img",{src:i,alt:s}))}function zt(e){var n=e.images,o=e.targetRowHeight,i=e.onClick,c=t.useRef(null),u=s(t.useState({images:[],width:0}),2),a=u[0],h=u[1],f=function(t,e){i&&i(n[t],t,e)};return t.useEffect((function(){var t=c.current.getBoundingClientRect().width;h({images:At(n,t,o),width:t})}),[n,o]),r.createElement("div",{className:"image-masonry",ref:c},r.createElement(xt,{handleWidth:!0,refreshMode:"debounce",refreshRate:5,skipOnMount:!0,onResize:function(t){Math.round(t)!==Math.round(a.width)&&h({images:At(n,t,o),width:t})}}),a.images.map((function(t,e){return r.createElement(Pt,{image:t,index:e,key:t.src,onClick:f})})))}jt.prototype={push:function(t){this.content.push(t),this.bubbleUp(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.sinkDown(0)),t},remove:function(t){for(var e=this.content.length,n=0;n<e;n++)if(this.content[n]===t){var r=this.content.pop();return void(n!==e-1&&(this.content[n]=r,this.scoreFunction(r)<this.scoreFunction(t)?this.bubbleUp(n):this.sinkDown(n)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(t){for(var e=this.content[t];t>0;){var n=Math.floor((t+1)/2)-1,r=this.content[n];if(!(this.scoreFunction(e)<this.scoreFunction(r)))break;this.content[n]=e,this.content[t]=r,t=n}},sinkDown:function(t){for(var e=this.content.length,n=this.content[t],r=this.scoreFunction(n);;){var o=2*(t+1),i=o-1,s=null;if(i<e){var c=this.content[i],u=this.scoreFunction(c);u<r&&(s=i)}if(o<e){var a=this.content[o];this.scoreFunction(a)<(null===s?r:u)&&(s=o)}if(null==s)break;this.content[t]=this.content[s],this.content[s]=n,t=s}}},zt.defaultProps={images:[],targetRowHeight:220};var Dt=[{src:"https://source.unsplash.com/V6TWE6h8gyg/800x600",width:800,height:600},{src:"https://source.unsplash.com/dtaPArYUDg4/800x600",width:800,height:600},{src:"https://source.unsplash.com/R_kik2MoltU/600x799",width:600,height:799},{src:"https://source.unsplash.com/8LPgWfHgcMg/600x799",width:600,height:799},{src:"https://source.unsplash.com/mC_puQe4V3g/600x800",width:600,height:800},{src:"https://source.unsplash.com/_LuLiJc1cdo/800x600",width:800,height:600},{src:"https://source.unsplash.com/v7daTKlZzaw/800x599",width:800,height:599},{src:"https://source.unsplash.com/s7qZayMy6Go/600x799",width:600,height:799},{src:"https://source.unsplash.com/rB-4G58XFt0/600x800",width:600,height:800},{src:"https://source.unsplash.com/fg6g2u5oklo/1000x300",width:1e3,height:400},{src:"https://source.unsplash.com/eVwzKfnEGDg/800x600",width:800,height:600},{src:"https://source.unsplash.com/F_eLtGyrlNY/600x800",width:600,height:800},{src:"https://source.unsplash.com/9270-pFGVTU/800x600",width:800,height:600},{src:"https://source.unsplash.com/R4y_E5ZQDPg/800x599",width:800,height:599},{src:"https://source.unsplash.com/-QTa5xYxDCs/800x599",width:800,height:599},{src:"https://source.unsplash.com/Sfs_64L9UHE/600x800",width:600,height:800},{src:"https://source.unsplash.com/pR166OP_l6g/800x600",width:800,height:600},{src:"https://source.unsplash.com/hlvtJ4JkVfc/800x600",width:800,height:600},{src:"https://source.unsplash.com/AUYr7ptqSRQ/800x400",width:800,height:400},{src:"https://source.unsplash.com/E7PlRr9ZfoM/800x600",width:800,height:600},{src:"https://source.unsplash.com/GhlotfzelR4/800x600",width:800,height:600},{src:"https://source.unsplash.com/Xvlc79bu9MA/800x600",width:800,height:600},{src:"https://source.unsplash.com/txRO7-0I8wU/600x800",width:600,height:800},{src:"https://source.unsplash.com/e2uTOpgW5Ec/1000x300",width:1e3,height:300},{src:"https://source.unsplash.com/5BsNkTMbZZ0/800x600",width:800,height:600},{src:"https://source.unsplash.com/_31y-mxvRWI/600x800",width:600,height:800},{src:"https://source.unsplash.com/VrrZAVkzfWE/800x600",width:800,height:600}];return function(){var e=s(t.useState(Dt),2),n=e[0],o=e[1],i=s(t.useState(180),2),u=i[0],a=i[1];return r.createElement("div",null,r.createElement("button",{type:"button",onClick:function(){var t=c(n);!function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=[t[n],t[e]];t[e]=r[0],t[n]=r[1]}}(t),o(t)}},"Change images"),r.createElement("button",{type:"button",onClick:function(){a(u+20)}},"Change row height"),r.createElement(zt,{images:n,targetRowHeight:u}))}}));
//# sourceMappingURL=image-masonry-react.js.map
