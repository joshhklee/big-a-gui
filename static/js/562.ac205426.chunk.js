"use strict";(self.webpackChunkmy_dashboard_app=self.webpackChunkmy_dashboard_app||[]).push([[562],{44562:(e,s,t)=>{t.r(s),t.d(s,{default:()=>S});var o=t(65043),i=t(44101),a=t(44227),n=t(80861),r=t(25104),c=t(96105),l=t(22378),d=t(65173),h=t.n(d),u=t(25196),m=(0,o.createContext)({}),p=(0,o.forwardRef)((function(e,s){var t=e.children,i=e.activeItemKey,a=e.alwaysOpen,n=void 0!==a&&a,r=e.className,c=e.flush,d=(0,l.Tt)(e,["children","activeItemKey","alwaysOpen","className","flush"]),h=(0,o.useState)(i),p=h[0],y=h[1];return o.createElement("div",(0,l.Cl)({className:(0,u.A)("accordion",{"accordion-flush":c},r)},d,{ref:s}),o.createElement(m.Provider,{value:{_activeItemKey:p,alwaysOpen:n,setActiveKey:y}},t))}));p.propTypes={alwaysOpen:h().bool,activeItemKey:h().oneOfType([h().number,h().string]),children:h().node,className:h().string,flush:h().bool},p.displayName="CAccordion";var y=(0,o.createContext)({}),f=(0,o.forwardRef)((function(e,s){var t=e.children,i=e.className,a=e.itemKey,n=(0,l.Tt)(e,["children","className","itemKey"]),r=(0,o.useRef)(null!==a&&void 0!==a?a:Math.random().toString(36).slice(2,11)),c=(0,o.useContext)(m),d=c._activeItemKey,h=c.alwaysOpen,p=c.setActiveKey,f=(0,o.useState)(Boolean(d===r.current)),g=f[0],x=f[1];return(0,o.useEffect)((function(){!h&&g&&p(r.current)}),[g]),(0,o.useEffect)((function(){x(Boolean(d===r.current))}),[d]),o.createElement("div",(0,l.Cl)({className:(0,u.A)("accordion-item",i)},n,{ref:s}),o.createElement(y.Provider,{value:{setVisible:x,visible:g}},t))}));f.propTypes={children:h().node,className:h().string,itemKey:h().oneOfType([h().number,h().string])},f.displayName="CAccordionItem";var g=(0,o.forwardRef)((function(e,s){var t=e.children,i=e.className,a=(0,l.Tt)(e,["children","className"]),n=(0,o.useContext)(y),r=n.visible,c=n.setVisible;return o.createElement("button",(0,l.Cl)({type:"button",className:(0,u.A)("accordion-button",{collapsed:!r},i),"aria-expanded":!r,onClick:function(){return c(!r)}},a,{ref:s}),t)}));g.propTypes={children:h().node,className:h().string},g.displayName="CAccordionButton";var x=(0,o.forwardRef)((function(e,s){var t=e.children,i=e.className,a=(0,l.Tt)(e,["children","className"]);return o.createElement("div",(0,l.Cl)({className:(0,u.A)("accordion-header",i)},a,{ref:s}),o.createElement(g,null,t))}));x.propTypes={children:h().node,className:h().string},x.displayName="CAccordionHeader";var j=t(6139),w=(0,o.forwardRef)((function(e,s){var t=e.children,i=e.className,a=(0,l.Tt)(e,["children","className"]),n=(0,o.useContext)(y).visible;return o.createElement(j.x,{className:"accordion-collapse",visible:n},o.createElement("div",(0,l.Cl)({className:(0,u.A)("accordion-body",i)},a,{ref:s}),t))}));w.propTypes={children:h().node,className:h().string},w.displayName="CAccordionBody";var v=t(19564),b=t(70579);const S=()=>(0,b.jsx)(i.s,{children:(0,b.jsxs)(a.U,{xs:12,children:[(0,b.jsxs)(n.E,{className:"mb-4",children:[(0,b.jsx)(r.V,{children:(0,b.jsx)("strong",{children:"React Accordion"})}),(0,b.jsxs)(c.W,{children:[(0,b.jsx)("p",{className:"text-body-secondary small",children:"Click the accordions below to expand/collapse the accordion content."}),(0,b.jsx)(v.Eb,{href:"components/accordion",children:(0,b.jsxs)(p,{activeItemKey:2,children:[(0,b.jsxs)(f,{itemKey:1,children:[(0,b.jsx)(x,{children:"Accordion Item #1"}),(0,b.jsxs)(w,{children:[(0,b.jsx)("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,b.jsxs)(f,{itemKey:2,children:[(0,b.jsx)(x,{children:"Accordion Item #2"}),(0,b.jsxs)(w,{children:[(0,b.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,b.jsxs)(f,{itemKey:3,children:[(0,b.jsx)(x,{children:"Accordion Item #3"}),(0,b.jsxs)(w,{children:[(0,b.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),(0,b.jsxs)(n.E,{className:"mb-4",children:[(0,b.jsxs)(r.V,{children:[(0,b.jsx)("strong",{children:"React Accordion"})," ",(0,b.jsx)("small",{children:"Flush"})]}),(0,b.jsxs)(c.W,{children:[(0,b.jsxs)("p",{className:"text-body-secondary small",children:["Add ",(0,b.jsx)("code",{children:"flush"})," to remove the default ",(0,b.jsx)("code",{children:"background-color"}),", some borders, and some rounded corners to render accordions edge-to-edge with their parent container."]}),(0,b.jsx)(v.Eb,{href:"components/accordion#flush",children:(0,b.jsxs)(p,{flush:!0,children:[(0,b.jsxs)(f,{itemKey:1,children:[(0,b.jsx)(x,{children:"Accordion Item #1"}),(0,b.jsxs)(w,{children:[(0,b.jsx)("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,b.jsxs)(f,{itemKey:2,children:[(0,b.jsx)(x,{children:"Accordion Item #2"}),(0,b.jsxs)(w,{children:[(0,b.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,b.jsxs)(f,{itemKey:3,children:[(0,b.jsx)(x,{children:"Accordion Item #3"}),(0,b.jsxs)(w,{children:[(0,b.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),(0,b.jsxs)(n.E,{className:"mb-4",children:[(0,b.jsxs)(r.V,{children:[(0,b.jsx)("strong",{children:"React Accordion"})," ",(0,b.jsx)("small",{children:"Always open"})]}),(0,b.jsxs)(c.W,{children:[(0,b.jsxs)("p",{className:"text-body-secondary small",children:["Add ",(0,b.jsx)("code",{children:"alwaysOpen"})," property to make accordion items stay open when another item is opened."]}),(0,b.jsx)(v.Eb,{href:"components/accordion#flush",children:(0,b.jsxs)(p,{alwaysOpen:!0,children:[(0,b.jsxs)(f,{itemKey:1,children:[(0,b.jsx)(x,{children:"Accordion Item #1"}),(0,b.jsxs)(w,{children:[(0,b.jsx)("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,b.jsxs)(f,{itemKey:2,children:[(0,b.jsx)(x,{children:"Accordion Item #2"}),(0,b.jsxs)(w,{children:[(0,b.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),(0,b.jsxs)(f,{itemKey:3,children:[(0,b.jsx)(x,{children:"Accordion Item #3"}),(0,b.jsxs)(w,{children:[(0,b.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",(0,b.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]})]})})}}]);
//# sourceMappingURL=562.ac205426.chunk.js.map