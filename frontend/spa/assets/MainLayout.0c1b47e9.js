import{c as A,h as re,R as tt,Q as ne,a as be,u as at,b as ot,d as nt,e as lt}from"./QBtn.1c52f242.js";import{c,h as T,i as ie,e as F,r as C,o as U,a as J,t as Fe,w as rt,s as Pe,b as it,d as st,g as N,f as ut,j as x,k as ye,n as le,l as pe,m as me,p as we,q as ct,u as dt,v as se,x as ft,y as ae,z as vt,_ as ht,A as gt,B as mt,C as bt,D as j,E as yt,F as Q,G as oe,H as K,I as ze}from"./index.6693244e.js";import{u as wt,a as ve,b as Ve,r as Tt,g as qt,c as Ct,d as _t,e as he}from"./scroll.0e8012f3.js";import{a as Be,s as St}from"./axios.df14c455.js";var Lt=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:m}){const i=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:i.value},re(m.default))}});let Rt=0;const $t=["click","keydown"],kt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Rt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function xt(e,m,i,o){const t=ie(Fe,F);if(t===F)return console.error("QTab/QRouteTab component needs to be child of QTabs"),F;const{proxy:d}=N(),f=C(null),_=C(null),b=C(null),v=c(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),L=c(()=>t.currentModel.value===e.name),P=c(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(L.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),p=c(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=c(()=>e.disable===!0||t.hasFocus.value===!0||L.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function S(u,l){if(l!==!0&&f.value!==null&&f.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&Pe(u);return}if(o===void 0){t.updateModel({name:e.name}),i("click",u);return}if(o.hasRouterLink.value===!0){const n=(y={})=>{let B;const D=y.to===void 0||ut(y.to,e.to)===!0?t.avoidRouteWatcher=wt():null;return o.navigateToRouterLink(u,{...y,returnRouterError:!0}).catch(z=>{B=z}).then(z=>{if(D===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,B===void 0&&(z===void 0||z.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),y.returnRouterError===!0)return B!==void 0?Promise.reject(B):z})};i("click",u,n),u.defaultPrevented!==!0&&n();return}i("click",u)}function R(u){it(u,[13,32])?S(u,!0):st(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&t.onKbdNavigate(u.keyCode,d.$el)===!0&&Pe(u),i("keydown",u)}function V(){const u=t.tabProps.value.narrowIndicator,l=[],n=T("div",{ref:b,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&l.push(T(ne,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&l.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&l.push(e.alertIcon!==void 0?T(ne,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&l.push(n);const y=[T("div",{class:"q-focus-helper",tabindex:-1,ref:f}),T("div",{class:p.value},be(m.default,l))];return u===!1&&y.push(n),y}const I={name:c(()=>e.name),rootRef:_,tabIndicatorRef:b,routeData:o};U(()=>{t.unregisterTab(I)}),J(()=>{t.registerTab(I)});function s(u,l){const n={ref:_,class:P.value,tabindex:g.value,role:"tab","aria-selected":L.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:R,...l};return rt(T(u,n,V()),[[tt,v.value]])}return{renderTab:s,$tabs:t}}var ge=A({name:"QRouteTab",props:{...at,...kt},emits:$t,setup(e,{slots:m,emit:i}){const o=ot({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:d}=xt(e,m,i,{exact:c(()=>e.exact),...o});return x(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{d.verifyRouteModel()}),()=>t(o.linkTag.value,o.linkAttrs.value)}});function Pt(){const e=C(!ye.value);return e.value===!1&&J(()=>{e.value=!0}),e}const Qe=typeof ResizeObserver!="undefined",Me=Qe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Y=A({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:m}){let i=null,o,t={width:-1,height:-1};function d(b){b===!0||e.debounce===0||e.debounce==="0"?f():i===null&&(i=setTimeout(f,e.debounce))}function f(){if(clearTimeout(i),i=null,o){const{offsetWidth:b,offsetHeight:v}=o;(b!==t.width||v!==t.height)&&(t={width:b,height:v},m("resize",t))}}const{proxy:_}=N();if(Qe===!0){let b;const v=L=>{o=_.$el.parentNode,o?(b=new ResizeObserver(d),b.observe(o),f()):L!==!0&&pe(()=>{v(!0)})};return J(()=>{v()}),U(()=>{clearTimeout(i),b!==void 0&&(b.disconnect!==void 0?b.disconnect():o&&b.unobserve(o))}),le}else{let L=function(){clearTimeout(i),v!==void 0&&(v.removeEventListener!==void 0&&v.removeEventListener("resize",d,me.passive),v=void 0)},P=function(){L(),o&&o.contentDocument&&(v=o.contentDocument.defaultView,v.addEventListener("resize",d,me.passive),f())};const b=Pt();let v;return J(()=>{pe(()=>{o=_.$el,o&&P()})}),U(L),_.trigger=d,()=>{if(b.value===!0)return T("object",{style:Me.style,tabindex:-1,type:"text/html",data:Me.url,"aria-hidden":"true",onLoad:P})}}}});function pt(e,m,i){const o=i===!0?["left","right"]:["top","bottom"];return`absolute-${m===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const zt=["left","center","right","justify"];var Vt=A({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>zt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:m,emit:i}){const{proxy:o}=N(),{$q:t}=o,{registerTick:d}=ve(),{registerTick:f}=ve(),{registerTick:_}=ve(),{registerTimeout:b,removeTimeout:v}=Ve(),{registerTimeout:L,removeTimeout:P}=Ve(),p=C(null),g=C(null),S=C(e.modelValue),R=C(!1),V=C(!0),I=C(!1),s=C(!1),u=c(()=>t.platform.is.desktop===!0||e.mobileArrows===!0),l=[],n=C(0),y=C(!1);let B,D,z,W=u.value===!0?qe:le;const Ae=c(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:pt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),He=c(()=>{const a=n.value,r=S.value;for(let h=0;h<a;h++)if(l[h].name.value===r)return!0;return!1}),Ee=c(()=>`q-tabs__content--align-${R.value===!0?"left":s.value===!0?"justify":e.align}`),De=c(()=>`q-tabs row no-wrap items-center q-tabs--${R.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${u.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Oe=c(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ee.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(t.platform.is.mobile===!0?" scroll":"")),Z=c(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ee=c(()=>e.vertical!==!0&&t.lang.rtl===!0),ue=c(()=>Tt===!1&&ee.value===!0);x(ee,W),x(()=>e.modelValue,a=>{ce({name:a,setCurrent:!0,skipEmit:!0})}),x(()=>e.outsideArrows,()=>{X()}),x(u,a=>{W=a===!0?qe:le,X()});function ce({name:a,setCurrent:r,skipEmit:h,fromRoute:$}){S.value!==a&&(h!==!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",a),(r===!0||e["onUpdate:modelValue"]===void 0)&&(Ne(S.value,a),S.value=a))}function X(){d(()=>{Te({width:p.value.offsetWidth,height:p.value.offsetHeight})})}function Te(a){if(Z.value===void 0||g.value===null)return;const r=a[Z.value.container],h=Math.min(g.value[Z.value.scroll],Array.prototype.reduce.call(g.value.children,(k,q)=>k+(q[Z.value.content]||0),0)),$=r>0&&h>r;R.value=$,$===!0&&f(W),s.value=r<parseInt(e.breakpoint,10)}function Ne(a,r){const h=a!=null&&a!==""?l.find(k=>k.name.value===a):null,$=r!=null&&r!==""?l.find(k=>k.name.value===r):null;if(h&&$){const k=h.tabIndicatorRef.value,q=$.tabIndicatorRef.value;clearTimeout(B),k.style.transition="none",k.style.transform="none",q.style.transition="none",q.style.transform="none";const w=k.getBoundingClientRect(),M=q.getBoundingClientRect();q.style.transform=e.vertical===!0?`translate3d(0,${w.top-M.top}px,0) scale3d(1,${M.height?w.height/M.height:1},1)`:`translate3d(${w.left-M.left}px,0,0) scale3d(${M.width?w.width/M.width:1},1,1)`,_(()=>{B=setTimeout(()=>{q.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",q.style.transform="none"},70)})}$&&R.value===!0&&G($.rootRef.value)}function G(a){const{left:r,width:h,top:$,height:k}=g.value.getBoundingClientRect(),q=a.getBoundingClientRect();let w=e.vertical===!0?q.top-$:q.left-r;if(w<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(w),W();return}w+=e.vertical===!0?q.height-k:q.width-h,w>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(w),W())}function qe(){const a=g.value;if(a!==null){const r=a.getBoundingClientRect(),h=e.vertical===!0?a.scrollTop:Math.abs(a.scrollLeft);ee.value===!0?(V.value=Math.ceil(h+r.width)<a.scrollWidth-1,I.value=h>0):(V.value=h>0,I.value=e.vertical===!0?Math.ceil(h+r.height)<a.scrollHeight:Math.ceil(h+r.width)<a.scrollWidth)}}function Ce(a){H(),D=setInterval(()=>{Ke(a)===!0&&H()},5)}function _e(){Ce(ue.value===!0?Number.MAX_SAFE_INTEGER:0)}function Se(){Ce(ue.value===!0?0:Number.MAX_SAFE_INTEGER)}function H(){clearInterval(D)}function We(a,r){const h=Array.prototype.filter.call(g.value.children,M=>M===r||M.matches&&M.matches(".q-tab.q-focusable")===!0),$=h.length;if($===0)return;if(a===36)return G(h[0]),h[0].focus(),!0;if(a===35)return G(h[$-1]),h[$-1].focus(),!0;const k=a===(e.vertical===!0?38:37),q=a===(e.vertical===!0?40:39),w=k===!0?-1:q===!0?1:void 0;if(w!==void 0){const M=ee.value===!0?-1:1,E=h.indexOf(r)+w*M;return E>=0&&E<$&&(G(h[E]),h[E].focus({preventScroll:!0})),!0}}const je=c(()=>ue.value===!0?{get:a=>Math.abs(a.scrollLeft),set:(a,r)=>{a.scrollLeft=-r}}:e.vertical===!0?{get:a=>a.scrollTop,set:(a,r)=>{a.scrollTop=r}}:{get:a=>a.scrollLeft,set:(a,r)=>{a.scrollLeft=r}});function Ke(a){const r=g.value,{get:h,set:$}=je.value;let k=!1,q=h(r);const w=a<q?-1:1;return q+=w*5,q<0?(k=!0,q=0):(w===-1&&q<=a||w===1&&q>=a)&&(k=!0,q=a),$(r,q),W(),k}function Le(a,r){for(const h in a)if(a[h]!==r[h])return!1;return!0}function Ue(){let a=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const h=l.filter(w=>w.routeData!==void 0&&w.routeData.hasRouterLink.value===!0),{hash:$,query:k}=o.$route,q=Object.keys(k).length;for(const w of h){const M=w.routeData.exact.value===!0;if(w.routeData[M===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:E,query:de,matched:Ze,href:et}=w.routeData.resolvedLink.value,fe=Object.keys(de).length;if(M===!0){if(E!==$||fe!==q||Le(k,de)===!1)continue;a=w.name.value;break}if(E!==""&&E!==$||fe!==0&&Le(de,k)===!1)continue;const O={matchedLen:Ze.length,queryDiff:q-fe,hrefLen:et.length-E.length};if(O.matchedLen>r.matchedLen){a=w.name.value,r=O;continue}else if(O.matchedLen!==r.matchedLen)continue;if(O.queryDiff<r.queryDiff)a=w.name.value,r=O;else if(O.queryDiff!==r.queryDiff)continue;O.hrefLen>r.hrefLen&&(a=w.name.value,r=O)}a===null&&l.some(w=>w.routeData===void 0&&w.name.value===S.value)===!0||ce({name:a,setCurrent:!0})}function Ge(a){if(v(),y.value!==!0&&p.value!==null&&a.target&&typeof a.target.closest=="function"){const r=a.target.closest(".q-tab");r&&p.value.contains(r)===!0&&(y.value=!0,R.value===!0&&G(r))}}function Xe(){b(()=>{y.value=!1},30)}function te(){$e.avoidRouteWatcher===!1?L(Ue):P()}function Re(){if(z===void 0){const a=x(()=>o.$route.fullPath,te);z=()=>{a(),z=void 0}}}function Je(a){l.push(a),n.value++,X(),a.routeData===void 0||o.$route===void 0?L(()=>{if(R.value===!0){const r=S.value,h=r!=null&&r!==""?l.find($=>$.name.value===r):null;h&&G(h.rootRef.value)}}):(Re(),a.routeData.hasRouterLink.value===!0&&te())}function Ye(a){l.splice(l.indexOf(a),1),n.value--,X(),z!==void 0&&a.routeData!==void 0&&(l.every(r=>r.routeData===void 0)===!0&&z(),te())}const $e={currentModel:S,tabProps:Ae,hasFocus:y,hasActiveTab:He,registerTab:Je,unregisterTab:Ye,verifyRouteModel:te,updateModel:ce,onKbdNavigate:We,avoidRouteWatcher:!1};we(Fe,$e);function ke(){clearTimeout(B),H(),z!==void 0&&z()}let xe;return U(ke),ct(()=>{xe=z!==void 0,ke()}),dt(()=>{xe===!0&&Re(),X()}),()=>{const a=[T(Y,{onResize:Te}),T("div",{ref:g,class:Oe.value,onScroll:W},re(m.default))];return u.value===!0&&a.push(T(ne,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:_e,onTouchstartPassive:_e,onMouseupPassive:H,onMouseleavePassive:H,onTouchendPassive:H}),T(ne,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Se,onTouchstartPassive:Se,onMouseupPassive:H,onMouseleavePassive:H,onTouchendPassive:H})),T("div",{ref:p,class:De.value,role:"tablist",onFocusin:Ge,onFocusout:Xe},a)}}}),Bt=A({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const i=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:i.value,role:"toolbar"},re(m.default))}}),Mt=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:i}){const{proxy:{$q:o}}=N(),t=ie(se,F);if(t===F)return console.error("QHeader needs to be child of QLayout"),F;const d=C(parseInt(e.heightHint,10)),f=C(!0),_=c(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||o.platform.is.ios&&t.isContainer.value===!0),b=c(()=>{if(e.modelValue!==!0)return 0;if(_.value===!0)return f.value===!0?d.value:0;const s=d.value-t.scroll.value.position;return s>0?s:0}),v=c(()=>e.modelValue!==!0||_.value===!0&&f.value!==!0),L=c(()=>e.modelValue===!0&&v.value===!0&&e.reveal===!0),P=c(()=>"q-header q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(v.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=c(()=>{const s=t.rows.value.top,u={};return s[0]==="l"&&t.left.space===!0&&(u[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(u[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),u});function g(s,u){t.update("header",s,u)}function S(s,u){s.value!==u&&(s.value=u)}function R({height:s}){S(d,s),g("size",s)}function V(s){L.value===!0&&S(f,!0),i("focusin",s)}x(()=>e.modelValue,s=>{g("space",s),S(f,!0),t.animate()}),x(b,s=>{g("offset",s)}),x(()=>e.reveal,s=>{s===!1&&S(f,e.modelValue)}),x(f,s=>{t.animate(),i("reveal",s)}),x(t.scroll,s=>{e.reveal===!0&&S(f,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const I={};return t.instances.header=I,e.modelValue===!0&&g("size",d.value),g("space",e.modelValue),g("offset",b.value),U(()=>{t.instances.header===I&&(t.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const s=nt(m.default,[]);return e.elevated===!0&&s.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(T(Y,{debounce:0,onResize:R})),T("header",{class:P.value,style:p.value,onFocusin:V},s)}}}),It=A({name:"QPageContainer",setup(e,{slots:m}){const{proxy:{$q:i}}=N(),o=ie(se,F);if(o===F)return console.error("QPageContainer needs to be child of QLayout"),F;we(ft,!0);const t=c(()=>{const d={};return o.header.space===!0&&(d.paddingTop=`${o.header.size}px`),o.right.space===!0&&(d[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(d.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(d[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),d});return()=>T("div",{class:"q-page-container",style:t.value},re(m.default))}}),Ft=A({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:i}){const{proxy:{$q:o}}=N(),t=ie(se,F);if(t===F)return console.error("QFooter needs to be child of QLayout"),F;const d=C(parseInt(e.heightHint,10)),f=C(!0),_=C(ye.value===!0||t.isContainer.value===!0?0:window.innerHeight),b=c(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||o.platform.is.ios&&t.isContainer.value===!0),v=c(()=>t.isContainer.value===!0?t.containerHeight.value:_.value),L=c(()=>{if(e.modelValue!==!0)return 0;if(b.value===!0)return f.value===!0?d.value:0;const n=t.scroll.value.position+v.value+d.value-t.height.value;return n>0?n:0}),P=c(()=>e.modelValue!==!0||b.value===!0&&f.value!==!0),p=c(()=>e.modelValue===!0&&P.value===!0&&e.reveal===!0),g=c(()=>"q-footer q-layout__section--marginal "+(b.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(P.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(b.value!==!0?" hidden":""):"")),S=c(()=>{const n=t.rows.value.bottom,y={};return n[0]==="l"&&t.left.space===!0&&(y[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),n[2]==="r"&&t.right.space===!0&&(y[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),y});function R(n,y){t.update("footer",n,y)}function V(n,y){n.value!==y&&(n.value=y)}function I({height:n}){V(d,n),R("size",n)}function s(){if(e.reveal!==!0)return;const{direction:n,position:y,inflectionPoint:B}=t.scroll.value;V(f,n==="up"||y-B<100||t.height.value-v.value-y-d.value<300)}function u(n){p.value===!0&&V(f,!0),i("focusin",n)}x(()=>e.modelValue,n=>{R("space",n),V(f,!0),t.animate()}),x(L,n=>{R("offset",n)}),x(()=>e.reveal,n=>{n===!1&&V(f,e.modelValue)}),x(f,n=>{t.animate(),i("reveal",n)}),x([d,t.scroll,t.height],s),x(()=>o.screen.height,n=>{t.isContainer.value!==!0&&V(_,n)});const l={};return t.instances.footer=l,e.modelValue===!0&&R("size",d.value),R("space",e.modelValue),R("offset",L.value),U(()=>{t.instances.footer===l&&(t.instances.footer=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const n=be(m.default,[T(Y,{debounce:0,onResize:I})]);return e.elevated===!0&&n.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),T("footer",{class:g.value,style:S.value,onFocusin:u},n)}}});const{passive:Ie}=me,Qt=["both","horizontal","vertical"];var At=A({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Qt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:m}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,d;x(()=>e.scrollTarget,()=>{b(),_()});function f(){o!==null&&o();const P=Math.max(0,Ct(t)),p=_t(t),g={top:P-i.position.top,left:p-i.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const S=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";i.position={top:P,left:p},i.directionChanged=i.direction!==S,i.delta=g,i.directionChanged===!0&&(i.direction=S,i.inflectionPoint=i.position),m("scroll",{...i})}function _(){t=qt(d,e.scrollTarget),t.addEventListener("scroll",v,Ie),v(!0)}function b(){t!==void 0&&(t.removeEventListener("scroll",v,Ie),t=void 0)}function v(P){if(P===!0||e.debounce===0||e.debounce==="0")f();else if(o===null){const[p,g]=e.debounce?[setTimeout(f,e.debounce),clearTimeout]:[requestAnimationFrame(f),cancelAnimationFrame];o=()=>{g(p),o=null}}}const{proxy:L}=N();return x(()=>L.$q.lang.rtl,f),J(()=>{d=L.$el.parentNode,_()}),U(()=>{o!==null&&o(),b()}),Object.assign(L,{trigger:v,getPosition:()=>i}),le}}),Ht=A({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:m,emit:i}){const{proxy:{$q:o}}=N(),t=C(null),d=C(o.screen.height),f=C(e.container===!0?0:o.screen.width),_=C({position:0,direction:"down",inflectionPoint:0}),b=C(0),v=C(ye.value===!0?0:he()),L=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),P=c(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),p=c(()=>v.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${v.value}px`}:null),g=c(()=>v.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null);function S(l){if(e.container===!0||document.qScrollPrevented!==!0){const n={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};_.value=n,e.onScroll!==void 0&&i("scroll",n)}}function R(l){const{height:n,width:y}=l;let B=!1;d.value!==n&&(B=!0,d.value=n,e.onScrollHeight!==void 0&&i("scrollHeight",n),I()),f.value!==y&&(B=!0,f.value=y),B===!0&&e.onResize!==void 0&&i("resize",l)}function V({height:l}){b.value!==l&&(b.value=l,I())}function I(){if(e.container===!0){const l=d.value>b.value?he():0;v.value!==l&&(v.value=l)}}let s;const u={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:d,containerHeight:b,scrollbarWidth:v,totalWidth:c(()=>f.value+v.value),rows:c(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:ae({size:0,offset:0,space:!1}),right:ae({size:300,offset:0,space:!1}),footer:ae({size:0,offset:0,space:!1}),left:ae({size:300,offset:0,space:!1}),scroll:_,animate(){s!==void 0?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),s=void 0},155)},update(l,n,y){u[l][n]=y}};if(we(se,u),he()>0){let y=function(){l=null,n.classList.remove("hide-scrollbar")},B=function(){if(l===null){if(n.scrollHeight>o.screen.height)return;n.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(y,300)},D=function(z){l!==null&&z==="remove"&&(clearTimeout(l),y()),window[`${z}EventListener`]("resize",B)},l=null;const n=document.body;x(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),vt(()=>{D("remove")})}return()=>{const l=be(m.default,[T(At,{onScroll:S}),T(Y,{onResize:R})]),n=T("div",{class:L.value,style:P.value,ref:e.container===!0?void 0:t,tabindex:-1},l);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:t},[T(Y,{onResize:V}),T("div",{class:"absolute-full",style:p.value},[T("div",{class:"scroll",style:g.value},[n])])]):n}}});let Et={reflector_callsign:"",dashboard_version:"",ipV4:"",ipV6:"","":"",reflector_version:"",sysop_email:""},Dt={reflectoruptimeseconds:0};const Ot=gt({name:"MainLayout",components:{},setup(){const e=C(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},data(){this.$q.dark.set("auto");let e="light";return this.$q.dark.isActive&&(e="dark"),{mode:e,metadata:Et,status:Dt}},mounted(){this.fetchMetadata(),this.fetchStatus(),setInterval(()=>{this.fetchStatus()},6e4)},methods:{fetchMetadata(){let e="/json/metadata";Be.get(e).then(m=>{this.metadata=m.data,this.metadata.ipV6=="NONE"&&(this.metadata.ipV6="")}).catch(m=>{console.error(m)})},fetchStatus(){let e="/json/status";Be.get(e).then(m=>{this.status=m.data,this.status.reflectorstatus=="up"?this.status.niceuptime=St(this.status.reflectoruptimeseconds):this.status.niceuptime="DOWN"}).catch(m=>{console.error(m)})},toggleMode(){this.mode=this.mode==="light"?"dark":"light",this.$q.dark.toggle()}}}),Nt={to:"/"},Wt={class:"row"},jt={class:"col-12",align:"left"},Kt=["href"];function Ut(e,m,i,o,t,d){const f=yt("router-view");return mt(),bt(Ht,{view:"hHh lpR fFf"},{default:j(()=>[Q(Mt,{elevated:"",class:"gt-xs"},{default:j(()=>[Q(Bt,null,{default:j(()=>[Q(Lt,null,{default:j(()=>[oe("a",Nt,K(e.metadata.reflector_callsign),1)]),_:1}),Q(Vt,null,{default:j(()=>[Q(ge,{to:"/",label:"Home"}),Q(ge,{to:"/links",label:"Links"}),Q(ge,{to:"/peers",label:"Peers"})]),_:1}),Q(lt,{label:e.mode==="light"?"Light Mode":"Dark Mode",color:"primary",onClick:e.toggleMode,modelValue:e.$q.dark,"onUpdate:modelValue":m[0]||(m[0]=_=>e.$q.dark=_)},null,8,["label","onClick","modelValue"])]),_:1})]),_:1}),Q(It,null,{default:j(()=>[Q(f)]),_:1}),Q(Ft,{align:"right",elevated:"",class:"gt-xs bg-grey-8 text-white"},{default:j(()=>[oe("div",Wt,[oe("div",jt,[ze(" mrefd Version: "+K(e.metadata.reflector_version)+" Uptime: "+K(e.status.niceuptime)+" | Dashboard Version: "+K(e.metadata.dashboard_version)+" | Sysop: ",1),oe("a",{href:`mailto:${e.metadata.sysop_email}`,style:{color:"#FFFFFF"}},K(e.metadata.sysop_email),9,Kt),ze(" | IP: "+K(e.metadata.ipV4)+" "+K(e.metadata.ipV6),1)])])]),_:1})]),_:1})}var Zt=ht(Ot,[["render",Ut]]);export{Zt as default};
