!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=24)}([function(e,t){e.exports=vendor_ba50b8611d706ab5246d},function(e,t,n){e.exports=n(0)(1)},function(e,t,n){e.exports=n(0)(22)},function(e,t,n){e.exports=n(0)(34)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=a(n(16)),u=a(n(15));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.default=r({},o,u)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TOGGLE_SAMPLE="TOGGLE_SAMPLE"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments[1];return t.hasOwnProperty(r.type)?t[r.type](n,r):n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADD_SAMPLE="ADD_SAMPLE",t.GET_SAMPLE="GET_SAMPLE"},function(e,t,n){e.exports=n(0)(42)},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),u=l(o),a=n(3),i=n(2),c=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"content-container",style:{display:this.props.isChecked?"block":"none"}},u.default.createElement("p",null,"Sample Data"),u.default.createElement("ul",{className:"sample-list"},this.props.sampleList.map(function(e,t){return u.default.createElement("li",{key:t},e)})))}}]),t}();t.default=(0,a.connect)(function(e){return Object.assign({},{isChecked:e.isChecked,sampleList:e.sampleList})},function(e){var t=c.default.addSample;return(0,i.bindActionCreators)({addSample:t},e)})(f)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addSample=void 0;var r=n(7);t.addSample=function(e){return{type:r.ADD_SAMPLE,data:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toggleSample=void 0;var r=n(5);t.toggleSample=function(e){return{type:r.TOGGLE_SAMPLE,data:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),u=l(o),a=n(3),i=n(2),c=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onCheckBoxChange=function(){var e=!n.props.isChecked;n.props.toggleSample(e)},n.addSample=function(){var e=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n.props.sampleList),["sample "+ ++n.props.sampleList.length]);n.props.addSample(e)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"filter-container"},u.default.createElement("div",null,u.default.createElement("label",null,u.default.createElement("input",{type:"checkbox",checked:this.props.isChecked,onChange:this.onCheckBoxChange}),"Toggle Samle"),u.default.createElement("button",{type:"button",onClick:this.addSample},"Add Sample")))}}]),t}();t.default=(0,a.connect)(function(e){return Object.assign({},{isChecked:e.isChecked,sampleList:e.sampleList})},function(e){return(0,i.bindActionCreators)(c.default,e)})(f)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),u=a(o);a(n(8));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",{id:"container",className:"container main-container"},this.props.children)}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),u=f(o),a=n(3),i=f(n(18)),c=f(n(17)),l=f(n(14));function f(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement(i.default,null,u.default.createElement(c.default,null),u.default.createElement(l.default,null))}}]),t}();t.default=(0,a.connect)()(s)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isChecked=void 0;var r,o=n(6),u=(r=o)&&r.__esModule?r:{default:r},a=n(5);t.isChecked=(0,u.default)({},function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},a.TOGGLE_SAMPLE,function(e,t){return t.data}))},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.sampleList=void 0;var o,u=n(7),a=n(6),i=(o=a)&&o.__esModule?o:{default:o};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.sampleList=(0,i.default)({},(c(r={},u.GET_SAMPLE,function(e,t){return t.data}),c(r,u.ADD_SAMPLE,function(e,t){return t.data}),r))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(2),u=i(n(21)),a=i(n(20));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.default=(0,o.combineReducers)(r({},u,a))},function(e,t,n){e.exports=n(0)(29)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(1)),u=s(n(8)),a=n(3),i=n(2),c=s(n(23)),l=s(n(22)),f=s(n(19));function s(e){return e&&e.__esModule?e:{default:e}}var p=Object.assign({},{sampleList:["sample 1","sample 2","sample 3"],isChecked:!1});var d,b,y=(d=p,b=(0,i.compose)((0,i.applyMiddleware)(c.default)),(0,i.createStore)(l.default,d,b)),_=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(a.Provider,{store:y},o.default.createElement(f.default,null))}}]),t}();t.default=_,u.default.render(o.default.createElement(_,null),document.getElementById("app-container"))}]);