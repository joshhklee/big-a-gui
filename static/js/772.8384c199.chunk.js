/*! For license information please see 772.8384c199.chunk.js.LICENSE.txt */
(self.webpackChunkmy_dashboard_app=self.webpackChunkmy_dashboard_app||[]).push([[772],{88743:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>C});var s=a(65043),t=a(98139),l=a.n(t),i=a(80861),c=a(96105),o=a(44101),n=a(44227),d=a(84709),u=a(18836),h=a(75510),p=a(46757),m=a(6145),y=a(33881);a.p,a.p,a.p,a.p,a.p,a.p;var x=a(33477),g=a(41339),v=a(79075),b=a(19223),f=a(70579);const j=()=>{const e=(0,s.useRef)(null);(0,s.useEffect)((()=>{document.documentElement.addEventListener("ColorSchemeChange",(()=>{e.current&&setTimeout((()=>{e.current.options.scales.x.grid.borderColor=(0,b.A)("--cui-border-color-translucent"),e.current.options.scales.x.grid.color=(0,b.A)("--cui-border-color-translucent"),e.current.options.scales.x.ticks.color=(0,b.A)("--cui-body-color"),e.current.options.scales.y.grid.borderColor=(0,b.A)("--cui-border-color-translucent"),e.current.options.scales.y.grid.color=(0,b.A)("--cui-border-color-translucent"),e.current.options.scales.y.ticks.color=(0,b.A)("--cui-body-color"),e.current.update()}))}))}),[e]);const r=()=>Math.round(100*Math.random());return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(v.WE,{ref:e,style:{height:"300px",marginTop:"40px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(".concat((0,b.A)("--cui-info-rgb"),", .1)"),borderColor:(0,b.A)("--cui-info"),pointHoverBackgroundColor:(0,b.A)("--cui-info"),borderWidth:2,data:[r(),r(),r(),r(),r(),r(),r()],fill:!0},{label:"My Second dataset",backgroundColor:"transparent",borderColor:(0,b.A)("--cui-success"),pointHoverBackgroundColor:(0,b.A)("--cui-success"),borderWidth:2,data:[r(),r(),r(),r(),r(),r(),r()]},{label:"My Third dataset",backgroundColor:"transparent",borderColor:(0,b.A)("--cui-danger"),pointHoverBackgroundColor:(0,b.A)("--cui-danger"),borderWidth:1,borderDash:[8,5],data:[65,65,65,65,65,65,65]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{color:(0,b.A)("--cui-border-color-translucent"),drawOnChartArea:!1},ticks:{color:(0,b.A)("--cui-body-color")}},y:{beginAtZero:!0,border:{color:(0,b.A)("--cui-border-color-translucent")},grid:{color:(0,b.A)("--cui-border-color-translucent")},max:250,ticks:{color:(0,b.A)("--cui-body-color"),maxTicksLimit:5,stepSize:Math.ceil(50)}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}})})},C=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g.A,{className:"mb-4"}),(0,f.jsxs)(i.E,{className:"mb-4",children:[(0,f.jsxs)(c.W,{children:[(0,f.jsxs)(o.s,{children:[(0,f.jsxs)(n.U,{sm:5,children:[(0,f.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Traffic"}),(0,f.jsx)("div",{className:"small text-body-secondary",children:"January - July 2023"})]}),(0,f.jsxs)(n.U,{sm:7,className:"d-none d-md-block",children:[(0,f.jsx)(d.Q,{color:"primary",className:"float-end",children:(0,f.jsx)(m.A,{icon:y.s})}),(0,f.jsx)(u.$,{className:"float-end me-3",children:["Day","Month","Year"].map((e=>(0,f.jsx)(d.Q,{color:"outline-secondary",className:"mx-0",active:"Month"===e,children:e},e)))})]})]}),(0,f.jsx)(j,{})]}),(0,f.jsx)(h.X,{children:(0,f.jsx)(o.s,{xs:{cols:1,gutter:4},sm:{cols:2},lg:{cols:4},xl:{cols:5},className:"mb-2 text-center",children:[{title:"Visits",value:"29.703 Users",percent:40,color:"success"},{title:"Unique",value:"24.093 Users",percent:20,color:"info"},{title:"Pageviews",value:"78.706 Views",percent:60,color:"warning"},{title:"New Users",value:"22.123 Users",percent:80,color:"danger"},{title:"Bounce Rate",value:"Average Rate",percent:40.15,color:"primary"}].map(((e,r,a)=>(0,f.jsxs)(n.U,{className:l()({"d-none d-xl-block":r+1===a.length}),children:[(0,f.jsx)("div",{className:"text-body-secondary",children:e.title}),(0,f.jsxs)("div",{className:"fw-semibold text-truncate",children:[e.value," (",e.percent,"%)"]}),(0,f.jsx)(p.f,{thin:!0,className:"mt-2",color:e.color,value:e.percent})]},r)))})})]}),(0,f.jsx)(x.A,{className:"mb-4",withCharts:!0}),(0,f.jsx)(o.s,{children:(0,f.jsx)(n.U,{xs:!0})})]})},33477:(e,r,a)=>{"use strict";a.d(r,{A:()=>p});a(65043);var s=a(44101),t=a(44227),l=a(30529),i=a(6145),c=a(3842),o=a(64355),n=a(78588),d=a(89379),u=a(79075),h=a(70579);const p=e=>{const r={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}};return(0,h.jsxs)(s.s,{className:e.className,xs:{gutter:4},children:[(0,h.jsx)(t.U,{sm:6,xl:4,xxl:3,children:(0,h.jsx)(l.$,{...e.withCharts&&{chart:(0,h.jsx)(u.Kf,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[65,59,84,84,51,55,40],fill:!0}]},options:r})},icon:(0,h.jsx)(i.A,{icon:c.T,height:52,className:"my-4 text-white"}),values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],style:{"--cui-card-cap-bg":"#3b5998"}})}),(0,h.jsx)(t.U,{sm:6,xl:4,xxl:3,children:(0,h.jsx)(l.$,{...e.withCharts&&{chart:(0,h.jsx)(u.Kf,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[1,13,9,17,34,41,38],fill:!0}]},options:r})},icon:(0,h.jsx)(i.A,{icon:o.s,height:52,className:"my-4 text-white"}),values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],style:{"--cui-card-cap-bg":"#00aced"}})}),(0,h.jsx)(t.U,{sm:6,xl:4,xxl:3,children:(0,h.jsx)(l.$,{...e.withCharts&&{chart:(0,h.jsx)(u.Kf,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[78,81,80,45,34,12,40],fill:!0}]},options:r})},icon:(0,h.jsx)(i.A,{icon:n.Z,height:52,className:"my-4 text-white"}),values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],style:{"--cui-card-cap-bg":"#4875b4"}})}),(0,h.jsx)(t.U,{sm:6,xl:4,xxl:3,children:(0,h.jsx)(l.$,{color:"warning",...e.withCharts&&{chart:(0,h.jsx)(u.Kf,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[35,23,56,22,97,23,64],fill:!0}]},options:r})},icon:(0,h.jsx)(i.A,{icon:d.$,height:52,className:"my-4 text-white"}),values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}]})})]})}},41339:(e,r,a)=>{"use strict";a.d(r,{A:()=>v});var s=a(65043),t=a(44101),l=a(44227),i=a(47390),c=a(28189),o=a(32261),n=a(62686),d=a(50002),u=a(19223),h=a(79075),p=a(6145),m=a(50342),y=a(30275),x=a(38914),g=a(70579);const v=e=>{const r=(0,s.useRef)(null),a=(0,s.useRef)(null);return(0,s.useEffect)((()=>{document.documentElement.addEventListener("ColorSchemeChange",(()=>{r.current&&setTimeout((()=>{r.current.data.datasets[0].pointBackgroundColor=(0,u.A)("--cui-primary"),r.current.update()})),a.current&&setTimeout((()=>{a.current.data.datasets[0].pointBackgroundColor=(0,u.A)("--cui-info"),a.current.update()}))}))}),[r,a]),(0,g.jsxs)(t.s,{className:e.className,xs:{gutter:4},children:[(0,g.jsx)(l.U,{sm:6,xl:4,xxl:3,children:(0,g.jsx)(i.U,{color:"primary",value:(0,g.jsxs)(g.Fragment,{children:["26K"," ",(0,g.jsxs)("span",{className:"fs-6 fw-normal",children:["(-12.4% ",(0,g.jsx)(p.A,{icon:m.n}),")"]})]}),title:"Users",action:(0,g.jsxs)(c.j,{alignment:"end",children:[(0,g.jsx)(o.V,{color:"transparent",caret:!1,className:"text-white p-0",children:(0,g.jsx)(p.A,{icon:y.P})}),(0,g.jsxs)(n.Q,{children:[(0,g.jsx)(d.k,{children:"Action"}),(0,g.jsx)(d.k,{children:"Another action"}),(0,g.jsx)(d.k,{children:"Something else here..."}),(0,g.jsx)(d.k,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,g.jsx)(h.WE,{ref:r,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,u.A)("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,g.jsx)(l.U,{sm:6,xl:4,xxl:3,children:(0,g.jsx)(i.U,{color:"info",value:(0,g.jsxs)(g.Fragment,{children:["$6.200"," ",(0,g.jsxs)("span",{className:"fs-6 fw-normal",children:["(40.9% ",(0,g.jsx)(p.A,{icon:x.L}),")"]})]}),title:"Income",action:(0,g.jsxs)(c.j,{alignment:"end",children:[(0,g.jsx)(o.V,{color:"transparent",caret:!1,className:"text-white p-0",children:(0,g.jsx)(p.A,{icon:y.P})}),(0,g.jsxs)(n.Q,{children:[(0,g.jsx)(d.k,{children:"Action"}),(0,g.jsx)(d.k,{children:"Another action"}),(0,g.jsx)(d.k,{children:"Something else here..."}),(0,g.jsx)(d.k,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,g.jsx)(h.WE,{ref:a,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,u.A)("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,g.jsx)(l.U,{sm:6,xl:4,xxl:3,children:(0,g.jsx)(i.U,{color:"warning",value:(0,g.jsxs)(g.Fragment,{children:["2.49%"," ",(0,g.jsxs)("span",{className:"fs-6 fw-normal",children:["(84.7% ",(0,g.jsx)(p.A,{icon:x.L}),")"]})]}),title:"Conversion Rate",action:(0,g.jsxs)(c.j,{alignment:"end",children:[(0,g.jsx)(o.V,{color:"transparent",caret:!1,className:"text-white p-0",children:(0,g.jsx)(p.A,{icon:y.P})}),(0,g.jsxs)(n.Q,{children:[(0,g.jsx)(d.k,{children:"Action"}),(0,g.jsx)(d.k,{children:"Another action"}),(0,g.jsx)(d.k,{children:"Something else here..."}),(0,g.jsx)(d.k,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,g.jsx)(h.WE,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})}),(0,g.jsx)(l.U,{sm:6,xl:4,xxl:3,children:(0,g.jsx)(i.U,{color:"danger",value:(0,g.jsxs)(g.Fragment,{children:["44K"," ",(0,g.jsxs)("span",{className:"fs-6 fw-normal",children:["(-23.6% ",(0,g.jsx)(p.A,{icon:m.n}),")"]})]}),title:"Sessions",action:(0,g.jsxs)(c.j,{alignment:"end",children:[(0,g.jsx)(o.V,{color:"transparent",caret:!1,className:"text-white p-0",children:(0,g.jsx)(p.A,{icon:y.P})}),(0,g.jsxs)(n.Q,{children:[(0,g.jsx)(d.k,{children:"Action"}),(0,g.jsx)(d.k,{children:"Another action"}),(0,g.jsx)(d.k,{children:"Something else here..."}),(0,g.jsx)(d.k,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,g.jsx)(h.BB,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{border:{display:!1},grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})})]})}},3842:(e,r,a)=>{"use strict";a.d(r,{T:()=>s});var s=["32 32","<path d='M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z'/>"]},78588:(e,r,a)=>{"use strict";a.d(r,{Z:()=>s});var s=["32 32","<path d='M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z'/>"]},64355:(e,r,a)=>{"use strict";a.d(r,{s:()=>s});var s=["32 32","<path d='M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z'/>"]},50342:(e,r,a)=>{"use strict";a.d(r,{n:()=>s});var s=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75' class='ci-primary'/>"]},38914:(e,r,a)=>{"use strict";a.d(r,{L:()=>s});var s=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625' class='ci-primary'/>"]},89379:(e,r,a)=>{"use strict";a.d(r,{$:()=>s});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z' class='ci-primary'/><rect width='32' height='32' x='112' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]},33881:(e,r,a)=>{"use strict";a.d(r,{s:()=>s});var s=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z' class='ci-primary'/>"]},30275:(e,r,a)=>{"use strict";a.d(r,{P:()=>s});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z' class='ci-primary'/>"]},18836:(e,r,a)=>{"use strict";a.d(r,{$:()=>o});var s=a(22378),t=a(65043),l=a(65173),i=a.n(l),c=a(25196),o=(0,t.forwardRef)((function(e,r){var a,l=e.children,i=e.className,o=e.size,n=e.vertical,d=(0,s.Tt)(e,["children","className","size","vertical"]);return t.createElement("div",(0,s.Cl)({className:(0,c.A)(n?"btn-group-vertical":"btn-group",(a={},a["btn-group-".concat(o)]=o,a),i)},d,{ref:r}),l)}));o.propTypes={children:i().node,className:i().string,size:i().oneOf(["sm","lg"]),vertical:i().bool},o.displayName="CButtonGroup"},75510:(e,r,a)=>{"use strict";a.d(r,{X:()=>o});var s=a(22378),t=a(65173),l=a.n(t),i=a(65043),c=a(25196),o=(0,i.forwardRef)((function(e,r){var a=e.children,t=e.className,l=(0,s.Tt)(e,["children","className"]);return i.createElement("div",(0,s.Cl)({className:(0,c.A)("card-footer",t)},l,{ref:r}),a)}));o.propTypes={children:l().node,className:l().string},o.displayName="CCardFooter"},46757:(e,r,a)=>{"use strict";a.d(r,{f:()=>d});var s=a(22378),t=a(65043),l=a(65173),i=a.n(l),c=a(25196),o=a(79336),n=a(54112),d=(0,t.forwardRef)((function(e,r){var a=e.children,l=e.className,i=e.height,d=e.progressBarClassName,u=e.thin,h=e.value,p=e.white,m=(0,s.Tt)(e,["children","className","height","progressBarClassName","thin","value","white"]),y=(0,t.useContext)(o.p).stacked;return t.createElement("div",(0,s.Cl)({className:(0,c.A)("progress",{"progress-thin":u,"progress-white":p},l)},void 0!==h&&{role:"progressbar","aria-valuenow":h,"aria-valuemin":0,"aria-valuemax":100},{style:(0,s.Cl)((0,s.Cl)({},i?{height:"".concat(i,"px")}:{}),y?{width:"".concat(h,"%")}:{}),ref:r}),t.Children.toArray(a).some((function(e){return e.type&&"CProgressBar"===e.type.displayName}))?t.Children.map(a,(function(e){if(t.isValidElement(e)&&"CProgressBar"===e.type.displayName)return t.cloneElement(e,(0,s.Cl)((0,s.Cl)({},h&&{value:h}),m))})):t.createElement(n.E,(0,s.Cl)({},d&&{className:d},{value:h},m),a))}));d.propTypes={children:i().node,className:i().string,height:i().number,progressBarClassName:i().string,thin:i().bool,value:i().number,white:i().bool},d.displayName="CProgress"},54112:(e,r,a)=>{"use strict";a.d(r,{E:()=>d});var s=a(22378),t=a(65043),l=a(65173),i=a.n(l),c=a(25196),o=a(79336),n=a(75232),d=(0,t.forwardRef)((function(e,r){var a,l=e.children,i=e.animated,n=e.className,d=e.color,u=e.value,h=void 0===u?0:u,p=e.variant,m=(0,s.Tt)(e,["children","animated","className","color","value","variant"]),y=(0,t.useContext)(o.p).stacked;return t.createElement("div",(0,s.Cl)({className:(0,c.A)("progress-bar",(a={},a["bg-".concat(d)]=d,a["progress-bar-".concat(p)]=p,a["progress-bar-animated"]=i,a),n)},!y&&{style:{width:"".concat(h,"%")}},m,{ref:r}),l)}));d.propTypes={animated:i().bool,children:i().node,className:i().string,color:n.TX,value:i().number,variant:i().oneOf(["striped"])},d.displayName="CProgressBar"},79336:(e,r,a)=>{"use strict";a.d(r,{p:()=>o});var s=a(22378),t=a(65043),l=a(65173),i=a.n(l),c=a(25196),o=(0,t.createContext)({}),n=(0,t.forwardRef)((function(e,r){var a=e.children,l=e.className,i=(0,s.Tt)(e,["children","className"]);return t.createElement("div",(0,s.Cl)({className:(0,c.A)("progress-stacked",l),ref:r},i),t.createElement(o.Provider,{value:{stacked:!0}},a))}));n.propTypes={children:i().node,className:i().string},n.displayName="CProgressStacked"},47390:(e,r,a)=>{"use strict";a.d(r,{U:()=>u});var s=a(22378),t=a(65043),l=a(65173),i=a.n(l),c=a(25196),o=a(80861),n=a(96105),d=a(75232),u=(0,t.forwardRef)((function(e,r){var a,l=e.action,i=e.chart,d=e.className,u=e.color,h=e.title,p=e.value,m=(0,s.Tt)(e,["action","chart","className","color","title","value"]);return t.createElement(o.E,(0,s.Cl)({className:(0,c.A)((a={},a["bg-".concat(u)]=u,a["text-white"]=u,a),d)},m,{ref:r}),t.createElement(n.W,{className:"pb-0 d-flex justify-content-between align-items-start"},t.createElement("div",null,p&&t.createElement("div",{className:"fs-4 fw-semibold"},p),h&&t.createElement("div",null,h)),l),i)}));u.propTypes={action:i().node,chart:i().oneOfType([i().string,i().node]),className:i().string,color:d.TX,title:i().oneOfType([i().string,i().node]),value:i().oneOfType([i().string,i().node,i().number])},u.displayName="CWidgetStatsA"},30529:(e,r,a)=>{"use strict";a.d(r,{$:()=>p});var s=a(22378),t=a(65043),l=a(65173),i=a.n(l),c=a(25196),o=a(80861),n=a(96105),d=a(25104),u=a(44227),h=a(75232),p=(0,t.forwardRef)((function(e,r){var a,l=e.className,i=e.chart,h=e.color,p=e.icon,m=e.values,y=(0,s.Tt)(e,["className","chart","color","icon","values"]);return t.createElement(o.E,(0,s.Cl)({className:l},y,{ref:r}),t.createElement(d.V,{className:(0,c.A)("position-relative d-flex justify-content-center align-items-center",(a={},a["bg-".concat(h)]=h,a))},p,i),t.createElement(n.W,{className:"row text-center"},m&&m.map((function(e,r){return t.createElement(t.Fragment,{key:r},r%2!==0&&t.createElement("div",{className:"vr"}),t.createElement(u.U,null,t.createElement("div",{className:"fs-5 fw-semibold"},e.value),t.createElement("div",{className:"text-uppercase text-body-secondary small"},e.title)))}))))}));p.propTypes={chart:i().oneOfType([i().string,i().node]),className:i().string,color:h.TX,icon:i().oneOfType([i().string,i().node]),values:i().arrayOf(i().any)},p.displayName="CWidgetStatsD"},19223:(e,r,a)=>{"use strict";a.d(r,{A:()=>s});var s=function(e,r){if("undefined"!==typeof window&&"undefined"!==typeof document){var a=null!==r&&void 0!==r?r:document.body;return window.getComputedStyle(a,null).getPropertyValue(e).replace(/^\s/,"")}}},98139:(e,r)=>{var a;!function(){"use strict";var s={}.hasOwnProperty;function t(){for(var e="",r=0;r<arguments.length;r++){var a=arguments[r];a&&(e=i(e,l(a)))}return e}function l(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var a in e)s.call(e,a)&&e[a]&&(r=i(r,a));return r}function i(e,r){return r?e?e+" "+r:e+r:e}e.exports?(t.default=t,e.exports=t):void 0===(a=function(){return t}.apply(r,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=772.8384c199.chunk.js.map