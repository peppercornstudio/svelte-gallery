(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("prop-types"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom"],t):(e=e||self,e.ImageMasonryExample=t(e.React,e.PropTypes,e.ReactDOM))})(this,function(e,t,n){'use strict';var ce=Math.floor,de=Math.abs,he=Math.round;function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?o(t,!0).forEach(function(n){r(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}function s(e,t){return d(e)||l(e,t)||u()}function a(e){return c(e)||h(e)||p()}function c(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function d(e){if(Array.isArray(e))return e}function h(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function l(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!(t&&n.length===t));r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw i}}return n}}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function g(e,t){function n(){i&&(i=!1,e()),s&&o()}function r(){me(n)}function o(){var e=Date.now();if(i){if(e-a<2)return;s=!0}else i=!0,s=!1,setTimeout(r,t);a=e}var i=!1,s=!1,a=0;return o}function f(e){return parseFloat(e)||0}function m(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){var r=e["border-"+n+"-width"];return t+f(r)},0)}function b(e){for(var t=["top","right","bottom","left"],n={},r=0,o=t;r<o.length;r++){var i=o[r],s=e["padding-"+i];n[i]=f(s)}return n}function _(e){var t=e.getBBox();return E(0,0,t.width,t.height)}function y(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Oe;var r=we(e).getComputedStyle(e),o=b(r),i=o.left+o.right,s=o.top+o.bottom,a=f(r.width),c=f(r.height);if("border-box"===r.boxSizing&&(he(a+i)!==t&&(a-=m(r,"left","right")+i),he(c+s)!==n&&(c-=m(r,"top","bottom")+s)),!v(e)){var d=he(a+i)-t,h=he(c+s)-n;1!==de(d)&&(a-=d),1!==de(h)&&(c-=h)}return E(o.left,o.top,a,c)}function v(e){return e===we(e).document.documentElement}function w(e){return ge?Ee(e)?_(e):y(e):Oe}function O(e){var t=e.x,n=e.y,r=e.width,o=e.height,i="undefined"==typeof DOMRectReadOnly?Object:DOMRectReadOnly,s=Object.create(i.prototype);return ve(s,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),s}function E(e,t,n,r){return{x:e,y:t,width:n,height:r}}function x(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function k(e){var t=je.call(e,Ue),n=e[Ue];try{e[Ue]=void 0;var r=!0}catch(t){}var o=Fe.call(e);return r&&(t?e[Ue]=n:delete e[Ue]),o}function R(e){return Ne.call(e)}function P(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ve&&Ve in Object(e)?k(e):R(e)}function S(e){return null!=e&&"object"==typeof e}function T(e){return"symbol"==typeof e||S(e)&&P(e)=="[object Symbol]"}function z(e){if("number"==typeof e)return e;if(T(e))return Ge;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(qe,"");var n=Ie.test(e);return n||Ze.test(e)?Qe(e.slice(2),n?2:8):Be.test(e)?Ge:+e}function A(e,t,n){function r(t){var n=p,r=u;return p=u=void 0,_=t,f=e.apply(r,n),f}function o(e){return _=e,m=setTimeout(a,t),y?r(e):f}function i(e){var n=e-b,r=e-_,o=t-n;return v?Je(o,g-r):o}function s(e){var n=e-b,r=e-_;return void 0===b||n>=t||0>n||v&&r>=g}function a(){var e=Ce();return s(e)?c(e):void(m=setTimeout(a,i(e)))}function c(e){return(m=void 0,w&&p)?r(e):(p=u=void 0,f)}function d(){void 0!==m&&clearTimeout(m),_=0,p=b=u=m=void 0}function h(){return void 0===m?f:c(Ce())}function l(){var e=Ce(),n=s(e);if(p=arguments,u=this,b=e,n){if(void 0===m)return o(b);if(v)return clearTimeout(m),m=setTimeout(a,t),r(b)}return void 0===m&&(m=setTimeout(a,t)),f}var p,u,g,f,m,b,_=0,y=!1,v=!1,w=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return t=z(t)||0,x(n)&&(y=!!n.leading,v="maxWait"in n,g=v?Ye(z(n.maxWait)||0,t):g,w="trailing"in n?!!n.trailing:w),l.cancel=d,l.flush=h,l}function M(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return x(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),A(e,t,{leading:r,maxWait:t,trailing:o})}function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function D(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),e}function j(e,t){return t&&("object"===H(t)||"function"==typeof t)?t:F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function L(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function B(e,t,n){return t&&q(e.prototype,t),n&&q(e,n),e}function I(e,t){return t&&("object"===V(t)||"function"==typeof t)?t:Q(e)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}function J(e,t){return J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},J(e,t)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){this.content=[],this.scoreFunction=e}function $(e,t){return t/e}function ee(e,t){return e*t}function te(e,t){return e/t}function ne(e,t,n){var r=e.reduce(function(e,t){var n=t.scaledWidth;return e+n},0);return ee(t,$(r,n))}function re(e,t,n,r,o){var i=e.slice(t,n),s=ne(i,r,o);return Math.pow(de(s-o),2)}function oe(e,t,n){for(var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:8,o=!!(4<arguments.length&&arguments[4]!==void 0)&&arguments[4],s=e.map(function(e){var t=$(e.width,e.height);return i({},e,{ratio:t,scaledWidth:te(n,t),scaledHeight:n,scaledWidthPc:0})}),a=function(e){var o={};e=+e,o[e]=0;for(var a=e+1;a<s.length+1&&!(a-e>r);++a)o[""+a]=re(s,e,a,t,n);return o},c=ot.find_path(a,"0",s.length),d=[],h=[],l=0;l<c.length;l++)c[l+1]&&function(){var e=s.slice(+c[l],+c[l+1]),r=ne(e,t,n);e.forEach(function(e){e.scaledWidth=te(r,e.ratio),e.scaledHeight=r,e.scaledWidthPc=100*(e.scaledWidth/t),h.push(e)}),d.push(e)}();return o?d:h}function ie(e){var t=e.image,n=e.index,r=e.onClick,o=t.src,i=t.alt,s=t.scaledWidthPc,a=t.scaledHeight;return le.createElement("div",{className:"image-masonry-item",style:{width:s+"%",height:a+"px"},onClick:function(e){r(n,e)}},le.createElement("img",{src:o,alt:i}))}function se(t){var n=t.images,r=t.targetRowHeight,o=t.onClick,i=e.useRef(null),a=e.useState({images:[],width:0}),c=s(a,2),d=c[0],h=c[1],l=function(e,t){o&&o(n[e],e,t)};return e.useEffect(function(){var e=i.current.getBoundingClientRect().width;h({images:oe(n,e,r),width:e})},[n,r]),le.createElement("div",{className:"image-masonry",ref:i},le.createElement(rt,{handleWidth:!0,refreshMode:"debounce",refreshRate:5,skipOnMount:!0,onResize:function(e){he(e)!==he(d.width)&&h({images:oe(n,e,r),width:e})}}),d.images.map(function(e,t){return le.createElement(ie,{image:e,index:t,key:e.src,onClick:l})}))}function ae(e){for(var t=e.length-1;0<t;t--){var n=ce(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}var le="default"in e?e["default"]:e,pe="default"in t?t["default"]:t,ue=function(){function e(e,t){var n=-1;return e.some(function(e,r){return e[0]===t&&(n=r,!0)}),n}return"undefined"==typeof Map?function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n,r=0,o=this.__entries__;r<o.length;r++)n=o[r],e.call(t,n[1],n[0])},t}():Map}(),ge="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,fe=function(){return"undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")()}(),me=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame.bind(fe):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),be=["top","right","bottom","left","width","height","size","weight"],_e="undefined"!=typeof MutationObserver,ye=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=g(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),0<e.length},e.prototype.connect_=function(){!ge||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_e?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){ge&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t,r=be.some(function(e){return!!~n.indexOf(e)});r&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ve=function(e,t){for(var n,r=0,o=Object.keys(t);r<o.length;r++)n=o[r],Object.defineProperty(e,n,{value:t[n],enumerable:!1,writable:!1,configurable:!0});return e},we=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||fe},Oe=E(0,0,0,0),Ee=function(){return"undefined"==typeof SVGGraphicsElement?function(e){return e instanceof we(e).SVGElement&&"function"==typeof e.getBBox}:function(e){return e instanceof we(e).SVGGraphicsElement}}(),xe=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=E(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=w(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),ke=function(){return function(e,t){var n=O(t);ve(this,{target:e,contentRect:n})}}(),Re=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new ue,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof we(e).Element))throw new TypeError("parameter 1 is not of type \"Element\".");var t=this.observations_;t.has(e)||(t.set(e,new xe(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof we(e).Element))throw new TypeError("parameter 1 is not of type \"Element\".");var t=this.observations_;t.has(e)&&(t.delete(e),!t.size&&this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new ke(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return 0<this.activeObservations_.length},e}(),Pe="undefined"==typeof WeakMap?new ue:new WeakMap,Se=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=ye.getInstance(),r=new Re(t,n,this);Pe.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Se.prototype[e]=function(){var t;return(t=Pe.get(this))[e].apply(t,arguments)}});var Te=function(){return"undefined"==typeof fe.ResizeObserver?Se:fe.ResizeObserver}(),ze=function(e){var t=[],n=null,r=function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];t=o,n||(n=requestAnimationFrame(function(){n=null,e.apply(void 0,t)}))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r},Ae="object"==typeof global&&global&&global.Object===Object&&global,Me="object"==typeof self&&self&&self.Object===Object&&self,He=Ae||Me||Function("return this")(),Ce=function(){return He.Date.now()},We=He.Symbol,De=Object.prototype,je=De.hasOwnProperty,Fe=De.toString,Ue=We?We.toStringTag:void 0,Le=Object.prototype,Ne=Le.toString,Ve=We?We.toStringTag:void 0,Ge=0/0,qe=/^\s+|\s+$/g,Be=/^[-+]0x[0-9a-f]+$/i,Ie=/^0b[01]+$/i,Ze=/^0o[0-7]+$/i,Qe=parseInt,Ye=Math.max,Je=Math.min,Xe={debounce:A,throttle:M},Ke=function(e){return Xe[e]},$e=function(e){return"function"==typeof e},et=function(){return"undefined"==typeof window},tt=function(e){return e instanceof Element||e instanceof HTMLDocument},nt=function(e){function t(){return C(this,t),j(this,U(t).apply(this,arguments))}return L(t,e),D(t,[{key:"render",value:function(){return this.props.children}}]),t}(e.PureComponent),rt=function(t){function r(t){var o;G(this,r),o=I(this,Z(r).call(this,t)),X(Q(o),"cancelHandler",function(){o.resizeHandler&&o.resizeHandler.cancel&&(o.resizeHandler.cancel(),o.resizeHandler=null)}),X(Q(o),"rafClean",function(){o.raf&&o.raf.cancel&&(o.raf.cancel(),o.raf=null)}),X(Q(o),"toggleObserver",function(e){var t=o.getElement();t&&o.resizeObserver[e]&&o.resizeObserver[e](t)}),X(Q(o),"getElement",function(){var e=o.props,t=e.querySelector,r=e.targetDomEl;if(!et()){if(t)return document.querySelector(t);if(r&&tt(r))return r;var i=o.element&&n.findDOMNode(o.element);return i?i.parentElement:void 0}}),X(Q(o),"createUpdater",function(){return o.rafClean(),o.raf=ze(function(e){var t=e.width,n=e.height,r=o.props.onResize;$e(r)&&r(t,n),o.setState({width:t,height:n})}),o.raf}),X(Q(o),"createResizeHandler",function(e){var t=o.state,n=t.width,r=t.height,i=o.props,s=i.handleWidth,a=i.handleHeight;if(s||a){var c=o.createUpdater();e.forEach(function(e){var t=e&&e.contentRect||{},i=t.width,d=t.height,h=!o.skipOnMount&&(s&&n!==i||a&&r!==d)&&!et();h&&c({width:i,height:d}),o.skipOnMount=!1})}}),X(Q(o),"onRef",function(e){o.element=e}),X(Q(o),"getRenderType",function(){var t=o.props,n=t.render,r=t.children;return $e(n)?"renderProp":$e(r)?"childFunction":e.isValidElement(r)?"child":Array.isArray(r)?"childArray":"parent"}),X(Q(o),"getTargetComponent",function(){var t=o.props,n=t.render,r=t.children,i=t.nodeType,s=o.state,a=s.width,c=s.height,d={width:a,height:c},h=o.getRenderType();return"renderProp"===h?e.cloneElement(n(d),{key:"resize-detector"}):"childFunction"===h?e.cloneElement(r(d)):"child"===h?e.cloneElement(r,d):"childArray"===h?r.map(function(t){return!!t&&e.cloneElement(t,d)}):e.createElement(i)});var i=t.skipOnMount,s=t.refreshMode,a=t.refreshRate,c=t.refreshOptions;o.state={width:void 0,height:void 0},o.skipOnMount=i,o.raf=null,o.element=null,o.unmounted=!1;var d=Ke(s);return o.resizeHandler=d?d(o.createResizeHandler,a,c):o.createResizeHandler,o.resizeObserver=new Te(o.resizeHandler),o}return Y(r,t),B(r,[{key:"componentDidMount",value:function(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function(){this.toggleObserver("unobserve"),this.rafClean(),this.cancelHandler(),this.unmounted=!0}},{key:"render",value:function(){return le.createElement(nt,{ref:this.onRef},this.getTargetComponent())}}]),r}(e.PureComponent);rt.propTypes={handleWidth:t.bool,handleHeight:t.bool,skipOnMount:t.bool,refreshRate:t.number,refreshMode:t.string,refreshOptions:t.shape({leading:t.bool,trailing:t.bool}),querySelector:t.string,targetDomEl:t.any,onResize:t.func,render:t.func,children:t.any,nodeType:t.node},rt.defaultProps={handleWidth:!1,handleHeight:!1,skipOnMount:!1,refreshRate:1e3,refreshMode:void 0,refreshOptions:void 0,querySelector:null,targetDomEl:null,onResize:null,render:void 0,children:null,nodeType:"div"};var ot={single_source_shortest_paths:function(e,t,n){var r={},o={};o[t]=0;var i=new K(function(e){return e.cost});i.push({value:t,cost:0});for(var s,a,c,d,h,l,p,g;i.size();)for(var f in s=i.pop(),a=s.value,c=s.cost,d=e(a)||{},d)h=d[f],l=c+h,p=o[f],g="undefined"==typeof o[f],(g||p>l)&&(o[f]=l,i.push({value:f,cost:l}),r[f]=a);if("undefined"==typeof o[n]){var m=["Could not find a path from ",t," to ",n,"."].join("");throw new Error(m)}return r},extract_shortest_path_from_predecessor_list:function(e,t){for(var n,r=[],o=t;o;)r.push(o),n=e[o],o=e[o];return r.reverse(),r},find_path:function(e,t,n){var r=ot.single_source_shortest_paths(e,t,n);return ot.extract_shortest_path_from_predecessor_list(r,n)}};K.prototype={push:function(e){this.content.push(e),this.bubbleUp(this.content.length-1)},pop:function(){var e=this.content[0],t=this.content.pop();return 0<this.content.length&&(this.content[0]=t,this.sinkDown(0)),e},remove:function(e){for(var t=this.content.length,n=0;n<t;n++)if(this.content[n]===e){var r=this.content.pop();return void(n!==t-1&&(this.content[n]=r,this.scoreFunction(r)<this.scoreFunction(e)?this.bubbleUp(n):this.sinkDown(n)))}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(e){for(var t=this.content[e];0<e;){var r=ce((e+1)/2)-1,o=this.content[r];if(this.scoreFunction(t)<this.scoreFunction(o))this.content[r]=t,this.content[e]=o,e=r;else break}},sinkDown:function(e){for(var t=this.content.length,r=this.content[e],o=this.scoreFunction(r);;){var i=2*(e+1),s=i-1,a=null;if(s<t){var c=this.content[s],d=this.scoreFunction(c);d<o&&(a=s)}if(i<t){var h=this.content[i],l=this.scoreFunction(h);l<(null===a?o:d)&&(a=i)}if(null!=a)this.content[e]=this.content[a],this.content[a]=r,e=a;else break}}},se.defaultProps={images:[],targetRowHeight:220};var it=[{src:"https://source.unsplash.com/V6TWE6h8gyg/800x600",width:800,height:600},{src:"https://source.unsplash.com/dtaPArYUDg4/800x600",width:800,height:600},{src:"https://source.unsplash.com/R_kik2MoltU/600x799",width:600,height:799},{src:"https://source.unsplash.com/8LPgWfHgcMg/600x799",width:600,height:799},{src:"https://source.unsplash.com/mC_puQe4V3g/600x800",width:600,height:800},{src:"https://source.unsplash.com/_LuLiJc1cdo/800x600",width:800,height:600},{src:"https://source.unsplash.com/v7daTKlZzaw/800x599",width:800,height:599},{src:"https://source.unsplash.com/s7qZayMy6Go/600x799",width:600,height:799},{src:"https://source.unsplash.com/rB-4G58XFt0/600x800",width:600,height:800},{src:"https://source.unsplash.com/fg6g2u5oklo/1000x300",width:1e3,height:400},{src:"https://source.unsplash.com/eVwzKfnEGDg/800x600",width:800,height:600},{src:"https://source.unsplash.com/F_eLtGyrlNY/600x800",width:600,height:800},{src:"https://source.unsplash.com/9270-pFGVTU/800x600",width:800,height:600},{src:"https://source.unsplash.com/R4y_E5ZQDPg/800x599",width:800,height:599},{src:"https://source.unsplash.com/-QTa5xYxDCs/800x599",width:800,height:599},{src:"https://source.unsplash.com/Sfs_64L9UHE/600x800",width:600,height:800},{src:"https://source.unsplash.com/pR166OP_l6g/800x600",width:800,height:600},{src:"https://source.unsplash.com/hlvtJ4JkVfc/800x600",width:800,height:600},{src:"https://source.unsplash.com/AUYr7ptqSRQ/800x400",width:800,height:400},{src:"https://source.unsplash.com/E7PlRr9ZfoM/800x600",width:800,height:600},{src:"https://source.unsplash.com/GhlotfzelR4/800x600",width:800,height:600},{src:"https://source.unsplash.com/Xvlc79bu9MA/800x600",width:800,height:600},{src:"https://source.unsplash.com/txRO7-0I8wU/600x800",width:600,height:800},{src:"https://source.unsplash.com/e2uTOpgW5Ec/1000x300",width:1e3,height:300},{src:"https://source.unsplash.com/5BsNkTMbZZ0/800x600",width:800,height:600},{src:"https://source.unsplash.com/_31y-mxvRWI/600x800",width:600,height:800},{src:"https://source.unsplash.com/VrrZAVkzfWE/800x600",width:800,height:600}];return function(){var t=e.useState(it),n=s(t,2),r=n[0],o=n[1],i=e.useState(180),c=s(i,2),d=c[0],h=c[1];return le.createElement("div",null,le.createElement("button",{type:"button",onClick:function(){var e=a(r);ae(e),o(e)}},"Change images"),le.createElement("button",{type:"button",onClick:function(){h(d+20)}},"Change row height"),le.createElement(se,{images:r,targetRowHeight:d}))}});
//# sourceMappingURL=image-masonry-react.js.map