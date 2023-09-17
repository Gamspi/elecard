import{v as he,r as fe,w as Pe}from"./index-dc745bb9.js";var ve={exports:{}},Ae="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ne=Ae,Ie=Ne;function ge(){}function pe(){}pe.resetWarningCache=ge;var Ue=function(){function r(u,d,y,v,T,K){if(K!==Ie){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function n(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:pe,resetWarningCache:ge};return a.PropTypes=a,a};ve.exports=Ue();var Be=ve.exports,me={},ye={},G={exports:{}},U={exports:{}};(function(){var r,n,a,u,d,y;typeof performance<"u"&&performance!==null&&performance.now?U.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(U.exports=function(){return(r()-d)/1e6},n=process.hrtime,r=function(){var v;return v=n(),v[0]*1e9+v[1]},u=r(),y=process.uptime()*1e9,d=u-y):Date.now?(U.exports=function(){return Date.now()-a},a=Date.now()):(U.exports=function(){return new Date().getTime()-a},a=new Date().getTime())}).call(he);var $e=U.exports,Ye=$e,D=typeof window>"u"?he:window,X=["moz","webkit"],R="AnimationFrame",F=D["request"+R],B=D["cancel"+R]||D["cancelRequest"+R];for(var I=0;!F&&I<X.length;I++)F=D[X[I]+"Request"+R],B=D[X[I]+"Cancel"+R]||D[X[I]+"CancelRequest"+R];if(!F||!B){var oe=0,ce=0,O=[],Xe=1e3/60;F=function(r){if(O.length===0){var n=Ye(),a=Math.max(0,Xe-(n-oe));oe=a+n,setTimeout(function(){var u=O.slice(0);O.length=0;for(var d=0;d<u.length;d++)if(!u[d].cancelled)try{u[d].callback(oe)}catch(y){setTimeout(function(){throw y},0)}},Math.round(a))}return O.push({handle:++ce,callback:r,cancelled:!1}),ce},B=function(r){for(var n=0;n<O.length;n++)O[n].handle===r&&(O[n].cancelled=!0)}}G.exports=function(r){return F.call(D,r)};G.exports.cancel=function(){B.apply(D,arguments)};G.exports.polyfill=function(r){r||(r=D),r.requestAnimationFrame=F,r.cancelAnimationFrame=B};var je=G.exports,Z={exports:{}},le=null,de=["Webkit","Moz","O","ms"],qe=function(n){le||(le=document.createElement("div"));var a=le.style;if(n in a)return n;for(var u=n.charAt(0).toUpperCase()+n.slice(1),d=de.length;d>=0;d--){var y=de[d]+u;if(y in a)return y}return!1},Ge=Qe,Ze=/\s/,Je=/(_|-|\.|:)/,Ke=/([a-z][A-Z]|[A-Z][a-z])/;function Qe(r){return Ze.test(r)?r.toLowerCase():Je.test(r)?(tt(r)||r).toLowerCase():Ke.test(r)?nt(r).toLowerCase():r.toLowerCase()}var et=/[\W_]+(.|$)/g;function tt(r){return r.replace(et,function(n,a){return a?" "+a:""})}var rt=/(.)([A-Z]+)/g;function nt(r){return r.replace(rt,function(n,a,u){return a+" "+u.toLowerCase().split("").join(" ")})}var it=Ge,at=ot;function ot(r){return it(r).replace(/[\W_]+(.|$)/g,function(n,a){return a?" "+a:""}).trim()}var lt=at,ut=st;function st(r){return lt(r).replace(/\s(\w)/g,function(n,a){return a.toUpperCase()})}var ct={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},dt=function(r,n){return typeof n=="number"&&!ct[r]?n+"px":n},ht=qe,ft=ut,j={float:"cssFloat"},vt=dt;function q(r,n,a){var u=j[n];if(typeof u>"u"&&(u=pt(n)),u){if(a===void 0)return r.style[u];r.style[u]=vt(u,a)}}function gt(r,n){for(var a in n)n.hasOwnProperty(a)&&q(r,a,n[a])}function pt(r){var n=ft(r),a=ht(n);return j[n]=j[r]=j[a]=a,a}function Te(){arguments.length===2?typeof arguments[1]=="string"?arguments[0].style.cssText=arguments[1]:gt(arguments[0],arguments[1]):q(arguments[0],arguments[1],arguments[2])}Z.exports=Te;Z.exports.set=Te;Z.exports.get=function(r,n){return Array.isArray(n)?n.reduce(function(a,u){return a[u]=q(r,u||""),a},{}):q(r,n||"")};var Se=Z.exports,be={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;function n(a){return typeof a=="string"}})(be);var we={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=y;var n=Se,a=u(n);function u(v){return v&&v.__esModule?v:{default:v}}var d=!1;function y(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(v&&d!==!1)return d;if(typeof document<"u"){var T=document.createElement("div");(0,a.default)(T,{width:100,height:100,position:"absolute",top:-9999,overflow:"scroll",MsOverflowStyle:"scrollbar"}),document.body.appendChild(T),d=T.offsetWidth-T.clientWidth,document.body.removeChild(T)}else d=0;return d||0}})(we);var He={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;function n(){return!1}})(He);var ke={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;function n(a){var u=a.clientWidth,d=getComputedStyle(a),y=d.paddingLeft,v=d.paddingRight;return u-parseFloat(y)-parseFloat(v)}})(ke);var _e={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;function n(a){var u=a.clientHeight,d=getComputedStyle(a),y=d.paddingTop,v=d.paddingBottom;return u-parseFloat(y)-parseFloat(v)}})(_e);var S={};Object.defineProperty(S,"__esModule",{value:!0});S.containerStyleDefault={position:"relative",overflow:"hidden",width:"100%",height:"100%"};S.containerStyleAutoHeight={height:"auto"};S.viewStyleDefault={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"};S.viewStyleAutoHeight={position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0};S.viewStyleUniversalInitial={overflow:"hidden",marginRight:0,marginBottom:0};S.trackHorizontalStyleDefault={position:"absolute",height:6};S.trackVerticalStyleDefault={position:"absolute",width:6};S.thumbHorizontalStyleDefault={position:"relative",display:"block",height:"100%"};S.thumbVerticalStyleDefault={position:"relative",display:"block",width:"100%"};S.disableSelectStyle={userSelect:"none"};S.disableSelectStyleReset={userSelect:""};var x={};Object.defineProperty(x,"__esModule",{value:!0});var E=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])}return r};x.renderViewDefault=Tt;x.renderTrackHorizontalDefault=St;x.renderTrackVerticalDefault=bt;x.renderThumbHorizontalDefault=wt;x.renderThumbVerticalDefault=Ht;var mt=fe,$=yt(mt);function yt(r){return r&&r.__esModule?r:{default:r}}function J(r,n){var a={};for(var u in r)n.indexOf(u)>=0||Object.prototype.hasOwnProperty.call(r,u)&&(a[u]=r[u]);return a}function Tt(r){return $.default.createElement("div",r)}function St(r){var n=r.style,a=J(r,["style"]),u=E({},n,{right:2,bottom:2,left:2,borderRadius:3});return $.default.createElement("div",E({style:u},a))}function bt(r){var n=r.style,a=J(r,["style"]),u=E({},n,{right:2,bottom:2,top:2,borderRadius:3});return $.default.createElement("div",E({style:u},a))}function wt(r){var n=r.style,a=J(r,["style"]),u=E({},n,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return $.default.createElement("div",E({style:u},a))}function Ht(r){var n=r.style,a=J(r,["style"]),u=E({},n,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return $.default.createElement("div",E({style:u},a))}(function(r){Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(g){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(g[t]=o[t])}return g},a=function(){function g(c,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}return function(c,o,t){return o&&g(c.prototype,o),t&&g(c,t),c}}(),u=je,d=M(u),y=Se,v=M(y),T=fe,K=Be,h=M(K),De=be,ue=M(De),Me=we,P=M(Me),ze=He,Le=M(ze),We=ke,Q=M(We),Ve=_e,ee=M(Ve),b=S,A=x;function M(g){return g&&g.__esModule?g:{default:g}}function Ee(g,c){var o={};for(var t in g)c.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(g,t)&&(o[t]=g[t]);return o}function Oe(g,c){if(!(g instanceof c))throw new TypeError("Cannot call a class as a function")}function xe(g,c){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:g}function Ce(g,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);g.prototype=Object.create(c&&c.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(g,c):g.__proto__=c)}var te=function(g){Ce(c,g);function c(o){var t;Oe(this,c);for(var i=arguments.length,l=Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];var e=xe(this,(t=c.__proto__||Object.getPrototypeOf(c)).call.apply(t,[this,o].concat(l)));return e.getScrollLeft=e.getScrollLeft.bind(e),e.getScrollTop=e.getScrollTop.bind(e),e.getScrollWidth=e.getScrollWidth.bind(e),e.getScrollHeight=e.getScrollHeight.bind(e),e.getClientWidth=e.getClientWidth.bind(e),e.getClientHeight=e.getClientHeight.bind(e),e.getValues=e.getValues.bind(e),e.getThumbHorizontalWidth=e.getThumbHorizontalWidth.bind(e),e.getThumbVerticalHeight=e.getThumbVerticalHeight.bind(e),e.getScrollLeftForOffset=e.getScrollLeftForOffset.bind(e),e.getScrollTopForOffset=e.getScrollTopForOffset.bind(e),e.scrollLeft=e.scrollLeft.bind(e),e.scrollTop=e.scrollTop.bind(e),e.scrollToLeft=e.scrollToLeft.bind(e),e.scrollToTop=e.scrollToTop.bind(e),e.scrollToRight=e.scrollToRight.bind(e),e.scrollToBottom=e.scrollToBottom.bind(e),e.handleTrackMouseEnter=e.handleTrackMouseEnter.bind(e),e.handleTrackMouseLeave=e.handleTrackMouseLeave.bind(e),e.handleHorizontalTrackMouseDown=e.handleHorizontalTrackMouseDown.bind(e),e.handleVerticalTrackMouseDown=e.handleVerticalTrackMouseDown.bind(e),e.handleHorizontalThumbMouseDown=e.handleHorizontalThumbMouseDown.bind(e),e.handleVerticalThumbMouseDown=e.handleVerticalThumbMouseDown.bind(e),e.handleWindowResize=e.handleWindowResize.bind(e),e.handleScroll=e.handleScroll.bind(e),e.handleDrag=e.handleDrag.bind(e),e.handleDragEnd=e.handleDragEnd.bind(e),e.state={didMountUniversal:!1},e}return a(c,[{key:"componentDidMount",value:function(){this.addListeners(),this.update(),this.componentDidMountUniversal()}},{key:"componentDidMountUniversal",value:function(){var t=this.props.universal;t&&this.setState({didMountUniversal:!0})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.removeListeners(),(0,u.cancel)(this.requestFrame),clearTimeout(this.hideTracksTimeout),clearInterval(this.detectScrollingInterval)}},{key:"getScrollLeft",value:function(){return this.view?this.view.scrollLeft:0}},{key:"getScrollTop",value:function(){return this.view?this.view.scrollTop:0}},{key:"getScrollWidth",value:function(){return this.view?this.view.scrollWidth:0}},{key:"getScrollHeight",value:function(){return this.view?this.view.scrollHeight:0}},{key:"getClientWidth",value:function(){return this.view?this.view.clientWidth:0}},{key:"getClientHeight",value:function(){return this.view?this.view.clientHeight:0}},{key:"getValues",value:function(){var t=this.view||{},i=t.scrollLeft,l=i===void 0?0:i,s=t.scrollTop,e=s===void 0?0:s,f=t.scrollWidth,p=f===void 0?0:f,m=t.scrollHeight,z=m===void 0?0:m,k=t.clientWidth,L=k===void 0?0:k,w=t.clientHeight,_=w===void 0?0:w;return{left:l/(p-L)||0,top:e/(z-_)||0,scrollLeft:l,scrollTop:e,scrollWidth:p,scrollHeight:z,clientWidth:L,clientHeight:_}}},{key:"getThumbHorizontalWidth",value:function(){var t=this.props,i=t.thumbSize,l=t.thumbMinSize,s=this.view,e=s.scrollWidth,f=s.clientWidth,p=(0,Q.default)(this.trackHorizontal),m=Math.ceil(f/e*p);return p<=m?0:i||Math.max(m,l)}},{key:"getThumbVerticalHeight",value:function(){var t=this.props,i=t.thumbSize,l=t.thumbMinSize,s=this.view,e=s.scrollHeight,f=s.clientHeight,p=(0,ee.default)(this.trackVertical),m=Math.ceil(f/e*p);return p<=m?0:i||Math.max(m,l)}},{key:"getScrollLeftForOffset",value:function(t){var i=this.view,l=i.scrollWidth,s=i.clientWidth,e=(0,Q.default)(this.trackHorizontal),f=this.getThumbHorizontalWidth();return t/(e-f)*(l-s)}},{key:"getScrollTopForOffset",value:function(t){var i=this.view,l=i.scrollHeight,s=i.clientHeight,e=(0,ee.default)(this.trackVertical),f=this.getThumbVerticalHeight();return t/(e-f)*(l-s)}},{key:"scrollLeft",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.view&&(this.view.scrollLeft=t)}},{key:"scrollTop",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.view&&(this.view.scrollTop=t)}},{key:"scrollToLeft",value:function(){this.view&&(this.view.scrollLeft=0)}},{key:"scrollToTop",value:function(){this.view&&(this.view.scrollTop=0)}},{key:"scrollToRight",value:function(){this.view&&(this.view.scrollLeft=this.view.scrollWidth)}},{key:"scrollToBottom",value:function(){this.view&&(this.view.scrollTop=this.view.scrollHeight)}},{key:"addListeners",value:function(){if(!(typeof document>"u"||!this.view)){var t=this.view,i=this.trackHorizontal,l=this.trackVertical,s=this.thumbHorizontal,e=this.thumbVertical;t.addEventListener("scroll",this.handleScroll),(0,P.default)()&&(i.addEventListener("mouseenter",this.handleTrackMouseEnter),i.addEventListener("mouseleave",this.handleTrackMouseLeave),i.addEventListener("mousedown",this.handleHorizontalTrackMouseDown),l.addEventListener("mouseenter",this.handleTrackMouseEnter),l.addEventListener("mouseleave",this.handleTrackMouseLeave),l.addEventListener("mousedown",this.handleVerticalTrackMouseDown),s.addEventListener("mousedown",this.handleHorizontalThumbMouseDown),e.addEventListener("mousedown",this.handleVerticalThumbMouseDown),window.addEventListener("resize",this.handleWindowResize))}}},{key:"removeListeners",value:function(){if(!(typeof document>"u"||!this.view)){var t=this.view,i=this.trackHorizontal,l=this.trackVertical,s=this.thumbHorizontal,e=this.thumbVertical;t.removeEventListener("scroll",this.handleScroll),(0,P.default)()&&(i.removeEventListener("mouseenter",this.handleTrackMouseEnter),i.removeEventListener("mouseleave",this.handleTrackMouseLeave),i.removeEventListener("mousedown",this.handleHorizontalTrackMouseDown),l.removeEventListener("mouseenter",this.handleTrackMouseEnter),l.removeEventListener("mouseleave",this.handleTrackMouseLeave),l.removeEventListener("mousedown",this.handleVerticalTrackMouseDown),s.removeEventListener("mousedown",this.handleHorizontalThumbMouseDown),e.removeEventListener("mousedown",this.handleVerticalThumbMouseDown),window.removeEventListener("resize",this.handleWindowResize),this.teardownDragging())}}},{key:"handleScroll",value:function(t){var i=this,l=this.props,s=l.onScroll,e=l.onScrollFrame;s&&s(t),this.update(function(f){var p=f.scrollLeft,m=f.scrollTop;i.viewScrollLeft=p,i.viewScrollTop=m,e&&e(f)}),this.detectScrolling()}},{key:"handleScrollStart",value:function(){var t=this.props.onScrollStart;t&&t(),this.handleScrollStartAutoHide()}},{key:"handleScrollStartAutoHide",value:function(){var t=this.props.autoHide;t&&this.showTracks()}},{key:"handleScrollStop",value:function(){var t=this.props.onScrollStop;t&&t(),this.handleScrollStopAutoHide()}},{key:"handleScrollStopAutoHide",value:function(){var t=this.props.autoHide;t&&this.hideTracks()}},{key:"handleWindowResize",value:function(){(0,P.default)(!1),this.forceUpdate()}},{key:"handleHorizontalTrackMouseDown",value:function(t){t.preventDefault();var i=t.target,l=t.clientX,s=i.getBoundingClientRect(),e=s.left,f=this.getThumbHorizontalWidth(),p=Math.abs(e-l)-f/2;this.view.scrollLeft=this.getScrollLeftForOffset(p)}},{key:"handleVerticalTrackMouseDown",value:function(t){t.preventDefault();var i=t.target,l=t.clientY,s=i.getBoundingClientRect(),e=s.top,f=this.getThumbVerticalHeight(),p=Math.abs(e-l)-f/2;this.view.scrollTop=this.getScrollTopForOffset(p)}},{key:"handleHorizontalThumbMouseDown",value:function(t){t.preventDefault(),this.handleDragStart(t);var i=t.target,l=t.clientX,s=i.offsetWidth,e=i.getBoundingClientRect(),f=e.left;this.prevPageX=s-(l-f)}},{key:"handleVerticalThumbMouseDown",value:function(t){t.preventDefault(),this.handleDragStart(t);var i=t.target,l=t.clientY,s=i.offsetHeight,e=i.getBoundingClientRect(),f=e.top;this.prevPageY=s-(l-f)}},{key:"setupDragging",value:function(){(0,v.default)(document.body,b.disableSelectStyle),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.onselectstart=Le.default}},{key:"teardownDragging",value:function(){(0,v.default)(document.body,b.disableSelectStyleReset),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.onselectstart=void 0}},{key:"handleDragStart",value:function(t){this.dragging=!0,t.stopImmediatePropagation(),this.setupDragging()}},{key:"handleDrag",value:function(t){if(this.prevPageX){var i=t.clientX,l=this.trackHorizontal.getBoundingClientRect(),s=l.left,e=this.getThumbHorizontalWidth(),f=e-this.prevPageX,p=-s+i-f;this.view.scrollLeft=this.getScrollLeftForOffset(p)}if(this.prevPageY){var m=t.clientY,z=this.trackVertical.getBoundingClientRect(),k=z.top,L=this.getThumbVerticalHeight(),w=L-this.prevPageY,_=-k+m-w;this.view.scrollTop=this.getScrollTopForOffset(_)}return!1}},{key:"handleDragEnd",value:function(){this.dragging=!1,this.prevPageX=this.prevPageY=0,this.teardownDragging(),this.handleDragEndAutoHide()}},{key:"handleDragEndAutoHide",value:function(){var t=this.props.autoHide;t&&this.hideTracks()}},{key:"handleTrackMouseEnter",value:function(){this.trackMouseOver=!0,this.handleTrackMouseEnterAutoHide()}},{key:"handleTrackMouseEnterAutoHide",value:function(){var t=this.props.autoHide;t&&this.showTracks()}},{key:"handleTrackMouseLeave",value:function(){this.trackMouseOver=!1,this.handleTrackMouseLeaveAutoHide()}},{key:"handleTrackMouseLeaveAutoHide",value:function(){var t=this.props.autoHide;t&&this.hideTracks()}},{key:"showTracks",value:function(){clearTimeout(this.hideTracksTimeout),(0,v.default)(this.trackHorizontal,{opacity:1}),(0,v.default)(this.trackVertical,{opacity:1})}},{key:"hideTracks",value:function(){var t=this;if(!this.dragging&&!this.scrolling&&!this.trackMouseOver){var i=this.props.autoHideTimeout;clearTimeout(this.hideTracksTimeout),this.hideTracksTimeout=setTimeout(function(){(0,v.default)(t.trackHorizontal,{opacity:0}),(0,v.default)(t.trackVertical,{opacity:0})},i)}}},{key:"detectScrolling",value:function(){var t=this;this.scrolling||(this.scrolling=!0,this.handleScrollStart(),this.detectScrollingInterval=setInterval(function(){t.lastViewScrollLeft===t.viewScrollLeft&&t.lastViewScrollTop===t.viewScrollTop&&(clearInterval(t.detectScrollingInterval),t.scrolling=!1,t.handleScrollStop()),t.lastViewScrollLeft=t.viewScrollLeft,t.lastViewScrollTop=t.viewScrollTop},100))}},{key:"raf",value:function(t){var i=this;this.requestFrame&&d.default.cancel(this.requestFrame),this.requestFrame=(0,d.default)(function(){i.requestFrame=void 0,t()})}},{key:"update",value:function(t){var i=this;this.raf(function(){return i._update(t)})}},{key:"_update",value:function(t){var i=this.props,l=i.onUpdate,s=i.hideTracksWhenNotNeeded,e=this.getValues();if((0,P.default)()){var f=e.scrollLeft,p=e.clientWidth,m=e.scrollWidth,z=(0,Q.default)(this.trackHorizontal),k=this.getThumbHorizontalWidth(),L=f/(m-p)*(z-k),w={width:k,transform:"translateX("+L+"px)"},_=e.scrollTop,W=e.clientHeight,V=e.scrollHeight,re=(0,ee.default)(this.trackVertical),Y=this.getThumbVerticalHeight(),ne=_/(V-W)*(re-Y),C={height:Y,transform:"translateY("+ne+"px)"};if(s){var ie={visibility:m>p?"visible":"hidden"},ae={visibility:V>W?"visible":"hidden"};(0,v.default)(this.trackHorizontal,ie),(0,v.default)(this.trackVertical,ae)}(0,v.default)(this.thumbHorizontal,w),(0,v.default)(this.thumbVertical,C)}l&&l(e),typeof t=="function"&&t(e)}},{key:"render",value:function(){var t=this,i=(0,P.default)(),l=this.props;l.onScroll,l.onScrollFrame,l.onScrollStart,l.onScrollStop,l.onUpdate;var s=l.renderView,e=l.renderTrackHorizontal,f=l.renderTrackVertical,p=l.renderThumbHorizontal,m=l.renderThumbVertical,z=l.tagName;l.hideTracksWhenNotNeeded;var k=l.autoHide;l.autoHideTimeout;var L=l.autoHideDuration;l.thumbSize,l.thumbMinSize;var w=l.universal,_=l.autoHeight,W=l.autoHeightMin,V=l.autoHeightMax,re=l.style,Y=l.children,ne=Ee(l,["onScroll","onScrollFrame","onScrollStart","onScrollStop","onUpdate","renderView","renderTrackHorizontal","renderTrackVertical","renderThumbHorizontal","renderThumbVertical","tagName","hideTracksWhenNotNeeded","autoHide","autoHideTimeout","autoHideDuration","thumbSize","thumbMinSize","universal","autoHeight","autoHeightMin","autoHeightMax","style","children"]),C=this.state.didMountUniversal,ie=n({},b.containerStyleDefault,_&&n({},b.containerStyleAutoHeight,{minHeight:W,maxHeight:V}),re),ae=n({},b.viewStyleDefault,{marginRight:i?-i:0,marginBottom:i?-i:0},_&&n({},b.viewStyleAutoHeight,{minHeight:(0,ue.default)(W)?"calc("+W+" + "+i+"px)":W+i,maxHeight:(0,ue.default)(V)?"calc("+V+" + "+i+"px)":V+i}),_&&w&&!C&&{minHeight:W,maxHeight:V},w&&!C&&b.viewStyleUniversalInitial),se={transition:"opacity "+L+"ms",opacity:0},Re=n({},b.trackHorizontalStyleDefault,k&&se,(!i||w&&!C)&&{display:"none"}),Fe=n({},b.trackVerticalStyleDefault,k&&se,(!i||w&&!C)&&{display:"none"});return(0,T.createElement)(z,n({},ne,{style:ie,ref:function(H){t.container=H}}),[(0,T.cloneElement)(s({style:ae}),{key:"view",ref:function(H){t.view=H}},Y),(0,T.cloneElement)(e({style:Re}),{key:"trackHorizontal",ref:function(H){t.trackHorizontal=H}},(0,T.cloneElement)(p({style:b.thumbHorizontalStyleDefault}),{ref:function(H){t.thumbHorizontal=H}})),(0,T.cloneElement)(f({style:Fe}),{key:"trackVertical",ref:function(H){t.trackVertical=H}},(0,T.cloneElement)(m({style:b.thumbVerticalStyleDefault}),{ref:function(H){t.thumbVertical=H}}))])}}]),c}(T.Component);r.default=te,te.propTypes={onScroll:h.default.func,onScrollFrame:h.default.func,onScrollStart:h.default.func,onScrollStop:h.default.func,onUpdate:h.default.func,renderView:h.default.func,renderTrackHorizontal:h.default.func,renderTrackVertical:h.default.func,renderThumbHorizontal:h.default.func,renderThumbVertical:h.default.func,tagName:h.default.string,thumbSize:h.default.number,thumbMinSize:h.default.number,hideTracksWhenNotNeeded:h.default.bool,autoHide:h.default.bool,autoHideTimeout:h.default.number,autoHideDuration:h.default.number,autoHeight:h.default.bool,autoHeightMin:h.default.oneOfType([h.default.number,h.default.string]),autoHeightMax:h.default.oneOfType([h.default.number,h.default.string]),universal:h.default.bool,style:h.default.object,children:h.default.node},te.defaultProps={renderView:A.renderViewDefault,renderTrackHorizontal:A.renderTrackHorizontalDefault,renderTrackVertical:A.renderTrackVerticalDefault,renderThumbHorizontal:A.renderThumbHorizontalDefault,renderThumbVertical:A.renderThumbVerticalDefault,tagName:"div",thumbMinSize:30,hideTracksWhenNotNeeded:!1,autoHide:!1,autoHideTimeout:1e3,autoHideDuration:200,autoHeight:!1,autoHeightMin:0,autoHeightMax:200,universal:!1}})(ye);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Scrollbars=void 0;var n=ye,a=u(n);function u(d){return d&&d.__esModule?d:{default:d}}r.default=a.default,r.Scrollbars=a.default})(me);const _t=Pe(me);export{_t as S};
//# sourceMappingURL=index-48074baa.js.map
