!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,f=setTimeout(T,t),s?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=p();if(O(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&o?y(e):(o=i=void 0,a)}function S(){var e=p(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return h(l);if(d)return f=setTimeout(T,t),y(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},S.flush=function(){return void 0===f?a:w(p())},S}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),O=h.elements.email,T=h.elements.message,w="feedback-form-state",S={},x=localStorage.getItem(w);h.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.value||""===T.value){alert("Заповніть усі поля форми!")}else console.log(S),e.currentTarget.reset(),localStorage.removeItem(w)})),h.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(S))}),500)),function(){try{var e=JSON.parse(x);e&&(O.value=e.email,T.value=e.message)}catch(e){console.log(e.name),console.log(e.message)}}()}();
//# sourceMappingURL=03-feedback.07de2bff.js.map