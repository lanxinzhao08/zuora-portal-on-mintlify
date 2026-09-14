/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=i.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(o,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new n(i,e,o)},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s;const l=window,c=l.trustedTypes,u=c?c.emptyScript:"",d=l.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},h=(e,t)=>t!==e&&(t==t||e==e),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:h},g="finalized";class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const i=this._$Ep(o,t);void 0!==i&&(this._$Ev.set(i,o),e.push(i))})),e}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||m}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var o;const i=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,i)=>{t?o.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,o.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=m){var i;const n=this.constructor._$Ep(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:p).toAttribute(t,o.type);this._$El=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,t){var o;const i=this.constructor,n=i._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=i.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:p;this._$El=n,this[n]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;w[g]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:w}),(null!==(s=l.reactiveElementVersions)&&void 0!==s?s:l.reactiveElementVersions=[]).push("1.6.3");const b=window,f=b.trustedTypes,y=f?f.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",z=`lit$${(Math.random()+"").slice(9)}$`,x="?"+z,S=`<${x}>`,I=document,A=()=>I.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,_="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,$=/>/g,P=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,L=/"/g,O=/^(?:script|style|textarea|title)$/i,M=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),D=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),B=new WeakMap,j=I.createTreeWalker(I,129,null,!1);function U(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(t):t}const F=(e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":"",a=N;for(let t=0;t<o;t++){const o=e[t];let s,l,c=-1,u=0;for(;u<o.length&&(a.lastIndex=u,l=a.exec(o),null!==l);)u=a.lastIndex,a===N?"!--"===l[1]?a=C:void 0!==l[1]?a=$:void 0!==l[2]?(O.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=P):void 0!==l[3]&&(a=P):a===P?">"===l[0]?(a=null!=n?n:N,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?P:'"'===l[3]?L:T):a===L||a===T?a=P:a===C||a===$?a=N:(a=P,n=void 0);const d=a===P&&e[t+1].startsWith("/>")?" ":"";r+=a===N?o+S:c>=0?(i.push(s),o.slice(0,c)+k+o.slice(c)+z+d):o+z+(-2===c?(i.push(void 0),t):d)}return[U(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),i]};class q{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const a=e.length-1,s=this.parts,[l,c]=F(e,t);if(this.el=q.createElement(l,o),j.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=j.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith(k)||t.startsWith(z)){const o=c[r++];if(e.push(t),void 0!==o){const e=i.getAttribute(o.toLowerCase()+k).split(z),t=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?W:"?"===t[1]?Y:"@"===t[1]?J:V})}else s.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(O.test(i.tagName)){const e=i.textContent.split(z),t=e.length-1;if(t>0){i.textContent=f?f.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],A()),j.nextNode(),s.push({type:2,index:++n});i.append(e[t],A())}}}else if(8===i.nodeType)if(i.data===x)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(z,e+1));)s.push({type:7,index:n}),e+=z.length-1}n++}}static createElement(e,t){const o=I.createElement("template");return o.innerHTML=e,o}}function G(e,t,o=e,i){var n,r,a,s;if(t===D)return t;let l=void 0!==i?null===(n=o._$Co)||void 0===n?void 0:n[i]:o._$Cl;const c=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,o,i)),void 0!==i?(null!==(a=(s=o)._$Co)&&void 0!==a?a:s._$Co=[])[i]=l:o._$Cl=l),void 0!==l&&(t=G(e,l._$AS(e,t.values),l,i)),t}class H{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:I).importNode(o,!0);j.currentNode=n;let r=j.nextNode(),a=0,s=0,l=i[0];for(;void 0!==l;){if(a===l.index){let t;2===l.type?t=new K(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new X(r,this,e)),this._$AV.push(t),l=i[++s]}a!==(null==l?void 0:l.index)&&(r=j.nextNode(),a++)}return j.currentNode=I,n}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class K{constructor(e,t,o,i){var n;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),E(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==D&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>R(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Z&&E(this._$AH)?this._$AA.nextSibling.data=e:this.$(I.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=q.createElement(U(i.h,i.h[0]),this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.v(o);else{const e=new H(n,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new q(e)),t}T(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new K(this.k(A()),this.k(A()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class V{constructor(e,t,o,i,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=G(this,e,t,0),r=!E(e)||e!==this._$AH&&e!==D,r&&(this._$AH=e);else{const i=e;let a,s;for(e=n[0],a=0;a<n.length-1;a++)s=G(this,i[o+a],t,a),s===D&&(s=this._$AH[a]),r||(r=!E(s)||s!==this._$AH[a]),s===Z?e=Z:e!==Z&&(e+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class W extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}const Q=f?f.emptyScript:"";class Y extends V{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Z?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class J extends V{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=G(this,e,t,0))&&void 0!==o?o:Z)===D)return;const i=this._$AH,n=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Z&&(i===Z||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const ee=b.litHtmlPolyfillSupport;null==ee||ee(q,K),(null!==(v=b.litHtmlVersions)&&void 0!==v?v:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var te,oe;class ie extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:t;let a=r._$litPart$;if(void 0===a){const e=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new K(t.insertBefore(A(),e),e,void 0,null!=o?o:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return D}}ie.finalized=!0,ie._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:ie});const ne=globalThis.litElementPolyfillSupport;null==ne||ne({LitElement:ie}),(null!==(oe=globalThis.litElementVersions)&&void 0!==oe?oe:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:i}=t;return{kind:o,elements:i,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ae=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}},se=(e,t,o)=>{t.constructor.createProperty(o,e)};function le(e){return(t,o)=>void 0!==o?se(e,t,o):ae(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ce(e){return le({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ue;null===(ue=window.HTMLSlotElement)||void 0===ue||ue.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=1,pe=2,he=e=>(...t)=>({_$litDirective$:e,values:t});class me{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=he(class extends me{constructor(e){var t;if(super(e),e.type!==de||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var o,i;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(o=this.nt)||void 0===o?void 0:o.has(e))&&this.it.add(e);return this.render(t)}const n=e.element.classList;this.it.forEach((e=>{e in t||(n.remove(e),this.it.delete(e))}));for(const e in t){const o=!!t[e];o===this.it.has(e)||(null===(i=this.nt)||void 0===i?void 0:i.has(e))||(o?(n.add(e),this.it.add(e)):(n.remove(e),this.it.delete(e)))}return D}}),we="HOME",ve="DEV_CENTER_HOME",be="LOGIN",fe="TALK_TO_SALES",ye="WATCH_DEMO",ke="JOURNEY_TO_USERSHIP",ze="JOURNEY_TO_USERSHIP_DESC",xe="SUBSCRIBED_INSTITUTE",Se="SUBSCRIBED_INSTITUTE_DESC",Ie="MODERN_BUSINESS",Ae="MODERN_BUSINESS_DESC",Ee="OUR_CUSTOMERS",Re="OUR_CUSTOMERS_DESC",_e="PARTNERS",Ne="PARTNERS_DESC",Ce="ABOUT_ZUORA",$e="ABOUT_ZUORA_DESC",Pe="BILLING",Te="BILLING_DESC",Le="ZUORA_CPQ",Oe="ZUORA_CPQ_DESC",Me="CPQ",De="REVENUE",Ze="REVENUE_DESC",Be="ZUORA_PLATAFORM",je="ZUORA_PLATAFORM_DESC",Ue="CONNECT_EVERYTHING",Fe="DEPLOY_FASTER",qe="REMOVE_RISK",Ge="KNOW_NOW",He="TRANSACT_MORE",Ke="PAYMENTS",Ve="PAYMENTS_DESC",We="ZUORA_MONITIZATION_SUITE",Qe="ZUORA_MONITIZATION_SUITE_DESC",Ye="ZEPHR",Je="ZEPHR_DESC",Xe="ZEPHR_FOR_MEDIA",et="DYNAMIC_OFFERS",tt="USER_SPECIFIC_PERSONALIZTION",ot="IDENTITY_AND_ACCESS_MANAGEMENT",it="INTELIGENT_PAYWALL",nt="CORPORATE_SUBSCRIPTION_MANAGEMENT",rt="FIRST_PARTY_DATA_STRATEGIES",at="PARTNERS_ECOSYSTEM",st="PARTNERS_ECOSYSTEM_DESC",lt="FIND_A_PARTNER",ct="FIND_A_PARTNER_DESC",ut="BECOME_A_PARTNER",dt="BECOME_A_PARTNER_DESC",pt="PARTNERS_PORTAL",ht="PARTNERS_PORTAL_DESC",mt="BECOME_A_PARTNER_CARD_DESC",gt="CASE_STUDIES",wt="BLOG",vt="BUSINESS_INITIATIVES",bt="SOLUTIONS_BUSINESS_INITIATIVES_LINK_1",ft="SOLUTIONS_BUSINESS_INITIATIVES_LINK_2",yt="SOLUTIONS_BUSINESS_INITIATIVES_LINK_3",kt="SOLUTIONS_BUSINESS_INITIATIVES_LINK_4",zt="SOLUTIONS_BUSINESS_INITIATIVES_LINK_5",xt="SOLUTIONS_BUSINESS_INITIATIVES_LINK_6",St="SOLUTIONS_BUSINESS_INITIATIVES_LINK_7",It="SOLUTIONS_BUSINESS_INITIATIVES_LINK_8",At="SOLUTIONS_BUSINESS_INITIATIVES_VIEW_ALL",Et="WHITE_PAPERS",Rt="EVENTS",_t="GUIDES",Nt="WEBINARS",Ct="EBOOKS",$t="PRODUCT_DATASHEETS",Pt="INDUSTRY_REPORTS",Tt="SUBSCRIBED",Lt="MANUFACTURING_AND_IOT",Ot="SOFTWARE",Mt="MEDIA_PLUS_ENTERTEINMENT",Dt="ZUORA_FOR_STARTUPS",Zt="CONNECT_PLUS_LEARN",Bt="ZUORA_UNIVERSITY",jt="IMPLEMENTER_TRAINING_DESC",Ut="IMPLEMENTER_TRAINING_LEARN_MORE",Ft="IMPLEMENTER_TRAINING_LOGIN",qt="CUSTOMER_TRAINING_LEARN_MORE",Gt="CUSTOMER_TRAINING_LOGIN",Ht="IMPLEMENTER_TRAINING",Kt="CUSTOMER_TRAINING",Vt="CUSTOMER_TRAINING_DESC",Wt="PRODUCT_HELP_PRODUCT_DOCUMENTATION",Qt="PRODUCT_HELP_KNOWLEDGE_CENTER_DESC",Yt="PRODUCT_HELP_DEVELOPER_CENTER",Jt="PRODUCT_HELP_DEVELOPER_CENTER_DESC",Xt="DEVELOPER_API",eo="SYSTEM_STATUS",to="RELEASE_NOTES",oo="SUPPORT_CENTER",io="MAINTENANCE",no="COMMUNITY_PORTAL",ro="COMMUNITY_PORTAL_DESC",ao="WHY_ZUORA",so="EXPLORE",lo="LEARN_MORE",co="PRODUCTS",uo="RESOURCES",po="INDUSTRY",ho="SUBSCRIBED_DESC",mo="SUPPORT",go="SIGN_IN",wo="PRODUCT_HELP",vo="LEGAL",bo="PRIVACY_STATEMENT",fo="TERMS_AND_CONDITIONS",yo="VIEW_ALL_PRODUCTS",ko="TEAM",zo="NEWSROOM",xo="AWARDS",So="GLOBAL_OFFICES",Io="CAREERS",Ao="CHANGE_REGION",Eo="NEWSLETTER_LEGEND",Ro="COMPANY",_o="WHAT_IS_NEW_IN_ZUORA",No="ASK_QUESTIONS",Co="CORPORATE_RESPONSABILITY",$o="SOLUTIONS",Po="LEARNED_LOUNGE",To="MAINTENANCE_SCHEDULE",Lo="LATEST_RELEASES",Oo="ZUORA_BASICS",Mo="QUICKSTART_API",Do="BILLING_API",Zo="ZUORA_SDKS",Bo="ALREADY_PARTNERS_PORTAL",jo="AUTOMATE_REVENUE_RECOGNITION",Uo="SUBSCRIBER_GROWTH_STRATEGIES",Fo="OPTIMIZE_PAYMENT_OPERATIONS",qo="BILLING_AND_PAYMENTS",Go="RISK_AND_COMPLIANCE",Ho="PRICING_AND_PACKAGING",Ko="OPERATIONS_AND_IT",Vo="ZUORA_PLUS",Wo="RESOURCES_VIEW_ALL",Qo="USE_CASES",Yo="MONETIZE_USAGE_BASED_OFFERS",Jo="TRANSFORM_YOUR_BILLING_WITH_AI",Xo="RETAIN_SUBSCRIBERS",ei="DYNAMIC_PAYWALLS",ti="ACCELERATE_OFFERS",oi="SCALE_REVENUE_RECOGNITION",ii="ENABLE_REVENUE_GROWTH",ni="MOVE_UPMARKET",ri="EV_CHARGING",ai="INDUSTRIES",si="PRICING_AND_PACKAGING_PRODUCT",li="QUOTING_QPC",ci="ORDER_MANAGEMENT",ui="CONSUMPTION_METERING",di="INVOICING_TAX_COMPLIANCE",pi="PAYMENTS_WORD",hi="APIS_CONNECTORS",mi="EXTENSIBILITY",gi="COVERAGE_GATEWAY_ROUTING",wi="FRAUD_FAILURES",vi="PAYWALL_SOLUTIONS",bi="DATA_STRATEGIES",fi="SPECIFIC_PERSONALIZATION",yi="EXTENSION_STUDIO",ki="ANALYTICS",zi="SECURITY",xi="INTEGRATION_HUB",Si="ADMIN_COMMAND_CENTER",Ii="SAAS",Ai="TYPE",Ei="VIDEOS",Ri="INDUSTRY_TRENDS",_i="REPORTS",Ni="PODCASTS",Ci="TOPIC",$i="ZUORA_COLLECTIONS",Pi="ZUORA_COLLECTIONS_BODY",Ti="GLOSSARY",Li="CARD_WHY_ZUORA_1_TITLE",Oi="CARD_WHY_ZUORA_1_DESC",Mi="CARD_WHY_ZUORA_1_IMAGE",Di="CARD_WHY_ZUORA_1_BUTTON",Zi="CARD_PRODUCTS_1_TITLE",Bi="CARD_PRODUCTS_1_DESC",ji="CARD_PRODUCTS_1_IMAGE",Ui="CARD_PRODUCTS_1_BUTTON",Fi="CARD_PARTNERS_1_TITLE",qi="CARD_PARTNERS_1_DESC",Gi="CARD_PARTNERS_1_IMAGE",Hi="CARD_PARTNERS_1_BUTTON",Ki="CARD_PARTNERS_2_TITLE",Vi="CARD_PARTNERS_2_DESC",Wi="CARD_PARTNERS_2_IMAGE",Qi="CARD_PARTNERS_2_BUTTON",Yi="CARD_SOLUTIONS_1_TITLE",Ji="CARD_SOLUTIONS_1_DESC",Xi="CARD_SOLUTIONS_1_IMAGE",en="CARD_SOLUTIONS_1_BUTTON",tn="CARD_SUPPORT_1_TITLE",on="CARD_SUPPORT_1_DESC",nn="CARD_SUPPORT_1_IMAGE",rn="CARD_SUPPORT_1_BUTTON",an="CARD_COMPANY_1_TITLE",sn="CARD_COMPANY_1_DESC",ln="CARD_COMPANY_1_BUTTON",cn="CARD_COMPANY_1_IMAGE",un="CARD_COMPANY_2_TITLE",dn="CARD_COMPANY_2_DESC",pn="CARD_COMPANY_2_BUTTON",hn="CARD_COMPANY_2_IMAGE",mn="OVERVIEW",gn="DEV_HOME",wn="DOCUMENTATION",vn="API_REFERENCE",bn="API_REFERENCE_QUICKSTART",fn="API_REFERENCE_QUICKSTART_DESC",yn="API_REFERENCE_V1_API",kn="API_REFERENCE_V1_API_DESC",zn="API_REFERENCE_ZEPHR",xn="API_REFERENCE_ZEPHR_DESC",Sn="API_REFERENCE_OTHERS",In="API_REFERENCE_OTHERS_DESC",An="API_REFERENCE_CARD_TITLE",En="API_REFERENCE_CARD_DESC",Rn="API_REFERENCE_CARD_BUTTON",_n="localhost",Nn="plus.zuora.com/plus",Cn="staging-zuora-plus.audienceplus.dev",$n="developer",Pn="preview",Tn="localhost",Ln=600,On=900,Mn=1200,Dn=1800,Zn={ENGLISH:"en",FRENCH:"fr",GERMAN:"de",JAPANESSE:"ja",URL_JAPANESE:"jp"},Bn={[Zn.GERMAN]:{[we]:"Startseite.",[be]:"Anmelden",[go]:"Anmelden",[fe]:"Kontakt aufnehmen",[ye]:"Demo anschauen",[ao]:"Warum Zuora",[so]:"Erkunden",[ke]:"Journey to Usership",[ze]:"Ein umfassendes Rahmenwerk aus Daten, Expertenwissen und Tools, um Sie auf dem Weg zum Erfolg im Abonnement-GeschÃ¤ftsmodell zu unterstÃ¼tzen.",[xe]:"Subscribed Institute",[Se]:"Erkunden Sie Ressourcen und vernetzen Sie sich mit FÃ¼hrungskrÃ¤ften fÃ¼r datenbasierte Insights, Best Practices und Diskussionen zu aktuellen Trends im AbonnementgeschÃ¤ft.",[Ie]:"Moderne GeschÃ¤ftsbeschleuniger",[Ae]:"Einflussreiche FÃ¼hrungskrÃ¤fte, die den Wandel vorantreiben und die Zukunft des kundenorientierten GeschÃ¤fts definieren.",[Ee]:"Unsere Kunden",[Re]:"Mehr als 1.000 Unternehmen setzen auf Zuoras fÃ¼hrende Technologie und Expertise, um ihre GeschÃ¤ftspotenziale vollstÃ¤ndig zu realisieren.",[_e]:"Partners",[Ne]:"FÃ¼r jeden Bereich Ihrer Implementierung, von Zahlungen Ã¼ber Steuern bis zur Buchhaltung, bieten wir starke Partnerschaften.",[Ce]:"Ãœber Zuora",[$e]:"Von der Verwaltung von Abonnements bis hin zur Monetarisierung â€“ wir helfen innovativen Unternehmen dabei, direkte digitale Beziehungen aufzubauen und zu monetarisieren.",[lo]:"Mehr erfahren",[co]:"Produkte",[_o]:"Neuigkeiten in Zuora",[Pe]:"Zuora Billing",[Te]:"Entwickeln Sie flexible Preisgestaltungsmodelle und verarbeiten Sie wiederkehrende, einmalige sowie verbrauchsbasierte GebÃ¼hren effizient.",[Me]:"Zuora CPQ",[De]:"Zuora Revenue",[Ze]:"Automatisieren Sie zuverlÃ¤ssig die Umsatzerfassung fÃ¼r verschiedenste GeschÃ¤ftsmodelle.",[Be]:"Zuora Platform",[je]:"ErhÃ¶hen Sie die AgilitÃ¤t Ihres Technologie-Ã–kosystems mit der Zuora-Plattform.",[Le]:"Zuora CPQ",[Oe]:"Optimieren Sie das gesamte Angebot Ã¼ber den Kundenlebenszyklus hinweg, von Upselling-Strategien bis hin zu VertragsverlÃ¤ngerungen.",[Ue]:"Verbinden Sie alles",[Fe]:"Schneller bereitstellen",[qe]:"Risiken minimieren",[Ge]:"Gleich wissen",[He]:"Mehr Transaktionen",[Ke]:"Zuora Payments",[Ve]:"Steigern Sie das Umsatzwachstum durch Zahlungsoptimierung.",[We]:"Zuora Order-to-Revenue",[Qe]:"Steuern Sie den gesamten Prozess von der Auftragserteilung bis zur Umsatzrealisierung auf einer einzigen Plattform.",[Ye]:"Zephr",[Je]:"Steigern Sie die Konversion und Kundenbindung wÃ¤hrend des gesamten Kundenlebenszyklus.",[Xe]:"Zephr fÃ¼r Medien",[et]:"Dynamische Angebote",[tt]:"Nutzerbezogene Personalisierung",[ot]:"IdentitÃ¤ts- und Zugriffsverwaltung",[it]:"Intelligente Paywall",[nt]:"Unternehmensabonnement-Verwaltung",[rt]:"Strategien fÃ¼r First-Party-Daten",[yo]:"Alle Produkte anzeigen",[at]:"Accelerate Partnernetzwerk",[st]:"Unser umfangreiches Partnernetzwerk ist ein integraler Bestandteil der Wachstumsstrategie von Zuora, und wir bieten eine Vielzahl von Partnerschaftsoptionen an.",[lt]:"Finde einen Partner",[ct]:"Finden Sie den idealen Zuora-Partner, der Ihre spezifischen Anforderungen und Initiativen unterstÃ¼tzt.",[ut]:"Werden Sie Partner",[dt]:"Arbeiten Sie mit uns zusammen, um unsere gemeinsamen Kunden zufriedenzustellen und langfristig zu binden.",[pt]:"Partnerportal",[Bo]:"Bereits ein Zuora-Partner?",[ht]:"Greifen Sie auf exklusive Informationen und Ressourcen im Zuora-Partnerportal zu.",[mt]:"Mit unserem Zuora Accelerate Partnerprogramm fÃ¼hren Sie die Monetarisierung neuer GeschÃ¤ftsmodelle an, wenn Kunden digitale Abonnement- und Nutzungsbeziehungen mit ihren Endkunden aufbauen mÃ¶chten.",[uo]:"Ressourcen",[gt]:"Fallstudien",[wt]:"Blog",[vt]:"GeschÃ¤ftsinitiativen",[bt]:"EinfÃ¼hrung eines neuen Abonnementangebots",[ft]:"Erneuerung einer Preisstrategie",[yt]:"Ãœbernehmung einer nutzungsbasierten Preisgestaltung",[kt]:"MaÃŸschneiderung fÃ¼r internationale MÃ¤rkte",[zt]:"Expansion in hÃ¶heren- oder niedrigerpreisigen MÃ¤rkten",[xt]:"Reduzierung der Zeit bis zum Abschluss der BÃ¼cher",[St]:"Implementierung einer Cross-Sell- und Up-Sell-Strategie",[It]:"Minimierung ungewollter Kundenabwanderungen",[At]:"Alle anzeigen",[Et]:"WeiÃŸbÃ¼cher",[Rt]:"Veranstaltungen",[_t]:"LeitfÃ¤den",[Nt]:"Webinare",[Ct]:"E-books",[$t]:"ProduktinformationsblÃ¤tter",[Pt]:"Branchenberichte",[Tt]:"Subscribed",[po]:"Branche",[Lt]:"Fertigung und IoT",[Ot]:"Software",[Mt]:"Medien und Unterhaltung",[Dt]:"Zuora fÃ¼r Startups",[ho]:"Inspirationen, die die Zukunft des GeschÃ¤fts formen. Vom Eigentum zum Nutzungsrecht.",[jo]:"Automatisieren Sie Umsatzerkennung",[Uo]:"Strategien fÃ¼r Abonnentenwachstum",[Fo]:"Optimieren Sie ZahlungsvorgÃ¤nge",[qo]:"Abrechnung und Zahlungen",[Go]:"Risiko und Compliance",[Ho]:"Preisgestaltung und Verpackung",[Ko]:"Betrieb und IT",[Vo]:"Zuora +",[Wo]:"Alle anzeigen",[mo]:"Support",[Zt]:"Verbinden und Lernen",[no]:"Community Portal",[ro]:"Tauschen Sie sich mit anderen Abo-Unternehmen sowie Finanz- und Produktexperten aus.",[Bt]:"Zuora University",[Ht]:"Implementierer-Training",[jt]:"Fortgeschrittene Kurse und Zertifizierungen fÃ¼r Berater, Partner und Implementierungsteams.",[Kt]:"Kundenschulung",[Vt]:"SelbststÃ¤ndige Kurse, virtuelle Klassen und Zertifizierungen fÃ¼r Zuora-Kunden und Produktendnutzer.",[wo]:"Produkthilfe",[Wt]:"Product Documentation",[Qt]:"Starten Sie mit der Integration von Zuora-Produkten, um Ihr GeschÃ¤ft zu fÃ¶rdern.",[Yt]:"Entwickler-Center",[Jt]:"Dokumentation und Tools fÃ¼r Entwickler zur UnterstÃ¼tzung Ihrer technischen Integration.",[Xt]:"Entwickler-API",[eo]:"Systemstatus",[to]:"Release Notes",[oo]:"Support Center",[io]:"Wartung",[No]:"Fragen stellen",[Co]:"Unternehmensverantwortung",[Po]:"Lernlounge",[To]:"Wartungsplan",[Lo]:"Neueste VerÃ¶ffentlichungen",[Oo]:"Zuora-Grundlagen",[Mo]:"Quickstart-API, Zuora-Umsatz- und Inkasso-APIs",[Do]:"Billing-API",[Zo]:"Zuora SDKs",[Ro]:"Unternehmen",[ko]:"Team",[zo]:"Pressebereich",[xo]:"Auszeichnungen",[So]:"Globale Standorte",[Io]:"Karrierechancen",[Ao]:"Region Ã¤ndernn",[Eo]:"Tien Tzuo, CEO von Zuora und fÃ¼hrender Experte der Abonnement-Wirtschaft, kommentiert die wichtigsten Wirtschaftsnachrichten der Woche.",[vo]:"Rechtliche Hinweise",[bo]:"Datenschutz-ErklÃ¤rung",[fo]:"Allgemeine GeschÃ¤ftsbedingungen",[Qo]:"AnwendungsfÃ¤lle",[Yo]:"Nutzungsbasierte Angebote monetarisieren",[Jo]:"Transformieren Sie Ihre Rechnungsstellung mit KI",[Xo]:"Abonnenten akquirieren und binden",[ei]:" KI Paywall einsetzen",[ti]:"Angebote und Erlebnisse im Medienbereich beschleunigen",[oi]:"Skalierung der Umsatzerkennung",[ii]:"Umsatzwachstum fÃ¶rdern",[ni]:"In hÃ¶here Marktsegmente expandieren",[ri]:"EV-Ladungen",[ai]:"Branchen",[Ii]:"SaaS (Software as a Service)",[li]:"Konfiguration, Preisgestaltung und Angebotserstellung (CPQ)",[ci]:"Auftragsabwicklung",[ui]:"Verbrauchserfassung",[di]:"Rechnungslegung und steuerliche Compliance",[pi]:"Zahlungsverkehr",[hi]:"APIs und Schnittstellen",[mi]:"Systemerweiterungen",[gi]:"Abdeckung und Routing von Zahlungsgateways",[wi]:"Verhinderung von ZahlungsausfÃ¤llen und Betrug",[vi]:"KI Paywall",[bi]:"Strategien fÃ¼r Erstparteiendaten",[fi]:"Personalisierung auf Benutzerebene",[yi]:"Erweiterungsstudio",[ki]:"Datenanalytik",[zi]:"Datensicherheit",[xi]:"Integration Hub",[Si]:"Admin-Kommandozentrale",[Ai]:"Typ",[Ei]:"Videos",[Ri]:"Branchentrends (Subscribed)",[_i]:"Berichte",[Ni]:"Podcasts",[Ci]:"Thema",[$i]:"Zuora Collections",[Pi]:"KI-gesteuerte InkassolÃ¶sungen zum Schutz der Kundenbeziehungen",[Ti]:"Fachbegriffe",[Li]:"Subscription Economy Indexâ„¢",[Oi]:"Die neueste Ausgabe des Subscription Economy Index belegt, dass Abo-basierte Unternehmen in den letzten zehn Jahren 4,6-mal schneller als der S&P 500 gewachsen sind und auch nach dem pandemiebedingten Boom weiter stark wachsen.",[Di]:"Bericht herunterladen",[Zi]:"Subscribed Connect On-Demand",[Bi]:"Erhalten Sie exklusive Einblicke in die neuesten Produktvorstellungen und technologischen Innovationen, die Ihr Unternehmen auf ein neues Niveau heben.",[Ui]:"Jetzt on-demand anschauen",[Fi]:"Gipfel zum modernen Rechnungswesen",[qi]:"Erfahren Sie von fÃ¼hrenden Experten bei Deloitte, EY, PwC, Klarity, Gappify, Pluralsight, Icertis, Genesys und Zuora Ã¼ber aktuelle Trends im Rechnungswesen und zukÃ¼nftige Erwartungen.",[Hi]:"Jetzt on-demand anschauen",[Ki]:"Demystifizierung der nutzungsbasierten Preisgestaltung",[Vi]:"Erfahren Sie mehr Ã¼ber makroÃ¶konomische und branchenspezifische Trends aus Zuoras Analyse und der Boston Consulting Group, und diskutieren Sie die neuesten Entwicklungen in der nutzungsbasierten Preisgestaltung.",[Qi]:"Jetzt ansehen",[$o]:"LÃ¶sungen",[Yi]:"Zuora+",[Ji]:"Entdecken Sie exklusive Expertenmeinungen, Bildungsressourcen und Unterhaltungsangebote auf Zuora+.",[en]:"Entdecken Sie Zuora+",[tn]:"Community Portal",[on]:"Im Zuora Community-Portal kÃ¶nnen Benutzer Fragen stellen, Wissen austauschen, ihre Expertise erweitern und Gleichgesinnte treffen, die ebenfalls Zuora nutzen.",[rn]:"Besuchen Sie das Community Portal",[an]:"Zuora: Eine Kraft fÃ¼r das Gute",[sn]:"Lernen Sie, wie Zuora sich fÃ¼r Nachhaltigkeit und Verantwortung in Umwelt, Soziales und UnternehmensfÃ¼hrung gegenÃ¼ber all seinen Stakeholdern, einschlieÃŸlich Mitarbeitern, Kunden, Gemeinschaften und der Umwelt, einsetzt.",[ln]:"Mehr Ã¼ber unser Engagement",[un]:"Zuora und Sovos: Gemeinsam fÃ¼r globale E-Invoicing-LÃ¶sungen.",[dn]:"Durch die Partnerschaft mit Sovos bietet Zuora eine nahtlos integrierte und automatisierte E-Invoicing-LÃ¶sung, die perfekt mit dem wiederkehrenden Abrechnungssystem von Zuora harmoniert.",[pn]:"Mehr Ã¼ber die Partnerschaft erfahren",[mn]:"Ãœbersicht",[gn]:"Zuora Dev Home",[wn]:"Legen Sie los",[vn]:"API-Referenz",[bn]:"API Schnellstart",[fn]:"Eine umfassende LÃ¶sung fÃ¼r die meisten Anforderungen an Abrechnung, Zahlungen und Plattformintegration mit zahlreichen nutzerfreundlichen Querschnittsfunktionen.",[yn]:"v1 API",[kn]:"Zuoras originale, zu 100 % abdeckende Abrechnungs-, Zahlungs- und Plattform-API.",[zn]:"Zephr API",[xn]:"Zephrs dynamische Bezahlmauer-Technologie zum Aufbau, Testen, Lernen und Optimieren der digitalen Abonnementreisen der Benutzer und zur Schaffung personalisierter Erfahrungen.",[Sn]:"Andere APIs",[In]:"Quickstart-API, Zuora-Umsatz- und Inkasso-APIs",[An]:"Expressintegration",[En]:"\n    <p>Zuora bietet zwei SÃ¤tze von APIs fÃ¼r die Abrechnung und unsere Plattform: die v1-API und Quickstart.</p>\n    <br><p>Die v1-API von Zuora bietet Zugriff auf alle Funktionen unserer Zuora-Abrechnungs-, Zahlungs- und Plattform. Zuoras Quickstart stellt eine vereinfachte Programmerfahrung nur fÃ¼r gÃ¤ngige E-Commerce-AnwendungsfÃ¤lle dar. Quickstart, oft als â€žv2â€œ bezeichnet, ist KEIN Ersatz fÃ¼r unsere v1-APIs. Wenn Sie mit der Neuentwicklung beginnen, empfehlen wir Ihnen, fÃ¼r alle Ihre AnwendungsfÃ¤lle die v1-API zu verwenden. Wir empfehlen Quickstart nicht mehr fÃ¼r die Entwicklung neuer E-Commerce-LÃ¶sungen. Wir verwerfen Quickstart nicht, wir werden weiterhin Fehler beheben, aber wir akzeptieren keine VerbesserungswÃ¼nsche fÃ¼r Quickstart. Neue Abrechnungs- und Plattformfunktionen verfÃ¼gen nur Ã¼ber v1-APIs und werden von Quickstart nicht unterstÃ¼tzt.</p>",[Rn]:"Quickstart-APIs erkunden"},[Zn.ENGLISH]:{[we]:"Home",[be]:"Login",[go]:"Sign In",[fe]:"Talk to Sales",[ye]:"Watch a Demo",[ao]:"Why Zuora",[so]:"Explore",[ke]:"Journey to Usership",[ze]:"A framework with data, expert guidance, and tools that help you navigate the path of success as a subscription business.",[xe]:"Subscribed Institute",[Se]:"Explore resources and join other executive leaders for data-driven insights, best practices, and discussions about the latest subscription trends.",[Ie]:"Modern Business Accelerators",[Ae]:"Momentous leaders driving change and defining the customer-centric business of the future.",[Ee]:"Our Customers",[Re]:"1,000+ companies trust Zuora's industry-leading technology and expertise to unlock the full potential of their business.",[_e]:"Partners",[Ne]:"From payments and taxes, to accounting and beyond, we've built strong partnerships for every aspect of your implementation.",[Ce]:"About Zuora",[$e]:"From subscription management to monetization, we help todayâ€™s innovative companies nurture and monetize direct digital relationships.",[lo]:"Learn More",[co]:"Products",[_o]:"Whatâ€™s New in Zuora",[Pe]:"Zuora Billing",[Te]:"Design flexible pricing and bill for recurring, one time, and consumption charges.",[Me]:"Zuora CPQ",[De]:"Zuora Revenue",[Ze]:"Automate revenue recognition for any business model.",[Be]:"Zuora Platform",[je]:"Maximize agility across your technology ecosystem.",[Le]:"Zuora CPQ",[Oe]:"Quote for the entire customer lifecycle, from upsells to renewals.",[Ue]:"Connect Everything",[Fe]:"Deploy Faster",[qe]:"Remove Risk",[Ge]:"Know Now",[He]:"Transact More",[Ke]:"Zuora Payments",[Ve]:"Unlock Revenue Growth with Payment Optimization.",[We]:"Zuora Order to Revenue",[Qe]:"Command the full order-to-revenue cycle on one platform.",[Ye]:"Zephr",[Je]:"Drive conversion and retention throughout the customer lifecycle.",[Xe]:"Zephr for Media",[et]:"Dynamic Offers",[tt]:"User Specific Personalization",[ot]:"Identity & Access Management",[it]:"Intelligent Paywall",[nt]:"Corporate Subscription Management",[rt]:"First-Party Data Strategies",[yo]:"View All Products",[at]:"Accelerate Partners Ecosystem",[st]:"Our Partner Ecosystem is key to Zuora's growth strategy, and we offer a variety of Partnership Types.",[lt]:"Find a Partner",[ct]:"Find a Zuora Partner to work with who can serve the needs of your initiative.",[ut]:"Become a Partner",[dt]:"We will work with you to make our shared customers happy and loyal.",[pt]:"Partners Portal",[Bo]:"Already a Zuora Partner?",[ht]:"Get access to insider info and resources in the Partner Portal.",[mt]:"Our Zuora Accelerate Partner Program enables you to lead & capture the Monetization of New Business models as customers look to develop digital subscription and consumption relationships with their own end customers.",[uo]:"Resources",[gt]:"Case Studies",[wt]:"Blog",[vt]:"Business Initiatives",[bt]:"How to Launch a New Subscription Offering",[ft]:"How to Refresh Your Pricing Strategy",[yt]:"How to Adopt Usage-Based Pricing",[kt]:"How to Tailor Offerings for International Markets",[zt]:"How to Expand Upmarketâ€”or Downmarket",[xt]:"How To Reduce Time To Close",[St]:"How to Execute a Cross-sell and Up-sell Strategy",[It]:"How to Minimize Involuntary Churn",[At]:"View All",[Et]:"Whitepapers",[Rt]:"Events",[_t]:"Guides",[Nt]:"Webinars",[Ct]:"Ebooks",[$t]:"Product Datasheets",[Pt]:"Industry Reports",[Tt]:"Subscribed",[po]:"Industry",[Lt]:"Manufacturing & IOT",[Ot]:"Software",[Mt]:"Media + Entertainment",[Dt]:"Zuora for Startups",[ho]:"Stories shaping the future of business. Goodbye, ownership. Hello, usership.",[jo]:"Automate Revenue Recognition",[Uo]:"Subscriber Growth Strategies",[Fo]:"Optimize Payment Operations",[qo]:"Billing and Payments",[Go]:"Risk and Compliance",[Ho]:"Intelligent Pricing & Packaging",[Ko]:"Operations and IT",[Vo]:"Zuora +",[Wo]:"View All",[Qo]:"Use Cases",[Yo]:"Monetize usage-based offers",[Jo]:"Transform your Billing with AI",[Xo]:"Acquire & retain subscribers",[ei]:"Launch AI Paywalls",[ti]:"Accelerate offers & experiences in media",[oi]:"Scale revenue recognition",[ii]:"Enable revenue growth",[ni]:"Move upmarket",[ri]:"EV Charging",[ai]:"Industries",[Ii]:"Saas",[li]:"Quoting (CPQ)",[ci]:"Order management",[ui]:"Consumption metering",[di]:"Invoicing & tax compliance",[pi]:"Payments",[hi]:"APIs & connectors",[mi]:"Extensibility",[gi]:"Payment Coverage & Gateway Routing",[wi]:"Payment Fraud & Failures",[vi]:"AI Paywall",[bi]:"First-party data strategies",[fi]:"User specific personalization",[yi]:"Extension Studio",[ki]:"Analytics",[zi]:"Security",[xi]:"Integration Hub",[Si]:"Admin command center",[Ai]:"Type",[Ei]:"Videos",[Ri]:"Industry trends (Subscribed)",[_i]:"Reports",[Ni]:"Podcasts",[Ci]:"Topic",[$i]:"Zuora Collections",[Pi]:"AI-powered collections built to protect customer relationships.",[Ti]:"Glossary",[mo]:"Support",[Zt]:"Connect + Learn",[no]:"Community Portal",[ro]:"Connect and share with fellow subscription businesses, finance and product leaders.",[Bt]:"Zuora University",[Ht]:"Implementer Training",[jt]:"Advanced coursework and certifications for consultants, partners, and implementation teams",[Kt]:"Customer Training",[Vt]:"Self-paced courses, virtual classes, and certifications for Zuora customers and product end users",[wo]:"Product Help",[Wt]:"Product Documentation",[Qt]:"Start integrating Zuora's products to grow your business.",[Yt]:"Developer Center",[Jt]:"Developer-focused docs and tools to support your technical integration.",[Xt]:"Developer API",[eo]:"System Status",[to]:"Latest Releases",[oo]:"Support Center",[io]:"Maintenance",[No]:"Ask Questions",[Co]:"Corporate Responsibility",[Po]:"Learners Lounge",[To]:"Maintenance Schedule",[Lo]:"Latest Releases",[Oo]:"Zuora basics",[Mo]:"Quickstart API, Zuora Revenue, and Collection APIs",[Do]:"Billing API",[Zo]:"Zuora SDKs",[Ro]:"Company",[ko]:"Team",[zo]:"Newsroom",[xo]:"Awards",[So]:"Global Offices",[Io]:"Careers",[Ao]:"Change region",[Eo]:"Zuora CEO Tien Tzuo, the foremost expert on the Subscription Economy&#xAE; weighs in on the week's most important business news.",[vo]:"Legal",[bo]:"Privacy Statement",[fo]:"Terms and Conditions",[Li]:"Subscription Economy Indexâ„¢",[Oi]:"The latest edition of the Subscription Economy Index finds subscription businesses have grown 4.6x faster than the s&p 500 in the last decade enduring beyond pandemic surge.",[Di]:"Download Report",[Zi]:"Subscribed Connect On Demand",[Bi]:"Get a sneak peek at exclusive new product demos and tech innovations that will take your business to the next level.",[Ui]:"Watch On Demand",[Fi]:"Modern Accounting Summit",[qi]:"Hear from experts at Deloitte, EY, PwC, Klarity, Gappify, Pluralsight, Icertis, Genesys, and Zuora on the trends in accounting we see today and what is coming in the future!",[Hi]:"Watch On Demand",[Ki]:"Demystifying Consumption-Based Pricing",[Vi]:"Tune in to learn Macroeconomic and industry trends from Zuora and Boston Consulting Group's Data Analysis and to discuss latest trends in consumption.",[Qi]:"Watch now",[$o]:"Solutions",[Yi]:"Zuora+",[Ji]:"Your premium content hub for expert advice, education and entertainment.",[en]:"Watch now",[tn]:"Community Portal",[on]:"The Zuora Community is where Zuora users can ask questions, share their knowledge, scale in their expertise, and find others who use Zuora like they do.",[rn]:"Visit Community Portal",[an]:"Using Zuora as a force for good",[sn]:"See how we hold ourselves accountable to all of our stakeholders, including our ZEOs, customers, communities, and the planet through our Environmental, Social, and Governance efforts.",[ln]:"Learn about our corporate responsibility",[un]:"Zuora partners with Sovos to help global businesses meet e-invoicing mandates",[dn]:"In partnership with Sovos, Zuora now provides a pre-integrated, automated e-invoicing solution that works directly with its recurring billing.",[pn]:"Read about partnership",[mn]:"Overview",[gn]:"Zuora Dev Home",[wn]:"Get Started",[vn]:"API Reference",[bn]:"Quickstart API",[fn]:"A solution to most billing, payments, and platform integration needs offering a number of cross-cutting usability features.",[yn]:"v1 API",[kn]:"Zuora's original, 100% coverage, billing, payments, and platform API.",[zn]:"Zephr API",[xn]:"Zephr's dynamic paywall technology for building, testing, learning, and optimizing users' digital subscription journeys and driving personalized experiences.",[Sn]:"Other APIs",[In]:"Quickstart API, Zuora Revenue, and Collection APIs",[An]:"Fast track for integration",[En]:"\n    <p>Zuora offers two sets of APIs for Billing and our Platform, the v1 API and Quickstart.</p>\n    <br/><p>Zuora's v1 API gives access to all the features of our Zuora Billing, Payments and Platform. Zuora's Quickstart represents a simplified programmatic experience for common eCommerce use cases only. Quickstart, often referred to as ‘v2’, is NOT a replacement of our v1 APIs. If you are starting new development we recommend you use the v1 API for all your use cases. We no longer recommend Quickstart for new eCommerce development. We are not deprecating Quickstart, we will continue to fix bugs, but we will not accept enhancement requests for Quickstart. New Billing and Platform features will only have v1 APIs, and will not be supported by Quickstart.</p>",[Rn]:"Explore Quickstart APIs"},[Zn.FRENCH]:{[we]:"Accueil",[be]:"Connexion",[go]:"Sâ€™identifier",[fe]:"Parler Ã  un expert",[ye]:"Voir une dÃ©mo",[ao]:"Pourquoi Zuora",[so]:"Explorer",[ke]:"Journey to Usership",[ze]:"Un cadre avec des donnÃ©es, des conseils dâ€™experts et des outils qui vous aident Ã  naviguer sur le chemin du succÃ¨s en tant quâ€™entreprise dâ€™abonnement.",[xe]:"Subscribed Institute",[Se]:"Explorez nos ressources ciblÃ©es et rejoignez des leaders sectoriels pour des analyses fondÃ©es sur des donnÃ©es pertinentes, lâ€™adoption de meilleures pratiques, et des Ã©changes sur les tendances rÃ©centes dans le domaine des abonnements.",[Ie]:"AccÃ©lÃ©rateurs de Business Modernes",[Ae]:"Des leaders importants qui impulsent le changement et dÃ©finissent lâ€™entreprise centrÃ©e sur le client du futur.",[Ee]:"Nos clients",[Re]:"Plus de 1 000 entreprises font confiance Ã  la technologie de pointe et Ã  lâ€™expertise de Zuora pour libÃ©rer tout le potentiel de leur entreprise.",[_e]:"Partenaires",[Ne]:"Des paiements et des impÃ´ts Ã  la comptabilitÃ© et au-delÃ , nous avons Ã©tabli des partenariats solides pour chaque aspect de votre mise en Å“uvre.",[Ce]:"Ã€ propos de Zuora",[$e]:"De la gestion des abonnements Ã  la monÃ©tisation, nous aidons les entreprises innovantes dâ€™aujourdâ€™hui Ã  entretenir et Ã  rentabiliser les relations directes numÃ©riques.",[lo]:"En savoir plus",[co]:"Produits",[_o]:"NouveautÃ©s dans Zuora",[Pe]:"Zuora Billing",[Te]:"Concevez une tarification flexible et facturez pour des frais rÃ©currents, ponctuels et de consommation.",[Me]:"Zuora CPQ",[De]:"Zuora Revenue",[Ze]:"Automatisez la reconnaissance des revenus pour tout modÃ¨le dâ€™entreprise.",[Be]:"Zuora Platform",[je]:"Optimisez lâ€™agilitÃ© au sein de votre Ã©cosystÃ¨me technologique.",[Le]:"Zuora CPQ",[Oe]:"Une citation pour lâ€™ensemble du cycle de vie du client, des ventes additionnelles aux renouvellements.",[Ue]:"Connectez tout",[Fe]:"DÃ©ployez plus rapidement",[qe]:"Ã‰liminez le risque",[Ge]:"Comprenez immÃ©diatement",[He]:"Multipliez vos transactions",[Ke]:"Zuora Payments",[Ve]:"LibÃ©rez la croissance des revenus grÃ¢ce Ã  l'optimisation des paiements.",[We]:"Zuora Order-to-Revenue",[Qe]:"GÃ©rez tout le cycle de la commande au revenu sur une seule plateforme",[Ye]:"Zephr",[Je]:"Stimulez la conversion et la fidÃ©lisation tout au long du cycle de vie du client.",[Xe]:"Zephr pour les mÃ©dias",[et]:"Dynamic Offers",[tt]:"Personnalisation sur mesure pour chaque utilisateur.",[ot]:"Gestion des identitÃ©s et des accÃ¨s",[it]:"Paywall Intelligent",[nt]:"Gestion des abonnements dâ€™entreprise",[rt]:"StratÃ©gies de donnÃ©es first-party",[yo]:"Voir tous nos produits",[at]:"EcosystÃ¨me de partenaires Accelerate",[st]:"Lâ€™Ã©cosystÃ¨me de partenaires Zuora, un pilier clÃ© pour notre stratÃ©gie de croissance, offre diverses formes de partenariat.",[lt]:"Trouvez votre partenaire idÃ©al",[ct]:"Identifiez le partenaire Zuora adaptÃ© pour concrÃ©tiser vos initiatives.",[ut]:"Devenir un partenaire",[dt]:"Collaborez avec nous pour garantir la satisfaction et la fidÃ©litÃ© de nos clients communs.",[pt]:"Portail des partenaires",[Bo]:"DÃ©jÃ  un partenaire Zuora?",[ht]:"Explorez des informations exclusives et des ressources sur notre Portail Partenaire.",[mt]:"Le programme Zuora Accelerate vous ouvre la voie pour piloter et capitaliser sur la monÃ©tisation de nouveaux modÃ¨les Ã©conomiques, rÃ©pondant ainsi aux aspirations des clients dans lâ€™Ã¨re du numÃ©rique et de lâ€™abonnement.",[uo]:"Ressources",[gt]:"Ã‰tudes de cas",[wt]:"Blog",[vt]:"Initiatives commerciales",[bt]:"Comment lancer une nouvelle offre dâ€™abonnement",[ft]:"Comment actualiser votre stratÃ©gie de tarification",[yt]:"Comment adopter une tarification basÃ©e sur lâ€™utilisation",[kt]:"Comment adapter vos offres pour les marchÃ©s internationaux",[zt]:"Comment sâ€™Ã©tendre vers le haut de gamme ou vers le bas de gamme",[xt]:"Comment rÃ©duire le temps de clÃ´ture",[St]:"Comment exÃ©cuter une stratÃ©gie de cross-selling et dâ€™up-selling",[It]:"Comment minimiser le churn involontaire",[At]:"Voir tout",[Et]:"Livres blancs",[Rt]:"Ã‰vÃ©nements",[_t]:"Guides",[Nt]:"Webinaires",[Ct]:"Ebooks",[$t]:"Fiches produits",[Pt]:"Rapports sectoriels",[Tt]:"Subscribed",[po]:"Industrie",[Lt]:"Secteur industriel et IoT",[Ot]:"Software",[Mt]:"MÃ©dias et divertissement",[Dt]:"Zuora pour les startups",[ho]:"DÃ©couvrez les rÃ©cits qui redÃ©finissent le futur du commerce. Exit la propriÃ©tÃ©, place Ã  lâ€™usage.",[jo]:"Automatiser la reconnaissance des revenus",[Uo]:"StratÃ©gies de croissance des abonnÃ©s",[Fo]:"Optimiser les opÃ©rations de paiement",[qo]:"Facturation et paiements",[Go]:"Risque et conformitÃ©",[Ho]:"Tarification et conditionnement",[Ko]:"OpÃ©rations et informatique",[Vo]:"Zuora +",[Wo]:"Voir tout",[mo]:"Support",[Zt]:"Connecter + Apprendre",[no]:"Portail communautaire",[ro]:"Ã‰changez et partagez vos expÃ©riences avec dâ€™autres entreprises dâ€™abonnement et experts en finance et produits.",[Bt]:"Zuora University",[Ht]:"Formation spÃ©cialisÃ©e pour lâ€™implÃ©mentation",[jt]:"Programmes avancÃ©s et certifications dÃ©diÃ©s aux consultants, partenaires et Ã©quipes dâ€™implÃ©mentation.",[Kt]:"Programme de formation client",[Vt]:"Cours Ã  votre rythme, classes virtuelles et certifications pour les clients de Zuora et les utilisateurs finaux du produit.",[wo]:"Assistance produit Zuora",[Wt]:"Documentation produit",[Qt]:"IntÃ©grez les solutions Zuora pour une croissance dynamique de votre entreprise.",[Yt]:"Centre des dÃ©veloppeurs",[Jt]:"Ressources et outils spÃ©cialisÃ©s pour faciliter votre intÃ©gration technique.",[Xt]:"API pour les dÃ©veloppeurs",[eo]:"Ã‰tat du systÃ¨me",[to]:"Notes de version",[oo]:"Centre de support",[io]:"Maintenance",[No]:"Posez vos questions",[Co]:"ResponsabilitÃ© Sociale dâ€™entreprise",[Po]:"Espace dâ€™apprentissage interactif.",[To]:"Calendrier de maintenance",[Lo]:"DerniÃ¨res versions",[Oo]:"Les bases de Zuora",[Mo]:"API de dÃ©marrage rapide, API de revenus Zuora et API de collecte",[Do]:"API Billing",[Zo]:"Zuora SDKs",[Ro]:"Entreprise",[ko]:"Ã‰quipe",[zo]:"ActualitÃ©s",[xo]:"RÃ©compenses et distinctions",[So]:"Bureaux Internationaux",[Io]:"CarriÃ¨res",[Ao]:"Changer de rÃ©gion",[Eo]:"Le PDG de Zuora, Tien Tzuo, expert de la Subscription EconomyÂ®, analyse les tendances clÃ©s de la semaine.",[vo]:"Mentions lÃ©gales.",[bo]:"DÃ©claration de confidentialitÃ©",[fo]:"Conditions gÃ©nÃ©rales",[Qo]:"Cas d'utilisation",[Yo]:"MonÃ©tiser les offres basÃ©es sur l'usage",[Jo]:"Transformez votre facturation grÃ¢ce Ã  l'IA",[Xo]:"AcquÃ©rir et fidÃ©liser vos abonnÃ©s",[ei]:"Lancer un Paywall IA",[ti]:"Dynamiser vos offres et expÃ©riences dans les mÃ©dias",[oi]:"DÃ©velopper votre reconnaissance de revenus",[ii]:"Favoriser la croissance des revenus",[ni]:"Viser le haut de marchÃ©",[ri]:"Recharge des VÃ©hicules Ã‰lectriques",[ai]:"Secteurs",[Ii]:"Saas",[li]:"Gestion des devis (CPQ)",[ci]:"Gestion des commandes",[ui]:"Mesure de la consommation",[di]:"Facturation et conformitÃ© fiscale",[pi]:"Paiements",[hi]:"API et Connecteurs",[mi]:"ExtensibilitÃ©",[gi]:"Couverture de Paiement et Routage de Passerelle",[wi]:"Lutte contre la Fraude et Gestion des DÃ©faillances de Paiement",[vi]:"Paywall IA",[bi]:"StratÃ©gies de donnÃ©es First-Party",[fi]:"Personnalisation spÃ©cifique Ã  l'utilisateur",[yi]:"Studio d'extensions",[ki]:"Analyses",[zi]:"SÃ©curitÃ©",[xi]:"Integration Hub",[Si]:"Centre de commande administratif",[Ai]:"Par Type",[Ei]:"VidÃ©os",[Ri]:"Tendences de secteur (Subscribed)",[_i]:"Rapports",[Ni]:"Podcasts",[Ci]:"ThÃ¨me",[$i]:"Zuora Collections",[Pi]:"Encaissement propulsÃ© par l'IA conÃ§u pour protÃ©ger les relations client",[Ti]:"Lexique financier",[Li]:"Subscription Economy Indexâ„¢",[Oi]:"La derniÃ¨re Ã©dition de lâ€™Indice du Subscription Economy Indexâ„¢ montre que les entreprises dâ€™abonnement ont augmentÃ© 4,6 fois plus rapidement que le S&P 500 au cours de la derniÃ¨re dÃ©cennie, rÃ©sistant au-delÃ  de la poussÃ©e due Ã  la pandÃ©mie.",[Di]:"TÃ©lÃ©charger le rapport",[Zi]:"Subscribed Connect Ã  la demande",[Bi]:"Obtenez un aperÃ§u exclusif des nouvelles dÃ©monstrations de produits et des innovations technologiques qui propulseront votre entreprise vers le niveau supÃ©rieur.",[Ui]:"Regarder Ã  la demande",[Fi]:"ConfÃ©rence sur les tendances modernes de la comptabilitÃ©",[qi]:"Ã‰coutez les experts de Deloitte, EY, PwC, Klarity, Gappify, Pluralsight, Icertis, Genesys et Zuora sur les tendances en comptabilitÃ© que nous observons aujourdâ€™hui et ce qui nous attend dans le futur!",[Hi]:"Regarder Ã  la demande",[Ki]:"Comprendre la tarification basÃ©e sur la consommation",[Vi]:"Plongez dans l'analyse des tendances macroÃ©conomiques et industrielles dÃ©rivÃ©es des donnÃ©es de Zuora et du Boston Consulting Group, et engagez-vous dans des discussions Ã©clairÃ©es sur les Ã©volutions rÃ©centes en matiÃ¨re de consommation.",[Qi]:"Regardez maintenant",[$o]:"Solutions",[Yi]:"Zuora+",[Ji]:"Votre hub de contenu premium pour des conseils dâ€™experts, de lâ€™Ã©ducation et du divertissement.",[en]:"Regardez maintenant",[tn]:"Portail communautaire",[on]:"Rejoignez la communautÃ© Zuora pour poser vos questions, Ã©changer des connaissances, approfondir votre expertise et connecter avec dâ€™autres utilisateurs de Zuora.",[rn]:"Explorez le Portail Communautaire",[an]:"Zuora : un engagement pour un impact positif",[sn]:"Apprenez en plus sur notre engagement global envers nos parties prenantes - employÃ©s, clients, communautÃ©s et la planÃ¨te - Ã  travers nos initiatives environnementales, sociales et de gouvernance.",[ln]:"En savoir plus sur notre responsabilitÃ© dâ€™entreprise",[un]:"Zuora sâ€™associe Ã  Sovos pour aider les entreprises mondiales Ã  rÃ©pondre aux exigences de facturation Ã©lectronique",[dn]:"GrÃ¢ce Ã  notre collaboration avec Sovos, dÃ©couvrez notre solution innovante de facturation Ã©lectronique, entiÃ¨rement automatisÃ©e et intÃ©grÃ©e, conÃ§ue pour sâ€™harmoniser avec nos systÃ¨mes de facturation rÃ©currente.",[pn]:"DÃ©tails sur le partenariat Zuora-Sovos",[mn]:"Vue d'ensemble",[gn]:"Accueil des dÃ©veloppeurs Zuora",[wn]:"Commencer",[vn]:"RÃ©fÃ©rence de l'API",[bn]:"DÃ©marrage rapide",[fn]:"Une solution complÃ¨te pour la plupart des besoins en matiÃ¨re de facturation, de paiements et d'intÃ©gration de plateforme, offrant un certain nombre de fonctionnalitÃ©s d'utilisabilitÃ© transversales.",[yn]:"v1 API",[kn]:"L'API originale de Zuora, offrant une couverture Ã  100 % pour la facturation, les paiements et la plateforme.",[zn]:"Zephr API",[xn]:"La technologie dynamique de mur de paiement de Zephr pour construire, tester, apprendre et optimiser les parcours d'abonnement numÃ©rique des utilisateurs et crÃ©er des expÃ©riences personnalisÃ©es.",[Sn]:"Autre APIs",[In]:"API de dÃ©marrage rapide, API de revenus Zuora et API de collecte",[An]:"Parcours rapide pour l'intÃ©gration",[En]:"\n    <p>Zuora propose deux ensembles d'API pour la facturation et notre plateforme, l'API v1 et Quickstart.</p>\n    <br/><p>L'API v1 de Zuora donne accÃ¨s Ã  toutes les fonctionnalitÃ©s de notre plateforme de facturation, de paiement et de Zuora. Le Quickstart de Zuora reprÃ©sente une expÃ©rience programmatique simplifiÃ©e destinÃ©e uniquement aux cas d'utilisation courants du commerce Ã©lectronique. Quickstart, souvent appelÃ© Â«Â v2Â Â», ne remplace PAS nos API v1. Si vous dÃ©marrez un nouveau dÃ©veloppement, nous vous recommandons d'utiliser l'API v1 pour tous vos cas d'utilisation. Nous ne recommandons plus Quickstart pour le nouveau dÃ©veloppement de commerce Ã©lectronique. Nous ne dÃ©prÃ©cions pas Quickstart, nous continuerons Ã  corriger les bugs, mais nous n'accepterons pas les demandes d'amÃ©lioration pour Quickstart. Les nouvelles fonctionnalitÃ©s de facturation et de plateforme n'auront que des API v1 et ne seront pas prises en charge par Quickstart.</p>",[Rn]:"Explorez les API de dÃ©marrage rapide"},[Zn.JAPANESSE]:{[we]:"å®¶",[be]:"ãƒ­ã‚°ã‚¤ãƒ³",[go]:"ãƒ­ã‚°ã‚¤ãƒ³",[fe]:"ãŠå•åˆã›",[ye]:"ãƒ‡ãƒ¢ã‚’è¦‹ã‚‹",[ao]:"é¸ã°ã‚Œã‚‹ç†ç”±",[so]:"æŽ¢æ¤œã™ã‚‹",[ke]:"ãƒ¦ãƒ¼ã‚¶ãƒ¼ã‚·ãƒƒãƒ—ã¸ã®æ—…",[ze]:"ãƒ‡ãƒ¼ã‚¿ã€å°‚é–€å®¶ã®æŒ‡å°Žã€ãƒ„ãƒ¼ãƒ«ã‚’å‚™ãˆãŸãƒ•ãƒ¬ãƒ¼ãƒ ãƒ¯ãƒ¼ã‚¯ãŒã€ã‚µãƒ–ã‚¹ã‚¯ãƒªãƒ—ã‚·ãƒ§ãƒ³ãƒ“ã‚¸ãƒã‚¹ã¨ã—ã¦æˆåŠŸã¸ã®é“ç­‹ã‚’ç¤ºã—ã¾ã™",[xe]:"åŠ å…¥ã—ãŸç ”ç©¶æ‰€",[Se]:"ãƒ‡ãƒ¼ã‚¿ã«åŸºã¥ãæ´žå¯Ÿã‚„ãƒ™ã‚¹ãƒˆãƒ—ãƒ©ã‚¯ãƒ†ã‚£ã‚¹ã€æœ€æ–°ã®å®šæœŸè³¼èª­ãƒˆãƒ¬ãƒ³ãƒ‰ã«é–¢ã™ã‚‹è­°è«–ãªã©ã€ä»–ã®ã‚¨ã‚°ã‚¼ã‚¯ãƒ†ã‚£ãƒ–ãƒªãƒ¼ãƒ€ãƒ¼ã¨ä¸€ç·’ã«ãƒªã‚½ãƒ¼ã‚¹ã‚’æŽ¢æ±‚ã—ã¾ã—ã‚‡ã†ã€‚",[Ie]:"ãƒ¢ãƒ€ãƒ³ãƒ“ã‚¸ãƒã‚¹ã‚¢ã‚¯ã‚»ãƒ©ãƒ¬ãƒ¼ã‚¿ãƒ¼",[Ae]:"å¤‰é©ã‚’æŽ¨é€²ã—ã€å°†æ¥ã®é¡§å®¢ä¸­å¿ƒãƒ“ã‚¸ãƒã‚¹ã‚’å®šç¾©ã™ã‚‹é‡è¦ãªãƒªãƒ¼ãƒ€ãƒ¼é”",[Ee]:"ç§ãŸã¡ã®é¡§å®¢",[Re]:"1,000ä»¥ä¸Šã®ä¼æ¥­ãŒã€Zuoraã®æ¥­ç•Œã‚’ãƒªãƒ¼ãƒ‰ã™ã‚‹ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã¨å°‚é–€çŸ¥è­˜ã‚’ä¿¡é ¼ã—ã€è‡ªç¤¾ãƒ“ã‚¸ãƒã‚¹ã®å¯èƒ½æ€§ã‚’æœ€å¤§é™ã«å¼•ãå‡ºã—ã¦ã„ã¾ã™ã€‚",[_e]:"ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼",[Ne]:"æ”¯æ‰•ã„ã‚„ç¨Žé‡‘ã‹ã‚‰ä¼šè¨ˆã€ã•ã‚‰ã«å…ˆã¸ã¨ã€å®Ÿè£…ã®ã‚ã‚‰ã‚†ã‚‹å´é¢ã«å¼·å›ºãªãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã‚·ãƒƒãƒ—ã‚’ç¯‰ã„ã¦ãã¾ã—ãŸã€‚",[Ce]:"ä¼šç¤¾æ¦‚è¦ãƒ»ã‚¢ã‚¯ã‚»ã‚¹",[$e]:"å®šæœŸè³¼èª­ç®¡ç†ã‹ã‚‰åŽç›ŠåŒ–ã¾ã§ã€ç§ãŸã¡ã¯ä»Šæ—¥ã®é©æ–°çš„ãªä¼æ¥­ãŒç›´æŽ¥ã®ãƒ‡ã‚¸ã‚¿ãƒ«é–¢ä¿‚ã‚’è‚²ã¿ã€åŽç›ŠåŒ–ã™ã‚‹ãŠæ‰‹ä¼ã„ã‚’ã—ã¦ã„ã¾ã™ã€‚",[lo]:"è©³ç´°ã‚’å­¦ã¶",[co]:"Zuoraå…¨è£½å“",[_o]:"æœ€æ–°ãƒ©ã‚¤ãƒ³ãƒŠãƒƒãƒ—",[Pe]:"Zuora Billing",[Te]:"æŸ”è»Ÿãªä¾¡æ ¼è¨­å®šã‚’è¨­è¨ˆã—ã€å…¨ã¦ã®ä¾¡æ ¼ãƒ¢ãƒ‡ãƒ«ã«å¯¾å¿œã—ãŸè«‹æ±‚ã‚’å®Ÿç¾",[Me]:"Zuora CPQ - è¦‹ç©ã‚Š",[De]:"Zuora Revenue - åŽç›Šèªè­˜",[Ze]:"ã©ã‚“ãªãƒ“ã‚¸ãƒã‚¹ãƒ¢ãƒ‡ãƒ«ã«ã‚‚åŽç›Šèªè­˜ã‚’è‡ªå‹•åŒ–ã—ã¾ã™ã€‚",[Be]:"Zuoraãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ",[je]:"æŠ€è¡“ã‚¨ã‚³ã‚·ã‚¹ãƒ†ãƒ å…¨ä½“ã§ã®ä¿Šæ•æ€§ã‚’æœ€å¤§åŒ–ã—ã¾ã™ã€‚",[Le]:"Zuora CPQ - è¦‹ç©ã‚Š",[Oe]:"é¡§å®¢ãƒ©ã‚¤ãƒ•ã‚µã‚¤ã‚¯ãƒ«å…¨ä½“ã«å¯¾å¿œã—ã€ã‚¢ãƒƒãƒ—ã‚»ãƒ«ã‹ã‚‰æ›´æ–°ã¾ã§ã®è¦‹ç©ã‚‚ã‚Šã‚’æä¾›ã—ã¾ã™ã€‚",[Ue]:"ã™ã¹ã¦ã‚’ã¤ãªã’ã‚‹",[Fe]:"ã‚ˆã‚Šé€Ÿãå±•é–‹ã™ã‚‹",[qe]:"ãƒªã‚¹ã‚¯ã‚’å–ã‚Šé™¤ã",[Ge]:"ä»Šã‚’çŸ¥ã‚‹",[He]:"ã‚‚ã£ã¨å–å¼•ã™ã‚‹",[Ke]:"Zuora ãƒšã‚¤ãƒ¡ãƒ³ãƒˆ",[Ve]:"æ±ºæ¸ˆæœ€é©åŒ–ã§åŽç›Šæˆé•·ã‚’è§£ãæ”¾ã¤",[We]:"Zuora å—æ³¨ã‹ã‚‰åŽç›ŠåŒ–ã¾ã§",[Qe]:"One platformã§å®Œå…¨ãªå—æ³¨ã‹ã‚‰åŽç›Šã¾ã§ã®ã‚µã‚¤ã‚¯ãƒ«ã‚’æŒ‡æ®ã™ã‚‹ã€‚",[Ye]:"Zephr",[Je]:"é¡§å®¢ãƒ©ã‚¤ãƒ•ã‚µã‚¤ã‚¯ãƒ«å…¨ä½“ã§ã®å¤‰æ›ã¨ç¶­æŒã‚’ä¿ƒé€²ã™ã‚‹ã€‚",[Xe]:"Zephr ãƒ•ã‚©ãƒ¼ ãƒ¡ãƒ‡ã‚£ã‚¢",[et]:"ãƒ€ã‚¤ãƒŠãƒŸãƒƒã‚¯ã‚ªãƒ•ã‚¡ãƒ¼",[tt]:"ãƒ¦ãƒ¼ã‚¶ãƒ¼å›ºæœ‰ã®å€‹åˆ¥åŒ–",[ot]:"ã‚¢ã‚¤ãƒ‡ãƒ³ãƒ†ã‚£ãƒ†ã‚£ï¼†ã‚¢ã‚¯ã‚»ã‚¹ç®¡ç†",[it]:"ã‚¤ãƒ³ãƒ†ãƒªã‚¸ã‚§ãƒ³ãƒˆãƒšã‚¤ã‚¦ã‚©ãƒ¼ãƒ«",[nt]:"ä¼æ¥­å‘ã‘å®šæœŸè³¼èª­ç®¡ç†",[rt]:"ãƒ•ã‚¡ãƒ¼ã‚¹ãƒˆãƒ‘ãƒ¼ãƒ†ã‚£ãƒ‡ãƒ¼ã‚¿æˆ¦ç•¥",[yo]:"ã™ã¹ã¦ã®è£½å“ã‚’è¡¨ç¤º",[at]:"ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã‚¨ã‚³ã‚·ã‚¹ãƒ†ãƒ ã‚’åŠ é€Ÿã™ã‚‹",[st]:"å½“ç¤¾ã®ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã‚¨ã‚³ã‚·ã‚¹ãƒ†ãƒ ã¯Zuoraã®æˆé•·æˆ¦ç•¥ã«ãŠã‘ã‚‹éµã§ã‚ã‚Šã€ã•ã¾ã–ã¾ãªãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã‚·ãƒƒãƒ—ã‚¿ã‚¤ãƒ—ã‚’æä¾›ã—ã¦ã„ã¾ã™ã€‚",[lt]:"ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã‚’æŽ¢ã™",[ct]:"ã‚ãªãŸã®å–ã‚Šçµ„ã¿ã®ãƒ‹ãƒ¼ã‚ºã«å¯¾å¿œã§ãã‚‹Zuoraãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã‚’è¦‹ã¤ã‘ã¦ãã ã•ã„ã€‚",[ut]:"ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã«ãªã‚‹",[dt]:"ç§ãŸã¡ã¯å…±æœ‰ã®é¡§å®¢ãŒæº€è¶³ã—ã€å¿ èª å¿ƒã‚’æŒã¤ã‚ˆã†ãŠæ‰‹ä¼ã„ã—ã¾ã™ã€‚",[pt]:"ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ãƒãƒ¼ã‚¿ãƒ«",[Bo]:"Zuoraã®ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã§ã™ã‹ï¼Ÿ",[ht]:"ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ãƒãƒ¼ã‚¿ãƒ«ã§ã‚¤ãƒ³ã‚µã‚¤ãƒ€ãƒ¼æƒ…å ±ã‚„ãƒªã‚½ãƒ¼ã‚¹ã«ã‚¢ã‚¯ã‚»ã‚¹ã—ã¾ã—ã‚‡ã†ã€‚",[mt]:"å½“ç¤¾ã®Zuora Accelerate ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ãƒ—ãƒ­ã‚°ãƒ©ãƒ ã§ã¯ã€ãŠå®¢æ§˜ãŒè‡ªç¤¾ã®æœ€çµ‚é¡§å®¢ã¨ãƒ‡ã‚¸ã‚¿ãƒ«å®šæœŸè³¼èª­ãŠã‚ˆã³æ¶ˆè²»é–¢ä¿‚ã‚’æ§‹ç¯‰ã™ã‚‹éš›ã€æ–°ã—ã„ãƒ“ã‚¸ãƒã‚¹ãƒ¢ãƒ‡ãƒ«ã®åŽç›ŠåŒ–ã‚’ä¸»å°Žã—ã€æ‰ãˆã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚",[uo]:"ãƒªã‚½ãƒ¼ã‚¹",[gt]:"ã‚±ãƒ¼ã‚¹ã‚¹ã‚¿ãƒ‡ã‚£",[wt]:"ãƒ–ãƒ­ã‚°",[vt]:"ãƒ“ã‚¸ãƒã‚¹ã‚¤ãƒ‹ã‚·ã‚¢ãƒãƒ–",[bt]:"æ–°ã—ã„å®šæœŸè³¼èª­ã‚ªãƒ•ã‚¡ãƒªãƒ³ã‚°ã®å±•é–‹æ–¹æ³•",[ft]:"ä¾¡æ ¼æˆ¦ç•¥ã‚’ãƒªãƒ•ãƒ¬ãƒƒã‚·ãƒ¥ã™ã‚‹æ–¹æ³•",[yt]:"ä½¿ç”¨é‡ãƒ™ãƒ¼ã‚¹ã®ä¾¡æ ¼è¨­å®šã‚’æŽ¡ç”¨ã™ã‚‹æ–¹æ³•",[kt]:"å›½éš›å¸‚å ´å‘ã‘ã«æä¾›ã‚’èª¿æ•´ã™ã‚‹æ–¹æ³•",[zt]:"ä¸Šæµå¸‚å ´ã¾ãŸã¯ä¸‹æµå¸‚å ´ã‚’æ‹¡å¤§ã™ã‚‹æ–¹æ³•",[xt]:"ã‚¯ãƒ­ãƒ¼ã‚ºã¾ã§ã®æ™‚é–“ã‚’çŸ­ç¸®ã™ã‚‹æ–¹æ³•",[St]:"ã‚¯ãƒ­ã‚¹ã‚»ãƒ«ãŠã‚ˆã³ã‚¢ãƒƒãƒ—ã‚»ãƒ«æˆ¦ç•¥ã®å®Ÿè¡Œæ–¹æ³•",[It]:"è‡ªç™ºçš„ãªé›¢åã‚’æœ€å°é™ã«æŠ‘ãˆã‚‹æ–¹æ³•",[At]:"ã™ã¹ã¦ã‚’è¡¨ç¤º",[Et]:"ãƒ›ãƒ¯ã‚¤ãƒˆãƒšãƒ¼ãƒ‘ãƒ¼",[Rt]:"ã‚¤ãƒ™ãƒ³ãƒˆ/ ã‚¦ã‚§ãƒ“ãƒŠãƒ¼",[_t]:"è³‡æ–™ä¸€è¦§",[Nt]:"ã‚¦ã‚§ãƒ“ãƒŠãƒ¼",[Ct]:"é›»å­æ›¸ç±",[$t]:"è£½å“ãƒ‡ãƒ¼ã‚¿ã‚·ãƒ¼ãƒˆ",[Pt]:"æ¥­ç•Œãƒ¬ãƒãƒ¼ãƒˆ",[Tt]:"Subscribedï¼ˆã‚µãƒ–ã‚¹ã‚¯ãƒªãƒ—ã‚·ãƒ§ãƒ³æœ€æ–°æƒ…å ±ï¼‰",[po]:"æ¥­ç•Œ",[Lt]:"è£½é€ æ¥­ï¼†IOT",[Ot]:"ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢",[Mt]:"ãƒ¡ãƒ‡ã‚£ã‚¢åŠã³ã‚¨ãƒ³ã‚¿ãƒ¼ãƒ†ã‚¤ãƒ¡ãƒ³ãƒˆæ¥­ç•Œ",[Dt]:"ã‚¹ã‚¿ãƒ¼ãƒˆã‚¢ãƒƒãƒ—å‘ã‘Zuora",[ho]:"ãƒ“ã‚¸ãƒã‚¹ã®æœªæ¥ã‚’å½¢ä½œã‚‹ã‚¹ãƒˆãƒ¼ãƒªãƒ¼ã€‚æ‰€æœ‰æ¨©ã•ã‚ˆã†ãªã‚‰ã€‚ãƒ¦ãƒ¼ã‚¶ãƒ¼ã‚·ãƒƒãƒ—ã€ã“ã‚“ã«ã¡ã¯ã€‚",[jo]:"è‡ªå‹•ã§åŽç›Šèªè­˜ã‚’è¡Œã†",[Uo]:"åŠ å…¥è€…å¢—åŠ ã®æˆ¦ç•¥",[Fo]:"æ”¯æ‰•ã„æ¥­å‹™ã‚’æœ€é©åŒ–ã™ã‚‹",[qo]:"è«‹æ±‚ã¨æ”¯æ‰•ã„",[Go]:"ãƒªã‚¹ã‚¯ã¨ã‚³ãƒ³ãƒ—ãƒ©ã‚¤ã‚¢ãƒ³ã‚¹",[Ho]:"ãƒ—ãƒ©ã‚¤ã‚·ãƒ³ã‚°ãƒ»ãƒ‘ãƒƒã‚±ãƒ¼ã‚¸ãƒ³ã‚°",[Ko]:"é‹ç”¨ã¨IT",[Vo]:"Zuora +",[Wo]:"ã™ã¹ã¦è¡¨ç¤º",[mo]:"ã‚µãƒãƒ¼ãƒˆ",[Zt]:"æŽ¥ç¶šï¼‹å­¦ç¿’",[no]:"ã‚³ãƒŸãƒ¥ãƒ‹ãƒ†ã‚£ãƒãƒ¼ã‚¿ãƒ«",[ro]:"ä»–ã®å®šæœŸè³¼èª­ãƒ“ã‚¸ãƒã‚¹ã€è²¡å‹™ã€è£½å“ãƒªãƒ¼ãƒ€ãƒ¼ã¨ã¤ãªãŒã‚Šã€æƒ…å ±å…±æœ‰ã—ã¾ã—ã‚‡ã†ã€‚",[Bt]:"Zuoraå¤§å­¦",[Ht]:"å®Ÿè£…è€…å‘ã‘ãƒˆãƒ¬ãƒ¼ãƒ‹ãƒ³ã‚°",[jt]:"ã‚³ãƒ³ã‚µãƒ«ã‚¿ãƒ³ãƒˆã€ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã€å®Ÿè£…ãƒãƒ¼ãƒ å‘ã‘ã®é«˜åº¦ãªã‚³ãƒ¼ã‚¹ãƒ¯ãƒ¼ã‚¯ã¨èªå®šè¨¼",[Kt]:"é¡§å®¢å‘ã‘ãƒˆãƒ¬ãƒ¼ãƒ‹ãƒ³ã‚°",[Vt]:"Zuoraã®é¡§å®¢ãŠã‚ˆã³è£½å“ã‚¨ãƒ³ãƒ‰ãƒ¦ãƒ¼ã‚¶ãƒ¼å‘ã‘ã®è‡ªç¿’ã‚³ãƒ¼ã‚¹ã€ä»®æƒ³ã‚¯ãƒ©ã‚¹ã€ãŠã‚ˆã³èªå®šè¨¼",[wo]:"è£½å“ã®ãƒ˜ãƒ«ãƒ—",[Wt]:"è£½å“ãƒ‰ã‚­ãƒ¥ãƒ¡ãƒ³ãƒˆ",[Qt]:"ãƒ“ã‚¸ãƒã‚¹ã‚’æˆé•·ã•ã›ã‚‹ãŸã‚ã«Zuoraã®è£½å“ã‚’çµ±åˆã—ã¾ã—ã‚‡ã†ã€‚",[Yt]:"é–‹ç™ºè€…ã‚»ãƒ³ã‚¿ãƒ¼",[Jt]:"æŠ€è¡“çš„ãªçµ±åˆã‚’ã‚µãƒãƒ¼ãƒˆã™ã‚‹é–‹ç™ºè€…å‘ã‘ã®æ–‡æ›¸ã¨ãƒ„ãƒ¼ãƒ«",[Xt]:"é–‹ç™ºè€…API",[eo]:"ã‚·ã‚¹ãƒ†ãƒ ã‚¹ãƒ†ãƒ¼ã‚¿ã‚¹",[to]:"ãƒªãƒªãƒ¼ã‚¹ãƒŽãƒ¼ãƒˆ",[oo]:"ã‚µãƒãƒ¼ãƒˆã‚»ãƒ³ã‚¿ãƒ¼",[io]:"ãƒ¡ãƒ³ãƒ†ãƒŠãƒ³ã‚¹",[No]:"è³ªå•ã™ã‚‹",[Co]:"ä¼æ¥­ã®è²¬ä»»",[Po]:"å­¦ç¿’è€…ãƒ©ã‚¦ãƒ³ã‚¸",[To]:"ãƒ¡ãƒ³ãƒ†ãƒŠãƒ³ã‚¹ã‚¹ã‚±ã‚¸ãƒ¥ãƒ¼ãƒ«",[Lo]:"æœ€æ–°ãƒªãƒªãƒ¼ã‚¹",[Oo]:"Zuoraã®åŸºæœ¬",[Mo]:"ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆ APIã€Zuora Revenueã€ãŠã‚ˆã³ Collection API",[Do]:"è«‹æ±‚API",[Zo]:"Zuora SDKs",[Ro]:"ä¼šç¤¾",[ko]:"ãƒãƒ¼ãƒ ",[zo]:"ãƒ‹ãƒ¥ãƒ¼ã‚¹ï¼†ãƒ—ãƒ¬ã‚¹ãƒªãƒªãƒ¼ã‚¹",[xo]:"å—è³ž",[So]:"ä¸–ç•Œå„å›½ã®ã‚ªãƒ•ã‚£ã‚¹",[Io]:"ã‚­ãƒ£ãƒªã‚¢",[Ao]:"å›½ã¾ãŸã¯åœ°åŸŸã‚’é¸æŠž",[Eo]:"ã‚µãƒ–ã‚¹ã‚¯ãƒªãƒ—ã‚·ãƒ§ãƒ³é–¢é€£æœ€æ–°ãƒ‹ãƒ¥ãƒ¼ã‚¹ã‚’é…ä¿¡ï¼ˆè‹±èªžï¼‰",[vo]:"æ³•çš„",[bo]:"ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼",[fo]:"ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆåˆ©ç”¨è¦ç´„",[Li]:"ã‚µãƒ–ã‚¹ã‚¯ãƒªãƒ—ã‚·ãƒ§ãƒ³ã‚¨ã‚³ãƒŽãƒŸãƒ¼æŒ‡æ•°â„¢",[Oi]:"Subscription Economy Indexã®æœ€æ–°ç‰ˆã«ã‚ˆã‚‹ã¨ã€éŽåŽ»10å¹´é–“ã§ã€ã‚µãƒ–ã‚¹ã‚¯ãƒªãƒ—ã‚·ãƒ§ãƒ³ãƒ“ã‚¸ãƒã‚¹ã¯ãƒ‘ãƒ³ãƒ‡ãƒŸãƒƒã‚¯ã«ã‚ˆã‚‹æ€¥å¢—ã‚’è¶…ãˆã€S&P500ã‚ˆã‚Šã‚‚4.6å€é€Ÿãæˆé•·ã—ã¾ã—ãŸã€‚",[Di]:"ãƒ¬ãƒãƒ¼ãƒˆã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰",[Zi]:"Subscribed Connect On Demand",[Bi]:"ç‹¬å çš„ãªæ–°è£½å“ã®ãƒ‡ãƒ¢ã‚„ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã®é©æ–°ã‚’å…ˆå–ã‚Šã—ã¦ã€ãƒ“ã‚¸ãƒã‚¹ã‚’æ¬¡ã®ãƒ¬ãƒ™ãƒ«ã«é€²ã‚ã¾ã—ã‚‡ã†ã€‚",[Ui]:"ã‚ªãƒ³ãƒ‡ãƒžãƒ³ãƒ‰ã§è¦‹ã‚‹",[Fi]:"ãƒ¢ãƒ€ãƒ³ä¼šè¨ˆã‚µãƒŸãƒƒãƒˆ",[qi]:"ãƒ‡ãƒ­ã‚¤ãƒˆã€EYã€PwCã€Klarityã€Gappifyã€Pluralsightã€Icertisã€Genesysã€ãã—ã¦Zuoraã®å°‚é–€å®¶ã‹ã‚‰ã€ä»Šæ—¥è¦‹ã¦ã„ã‚‹ä¼šè¨ˆã®ãƒˆãƒ¬ãƒ³ãƒ‰ã‚„å°†æ¥ã®å‹•å‘ã«ã¤ã„ã¦ã®æƒ…å ±ã‚’ãŠèžããã ã•ã„ï¼",[Hi]:"ã‚ªãƒ³ãƒ‡ãƒžãƒ³ãƒ‰ã§è¦‹ã‚‹",[Ki]:"æ¶ˆè²»ãƒ™ãƒ¼ã‚¹ã®ä¾¡æ ¼è¨­å®šã®è§£èª¬",[Vi]:"Zuoraã¨ãƒœã‚¹ãƒˆãƒ³ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã‚°ãƒ«ãƒ¼ãƒ—ã®ãƒ‡ãƒ¼ã‚¿åˆ†æžã‹ã‚‰ãƒžã‚¯ãƒ­çµŒæ¸ˆãŠã‚ˆã³æ¥­ç•Œã®ãƒˆãƒ¬ãƒ³ãƒ‰ã‚’å­¦ã³ã€æ¶ˆè²»ã®æœ€æ–°å‹•å‘ã«ã¤ã„ã¦è©±ã—åˆã†ãŸã‚ã«ã”è¦§ãã ã•ã„ã€‚",[Qi]:"ä»Šã™ãè¦‹ã‚‹",[$o]:"èª²é¡Œã¨ã‚½ãƒªãƒ¥ãƒ¼ã‚·ãƒ§ãƒ³",[Yi]:"Zuora+",[Ji]:"å°‚é–€å®¶ã®ã‚¢ãƒ‰ãƒã‚¤ã‚¹ã€æ•™è‚²ã€ã‚¨ãƒ³ã‚¿ãƒ¼ãƒ†ã‚¤ãƒ³ãƒ¡ãƒ³ãƒˆã‚’æä¾›ã™ã‚‹ãƒ—ãƒ¬ãƒŸã‚¢ãƒ ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ãƒãƒ–ã§ã™ã€‚",[en]:"ä»Šã™ãè¦‹ã‚‹",[tn]:"ã‚³ãƒŸãƒ¥ãƒ‹ãƒ†ã‚£ãƒãƒ¼ã‚¿ãƒ«",[on]:"Zuoraã‚³ãƒŸãƒ¥ãƒ‹ãƒ†ã‚£ã¯ã€Zuoraãƒ¦ãƒ¼ã‚¶ãƒ¼ãŒè³ªå•ã‚’ã—ãŸã‚Šã€çŸ¥è­˜ã‚’å…±æœ‰ã—ãŸã‚Šã€è‡ªåˆ†ã®å°‚é–€çŸ¥è­˜ã‚’æ‹¡å¤§ã—ãŸã‚Šã€ä»–ã®Zuoraãƒ¦ãƒ¼ã‚¶ãƒ¼ã¨ã¤ãªãŒã‚‹å ´æ‰€ã§ã™ã€‚",[rn]:"ã‚³ãƒŸãƒ¥ãƒ‹ãƒ†ã‚£ãƒãƒ¼ã‚¿ãƒ«ã‚’è¨ªå•ã™ã‚‹",[an]:"Zuoraã‚’è‰¯ãåŠ›ã¨ã—ã¦åˆ©ç”¨ã™ã‚‹",[sn]:"ç§ãŸã¡ã®ç’°å¢ƒã€ç¤¾ä¼šã€ã‚¬ãƒãƒŠãƒ³ã‚¹ã®å–ã‚Šçµ„ã¿ã‚’é€šã˜ã¦ã€ZEOï¼ˆZuora Employee and Othersã®ç•¥ï¼‰ã€é¡§å®¢ã€ã‚³ãƒŸãƒ¥ãƒ‹ãƒ†ã‚£ã€ãã—ã¦åœ°çƒã«å¯¾ã—ã¦ã€ã©ã®ã‚ˆã†ã«è²¬ä»»ã‚’æžœãŸã—ã¦ã„ã‚‹ã‹ã‚’ã”è¦§ãã ã•ã„ã€‚",[ln]:"å½“ç¤¾ã®ä¼æ¥­è²¬ä»»ã«ã¤ã„ã¦å­¦ã¶",[un]:"Zuoraã¯Sovosã¨ææºã—ã€ä¸–ç•Œã®ãƒ“ã‚¸ãƒã‚¹ãŒé›»å­è«‹æ±‚ã®å‘½ä»¤ã‚’æº€ãŸã™ã®ã‚’æ”¯æ´ã—ã¾ã™",[dn]:"Zuoraã¯Sovosã¨ã®ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã‚·ãƒƒãƒ—ã«ã‚ˆã‚Šã€äº‹å‰çµ±åˆã•ã‚ŒãŸè‡ªå‹•åŒ–ã•ã‚ŒãŸé›»å­è«‹æ±‚ã‚½ãƒªãƒ¥ãƒ¼ã‚·ãƒ§ãƒ³ã‚’æä¾›ã—ã¾ã™ã€‚ã“ã‚Œã¯ã€å®šæœŸçš„ãªè«‹æ±‚ã¨ç›´æŽ¥é€£æºã—ã¾ã™ã€‚",[pn]:"ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã‚·ãƒƒãƒ—ã«ã¤ã„ã¦èª­ã‚€",[mn]:"æ¦‚è¦",[gn]:"Zuora é–‹ç™ºãƒ›ãƒ¼ãƒ ",[wn]:"å§‹ã‚ã¾ã—ã‚‡ã†",[vn]:"API ãƒªãƒ•ã‚¡ãƒ¬ãƒ³ã‚¹",[bn]:"æŽ¢ç´¢",[fn]:"ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆAPI\n    ã»ã¨ã‚“ã©ã®è«‹æ±‚æ›¸ã€æ”¯æ‰•ã„ã€ãŠã‚ˆã³ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ çµ±åˆãƒ‹ãƒ¼ã‚ºã«å¯¾ã™ã‚‹åŒ…æ‹¬çš„ãªã‚½ãƒªãƒ¥ãƒ¼ã‚·ãƒ§ãƒ³ã§ã€ã„ãã¤ã‹ã®ä½¿ã„ã‚„ã™ã•ã®ã‚ã‚‹ã‚¯ãƒ­ã‚¹ã‚«ãƒƒãƒˆæ©Ÿèƒ½ã‚’æä¾›ã—ã¦ã„ã¾ã™ã€‚",[yn]:"v1 API",[kn]:"Zuoraã®ã‚ªãƒªã‚¸ãƒŠãƒ«ã§ã€100ï¼…ã®ã‚«ãƒãƒ¬ãƒƒã‚¸ã‚’æŒã¤è«‹æ±‚æ›¸ã€æ”¯æ‰•ã„ã€ãŠã‚ˆã³ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ APIã€‚",[zn]:"Zephr API",[xn]:"Zephrã®ãƒ€ã‚¤ãƒŠãƒŸãƒƒã‚¯ãªãƒšã‚¤ã‚¦ã‚©ãƒ¼ãƒ«æŠ€è¡“ã¯ã€ãƒ¦ãƒ¼ã‚¶ãƒ¼ã®ãƒ‡ã‚¸ã‚¿ãƒ«ã‚µãƒ–ã‚¹ã‚¯ãƒªãƒ—ã‚·ãƒ§ãƒ³ã®æ—…ã‚’æ§‹ç¯‰ã€ãƒ†ã‚¹ãƒˆã€å­¦ç¿’ã€æœ€é©åŒ–ã—ã€ãƒ‘ãƒ¼ã‚½ãƒŠãƒ©ã‚¤ã‚ºã•ã‚ŒãŸä½“é¨“ã‚’ä¿ƒé€²ã—ã¾ã™ã€‚",[Sn]:"ãã®ä»–ã®APIs",[In]:"ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆ APIã€Zuora Revenueã€ãŠã‚ˆã³ Collection API",[An]:"çµ±åˆã®ãŸã‚ã®ãƒ•ã‚¡ã‚¹ãƒˆãƒˆãƒ©ãƒƒã‚¯",[En]:"\n    <p>Zuora ã¯ã€è«‹æ±‚ã¨ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ç”¨ã« v1 API ã¨ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆã¨ã„ã† 2 ã¤ã® API ã‚»ãƒƒãƒˆã‚’æä¾›ã—ã¾ã™ã€‚</p>\n    <br/><p>Zuora ã® v1 API ã‚’ä½¿ç”¨ã™ã‚‹ã¨ã€Zuora ã®è«‹æ±‚ã€æ”¯æ‰•ã„ã€ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã®ã™ã¹ã¦ã®æ©Ÿèƒ½ã«ã‚¢ã‚¯ã‚»ã‚¹ã§ãã¾ã™ã€‚ Zuora ã®ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆã¯ã€ä¸€èˆ¬çš„ãª e ã‚³ãƒžãƒ¼ã‚¹ã®ãƒ¦ãƒ¼ã‚¹ã‚±ãƒ¼ã‚¹ã®ã¿ã‚’å¯¾è±¡ã¨ã—ãŸç°¡ç´ åŒ–ã•ã‚ŒãŸãƒ—ãƒ­ã‚°ãƒ©ãƒ  ã‚¨ã‚¯ã‚¹ãƒšãƒªã‚¨ãƒ³ã‚¹ã‚’è¡¨ã—ã¾ã™ã€‚ ã€Œv2ã€ã¨å‘¼ã°ã‚Œã‚‹ã“ã¨ãŒå¤šã„ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆã¯ã€v1 API ã®ä»£æ›¿å“ã§ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚æ–°ã—ã„é–‹ç™ºã‚’é–‹å§‹ã™ã‚‹å ´åˆã¯ã€ã™ã¹ã¦ã®ãƒ¦ãƒ¼ã‚¹ã‚±ãƒ¼ã‚¹ã§ v1 API ã‚’ä½¿ç”¨ã™ã‚‹ã“ã¨ã‚’ãŠå‹§ã‚ã—ã¾ã™ã€‚æ–°ã—ã„ e ã‚³ãƒžãƒ¼ã‚¹é–‹ç™ºã«ã¯ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆã‚’æŽ¨å¥¨ã—ãªããªã‚Šã¾ã—ãŸã€‚ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆã‚’éžæŽ¨å¥¨ã«ã™ã‚‹ã‚ã‘ã§ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚ãƒã‚°ã®ä¿®æ­£ã¯ç¶™ç¶šã—ã¾ã™ãŒã€ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆã®æ©Ÿèƒ½æ‹¡å¼µãƒªã‚¯ã‚¨ã‚¹ãƒˆã¯å—ã‘ä»˜ã‘ã¾ã›ã‚“ã€‚æ–°ã—ã„èª²é‡‘æ©Ÿèƒ½ã¨ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ æ©Ÿèƒ½ã«ã¯ v1 API ã®ã¿ãŒå«ã¾ã‚Œã€ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆã§ã¯ã‚µãƒãƒ¼ãƒˆã•ã‚Œã¾ã›ã‚“ã€‚</p>",[Rn]:"ã‚¯ã‚¤ãƒƒã‚¯ã‚¹ã‚¿ãƒ¼ãƒˆ API ã‚’æŽ¢ç´¢ã™ã‚‹",[Qo]:"ãƒ“ã‚¸ãƒã‚¹ä¸Šã®èª²é¡Œ",[Yo]:"å¾“é‡èª²é‡‘åˆ¶ã‚ªãƒ•ã‚¡ãƒ¼ã®åŽç›ŠåŒ–",[Jo]:"AIã«ã‚ˆã‚‹è«‹æ±‚ãƒ—ãƒ­ã‚»ã‚¹ã®å¤‰é©",[Xo]:"æ–°è¦åŠ å…¥è€…ã®ç²å¾—ã¨ç¶­æŒ",[ei]:"AIãƒšã‚¤ã‚¦ã‚©ãƒ¼ãƒ«ã®å°Žå…¥",[ti]:"ãƒ¡ãƒ‡ã‚£ã‚¢ã«ãŠã‘ã‚‹ã‚ªãƒ•ã‚¡ãƒ¼ã¨ä½“é¨“ã‚’åŠ é€Ÿ",[oi]:"åŽç›Šèªè­˜ã®è‡ªå‹•åŒ–",[ii]:"åŽç›Šã®æˆé•·ã‚’ä¿ƒé€²",[ni]:"ã‚¢ãƒƒãƒ—ãƒžãƒ¼ã‚±ãƒƒãƒˆã¸ã®ç§»è¡Œ",[ri]:"é›»æ°—è‡ªå‹•è»Šå……é›»",[ai]:"æ¥­ç•Œã”ã¨ã®èª²é¡Œ",[Ii]:"SaaSæ¥­ç•Œ",[li]:"è¦‹ç©ã‚Š (CPQ)",[ci]:"ã‚ªãƒ¼ãƒ€ãƒ¼ç®¡ç†",[ui]:"ã‚³ãƒ³ã‚µãƒ³ãƒ—ã‚·ãƒ§ãƒ³ãƒ»ãƒ¡ãƒ¼ã‚¿ãƒªãƒ³ã‚°",[di]:"é›»å­è«‹æ±‚æ›¸ãƒ»ç¨Žå‹™ã‚³ãƒ³ãƒ—ãƒ©ã‚¤ã‚¢ãƒ³ã‚¹",[pi]:"æ±ºæ¸ˆã‚½ãƒªãƒ¥ãƒ¼ã‚·ãƒ§ãƒ³",[hi]:"API & ã‚³ãƒã‚¯ã‚¿ãƒ¼",[mi]:"æ‹¡å¼µæ€§",[gi]:"æ±ºæ¸ˆæ‰‹æ®µã‚’ç¶²ç¾…çš„ã«çµ±åˆ",[wi]:"æ±ºæ¸ˆã®ä¸æ­£åˆ©ç”¨ã¨ã‚¨ãƒ©ãƒ¼ã®é˜²æ­¢",[vi]:"AIãƒšã‚¤ã‚¦ã‚©ãƒ¼ãƒ«",[bi]:"ãƒ•ã‚¡ãƒ¼ã‚¹ãƒˆãƒ‘ãƒ¼ãƒ†ã‚£ãƒ‡ãƒ¼ã‚¿ã®åŽé›†ã¨æ´»ç”¨",[fi]:"ãƒ‘ãƒ¼ã‚½ãƒŠãƒ©ã‚¤ã‚º",[yi]:"æ‹¡å¼µæ€§",[ki]:"åˆ†æžãƒ»ãƒ¬ãƒãƒ¼ãƒˆ",[zi]:"ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£",[xi]:"ä»–ã‚·ã‚¹ãƒ†ãƒ é€£æº",[Si]:"ç®¡ç†ã‚³ãƒ³ã‚½ãƒ¼ãƒ«",[Ai]:"è³‡æ–™ãƒ»ã‚¤ãƒ™ãƒ³ãƒˆ",[Ei]:"å‹•ç”»",[Ri]:"æ¥­ç•Œå‹•å‘ï¼ˆSubscribedï¼‰",[_i]:"ãƒ¬ãƒãƒ¼ãƒˆ",[Ni]:"ã‚¤ãƒ™ãƒ³ãƒˆ",[Ci]:"ãƒˆãƒ”ãƒƒã‚¯åˆ¥è³‡æ–™",[$i]:"ã‚ªãƒ¼ãƒ€ãƒ¼ãƒ»ãƒˆã‚¥ãƒ»ã‚­ãƒ£ãƒƒã‚·ãƒ¥",[Pi]:"é¡§å®¢é–¢ä¿‚ã‚’å®ˆã‚‹ãŸã‚ã«æ§‹ç¯‰ã•ã‚ŒãŸAIæ­è¼‰ã®å‚µæ¨©å›žåŽ",[Ti]:"å°‚é–€ç”¨èªžé›†"}},jn={[Zn.GERMAN]:{[we]:"https://www.zuora.com/de",[ve]:"/",[be]:"https://www.zuora.com/apps/newlogin.do",[fe]:"https://www.zuora.com/de/talk-to-sales/",[ye]:"https://www.zuora.com/de/resources/demo-on-demand/",[vt]:"https://www.zuora.com/de/business-initiatives/",[Zt]:"https://www.zuora.com/de/connect-plus-learn/",[Kt]:"https://www.zuora.com/de/zuora-university/zuora-for-customers/",[Wt]:"https://docs.zuora.com/",[Yt]:"/",[Xt]:"https://www.zuora.com/de/developer-center/api/",[to]:"https://docs.zuora.com/en/release-notes/latest-release/ai-in-zuora/",[io]:"https://trust.zuora.com/",[bo]:"https://www.zuora.com/de/privacy-statement/",[fo]:"https://www.zuora.com/de/terms-conditions/",[yo]:"https://www.zuora.com/de/products/",[xo]:"https://www.zuora.com/de/about/awards/",[Ce]:"https://www.zuora.com/de/about/",[xe]:"https://www.zuora.com/de/about/subscribed-institute/",[Ie]:"https://www.zuora.com/de/modern-business/",[Ee]:"https://www.zuora.com/de/our-customers/",[_e]:"https://www.zuora.com/de/about/partners-ecosystem/",[ke]:"https://www.zuora.com/de/journey-to-usership/",[Di]:"https://www.zuora.com/de/resource/sei-report",[_o]:"https://www.zuora.com/de/whats-new/",[Pe]:"https://www.zuora.com/de/products/billing-software/",[Me]:"https://www.zuora.com/de/products/cpq-software/",[De]:"https://www.zuora.com/de/products/revenue/",[Be]:"https://www.zuora.com/de/products/zuora-platform/",[Ue]:"https://www.zuora.com/de/products/zuora-central-platform/connect-everything",[Fe]:"https://www.zuora.com/de/products/zuora-central-platform/deploy-faster",[qe]:"https://www.zuora.com/de/products/zuora-central-platform/remove-risk",[Ge]:"https://www.zuora.com/de/products/zuora-central-platform/know-now",[He]:"https://www.zuora.com/de/products/zuora-central-platform/transact-more",[Ke]:"https://www.zuora.com/de/products/payment-solutions/",[We]:"https://www.zuora.com/de/products/order-to-revenue/",[Ye]:"https://www.zuora.com/de/products/zephr/",[Xe]:"https://www.zuora.com/de/products/zephr/zephr-for-media",[et]:"https://www.zuora.com/de/products/zephr/dynamic-offers",[tt]:"https://www.zuora.com/de/products/zephr/user-specific-personalization",[ot]:"https://www.zuora.com/de/products/identity-access-management",[it]:"https://www.zuora.com/de/products/intelligent-paywall-solutions",[nt]:"https://www.zuora.com/de/products/corporate-subscription-management",[rt]:"https://www.zuora.com/de/products/first-party-data-strategies",[Ui]:"https://www.zuora.com/de/resources/events/subscribed-connect2023-on-demand/",[at]:"https://www.zuora.com/de/about/partners-ecosystem/",[lt]:"https://www.zuora.com/de/about/partners/",[ut]:"https://www.zuora.com/de/about/become-a-partner",[pt]:"https://partner.zuora.com/",[Hi]:"https://www.zuora.com/de/resources/events/modern-accounting-summit-on-demand/",[Qi]:"https://www.zuora.com/de/de/resources/demystifying-consumption-based-pricing-on-demand/",[bt]:"https://www.zuora.com/de/journey-to-usership/how-to-launch-a-new-subscription-offering/",[ft]:"https://www.zuora.com/de/journey-to-usership/how-to-refresh-your-pricing-strategy",[yt]:"https://www.zuora.com/de/journey-to-usership/how-to-adopt-usage-based-pricing",[kt]:"https://www.zuora.com/de/journey-to-usership/how-to-tailor-offerings-for-international-markets",[zt]:"https://www.zuora.com/de/journey-to-usership/how-to-expand-upmarket-or-downmarket",[xt]:"https://www.zuora.com/de/journey-to-usership/how-to-reduce-time-to-close",[St]:"https://www.zuora.com/de/journey-to-usership/how-to-execute-a-cross-sell-and-up-sell-strategy",[It]:"https://www.zuora.com/de/journey-to-usership/how-to-minimize-involuntary-churn",[At]:"https://www.zuora.com/de/journey-to-usership/business-initiatives/",[Lt]:"https://www.zuora.com/de/solutions/manufacturing-iot/",[Ot]:"https://www.zuora.com/de/industries/saas/",[Mt]:"https://www.zuora.com/de/solutions/media-entertainment/",[Dt]:"https://www.zuora.com/de/industries/startups/",[jo]:"https://www.zuora.com/de/resources/filter/topic/automate-revenue-recognition/",[Uo]:"https://www.zuora.com/de/resources/filter/topic/subscriber-growth-strategies/",[Fo]:"https://www.zuora.com/de/resources/filter/topic/optimize-payment-operations/",[qo]:"https://www.zuora.com/de/resources/topic/billing-and-payments/",[Go]:"https://www.zuora.com/de/resources/topic/risk-and-compliance/",[Ho]:"https://www.zuora.com/de/resources/topic/pricing-and-packaging/",[Ko]:"https://www.zuora.com/de/resources/topic/operations-and-it/",[gt]:"https://www.zuora.com/de/our-customers/case-studies/",[Vo]:"https://plus.zuora.com/plus",[Tt]:"https://www.zuora.com/de/subscribed/",[Wo]:"https://www.zuora.com/de/resources",[_t]:"https://www.zuora.com/de/guides/",[Nt]:"https://www.zuora.com/de/resource/content_type/webinar/",[Ct]:"https://www.zuora.com/de/resource/content_type/ebook/",[Et]:"https://www.zuora.com/de/resource/content_type/whitepaper/",[$t]:"https://www.zuora.com/de/resource/content_type/datasheet/",[Pt]:"https://www.zuora.com/de/resource/content_type/report-3rd-party/",[Rt]:"https://www.zuora.com/de/resources/events/",[en]:"https://plus.zuora.com/plus",[Qo]:"https://www.zuora.com/de/solutions/",[Yo]:"https://www.zuora.com/de/solutions/monetize-usage/",[Jo]:"https://www.zuora.com/de/solutions/zuora-copilot-ai-powered-billing/",[$i]:"https://www.zuora.com/de/products/collections/",[Xo]:"https://www.zuora.com/de/solutions/acquire-retain-subscribers/",[ei]:"https://www.zuora.com/de/solutions/launch-ai-powered-paywalls/",[ti]:"https://www.zuora.com/de/solutions/accelerate-offers-experiences-in-media/",[oi]:"https://www.zuora.com/de/solutions/scale-revenue-accounting-with-automation/",[ii]:"https://www.zuora.com/de/solutions/enable-revenue-growth/",[ni]:"https://www.zuora.com/de/solutions/drive-revenue-by-moving-upmarket/",[ri]:"https://www.zuora.com/de/solutions/ev-charging/ ",[Ii]:"https://www.zuora.com/de/solutions/saas/",[si]:"https://www.zuora.com/de/products/billing-software/pricing-and-packaging/",[li]:"https://www.zuora.com/de/products/cpq-software/",[ci]:"https://www.zuora.com/de/products/billing-software/order-management/",[ui]:"https://www.zuora.com/de/products/billing-software/consumption-metering/",[di]:"https://www.zuora.com/de/products/billing-software/e-invoicing-and-tax-compliance/",[hi]:"https://www.zuora.com/de/products/zuora-platform/integration-hub/",[mi]:"https://www.zuora.com/de/products/zuora-platform/extension-studio/",[gi]:"https://www.zuora.com/de/products/payment-solutions/payment-coverage-and-gateway-routing/",[wi]:"https://www.zuora.com/de/products/payment-solutions/payment-fraud-and-failures/",[vi]:"https://www.zuora.com/de/products/zephr/ai-paywall/",[bi]:"https://www.zuora.com/de/products/zephr/first-party-data-strategies/",[fi]:"https://www.zuora.com/de/products/zephr/user-specific-personalization/",[yi]:"https://www.zuora.com/de/products/zuora-platform/extension-studio/",[ki]:"https://www.zuora.com/de/products/zuora-platform/analytics/",[zi]:"https://www.zuora.com/de/products/zuora-platform/security/",[xi]:"https://www.zuora.com/de/products/zuora-platform/integration-hub/",[Si]:"https://www.zuora.com/de/products/zuora-platform/admin-command-center/",[Ei]:"https://www.zuora.com/de/resources/filter/content_type/video/",[Ri]:"https://www.zuora.com/de/subscribed/",[_i]:"https://www.zuora.com/de/resources/filter/content_type/report/",[Ni]:"https://www.zuora.com/de/resources/filter/content_type/podcast/",[Ti]:"https://www.zuora.com/de/glossary/",[no]:"https://community.zuora.com/",[No]:"https://community.zuora.com/ask-the-community",[Po]:"https://community.zuora.com/learners-lounge",[To]:"https://community.zuora.com/communities/community-home?communitykey=c91d3142-7e65-4715-9e11-7eb5c768c213",[Bt]:"https://www.zuora.com/de/zuora-training",[Ut]:"https://www.zuora.com/de/zuora-training/zuora-implementers/",[Ft]:"https://accounts.skilljar.com/accounts/login/?t=3hr3d22ksmque&d=2pcyc1shgvh7p&next=%2Fauth%2Fendpoint%2Flogin%2Fresult%3Fnext%3D%252F%26d%3D2pcyc1shgvh7p",[qt]:"https://www.zuora.com/de/zuora-training/customers/",[Gt]:"https://accounts.skilljar.com/accounts/login/?t=3hr3d22ksmque&d=2pcyc1shgvh7p&next=%2Fauth%2Fendpoint%2Flogin%2Fresult%3Fnext%3D%252F%26d%3D2pcyc1shgvh7p",[Ht]:"https://www.zuora.com/de/zuora-training/zuora-implementers/",[Lo]:"https://docs.zuora.com/en/release-notes/latest-release/ai-in-zuora/",[Oo]:"https://docs.zuora.com/en/basics/",[Mo]:"/api-references/quickstart-api/overview/",[Do]:"/api-references/api/overview/",[Zo]:"/sdk/sdk-quickstart-intro/",[eo]:"https://trust.zuora.com/",[oo]:"https://support.zuora.com/",[rn]:"http://community.zuora.com/",[ko]:"https://www.zuora.com/de/about/team/",[zo]:"https://www.zuora.com/de/about/news-press/",[Io]:"https://www.zuora.com/de/careers/",[Co]:"https://www.zuora.com/about/environmental-social-governance/",[wt]:"https://www.zuora.com/de/resources/blog/",[So]:"https://www.zuora.com/de/about/contact/",[vo]:"https://www.zuora.com/de/about/legal/",[ln]:"https://www.zuora.com/about/environmental-social-governance/",[pn]:"https://www.zuora.com/de/press-release/zuora-partners-with-sovos-to-help-global-businesses-meet-e-invoicing-mandates/",[mn]:"/overview/",[wn]:"/docs/get-started/introduction/",[bn]:"/quickstart-api-reference/quickstart-api-intro/",[yn]:"/v1-api-reference/introduction/",[zn]:"/zephr-api-reference/zephr-api-introduction/",[Sn]:"/other-api/quickstart-api/overview/",[Rn]:"/quickstart-api-reference/quickstart-api-intro/"},[Zn.ENGLISH]:{[we]:"https://www.zuora.com/",[ve]:"/",[be]:"https://www.zuora.com/apps/newlogin.do",[fe]:"https://www.zuora.com/talk-to-sales/",[ye]:"https://www.zuora.com/resources/demo-on-demand/",[vt]:"https://www.zuora.com/business-initiatives/",[Zt]:"https://www.zuora.com/connect-plus-learn/",[Kt]:"https://www.zuora.com/zuora-university/zuora-for-customers/",[Wt]:"https://docs.zuora.com/",[Yt]:"/",[Xt]:"https://www.zuora.com/developer-center/api/",[to]:"https://docs.zuora.com/en/release-notes/latest-release/ai-in-zuora/",[io]:"https://trust.zuora.com/",[bo]:"https://www.zuora.com/privacy-statement/",[fo]:"https://www.zuora.com/terms-conditions/",[yo]:"https://www.zuora.com/products/",[xo]:"https://www.zuora.com/about/awards/",[Ce]:"https://www.zuora.com/about/",[xe]:"https://www.zuora.com/about/subscribed-institute/",[Ie]:"https://www.zuora.com/modern-business/",[Ee]:"https://www.zuora.com/our-customers/",[_e]:"https://www.zuora.com/about/partners-ecosystem/",[ke]:"https://www.zuora.com/journey-to-usership/",[Di]:"https://www.zuora.com/resource/sei-report",[_o]:"https://www.zuora.com/whats-new/",[Pe]:"https://www.zuora.com/products/billing-software/",[Me]:"https://www.zuora.com/products/cpq-software/",[De]:"https://www.zuora.com/products/revenue/",[Be]:"https://www.zuora.com/products/zuora-platform/",[Ue]:"https://www.zuora.com/products/zuora-central-platform/connect-everything",[Fe]:"https://www.zuora.com/products/zuora-central-platform/deploy-faster",[qe]:"https://www.zuora.com/products/zuora-central-platform/remove-risk",[Ge]:"https://www.zuora.com/products/zuora-central-platform/know-now",[He]:"https://www.zuora.com/products/zuora-central-platform/transact-more",[Ke]:"https://www.zuora.com/products/payment-solutions/",[We]:"https://www.zuora.com/products/order-to-revenue/",[Ye]:"https://www.zuora.com/products/zephr/",[Xe]:"https://www.zuora.com/products/zephr/zephr-for-media",[et]:"https://www.zuora.com/products/zephr/dynamic-offers",[tt]:"https://www.zuora.com/products/zephr/user-specific-personalization",[ot]:"https://www.zuora.com/products/identity-access-management",[it]:"https://www.zuora.com/products/intelligent-paywall-solutions",[nt]:"https://www.zuora.com/products/corporate-subscription-management",[rt]:"https://www.zuora.com/products/first-party-data-strategies",[Ui]:"https://www.zuora.com/resources/events/subscribed-connect2023-on-demand/",[at]:"https://www.zuora.com/about/partners-ecosystem/",[lt]:"https://www.zuora.com/about/partners/",[ut]:"https://www.zuora.com/about/become-a-partner",[pt]:"https://partner.zuora.com/",[Hi]:"https://www.zuora.com/resources/events/modern-accounting-summit-on-demand/",[Qi]:"https://www.zuora.com/resources/demystifying-consumption-based-pricing-on-demand/",[bt]:"https://www.zuora.com/journey-to-usership/how-to-launch-a-new-subscription-offering/",[ft]:"https://www.zuora.com/journey-to-usership/how-to-refresh-your-pricing-strategy",[yt]:"https://www.zuora.com/journey-to-usership/how-to-adopt-usage-based-pricing",[kt]:"https://www.zuora.com/journey-to-usership/how-to-tailor-offerings-for-international-markets",[zt]:"https://www.zuora.com/journey-to-usership/how-to-expand-upmarket-or-downmarket",[xt]:"https://www.zuora.com/journey-to-usership/how-to-reduce-time-to-close",[St]:"https://www.zuora.com/journey-to-usership/how-to-execute-a-cross-sell-and-up-sell-strategy",[It]:"https://www.zuora.com/journey-to-usership/how-to-minimize-involuntary-churn",[At]:"https://www.zuora.com/journey-to-usership/business-initiatives/",[Lt]:"https://www.zuora.com/solutions/manufacturing-iot/",[Ot]:"https://www.zuora.com/industries/saas/",[Mt]:"https://www.zuora.com/solutions/media-entertainment/",[Dt]:"https://www.zuora.com/industries/startups/",[jo]:"https://www.zuora.com/resources/filter/topic/automate-revenue-recognition/",[Uo]:"https://www.zuora.com/resources/filter/topic/subscriber-growth-strategies/",[Fo]:"https://www.zuora.com/resources/filter/topic/optimize-payment-operations/",[qo]:"https://www.zuora.com/resources/topic/billing-and-payments/",[Go]:"https://www.zuora.com/resources/topic/risk-and-compliance/",[Ho]:"https://www.zuora.com/solutions/intelligent-pricing-and-packaging/",[Ko]:"https://www.zuora.com/resources/topic/operations-and-it/",[gt]:"https://www.zuora.com/our-customers/case-studies/",[Vo]:"https://plus.zuora.com/plus",[Tt]:"https://www.zuora.com/subscribed/",[Wo]:"https://www.zuora.com/resources",[_t]:"https://www.zuora.com/guides/",[Nt]:"https://www.zuora.com/resource/content_type/webinar/",[Ct]:"https://www.zuora.com/resource/content_type/ebook/",[Et]:"https://www.zuora.com/resource/content_type/whitepaper/",[$t]:"https://www.zuora.com/resource/content_type/datasheet/",[Pt]:"https://www.zuora.com/resource/content_type/report-3rd-party/",[Rt]:"https://www.zuora.com/resources/events/",[en]:"https://plus.zuora.com/plus",[no]:"https://community.zuora.com/",[No]:"https://community.zuora.com/ask-the-community",[Po]:"https://community.zuora.com/learners-lounge",[To]:"https://community.zuora.com/communities/community-home?communitykey=c91d3142-7e65-4715-9e11-7eb5c768c213",[Bt]:"https://www.zuora.com/zuora-training",[Ut]:"https://www.zuora.com/zuora-training/zuora-implementers/",[Ft]:"https://accounts.skilljar.com/accounts/login/?t=3hr3d22ksmque&d=2pcyc1shgvh7p&next=%2Fauth%2Fendpoint%2Flogin%2Fresult%3Fnext%3D%252F%26d%3D2pcyc1shgvh7p",[qt]:"https://www.zuora.com/zuora-training/customers/",[Gt]:"https://accounts.skilljar.com/accounts/login/?t=3hr3d22ksmque&d=2pcyc1shgvh7p&next=%2Fauth%2Fendpoint%2Flogin%2Fresult%3Fnext%3D%252F%26d%3D2pcyc1shgvh7p",[Ht]:"https://www.zuora.com/zuora-training/zuora-implementers/",[Lo]:"https://docs.zuora.com/en/release-notes/latest-release/ai-in-zuora/",[Oo]:"https://docs.zuora.com/en/basics/",[Mo]:"/api-references/quickstart-api/overview/",[Do]:"/api-references/api/overview/",[Zo]:"/sdk/sdk-quickstart-intro/",[eo]:"https://trust.zuora.com/",[oo]:"https://support.zuora.com/",[rn]:"http://community.zuora.com/",[ko]:"https://www.zuora.com/about/team/",[zo]:"https://www.zuora.com/about/news-press/",[Io]:"https://www.zuora.com/careers/",[Co]:"https://www.zuora.com/about/environmental-social-governance/",[wt]:"https://www.zuora.com/resources/blog/",[So]:"https://www.zuora.com/about/contact/",[vo]:"https://www.zuora.com/about/legal/",[ln]:"https://www.zuora.com/about/environmental-social-governance/",[pn]:"https://www.zuora.com/press-release/zuora-partners-with-sovos-to-help-global-businesses-meet-e-invoicing-mandates/",[mn]:"/overview/",[wn]:"/docs/get-started/introduction/",[bn]:"/quickstart-api-reference/quickstart-api-intro/",[yn]:"/v1-api-reference/introduction/",[zn]:"/zephr-api-reference/zephr-api-introduction/",[Sn]:"/other-api/quickstart-api/overview/",[Rn]:"/quickstart-api-reference/quickstart-api-intro/",[Qo]:"https://www.zuora.com/solutions/",[Yo]:"https://www.zuora.com/solutions/monetize-usage/",[Jo]:"https://www.zuora.com/solutions/zuora-copilot-ai-powered-billing/",[$i]:"https://www.zuora.com/products/collections/",[Xo]:"https://www.zuora.com/solutions/acquire-retain-subscribers/",[ei]:"https://www.zuora.com/solutions/launch-ai-powered-paywalls/",[ti]:"https://www.zuora.com/solutions/accelerate-offers-experiences-in-media/",[oi]:"https://www.zuora.com/solutions/scale-revenue-accounting-with-automation/",[ii]:"https://www.zuora.com/solutions/enable-revenue-growth/",[ni]:"https://www.zuora.com/solutions/drive-revenue-by-moving-upmarket/",[ri]:"https://www.zuora.com/solutions/ev-charging/",[si]:"https://www.zuora.com/products/billing-software/pricing-and-packaging/",[li]:"https://www.zuora.com/products/cpq-software/",[ci]:"https://www.zuora.com/products/billing-software/order-management/",[ui]:"https://www.zuora.com/products/billing-software/consumption-metering/",[di]:"https://www.zuora.com/products/billing-software/e-invoicing-and-tax-compliance/",[hi]:"https://www.zuora.com/products/zuora-platform/integration-hub/",[mi]:"https://www.zuora.com/products/zuora-platform/extension-studio/",[gi]:"https://www.zuora.com/products/payment-solutions/payment-coverage-and-gateway-routing/",[wi]:"https://www.zuora.com/products/payment-solutions/payment-fraud-and-failures/",[vi]:"https://www.zuora.com/products/zephr/ai-paywall/",[bi]:"https://www.zuora.com/products/zephr/first-party-data-strategies/",[fi]:"https://www.zuora.com/products/zephr/user-specific-personalization/",[yi]:"https://www.zuora.com/products/zuora-platform/extension-studio/",[ki]:"https://www.zuora.com/products/zuora-platform/analytics/",[zi]:"https://www.zuora.com/products/zuora-platform/security/",[xi]:"https://www.zuora.com/products/zuora-platform/integration-hub/",[Si]:"https://www.zuora.com/products/zuora-platform/admin-command-center/",[Ii]:"https://www.zuora.com/solutions/saas/",[Ei]:"https://www.zuora.com/resources/filter/content_type/video/",[Ri]:"https://www.zuora.com/subscribed/",[_i]:"https://www.zuora.com/resources/filter/content_type/report/",[Ni]:"https://www.zuora.com/resources/filter/content_type/podcast/",[Ti]:"https://www.zuora.com/glossary/"},[Zn.FRENCH]:{[we]:"https://www.zuora.com/fr",[ve]:"/",[be]:"https://www.zuora.com/apps/newlogin.do",[fe]:"https://www.zuora.com/fr/talk-to-sales/",[ye]:"https://www.zuora.com/fr/resources/demo-on-demand/",[vt]:"https://www.zuora.com/fr/business-initiatives/",[Zt]:"https://www.zuora.com/fr/connect-plus-learn/",[Kt]:"https://www.zuora.com/fr/zuora-university/zuora-for-customers/",[Wt]:"https://docs.zuora.com/",[Yt]:"/",[Xt]:"https://www.zuora.com/fr/developer-center/api/",[to]:"https://docs.zuora.com/en/release-notes/latest-release/ai-in-zuora/",[io]:"https://trust.zuora.com/",[bo]:"https://www.zuora.com/fr/privacy-statement/",[fo]:"https://www.zuora.com/fr/terms-conditions/",[yo]:"https://www.zuora.com/fr/products/",[xo]:"https://www.zuora.com/fr/about/awards/",[Ce]:"https://www.zuora.com/fr/about/",[xe]:"https://www.zuora.com/fr/about/subscribed-institute/",[Ie]:"https://www.zuora.com/fr/modern-business/",[Ee]:"https://www.zuora.com/fr/our-customers/",[_e]:"https://www.zuora.com/fr/about/partners-ecosystem/",[ke]:"https://www.zuora.com/fr/journey-to-usership/",[Di]:"https://www.zuora.com/fr/resource/sei-report",[_o]:"https://www.zuora.com/fr/whats-new/",[Pe]:"https://www.zuora.com/fr/products/billing-software/",[Me]:"https://www.zuora.com/fr/products/cpq-software/",[De]:"https://www.zuora.com/fr/products/revenue/",[Be]:"https://www.zuora.com/fr/products/zuora-platform/",[Ue]:"https://www.zuora.com/fr/products/zuora-central-platform/connect-everything",[Fe]:"https://www.zuora.com/fr/products/zuora-central-platform/deploy-faster",[qe]:"https://www.zuora.com/fr/products/zuora-central-platform/remove-risk",[Ge]:"https://www.zuora.com/fr/products/zuora-central-platform/know-now",[He]:"https://www.zuora.com/fr/products/zuora-central-platform/transact-more",[Ke]:"https://www.zuora.com/fr/products/payment-solutions/",[We]:"https://www.zuora.com/fr/products/order-to-revenue/",[Ye]:"https://www.zuora.com/fr/products/zephr/",[Xe]:"https://www.zuora.com/fr/products/zephr/zephr-for-media",[et]:"https://www.zuora.com/fr/products/zephr/dynamic-offers",[tt]:"https://www.zuora.com/fr/products/zephr/user-specific-personalization",[ot]:"https://www.zuora.com/fr/products/identity-access-management",[it]:"https://www.zuora.com/fr/products/intelligent-paywall-solutions",[nt]:"https://www.zuora.com/fr/products/corporate-subscription-management",[rt]:"https://www.zuora.com/fr/products/first-party-data-strategies",[Ui]:"https://www.zuora.com/fr/resources/events/subscribed-connect2023-on-demand/",[at]:"https://www.zuora.com/fr/about/partners-ecosystem/",[lt]:"https://www.zuora.com/fr/about/partners/",[ut]:"https://www.zuora.com/fr/about/become-a-partner",[pt]:"https://partner.zuora.com/",[Hi]:"https://www.zuora.com/fr/resources/events/modern-accounting-summit-on-demand/",[Qi]:"https://www.zuora.com/fr/fr/resources/demystifying-consumption-based-pricing-on-demand/",[bt]:"https://www.zuora.com/fr/journey-to-usership/how-to-launch-a-new-subscription-offering/",[ft]:"https://www.zuora.com/fr/journey-to-usership/how-to-refresh-your-pricing-strategy",[yt]:"https://www.zuora.com/fr/journey-to-usership/how-to-adopt-usage-based-pricing",[kt]:"https://www.zuora.com/fr/journey-to-usership/how-to-tailor-offerings-for-international-markets",[zt]:"https://www.zuora.com/fr/journey-to-usership/how-to-expand-upmarket-or-downmarket",[xt]:"https://www.zuora.com/fr/journey-to-usership/how-to-reduce-time-to-close",[St]:"https://www.zuora.com/fr/journey-to-usership/how-to-execute-a-cross-sell-and-up-sell-strategy",[It]:"https://www.zuora.com/fr/journey-to-usership/how-to-minimize-involuntary-churn",[At]:"https://www.zuora.com/fr/journey-to-usership/business-initiatives/",[Lt]:"https://www.zuora.com/fr/solutions/manufacturing-iot/",[Ot]:"https://www.zuora.com/fr/industries/saas/",[Mt]:"https://www.zuora.com/fr/solutions/media-entertainment/",[Dt]:"https://www.zuora.com/fr/industries/startups/",[jo]:"https://www.zuora.com/fr/resources/filter/topic/automate-revenue-recognition/",[Uo]:"https://www.zuora.com/fr/resources/filter/topic/subscriber-growth-strategies/",[Fo]:"https://www.zuora.com/fr/resources/filter/topic/optimize-payment-operations/",[qo]:"https://www.zuora.com/fr/resources/topic/billing-and-payments/",[Go]:"https://www.zuora.com/fr/resources/topic/risk-and-compliance/",[Ho]:"https://www.zuora.com/fr/resources/topic/pricing-and-packaging/",[Ko]:"https://www.zuora.com/fr/resources/topic/operations-and-it/",[gt]:"https://www.zuora.com/fr/our-customers/case-studies/",[Vo]:"https://plus.zuora.com/plus",[Tt]:"https://www.zuora.com/fr/subscribed/",[Wo]:"https://www.zuora.com/fr/resources",[_t]:"https://www.zuora.com/fr/guides/",[Nt]:"https://www.zuora.com/fr/resource/content_type/webinar/",[Ct]:"https://www.zuora.com/fr/resource/content_type/ebook/",[Et]:"https://www.zuora.com/fr/resource/content_type/whitepaper/",[$t]:"https://www.zuora.com/fr/resource/content_type/datasheet/",[Pt]:"https://www.zuora.com/fr/resource/content_type/report-3rd-party/",[Rt]:"https://www.zuora.com/fr/resources/events/",[en]:"https://plus.zuora.com/plus",[no]:"https://community.zuora.com/",[No]:"https://community.zuora.com/ask-the-community",[Po]:"https://community.zuora.com/learners-lounge",[To]:"https://community.zuora.com/communities/community-home?communitykey=c91d3142-7e65-4715-9e11-7eb5c768c213",[Bt]:"https://www.zuora.com/fr/zuora-training",[Ut]:"https://www.zuora.com/fr/zuora-training/zuora-implementers/",[Ft]:"https://accounts.skilljar.com/accounts/login/?t=3hr3d22ksmque&d=2pcyc1shgvh7p&next=%2Fauth%2Fendpoint%2Flogin%2Fresult%3Fnext%3D%252F%26d%3D2pcyc1shgvh7p",[qt]:"https://www.zuora.com/fr/zuora-training/customers/",[Gt]:"https://accounts.skilljar.com/accounts/login/?t=3hr3d22ksmque&d=2pcyc1shgvh7p&next=%2Fauth%2Fendpoint%2Flogin%2Fresult%3Fnext%3D%252F%26d%3D2pcyc1shgvh7p",[Ht]:"https://www.zuora.com/fr/zuora-training/zuora-implementers/",[Lo]:"https://docs.zuora.com/en/release-notes/latest-release/ai-in-zuora/",[Oo]:"https://docs.zuora.com/en/basics/",[Mo]:"/api-references/quickstart-api/overview/",[Do]:"/api-references/api/overview/",[Zo]:"/sdk/sdk-quickstart-intro/",[eo]:"https://trust.zuora.com/",[oo]:"https://support.zuora.com/",[rn]:"http://community.zuora.com/",[ko]:"https://www.zuora.com/fr/about/team/",[zo]:"https://www.zuora.com/fr/about/news-press/",[Io]:"https://www.zuora.com/fr/careers/",[Co]:"https://www.zuora.com/about/environmental-social-governance/",[wt]:"https://www.zuora.com/fr/resources/blog/",[So]:"https://www.zuora.com/fr/about/contact/",[vo]:"https://www.zuora.com/fr/about/legal/",[ln]:"https://www.zuora.com/about/environmental-social-governance/",[pn]:"https://www.zuora.com/fr/press-release/zuora-partners-with-sovos-to-help-global-businesses-meet-e-invoicing-mandates/",[mn]:"/overview/",[wn]:"/docs/get-started/introduction/",[bn]:"/quickstart-api-reference/quickstart-api-intro/",[yn]:"/v1-api-reference/introduction/",[zn]:"/zephr-api-reference/zephr-api-introduction/",[Sn]:"/other-api/quickstart-api/overview/",[Rn]:"/quickstart-api-reference/quickstart-api-intro/",[Qo]:"https://www.zuora.com/fr/solutions/",[Yo]:"https://www.zuora.com/fr/solutions/monetize-usage/",[Jo]:"https://www.zuora.com/fr/solutions/zuora-copilot-ai-powered-billing/",[$i]:"https://www.zuora.com/fr/products/collections/",[Xo]:"https://www.zuora.com/fr/solutions/acquire-retain-subscribers/",[ei]:"https://www.zuora.com/fr/solutions/launch-ai-powered-paywalls/",[ti]:"https://www.zuora.com/fr/solutions/accelerate-offers-experiences-in-media/",[oi]:"https://www.zuora.com/fr/solutions/scale-revenue-accounting-with-automation/",[ii]:"https://www.zuora.com/fr/solutions/enable-revenue-growth/",[ni]:"https://www.zuora.com/fr/solutions/drive-revenue-by-moving-upmarket/",[ri]:"https://www.zuora.com/fr/solutions/ev-charging/",[si]:"https://www.zuora.com/fr/products/billing-software/pricing-and-packaging/",[li]:"https://www.zuora.com/fr/products/cpq-software/",[ci]:"https://www.zuora.com/fr/products/billing-software/order-management/",[ui]:"https://www.zuora.com/fr/products/billing-software/consumption-metering/",[di]:"https://www.zuora.com/fr/products/billing-software/e-invoicing-and-tax-compliance/",[hi]:"https://www.zuora.com/fr/products/zuora-platform/integration-hub/",[mi]:"https://www.zuora.com/fr/products/zuora-platform/extension-studio/",[gi]:"https://www.zuora.com/fr/products/payment-solutions/payment-coverage-and-gateway-routing/",[wi]:"https://www.zuora.com/fr/products/payment-solutions/payment-fraud-and-failures/",[vi]:"https://www.zuora.com/fr/products/zephr/ai-paywall/",[bi]:"https://www.zuora.com/fr/products/zephr/first-party-data-strategies/",[fi]:"https://www.zuora.com/fr/products/zephr/user-specific-personalization/",[yi]:"https://www.zuora.com/fr/products/zuora-platform/extension-studio/",[ki]:"https://www.zuora.com/fr/products/zuora-platform/analytics/",[zi]:"https://www.zuora.com/fr/products/zuora-platform/security/",[xi]:"https://www.zuora.com/fr/products/zuora-platform/integration-hub/",[Si]:"https://www.zuora.com/fr/products/zuora-platform/admin-command-center/",[Ii]:"https://www.zuora.com/fr/solutions/saas/",[Ei]:"https://www.zuora.com/fr/resources/filter/content_type/video/",[Ri]:"https://www.zuora.com/fr/subscribed/",[_i]:"https://www.zuora.com/fr/resources/filter/content_type/report/",[Ni]:"https://www.zuora.com/fr/resources/filter/content_type/podcast/",[Ti]:"https://www.zuora.com/fr/glossary/"},[Zn.JAPANESSE]:{[we]:"https://www.zuora.com/jp",[ve]:"/",[be]:"https://www.zuora.com/apps/newlogin.do",[fe]:"https://www.zuora.com/jp/talk-to-sales/",[ye]:"https://www.zuora.com/jp/resources/demo-on-demand/",[vt]:"https://www.zuora.com/jp/business-initiatives/",[Zt]:"https://www.zuora.com/jp/connect-plus-learn/",[Kt]:"https://www.zuora.com/jp/zuora-university/zuora-for-customers/",[Wt]:"https://docs.zuora.com/",[Yt]:"/",[Xt]:"https://www.zuora.com/jp/developer-center/api/",[to]:"https://docs.zuora.com/en/release-notes/latest-release/ai-in-zuora/",[io]:"https://trust.zuora.com/",[bo]:"https://www.zuora.com/jp/privacy-statement/",[fo]:"https://www.zuora.com/jp/terms-conditions/",[yo]:"https://www.zuora.com/jp/products/",[xo]:"https://www.zuora.com/jp/about/awards/",[Ce]:"https://www.zuora.com/jp/about/",[xe]:"https://www.zuora.com/jp/about/subscribed-institute/",[Ie]:"https://www.zuora.com/jp/modern-business/",[Ee]:"https://www.zuora.com/jp/our-customers/",[_e]:"https://www.zuora.com/jp/about/partners-ecosystem/",[ke]:"https://www.zuora.com/jp/journey-to-usership/",[Di]:"https://www.zuora.com/jp/resource/sei-report",[_o]:"https://www.zuora.com/jp/whats-new/",[Pe]:"https://www.zuora.com/jp/products/billing-software/",[Me]:"https://www.zuora.com/jp/products/cpq-software/",[De]:"https://www.zuora.com/jp/products/revenue/",[Be]:"https://www.zuora.com/jp/products/zuora-platform/",[Ue]:"https://www.zuora.com/jp/products/zuora-central-platform/connect-everything",[Fe]:"https://www.zuora.com/jp/products/zuora-central-platform/deploy-faster",[qe]:"https://www.zuora.com/jp/products/zuora-central-platform/remove-risk",[Ge]:"https://www.zuora.com/jp/products/zuora-central-platform/know-now",[He]:"https://www.zuora.com/jp/products/zuora-central-platform/transact-more",[Ke]:"https://www.zuora.com/jp/products/payment-solutions/",[We]:"https://www.zuora.com/jp/products/order-to-revenue/",[Ye]:"https://www.zuora.com/jp/products/zephr/",[Xe]:"https://www.zuora.com/jp/products/zephr/zephr-for-media",[et]:"https://www.zuora.com/jp/products/zephr/dynamic-offers",[tt]:"https://www.zuora.com/jp/products/zephr/user-specific-personalization",[ot]:"https://www.zuora.com/jp/products/identity-access-management",[it]:"https://www.zuora.com/jp/products/intelligent-paywall-solutions",[nt]:"https://www.zuora.com/jp/products/corporate-subscription-management",[rt]:"https://www.zuora.com/jp/products/first-party-data-strategies",[Ui]:"https://www.zuora.com/jp/resources/events/subscribed-connect2023-on-demand/",[at]:"https://www.zuora.com/jp/about/partners-ecosystem/",[lt]:"https://www.zuora.com/jp/about/partners/",[ut]:"https://www.zuora.com/jp/about/become-a-partner",[pt]:"https://partner.zuora.com/",[Hi]:"https://www.zuora.com/jp/resources/events/modern-accounting-summit-on-demand/",[Qi]:"https://www.zuora.com/jp/jp/resources/demystifying-consumption-based-pricing-on-demand/",[bt]:"https://www.zuora.com/jp/journey-to-usership/how-to-launch-a-new-subscription-offering/",[ft]:"https://www.zuora.com/jp/journey-to-usership/how-to-refresh-your-pricing-strategy",[yt]:"https://www.zuora.com/jp/journey-to-usership/how-to-adopt-usage-based-pricing",[kt]:"https://www.zuora.com/jp/journey-to-usership/how-to-tailor-offerings-for-international-markets",[zt]:"https://www.zuora.com/jp/journey-to-usership/how-to-expand-upmarket-or-downmarket",[xt]:"https://www.zuora.com/jp/journey-to-usership/how-to-reduce-time-to-close",[St]:"https://www.zuora.com/jp/journey-to-usership/how-to-execute-a-cross-sell-and-up-sell-strategy",[It]:"https://www.zuora.com/jp/journey-to-usership/how-to-minimize-involuntary-churn",[At]:"https://www.zuora.com/jp/journey-to-usership/business-initiatives/",[Lt]:"https://www.zuora.com/jp/solutions/manufacturing-iot/",[Ot]:"https://www.zuora.com/jp/industries/saas/",[Mt]:"https://www.zuora.com/jp/solutions/media-entertainment/",[Dt]:"https://www.zuora.com/jp/industries/startups/",[jo]:"https://www.zuora.com/jp/resources/filter/topic/automate-revenue-recognition/",[Uo]:"https://www.zuora.com/jp/resources/filter/topic/subscriber-growth-strategies/",[Fo]:"https://www.zuora.com/jp/resources/filter/topic/optimize-payment-operations/",[qo]:"https://www.zuora.com/jp/resources/topic/billing-and-payments/",[Go]:"https://www.zuora.com/jp/resources/topic/risk-and-compliance/",[Ho]:"https://www.zuora.com/jp/resources/topic/pricing-and-packaging/",[Ko]:"https://www.zuora.com/jp/resources/topic/operations-and-it/",[gt]:"https://www.zuora.com/jp/our-customers/case-studies/",[Vo]:"https://plus.zuora.com/plus",[Tt]:"https://www.zuora.com/jp/subscribed/",[Wo]:"https://www.zuora.com/jp/resources",[_t]:"https://www.zuora.com/jp/guides/",[Nt]:"https://www.zuora.com/jp/resource/content_type/webinar/",[Ct]:"https://www.zuora.com/jp/resource/content_type/ebook/",[Et]:"https://www.zuora.com/jp/resource/content_type/whitepaper/",[$t]:"https://www.zuora.com/jp/resource/content_type/datasheet/",[Pt]:"https://www.zuora.com/jp/resource/content_type/report-3rd-party/",[Rt]:"https://www.zuora.com/jp/resources/events/",[en]:"https://plus.zuora.com/plus",[no]:"https://community.zuora.com/",[No]:"https://community.zuora.com/ask-the-community",[Po]:"https://community.zuora.com/learners-lounge",[To]:"https://community.zuora.com/communities/community-home?communitykey=c91d3142-7e65-4715-9e11-7eb5c768c213",[Bt]:"https://www.zuora.com/jp/zuora-training",[Ut]:"https://www.zuora.com/jp/zuora-training/zuora-implementers/",[Ft]:"https://accounts.skilljar.com/accounts/login/?t=3hr3d22ksmque&d=2pcyc1shgvh7p&next=%2Fauth%2Fendpoint%2Flogin%2Fresult%3Fnext%3D%252F%26d%3D2pcyc1shgvh7p",[qt]:"https://www.zuora.com/jp/zuora-training/customers/",[Gt]:"https://accounts.skilljar.com/accounts/login/?t=3hr3d22ksmque&d=2pcyc1shgvh7p&next=%2Fauth%2Fendpoint%2Flogin%2Fresult%3Fnext%3D%252F%26d%3D2pcyc1shgvh7p",[Ht]:"https://www.zuora.com/jp/zuora-training/zuora-implementers/",[Lo]:"https://docs.zuora.com/en/release-notes/latest-release/ai-in-zuora/",[Oo]:"https://docs.zuora.com/en/basics/",[Mo]:"/api-references/quickstart-api/overview/",[Do]:"/api-references/api/overview/",[Zo]:"/sdk/sdk-quickstart-intro/",[eo]:"https://trust.zuora.com/",[oo]:"https://support.zuora.com/",[rn]:"http://community.zuora.com/",[ko]:"https://www.zuora.com/jp/about/team/",[zo]:"https://www.zuora.com/jp/about/news-press/",[Io]:"https://www.zuora.com/jp/careers/",[Co]:"https://www.zuora.com/about/environmental-social-governance/",[wt]:"https://www.zuora.com/jp/resources/blog/",[So]:"https://www.zuora.com/jp/about/contact/",[vo]:"https://www.zuora.com/jp/about/legal/",[ln]:"https://www.zuora.com/about/environmental-social-governance/",[pn]:"https://www.zuora.com/jp/press-release/zuora-partners-with-sovos-to-help-global-businesses-meet-e-invoicing-mandates/",[mn]:"/overview/",[wn]:"/docs/get-started/introduction/",[bn]:"/quickstart-api-reference/quickstart-api-intro/",[yn]:"/v1-api-reference/introduction/",[zn]:"/zephr-api-reference/zephr-api-introduction/",[Sn]:"/other-api/quickstart-api/overview/",[Rn]:"/quickstart-api-reference/quickstart-api-intro/",[Qo]:"https://www.zuora.com/jp/solutions/",[Yo]:"https://www.zuora.com/jp/solutions/monetize-usage/",[Jo]:"https://www.zuora.com/jp/solutions/zuora-copilot-ai-powered-billing/",[$i]:"https://www.zuora.com/jp/products/collections/",[Xo]:"https://www.zuora.com/jp/solutions/acquire-retain-subscribers/",[ei]:"https://www.zuora.com/jp/solutions/launch-ai-powered-paywalls/",[ti]:"https://www.zuora.com/jp/solutions/accelerate-offers-experiences-in-media",[oi]:"https://www.zuora.com/jp/solutions/scale-revenue-accounting-with-automation/",[ii]:"https://www.zuora.com/jp/solutions/enable-revenue-growth/",[ni]:"https://www.zuora.com/jp/solutions/drive-revenue-by-moving-upmarket/",[ri]:"https://www.zuora.com/jp/solutions/ev-charging/ ",[si]:"https://www.zuora.com/jp/products/billing-software/pricing-and-packaging",[li]:"https://www.zuora.com/jp/products/cpq-software/",[ci]:"https://www.zuora.com/jp/products/billing-software/order-management/",[ui]:"https://www.zuora.com/jp/products/billing-software/consumption-metering/",[di]:"https://www.zuora.com/jp/products/billing-software/e-invoicing-and-tax-compliance/",[hi]:"https://www.zuora.com/jp/products/zuora-platform/integration-hub/",[mi]:"https://www.zuora.com/jp/products/zuora-platform/extension-studio/",[gi]:"https://www.zuora.com/jp/products/payment-solutions/payment-coverage-and-gateway-routing/",[wi]:"https://www.zuora.com/jp/products/payment-solutions/payment-fraud-and-failures/",[vi]:"https://www.zuora.com/jp/products/zephr/ai-paywall/",[bi]:"https://www.zuora.com/jp/products/zephr/first-party-data-strategies/",[fi]:"https://www.zuora.com/jp/products/zephr/user-specific-personalization/",[yi]:"https://www.zuora.com/jp/products/zuora-platform/extension-studio/",[ki]:"https://www.zuora.com/jp/products/zuora-platform/analytics/",[zi]:"https://www.zuora.com/jp/products/zuora-platform/security/",[xi]:"https://www.zuora.com/jp/products/zuora-platform/integration-hub/",[Si]:"https://www.zuora.com/jp/products/zuora-platform/admin-command-center/",[Ii]:"https://www.zuora.com/jp/solutions/saas/",[Ei]:"https://www.zuora.com/jp/resources/filter/content_type/video/",[Ri]:"https://www.zuora.com/jp/subscribed/",[_i]:"https://www.zuora.com/jp/resources/filter/content_type/report/",[Ni]:"https://info.zuora.com/jp-events.html/",[Ti]:"https://www.zuora.com/jp/glossary/"}},Un={[Mi]:"https://nav-assets.zuora.life/img/feature-economy-index.webp",[ji]:"https://nav-assets.zuora.life/img/feature-subscribed-connect.webp",[Gi]:"https://nav-assets.zuora.life/img/feature-modern-accounting-summit.webp",[Wi]:"https://nav-assets.zuora.life/img/feature-Demystifying-Consumption-Based-Pricing.webp",[Xi]:"https://nav-assets.zuora.life/img/feature-zuora-plus.webp",[nn]:"https://nav-assets.zuora.life/img/feature-community.webp",[cn]:"https://nav-assets.zuora.life/img/feature-source-for-good.webp",[hn]:"https://nav-assets.zuora.life/img/feature-zuora-sovos.webp",API_REFERENCE_CARD_IMAGE:"https://nav-assets.zuora.life/img/feature-zuora-devcenter.webp"};var Fn=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};const qn=e=>{class t extends e{constructor(){super(...arguments),this.locale=this.getLocale(),this.computeDomain=e=>{const t=e.split("."),o=[];return o.push(t.slice(-1)),t.pop(),o.push(t.slice(-1)),o.reverse().join(".")},this.computeLink=e=>{if(!e)return"";const t=jn[this.locale],o=e,i=0===e.indexOf("http")?e:t[o];return i.startsWith("/")||!i.startsWith("http")?i:this.computeDomain(new URL(i).hostname)!==this.currentDomain?this.computeLinkForCrossDomain(i,this.crossDomainGA):i},this.computeLinkForCrossDomain=(e,t)=>`${e}${t?`${e.indexOf("?")>=0?"&":"?"}${t}`:""}`,this.computeSectionClass=e=>`${e.type} ${e.class||""}`,this.computeSubdomain=e=>e.split(".")[0],this.doTrackLink=(e,t)=>{var o;e.hasAttribute("data-tracking-ignore")||window.postMessage({message:"mega-menu:track",location:t,href:e.getAttribute("href"),labels:e.getAttribute("data-tracking-label")||(null===(o=e.textContent)||void 0===o?void 0:o.trim()),type:e.getAttribute("data-tracking-type")||"navigation"},"*")},this.crossDomainGA="",this.currentDomain=this.computeDomain(window.location.hostname),this.currentSubdomain=this.computeSubdomain(window.location.hostname)}doAddFontFontAwesome(){const e="wb-font-fontAwesome";if(!document.getElementById(e)){const t=document.createElement("script");t.id=e,t.setAttribute("crossorigin","anonymous"),t.src="https://kit.fontawesome.com/06239c7cb9.js",this.doAppendToHead(t)}}doAddFontMelody(){const e="wb-font-FoundersGrotesk";if(!document.getElementById(e)){const t=document.createElement("style");t.id=e,t.type="text/css",t.appendChild(document.createTextNode("\n          @font-face{\n            font-family:'Founders Grotesk';\n            src:url('https://nav-assets.zuora.life/fonts/FoundersGrotesk/founders-grotesk-regular.woff2') format('woff2');\n            font-weight:400;\n            font-style:normal;\n            font-display:swap\n          }\n          @font-face{\n            font-family:'Founders Grotesk';\n            src:url('https://nav-assets.zuora.life/fonts/FoundersGrotesk/founders-grotesk-medium.woff2') format('woff2');\n            font-weight:500;\n            font-style:normal;\n            font-display:swap\n          }\n          @font-face{\n            font-family:'Founders Grotesk';\n            src:url('https://nav-assets.zuora.life/fonts/FoundersGrotesk/founders-grotesk-semibold.woff2') format('woff2');\n            font-weight:600;\n            font-style:normal;\n            font-display:swap\n          }\n          @font-face{\n            font-family:'Founders Grotesk Mono';\n            src:url('https://nav-assets.zuora.life/fonts/FoundersGrotesk/founders-grotesk-mono-medium.woff2') format('woff2');\n            font-weight:500;\n            font-style:normal;\n            font-display:swap\n          }\n        ")),this.doAppendToHead(t)}}doAppendToHead(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}getGoogleAnalyticsData(){const e={linkerParam:""};try{e.linkerParam=window.ga.getAll()[0].get("linkerParam")}catch(t){e.linkerParam=""}return e}getText(e){try{if(!e)return"";const t=Bn[this.locale]||Bn[Zn.ENGLISH];return t[e]}catch(t){return"Text not found: "+e}}getLocale(){let e=Zn.ENGLISH;const t=document.getElementsByTagName("html")[0].getAttribute("lang");if(t){const o=t.split("-")[0].toLowerCase();Object.keys(Zn).forEach((t=>{Zn[t]===o&&(e=o)}))}return e}onConstruct(){document.getElementsByTagName("body")[0].classList.add("wc-loaded")}}return Fn([ce()],t.prototype,"locale",void 0),Fn([ce()],t.prototype,"crossDomainGA",void 0),Fn([ce()],t.prototype,"currentDomain",void 0),Fn([ce()],t.prototype,"currentSubdomain",void 0),t};class Gn{constructor(e){this.classes={mobile:!1,"tablet-portrait":!1,"tablet-portrait-up":!1,"tablet-landscape":!1,"tablet-landscape-up":!1,desktop:!1,"desktop-up":!1,"desktop-large":!1},this.width=window.innerWidth,this._computeBreakpointClass=()=>{this.classes.mobile=this.width<Ln,this.classes["tablet-portrait"]=this.width>=Ln&&this.width<On,this.classes["tablet-portrait-up"]=this.width>=Ln,this.classes["tablet-landscape"]=this.width>=On&&this.width<Mn,this.classes["tablet-landscape-up"]=this.width>=On,this.classes.desktop=this.width>=Mn&&this.width<Dn,this.classes["desktop-up"]=this.width>=Mn,this.classes["desktop-large"]=this.width>=Dn},this._onWindowResize=()=>{this.width=window.innerWidth,this._computeBreakpointClass(),this.host.requestUpdate()},this.host=e,this.host.addController(this)}hostConnected(){window.addEventListener("resize",this._onWindowResize),this._onWindowResize()}hostDisconnected(){window.removeEventListener("resize",this._onWindowResize)}}const Hn=r`
    :host,
    :root {
        --zuora-generic-header-color: #888888;
        --zuora-generic-header-height: 60px;
        --zuora-generic-header-max-width: 1440px;
        --zuora-generic-header-title-color: #000000;
        --zuora-generic-p-color: #838383;
        --zuora-gray-background-color: #F3F4F6;

        --zuora-card-background-dark: #041B2E;
        --zuora-card-background-light: #EBD5BA;
        --zuora-card-text-color-dark: #FFF;
        --zuora-card-text-color-light: #000;


        --zuora-header-background-color: white;
        --zuora-header-link-color: #000000;
        --zuora-header-arrow-color: #0a0202;
        --zuora-header-arrow-size: 5px;

        --zuora-icon-color: #0D4AC3;

        --zuora-header-hover-link-color: #333;
        --zuora-header-hover-arrow-color: #000000;

        --zuora-header-dark-grey: #F1F5F8;
        --zuora-header-border-color: #D2DEE7;
        --zuora-header-background-color: #FFF;

        --zuora-generic-border-color: #edf2f6;

        --zuora-font-primary: 'Founders Grotesk', Helvitica, sans-serif;
        --zuora-font-primary-text: 'Founders Grotesk Text', Helvitica, sans-serif;
        --zuora-font-secondary: 'IBM Plex Serif', Helvitica, sans-serif;
    }

    :host {
        --color-forest: #103426;
        --color-teal: #00d2b9;
        --color-cloud: #f1f5f8;
        --color-silver: #d2dee7;
        --color-white: #fff;
        --color-black: #000;
        --color-navy: #041b2e;
        --color-midnight: #373057;
        --color-merlot: #68003b;
        --color-clay: #b36526;
        --color-blue: #0d4ac2;
        --color-purple: #916fef;
        --color-red: #ff4635;
        --color-yellow: #e0b642;
        --color-mint: #b8efe6;
        --color-sky: #b0ceef;
        --color-pink: #f6c7e9;
        --color-sunburn: #fbd6d3;
        --color-sand: #ebd5ba;
        --color-transparent: transparent;
    }

    .zuora-border {
        border-radius: 5px;
        border: 1px solid var(--zuora-header-border-color);
        background: var(--zuora-header-background-color);
    }

    h1, h2, h3, h4, h5, h6,
    p, label, span, a, button,
    input, select, textarea {
        font-family: 'Founders Grotesk', sans-serif;
    }

    .subdomain-developer h1, .subdomain-preview h1,
    .subdomain-developer h2, .subdomain-preview h2,
    .subdomain-developer h3, .subdomain-preview h3,
    .subdomain-developer h4, .subdomain-preview h4,
    .subdomain-developer h5, .subdomain-preview h5,
    .subdomain-developer h6, .subdomain-preview h6,
    .subdomain-developer p, .subdomain-preview p,
    .subdomain-developer label, .subdomain-preview label,
    .subdomain-developer span, .subdomain-preview span,
    .subdomain-developer a, .subdomain-preview a,
    .subdomain-developer button, .subdomain-preview button,
    .subdomain-developer input, .subdomain-preview input,
    .subdomain-developer select, .subdomain-preview select,
    .subdomain-developer textarea, .subdomain-preview textarea {
        font-family: -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important;
    }

    .subdomain-developer, .subdomain-preview {
        --zuora-generic-header-max-width: 100%;
    }


    .zuora-font-title {
        color: var(--zuora-generic-header-title-color);
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
    }

    .subdomain-developer .zuora-font-title, .subdomain-preview .zuora-font-title {
        font-size: 14px;
        font-weight: 600;
    }

    .zuora-font-description {
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        padding: 10px 0px 0px;
        color: var(--zuora-generic-header-title-color);
    }

    .zuora-font-link {
        color: var(--zuora-generic-header-title-color);
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
    }

    .zuora-font-icon {
        font-family: 'Font Awesome 6 Pro';
        color: var(--zuora-generic-header-title-color, #000);
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 900;
        line-height: 30px;
    }

    /* small */
    @media only screen and (max-width: 899px) {
        .zuora-font-title,
        .zuora-font-link {
            color: var(--zuora-card-background-dark);
            display: block;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.43;
        }

        .zuora-font-description {
            display: none;
        }

        .sm-bold {
            font-weight: 500 !important;
        }
    }
`,Kn=r`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .mobile .hide-for-mobile,
  .tablet-portrait .hide-for-tablet-portrait,
  .tablet-portrait-up .hide-for-tablet-portrait-up,
  .tablet-landscape .hide-for-tablet-landscape,
  .tablet-landscape-up .hide-for-tablet-landscape-up,
  .desktop .hide-for-desktop,
  .desktop-up .hide-for-desktop-up,
  .desktop-large .hide-for-desktop-large {
    display: none !important;
  }
`,Vn=r`
    .isInvisible {
        opacity: 0;
        visibility: hidden;
        height: 0;
        width: 0;
    }
`,Wn=r`
    .font-header-x-sml {
        font-family: var(--zuora-font-primary);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
    }

    .font-body-sml {
        font-family: var(--zuora-font-secondary);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }

    .font-caption-medium {
        font-family: var(--zuora-font-primary-text);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
    }

    .font-caption-small {
        font-family: var(--zuora-font-primary-text);
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 18px */
    }

    @media screen and (min-width: 1024px) {
        .font-caption-medium {
            color: var(--zuora-header-link-color);
            font-style: normal;
            font-weight: 500;
        }
    }
`,Qn=r`
    .Button {
        display: flex;
        justify-content: center;
        padding: 7px 15px;
        text-decoration: none;
    }

    .Button--black {
        background-color: var(--color-black);
        color: var(--color-white);
        border-radius: 1000px;
    }

    .Button--black:hover {
        background-color: #374151;
    }

    .Button--teal {
        background-color: var(--color-teal);
        border-radius: 1000px;
    }

    .Button--teal:hover {
        background-color: #00EBCF;
    }
`,Yn=r`
    :host,
    :root {
        --zuora-card-background-dark:#041B2E;
        --zuora-card-background-light:#EBD5BA;   
    }
    .card {
      background-color: var(--zuora-card-background-light);
      display: flex;
      min-height: 400px;
      padding: 0;
      width: 100%;
    }
    .card.dark {
        background-color: var(--zuora-card-background-dark);
    }
`;var Jn=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Xn=class extends(qn(ie)){constructor(){super(),this.trackingLabel="",this.title="",this.link="",this.linkLabel="",this.description="",this.imgSrc="",this.dark=!1,this.responsiveController=new Gn(this),this.doAddFontMelody()}render(){const e={...this.responsiveController.classes,dark:this.dark};return M`
        <section class="${ge(e)}">
            <div class="border">
            <a href="${this.computeLink(this.link)}" data-tracking-label="${this.trackingLabel}|${this.title}">
                <figure>
                <img src="${this.imgSrc}" />
                </figure>
                <h2 class="header">${this.title}</h2>
                <p>${this.description}</p>
                <div class="cta-container">
                <span class="cta">${this.linkLabel}</span>
                </div>
            </a>
            </div>
      </section>`}};Xn.styles=[Kn,Hn,Yn],Jn([le({type:String})],Xn.prototype,"trackingLabel",void 0),Jn([le({type:String})],Xn.prototype,"title",void 0),Jn([le({type:String})],Xn.prototype,"link",void 0),Jn([le({type:String})],Xn.prototype,"linkLabel",void 0),Jn([le({type:String})],Xn.prototype,"description",void 0),Jn([le({type:String})],Xn.prototype,"imgSrc",void 0),Jn([le({type:Boolean})],Xn.prototype,"dark",void 0),Xn=Jn([re("wc-mega-card")],Xn);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class er extends me{constructor(e){if(super(e),this.et=Z,e.type!==pe)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Z||null==e)return this.ft=void 0,this.et=e;if(e===D)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}er.directiveName="unsafeHTML",er.resultType=1;const tr=he(er),or=r`
  :host,
  :root {
    --zuora-generic-font-color: #00e8c3;

    --zuora-footer-background-color: #103425;
    --zuora-footer-link-color: #e5e5e5;
    --zuora-footer-arrow-color: #ccc;
    --zuora-footer-arrow-size: 5px;

    --zuora-footer-hover-arrow-color: #384b5d;
  }

  .icon {
    font-family: 'Font Awesome 6 Pro';
    font-style: normal;
    font-weight: 100;
  }
  .icon-brand {
    font-family: 'Font Awesome 6 Brands';
  }

  footer {
    background-color: var(--zuora-footer-background-color);
    color: var(--zuora-generic-font-color);
    font-family: 'Founders Grotesk', sans-serif;
  }
  .width-container {
    margin: 0 auto;
    max-width: 1440px;
  }
  .spacing-container {
    padding: 0 30px;
  }
  .layout {
    padding: 70px 0 0;
  }
  a {
    color: var(--zuora-footer-link-color);
    display: block;
    font-size: 14px;
    letter-spacing: .5px;
    line-height: 1.4;
    padding-bottom: 10px;
    text-decoration: none;
  }

  .menu.item-count-1 .section .header {
    display: none;
  }

  section.top {
    padding: 0 0 25px 0;
  }
  section.top .spacing-container {
    max-width: 450px;
  }
  section.top .logo {
    filter: invert(-1);
  }
  section.top .legend {
    font-size: 14px;
    line-height: 1.43;
    padding: 44px 0 18px 0;
  }
  section.top .form {
    padding: 0 0 40px 0;
  }

  section.bottom {
    border-top: 1px solid rgb(229, 229, 229, 0.5);
  }
  section.bottom .change-region {
    color: white;
    padding: 10px 0;
    position: relative;
  }
  section.bottom ul.nav {
    color: var(--zuora-footer-link-color);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    font-size: 12px;
    line-height: 2;
  }
  section.bottom ul li,
  section.bottom ul li a {
    font-size: inherit;
    letter-spacing: .5px;
    white-space: nowrap;
  }
  section.bottom ul li ::slotted(*) {
    cursor: pointer;
  }
  section.bottom .change-region .cta {
    cursor: pointer;
  }
  section.bottom .change-region .icon.globe {
    padding: 0 5px 0 0;
  }

  section.bottom .change-region .tooltip {
    background: white;
    border-radius: 5px;
    bottom: 50px;
    left: -15px;
    opacity: 0;
    position: absolute;
    transition: all 0.4s ease 0s;
    visibility: hidden;
  }
  section.bottom .change-region:hover .tooltip,
  section.bottom .change-region:focus .tooltip {
    opacity: 1;
    visibility: visible
  }
  section.bottom .change-region .tooltip:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 15px;
    border-top: 10px solid black;
    border-top-color: inherit;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
  section.bottom .change-region ul {
    border-radius: 5px;
    padding: 10px;
  }
  section.bottom .change-region ul li a {
    align-items: center;
    color: #041b2e;
    display: flex;
  }
  section.bottom .change-region ul li a span {
    padding: 0 20px 0 10px;
  }

  .social ul {
    display: flex;
  }
  .social li {
    padding: 0 15px 0 0;
  }
  .social ul .icon{
    color: #00d2b9;
    font-size: 18px;
  }
  .social ul svg path{
    fill: #00d2b9;
  }

  /* small */
  @media only screen and (max-width:899px) {
    .spacing-container {
      padding: 0 20px;
    }

    .arrow {
      margin: 0 0 0 5px;
      height: var(--zuora-footer-arrow-size);
      float: right;
      position: relative;
      top: 5px;
      transform: rotate(45deg);
      transition: all 0.5s;
      width: var(--zuora-footer-arrow-size);
    }

    .arrow::after {
      border: 2px solid var(--zuora-footer-arrow-color);
      border-width: 0 2px 2px 0;
      content: "";
      display: inline-block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    nav .spacing-container {
      --zuora-generic-spacing-sides: 20px;
      padding: 0;
    }
    nav .menu {
      border-top: 1px solid #314353;
    }
    nav .menu > .header {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.43;
      padding: 10px var(--zuora-generic-spacing-sides);
    }

    nav .menu > .section {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: all 0.4s ease 0s;
      visibility: hidden;
    }
    nav .menu.open > .header {
      background-color: var(--zuora-footer-background-color);
    }
    nav .menu.open .arrow {
      --zuora-header-arrow-color: var(--zuora-footer-hover-arrow-color);
      top: 8px;
      transform: rotate(225deg);
    }
    nav .menu.open > .section {
      max-height: 500px;
      opacity: 1;
      visibility: visible
    }
    nav .menu > .section .header {
      border: 1px solid #314353;
      border-right: 0 none;
      border-left: 0 none;
      font-size: 13px;
      font-weight: 500;
      padding: 4px var(--zuora-generic-spacing-sides);
    }
    nav .menu > .section .header.white-header {
      color: white;
      padding-left:0;
    }
    nav .menu > .section a > .header {
      border: none;
    }
    nav .menu > .section a {
      font-size: 14px;
      line-height: 1.43;
      padding: 10px var(--zuora-generic-spacing-sides);
    }

    section.bottom .change-region {
      display: inline-block;
    }
    section.bottom ul.nav {
      grid-template-columns: repeat(2, min-content);
      padding: 5px 0 25px 0;
    }
    section.bottom ul.nav li {
      padding: 0 20px 0 0;
    }
  }

  /* medium-up */
  @media only screen and (min-width:900px) {
    nav ul.main {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(4, 1fr);
    }
    nav .menu > .header {
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      padding: 20px 0 10px 0;
    }
    nav .section {
      padding: 0 0 0 0;
    }
    nav .section  h3.header {
      font-size: 14px;
      font-weight: 600;
      line-height: 2;
    }
    nav .section > .header {
      padding-bottom: 10px;
    }
    nav .section.item-count-0 > a {
      padding-bottom:0;
    }
    nav .section > .header.white-header {
      color: white;
    }

    nav .section > a.chevron-right-container {
      display: flex;
      gap: 10px;
    }
    .chevron-right.arrow {
      transform: rotate(316deg) !important;
      margin: 0 5px 0 0;
    }

    section.bottom {
      margin-top: 50px;
    }
    section.bottom .spacing-container {
      display: grid;
      grid-template-columns: auto min-content;
    }
    section.bottom .change-region-container {
      align-items: center;
      display: flex;
    }
    section.bottom ul.nav li {
      padding: 15px 0 15px 30px;
    }
    section.bottom ul.nav li:first-child {
      padding-left: 0;
    }
  }

  /* large */
  @media only screen and (min-width:1200px) {
    .width-container-large {
      display: grid;
      grid-template-columns: min-content auto;
      max-width: 1440px;
      margin: 0 auto;
    }
    section.bottom {
      grid-area: 2/1/2/3;
    }
    section.top {
      min-width: 450px;
    }
  }

  footer:not(.www-zuora-com) .legend {
    display: none;
  }
  .copyright{
    padding:11px 0px 15px 30px !important;
  }
`;class ir{static hideNonWPEngineFooterForms(){document.addEventListener("DOMContentLoaded",(function(){if(!document.body.classList.contains("is-WPEngineSite")){document.querySelectorAll('#mega-footer .form, #mega-footer [slot="subscribe"],wc-mega-footer .form, wc-mega-footer [slot="subscribe"], #FOOTER [slot="subscribe"]').forEach((e=>{e instanceof HTMLElement&&(e.style.display="none")}))}}))}}const nr={labels:[{id:"change-region",title:Ao},{id:"newsletter-legend",title:Eo}],links:[{id:"home",link:we,track:{label:"",type:"logo"},title:""},{id:"legal",link:vo,track:{label:vo,type:"cta"},title:vo},{id:"privacy-statement",link:bo,track:{label:bo,type:"cta"},title:bo},{id:"terms-and-conditions",link:fo,track:{label:fo,type:"cta"},title:fo}],columns:[{column:[{title:co,sections:[{title:_o,link:_o,links:[]},{title:Pe,class:"white-header",link:Pe,links:[]},{title:Ke,class:"white-header",link:Ke,links:[]},{title:De,class:"white-header",link:De,links:[]},{title:Le,class:"white-header",link:Me,links:[]},{title:Ye,class:"white-header",link:Ye,links:[]},{title:Be,class:"white-header",link:Be,links:[]},{title:We,class:"white-header",link:We,links:[]},{title:yo,class:"white-header",link:yo,links:[]}]}]},{column:[{title:$o,sections:[{title:so,links:[{link:jo,title:jo},{link:Uo,title:Uo},{link:Fo,title:Fo},{link:qo,title:qo},{link:Go,title:Go},{link:Ho,title:Ho},{link:Ko,title:Ko},{link:gt,title:gt},{link:Vo,title:Vo},{link:Tt,title:Tt},{link:Wo,title:Wo}]},{title:po,links:[{link:Lt,title:Lt},{link:Ot,title:Ot},{link:Mt,title:Mt}]}]}]},{column:[{title:mo,sections:[{title:Zt,links:[{link:no,title:no},{link:Bt,title:Bt},{link:Ht,title:Ht},{link:Kt,title:Kt}]},{title:wo,links:[{link:Wt,title:Wt},{link:Yt,title:Yt},{link:eo,title:eo},{link:to,title:to},{link:oo,title:oo}]}]}]},{column:[{title:_e,sections:[{links:[{link:at,title:at},{link:lt,title:lt},{link:ut,title:ut},{link:pt,title:pt}]}]},{title:ao,sections:[{title:so,links:[{link:xe,title:xe},{link:_e,title:_e},{link:Ee,title:Ee},{link:Ie,title:Ie},{link:ke,title:ke}]}]},{title:Ro,sections:[{title:so,links:[{link:Ce,title:Ce},{link:Rt,title:Rt},{link:ko,title:ko},{link:zo,title:zo},{link:Io,title:Io},{link:Co,title:Co},{link:wt,title:wt},{link:So,title:So}]}]}]}]},rr={labels:[{id:"change-region",title:Ao},{id:"newsletter-legend",title:Eo}],links:[{id:"home",link:we,track:{label:"",type:"logo"},title:""},{id:"legal",link:vo,track:{label:vo,type:"cta"},title:vo},{id:"privacy-statement",link:bo,track:{label:bo,type:"cta"},title:bo},{id:"terms-and-conditions",link:fo,track:{label:fo,type:"cta"},title:fo}],columns:[{column:[{title:co,sections:[{title:Pe,link:Pe,links:[{title:Ho,link:si},{title:li,link:li},{title:ci,link:ci},{title:ui,link:ui},{title:di,link:di},{title:pi,link:Ke},{title:hi,link:hi},{title:mi,link:mi}]},{title:Ke,link:Ke,links:[{title:gi,link:gi},{title:wi,link:wi}]},{title:De,class:"white-header",link:De,links:[]},{title:Ye,class:"white-header",link:Ye,links:[{title:vi,link:vi},{title:bi,link:bi},{title:fi,link:fi}]},{title:Be,class:"white-header",link:Be,links:[{title:yi,link:yi},{title:ki,link:ki},{title:zi,link:zi},{title:xi,link:xi},{title:Si,link:Si}]},{title:$i,link:$i,links:[]}]}]},{column:[{title:$o,sections:[{title:Qo,links:[{title:Yo,link:Yo},{title:Jo,link:Jo},{title:Xo,link:Xo},{title:ei,link:ei},{title:ti,link:ti},{title:oi,link:oi},{title:ii,link:ii},{title:ni,link:ni},{title:ri,link:ri},{title:Wo,link:Qo}]},{title:ai,links:[{title:Ii,link:Ii},{title:Lt,link:Lt},{title:Mt,link:Mt}]}]}]},{column:[{title:uo,sections:[{title:Ai,links:[{title:gt,link:gt},{title:Ei,link:Ei},{title:Ri,link:Ri},{title:Ti,link:Ti},{title:_t,link:_t},{title:_i,link:_i},{title:Rt,link:Rt},{title:Wo,link:Wo}]},{title:mo,links:[{title:Wt,link:Wt},{title:Yt,link:Yt},{title:no,link:no},{title:Bt,link:Bt},{title:oo,link:oo}]}]}]},{column:[{title:_e,sections:[{links:[{link:at,title:at},{link:lt,title:lt},{link:ut,title:ut},{link:pt,title:pt}]}]},{title:ao,sections:[{title:so,links:[{link:xe,title:xe},{link:_e,title:_e},{link:Ee,title:Ee},{link:Ie,title:Ie},{link:ke,title:ke}]}]},{title:Ro,sections:[{title:so,links:[{link:Ce,title:Ce},{link:Rt,title:Rt},{link:ko,title:ko},{link:zo,title:zo},{link:Io,title:Io},{link:Co,title:Co},{link:wt,title:wt},{link:So,title:So},{link:xo,title:xo}]}]}]}]};var ar=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let sr=class extends(qn(ie)){constructor(){super(),this.labels={"change-region":"","newsletter-legend":""},this._createFontStyle=()=>{this.doAddFontFontAwesome(),this.doAddFontMelody();const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode("\n          footer#mega-footer {\n            display: none !important\n          }\n          .wc-loaded .subscribed-email form {\n            background: none !important;\n            box-shadow: none !important;\n            display: grid;\n            grid-template-columns: 1fr min-content;\n            padding: 0;\n            position: relative;\n          }\n          .wc-loaded .subscribed-email form .mktoFormRow + .mktoFormRow {\n            display: none;\n          }\n          .wc-loaded .subscribed-email form label {\n            display: none;\n          }\n          .wc-loaded .subscribed-email input {\n            background-color: rgba(255, 255, 255, 0.15) !important;\n            border: 0 !important;\n            border-radius: 30px !important;\n            color: white;\n            font-size: 14px !important;\n            margin: 0 !important;\n            padding: 10px 16px !important;\n          }\n          @media only screen and (min-width:1200px) {\n            .wc-loaded .subscribed-email input {\n              width: 275px !important;\n            }\n          }\n          .wc-loaded .subscribed-email input::placeholder {\n            color: #b0b0b0;\n          }\n          .wc-loaded .subscribed-email .mktoError {\n            left: 0px !important;\n            top: 45px !important;\n          }\n          .wc-loaded .subscribed-email #ValidMsgEmail {\n            color: #FF6B00 !important;\n            font-size: 13px !important;\n          }\n          .wc-loaded .subscribed-email form button {\n            height: 0;\n            padding: 0 !important;\n            visibility: hidden;\n          }\n          .wc-loaded .subscribed-email button:after {\n            background-color: #00d2b9;\n            border-radius: 20px;\n            content: 'Subscribe';\n            color: #171717;\n            font-size: 14px;\n            padding: 10px 16px;\n            position: relative;\n            top: -40px;\n            right: 0;\n            text-transform: capitalize;\n            visibility: visible;\n          }\n          .wc-loaded #footer-form-secondary {\n            border-radius: 5px;\n            border: solid 2px #00d2b9;\n            color: #00d2b9;\n            padding: 14px 11px 14px 14px !important;\n          }\n          .wc-loaded #footer-form-secondary p {\n            font-size: 24px;\n            font-weight: 500;\n            margin: 0 0 10px 0;\n          }\n          .wc-loaded #footer-form-secondary p + p {\n            color: white;\n            font-size: 14px;\n            font-weight: 400;\n            line-height: 1.43;\n            margin: 0;\n          }\n          .wc-loaded #q-messenger-frame {\n            bottom: 16px !important;\n          }\n          @media only screen and (min-width: 900px) {\n            .wc-loaded #q-messenger-frame {\n              bottom: 55px !important;\n            }\n          }\n          .wc-loaded #q-messenger-frame.maximized {\n            bottom: 0 !important;\n          }\n\n          .wc-loaded #teconsent a {\n            color: var(--zuora-footer-link-color);\n            font-weight: 400;\n          }\n    ")),this.doAppendToHead(e)},this._createDomInnerContent=e=>e.map((e=>M`
                <li class="column">
                    <ul>
                        ${M`${e.column.map((e=>this._createMenuColumn(e)))}`}
                    </ul>
                </li>
            `)),this._createMenuColumn=e=>M`
            <li @click="${()=>{this._onClickMobileMenu({id:e.title})}}"
                class="menu item-count-${e.sections.length}"
                data-menu-id="${e.title}">

                <h2 class="header">
                    ${this.getText(e.title)}
                    <span class="arrow"></span>
                </h2>

                ${M`${e.sections.map((t=>this._createSection(e.title,t)))}`}
            </li>
        `,this._createSection=(e,t)=>M`
            <div class="section item-count-${t.links.length}">
                ${this._createSectionHeader(t,e)}

                ${M`${t.links.map((o=>this._createLink(o,`${this.getText(e)}|${this.getText(t.title)}|${this.getText(o.title)}`)))}`}

            </div>
        `,this._createSectionHeader=(e,t)=>{if(e.title){const o=M`<h3 class="header ${e.class}">${this.getText(e.title)}</h3>`;return e.link?M`<a href="${this.computeLink(e.link)}"
                        data-tracking-label="${this.getText(t)}|${this.getText(e.title)}">${o}</a>`:o}return Z},this._createLink=(e,t)=>{const o=this.getText(e.title);return"chevron-right"===e.type?M`
                <a href="${this.computeLink(e.link)}" data-tracking-label="${t}"
                   class="chevron-right-container">
                    <span class="icon chevron-right">ï”</span>
                    ${o}
                </a>
            `:M`
            <a href="${this.computeLink(e.link)}" data-tracking-label="${t}">
                ${o}
            </a>
        `},this._getHomepageLink=e=>e.filter((e=>"home"===e.id))[0].link,this._getMenuData=()=>nr,this._onBeforeRender=()=>{this.crossDomainGA=this.getGoogleAnalyticsData().linkerParam},this._onClickMobileMenu=({id:e})=>{var t,o;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`[data-menu-id='${e}']`),n=null==i?void 0:i.classList.contains("open");null===(o=this.shadowRoot)||void 0===o||o.querySelectorAll("[data-menu-id]").forEach((e=>{null==e||e.classList.remove("open")})),n||null==i||i.classList.add("open")},this._createFontStyle(),this.onConstruct(),ir.hideNonWPEngineFooterForms()}_processLabels(e){e.forEach((e=>{void 0!==typeof this.labels[e.id]&&(this.labels[e.id]=this.getText(e.title))}))}_renderBottomLinks(e){return e.filter((e=>"home"!==e.id)).map((e=>M`
                <li>
                    <a href="${this.computeLink(`${e.link}`)}"
                       data-tracking-label="${this.getText(e.track.label)}"
                       data-tracking-type="${e.track.type}"
                    >${this.getText(e.title)}</a>
                </li>
            `))}_renderRegionalLinks(){return M`
            <div class="change-region-container">
                <div class="change-region">
                    <div class="cta" role="button">
                        <i class="icon globe">ï‚¬</i>
                        ${this.labels["change-region"]}
                    </div>
                    <div class="tooltip" tabindex="-1">
                        <ul>
                            <li>
                                <a
                                    data-tracking-label="Change region|United States"
                                    data-tracking-type="cta"
                                    href="${this.computeLink("https://www.zuora.com")}">
                                    <img src="https://nav-assets.zuora.life/img/flag-usa.svg" />
                                    <span>United States</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    data-tracking-label="Change region|Germany"
                                    data-tracking-type="cta"
                                    href="${this.computeLink("https://www.zuora.com/de/")}">
                                    <img src="https://nav-assets.zuora.life/img/flag-germany.svg" />
                                    <span>Germany</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    data-tracking-label="Change region|France"
                                    data-tracking-type="cta"
                                    href="${this.computeLink("https://www.zuora.com/fr/")}">
                                    <img src="https://nav-assets.zuora.life/img/flag-france.svg" />
                                    <span>France</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    data-tracking-label="Change region|Japan"
                                    data-tracking-type="cta"
                                    href="${this.computeLink("https://www.zuora.com/jp/")}">
                                    <img src="https://nav-assets.zuora.life/img/flag-japan.svg" />
                                    <span>Japan</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `}_renderSocialLinks(){return M`
            <div class="social">
                <ul>
                    <li>
                        <a href="${this.computeLink("https://www.facebook.com/zuora/")}"
                           target="_blank"
                           data-tracking-label="Facebook"
                           data-tracking-type="cta"
                        >
                            <i class="icon icon-brand">ï‚‚</i>
                        </a>
                    </li>
                    <li>
                        <a href="${this.computeLink("https://www.linkedin.com/company/zuora/")}"
                           target="_blank"
                           data-tracking-label="Linkedin"
                           data-tracking-type="cta"
                        >
                            <i class="icon icon-brand">ï‚Œ</i>
                        </a>
                    </li>
                    <li>
                        <a href="${this.computeLink("https://twitter.com/zuora")}"
                           target="_blank"
                           data-tracking-label="Twitter"
                           data-tracking-type="cta"
                        >
                            <i class="icon icon-brand">î˜›</i>
                        </a>
                    </li>
                    <li>
                        <a href="${this.computeLink("https://www.instagram.com/zuoraglobal/")}"
                           target="_blank"
                           data-tracking-label="Instagram"
                           data-tracking-type="cta"
                        >
                            <i class="icon icon-brand">ï…­</i>
                        </a>
                    </li>
                </ul>
            </div>
        `}firstUpdated(){var e;null===(e=this.shadowRoot)||void 0===e||e.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(()=>{this.doTrackLink(e,"footer")}))})),setTimeout((()=>{this._onBeforeRender()}),1e3)}isRedesignSite(){return["www","localhost","zuorastg","zuoradev"].includes(this.currentSubdomain)}render(){const e={[`locale-${this.locale}`]:!0,[`${window.location.hostname.split(".").join("-")}`]:!0};let t=this._getMenuData();const o=this._getHomepageLink(t.links);return this._processLabels(t.labels),this.isRedesignSite()&&(t=rr),M`
            <footer id="mega-footer"
                    class="${ge(e)}"
            >
                <div class="layout">
                    <div class="width-container-large">
                        <section class="top">
                            <div class="width-container">
                                <div class="spacing-container">
                                    <div class="logo">
                                        <a href="${this.computeLink(o)}" data-tracking-type="logo"
                                           data-tracking-label="Zuora Home">
                                            <img src="https://nav-assets.zuora.life/img/zuora-wordmark-light-v2.svg"
                                                 alt="Zuora logo in white"
                                                 width="130" />
                                        </a>
                                    </div>

                                    <div class="legend">
                                        ${tr(this.labels["newsletter-legend"])}
                                    </div>

                                    <div class="form">
                                        <slot name="subscribe"></slot>
                                    </div>

                                    ${this._renderSocialLinks()}
                                </div>
                            </div>
                        </section>
                        <nav role="navigation">
                            <div class="width-container">
                                <div class="spacing-container">

                                    <ul class="main">
                                        ${this._createDomInnerContent(t.columns)}
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                    <section class="bottom">
                        <div class="width-container">
                            <div class="spacing-container">

                                ${this._renderRegionalLinks()}

                                <ul class="nav">
                                    ${this._renderBottomLinks(t.links)}

                                    <li>
                                        <slot name="cookies"></slot>
                                    </li>

                                    <li class="copyright">
                                        &copy; 2025 Zuora Inc.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        `}};sr.styles=[Kn,or],ar([ce()],sr.prototype,"labels",void 0),sr=ar([re("wc-mega-footer")],sr);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lr=e=>null!=e?e:Z,cr=r`
  ::-webkit-scrollbar {
    width: 0;
  }

  .hide {
    display: none !important;
  }
  a {
    text-decoration: none;
  }

  .icon {
    font-family: "Font Awesome 6 Pro";
    font-style: normal;
    font-weight: 100;
    line-height: 1;
  }
  .icon-kit {
    font-family: "Font Awesome Kit";
  }
  .icon-kit:before,
  .icon-kit::before {
    content: var(--zuora-icon-content);
  }

  header {
    background-color: var(--zuora-header-background-color);
    border-bottom: 1px solid #ccc;
    font-family: "Founders Grotesk", sans-serif;
    height: var(--zuora-generic-header-height);
    left: 0;
    position: fixed;
    top: var(--zuora-header-position-top);
    width: 100vw;
  }
  header > nav {
    margin: 0 auto;
    max-width: var(--zuora-generic-header-max-width);
    position: relative;
  }

  header > nav > ul {
    list-style-type: none;
    padding: 0px;
    position: relative;
  }

  header > nav > ul > li {
    display: inline-block;
    padding: 0;
    transition: background 0.5s ease-in-out;
  }

  header > nav > ul > li > a,
  header > nav > ul > li.right-nav a {
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    font-size: 16px;
    font-weight: 400;
    padding: 0 9px;
    position: relative;
    text-decoration: none;
  }
  header.subdomain-community > nav > ul > li.right-nav,
  header.subdomain-university > nav > ul > li.right-nav {
    display: none;
  }

  header.subdomain-developer > nav > ul > li > a,
  header.subdomain-preview > nav > ul > li > a {
    font-size: 14px;
  }

  /* Active style for dev menu */
  header.subdomain-developer > nav > ul > li.link.active,
  header.subdomain-developer > nav > ul > li.link:hover,
  header.subdomain-preview > nav > ul > li.link.active,
  header.subdomain-preview > nav > ul > li.link:hover,
  header > nav > ul > li.link.active,
  header > nav > ul > li.link:hover {
    background-color: #00d2b9;
  }

  header > nav > ul > li a span {
    color: var(--zuora-header-link-color);
    font-weight: 500;
  }
  header > nav > ul > li a span.login {
    font-size: 24px;
  }

  header > nav > ul > li a.outline span {
    border: 2px solid #00d2b9;
    padding: 6px 15px;
    border-radius: 20px;
    white-space: nowrap;
    color: #000000;
    background-color: #ffffff;
  }

  header > nav > ul > li.right-nav ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0px;
    position: relative;
  }

  header > nav > ul > li.image > a {
    display: flex;
    padding: 0 20px 0 30px;
  }

  header > nav > ul > li:not(.image):not(.right-nav).open {
    --zuora-header-link-color: var(--zuora-header-hover-link-color);
    background-color: #f9f9f9;
  }

  header > nav > ul > li.right-nav li.cta,
  header > nav > ul > li.right-nav li.cta span {
    transition: all 0.3s;
  }
  header > nav > ul > li.right-nav li.cta.open {
    background-color: none;
  }
  header > nav > ul > li.right-nav li.cta:hover span {
    background-color: #041b2e;
    border-color: #041b2e;
    color: #ffffff;
  }

  header > nav > ul > li ul.sub-menu-lists {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    display: block;
  }

  header > nav > ul > li ul.sub-menu-lists > li {
    padding: 2px 0;
  }

  header > nav > ul > li ul.sub-menu-lists > li > a {
    font-size: 14px;
  }

  .arrow {
    margin: 0 0 0 5px;
    display: inline-block;
    height: var(--zuora-header-arrow-size);
    position: relative;
    top: -6px;
    transform: rotate(45deg);
    transition: all 0.5s;
    width: var(--zuora-header-arrow-size);
  }

  .arrow::after {
    border: 2px solid var(--zuora-header-arrow-color);
    border-width: 0 2px 2px 0;
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .chevron-right.arrow {
    transform: rotate(316deg) !important;
    margin: 0 5px 0 0;
  }

  /* small */
  @media only screen and (max-width: 899px) {
    .mobile-logo {
      align-items: center;
      display: flex !important;
      height: 100%;
      padding: 0 0 0 20px;
      position: relative;
      z-index: 19;
    }

    header > nav {
      --zuora-generic-border-color: #edf2f6;
      --zuora-header-link-color: #041b2e;
      background-color: transparent;
      height: 100%;
    }
    header > nav > ul {
      background-color: white;
      border-top: 1px solid var(--zuora-generic-border-color);
      height: calc(100% - 60px);
      overflow: auto;
      margin: 60px 0;
      position: fixed;
      right: 0px;
      top: 0px;
      transition-property: background, width;
      transition-duration: 0.6s;
      width: 0px;
      z-index: 2;
    }
    header > nav > ul > * {
      opacity: 0;
      transition-property: opacity;
      transition-duration: 0.4s;
    }
    header > nav > ul > li {
      display: block;
      border-bottom: 1px solid var(--zuora-generic-border-color);
      transition: background 0s;
    }
    header > nav > ul > li.image {
      display: none;
    }
    header > nav > ul > li > a {
      padding: 10px 20px;
    }
    header > nav > ul > li > a .arrow {
      float: right;
      position: relative;
      top: 4px;
    }
    header > nav > ul > li.open > a {
      background-color: var(--zuora-gray-background-color);
    }
    header > nav > ul > li.open > a .arrow {
      --zuora-header-arrow-color: var(--zuora-header-hover-arrow-color);
      top: 8px;
      transform: rotate(225deg);
    }

    header > nav > ul > li a.outline-for-mobile span {
      border: 2px solid #00d2b9;
      padding: 6px 15px;
      border-radius: 20px;
      white-space: nowrap;
    }

    .ic {
      position: fixed;
      cursor: pointer;
      display: inline-block;
      right: 25px;
      width: 32px;
      height: 24px;
      text-align: center;
      top: 0px;
      outline: none;
    }

    .ic.close {
      opacity: 0;
      font-size: 0px;
      font-weight: 300;
      color: #fff;
      top: 8px;
      height: 40px;
      display: block;
      outline: none;
    }

    .ic.menu {
      background-color: var(--zuora-gray-background-color);
      border-radius: 50px;
      display: block;
      padding: 9px 9px 0 9px;
      top: 13px;
      z-index: 20;
    }
    .ic.menu .line {
      background-color: #041b2e;
      display: block;
      height: 2px;
      left: 7px;
      margin-bottom: 3px;
      position: relative;
      top: 2px;
      transition: all 0.4s ease 0s;
      transform: rotate(0deg);
      transform-origin: center center;
      width: 18px;
    }
    .ic.menu .line-last-child {
      margin-bottom: 0px;
    }

    .mobile-open .ic.menu .line {
      top: 7px;
      left: 8px;
    }
    .mobile-open .ic.menu .line:nth-child(1) {
      transform: rotate(45deg);
    }
    .mobile-open .ic.menu .line:nth-child(2) {
      transform: rotate(-45deg);
      margin-top: -5px;
    }
    .mobile-open .ic.menu .line:nth-child(3) {
      opacity: 0;
    }

    .mobile-open .ic.menu ~ nav > ul > li > div.sub-menu-block {
      border-left: 0px solid #ccc;
      border-right: 0px solid #ccc;
      border-bottom: 0px solid #ccc;
      position: relative;
      visibility: visible;
      opacity: 1;
    }

    .mobile-open .ic.menu {
      outline: none;
    }
    .mobile-open .ic.menu ~ .ic.close {
      opacity: 1;
      outline: none;
      z-index: 21;
    }

    .mobile-open .ic.menu {
      opacity: 1 !important;
    }

    .mobile-open .ic.menu ~ .main-nav {
      width: 100%;
    }

    .mobile-open .ic.menu ~ .main-nav > * {
      background-color: transparent;
      opacity: 1;
    }

    nav > ul > li ul.sub-menu-lists > li a {
      color: #eee;
    }
    nav > ul > li:hover > a {
      color: #fff;
      text-decoration: none;
    }

    .sub-menu-block {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: all 0.4s ease 0s;
      visibility: hidden;
    }
    header > nav > ul > li.open > a ~ .sub-menu-block {
      opacity: 1;
      visibility: visible;
    }
    .sub-menu-block ul {
      padding: 0 20px 5px 20px;
    }
    .sub-menu-block a {
      color: #041b2e;
      display: block;
      font-size: 14px;
      line-height: 1.43;
      padding: 8px 0;
    }

    header > nav > ul > li.right-nav {
      border: 0;
      padding: 35px 0 0 0;
    }
    header > nav > ul > li.right-nav ul li {
      text-align: center;
    }

    section .header {
      border: 1px solid #f3f4f6;
      border-right: 0 none;
      border-left: 0 none;
      font-size: 12px;
      font-weight: 500;
      padding: 4px 20px;
    }

    .item-count-1 section .header,
    section .icon,
    section img,
    section p,
    section.card {
      display: none;
    }

    .hide-for-small {
      display: none !important;
    }

    .show-for-small {
      display: inherit !important;
    }
  }

  /* medium-up */
  @media only screen and (min-width: 900px) {
    .cta-with-arrow {
      padding-right: 35px;
      position: relative;
    }

    .cta-with-arrow:after {
      color: #000000;
      content: "â†’";
      font-family: "Font Awesome 6 Pro";
      position: absolute;
      padding: 0 9px 0 14px;
      right: 0;
      top: 0;
    }

    header.open #clickout {
      position: absolute;
      top: var(--zuora-generic-header-height);
      left: 0;
      width: 100vw;
      height: calc(100vh - var(--zuora-generic-header-height));
    }

    .ic.menu {
      display: none;
    }

    header > nav > ul {
      display: grid;
      grid-template-columns:
        repeat(calc(var(--zuora-menu-length) + 1), max-content)
        auto;
      height: var(--zuora-generic-header-height);
    }

    header > nav > ul > li,
    header > nav > ul > li.right-nav li {
      display: inline-flex;
      align-items: center;
    }

    header > nav > ul > li.right-nav {
      justify-content: end;
      margin-right: 20px;
    }

    header nav ul li div.sub-menu-block {
      --zuora-submenu-opacity: 0;
      background-color: white;
      box-sizing: border-box;
      color: #333;
      font-size: 16px;
      left: 0;
      margin-top: 0px;
      opacity: var(--zuora-submenu-opacity);
      position: absolute;
      top: 61px;
      /* transition: all 0.4s ease 0s; */
      transform: rotateX(90deg);
      transform-origin: top center;
      visibility: hidden;
      width: 100vw;
      z-index: 3;
    }

    header nav ul li.open div.sub-menu-block {
      --zuora-submenu-opacity: 1;
      --zuora-submenu-bg-percentage: 33%;
      border-bottom: 1px solid #ccc;
      max-height: calc(100vh - var(--zuora-generic-header-height));
      overflow-x: hidden;
      overflow-y: visible;
      scrollbar-width: none;
      transform: rotateX(0deg);
      visibility: visible;
    }

    header nav ul li.open div.sub-menu-block.card-columns-2 {
      --zuora-submenu-bg-percentage: 66%;
    }

    header nav ul li div.sub-menu-block > * {
      opacity: var(--zuora-submenu-opacity);
    }
    header nav ul li.open div.sub-menu-block > * {
      transition-property: opacity;
      transition-duration: 0.4s;
      transition-delay: 0.4s;
    }

    li.open .arrow {
      --zuora-header-arrow-color: var(--zuora-header-hover-arrow-color);
      top: 0;
      transform: rotate(225deg);
    }

    header nav ul li div.sub-menu-block .bg {
      background: white;
      height: 100%;
      min-height: var(--zuora-dropdown-min-height);
      opacity: 1;
      position: absolute;
      top: 0;
      width: 100vw;
    }

    header nav ul li div.sub-menu-block .bg div.center {
      height: 100%;
      margin: 0 auto;
      max-width: var(--zuora-generic-header-max-width);
      position: relative;
      width: 100%;
      z-index: 1;
    }

    .subdomain-developer nav ul li div.sub-menu-block .bg div.center,
    .subdomain-preview nav ul li div.sub-menu-block .bg div.center {
      margin: 0;
    }
    header nav ul li div.sub-menu-block .bg div.center div {
      background: white;
      height: 100%;
      position: absolute;
      width: 100%;
    }
    header nav ul li div.sub-menu-block .bg div.center div.cards {
      background-color: var(--zuora-card-background-light);
      height: 100%;
      position: absolute;
      right: 0;
      width: var(--zuora-submenu-bg-percentage);
    }
    header nav ul li div.sub-menu-block .bg div.right {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 50%;
    }

    header nav ul li div.sub-menu-block.dark .bg div.center div.cards,
    header nav ul li div.sub-menu-block.dark .bg div.right {
      background-color: var(--zuora-card-background-dark);
    }

    header nav ul li div.sub-menu-block .bg div.center div.cards,
    header nav ul li div.sub-menu-block .bg div.right {
      background-color: var(--zuora-card-background-light);
    }

    header nav ul li div.sub-menu-block .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0 15px;
      position: relative;
      z-index: 2;
    }

    header nav ul li div.sub-menu-block .row .col:not(.column-card) {
      background-color: transparent;
      padding-right: 20px;
    }
    header nav ul li div.sub-menu-block .row.item-count-2 .col:first-child {
      padding-right: 0;
    }

    header section {
      padding: 30px 15px 0 15px;
    }
    header section:last-child {
      padding-bottom: 30px;
    }

    header section .header {
      background: none;
      border-bottom: 1px solid #d2dee7;
      color: var(--zuora-generic-header-color);
      font-size: 14px;
      font-weight: 500;
      margin: 0 15px 20px 15px;
      padding: 0 0 7px 0;
    }
    header section p {
      color: var(--zuora-generic-p-color);
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      padding: 5px 0 0;
    }

    header section.transparent .header {
      color: transparent;
    }
    header section.table {
      padding: 30px 0;
    }
    header section.table ul {
      padding: 0 15px;
    }
    header
      .sub-menu-block.single-header-border
      .row
      .col:first-child
      .table
      .header {
      margin-right: 0;
    }
    header
      .sub-menu-block.single-header-border
      .row
      .col:nth-child(2)
      .table
      .header {
      margin-left: 0;
    }

    header section.card {
      display: flex;
      min-height: 400px;
      padding: 0;
      width: 100%;
    }
    header section.card .border {
      border-radius: 5px;
      margin: 30px 20px;
      padding: 20px;
    }
    header section.card .border a {
      display: grid;
      grid-template-rows: repeat(3, min-content) auto;
      height: 100%;
    }

    header section.card .header {
      border: none;
      color: var(--zuora-card-text-color-light);
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
      margin: 0;
      padding: 20px 0 11px 0;
    }
    header section.card figure {
      border-radius: 5px;
      display: flex;
      overflow: hidden;
    }
    header section.card figure img {
      width: 100%;
    }
    header section.card p {
      color: var(--zuora-card-text-color-light);
      font-size: 14px;
      font-weight: normal;
      line-height: 21px;
      padding: 0;
    }
    header section.card .cta-container {
      align-items: end;
      display: flex;
      justify-content: end;
      padding-top: 20px;
    }
    header section.card .cta {
      color: var(--zuora-card-text-color-light);
      display: block;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      position: relative;
      text-align: right;
      text-decoration: none;
    }
    header section.card .cta:after {
      color: var(--zuora-card-text-color-light);
      content: "â†’";
      font-family: "Font Awesome 6 Pro";
      position: relative;
      padding: 0 9px 0 14px;
      top: 0;
    }

    header .dark section.card .header,
    header .dark section.card p,
    header .dark section.card .cta,
    header .dark section.card .cta:after {
      color: var(--zuora-card-text-color-dark);
    }

    header section.list .header {
      background: none;
      border-bottom: 1px solid #d2dee7;
      color: var(--zuora-generic-header-color);
      font-size: 14px;
      font-weight: 500;
      margin: 0 0 20px 0;
      padding: 0 0 7px 0;
    }
    header section.list ul {
      list-style: none;
    }
    header section.list li {
      padding: 0 0 5px 0;
    }
    header section.list li.link-arrow {
      padding-top: 10px;
    }
    header section.list li a {
      color: #041b2e;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-decoration: none;
    }
    header section.list li a.cta-with-arrow {
      padding-top: 4px;
    }

    header section.table ul,
    header section.table-with-icon ul {
      list-style: none;
    }
    header section.table li,
    header section.table-with-icon li {
      border: 1px solid #f3f4f6;
      border-radius: 5px;
      margin: 0 0 10px 0;
      padding: 10px 15px;
    }
    header section.table li .chevron-right-link {
      display: inline-flex;
      height: 30px;
      padding: 5px 0px;
      align-items: center;
      gap: 5px;
      flex-shrink: 0;
    }
    header section.table .sublinks {
      margin-top: 15px;
    }
    header section.table .sublinks li {
      border: none;
      margin: 0px;
      padding: 0;
    }
    header section.table .sublinks li a {
      font-size: 14px;
    }
    header section.table li.link-arrow,
    header section.table-with-icon li.link-arrow {
      padding-top: 20px;
    }
    header section.table li a,
    header section.table-with-icon li a {
      color: #041b2e;
      display: block;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-decoration: none;
    }
    header section.table-with-icon li a {
      display: grid;
      grid-template-columns: max-content auto;
    }
    header section.table-with-icon li img {
      padding-right: 5px;
      width: 60px;
    }
    header section.table-with-icon li.link-arrow {
      border: none;
    }

    header section.table-fancy ul {
      gap: 1px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      list-style: none;
      margin-top: 25px;
      background-color: var(--zuora-header-border-color);
    }
    header section.table-fancy li {
      background: white;
      padding: 0 0 20px 20px;
    }
    header section.table-fancy li:nth-child(2n + 1) {
      padding-right: 20px;
      padding-left: 15px;
    }
    header section.table-fancy a {
      display: block;
    }
    header section.table-fancy .icon {
      color: var(--zuora-icon-color, #0d4ac3);
      font-size: 48px;
    }
    header section.table-fancy .title {
      background: none;
      color: #001a31;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.75;
      padding: 15px 0 0;
    }

    header section.table-fancy .link-container {
      padding-top: 15px;
    }

    header section.table-fancy-with-border {
      border: 2px solid var(--zuora-gray-background-color);
      border-radius: 10px;
      margin: 0px 15px;
      padding-top: 20px;
    }
    header section.table-fancy-with-border.no-border {
      border: 0 none;
      margin-left: 0;
      margin-right: 0;
      padding-top: 0px;
      margin-top: -15px;
    }
    header section.table-fancy-with-border .header {
      border-bottom: 0 none;
      color: black;
      font-size: 16px;
    }
    header section.table-fancy-with-border.header-highlight .header {
      background: var(--zuora-gray-background-color);
      border-radius: 5px;
      padding: 10px 15px;
      margin-left: 0;
      margin-right: 0;
    }
    header section.table-fancy-with-border.header-highlight .header a {
      display: grid;
      padding: 0;
    }
    header section.table-fancy-with-border ul {
      background: #d2dee7;
      gap: 1px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      list-style: none;
    }
    header section.table-fancy-with-border li {
      background: white;
      padding: 0 0 20px 20px;
    }
    header section.table-fancy-with-border li:nth-child(2n + 1) {
      padding-right: 20px;
      padding-left: 0;
    }
    header section.table-fancy-with-border .link-container {
      padding-top: 10px;
    }
    header section.table-fancy-with-border a,
    header section.table-fancy a {
      color: black;
      display: table;
      padding-bottom: 5px;
    }
    header section.table-fancy-with-border a:after {
      top: 2px;
    }
    header section.table-fancy-with-border .icon {
      color: var(--zuora-icon-color, #0d4ac3);
      font-size: 48px;
    }
    header section.table-fancy-with-border .zuora-font-title,
    header section.table-fancy .zuora-font-title {
      padding: 15px 0 0;
    }

    header section.box-links .border {
      border-radius: 10px;
      background-color: #f5f9fc;
      padding: 20px 15px;
    }
    header section.box-links ul {
      display: grid;
      gap: 10px 0;
      grid-template-columns: 1fr 1fr;
      list-style: none;
    }
    header section.box-links a {
      align-items: center;
      color: #041b2e;
      display: flex;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.31;
    }
    header section.box-links a i {
      color: var(--zuora-icon-color, #0d4ac3);
      font-size: 24px;
      width: 42px;
    }

    header section li.cta-callout {
      background: var(--zuora-gray-background-color);
    }
    header section li.cta-callout h3 {
      font-weight: 500;
    }
    header section li.cta-callout p {
      display: none;
    }
  }

  /* medium only */
  @media only screen and (min-width: 900px) and (max-width: 1199px) {
    header nav ul li div.sub-menu-block .row .col + .col + .col {
      display: none;
    }

    header > nav > ul > li > a,
    header > nav > ul > li.right-nav a {
      font-size: 14px;
    }

    header nav ul li.open div.sub-menu-block {
      --zuora-submenu-bg-percentage: 0;
    }
    header nav ul li.open div.sub-menu-block.card-columns-2 {
      --zuora-submenu-bg-percentage: 50%;
    }
  }

  /* large */
  @media only screen and (min-width: 1200px) {
    .show-for-large {
      display: inherit !important;
    }
    header nav ul li div.sub-menu-block .bg div.center div.cards {
      width: calc(var(--zuora-submenu-bg-percentage) + 10px);
    }
    header nav ul li div.sub-menu-block .row {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* xlarge */
  @media only screen and (min-width: 1440px) {
    .show-for-xlarge {
      display: inherit !important;
    }

    header nav ul li div.sub-menu-block {
      left: calc((100vw - var(--zuora-generic-header-max-width)) / -2);
    }

    header nav ul li div.sub-menu-block .row {
      left: calc((100vw - var(--zuora-generic-header-max-width)) / 2);
      max-width: var(--zuora-generic-header-max-width);
    }

    .subdomain-developer nav ul li div.sub-menu-block .row,
    .subdomain-preview nav ul li div.sub-menu-block .row {
      left: 0;
    }
  }

  @media only screen and (min-width: 900px) and (max-width: 1001px) {
    .hide-for-overflow {
      display: none !important;
    }
  }
  @media only screen and (min-width: 1200px) and (max-width: 1240px) {
    .hide-for-overflow {
      display: none !important;
    }
  }
`,ur={options:{default:{name:"developer",includeRightNavMenu:!1,includeRightNavPlus:!1,includeRightNavSlot:!1}},links:[{id:"home",link:we,track:{type:"logo"},title:""},{id:"dev-center-home",link:ve,track:{type:"logo"},title:""},{id:"login",link:be,track:{type:"login"},title:go},{id:"talk-to-sales",link:fe,track:{type:"cta"},title:fe},{id:"watch-the-demo",link:ye,track:{type:"cta"},title:ye}],menu:[{title:ao,class:"dark ",columns:[{sections:[{type:"table",class:"margin-right-0",title:so,links:[{description:$e,link:Ce,title:Ce,type:"box"},{description:Se,link:xe,title:xe,type:"box"},{description:Ae,link:Ie,title:Ie,type:"box"},{description:Re,link:Ee,title:Ee,type:"box"}]}]},{sections:[{type:"table",title:so,class:"transparent margin-left-0",links:[{description:Ne,link:_e,title:_e,type:"box"},{description:ze,link:ke,title:ke,type:"box"}]}]},{sections:[{type:"card",description:Oi,link:Di,linkLabel:Di,image:Un[Mi],title:Li}]}],options:{excludeForSubDomains:[$n,Pn]}},{title:co,columns:[{sections:[{type:"table",class:"margin-right-0",title:co,links:[{title:_o,link:_o,class:"sm-bold",type:"fancy"},{description:Te,title:Pe,link:Pe,class:"sm-bold",type:"box"},{description:Ve,title:Ke,link:Ke,class:"sm-bold",type:"box"},{description:Ze,title:De,link:De,class:"sm-bold",type:"box"}]}]},{sections:[{type:"table",title:co,class:"transparent margin-left-0",links:[{description:Oe,title:Le,link:Me,class:"sm-bold",type:"box"},{description:Je,title:Ye,link:Ye,class:"sm-bold",type:"box"},{description:je,title:Be,link:Be,class:"sm-bold",type:"box"},{description:Qe,title:We,link:We,class:"sm-bold",type:"box"}]}]},{sections:[{type:"card",description:Bi,link:Ui,linkLabel:Ui,image:Un[ji],title:Zi}]}],options:{excludeForSubDomains:[$n,Pn]}},{title:_e,class:"dark",columns:[{sections:[{type:"table",title:so,links:[{title:at,description:st,link:at,type:"box"},{title:lt,description:ct,link:lt,type:"box"},{title:ut,description:dt,link:ut,type:"box"},{title:Bo,description:ht,link:pt,type:"box"}]}]},{sections:[{type:"card",title:Fi,description:qi,link:Hi,linkLabel:Hi,image:Un[Gi]}]},{sections:[{type:"card",title:Ki,description:Vi,link:Qi,linkLabel:Qi,image:Un[Wi]}]}],options:{excludeForSubDomains:[$n,Pn]}},{title:$o,columns:[{sections:[{type:"list",title:vt,links:[{link:bt,title:bt},{link:ft,title:ft},{link:yt,title:yt},{link:kt,title:kt},{link:zt,title:zt},{link:xt,title:xt},{link:St,title:St},{link:It,title:It},{link:At,title:At,type:"link-arrow"}]},{type:"list",title:po,links:[{link:Lt,title:Lt},{link:Ot,title:Ot},{link:Mt,title:Mt}]}]},{sections:[{type:"list",title:so,links:[{link:jo,title:jo},{link:Uo,title:Uo},{link:Fo,title:Fo},{link:qo,title:qo},{link:Go,title:Go},{link:Ho,title:Ho},{link:Ko,title:Ko},{link:gt,title:gt},{link:Vo,title:Vo},{link:Tt,title:Tt},{link:Wo,title:Wo,type:"link-arrow"}]}]},{sections:[{type:"card",description:Ji,link:en,linkLabel:en,image:Un[Xi],title:Yi}]}],options:{excludeForSubDomains:[$n,Pn]}},{title:mo,class:"dark",columns:[{sections:[{type:"table",title:Zt,links:[{description:ro,link:no,title:no,class:"sm-bold",type:"box",links:[{title:No,link:No,type:"link-arrow"},{title:Po,link:Po,type:"link-arrow"},{title:To,link:To,type:"link-arrow"}]}]},{class:"hide-for-mobile hide-for-tablet-portrait no-border header-highlight",type:"table-fancy-with-border",title:Bt,link:Bt,links:[{title:Ht,class:"îƒ†",description:jt,link:"",links:[{title:lo,link:Ut,type:"link-arrow"},{title:be,link:Ft,type:"link-arrow"}]},{title:Kt,class:"ï”œ",description:Vt,link:"",links:[{title:lo,link:qt,type:"link-arrow"},{title:be,link:Gt,type:"link-arrow"}]}]},{class:"hide-for-tablet-landscape-up",type:"list",title:"",links:[{link:Bt,title:Bt},{link:Ht,title:Ht},{link:Kt,title:Kt}]}]},{sections:[{type:"table-fancy",title:wo,links:[{class:"sm-bold",icon:"ï€­",description:Qt,link:Wt,title:Wt,links:[{title:Lo,link:Lo,type:"link-arrow"},{title:Oo,link:Oo,type:"link-arrow"}]},{class:"sm-bold",icon:"ï†³",description:Jt,link:Yt,title:Yt,links:[{title:Mo,link:Mo,type:"link-arrow"},{title:Do,link:Do,type:"link-arrow"},{title:Zo,link:Zo,type:"link-arrow"}]}]},{type:"box-links",title:"",links:[{icon:"ï’¶",link:oo,title:oo,type:"table-with-icon"},{icon:"ï—¸",link:eo,title:eo,type:"table-with-icon"}]}]},{sections:[{type:"card",description:on,link:rn,linkLabel:rn,image:Un[nn],title:tn}]}],options:{excludeForSubDomains:[$n,Pn]}},{title:Ro,columns:[{sections:[{title:so,type:"list",links:[{title:Ce,link:Ce},{title:ko,link:ko},{title:zo,link:zo},{title:Io,link:Io},{title:Co,link:Co},{title:wt,link:wt},{title:So,link:So},{title:vo,link:vo}]}]},{sections:[{type:"card",title:an,description:sn,linkLabel:ln,link:ln,image:Un[cn]}]},{sections:[{type:"card",title:un,description:dn,linkLabel:pn,link:pn,image:Un[hn]}]}],options:{excludeForSubDomains:[$n,Pn]}},{title:gn,link:mn,options:{includeInSubDomains:[$n,Pn,Tn]}},{title:wn,link:wn,options:{includeInSubDomains:[$n,Pn,Tn]}},{title:vn,columns:[{sections:[{type:"table",title:so,links:[{title:yn,description:kn,link:yn,type:"box"},{title:zn,description:xn,link:zn,type:"box"},{title:Sn,description:In,link:Sn,type:"box"}]}]},{sections:[{type:"card",description:En,link:"",linkLabel:"",image:"",title:""}]}],options:{includeInSubDomains:[$n,Pn,Tn]}}]},dr=r`
    .mega-table {
      padding: 30px 0;
    }
    .mega-table .header {
      background: none;
      border-bottom: 1px solid #d2dee7;
      color: var(--zuora-generic-header-color);
      font-size: 14px;
      font-weight: 500;
      margin: 0 15px 20px 15px;
      padding: 0 0 7px 0;
    }
    .mega-table.transparent .header {
        color: transparent;
    }
    .mega-table.margin-left-0 .header {
        margin-left: 0;
    }
    .mega-table.margin-right-0 .header {
        margin-right: 0;
    }
    .mega-table ul {
      padding: 0 15px;
      list-style: none;
    }
    .mega-table .section-sublinks {
        padding: 10px 0 0 0;
    }
    .mega-table .section-sublinks li {
        margin: 0;
        padding: 0;
    }

      /* small */
  @media only screen and (max-width:899px) {    

    .mega-table .header {
      display: none;
    }
    .mega-table {
      padding: 0px 20px 0px;
    }
    .mega-table .section-body {
      padding: 0;
    }

    .mega-table .section-sublinks {
        padding: 0;
    }
  }
`,pr=r`
    .mega-link {
        text-decoration: none;
        color: 'inherit';
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .mega-link.box {
        flex-direction: column;
        align-items: flex-start;
    }

    .mega-link.box .zuora-font-description {
        padding: 5px 0;
    }

    .mega-link.fancy {
        border-radius: 5px;
        background: var(--zuora-header-dark-grey);
    }

    .mega-link.fancy h3 {
        color: #041B2E;
        font-size: 16px;
    }

    .mega-link.fancy, .mega-link.box {
        padding: 10px 15px;
        margin: 0 0 10px 0;
    }

    .mega-link .chevron-right {
        margin-right: 5px;
        font-size: 10px;
    }

    .mega-link .link-arrow {
        margin-left: 10px;
        font-size: 12px;
    }

    .mega-link.table-with-icon i {
        color: var(--zuora-icon-color, #0D4AC3);
        font-size: 24px;
        font-weight: 300;
        width: 42px;
    }

    /* small */
    @media only screen and (max-width: 899px) {
        .mega-link {
            border: none;
            background: none !important;
            display: block !important;
            margin: 0 !important;
            padding: 8px 0px !important;
        }

        .mega-link.chevron-right,
        .mega-link.link-arrow {
            display: flex !important;
            padding: 0 !important;
        }

        .mega-link.sm-bold h3 {
            font-weight: 500 !important;
        }

        .mega-link.table-with-icon i {
            display: none;
        }
    }
`;var hr=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let mr=class extends(qn(ie)){constructor(){super(),this.title="",this.description="",this.trackingLabel="",this.href="",this.icon="",this.doAddFontFontAwesome(),this.doAddFontMelody()}handleClick(){void 0!==window.zuoraEventTrackerInstance&&(window.zuoraEventTrackerInstance.pushNavigationClick("header",[`${this.trackingLabel}|${this.title}`]),this.href.includes("zuora.com")||window.zuoraEventTrackerInstance.pushOutboundClick(this.href))}render(){!this.type&&this.description&&(this.type="box"),this.type||(this.type="default");const e={[this.type]:!0,"zuora-border":"box"===this.type,[this.classList.value]:!0,[`subdomain-${this.currentSubdomain}`]:!0};return M`
            <a
                @click="${this.handleClick}"
                class="mega-link ${ge(e)}"
                href="${this.href}"
                data-tracking-label="${this.trackingLabel}|${this.title}">
                ${"table-with-icon"===this.type?M`<i class="zuora-font-icon">${this.icon}</i>`:Z}

                ${"chevron-right"===this.type?M`<i class="zuora-font-icon chevron-right">ï”</i>`:Z}

                <h3 class="${"box"===this.type||"default"===this.type||"table-with-icon"===this.type?"zuora-font-title":"zuora-font-link"}">
                    ${this.title}</h3>

                ${this.description&&"box"===this.type?M`<p class="zuora-font-description">
                    ${this.description}</p>`:Z}

                ${"link-arrow"===this.type?M`<i class="zuora-font-icon link-arrow">ï¡</i>`:Z}

                <slot></slot>
            </a>
        `}};mr.styles=[Kn,Hn,pr],hr([le({type:String,attribute:"title"})],mr.prototype,"title",void 0),hr([le({type:String,attribute:"description"})],mr.prototype,"description",void 0),hr([le({type:String,attribute:"tracking-label"})],mr.prototype,"trackingLabel",void 0),hr([le({type:String,attribute:"href"})],mr.prototype,"href",void 0),hr([le({type:String,attribute:"icon"})],mr.prototype,"icon",void 0),hr([le({type:String,attribute:"type"})],mr.prototype,"type",void 0),mr=hr([re("wc-mega-link")],mr);var gr=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let wr=class extends(qn(ie)){constructor(){super(...arguments),this.menuTitle="",this._computeSectionHeader=(e,t)=>t&&t.title?t.link?M`
            <h2 class="header">
                  <a
                    href="${t.link}"
                    data-tracking-label="${this.getText(e)}|${this.getText(t.title)}">
                    ${this.getText(t.title)} 
                  </a>
            </h2>`:M`<h2 class="header">${this.getText(t.title)}</h2>`:Z,this._renderSubLinks=(e,t)=>{var o;return e&&e.links?M`
                <ul class= "section-sublinks">
                    ${null===(o=e.links)||void 0===o?void 0:o.map((e=>M`
                        <li>
                        <wc-mega-link title=${this.getText(e.title)} tracking-label=${t} href=${this.computeLink(e.link)} type=${lr(e.type)}></wc-mega-link>
                    </li>`))}
                </ul>`:Z},this._renderMegaLink=e=>{var t,o;const i=`${this.getText(this.menuTitle)}${(null===(t=this.section)||void 0===t?void 0:t.title)?`|${this.getText(null===(o=this.section)||void 0===o?void 0:o.title)}`:""}`;return M`
            <li>
                <wc-mega-link class=${lr(e.class)} title=${this.getText(e.title)} tracking-label=${i} description=${this.getText(e.description)} href=${this.computeLink(e.link)} type=${lr(e.type)}>
                    ${this._renderSubLinks(e,i)}         
                </wc-mega-link>                
            </li>
        `},this._renderLinksBody=e=>M`
        <ul class="section-body">${e.links.map((e=>this._renderMegaLink(e)))}</ul>`}render(){return this.section?M`
        <section class="mega-table ${this.computeSectionClass(this.section)}">
                ${this._computeSectionHeader(this.menuTitle,this.section)}           
                ${this._renderLinksBody(this.section)}
        </section>`:Z}};wr.styles=[Kn,Hn,dr],gr([le({type:String,attribute:"menu-title"})],wr.prototype,"menuTitle",void 0),gr([le({attribute:!1})],wr.prototype,"section",void 0),wr=gr([re("wc-mega-table")],wr);class vr{static triggerDatalayerTracking(e,t){if(void 0!==window.zuoraEventTrackerInstance){if(window.zuoraEventTrackerInstance.pushNavigationClick("header",[e]),!t||void 0===t)return;t.includes("zuora.com")||window.zuoraEventTrackerInstance.pushOutboundClick(t)}}}var br,fr,yr;class kr{}br=kr,kr.updateMenuStates=(e,t)=>{var o;if(e.classList.contains("isActive"))return e.classList.remove("isActive"),void br.activateClearScreen(t);br.clearActiveClasses(t),e.classList.add("isActive"),br.removeClass({currentElement:e,classSelector:".NavItem-topLevel"}),br.removeClass({currentElement:t,classSelector:".NavRedesignClearScreen",cssClass:"isInvisible"}),br.addClass(e,".NavItem-topLevel"),br.addClass(e,".NavItem-header"),(null===(o=null==e?void 0:e.dataset)||void 0===o?void 0:o.trackingLabel)&&vr.triggerDatalayerTracking(e.dataset.trackingLabel,null)},kr.addClass=(e,t,o="isActive")=>{const i=null==e?void 0:e.querySelector(t);i&&void 0!==i&&i.classList.add(o)},kr.removeClass=({currentElement:e,classSelector:t,cssClass:o="isInvisible"})=>{const i=null==e?void 0:e.querySelector(t);i&&void 0!==i&&i.classList.remove(o)},kr.clearActiveClasses=e=>{if(!e||void 0===e)return;const t=e.querySelectorAll(".NavItem-topLevel"),o=e.querySelectorAll(".NavItem"),i=e.querySelectorAll(".NavItem-header"),n=[...t],r=[...o,...i,...t];if(n&&void 0!==n)for(let e=0;e<n.length;e++)n[e]&&void 0!==n[e]&&n[e].classList.add("isInvisible");if(r&&void 0!==r)for(let e=0;e<r.length;e++)r[e]&&void 0!==r[e]&&r[e].classList.remove("isActive")},kr.activateClickEventClearScreen=e=>{br.activateClearScreen(e)},kr.activateClearScreen=e=>{br.clearActiveClasses(e);const t=null==e?void 0:e.querySelector(".NavRedesignClearScreen");t&&void 0!==t&&t.classList.add("isInvisible")};class zr extends kr{}fr=zr,zr.handleMenuClickEvent=(e,t)=>{const o=null==t?void 0:t.querySelector(`${e}`);o&&void 0!==o&&fr.updateMenuStates(o,t)};class xr extends kr{}yr=xr,xr.arrowEvents=["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"],xr.handleBottomMenuEvents=(e,t,o)=>{const i=null==o?void 0:o.querySelector(`${t}`),n=Array.from(i.querySelectorAll(".NavItem-topLevel .Items .Item.isActive ul li")),r=i.querySelector(".NavItem-topLevel .Items .Item.isActive ul");"Escape"!==e.key?(" "!==e.key&&"Space"!==e.code||(e.preventDefault(),yr.updateMenuStates(i,o)),yr.arrowEvents.includes(e.key)&&(e.preventDefault(),yr.handleArrowKeyEvents(e.key,r,n)),"Enter"===e.key&&r&&void 0!==r&&yr.handleEnterKeyEvents(r,n)):yr.handleEscapeKeyEvents(i,n,o)},xr.handleMenuKeyEvents=(e,t,o)=>{const i=null==o?void 0:o.querySelector(`${t}`),n=Array.from(i.querySelectorAll(".NavItem-topLevel ul li")),r=i.querySelector(".NavItem-topLevel ul");i&&void 0!==i&&("Escape"!==e.key?(" "!==e.key&&"Space"!==e.code||(e.preventDefault(),yr.updateMenuStates(i,o)),yr.arrowEvents.includes(e.key)&&(e.preventDefault(),yr.handleArrowKeyEvents(e.key,r,n)),"Enter"===e.key&&r&&void 0!==r&&yr.handleEnterKeyEvents(r,n)):yr.handleEscapeKeyEvents(i,n,o))},xr.handleEscapeKeyEvents=(e,t,o)=>{yr.activateClearScreen(o),yr.resetKeyboardNavItems(t);const i=e.querySelector(".NavItem-topLevel ul");i&&void 0!==i&&(i.dataset.itemIndex="0")},xr.handleEnterKeyEvents=(e,t)=>{const o=t[Number(null==e?void 0:e.dataset.itemIndex)-1];if(!o||void 0===o)return;const i=o.querySelector("a");i&&void 0!==i&&i.click()},xr.handleArrowKeyEvents=(e,t,o)=>{if(!t||void 0===t||o.length<=0)return;const i=Number(t.dataset.itemIndex)||0,n=Number(t.dataset.numberOfItems);if("ArrowDown"===e||"ArrowRight"===e){if(i>=n)return;t.dataset.itemIndex=`${i+1}`;const e=o[Number(t.dataset.itemIndex)-1];yr.resetKeyboardNavItems(o),null==e||e.classList.add("isActive")}if("ArrowUp"===e||"ArrowLeft"===e){if(1===i)return;t.dataset.itemIndex=""+(i-1);const e=o[Number(t.dataset.itemIndex)-1];yr.resetKeyboardNavItems(o),null==e||e.classList.add("isActive")}},xr.resetKeyboardNavItems=e=>{for(let t=0;t<e.length;t++)e[t]&&void 0!==e[t]&&e[t].classList.remove("isActive")},xr.handleAnchorClickEvents=(e,t,o)=>{if("Enter"!==e.key)return;const i=null==o?void 0:o.getElementById(`${t}`);i&&void 0!==i&&i.click()};const Sr={en:{ctasItems:[{title:"Talk to an Expert",link:"/talk-to-sales/",style:"teal"},{title:"Watch a Demo",link:"/resources/demo-on-demand/"}],menuKeys:{contact:"Contact",login:"Login",company:"Company",solutions:"Solutions",products:"Products",resources:"Resources"},navItems:{solutions:[{header:{title:"Use cases",link:"/solutions/"},meta:{style:{cssClass:"UseCases"}},body:[{title:"Order-to-cash",link:"/products/order-to-cash/"},{title:"Subscription management",link:"/products/subscription-management/"},{title:"Usage based pricing",link:"/solutions/monetize-usage/"},{title:"AI powered billing",link:"/solutions/zuora-copilot-ai-powered-billing/"},{title:"Acquire & retain subscribers",link:"/solutions/acquire-retain-subscribers/"},{title:"EV Charging",link:"/solutions/ev-charging/"},{title:"Intelligent Pricing & Packaging",link:"/solutions/intelligent-pricing-and-packaging/"},{title:"View all",link:"/solutions/"}]},{header:{title:"Industries"},meta:{style:{cssClass:"Industries"}},body:[{title:"SaaS",link:"/solutions/saas/"},{title:"Manufacturing & IOT",link:"/solutions/manufacturing-iot/"},{title:"Media + Entertainment",link:"/solutions/media-entertainment/"}]}],products:[{header:{title:"Zuora Billing",body:"Design flexible pricing and bill for every pricing model.",link:"/products/billing-software/"},meta:{style:{"item-body-columns":3,cssClass:"ZuoraBilling"}},body:[{title:"Intelligent Pricing & Packaging",link:"/solutions/intelligent-pricing-and-packaging/"},{title:"Quoting (CPQ)",link:"/products/cpq-software/"},{title:"Order management",link:"/products/billing-software/order-management/"},{title:"Consumption metering",link:"/products/billing-software/consumption-metering"},{title:"Invoicing & tax compliance",link:"/products/billing-software/e-invoicing-and-tax-compliance/"},{title:"Payments",link:"/products/payment-solutions/"},{title:"APIs & connectors",link:"/products/zuora-platform/integration-hub/"},{title:"Extensibility",link:"/products/zuora-platform/extension-studio/"}]},{header:{title:"Zuora Payments",body:"Unlock Revenue Growth with Payment Optimization.",link:"/products/payment-solutions/"},meta:{style:{"item-body-columns":1,cssClass:"ZuoraPayments"}},body:[{title:"Payment Coverage & Gateway Routing",link:"/products/payment-solutions/payment-coverage-and-gateway-routing/"},{title:"Payment Fraud & Failures",link:"/products/payment-solutions/payment-fraud-and-failures/"}]},{header:{title:"Zuora Collections",body:"AI-powered collections built to protect customer relationships.",link:"/products/collections/"},meta:{style:{cssClass:"ZuoraCollections"}}},{header:{title:"Zuora Revenue",body:"Automate revenue recognition for any business model.",link:"/products/revenue/"},meta:{style:{cssClass:"ZuoraRevenue"}}},{header:{title:"Zephr",body:"Drive acquisition and retention throughout the subscriber lifecycle.",link:"/products/zephr/"},meta:{style:{"item-body-columns":3,cssClass:"Zephr"}},body:[{title:"AI Paywall",link:"/products/zephr/ai-paywall/"},{title:"First-party data strategies",link:"/products/zephr/first-party-data-strategies/"},{title:"User specific personalization",link:"/products/zephr/user-specific-personalization/"}]},{header:{title:"Zuora Platform",body:"Maximize agility across your technology ecosystem.",link:"/products/zuora-platform/"},meta:{style:{"item-body-columns":3,cssClass:"ZuoraPlatform"}},body:[{title:"Extension Studio",link:"/products/zuora-platform/extension-studio/"},{title:"Analytics",link:"/products/zuora-platform/analytics/"},{title:"Security",link:"/products/zuora-platform/security/"},{title:"Integration Hub",link:"/products/zuora-platform/integration-hub/"},{title:"Admin command center",link:"/products/zuora-platform/admin-command-center/"}]}],resources:[{header:{title:"Type"},meta:{style:{cssClass:"Type"}},body:[{title:"AI Monetization",link:"/resources/ai-monetization/"},{title:"Case studies",link:"/our-customers/case-studies/"},{title:"Videos",link:"/resources/filter/content_type/video/"},{title:"Industry trends (Subscribed)",link:"/subscribed/"},{title:"Glossary",link:"/glossary/"},{title:"Guides",link:"/guides/"},{title:"Reports",link:"/resources/filter/content_type/report/"},{title:"Events",link:"/resources/events/"},{title:"View all",link:"/resources/"}]},{header:{title:"Support"},meta:{style:{"item-body-columns":2,"justify-items":"flex-start",cssClass:"SupportCenter"}},body:[{title:"Product Documentation",externalLink:"https://docs.zuora.com/",subBody:"Start integrating Zuora's products to grow your business."},{title:"Developer Center",externalLink:"/",subBody:"Enhanced integrations with Microsoft, Snowflake, and more."},{title:"Community Portal",externalLink:"https://community.zuora.com/",subBody:"Connect and share with fellow subscription businesses, finance and product leaders."},{title:"Zuora University",link:"/zuora-training/",subBody:"Our online training platform offering courses, learning paths, instructor-led classes, and certification tracks."},{title:"Support Center",externalLink:"https://support.zuora.com",subBody:"Get help and answers to technical issues."}]}],company:[{title:"Careers (We're hiring!)",link:"/careers/"},{title:"Team",link:"/about/team/"},{title:"Newsroom",link:"/about/news-press/"},{title:"Partners",link:"/about/partners-ecosystem/"},{title:"Customers",link:"/our-customers/"},{title:"Legal",link:"/about/legal/"},{title:"Awards",link:"/about/awards/"}]},i11n:[{title:"English",link:"/",icon:"EnglishFlag",locale:"en"},{title:"FranÃ§ais",link:"/fr",icon:"FrenchFlag",locale:"fr"},{title:"Deutsch",link:"/de",icon:"GermanFlag",locale:"de"},{title:"æ—¥æœ¬èªž",link:"/jp",icon:"JapaneseFlag",locale:"ja"}]},de:{ctasItems:[{title:"Kontakt aufnehmen",link:"/de/talk-to-sales/",style:"teal"},{title:"Demo anschauen",link:"/de/resources/demo-on-demand/"}],menuKeys:{contact:"Kontakt",login:"Anmelden",company:"Unser Unternehmen",solutions:"LÃ¶sungen",products:"Produkte",resources:"Ressourcen"},navItems:{solutions:[{header:{title:"AnwendungsfÃ¤lle",link:"/solutions/"},meta:{style:{cssClass:"UseCases"}},body:[{title:"Order-to-cash",link:"/products/order-to-cash/"},{title:"Abonnementverwaltung",link:"/products/subscription-management/"},{title:"Nutzungsbasierte Monetarisierung",link:"/solutions/monetize-usage/"},{title:"KI-gestÃ¼tzte Abrechnung",link:"/solutions/zuora-copilot-ai-powered-billing/"},{title:"Kundenbindung steigern",link:"/solutions/acquire-retain-subscribers/"},{title:"EV-LadelÃ¶sungen",link:"/solutions/ev-charging/"},{title:"Alle LÃ¶sungen ansehen",link:"/solutions/"}]},{header:{title:"Branchen"},meta:{style:{cssClass:"Industries"}},body:[{title:"SaaS (Software as a Service)",link:"/solutions/saas/"},{title:"Fertigung & IoT",link:"/solutions/manufacturing-iot/"},{title:"Medien & Entertainment",link:"/solutions/media-entertainment/"}]}],products:[{header:{title:"Zuora Billing",body:"Flexibles Preisgestaltungssystem, das Ihnen ermÃ¶glicht, wiederkehrende, einmalige sowie verbrauchsabhÃ¤ngige Abrechnungen durchzufÃ¼hren.",link:"/products/billing-software/"},meta:{style:{"item-body-columns":3,cssClass:"ZuoraBilling"}},body:[{title:"Preis- und BÃ¼ndelung Gestaltung",link:"/products/billing-software/pricing-and-packaging/"},{title:"Konfiguration, Preisgestaltung und Angebotserstellung (CPQ)",link:"/products/cpq-software/"},{title:"Auftragsabwicklung",link:"/products/billing-software/order-management/"},{title:"Verbrauchserfassung",link:"/products/billing-software/consumption-metering"},{title:"Rechnungslegung und steuerliche Compliance",link:"/products/billing-software/e-invoicing-and-tax-compliance/"},{title:"Zahlungsverkehr",link:"/products/payment-solutions/"},{title:"APIs und Schnittstellen",link:"/products/zuora-platform/integration-hub/"},{title:"Systemerweiterungen",link:"/products/zuora-platform/extension-studio/"}]},{header:{title:"Zuora Payments",body:"Steigern Sie das Umsatzwachstum durch Zahlungsoptimierung.",link:"/products/payment-solutions/"},meta:{style:{"item-body-columns":1,cssClass:"ZuoraPayments"}},body:[{title:"Abdeckung und Routing von Zahlungsgateways",link:"/products/payment-solutions/payment-coverage-and-gateway-routing/"},{title:"Verhinderung von ZahlungsausfÃ¤llen und Betrug",link:"/products/payment-solutions/payment-fraud-and-failures/"}]},{header:{title:"Zuora Collections",body:"KI-gesteuerte InkassolÃ¶sungen zum Schutz der Kundenbeziehungen",link:"/products/collections/"},meta:{style:{cssClass:"ZuoraCollections"}}},{header:{title:"Zuora Revenue",body:"Automatisierte Umsatzerkennung, angepasst an diverse GeschÃ¤ftsmodelle.",link:"/products/revenue/"}},{header:{title:"Zephr",body:"Steigerung der Kundengewinnung und -bindung Ã¼ber den gesamten Lebenszyklus.",link:"/products/zephr/"},meta:{style:{"item-body-columns":3,cssClass:"Zephr"}},body:[{title:"KI Paywall",link:"/products/zephr/ai-paywall/"},{title:"Strategien fÃ¼r Erstparteiendaten",link:"/products/zephr/first-party-data-strategies/"},{title:"Personalisierung auf Benutzerebene",link:"/products/zephr/user-specific-personalization/"}]},{header:{title:"Zuora Platform",body:"Steigerung der AgilitÃ¤t Ihres technologischen Ã–kosystems.",link:"/products/zuora-platform/"},meta:{style:{"item-body-columns":3,cssClass:"ZuoraPlatform"}},body:[{title:"Erweiterungsstudio",link:"/products/zuora-platform/extension-studio/"},{title:"Datenanalytik",link:"/products/zuora-platform/analytics/"},{title:"Datensicherheit",link:"/products/zuora-platform/security/"},{title:"Integration Hub",link:"/products/zuora-platform/integration-hub/"},{title:"Admin-Kommandozentrale",link:"/products/zuora-platform/admin-command-center/"}]}],resources:[{header:{title:"Typ"},meta:{style:{cssClass:"Type"}},body:[{title:"Erfolgsgeschichten",link:"/our-customers/case-studies/"},{title:"Webinare",link:"/resources/filter/content_type/video/"},{title:"Markttrends (Subscribed)",link:"/subscribed/"},{title:"Fachbegriffe",link:"/glossary/"},{title:"LeitfÃ¤den",link:"/guides/"},{title:"Analyseberichte",link:"/resources/filter/content_type/report/"},{title:"Veranstaltungen",link:"/resources/events/"},{title:"Alle Ressourcen ansehen",link:"/resources/"}]},{header:{title:"Support"},meta:{style:{"item-body-columns":2,"justify-items":"flex-start",cssClass:"SupportCenter"}},body:[{title:"Wissenszentrum",externalLink:"https://docs.zuora.com/",subBody:"Starten Sie die Integration der Zuora-Produkte, um Ihr GeschÃ¤ft auszubauen."},{title:"Developer Center",externalLink:"/",subBody:"Verbesserte Integrationen mit Microsoft, Snowflake und weiteren Anbietern."},{title:"Community Portal",externalLink:"https://community.zuora.com/",subBody:"Vernetzen und tauschen Sie sich mit anderen Abonnement-Unternehmen sowie Finanz- und ProduktfÃ¼hrungskrÃ¤ften aus."},{title:"Zuora University",link:"/zuora-training/",subBody:"Unsere Online-Trainingsplattform bietet Kurse, Lernpfade, von Lehrern geleitete Kurse sowie Zertifizierungsprogramme."},{title:"Support Center",externalLink:"https://support.zuora.com",subBody:"Erhalten Sie Hilfe und Antworten auf technische Fragen."}]}],company:[{title:"Karriere",link:"/careers/"},{title:"Team",link:"/about/team/"},{title:"Neuigkeiten",link:"/about/news-press/"},{title:"Unsere Partner",link:"/about/partners-ecosystem/"},{title:"Fallstudien",link:"/our-customers/"},{title:"Legal",link:"/about/legal/"},{title:"Auszeichnungen",link:"/about/awards/"}]},i11n:[{title:"English",link:"/",icon:"EnglishFlag",locale:"en"},{title:"FranÃ§ais",link:"/fr",icon:"FrenchFlag",locale:"fr"},{title:"Deutsch",link:"/de",icon:"GermanFlag",locale:"de"},{title:"æ—¥æœ¬èªž",link:"/jp",icon:"JapaneseFlag",locale:"ja"}]},fr:{ctasItems:[{title:"Parlez Ã  un expert",link:"/fr/talk-to-sales/",style:"teal"},{title:"Regarder une dÃ©mo",link:"/fr/resources/demo-on-demand/"}],menuKeys:{contact:"Contact",login:"Se Connecter",company:"Entreprise",solutions:"Solutions",products:"Produits",resources:"Ressources"},navItems:{solutions:[{header:{title:"Applications MÃ©tier",link:"/solutions/"},meta:{style:{cssClass:"UseCases"}},body:[{title:"Order-to-cash",link:"/products/order-to-cash/"},{title:"Gestion d'abonnements",link:"/products/subscription-management/"},{title:"MonÃ©tisation Ã  l'usage",link:"/solutions/monetize-usage/"},{title:"Facturation IA",link:"/solutions/zuora-copilot-ai-powered-billing/"},{title:"Acquisition & fidÃ©lisation clients",link:"/solutions/acquire-retain-subscribers/"},{title:"Solutions de recharge VE",link:"/solutions/ev-charging/"},{title:"Voir toutes les solutions",link:"/solutions/"}]},{header:{title:"Secteurs"},meta:{style:{cssClass:"Industries"}},body:[{title:"SaaS",link:"/solutions/saas/"},{title:"Secteur manufacturier & IOT",link:"/solutions/manufacturing-iot/"},{title:"MÃ©dia et divertissements",link:"/solutions/media-entertainment/"}]}],products:[{header:{title:"Zuora Billing",body:"Conception de tarifications flexibles pour des frais rÃ©currents, ponctuels et de consommation.",link:"/products/billing-software/"},meta:{style:{"item-body-columns":3,cssClass:"ZuoraBilling"}},body:[{title:"Tarification et Packaging",link:"/products/billing-software/pricing-and-packaging/"},{title:"Gestion des devis (CPQ)",link:"/products/cpq-software/"},{title:"Gestion des commandes",link:"/products/billing-software/order-management/"},{title:"Mesure de la consommation",link:"/products/billing-software/consumption-metering"},{title:"Facturation et conformitÃ© fiscale",link:"/products/billing-software/e-invoicing-and-tax-compliance/"},{title:"Paiements",link:"/products/payment-solutions/"},{title:"API et Connecteurs",link:"/products/zuora-platform/integration-hub/"},{title:"ExtensibilitÃ©",link:"/products/zuora-platform/extension-studio/"}]},{header:{title:"Zuora Payments",body:"LibÃ©rez la croissance des revenus grÃ¢ce Ã  l'optimisation des paiements.",link:"/products/payment-solutions/"},meta:{style:{"item-body-columns":1,cssClass:"ZuoraPayments"}},body:[{title:"Couverture de Paiement et Routage de Passerelle",link:"/products/payment-solutions/payment-coverage-and-gateway-routing/"},{title:"Lutte contre la Fraude et Gestion des DÃ©faillances de Paiement",link:"/products/payment-solutions/payment-fraud-and-failures/"}]},{header:{title:"Zuora Collections",body:"Encaissement propulsÃ© par l'IA conÃ§u pour protÃ©ger les relations client",link:"/products/collections/"},meta:{style:{cssClass:"ZuoraCollections"}}},{header:{title:"Zuora Revenue",body:"Automatisation de la reconnaissance des revenus pour chaque modÃ¨le d'affaires.",link:"/products/revenue/"}},{header:{title:"Zephr",body:"Renforcez l'acquisition et la rÃ©tention d'abonnÃ©s Ã  chaque Ã©tape de leur cycle de vie.",link:"/products/zephr/"},meta:{style:{"item-body-columns":3,cssClass:"Zephr"}},body:[{title:"Paywall IA",link:"/products/zephr/ai-paywall/"},{title:"StratÃ©gies de donnÃ©es First-Party",link:"/products/zephr/first-party-data-strategies/"},{title:"Personnalisation spÃ©cifique Ã  l'utilisateur",link:"/products/zephr/user-specific-personalization/"}]},{header:{title:"Zuora Platform",body:"Maximisez votre agilitÃ© Ã  travers votre Ã©cosystÃ¨me technologique.",link:"/products/zuora-platform/"},meta:{style:{"item-body-columns":3,cssClass:"ZuoraPlatform"}},body:[{title:"Studio d'extensions",link:"/products/zuora-platform/extension-studio/"},{title:"Analyses",link:"/products/zuora-platform/analytics/"},{title:"SÃ©curitÃ©",link:"/products/zuora-platform/security/"},{title:"Integration Hub",link:"/products/zuora-platform/integration-hub/"},{title:"Centre de commande administratif",link:"/products/zuora-platform/admin-command-center/"}]}],resources:[{header:{title:"Par Type"},meta:{style:{cssClass:"Type"}},body:[{title:"Ã‰tudes de cas",link:"/our-customers/case-studies/"},{title:"Webinaires",link:"/resources/filter/content_type/video/"},{title:"Tendances sectorielles (Subscribed)",link:"/subscribed/"},{title:"Lexique financier",link:"/glossary/"},{title:"Guides pratiques",link:"/guides/"},{title:"Rapports d'analyse",link:"/resources/filter/content_type/report/"},{title:"Ã‰vÃ©nements",link:"/resources/events/"},{title:"Voir toutes les ressources",link:"/resources/"}]},{header:{title:"Support"},meta:{style:{"item-body-columns":2,"justify-items":"flex-start",cssClass:"SupportCenter"}},body:[{title:"Centre de Connaissances",externalLink:"https://docs.zuora.com/",subBody:"Commencez Ã  intÃ©grer les produits de Zuora pour dÃ©velopper votre entreprise"},{title:"Centre pour DÃ©veloppeurs",externalLink:"/",subBody:"IntÃ©grations amÃ©liorÃ©es avec Microsoft, Snowflake et plus encore"},{title:"Portail Communautaire",externalLink:"https://community.zuora.com/",subBody:"Connectez vous au rÃ©seau professionel dÃ©diÃ© Ã  la Subscription Economy composÃ© de business Ã  abonnements et leaders des fonctions de finance et de produit"},{title:"Zuora University",link:"/zuora-training/",subBody:"Notre plateforme de formation en ligne proposant des cours, des parcours d'apprentissage, des classes dirigÃ©es par des instructeurs, et des parcours de certification."},{title:"Support Center",externalLink:"https://support.zuora.com",subBody:"Obtenez de l'aide pour vos problÃ¨mes techniques"}]}],company:[{title:"CarriÃ¨res",link:"/careers/"},{title:"Notre Ã©quipe",link:"/about/team/"},{title:"ActualitÃ©s",link:"/about/news-press/"},{title:"Partenaires",link:"/about/partners-ecosystem/"},{title:"Clients",link:"/our-customers/"},{title:"Mentions lÃ©gales",link:"/about/legal/"},{title:"Distinctions",link:"/about/awards/"}]},i11n:[{title:"English",link:"/",icon:"EnglishFlag",locale:"en"},{title:"FranÃ§ais",link:"/fr",icon:"FrenchFlag",locale:"fr"},{title:"Deutsch",link:"/de",icon:"GermanFlag",locale:"de"},{title:"æ—¥æœ¬èªž",link:"/jp",icon:"JapaneseFlag",locale:"ja"}]},ja:{ctasItems:[{title:"ãŠå•ã„åˆã›ãƒ»ã”ç›¸è«‡",link:"/jp/talk-to-sales/",style:"teal"},{title:"ãƒ‡ãƒ¢ã‚’è¦‹ã‚‹",link:"/jp/resources/demo-on-demand/"}],menuKeys:{contact:"é€£çµ¡å…ˆ",login:"ãƒ­ã‚°ã‚¤ãƒ³",company:"ä¼šç¤¾æ¡ˆå†…",solutions:"èª²é¡Œã¨ã‚½ãƒªãƒ¥ãƒ¼ã‚·ãƒ§ãƒ³",products:"Zuoraå…¨è£½å“",resources:"è³‡æ–™ãƒ»ã‚¤ãƒ™ãƒ³ãƒˆãƒ»ã‚µãƒãƒ¼ãƒˆ"},navItems:{solutions:[{header:{title:"ãƒ“ã‚¸ãƒã‚¹ä¸Šã®èª²é¡Œ",link:"/solutions/"},meta:{style:{cssClass:"UseCases"}},body:[{title:"å—æ³¨ã‹ã‚‰å…¥é‡‘ã¾ã§",link:"/products/order-to-cash/"},{title:"å®šæœŸå¥‘ç´„ç®¡ç†",link:"/products/subscription-management/"},{title:"å¾“é‡èª²é‡‘åˆ¶ã‚ªãƒ•ã‚¡ãƒ¼ã®åŽç›ŠåŒ–",link:"/solutions/monetize-usage/"},{title:"AIã‚’æ´»ç”¨ã—ãŸè«‹æ±‚ãƒ—ãƒ­ã‚»ã‚¹ã®å¤‰é©",link:"/solutions/zuora-copilot-ai-powered-billing/"},{title:"è³¼èª­è€…ã®ç²å¾—ã¨ç¶­æŒ",link:"/solutions/acquire-retain-subscribers/"},{title:"EVå……é›»æ–™é‡‘ã®è«‹æ±‚",link:"/solutions/ev-charging/"},{title:"ã‚½ãƒªãƒ¥ãƒ¼ã‚·ãƒ§ãƒ³ä¸€è¦§",link:"/solutions/"}]},{header:{title:"æ¥­ç•Œã”ã¨ã®èª²é¡Œ"},meta:{style:{cssClass:"Industries"}},body:[{title:"SaaSæ¥­ç•Œ",link:"/solutions/saas/"},{title:"è£½é€ æ¥­ã¨IoT",link:"/solutions/manufacturing-iot/"},{title:"ãƒ¡ãƒ‡ã‚£ã‚¢åŠã³ã‚¨ãƒ³ã‚¿ãƒ¼ãƒ†ã‚¤ãƒ¡ãƒ³ãƒˆæ¥­ç•Œ",link:"/solutions/media-entertainment/"}]}],products:[{header:{title:"Zuora Billing",body:"æŸ”è»Ÿãªä¾¡æ ¼è¨­å®šã‚’è¨­è¨ˆã—ã€å…¨ã¦ã®ä¾¡æ ¼ãƒ¢ãƒ‡ãƒ«ã«å¯¾å¿œã—ãŸè«‹æ±‚ã‚’å®Ÿç¾",link:"/products/billing-software/"},meta:{style:{"item-body-columns":3,cssClass:"ZuoraBilling"}},body:[{title:"ãƒ—ãƒ©ã‚¤ã‚·ãƒ³ã‚°ãƒ»ãƒ‘ãƒƒã‚±ãƒ¼ã‚¸ãƒ³ã‚°",link:"/products/billing-software/pricing-and-packaging/"},{title:"è¦‹ç©ã‚Š (CPQ)",link:"/products/cpq-software/"},{title:"ã‚ªãƒ¼ãƒ€ãƒ¼ç®¡ç†",link:"/products/billing-software/order-management/"},{title:"ã‚³ãƒ³ã‚µãƒ³ãƒ—ã‚·ãƒ§ãƒ³ãƒ»ãƒ¡ãƒ¼ã‚¿ãƒªãƒ³ã‚°",link:"/products/billing-software/consumption-metering"},{title:"é›»å­è«‹æ±‚æ›¸ãƒ»ç¨Žå‹™ã‚³ãƒ³ãƒ—ãƒ©ã‚¤ã‚¢ãƒ³ã‚¹",link:"/products/billing-software/e-invoicing-and-tax-compliance/"},{title:"æ±ºæ¸ˆã‚½ãƒªãƒ¥ãƒ¼ã‚·ãƒ§ãƒ³",link:"/products/payment-solutions/"},{title:"API & ã‚³ãƒã‚¯ã‚¿ãƒ¼",link:"/products/zuora-platform/integration-hub/"},{title:"æ‹¡å¼µæ€§",link:"/products/zuora-platform/extension-studio/"}]},{header:{title:"Zuora Payments",body:"æ±ºæ¸ˆæœ€é©åŒ–ã§åŽç›Šæˆé•·ã‚’è§£ãæ”¾ã¤",link:"/products/payment-solutions/"},meta:{style:{"item-body-columns":1,cssClass:"ZuoraPayments"}},body:[{title:"æ±ºæ¸ˆæ‰‹æ®µã‚’ç¶²ç¾…çš„ã«çµ±åˆ",link:"/products/payment-solutions/payment-coverage-and-gateway-routing/"},{title:"æ±ºæ¸ˆã®ä¸æ­£åˆ©ç”¨ã¨ã‚¨ãƒ©ãƒ¼ã®é˜²æ­¢",link:"/products/payment-solutions/payment-fraud-and-failures/"}]},{header:{title:"Zuora Collections",body:"é¡§å®¢é–¢ä¿‚ã‚’å®ˆã‚‹ãŸã‚ã«æ§‹ç¯‰ã•ã‚ŒãŸAIæ­è¼‰ã®å‚µæ¨©å›žåŽ",link:"/products/collections/"},meta:{style:{cssClass:"ZuoraCollections"}}},{header:{title:"Zuora Revenue",body:"ã©ã®ãƒ“ã‚¸ãƒã‚¹ãƒ¢ãƒ‡ãƒ«ã«ã‚‚å¯¾å¿œã™ã‚‹åŽç›Šèªè­˜ã‚’è‡ªå‹•åŒ–",link:"/products/revenue/"}},{header:{title:"Zephr",body:"ã‚µãƒ–ã‚¹ã‚¯ãƒ©ã‚¤ãƒãƒ¼ã®ãƒ©ã‚¤ãƒ•ã‚µã‚¤ã‚¯ãƒ«å…¨ä½“ã§ç²å¾—ã¨ç¶­æŒã‚’æŽ¨é€²",link:"/products/zephr/"},meta:{style:{"item-body-columns":3,cssClass:"Zephr"}},body:[{title:"AIãƒšã‚¤ã‚¦ã‚©ãƒ¼ãƒ«",link:"/products/zephr/ai-paywall/"},{title:"ãƒ•ã‚¡ãƒ¼ã‚¹ãƒˆãƒ‘ãƒ¼ãƒ†ã‚£ãƒ‡ãƒ¼ã‚¿ã®åŽé›†ã¨æ´»ç”¨",link:"/products/zephr/first-party-data-strategies/"},{title:"ãƒ‘ãƒ¼ã‚½ãƒŠãƒ©ã‚¤ã‚º",link:"/products/zephr/user-specific-personalization/"}]},{header:{title:"Zuora Platform",body:"ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã‚¨ã‚³ã‚·ã‚¹ãƒ†ãƒ å…¨ä½“ã§ã®æ•æ·æ€§ã‚’æœ€å¤§åŒ–",link:"/products/zuora-platform/"},meta:{style:{"item-body-columns":3,cssClass:"ZuoraPlatform"}},body:[{title:"æ‹¡å¼µæ€§",link:"/products/zuora-platform/extension-studio/"},{title:"åˆ†æžãƒ»ãƒ¬ãƒãƒ¼ãƒˆ",link:"/products/zuora-platform/analytics/"},{title:"ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£",link:"/products/zuora-platform/security/"},{title:"ä»–ã‚·ã‚¹ãƒ†ãƒ é€£æº",link:"/products/zuora-platform/integration-hub/"},{title:"ç®¡ç†ã‚³ãƒ³ã‚½ãƒ¼ãƒ«",link:"/products/zuora-platform/admin-command-center/"}]}],resources:[{header:{title:"è³‡æ–™ãƒ»ã‚¤ãƒ™ãƒ³ãƒˆ"},meta:{style:{cssClass:"Type"}},body:[{title:"äº‹ä¾‹ç ”ç©¶",link:"/our-customers/case-studies/"},{title:"å‹•ç”»ã‚»ãƒŸãƒŠãƒ¼",link:"/resources/filter/content_type/video/"},{title:"æ¥­ç•Œãƒˆãƒ¬ãƒ³ãƒ‰ (Subscribed)",link:"/subscribed/"},{title:"å°‚é–€ç”¨èªžé›†",link:"/glossary/"},{title:"å®Ÿè·µã‚¬ã‚¤ãƒ‰",link:"/guides/"},{title:"åˆ†æžãƒ¬ãƒãƒ¼ãƒˆ",link:"/resources/filter/content_type/report/"},{title:"ã‚¤ãƒ™ãƒ³ãƒˆæƒ…å ±",link:"/resources/events/"},{title:"ãƒªã‚½ãƒ¼ã‚¹ã‚»ãƒ³ã‚¿ãƒ¼ä¸€è¦§",link:"/resources/"}]},{header:{title:"ã‚µãƒãƒ¼ãƒˆ"},meta:{style:{"item-body-columns":2,"justify-items":"flex-start",cssClass:"SupportCenter"}},body:[{title:"ãƒŠãƒ¬ãƒƒã‚¸ã‚»ãƒ³ã‚¿ãƒ¼",externalLink:"https://docs.zuora.com/",subBody:"Zuoraè£½å“ã®çµ±åˆé–‹å§‹ã§ãƒ“ã‚¸ãƒã‚¹ã‚’æˆé•·ã•ã›ã‚‹"},{title:"ãƒ‡ãƒ™ãƒ­ãƒƒãƒ‘ãƒ¼ã‚»ãƒ³ã‚¿ãƒ¼",externalLink:"/",subBody:"Microsoftã€Snowflakeç­‰ã¨ã®çµ±åˆå¼·åŒ–"},{title:"ã‚³ãƒŸãƒ¥ãƒ‹ãƒ†ã‚£ãƒãƒ¼ã‚¿ãƒ«",externalLink:"https://community.zuora.com/",subBody:"åŒæ¥­ä»–ç¤¾ã‚„è²¡å‹™ãƒ»è£½å“ãƒªãƒ¼ãƒ€ãƒ¼ã¨äº¤æµãƒ»å…±æœ‰ã™ã‚‹"},{title:"Zuoraãƒ¦ãƒ‹ãƒãƒ¼ã‚·ãƒ†ã‚£",link:"/zuora-training/",subBody:"ã‚ªãƒ³ãƒ©ã‚¤ãƒ³ç ”ä¿®ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ï¼šã‚³ãƒ¼ã‚¹ã€å­¦ç¿’ãƒ‘ã‚¹ã€è¬›å¸«ä¸»å°Žã‚¯ãƒ©ã‚¹ã€èªå®šãƒ—ãƒ­ã‚°ãƒ©ãƒ ã‚’æä¾›"},{title:"ã‚µãƒãƒ¼ãƒˆã‚»ãƒ³ã‚¿ãƒ¼",externalLink:"https://support.zuora.com",subBody:"æŠ€è¡“çš„ãªå•é¡Œã«å¯¾ã™ã‚‹ãƒ˜ãƒ«ãƒ—ã¨å›žç­”ã‚’å¾—ã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚"}]}],company:[{title:"æŽ¡ç”¨æƒ…å ±",link:"/careers/"},{title:"ãƒãƒ¼ãƒ ",link:"/about/team/"},{title:"ãƒ‹ãƒ¥ãƒ¼ã‚¹ãƒ«ãƒ¼ãƒ ",link:"/about/news-press/"},{title:"ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼",link:"/about/partners-ecosystem/"},{title:"ãŠå®¢æ§˜",link:"/our-customers/"},{title:"ãƒªãƒ¼ã‚¬ãƒ«",link:"/about/legal/"},{title:"å—è³ž",link:"/about/awards/"}]},i11n:[{title:"English",link:"/",icon:"EnglishFlag",locale:"en"},{title:"FranÃ§ais",link:"/fr",icon:"FrenchFlag",locale:"fr"},{title:"Deutsch",link:"/de",icon:"GermanFlag",locale:"de"},{title:"è¨€èªž",link:"/jp",icon:"JapaneseFlag",locale:"ja"}]}};var Ir=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ar=class extends(qn(ie)){constructor(){super(),this.getHomepageLink=e=>{var t,o;const i=e.links.filter((e=>"home"===e.id));return(null===(t=i[0])||void 0===t?void 0:t.link)?null===(o=i[0])||void 0===o?void 0:o.link:"/"},this.renderZuoraLogo=()=>{const e=this.getHomepageLink(this.menuData);return M`
            <a href="${this.computeLink(e)}"
               data-tracking-type="logo"
               data-tracking-label="Zuora Home">

                <img alt="Zuora Logo"
                     width="117"
                     src="https://nav-assets.zuora.life/img/zuora-wordmark-v2.svg" />
            </a>`},this.menuData=ur}firstUpdated(){var e;null===(e=this.shadowRoot)||void 0===e||e.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(()=>{this.doTrackLink(e,"universal header")}))}))}render(){return M`
            ${this.renderZuoraLogo()}
        `}};Ar.styles=r`
        img {
            display: block;
        }
    `,Ir([le()],Ar.prototype,"menuData",void 0),Ar=Ir([re("wc-mega-header-logo")],Ar);const Er=r`
    :host {
        --body-inner-block-padding: 24px;
        --body-inner-inline-padding: 32px;
    }

    .NavRedesignBottom {
        display: flex;
        justify-content: center;
        order: 1;
        position: relative;
        margin-block-start: 60px;
        top: 0;
        height: auto;
        width: 100%;
        background-color: var(--zuora-header-background-color);
        z-index: 30;
    }

    .NavRedesignBottom.isLoggedIn {
        top: var(--wp-admin--admin-bar--height);
    }

    .NavRedesign-logo {
        display: none;
    }

    .NavRedesignBottom .NavRedesign-navInner {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        max-width: var(--zuora-generic-header-max-width);
    }

    .NavRedesignBottom .NavRedesign-left,
    .NavRedesignBottom .NavRedesign-right {
        align-items: center;
    }

    .NavRedesignBottom .NavRedesign-left {
        display: flex;
    }

    .NavRedesignBottom .NavRedesign-right {
        display: none;
    }

    .NavRedesignBottom .NavRedesign-left {
        flex-direction: column;
        justify-content: flex-start;
        gap: 24px;
    }

    .NavRedesignBottom .NavRedesignNav {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .NavRedesignBottom .NavRedesignNav menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: var(--zuora-generic-header-max-width);
    }

    .NavRedesignBottom .Items {
        max-width: var(--zuora-generic-header-max-width);
        margin-inline: auto;
    }

    .NavRedesignBottom .Items-inner {
        display: flex;
        flex-direction: column;
    }

    .NavRedesignBottom .Item {
        position: relative;
    }

    .NavRedesignBottom .Item:not(:first-of-type) {
        margin-block-start: 16px;
    }

    .NavRedesignBottom .Item:not(:last-child):hover .Item-header.hasHeaderContent:after {
        border-right: none;
    }

    .NavRedesignBottom .Item:not(:last-child) .Item-header.hasHeaderContent:after {
        content: '';
        border-right: 1px solid rgba(0, 0, 0, .10);
        position: absolute;
        top: 16px;
        right: 0;
        height: 75%;
        width: 100%;
    }

    .NavRedesignBottom .Item:hover a.Item-header span,
    .NavRedesignBottom .Item:hover div.Item-header span,
    .NavRedesignBottom .Item.isActive a.Item-header span,
    .NavRedesignBottom .Item.isActive div.Item-header span {
        transition: var(--default-transition);
    }

    .NavRedesignBottom .Item-header {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .NavRedesignBottom .Item-header span {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-inline: 16px;
        padding-block: 12px;
        width: 100%;
        background-color: var(--color-forest);
        color: var(--color-white);
    }

    .NavRedesignBottom a.Item-header span {
        text-decoration: underline;
    }

    .NavRedesignBottom .Item-header p {
        display: none;
        padding: 10px 16px;
    }

    .NavRedesignBottom .Item-header-icon {
        display: block;
    }

    .NavRedesignBottom .Item-body {
        display: block;
    }

    .NavRedesignBottom .Item-body .Item-bodyInner {
        display: flex;
        flex-direction: column;
        width: 100%;
        column-gap: 40px;
        row-gap: 8px;
    }

    .NavRedesignBottom .Item-body li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: var(--justify-items);
        width: auto;
        height: 100%;
        border-left: 2px solid var(--color-white);
        cursor: pointer;
        transition: var(--default-transition);
    }

    .NavRedesignBottom .Item-body li a {
        padding: 4px 16px;
        width: 100%;
        color: var(--zuora-card-background-dark);
    }

    .NavRedesignBottom .Item-body li a:hover {
        cursor: pointer;
    }

    .NavRedesignBottom .Item-body li a p {
        display: none;
    }

    .NavRedesignBottom .NavRedesignNav-ctas {
        display: flex;
        column-gap: 32px;
    }

    .NavRedesignBottom .NavRedesignNav-cta a {
        line-height: 150%;
    }

    @media screen and (min-width: 1024px) {
        .NavRedesignBottom {
            margin-block-start: 0;
            order: 2;
            position: sticky;
            height: var(--zuora-generic-header-height);
            border-bottom: 2px solid var(--color-white);
        }

        .NavRedesign-logo {
            display: block;
        }

        .NavRedesignBottom[data-is-english="false"] .NavRedesignNav-ctas {
            column-gap: 8px;
        }

        .NavRedesignBottom:has(span.isActive) {
            border-bottom: 2px solid var(--color-teal, #00D2B9);
        }

        .NavRedesignBottom .NavItem-topLevel {
            background-color: var(--color-cloud);
            box-shadow: -1px 1px 1px rgba(0, 0, 0, .10);
        }

        .NavRedesignBottom .NavRedesign-navInner {
            flex-direction: row;
        }

        .NavRedesignBottom .NavRedesign-left,
        .NavRedesignBottom .NavRedesign-right {
            display: flex;
        }

        .NavRedesignBottom .NavRedesign-left {
            flex-direction: row;
        }

        .NavRedesignBottom .NavRedesign-right {
            gap: 24px;
        }

        .NavRedesignBottom .NavRedesignNav {
            width: auto;
        }

        .NavRedesignBottom .NavRedesignNav menu {
            flex-direction: row;
            gap: 24px;
            width: auto;
        }

        .NavRedesignBottom .Items {
            margin-block-start: 32px;
            padding-inline: 48px;
        }

        .NavRedesignBottom .Items-inner {
            display: grid;
            grid-template-columns: repeat(var(--items-inner-columns), minmax(auto, 196px));
            gap: 16px;
        }

        .NavRedesignBottom .Item:not(:first-of-type) {
            margin-block-start: 0;
        }

        .NavRedesignBottom .Item:hover,
        .NavRedesignBottom .Item.isActive {
            background-color: var(--color-silver);
            transition: all .25s linear;
        }

        .NavRedesignBottom .ProductsMenu .Item.hasBodyContent:hover:after,
        .NavRedesignBottom .ProductsMenu .Item.hasBodyContent.isActive:after {
            content: '';
            display: block;
            width: 100%;
            background-color: var(--color-silver);
            height: 1px;
            position: absolute;
            bottom: -1px;
        }

        .NavRedesignBottom .Item:hover .Item-body,
        .NavRedesignBottom .Item.isActive .Item-body {
            opacity: 1;
            visibility: visible;
            height: fit-content;
            width: auto;
            box-shadow: -1px 1px 1px rgba(0, 0, 0, .10);
        }

        .NavRedesignBottom .Item-header {
            margin-top: 1px;
            max-width: 196px;
            color: var(--color-black);
            text-decoration: none;
            transition: var(--default-transition);
            z-index: 100;
        }

        .NavRedesignBottom .Item-header span {
            display: block;
            width: 100%;
            padding-inline-start: 16px;
            padding-block: 16px;
            background-color: transparent;
            color: var(--color-black);
            transition: var(--default-transition);
            text-decoration: none;
        }

        .NavRedesignBottom a.Item-header span {
            text-decoration: none;
        }

        .NavRedesignBottom .Item-header p {
            display: block;
            padding: 16px 16px 24px;
        }

        .NavRedesignBottom .Item-header-icon {
            display: none;
        }

        .NavRedesignBottom .Item:hover a.Item-header span,
        .NavRedesignBottom .Item:hover div.Item-header span,
        .NavRedesignBottom .Item.isActive a.Item-header span,
        .NavRedesignBottom .Item.isActive div.Item-header span {
            background-color: var(--color-forest);
            color: var(--color-white);
        }

        .NavRedesignBottom .Item-body {
            display: block;
            position: absolute;
            top: 100%;
            background-color: var(--color-silver);
            border-top: 1px solid var(--color-forest);
            margin-inline-start: -32px;
        }

        .NavRedesignBottom .Item-body li {
            min-width: 194px;
            max-width: 398px;
        }

        .NavRedesignBottom .Item-body li a {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 12px 16px;
            height: 100%;
        }

        .NavRedesignBottom .Item.SupportCenter li a {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }

        .NavRedesignBottom .Item-body .Item-bodyInner {
            display: grid;
            grid-template-columns: repeat(var(--item-body-columns), minmax(min-content, auto));
            row-gap: 8px;
            padding: var(--body-inner-block-padding) var(--body-inner-inline-padding);
            min-width: calc(var(--zuora-generic-header-max-width) * .5);
            background-color: var(--color-silver);
        }

        .NavRedesignBottom .Item.Zephr .Item-body,
        .NavRedesignBottom .Item.ZuoraPlatform .Item-body{
            margin-inline-start: -480px;
        }


        .NavRedesignBottom .Item-body li a {
            color: var(--zuora-header-link-color);
        }

        .NavRedesignBottom .Item-body li:hover,
        .NavRedesignBottom .Item-body li.isActive {
            background-color: var(--color-white);
            border-left: 2px solid var(--color-black);
            transition: var(--default-transition);
            cursor: pointer;
        }

        .NavRedesignBottom .Item-body li.isActive {
            outline: -webkit-focus-ring-color auto 1px;
        }

        .NavRedesignBottom .Item-body li a p {
            display: block;
        }
    }

    @media screen and (min-width: 1440px) {
        .NavRedesignBottom[data-is-english="false"] .NavRedesignNav-ctas {
            column-gap: 32px;
        }

        .NavRedesignBottom .Items {
            padding-inline: 32px;
        }

        .NavRedesignBottom .Items-inner {
            gap: 40px;
        }

        .NavRedesignBottom .Item .Item-body {
            /*min-width: calc(var(--zuora-generic-header-max-width) * .5);*/
        }

        .NavRedesignBottom .Item.UseCases .Item-body,
        .NavRedesignBottom .Item.ZuoraBilling .Item-body,
        .NavRedesignBottom .Item.Type .Item-body {
            margin-inline-start: -32px;
        }

        .NavRedesignBottom .Item.Industries .Item-body,
        .NavRedesignBottom .Item.ZuoraPayments .Item-body,
        .NavRedesignBottom .Item.Topic .Item-body,
        .NavRedesignBottom .Item.SupportCenter .Item-body {
            margin-inline-start: -268px;
        }

        .NavRedesignBottom .Item.Zephr .Item-body,
        .NavRedesignBottom .Item.ZuoraPlatform .Item-body {
            margin-inline-start: -480px;
        }

        .NavRedesignBottom .Item-body .Item-bodyInner {
            row-gap: 24px;
        }
    }
`,Rr=r`
    .NavRedesignTop {
        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;
        background: var(--color-white);
        z-index: 40;
        order: 2;
    }

    .NavRedesignTop .NavRedesign-navInner {
        display: flex;
        flex-direction: column;
        max-width: var(--zuora-generic-header-max-width);
        width: 100%;
    }

    .NavRedesignTop .NavRedesign-left,
    .NavRedesignTop .NavRedesign-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        column-gap: 16px;
    }

    .NavRedesignTop ul {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        max-width: var(--zuora-generic-header-max-width);
        align-items: center;
    }

    .NavRedesignTop ul li {
        cursor: pointer;
    }

    .NavItem.CompanyMenu,
    .NavItem.LanguageMenu {
        position: relative;
        width: 100%;
    }

    .NavItem.LanguageMenu:not(.MobileOnly) {
        display: none;
    }

    .CompanyMenu .NavItem-topLevel,
    .LanguageMenu .NavItem-topLevel {
        position: relative;
    }

    .LanguageMenu .NavItem-header span {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .LanguageMenu .NavItem-header span:before {
        display: block;
        width: auto;
        height: auto;
        padding-block-start: 3px;
    }

    .CompanyMenu .CompanyLink,
    .LanguageMenu .LanguageLink {
        padding: 4px 16px !important;
        font-weight: 400;
        line-height: 150%;
    }

    .LanguageMenu .LanguageLink {
        display: flex !important;
        gap: 8px;
        align-items: center;
    }

    .LanguageMenu .LanguageLink:before {
        display: block;
        width: auto;
        height: auto;
        padding-block-start: 3px;
    }

    .LanguageMenu .EnglishFlag:before {
        content: '\\01F1FA \\01F1F8';
    }

    .LanguageMenu .FrenchFlag:before {
        content: '\\01F1EB \\01F1F7';
    }

    .LanguageMenu .GermanFlag:before {
        content: '\\01F1E9 \\01F1EA';
    }

    .LanguageMenu .JapaneseFlag:before {
        content: '\\01F1EF \\01F1F5';
    }

    .CompanyMenu .Items-inner ul,
    .LanguageMenu .Items-inner ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 8px;
        width: 100%;
        padding-block: 16px;
    }

    .CompanyMenu .Items-inner li,
    .LanguageMenu .Items-inner li {
        width: 100%;
    }

    .CompanyMenu .Items-inner li.isActive,
    .LanguageMenu .Items-inner li.isActive {
        outline: -webkit-focus-ring-color auto 1px;
    }

    .LanguageMenu .Items-inner li .TrackingRedesignLink,
    .LanguageMenu .Items-inner li a {
        text-decoration: none;
    }

    .NavRedesignTop .NavRedesign-right.MobileOnly-ctas .NavRedesignNav-ctas {
        display: flex;
        padding: 32px;
        justify-content: space-between;
        width: 100%;
    }

    .NavRedesignTop .NavRedesign-right.MobileOnly-ctas .NavRedesignNav-ctas a {
        line-height: 150%;
    }

    @media screen and (min-width: 1024px) {
        .NavRedesignTop .NavRedesign-right.MobileOnly-ctas .NavRedesignNav-ctas {
            padding: 32px 64px;
        }
    }

    @media screen and (min-width: 1024px) {
        .NavRedesignTop {
            order: 1;
            height: 60px;
            border-bottom: 2px solid var(--color-cloud, #F1F5F8);
        }

        .NavRedesignTop .NavRedesign-navInner {
            flex-direction: row;
            justify-content: space-between;
        }

        .NavRedesignTop .NavRedesign-left,
        .NavRedesignTop .NavRedesign-right {
            display: flex;
            flex-direction: row;
        }

        .NavItem.CompanyMenu,
        .NavItem.LanguageMenu {
            width: auto;
        }

        .NavItem.LanguageMenu:not(.MobileOnly) {
            display: flex;
        }

        .CompanyMenu .NavItem-topLevel,
        .LanguageMenu .NavItem-topLevel {
            position: absolute;
            top: 45px;
            width: auto;
            background-color: var(--color-cloud);
            z-index: 100;
        }

        .CompanyMenu .NavItem-topLevel.isActive,
        .LanguageMenu .NavItem-topLevel.isActive {
            border-top: 2px solid var(--color-teal);
        }

        .CompanyMenu .CompanyLink,
        .LanguageMenu .LanguageLink {
            padding: 16px 28px 16px 16px !important;
            font-weight: 500;
            line-height: 100%;
        }

        .CompanyMenu .Items-inner ul,
        .LanguageMenu .Items-inner ul {
            row-gap: 0;
            width: max-content;
            box-shadow: -1px 1px 1px rgba(0, 0, 0, .10);
            padding-block: 0;
        }

        .CompanyMenu .Items-inner li:hover,
        .LanguageMenu .Items-inner li:hover,
        .CompanyMenu .Items-inner li.isActive,
        .LanguageMenu .Items-inner li.isActive {
            background-color: var(--color-silver);
        }
    }
`,_r=r`
    :host {
        --default-transition: all .1s linear;
    }

    @media screen and (max-width: 1024px) {
        :host {
            display: flex;
            flex-direction: column;
            width: 100vw;
            position: relative;
            scrollbar-width: none;
            overflow-y: scroll;
            overflow-x: hidden;
            z-index: 1000;
        }

        :host::-webkit-scrollbar {
            display: none;
        }
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    li {
        list-style: none;
    }

    a,
    .TrackingRedesignLink {
        box-sizing: border-box;
        cursor: pointer;
        display: block;
        font-size: 16px;
        position: relative;
        color: var(--zuora-header-link-color);
        font-weight: 500;
        text-decoration: underline;
    }

    .Button {
        text-decoration: none;
    }

    @media screen and (min-width: 1024px) {
        a,
        .TrackingRedesignLink {
            text-decoration: none;
        }
    }
`,Nr=r`
    .NavItem {
        display: flex;
        flex-direction: column;
    }

    .NavItem-header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        color: var(--zuora-header-link-color);
        cursor: pointer;
        padding: 10px 16px;
        width: 100%;
        border-bottom: 1px solid var(--zuora-generic-border-color);
    }

    .NavItem-header.isActive {
        background-color: var(--color-cloud);
    }

    .NavItem-topLevel {
        position: relative;
        width: 100%;
        background: var(--zuora-header-background-color);
    }

    .NavItem-topLevel.isActive .Item-body {
        opacity: 1;
        visibility: visible;
        height: 100%;
        width: 100%;
        padding-block: 16px;
    }

    .NavItem-header i {
        display: block;
        font-size: 14px;
        line-height: 1;
        transform: rotate(0);
        transition: transform .25s linear;
    }

    .NavItem-header.isActive i {
        transform: rotate(180deg);
        transition: transform .25s linear;
    }

    .NavItem-header i:after {
        content: '\\f078';
        font-size: inherit;
        line-height: 1;
    }

    .NavItem.Contact,
    .NavItem.Login {
        display: none;
    }

    @media screen and (min-width: 1024px) {
        .NavItem {
            flex-direction: row;
        }

        .NavItem-header {
            justify-content: flex-start;
            width: auto;
            border: none;
            padding: 16px;
        }

        .NavItem-header:hover {
            background-color: var(--color-cloud);
        }

        .NavItem-topLevel {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100vw;
        }

        .NavItem-topLevel.isActive .Item-body {
            opacity: 0;
            visibility: hidden;
            height: 0;
            width: 0;
            padding-block: 0;
        }

        .NavItem.Contact,
        .NavItem.Login {
            display: flex;
        }
    }
`,Cr=r`


    .NavRedesignClearScreen {
        display: none;
        position: fixed;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, .60);
        top: 0;
        bottom: 0;
        z-index: 20;
    }

    .MobileOnly-menuSection .DesktopOnly.NavRedesign-logo,
    .DesktopOnly.NavRedesignTop,
    .DesktopOnly.NavRedesignBottom {
        display: none;
    }

    .MobileOnly-headerSection {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        background: white;
        padding-inline: 16px;
        z-index: 20;
    }

    .MobileOnly-headerSection.isLoggedIn {
        top: var(--wp-admin--admin-bar--height);
    }

    .MobileOnly-menuSection.isLoggedIn {
        top: calc(60px + var(--wp-admin--admin-bar--height));
    }

    .MobileOnly-headerSection .MenuOpen,
    .MobileOnly-headerSection .MenuClose {
        display: block;
        text-decoration: none;
        transition: opacity .25s ease-in;
    }

    .MobileOnly-headerSection .MenuOpen:after {
        content: '\\f0c9';
    }

    .MobileOnly-headerSection .MenuClose:after {
        content: '\\f00d';
    }

    .MobileOnly-headerSection:not(&.isMobileMenuOpen) .MenuOpen {
        visibility: visible;
        opacity: 1;
        height: 100%;
    }

    .MobileOnly-headerSection.isMobileMenuOpen .MenuOpen {
        visibility: hidden;
        opacity: 0;
        height: 0;
    }

    .MobileOnly-headerSection:not(&.isMobileMenuOpen) .MenuClose {
        visibility: hidden;
        opacity: 0;
        height: 0;
    }

    .MobileOnly-headerSection.isMobileMenuOpen .MenuClose {
        visibility: visible;
        opacity: 1;
        height: 100%;
    }

    .OpenCloseContainer a {
        text-decoration: none;
    }

    .MobileOnly .NavRedesign-logo {
        display: block;
    }

    .MobileOnly-menuSection {
        position: fixed;
        right: 0;
        top: 60px;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        background: white;
        overflow: auto;
        scrollbar-width: none;
    }

    .MobileOnly-menuSection::-webkit-scrollbar {
        display: none;
    }

    .MobileOnly-menuSection .NavRedesignBottom {
        margin-block-start: 0;
    }

    .MobileOnly-headerSection.isMobileMenuOpen + .MobileOnly-menuSection {
        right: 0;
        transition: right 0.5s ease-in-out;
    }

    .MobileOnly-headerSection:not(.isMobileMenuOpen) + .MobileOnly-menuSection {
        right: -100%;
        transition: right 0.5s ease-in-out;
    }

    @media screen and (min-width: 1024px) {
        .DesktopOnly.NavRedesignTop,
        .DesktopOnly.NavRedesignBottom {
            display: flex;
        }

        .NavRedesign-navInner {
            margin-inline: 48px;
        }

        .NavRedesignClearScreen {
            display: block;
        }

        .MobileOnly {
            display: none !important;
        }

        .NavRedesignTop,
        .NavRedesignBottom {
            margin-left: 0 !important;
            transition: none;
        }
    }

    @media screen and (min-width: 1440px) {
        .NavRedesign-navInner {
            margin-inline: 32px;
        }
    }
`;var $r=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Pr=class extends(qn(ie)){constructor(){super(),this.activeDomain="https://www.zuora.com",this.domainKeys={"subdomain-localhost":"https://localhost:8081","subdomain-www":"https://www.zuora.com","subdomain-zuoradev":"https://zuoradev.wpengine.com","subdomain-zuorastg":"https://zuorastg.wpengine.com"},this.injectGlobalStyles(),this.menuRedesignData=this.getLocaleData(this.locale),this.subdomain=`subdomain-${this.currentSubdomain}`,this.currentLocale=this.locale,this.langObject=[]}firstUpdated(){var e;null===(e=this.shadowRoot)||void 0===e||e.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(()=>{this.doTrackLink(e,"universal header")}))}))}injectGlobalStyles(){const e=document.createElement("style");e.id="wc-mega-menu-redesign",e.insertAdjacentHTML("afterbegin","\n            body {\n                margin-block-start: 60px !important;\n\n                @media screen and (min-width: 1024px) {\n                    margin-block-start: 0 !important;\n                }\n            }\n        "),this.doAppendToHead(e)}getCurrentDomain(){return this.subdomain&&void 0!==this.subdomain&&this.domainKeys[this.subdomain]?this.domainKeys[this.subdomain]:"https://www.zuora.com"}getLocaleData(e){return e&&void 0!==e?Sr[e]:Sr.en}buildCompanySection(){let e=1;const t=this.menuRedesignData.navItems.company.length;return M`
            <ul data-item-index="0" data-number-of-items="${t}">
                ${this.menuRedesignData.navItems.company.map((t=>{const o="en"===this.currentLocale?"":`${this.langObject[0].link}`,i=t.link?`${this.activeDomain}${o}${t.link}`:t.externalLink;return M`
                        <li data-nav-item="${e++}" tabindex="-1">
                            <a href="${i||"/"}"
                               @click="${()=>vr.triggerDatalayerTracking(`Company | ${t.title}`,i||"")}"
                               class="font-header-x-sml TrackingRedesignLink CompanyLink">
                                ${t.title}
                            </a>
                        </li>`}))}
            </ul>
        `}buildLanguageSection(e="LanguageMenu",t=""){let o=1;return M`
            <section class="NavItem LanguageMenu ${t}"
                     data-tracking-label="Language Menu"
                     tabindex="0"
                     aria-label="Language Navigation"
                     @click="${()=>zr.handleMenuClickEvent(e,this.shadowRoot)}"
                     @keydown="${e=>xr.handleMenuKeyEvents(e,".DesktopOnly .DesktopOnly.LanguageMenu",this.shadowRoot)}">

                <span class="NavItem-header font-header-x-sml">

                        ${this.langObject[0]&&M`<span
                            class="${this.langObject[0].icon}">

                            ${this.langObject[0].title}

                        </span>`}

                    <i class="zuora-font-icon"></i>
                </span>

                <nav class="NavItem-topLevel isInvisible">
                    <div class="Items">
                        <div class="Items-inner" style="--items-inner-columns: 1">
                            <ul data-item-index="0"
                                data-number-of-items="${3}">
                                ${this.menuRedesignData.i11n.map((e=>{const t=e.link?`${this.activeDomain}${e.link}`:e.externalLink;return M`
                                        ${this.currentLocale!==e.locale?M`
                                            <li data-nav-item="${o++}"
                                                tabindex="-1">

                                                <a href="${t||"/"}"
                                                   @click="${()=>vr.triggerDatalayerTracking(`Language | ${e.title}`,t||"")}"
                                                   class="font-header-x-sml LanguageLink ${e.icon}">
                                                    ${e.title}
                                                </a>

                                            </li>`:Z}
                                    `}))}
                            </ul>
                        </div><!-- End .Items-inner -->
                    </div><!-- End .Items -->
                </nav><!-- End .NavItem-topLevel -->
            </section>
        `}buildNavSectionHeader(e,t){var o,i,n,r;const a="en"===this.currentLocale?"":`${this.langObject[0].link}`,s=`${e.header.link?`${this.activeDomain}${a}${e.header.link}`:e.header.externalLink}`;return M`
            ${e.header.link||e.header.externalLink?M`
                <a class="Item-header ${(null===(o=e.header)||void 0===o?void 0:o.body)?"hasHeaderContent":""}"
                   tabindex="-1"
                   @click="${()=>vr.triggerDatalayerTracking(`${t} | ${e.header.title}`,s)}"
                   href="${s||"/"}">

                    <span class="font-header-x-sml">
                        ${e.header.title}
                    </span>

                    ${(null===(i=e.header)||void 0===i?void 0:i.body)?M` <p class="font-body-sml">
                        ${e.header.body}</p>`:Z}
                </a>
            `:M`
                <div class="Item-header ${(null===(n=e.header)||void 0===n?void 0:n.body)?"hasHeaderContent":""}">

                    <span class="font-header-x-sml">
                        ${e.header.title}
                    </span>

                    ${(null===(r=e.header)||void 0===r?void 0:r.body)?M` <p class="font-body-sml">
                        ${e.header.body}</p>`:Z}
                </div>
            `}
        `}buildNavSectionBody(e,t){var o,i,n,r,a,s;return M`
            ${(null==e?void 0:e.body)&&e.body.length>0?M`
                <section
                    class="Item-body isInvisible isColumns-${null!==(i=null===(o=e.meta)||void 0===o?void 0:o.style["item-body-columns"])&&void 0!==i?i:3}"
                    style="--item-body-columns: ${null!==(r=null===(n=e.meta)||void 0===n?void 0:n.style["item-body-columns"])&&void 0!==r?r:3}; --justify-items: ${null!==(s=null===(a=e.meta)||void 0===a?void 0:a.style["justify-items"])&&void 0!==s?s:"center"}">

                    <ul class="Item-bodyInner"
                        data-item-index="0"
                        data-number-of-items="${e.body.length}"
                    >
                        ${e.body.map((e=>{const o="en"===this.currentLocale?"":`${this.langObject[0].link}`,i=e.link?`${this.activeDomain}${o}${e.link}`:`${e.externalLink}`;return M`
                                <li tabindex="-1">
                                    <a href="${i||"/"}"
                                       tabindex="-1"
                                       class="font-caption-medium"
                                       @click="${()=>vr.triggerDatalayerTracking(`${t} | ${e.title}`,i)}">

                                        ${e.title}

                                        ${e.subBody?M`<p class="font-caption-small">
                                            ${e.subBody}</p>`:Z}

                                    </a>
                                </li>
                            `}))}
                    </ul>
                </section>`:Z}
        `}buildNavSections(e){const t=`${e.charAt(0).toUpperCase()+e.slice(1)}`,o=e,i=this.menuRedesignData.navItems[o];return M`
            ${i.map((e=>{var o,i;const n=e.header.title,r=(null===(o=e.meta)||void 0===o?void 0:o.style.cssClass)?null===(i=e.meta)||void 0===i?void 0:i.style.cssClass:"Nothing",a=`${t} | ${n}`;return M`
                    <article class="Item ${(null==e?void 0:e.body)&&(null==e?void 0:e.body.length)>0?"hasBodyContent":""} ${r}"
                             tabindex="0"
                             @focus="${()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`.DesktopOnly .Item.${r}`);null==t||t.classList.add("isActive")}}"
                             @blur="${()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`.DesktopOnly .Item.${r}`);null==t||t.classList.remove("isActive")}}">

                        ${this.buildNavSectionHeader(e,t)}

                        ${this.buildNavSectionBody(e,a)}

                    </article>
                `}))}
        `}buildCtasSection(){const e=this.menuRedesignData.ctasItems;return M`
            <section class="NavRedesignNav-ctas">

                ${e.map((e=>M`
                        <div class="NavRedesignNav-cta">
                            <a class="Button Button--${e.style?e.style:"black"} font-header-x-sml"
                               data-tracking-label="Main Nav | ${e.title}"
                               data-tracking-type="cta"
                               href="${e.link}">
                                ${e.title}
                            </a>
                        </div>
                    `))}
            </section>
        `}toggleMobileMenu(){if(!this.shadowRoot||void 0===this.shadowRoot)return;const e=this.shadowRoot.querySelector(".MobileOnly-headerSection"),t=this.shadowRoot.querySelector(".NavRedesignClearScreen");t&&void 0!==t&&e&&void 0!==e&&(e.classList.toggle("isMobileMenuOpen"),t.classList.toggle("isInvisible"))}buildNavRedesignTop(e=""){var t;const o="en"===this.currentLocale?"":`${this.langObject[0].link}`;return M`
            <header class="NavRedesignTop ${e}"
                    tabindex="0"
                    aria-label="Top Navigation"
                    data-is-english="${null!==(t="en"===this.langObject[0].locale)&&void 0!==t?t:"true"}">
                <div class="NavRedesign-navInner">
                    <section class="NavRedesign-left">
                        <div class="NavItem ${e} CompanyMenu"
                             tabindex="0"
                             aria-label="Company Menu"
                             data-tracking-label="Company Menu"
                             @click="${()=>zr.handleMenuClickEvent(`.${e}.CompanyMenu`,this.shadowRoot)}"
                             @keydown="${e=>xr.handleMenuKeyEvents(e,".DesktopOnly.CompanyMenu",this.shadowRoot)}">

                            <span class="NavItem-header font-header-x-sml">
                                ${this.menuRedesignData.menuKeys.company}
                                <i class="zuora-font-icon"></i>
                            </span>

                            <nav class="NavItem-topLevel isInvisible">
                                <div class="Items">
                                    <div class="Items-inner" style="--items-inner-columns: 1">

                                        ${this.buildCompanySection()}

                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div class="NavItem Login"
                             tabindex="0"
                             aria-label="Login Button"
                             @keydown="${e=>xr.handleAnchorClickEvents(e,"LoginAnchor",this.shadowRoot)}"
                        >
                            <a class="NavItem-header font-header-x-sml"
                               tabindex="-1"
                               href="https://www.zuora.com/apps/newlogin.do"
                               id="LoginAnchor"
                               data-tracking-type="login"
                               data-zuora-track-login>
                                ${this.menuRedesignData.menuKeys.login}
                            </a>
                        </div>

                        <div class="NavItem Contact"
                             tabindex="0"
                             aria-label="Contact Button"
                             @keydown="${e=>xr.handleAnchorClickEvents(e,"ContactAnchor",this.shadowRoot)}"
                        >
                            <a class="NavItem-header font-header-x-sml"
                               tabindex="-1"
                               id="ContactAnchor"
                               href="${o}/about/contact/">${this.menuRedesignData.menuKeys.contact}</a>
                        </div>
                    </section>

                    <section class="NavRedesign-right">

                        ${this.buildLanguageSection(".DesktopOnly .LanguageMenu","DesktopOnly")}

                    </section>

                    <div class="NavRedesign-right MobileOnly MobileOnly-ctas">
                        ${this.buildCtasSection()}
                    </div>
                </div><!-- End .NavRedesign-navInner -->
            </header>
        `}buildNavRedesignBottom(e="",t){var o;return M`
            <header class="NavRedesignBottom ${e} ${t}"
                    data-is-english="${null!==(o="en"===this.langObject[0].locale)&&void 0!==o?o:"true"}">

                <section class="NavRedesign-navInner">
                    <div class="NavRedesign-left">
                        <section class="NavRedesign-logo DesktopOnly">

                            <wc-mega-header-logo />

                        </section>

                        <nav class="NavRedesignNav">
                            <menu>

                                ${this.buildLanguageSection(".MobileOnly.LanguageMenu","MobileOnly")}

                                <section class="NavItem ${e} SolutionsMenu"
                                         tabindex="0"
                                         data-tracking-label="Solutions Menu"
                                         @click="${()=>zr.handleMenuClickEvent(`.${e}.SolutionsMenu`,this.shadowRoot)}"
                                         @keydown="${e=>xr.handleBottomMenuEvents(e,".DesktopOnly.SolutionsMenu",this.shadowRoot)}">

                                    <span class="NavItem-header font-header-x-sml">
                                        ${this.menuRedesignData.menuKeys.solutions}
                                        <i class="zuora-font-icon"></i>
                                    </span>

                                    <section class="NavItem-topLevel isInvisible">
                                        <div class="Items">
                                            <div class="Items-inner" style="--items-inner-columns: 2">

                                                ${this.buildNavSections("solutions")}

                                            </div>
                                        </div><!-- end .Items -->
                                    </section><!-- end .NavItem-topLevel -->
                                </section>

                                <section class="NavItem ${e} ProductsMenu"
                                         tabindex="0"
                                         data-tracking-label="Products Menu"
                                         @click="${()=>zr.handleMenuClickEvent(`.${e}.ProductsMenu`,this.shadowRoot)}"
                                         @keydown="${e=>xr.handleBottomMenuEvents(e,".DesktopOnly.ProductsMenu",this.shadowRoot)}">

                                    <span class="NavItem-header font-header-x-sml">
                                        ${this.menuRedesignData.menuKeys.products}
                                        <i class="zuora-font-icon"></i>
                                    </span>

                                    <section class="NavItem-topLevel isInvisible">
                                        <div class="Items">
                                            <div class="Items-inner" style="--items-inner-columns: 6;">

                                                ${this.buildNavSections("products")}

                                            </div>
                                        </div><!-- end .Items -->
                                    </section><!-- end .NavItem-topLevel -->
                                </section><!--end .NavItem -->

                                <section class="NavItem ${e} ResourcesMenu"
                                         tabindex="0"
                                         data-tracking-label="Resources Menu"
                                         @click="${()=>zr.handleMenuClickEvent(`.${e}.ResourcesMenu`,this.shadowRoot)}"
                                         @keydown="${e=>xr.handleBottomMenuEvents(e,".DesktopOnly.ResourcesMenu",this.shadowRoot)}">

                                    <span class="NavItem-header font-header-x-sml">
                                       ${this.menuRedesignData.menuKeys.resources}
                                        <i class="zuora-font-icon"></i>
                                    </span>

                                    <section class="NavItem-topLevel isInvisible">
                                        <div class="Items">
                                            <div class="Items-inner" style="--items-inner-columns: 2">

                                                ${this.buildNavSections("resources")}

                                            </div>
                                        </div><!-- end .Items -->
                                    </section><!-- end .NavItem-topLevel -->
                                </section>
                            </menu>
                        </nav>
                    </div><!-- end .NavRedesign-left -->

                    <div class="NavRedesign-right">
                        ${this.buildCtasSection()}
                    </div>
                </section><!-- End .NavRedesign-content -->
            </header>
        `}render(){var e,t;const o=this.menuRedesignData.i11n;this.langObject=o.filter((e=>e.locale===this.currentLocale)),this.activeDomain=this.getCurrentDomain();const i=window.document.body.classList.contains("logged-in");return M`
            <section class="MobileOnly MobileOnly-headerSection ${i?"isLoggedIn":""}"
                     data-is-english="${null!==(e="en"===this.langObject[0].locale)&&void 0!==e?e:"true"}">

                <section class="NavRedesign-logo">
                    <wc-mega-header-logo />
                </section>

                <div class="OpenCloseContainer">
                    <a role="button">
                        <i class="zuora-font-icon MenuOpen" @click="${()=>this.toggleMobileMenu()}"></i>
                        <i class="zuora-font-icon MenuClose" @click="${()=>this.toggleMobileMenu()}"></i>
                    </a>
                </div>

            </section>

            <section class="MobileOnly MobileOnly-menuSection ${i?"isLoggedIn":""}"
                     data-is-english="${null!==(t="en"===this.langObject[0].locale)&&void 0!==t?t:"true"}">

                ${this.buildNavRedesignTop("MobileOnly")}

                ${this.buildNavRedesignBottom("MobileOnly","")}

            </section>

            <!-- Desktop: These need to be siblings for sticky scrolling to work -->
            ${this.buildNavRedesignTop("DesktopOnly")}

            ${this.buildNavRedesignBottom("DesktopOnly",""+(i?"isLoggedIn":""))}

            <div class="NavRedesignClearScreen isInvisible"
                 @click="${()=>kr.activateClickEventClearScreen(this.shadowRoot)}"
            ></div>
        `}};Pr.styles=[Kn,Hn,Vn,Qn,Wn,_r,Nr,Rr,Er,Cr],$r([ce()],Pr.prototype,"menuRedesignData",void 0),Pr=$r([re("wc-mega-menu-redesign")],Pr);var Tr=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Lr=class extends(qn(ie)){constructor(){super(),this.responsiveController=new Gn(this),this._createFontStyle=()=>{this.doAddFontFontAwesome(),this.doAddFontMelody();const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode("\n            :root {\n                --zuora-generic-header-height: 60px;\n            }\n            header#mega-menu {\n                display: none !important;\n            }\n            wc-mega-menu {\n                left: 0;\n                position: fixed;\n                top: 0; width: 100vw;\n                z-index: 99999;\n            }\n            body.wc-loaded {\n                margin-top: var(--zuora-generic-header-height) !important;\n            }\n            .wc-loaded #teconsent a {\n                color: var(--zuora-footer-link-color);\n            }\n        ")),this.doAppendToHead(e)},this._createDomColumn=(e,t)=>M`
      <div
        class="col ${"card"===t.sections[0].type?"column-card":""}"
      >
        ${t.sections.map((t=>this._createDomSection(e,t)))}
      </div>
    `,this._createDomLinkBodyContent=e=>M`
      <h3>${this.getText(e.title)}</h3>
      <p>${this.getText(e.description)}</p>
    `,this._createDomLink=(e,t,o=void 0)=>{let i="";switch(e.type){case"link-arrow":i="cta-with-arrow";break;case"chevron-right":i="chevron-right-link";break;default:i=""}return M`
      <a
        href="${this.computeLink(e.link)}"
        data-tracking-label="${t}|${this.getText(e.title)}"
      >
        ${"table-with-icon"===o&&e.class?M`<img
              src="https://nav-assets.zuora.life/icons/${e.class}.svg"
            />`:Z}
        <div class="${i}">
          ${"chevron-right"===e.type?M`<span class="chevron-right arrow" />`:Z}
          ${this._createDomLinkBodyContent(e)}
        </div>
      </a>
    `},this._createDomSection=(e,t)=>{switch(t.type){case"table":case"table-with-icon":return M`<wc-mega-table
          class="table"
          .section=${t}
          menu-title=${e}
        ></wc-mega-table>`;case"table-fancy":return M`
          <section class="${this._computeSectionClass(t)}">
            ${this._computeSectionHeader(e,t)}
            <ul>
              ${t.links.map((o=>{var i;return M`
                  <li>
                    <a
                      href="${this.computeLink(o.link)}"
                      data-tracking-label="${this.getText(e)}|${this.getText(t.title)}|${this.getText(o.title)}"
                    >
                      <i class="icon">${o.icon}</i>
                      <div>
                        <h3 class="zuora-font-title sm-bold">
                          ${this.getText(o.title)}
                        </h3>
                        <p class="zuora-font-description">
                          ${this.getText(o.description)}
                        </p>
                        <div class="link-container">
                          ${null===(i=o.links)||void 0===i?void 0:i.map((i=>M`
                              <wc-mega-link
                                title=${this.getText(i.title)}
                                tracking-label=${`${this.getText(e)}|${this.getText(t.title)}|${this.getText(o.title)}`}
                                href=${this.computeLink(i.link)}
                                type=${lr(i.type)}
                              ></wc-mega-link>
                            `))}
                        </div>
                      </div>
                    </a>
                  </li>
                `}))}
            </ul>
          </section>
        `;case"table-fancy-with-border":return M`
          <section class="${this._computeSectionClass(t)}">
            ${this._computeSectionHeader(e,t)}
            <ul>
              ${t.links.map((o=>{var i;return M`
                  <li>
                    <i class="icon">${o.class}</i>
                    <div>
                      <h3 class="zuora-font-title">
                        ${this.getText(o.title)}
                      </h3>
                      <p class="zuora-font-description">
                        ${this.getText(o.description)}
                      </p>
                      <div class="link-container">
                        ${null===(i=o.links)||void 0===i?void 0:i.map((i=>M`
                            <wc-mega-link
                              title=${this.getText(i.title)}
                              tracking-label=${`${this.getText(e)}|${this.getText(t.title)}|${this.getText(o.title)}`}
                              href=${this.computeLink(i.link)}
                              type=${lr(i.type)}
                            ></wc-mega-link>
                          `))}
                      </div>
                    </div>
                  </li>
                `}))}
            </ul>
          </section>
        `;case"list":return M`
          <section class="${this._computeSectionClass(t)}">
            ${this._computeSectionHeader(e,t)}
            <ul>
              ${t.links.map((o=>M`
                  <li class="${lr(o.type)}">
                    <a
                      class="${lr("link-arrow"===o.type?"cta-with-arrow":void 0)}"
                      data-tracking-label="${this.getText(e)}|${this.getText(t.title)}|${this.getText(o.title)}"
                      href="${this.computeLink(o.link)}"
                      >${this.getText(o.title)}</a
                    >
                  </li>
                `))}
            </ul>
          </section>
        `;case"card":return M`
          <section class="${this._computeSectionClass(t)}">
            <div class="border">
              <a
                href="${this.computeLink(t.link)}"
                data-tracking-label="${this.getText(e)}|${this.getText(t.title)}"
              >
                <figure>
                  <img src="${t.image}" />
                </figure>
                <h2 class="header">${this.getText(t.title)}</h2>
                <p>
                  ${tr(this.getText(t.description))}
                </p>
                ${t.link?M`<div class="cta-container">
                      <span class="cta"
                        >${this.getText(t.linkLabel)}</span
                      >
                    </div>`:Z}
              </a>
            </div>
          </section>
        `;case"box-links":return M`
          <section class="${this._computeSectionClass(t)}">
            <div class="border">
              <ul>
                ${t.links.map((o=>M`
                    <li>
                      <wc-mega-link
                        title=${this.getText(o.title)}
                        tracking-label=${`${this.getText(e)}|${this.getText(t.title)}|${this.getText(o.title)}`}
                        href=${this.computeLink(o.link)}
                        type=${lr(o.type)}
                        icon=${lr(o.icon)}
                      ></wc-mega-link>
                      <!-- <a href="${this.computeLink(o.link)}" data-tracking-label="${this.getText(e)}|${this.getText(o.title)}">
                        <i class="icon">${o.class}</i>
                        ${this.getText(o.title)}
                      </a> -->
                    </li>
                  `))}
              </ul>
            </div>
          </section>
        `;default:return Z}},this._computeSectionClass=e=>`${e.type} ${e.class||""}`,this._computeSectionHeader=(e,t)=>t.title?M`
          <h2 class="header">
            ${t.link?M`
                  <a
                    href="${this.computeLink(t.link)}"
                    data-tracking-label="${this.getText(e)}|${this.getText(t.title)}"
                  >
                    ${this.getText(t.title)}
                  </a>
                `:this.getText(t.title)}
          </h2>
        `:Z,this._getHomepageLink=e=>e.links.filter((e=>"home"===e.id))[0].link,this._getDevCenterHomepageLink=e=>e.links.filter((e=>"dev-center-home"===e.id))[0].link,this._getMenuData=()=>{const e=ur;e.options.default={name:"developer",includeRightNavMenu:!1,includeRightNavPlus:!1,includeRightNavSlot:!1};return e.menu=e.menu.filter((t=>{if(t.options){if(t.options.excludeForSubDomains&&t.options.excludeForSubDomains.includes($n))return!1;if(t.options.includeInSubDomains&&!t.options.includeInSubDomains.includes($n))return!1}return!0})),e},this._onBeforeRender=()=>{this.crossDomainGA=this.getGoogleAnalyticsData().linkerParam},this._onClickMobileClose=()=>{var e,t;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("header"))||void 0===t||t.classList.remove("mobile-open"),this._onClickMobileMenu({id:""})},this._onClickMobileOpen=()=>{var e,t;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("header"))||void 0===t||t.classList.add("mobile-open")},this._onClickMobileMenu=({id:e})=>{var t,o,i;const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`[data-menu-id='${e}']`),r=null==n?void 0:n.classList.contains("open");null===(o=this.shadowRoot)||void 0===o||o.querySelectorAll("[data-menu-id]").forEach((e=>{null==e||e.classList.remove("open"),e.querySelectorAll(".sub-menu-block").forEach((e=>{e.style.setProperty("max-height","0")}))})),null===(i=this.shadowRoot)||void 0===i||i.querySelectorAll("header")[0].classList.remove("open"),n&&!r&&this._calculateSubMenuHeight(n)},this._calculateSubMenuHeight=e=>{var t,o,i;const n=`${null==e?void 0:e.querySelectorAll(".row")[0].clientHeight}px`,r=null==e?void 0:e.querySelectorAll(".sub-menu-block")[0];null===(t=this.shadowRoot)||void 0===t||t.querySelectorAll("header")[0].classList.add("open"),null==e||e.classList.add("open");const a=!(null===(i=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector("header"))||void 0===i?void 0:i.classList.contains("tablet-landscape-up"));r.style.setProperty(a?"max-height":"height",n),a||r.style.removeProperty("max-height"),(null==e?void 0:e.querySelectorAll(".bg")[0]).style.setProperty("--zuora-dropdown-min-height",n)},this._renderInnerContent=e=>{const t=new URL(window.location.href),o=t.origin+t.pathname;return e.menu.map((e=>{var t,i,n,r;const a=null===(t=e.columns)||void 0===t?void 0:t.filter((e=>"card"!==e.sections[0].type)).length,s=2===(null===(i=e.columns)||void 0===i?void 0:i.length)?2:null===(n=e.columns)||void 0===n?void 0:n.filter((e=>"card"===e.sections[0].type)).length;return M`
        <li
          @click="${()=>{this._onClickMobileMenu({id:e.title})}}"
          data-menu-id="${e.title}"
          tabindex="0"
          class="${ge({"sub-menu-link":s||!1,link:!s,active:o===(e.link?this.computeLink(e.link):"")})}"
        >
          <a
            class="${lr(e.class)}"
            ?data-tracking-ignore="${!e.link}"
            href="${lr(e.link?this.computeLink(e.link):void 0)}"
            role="button"
          >
            <span>${this.getText(e.title)}</span>
            ${s?M`<span class="arrow"></span>`:Z}
          </a>
          ${s?M`
                <div
                  class="sub-menu-block card-columns-${s} ${e.class}"
                >
                  <div class="bg">
                    <div class="center">
                      <div></div>
                      <div class="cards"></div>
                    </div>
                    <div class="right"></div>
                  </div>
                  <div class="row item-count-${a}">
                    ${null===(r=e.columns)||void 0===r?void 0:r.map((t=>this._createDomColumn(e.title,t)))}
                  </div>
                </div>
              `:Z}
        </li>
      `}))},this._renderRightContent=e=>e.options.default.includeRightNavMenu?e.links.map((e=>{const t={active:!0,class:{a:"",li:""}};switch(e.id){case"login":t.class={a:"",li:"login hide-for-small"};break;case"talk-to-sales":t.class={a:"outline-for-mobile",li:""};break;case"watch-the-demo":t.class={a:"outline",li:"hide show-for-small show-for-large cta"};break;default:t.active=!1}return t.active?M`
          <li class="${t.class.li}">
            <a
              href="${this.computeLink(`${e.link}`)}"
              class="${t.class.a}"
              data-tracking-type="${e.track.type}"
            >
              <span>${this.getText(e.title)} </span>
            </a>
          </li>
        `:Z})):Z,this._renderRightPlus=e=>e.options.default.includeRightNavPlus?M`
        <li class="hide-for-small">
          <a
            href="https://plus.zuora.com/plus"
            data-tracking-type="logo-plus"
            data-tracking-label="Zuora Plus Home"
          >
            <img
              alt="Zuora Plus Logo"
              width="130"
              src="https://nav-assets.zuora.life/img/zuora-plus-wordmark.svg "
            />
          </a>
        </li>
      `:Z,this._renderRightSlost=e=>e.options.default.includeRightNavSlot?M`<li><slot name="right-nav"> </slot></li> `:Z,this._renderZuoraLogo=e=>M` <a
        href="${this.computeLink(this._getDevCenterHomepageLink(e))}"
        data-tracking-type="logo"
        data-tracking-label="Zuora Dev Home"
      >
        <img
          alt="Zuora Dev Center Logo"
          width="190"
          src="https://nav-assets.zuora.life/img/zuora-dev-wordmark.svg"
        />
      </a>`,this._createFontStyle(),this.onConstruct()}firstUpdated(){var e,t;null===(e=this.shadowRoot)||void 0===e||e.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(()=>{this.doTrackLink(e,"universal header")}))}));const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("#clickout")[0];o&&void 0!==o&&o.addEventListener("click",(()=>{this._onClickMobileClose()})),setTimeout((()=>{this._onBeforeRender()}),1e3),window.addEventListener("resize",(()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".main-nav li.open");t&&this._calculateSubMenuHeight(t)}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",(()=>{}))}render(){const e={...this.responsiveController.classes,[`locale-${this.locale}`]:!0,[`subdomain-${this.currentSubdomain}`]:!0},t=this._getMenuData();return M`
      <header id="mega-menu" class="${ge(e)}">
        <div id="clickout"></div>
        <nav role="navigation">
          <div class="hide mobile-logo">${this._renderZuoraLogo(t)}</div>
          <a
            @click="${this._onClickMobileOpen}"
            href="javascript:void(0);"
            class="ic menu"
            tabindex="1"
            data-tracking-ignore
          >
            <span class="line"> </span>
            <span class="line"> </span>
            <span class="line"> </span>
          </a>
          <a
            @click="${this._onClickMobileClose}"
            href="javascript:void(0);"
            class="ic close"
            data-tracking-ignore
          >
          </a>
          <ul
            class="main-nav"
            style="--zuora-menu-length: ${t.menu.length};"
          >
            <li class="image">${this._renderZuoraLogo(t)}</li>
            ${this._renderInnerContent(t)}
            <li class="right-nav">
              <ul>
                ${this._renderRightContent(t)}
                ${this._renderRightPlus(t)}
                ${this._renderRightSlost(t)}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    `}};Lr.styles=[Kn,Hn,cr],Tr([ce()],Lr.prototype,"responsiveController",void 0),Lr=Tr([re("wc-mega-menu")],Lr);export{Xn as MegaCard,sr as MegaFooter,mr as MegaLink,Lr as MegaMenu,wr as MegaTable};