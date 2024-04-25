/*! For license information please see 3965.33c0e3ec.chunk.js.LICENSE.txt */
(self.webpackChunkmy_dashboard_app=self.webpackChunkmy_dashboard_app||[]).push([[3965],{13965:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>g});var n=t(65043),s=t(98139),a=t.n(s),o=t(44227),c=t(80861),l=t(25104),d=t(96105),i=t(44101),f=function(e){if("undefined"===typeof e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var r=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!r)throw new Error("".concat(e," is not a valid rgb color"));var t="0".concat(parseInt(r[1],10).toString(16)),n="0".concat(parseInt(r[2],10).toString(16)),s="0".concat(parseInt(r[3],10).toString(16));return"#".concat(t.slice(-2)).concat(n.slice(-2)).concat(s.slice(-2))},p=t(19564),u=t(70579);const h=()=>{const[e,r]=(0,n.useState)("rgb(255, 255, 255)"),t=(0,n.createRef)();return(0,n.useEffect)((()=>{const e=t.current.parentNode.firstChild,n=window.getComputedStyle(e).getPropertyValue("background-color");r(n)}),[t]),(0,u.jsx)("table",{className:"table w-100",ref:t,children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"text-body-secondary",children:"HEX:"}),(0,u.jsx)("td",{className:"font-weight-bold",children:f(e)})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"text-body-secondary",children:"RGB:"}),(0,u.jsx)("td",{className:"font-weight-bold",children:e})]})]})})},m=e=>{let{className:r,children:t}=e;const n=a()(r,"theme-color w-75 rounded mb-3");return(0,u.jsxs)(o.U,{xs:12,sm:6,md:4,xl:2,className:"mb-4",children:[(0,u.jsx)("div",{className:n,style:{paddingTop:"75%"}}),t,(0,u.jsx)(h,{})]})},g=()=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(c.E,{className:"mb-4",children:[(0,u.jsxs)(l.V,{children:["Theme colors",(0,u.jsx)(p.cY,{href:"https://coreui.io/docs/utilities/colors/"})]}),(0,u.jsx)(d.W,{children:(0,u.jsxs)(i.s,{children:[(0,u.jsx)(m,{className:"bg-primary",children:(0,u.jsx)("h6",{children:"Brand Primary Color"})}),(0,u.jsx)(m,{className:"bg-secondary",children:(0,u.jsx)("h6",{children:"Brand Secondary Color"})}),(0,u.jsx)(m,{className:"bg-success",children:(0,u.jsx)("h6",{children:"Brand Success Color"})}),(0,u.jsx)(m,{className:"bg-danger",children:(0,u.jsx)("h6",{children:"Brand Danger Color"})}),(0,u.jsx)(m,{className:"bg-warning",children:(0,u.jsx)("h6",{children:"Brand Warning Color"})}),(0,u.jsx)(m,{className:"bg-info",children:(0,u.jsx)("h6",{children:"Brand Info Color"})}),(0,u.jsx)(m,{className:"bg-light",children:(0,u.jsx)("h6",{children:"Brand Light Color"})}),(0,u.jsx)(m,{className:"bg-dark",children:(0,u.jsx)("h6",{children:"Brand Dark Color"})})]})})]})})},80861:(e,r,t)=>{"use strict";t.d(r,{E:()=>d});var n=t(22378),s=t(65043),a=t(65173),o=t.n(a),c=t(25196),l=t(75232),d=(0,s.forwardRef)((function(e,r){var t,a=e.children,o=e.className,l=e.color,d=e.textBgColor,i=e.textColor,f=(0,n.Tt)(e,["children","className","color","textBgColor","textColor"]);return s.createElement("div",(0,n.Cl)({className:(0,c.A)("card",(t={},t["bg-".concat(l)]=l,t["text-".concat(i)]=i,t["text-bg-".concat(d)]=d,t),o)},f,{ref:r}),a)}));d.propTypes={children:o().node,className:o().string,color:l.TX,textBgColor:l.TX,textColor:o().string},d.displayName="CCard"},96105:(e,r,t)=>{"use strict";t.d(r,{W:()=>l});var n=t(22378),s=t(65043),a=t(65173),o=t.n(a),c=t(25196),l=(0,s.forwardRef)((function(e,r){var t=e.children,a=e.className,o=(0,n.Tt)(e,["children","className"]);return s.createElement("div",(0,n.Cl)({className:(0,c.A)("card-body",a)},o,{ref:r}),t)}));l.propTypes={children:o().node,className:o().string},l.displayName="CCardBody"},25104:(e,r,t)=>{"use strict";t.d(r,{V:()=>l});var n=t(22378),s=t(65043),a=t(65173),o=t.n(a),c=t(25196),l=(0,s.forwardRef)((function(e,r){var t=e.children,a=e.as,o=void 0===a?"div":a,l=e.className,d=(0,n.Tt)(e,["children","as","className"]);return s.createElement(o,(0,n.Cl)({className:(0,c.A)("card-header",l)},d,{ref:r}),t)}));l.propTypes={as:o().elementType,children:o().node,className:o().string},l.displayName="CCardHeader"},44227:(e,r,t)=>{"use strict";t.d(r,{U:()=>d});var n=t(22378),s=t(65043),a=t(65173),o=t.n(a),c=t(25196),l=["xxl","xl","lg","md","sm","xs"],d=(0,s.forwardRef)((function(e,r){var t=e.children,a=e.className,o=(0,n.Tt)(e,["children","className"]),d=[];return l.forEach((function(e){var r=o[e];delete o[e];var t="xs"===e?"":"-".concat(e);"number"!==typeof r&&"string"!==typeof r||d.push("col".concat(t,"-").concat(r)),"boolean"===typeof r&&d.push("col".concat(t)),r&&"object"===typeof r&&("number"!==typeof r.span&&"string"!==typeof r.span||d.push("col".concat(t,"-").concat(r.span)),"boolean"===typeof r.span&&d.push("col".concat(t)),"number"!==typeof r.order&&"string"!==typeof r.order||d.push("order".concat(t,"-").concat(r.order)),"number"===typeof r.offset&&d.push("offset".concat(t,"-").concat(r.offset)))})),s.createElement("div",(0,n.Cl)({className:(0,c.A)(d.length>0?d:"col",a)},o,{ref:r}),t)})),i=o().oneOfType([o().bool,o().number,o().string,o().oneOf(["auto"])]),f=o().oneOfType([i,o().shape({span:i,offset:o().oneOfType([o().number,o().string]),order:o().oneOfType([o().oneOf(["first","last"]),o().number,o().string])})]);d.propTypes={children:o().node,className:o().string,xs:f,sm:f,md:f,lg:f,xl:f,xxl:f},d.displayName="CCol"},44101:(e,r,t)=>{"use strict";t.d(r,{s:()=>d});var n=t(22378),s=t(65043),a=t(65173),o=t.n(a),c=t(25196),l=["xxl","xl","lg","md","sm","xs"],d=(0,s.forwardRef)((function(e,r){var t=e.children,a=e.className,o=(0,n.Tt)(e,["children","className"]),d=[];return l.forEach((function(e){var r=o[e];delete o[e];var t="xs"===e?"":"-".concat(e);"object"===typeof r&&(r.cols&&d.push("row-cols".concat(t,"-").concat(r.cols)),"number"===typeof r.gutter&&d.push("g".concat(t,"-").concat(r.gutter)),"number"===typeof r.gutterX&&d.push("gx".concat(t,"-").concat(r.gutterX)),"number"===typeof r.gutterY&&d.push("gy".concat(t,"-").concat(r.gutterY)))})),s.createElement("div",{className:(0,c.A)("row",d,a),ref:r},t)})),i=o().shape({cols:o().oneOfType([o().oneOf(["auto"]),o().number,o().string]),gutter:o().oneOfType([o().string,o().number]),gutterX:o().oneOfType([o().string,o().number]),gutterY:o().oneOfType([o().string,o().number])});d.propTypes={children:o().node,className:o().string,xs:i,sm:i,md:i,lg:i,xl:i,xxl:i},d.displayName="CRow"},98139:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=o(e,a(t)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)n.call(e,t)&&e[t]&&(r=o(r,t));return r}function o(e,r){return r?e?e+" "+r:e+r:e}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(r,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=3965.33c0e3ec.chunk.js.map