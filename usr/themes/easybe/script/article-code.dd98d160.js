(self.webpackChunkeasybe=self.webpackChunkeasybe||[]).push([[3191],{42152:function(t){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var e;e=function(){return function(){var t={686:function(t,e,n){"use strict";n.d(e,{default:function(){return E}});var o=n(279),r=n.n(o),i=n(370),c=n.n(i),u=n(817),a=n.n(u);function f(t){try{return document.execCommand(t)}catch(t){return!1}}var l=function(t){var e=a()(t);return f("cut"),e},s=function(t,e){var n=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=t,n}(t);e.container.appendChild(n);var o=a()(n);return f("copy"),n.remove(),o},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=s(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=s(t.value,e):(n=a()(t),f("copy")),n};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}var y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,r=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==p(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?d(i,{container:o}):r?"cut"===n?l(r):d(r,{container:o}):void 0};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=x(t);if(e){var r=x(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}function w(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(i,t);var e,n,o,r=m(i);function i(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return e=i,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===h(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=c()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",o=y({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(o?"success":"error",{action:n,text:o,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return w("action",t)}},{key:"defaultTarget",value:function(t){var e=w("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return w("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],o=[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return d(t,e)}},{key:"cut",value:function(t){return l(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],n&&b(e.prototype,n),o&&b(e,o),i}(r()),E=S},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var o=n(828);function r(t,e,n,o,r){var c=i.apply(this,arguments);return t.addEventListener(n,c,r),{destroy:function(){t.removeEventListener(n,c,r)}}}function i(t,e,n,r){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,o,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var o=n(879),r=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(o.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,c=o.length;i<c;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default},t.exports=e()},28294:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}});var o=n(42152),r=n.n(o);function i(t){let e=$("#main pre");function o(){if(!t.__config.code.options.line)return!0;let e=$("code-box pre code");$.each(e,(function(t){let n=$(e[t]),o=n.html().replace(/\<br\>/g,"\n").split("\n"),r=[];$.each(o,(t=>{(o[t].trim()||t<o.length-1)&&"</code>"!==o[t]&&r.push('<code-line class="line-numbers-rows"></code-line>'+o[t])})),n.html(r.join("\n")),n.addClass("code-pre-line")}))}!function(t){"function"==typeof t.__config.hooks.beforeCode&&t.__config.hooks.beforeCode(t)}(t),$.each(e,(function(n){let o=$(e[n]),r="code-"+t.__tools.randomString(6);o.wrap('<code-box id="'+r+'"></code-box>'),o.attr("boxid",r)})),(()=>{if(t.__config.code.options.macStyle){let t=$("code-box");$.each(t,(function(e){$(t[e]).prepend('<div class="code-tools"></div>')}))}else e.css("border-radius","4px")})(),(()=>{let t=$("code-box");$.each(t,(function(e){let n=$(t[e]),o=n.attr("id"),r='<button boxid="'+o+'" type="button" class="clipboard code-copay-btn" data-clipboard-action="copy" data-clipboard-target="#'+o+' pre" aria-label="复制代码" ><i class="iconfont icon-fuzhi"></i></button>';n.prepend(r)})),$("code-box .code-copay-btn").click((function(){$(this).find("i").removeClass("icon-fuzhi").addClass("icon-right"),setTimeout("$('code-box button[boxid='"+$(this).attr("boxid")+"'] i').removeClass('icon-right').addClass('icon-fuzhi')",1500)})),t.on({mouseover:function(){$(this).find(".code-copay-btn").css({opacity:1,visibility:"visible"})},mouseout:function(){$(this).find(".code-copay-btn").css({opacity:0,visibility:"hidden"})}}),new(r())(".clipboard")})(),t.__config.code.options.maxHeight&&$("code-box pre").css("max-height",t.__config.code.options.maxHeight),"hljs"===t.__config.code.type.toLowerCase()?Promise.all([n.e(637),n.e(6586)]).then(n.bind(n,92209)).then((e=>{(0,e.default)(t,o)})):(e.css("background","#f5f5fa"),$("code-box .code-tools").css("background","#f5f5fa"),$("pre .hljs").css({background:"none",border:"0","border-radius":"0",padding:"0"}),o()),function(t){"function"==typeof t.__config.hooks.afterCode&&t.__config.hooks.afterCode(t)}(t)}}}]);