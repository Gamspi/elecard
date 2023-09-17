import{x as g,r as n,y as p,s as r,B as h,z as x,j as o,A as f}from"./index-17b024d3.js";import{u as j,C}from"./index-6639e406.js";const w=()=>{const t=g(),[e,l]=n.useState(null),{list:c,isLoading:m}=j(s=>s.catalog),{id:a}=p(),d=()=>t("/catalog");return n.useEffect(()=>{setTimeout(()=>{if(!a)return t("/catalog");if(m)return;const s=c.find(u=>u.id.toString()===a);if(!s)return t("/catalog");l(s)})},[a,m,c,t]),{item:e,handelToBack:d}},B=r.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({theme:t})=>t.color.blue}33;
  display: flex;
  align-items: center;
  justify-content: center;
`,$=r(C.Icon)`
  position: absolute;
  top: 3.2rem;
  right: 3.2rem;
  width: 4rem;
  height: 4rem;
  @media (min-width: ${h.TABLET}px) {
    width: 8rem;
    height: 8rem;
  }
`,v=r(x)`
  border-radius: 1.6rem;
`,i={Image:v,Container:B,Button:$},y=()=>{const{handelToBack:t,item:e}=w();return o.jsx(f,{children:o.jsxs(i.Container,{children:[o.jsx(i.Button,{onClick:t,children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",children:o.jsx("path",{d:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"})})}),o.jsx(i.Image,{src:e==null?void 0:e.image,alt:`${e==null?void 0:e.name}`,$objectFit:"cover"})]})})},I=n.memo(y),T=()=>o.jsx(I,{}),E=n.memo(T);export{E as default};
//# sourceMappingURL=index-3766b800.js.map
