!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=Vue},function(e,t,n){n(2),e.exports=n(17)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=i(o),s=n(3),r=i(s),c=n(4),l=i(c),u=n(5),f=i(u);a.default.use(r.default),a.default.use(l.default,{message:"Please confirm action"});var d=a.default.extend(f.default);window.vm=new d,window.vm.$mount("#app")},function(e,t,n){!function(t,i){e.exports=i(n(0))}(0,function(e){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=8)}([function(e,t){e.exports=function(e,t,n,i){var o,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,a=e.default);var r="function"==typeof a?a.options:a;if(t&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns),n&&(r._scopeId=n),i){var c=Object.create(r.computed||null);Object.keys(i).forEach(function(e){var t=i[e];c[e]=function(){return t}}),r.computed=c}return{esModule:o,exports:a,options:r}}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(2),o=n.n(i),a=new o.a},function(t,n){t.exports=e},function(e,t,n){n(18);var i=n(0)(n(5),n(16),null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"CssGroup",props:["name"]}},function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=(n.n(o),n(1)),s=n(10),r=n(7),c=n(14),l=n.n(c),u=n(13),f=n.n(u),d=n(9),p={IDLE:0,DESTROYED:2},m={velocity:null},h={name:"Notifications",components:{VelocityGroup:l.a,CssGroup:f.a},props:{group:{type:String},width:{type:[Number,String],default:300},reverse:{type:Boolean,default:!1},position:{type:[String,Array],default:function(){return r.a.position}},classes:{type:String,default:"vue-notification"},animationType:{type:String,default:"css",validator:function(e){return"css"===e||"velocity"===e}},animation:{type:Object,default:function(){return r.a.velocityAnimation}},animationName:{type:String,default:r.a.cssAnimation},speed:{type:Number,default:300},cooldown:{type:Number,default:0},duration:{type:Number,default:3e3},delay:{type:Number,default:0},max:{type:Number,default:1/0}},data:function(){return{list:[],velocity:m.velocity}},created:function(){a.a.$on("add",this.addItem)},computed:{actualWidth:function(){return n.i(d.a)(this.width)},isVA:function(){return"velocity"===this.animationType},componentName:function(){return this.isVA?"VelocityGroup":"CssGroup"},styles:function(){var e=n.i(s.a)(this.position),t=e.x,o=e.y,a=this.actualWidth.value,r=this.actualWidth.type,c=i({width:""+a+r},o,"0px");return"center"===t?c.left="calc(50% - "+a/2+r+")":c[t]="0px",c},active:function(){return this.list.filter(function(e){return e.state!==p.DESTROYED})},botToTop:function(){return this.styles.hasOwnProperty("bottom")}},methods:{addItem:function(e){var t=this;if(!this.group||this.group==e.group){if(e.clean||e.clear)return void this.destroyAll();var i="number"==typeof e.duration?e.duration:this.duration,o="number"==typeof e.speed?e.speed:this.speed,a=e.title,r=e.text,c=e.type,l={id:n.i(s.b)(),title:a,text:r,type:c,state:p.IDLE,speed:o,length:i+2*o};i>=0&&(l.timer=setTimeout(function(){t.destroy(l)},l.length));var u=this.reverse?!this.botToTop:this.botToTop,f=-1;u?(this.list.push(l),this.active.length>this.max&&(f=-1)):(this.list.unshift(l),this.active.length>this.max&&(f=this.active.length-1)),-1!==f&&this.destroy(this.active[f])}},"nСlass":function(e){return["notification",this.classes,e.type]},nwStyle:function(e){return this.isVA?null:{transition:"all "+e.speed+"ms"}},destroy:function(e){clearTimeout(e.timer),e.state=p.DESTROYED,this.isVA||this.clean()},destroyAll:function(){this.active.forEach(this.destroy)},getAnimation:function(e,t){var n=this.animation[e];return"function"==typeof n?n.call(this,t):n},enter:function(e){var t=e.el,n=e.complete,i=this.getAnimation("enter",t);this.velocity(t,i,{duration:this.speed,complete:n})},leave:function(e){var t=e.el,n=e.complete,i=this.getAnimation("leave",t);this.velocity(t,i,{duration:this.speed,complete:n})},clean:function(){this.list=this.list.filter(function(e){return e.state!==p.DESTROYED})}}};h.configure=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};void 0!==e.velocity&&(m.velocity=e.velocity)},t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VelocityGroup",methods:{enter:function(e,t){this.$emit("enter",{el:e,complete:t})},leave:function(e,t){this.$emit("leave",{el:e,complete:t})},afterLeave:function(){this.$emit("afterLeave")}}}},function(e,t,n){"use strict";t.a={position:["top","right"],cssAnimation:"vn-fade",velocityAnimation:{enter:function(e){return{height:[e.clientHeight,0],opacity:[1,0]}},leave:{height:0,opacity:[0,1]}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=n.n(i),a=n(1),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.installed){this.installed=!0,this.params=t;var n=t.velocity;n&&o.a.configure({velocity:n}),e.component("notifications",o.a),e.prototype.$notify=function(e){"string"==typeof e&&(e={title:"",text:e}),"object"===(void 0===e?"undefined":s(e))&&a.a.$emit("add",e)}}}};t.default=r},function(e,t,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=[{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+px$")},{name:"%",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+%$")},{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+$")}],a=function(e){if("auto"===e)return{type:e,value:0};for(var t=0;t<o.length;t++){var n=o[t];if(n.regexp.test(e))return{type:n.name,value:parseFloat(e)}}return{type:"",value:e}},s=function(e){switch(void 0===e?"undefined":i(e)){case"number":return{type:"px",value:e};case"string":return a(e);default:return{type:"",value:e}}};t.a=s},function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});var i={x:["left","center","right"],y:["top","bottom"]},o=function(e){return function(){return e++}}(0),a=function(e){return"string"!=typeof e?[]:e.split(/\s+/gi).filter(function(e){return e})},s=function(e){"string"==typeof e&&(e=a(e));var t=null,n=null;return e.forEach(function(e){-1!==i.y.indexOf(e)&&(n=e),-1!==i.x.indexOf(e)&&(t=e)}),{x:t,y:n}}},function(e,t,n){t=e.exports=n(12)(),t.push([e.i,".notifications{display:block;position:fixed;z-index:5000}.notification-wrapper{display:block;overflow:hidden;width:100%;margin:0;padding:0}.notification{display:block;box-sizing:border-box;background:#fff;text-align:left}.notification-title{font-weight:600}.vue-notification{font-size:12px;padding:10px;margin:0 5px 5px;color:#fff;background:#44a4fc;border-left:5px solid #187fe7}.vue-notification.warn{background:#ffb648;border-left-color:#f48a06}.vue-notification.error{background:#e54d42;border-left-color:#b82e24}.vue-notification.success{background:#68cd86;border-left-color:#42a85f}.vn-fade-enter-active,.vn-fade-leave-active,.vn-fade-move{transition:all .5s}.vn-fade-enter,.vn-fade-leave-to{opacity:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(i[a]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){var i=n(0)(n(4),n(17),null,null);e.exports=i.exports},function(e,t,n){var i=n(0)(n(6),n(15),null,null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition-group",{attrs:{css:!1},on:{enter:e.enter,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notifications",style:e.styles},[n(e.componentName,{tag:"component",attrs:{name:e.animationName},on:{enter:e.enter,leave:e.leave,"after-leave":e.clean}},e._l(e.list,function(t){return 2!=t.state?n("div",{key:t.id,staticClass:"notification-wrapper",style:e.nwStyle(t),attrs:{"data-id":t.id}},[e._t("body",[n("div",{class:e.nСlass(t),on:{click:function(n){e.destroy(t)}}},[t.title?n("div",{staticClass:"notification-title",domProps:{innerHTML:e._s(t.title)}}):e._e(),e._v(" "),n("div",{staticClass:"notification-content",domProps:{innerHTML:e._s(t.text)}})])],{item:t,close:function(){return e.destroy(t)}})],2):e._e()}))],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition-group",{attrs:{name:e.name}},[e._t("default")],2)},staticRenderFns:[]}},function(e,t,n){var i=n(11);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(19)("2901aeae",i,!0)},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(a(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(a(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(m)return h;i.parentNode.removeChild(i)}if(g){var a=p++;i=d||(d=o()),t=s.bind(null,i,a,!1),n=s.bind(null,i,a,!0)}else i=o(),t=r.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function s(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function r(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(20),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,m=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var o=l(e,t);return i(o),function(t){for(var n=[],a=0;a<o.length;a++){var s=o[a],r=u[s.id];r.refs--,n.push(r)}t?(o=l(e,t),i(o)):o=[];for(var a=0;a<n.length;a++){var r=n[a];if(0===r.refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete u[r.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var a=t[o],s=a[0],r=a[1],c=a[2],l=a[3],u={id:e+":"+o,css:r,media:c,sourceMap:l};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}}])})},function(e,t){e.exports=VuejsDialog},function(e,t,n){n(6);var i=n(11)(n(12),n(16),null,null);e.exports=i.exports},function(e,t,n){var i=n(7);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(9)("50d6d991",i,!0)},function(e,t,n){t=e.exports=n(8)(),t.push([e.i,"/* reset */\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Noto Sans', sans-serif;\n}\n.centered {\n  margin-right: auto;\n  margin-left: auto;\n}\n.title-case {\n  text-transform: capitalize;\n}\n/* header */\nheader {\n  background-color: #41B883;\n  color: #fefefe;\n  display: block;\n}\nheader .lang-btn {\n    margin: 5px 12px;\n    color: #fefefe;\n    text-decoration: none;\n}\nheader .lang-btn:hover {\n      text-decoration: underline;\n}\nheader .header-cont {\n    width: 94%;\n    padding: 5px;\n    max-width: 800px;\n    display: block;\n    text-align: center;\n}\nheader .title {\n    margin: 175px auto;\n}\n@media all and (max-width: 600px) {\nheader .title {\n    margin: 25px auto;\n}\n}\n.vue-notification {\n  padding: 10px;\n  margin: 15px;\n  font-size: 18px;\n  font-family: \"Noto Sans\", sans-serif;\n  color: #ffffff;\n  background: #44A4FC;\n  border-left: 5px solid #187FE7;\n}\n",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(i[a]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(a(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(a(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function a(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(m)return h;i.parentNode.removeChild(i)}if(g){var a=p++;i=d||(d=o()),t=s.bind(null,i,a,!1),n=s.bind(null,i,a,!0)}else i=o(),t=r.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function s(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function r(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(10),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,m=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var o=l(e,t);return i(o),function(t){for(var n=[],a=0;a<o.length;a++){var s=o[a],r=u[s.id];r.refs--,n.push(r)}t?(o=l(e,t),i(o)):o=[];for(var a=0;a<n.length;a++){var r=n[a];if(0===r.refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete u[r.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var a=t[o],s=a[0],r=a[1],c=a[2],l=a[3],u={id:e+":"+o,css:r,media:c,sourceMap:l};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}},function(e,t){e.exports=function(e,t,n,i){var o,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,a=e.default);var r="function"==typeof a?a.options:a;if(t&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns),n&&(r._scopeId=n),i){var c=r.computed||(r.computed={});Object.keys(i).forEach(function(e){var t=i[e];c[e]=function(){return t}})}return{esModule:o,exports:a,options:r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={data:function(){return{exitMessage:'\n<p style="text-align: center; margin: 0;">\n    <span class="dg-highlight-1">Thank You!</span>\n     <br/>\n     I hope you find it useful\n</p>',forms:{demo1:{name:null}}}},mounted:function(){console.log("mounted app")},methods:{trans:o.default,submitDemo1Form:function(){var e=(0,o.default)("placeholders.your_name")+": ";e+=this.forms.demo1.name||(0,o.default)("messages.empty_name"),this.$notify(e)},showAlertDialog:function(){this.$dialog.alert((0,o.default)("messages.alert"))},showBasicDialog:function(){var e=this;this.$dialog.confirm((0,o.default)("messages.basic")).then(function(){e.$notify({type:"success",text:(0,o.default)("messages.click_continue")})}).catch(function(){e.$notify({type:"success",text:(0,o.default)("messages.click_cancel")})})},showSoftConfirmDialog:function(){var e=this;this.$dialog.confirm((0,o.default)("messages.soft"),{type:"soft"}).then(function(){e.$notify({type:"success",text:(0,o.default)("messages.click_continue")})}).catch(function(){e.$notify({type:"success",text:(0,o.default)("messages.click_cancel")})})},showHardConfirmDialog:function(){var e=this;this.$dialog.confirm((0,o.default)("messages.hard"),{type:"hard",html:!0,verification:"let me go"}).then(function(){e.$notify({type:"success",text:(0,o.default)("messages.click_continue")})}).catch(function(){e.$notify({type:"success",text:(0,o.default)("messages.click_cancel")})})},showHtmlDialog:function(){this.$dialog.alert((0,o.default)("messages.html"),{html:!0,okText:(0,o.default)("content.words.dismiss")})},showAnimationBounceDialog:function(){this.$dialog.alert((0,o.default)("messages.html"),{html:!0,animation:"bounce"})},showAnimationFadeDialog:function(){this.$dialog.alert((0,o.default)("messages.html"),{html:!0,animation:"fade"})},showLoadingDialog:function(){var e=this;this.$dialog.confirm((0,o.default)("messages.loading"),{html:!0,okText:(0,o.default)("content.words.proceed"),loader:!0}).then(function(t){setTimeout(function(){e.$notify({type:"success",text:(0,o.default)("messages.loading_completed")}),t.close()},2500)}).catch(function(){e.$notify({text:(0,o.default)("messages.loading_canceled")})})},showReversedDialog:function(){var e=this;this.$dialog.confirm((0,o.default)("messages.reverse"),{html:!0,okText:(0,o.default)("content.words.proceed"),loader:!0,reverse:!0}).then(function(t){setTimeout(function(){e.$notify({type:"success",text:(0,o.default)("messages.loading_completed")}),t.close()},2500)}).catch(function(){e.$notify({text:(0,o.default)("messages.loading_canceled")})})},clickOkHandler:function(){this.$notify({type:"success",text:(0,o.default)("messages.click_continue")})},clickCancelHandler:function(){this.$notify({type:"error",text:(0,o.default)("messages.click_cancel")})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return window.Translator.get(e)};var i={en:n(14).default,zh:n(15).default},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".";this.separator=t,this.translations=e;var n=window.navigator.language||window.navigator.userLanguage,i=window.location.search.match(/(?:[\?\&])(?:lang=)(\w{2})(?:&|$)/),o=i?i[1]:n;this.setLanguage(o)};o.prototype.setLanguage=function(e){this.lang=void 0!==this.translations[e]?e:"en"},o.prototype.get=function(e){for(var t=e.split(this.separator),n=this.translations[this.lang],i=0;i<t.length;i++)if(void 0===(n=n[t[i]])){n="[Error: No Translation]";break}return n},window.Translator=new o(i)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={content:{words:{animation:"animation",fade:"fade",bounce:"bounce",submit:"submit",reset:"Reset",continue:"continue",proceed:"continue",dismiss:"dismiss",source_code:"Source Code"},titles:{method_usage:"Usage as a method",directive_usage:"Usage as a directive",confirmation_types:"Confirmation types"},descriptions:{confirmation_types:{1:"Sometimes, you may want to be more strict by making sure a user really wants to proceed.",2:"The SOFT and HARD confirmation dialogs helps with that."}},examples:{method_usage:{1:"Alert Dialog - one button",2:"Html Dialog - style/format content",3:"Basic confirm - close instantly",4:"Loading Dialog - Useful with ajax",5:"Reversed Dialog - switch buttons",6:"Fade Dialog - Animation",7:"Bounce Dialog - Animation"},directive_usage:{1:"Give it a string",2:"Go to example.com",3:'Give it an object v-confirm="messageAndCallback"'},confirmation_types:{1:"Soft confirm - multiple clicks required",2:"Hard confirm - verification text required"}}},messages:{alert:"This is an alert dialog. Click the button below to close.",html:'This dialog has <b class="dg-highlight-1">HTML</b> enabled. Click the button below to close.',basic:"This is a basic confirmation dialog. Clicking on either button dismisses the dialog instantly",soft:"This is a soft confirmation dialog. Multiple clicks required to proceed.",hard:'This is a hard confirmation dialog. User\'s input must match <span class="dg-highlight-1">verification</span> <span class="dg-highlight-1">text</span> in order to proceed.',loading:"This is a loading dialog. The loader will start once you Click on Proceed button",reverse:"Left button is the Proceed button in this dialog. Click to have a feel of the reverse buttons",click_continue:"You clicked continue",click_cancel:"Closed because cancel was clicked",loading_completed:"If you see me, then the loader has completed",loading_canceled:"You clicked cancel, so there was no loading",directive_object:"This dialog was also triggered using a v-confirm directive. It has both OK and CANCEL callback",directive_string:"This is a message.",directive_link:'This will take you to "http://example.com". Proceed with caution',form_reset:"Changes would be discarded. Reset this form?",form_submit:"Submit this form?",empty_name:"The name field is empty"},placeholders:{your_name:"Your name"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={content:{words:{animation:"动画",fade:"褪色",bounce:"弹跳",submit:"提交",reset:"重启",continue:"继续",proceed:"继续",dismiss:"解雇",source_code:"源代码"},titles:{method_usage:"用法作为一种方法",directive_usage:"用法作为指令",confirmation_types:"确认类型"},descriptions:{confirmation_types:{1:"有时，您可能希望通过确保用户真正想要继续进行更严格",2:"柔软和硬确认对话框有助于此。"}},examples:{method_usage:{1:"警报对话框 - 一个按钮",2:"HTML对话框 - 风格/格式内容",3:"基本确认 - 立即关闭",4:"加载对话框 - 与ajax有用",5:"反转对话框 - 开关按钮",6:"淡化对话框 - 动画",7:"反弹对话框 - 动画"},directive_usage:{1:"给它一个字符串",2:"转到example.com",3:"给它一个对象"},confirmation_types:{1:"软确认 - 需要多次点击",2:"硬确认 - 需要验证文本"}}},messages:{alert:"这是一个警报对话框。 点击下面的按钮关闭。",html:'此对话框启用了<b class="dg-highlight-1">超文本标记语言</b>。 点击下面的按钮关闭。',basic:"这是一个基本的确认对话框。 点击任一按钮立即关闭对话框",soft:"这是一个软确认对话框。 需要多次点击才能继续。",hard:'这是一个难以确认的对话框。用户的输入必须匹配 <span class="dg-highlight-1">验证</span> <span class="dg-highlight-1">文本</span>为了继续。',loading:"这是一个加载对话框。 点击继续按钮后，加载程序将启动",reverse:"左侧按钮是此对话框中的“继续”按钮。 点击以获得反向按钮的感觉",click_continue:"你点击继续",click_cancel:"关闭，因为已被点击",loading_completed:"如果你看到我，那么装载机已经完成了",loading_canceled:"你点击取消，所以没有加载",directive_object:"此对话框也使用v-confirm指令触发。 它有OK和CANCEL回调",directive_string:"这是一个消息",directive_link:'这将带你到 "http://example.com". 请谨慎行事',form_reset:"更改将被丢弃。 重设此表格？",form_submit:"提交此表格？",empty_name:"名称字段为空"},placeholders:{your_name:"你的名字"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"padding-bottom":"25px"}},[e._m(0),e._v(" "),n("section",{staticStyle:{"max-width":"350px",margin:"auto","text-align":"center"}},[n("h2",{staticClass:"title-case"},[e._v(e._s(e.trans("content.titles.method_usage")))]),e._v(" "),n("hr"),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showAlertDialog()}}},[e._v(e._s(e.trans("content.examples.method_usage.1")))])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showHtmlDialog()}}},[e._v(e._s(e.trans("content.examples.method_usage.2")))])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showBasicDialog()}}},[e._v(e._s(e.trans("content.examples.method_usage.3")))])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showLoadingDialog()}}},[e._v(e._s(e.trans("content.examples.method_usage.4")))])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showReversedDialog()}}},[e._v(e._s(e.trans("content.examples.method_usage.5")))])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showAnimationFadeDialog()}}},[e._v(e._s(e.trans("content.examples.method_usage.6")))])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showAnimationBounceDialog()}}},[e._v(e._s(e.trans("content.examples.method_usage.7")))])])]),e._v(" "),n("section",{staticStyle:{"max-width":"350px",margin:"auto","font-family":"'Noto Sans', sans-serif","text-align":"center"}},[n("h2",{staticClass:"title-case"},[e._v(e._s(e.trans("content.titles.directive_usage")))]),e._v(" "),n("hr"),e._v(" "),n("h4",[n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:e.trans("messages.directive_string"),expression:"trans('messages.directive_string')"}]},[e._v("\n                "+e._s(e.trans("content.examples.directive_usage.1"))+" v-confirm=\"'"+e._s(e.trans("messages.directive_string"))+"'\"\n            ")])]),e._v(" "),n("h4",[n("a",{directives:[{name:"confirm",rawName:"v-confirm",value:e.trans("messages.directive_link"),expression:"trans('messages.directive_link')"}],attrs:{href:"http://example.com"}},[e._v("\n                "+e._s(e.trans("content.examples.directive_usage.2"))+"\n            ")])]),e._v(" "),n("h4",[n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{message:e.trans("messages.directive_object"),ok:e.clickOkHandler,cancel:e.clickCancelHandler},expression:"{\n                message: trans('messages.directive_object'),\n                ok: clickOkHandler,\n                cancel: clickCancelHandler}"}]},[e._v("\n                "+e._s(e.trans("content.examples.directive_usage.3"))+"\n            ")])]),e._v(" "),n("h4",[n("form",{on:{submit:function(t){t.preventDefault(),e.submitDemo1Form()}}},[n("fieldset",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.forms.demo1.name,expression:"forms.demo1.name"}],attrs:{type:"text",name:"name",placeholder:e.trans("placeholders.your_name")},domProps:{value:e.forms.demo1.name},on:{input:function(t){t.target.composing||(e.forms.demo1.name=t.target.value)}}}),e._v(" "),n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:e.trans("messages.form_reset"),expression:"trans('messages.form_reset')"}],attrs:{type:"reset"}},[e._v("\n                        "+e._s(e.trans("content.words.reset"))+"\n                    ")]),e._v(" "),n("button",{directives:[{name:"confirm",rawName:"v-confirm",value:e.trans("messages.form_submit"),expression:"trans('messages.form_submit')"}],attrs:{type:"submit"}},[e._v("\n                        "+e._s(e.trans("content.words.submit"))+"\n                    ")])])])])]),e._v(" "),n("section",{staticStyle:{"max-width":"350px",margin:"auto","font-family":"'Noto Sans', sans-serif","text-align":"center"}},[n("h2",[e._v(e._s(e.trans("content.titles.confirmation_types")))]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v(e._s(e.trans("content.descriptions.confirmation_types.1")))]),e._v(" "),n("p",[e._v(e._s(e.trans("content.descriptions.confirmation_types.2")))]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showSoftConfirmDialog()}}},[e._v(" "+e._s(e.trans("content.examples.confirmation_types.1")))])]),e._v(" "),n("h4",[n("button",{on:{click:function(t){e.showHardConfirmDialog()}}},[e._v(e._s(e.trans("content.examples.confirmation_types.2")))])])]),e._v(" "),n("notifications",{attrs:{position:"bottom left"}}),e._v(" "),n("a",{directives:[{name:"confirm",rawName:"v-confirm:soft",value:{html:!0,message:e.exitMessage,cancelText:"Stay on Page",okText:e.trans("content.words.source_code")},expression:"{html: true, message: exitMessage, cancelText: `Stay on Page`, okText: trans('content.words.source_code')}",arg:"soft"}],attrs:{href:"https://github.com/godofbrowser/vuejs-dialog"}},[n("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"}})])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("a",{staticClass:"lang-btn",attrs:{href:"?lang=en"}},[e._v("English")]),e._v(" "),n("a",{staticClass:"lang-btn",attrs:{href:"?lang=zh"}},[e._v("中文")]),e._v(" "),n("div",{staticClass:"header-cont centered"},[n("h1",{staticClass:"title"},[e._v("Vuejs Dialog Plugin")])])])}]}},function(e,t){}]);