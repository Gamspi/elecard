import{R as j,u as V,f as G,g as _,r as l,_ as z,h as H,i as W,k as C,T as k,l as Y,s as m,B as f,m as E,j as i,n as b,o as Z,e as L,p as q,b as Q,q as U,t as K,C as X,L as J,O as ee}from"./index-3150ab80.js";import{S as D}from"./index-ec8a6efe.js";import{u as y,C as O}from"./index-48c756e7.js";function I(e=j){const t=e===j?V:G(e);return function(){const{store:r}=t();return r}}const te=I();function ne(e=j){const t=e===j?te:I(e);return function(){return t().dispatch}}const oe=ne(),w=oe,re={Button:_};function se(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){var n=function(s){return t&&l.isValidElement(s)?t(s):s},r=Object.create(null);return e&&l.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function ie(e,t){e=e||{},t=t||{};function n(p){return p in t?t[p]:e[p]}var r=Object.create(null),o=[];for(var s in e)s in t?o.length&&(r[s]=o,o=[]):o.push(s);var a,c={};for(var d in t){if(r[d])for(a=0;a<r[d].length;a++){var u=r[d][a];c[r[d][a]]=n(u)}c[d]=n(d)}for(a=0;a<o.length;a++)c[o[a]]=n(o[a]);return c}function x(e,t,n){return n[t]!=null?n[t]:e.props[t]}function ae(e,t){return A(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:x(n,"appear",e),enter:x(n,"enter",e),exit:x(n,"exit",e)})})}function le(e,t,n){var r=A(e.children),o=ie(t,r);return Object.keys(o).forEach(function(s){var a=o[s];if(l.isValidElement(a)){var c=s in t,d=s in r,u=t[s],p=l.isValidElement(u)&&!u.props.in;d&&(!c||p)?o[s]=l.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:x(a,"exit",e),enter:x(a,"enter",e)}):!d&&c&&!p?o[s]=l.cloneElement(a,{in:!1}):d&&c&&l.isValidElement(u)&&(o[s]=l.cloneElement(a,{onExited:n.bind(null,a),in:u.props.in,exit:x(a,"exit",e),enter:x(a,"enter",e)}))}}),o}var ce=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},de={component:"div",childFactory:function(t){return t}},R=function(e){z(t,e);function t(r,o){var s;s=e.call(this,r,o)||this;var a=s.handleExited.bind(se(s));return s.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},s}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,s){var a=s.children,c=s.handleExited,d=s.firstRender;return{children:d?ae(o,c):le(o,a,c),firstRender:!1}},n.handleExited=function(o,s){var a=A(this.props.children);o.key in a||(o.props.onExited&&o.props.onExited(s),this.mounted&&this.setState(function(c){var d=H({},c.children);return delete d[o.key],{children:d}}))},n.render=function(){var o=this.props,s=o.component,a=o.childFactory,c=W(o,["component","childFactory"]),d=this.state.contextValue,u=ce(this.state.children).map(a);return delete c.appear,delete c.enter,delete c.exit,s===null?C.createElement(k.Provider,{value:d},u):C.createElement(k.Provider,{value:d},C.createElement(s,c,u))},t}(C.Component);R.propTypes={};R.defaultProps=de;const ue=R,me={Card:Y},pe=m.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;
  @media (min-width: ${f.TABLET}px) {
    gap: 1.2rem;
  }
  @media (min-width: ${f.DESKTOP}px) {
    gap: 1.6rem;
  }
`,he=m(ue)`
  display: grid;
  gap: 1.6rem;
  padding: 0 1.2rem 1.6rem;

  @media (min-width: ${f.TABLET}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${f.DESKTOP}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }
`,ge=m.aside`
  display: flex;
  justify-content: center;
`,fe=m(D)`
  width: 100%;
`,xe=m.div`
  padding: 0 1.2rem;
  display: grid;
  gap: 1.6rem;
  align-items: center;
`,Ce=60,ve=[{label:30,code:30},{label:60,code:60},{label:90,code:90}],$e=()=>{const e=l.useRef(null),t=w(),[n,r]=l.useState([]),[o,s]=l.useState(Ce),{isLoading:a}=y(g=>g.catalog),[c,d]=l.useState(1),u=g=>{var v;d(g),(v=e.current)==null||v.scrollTop(0)},p=g=>{r(g)},B=l.useMemo(()=>{const g=o*(c-1),v=o*c;return n.slice(g,v)},[o,n,c]),F=async()=>{await t(E.getCatalogList())},N=g=>{s(+g)};return l.useEffect(()=>{d(1)},[n]),l.useEffect(()=>{F()},[]),{page:c,quantity:o,isLoading:a,computedList:B,scrollListNode:e,handelSetPage:u,handelSetQuantity:N,handelSetSortedList:p}},je=()=>{const e=w();return{handelRefreshList:()=>{e(E.refreshCatalogList()),e(E.getCatalogList())}}},Ee=e=>{const{handelRefreshList:t}=je();return i.jsx(O.Primary,{...e,onClick:t})},be=l.memo(Ee),Le=({pageSize:e})=>{const{list:t}=y(r=>r.catalog);return{totalPageCount:l.useMemo(()=>Math.ceil(t.length/e),[t.length,e])}},ye=({pageSize:e,onChange:t,currentPage:n})=>{const{totalPageCount:r}=Le({pageSize:e});return i.jsx(re.Button,{totalPageCount:r,onChange:t,currentPage:n,siblingCount:1})},Te=l.memo(ye),Se=e=>{const t=w();return{handelDelete:()=>{t(E.deleteCatalogItem(e))}}},we=({id:e})=>{const{handelDelete:t}=Se(e);return i.jsx(O.Icon,{onClick:t,children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",children:i.jsx("path",{d:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"})})})},Ae=l.memo(we),Re=m.li`
  transition: color 0.15s ease-in;

  ${e=>e.$isActive?b`
          color: ${e.theme.color.blue};
        `:b`
          @media (hover: hover) {
            &:hover {
              color: ${t=>t.theme.color.blue}66;
            }
          }
        `}
`,ke=m.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`,Me=m.input`
  opacity: ${e=>+!!e.$isActive};
  appearance: none;

  width: 1.6rem;
  height: 1.6rem;
  background: url("${Z}") center/ cover no-repeat;
  transition: transform 0.15s ease-in, opacity 0.15s ease-in;

  &:checked {
    transform: rotate(180deg);
  }
`,T={Checkbox:Me,Container:Re,Wrapper:ke},De=({label:e,isActive:t,onChange:n,isRevert:r,code:o})=>i.jsx(T.Container,{$isActive:t,children:i.jsxs(T.Wrapper,{children:[i.jsx(T.Checkbox,{$isActive:t,type:"checkbox",checked:r&&t,onChange:()=>n(o)}),i.jsx(L.Text,{children:e})]})}),Oe=l.memo(De);var h=(e=>(e.CATEGORY="CATEGORY",e.DATE="DATE",e.NAME="NAME",e.SIZE="SIZE",e))(h||{});const Ie=[{code:h.CATEGORY,label:"Category"},{code:h.DATE,label:"Date"},{code:h.NAME,label:"Name"},{code:h.SIZE,label:"Size"}];function M(e,t){const n=e.toLowerCase(),r=t.toLowerCase();return n<r?-1:n>r?1:0}function Pe(e,t){let n=[...e];switch(t){case h.DATE:return n.sort((r,o)=>o.timestamp-r.timestamp);case h.SIZE:return n.sort((r,o)=>o.filesize-r.filesize);case h.NAME:return n.sort((r,o)=>M(r.name,o.name));case h.CATEGORY:return n.sort((r,o)=>M(r.category,o.category));default:return n}}const Be=({setList:e})=>{const[t,n]=l.useState(h.NAME),[r,o]=l.useState(!1),{isLoading:s,list:a}=y(u=>u.catalog),c=l.useMemo(()=>{let u=Pe(a,t);return r&&(u=[...u.reverse()]),u},[r,a,t]),d=u=>{if(u===t)return o(p=>!p);n(u),o(!1)};return l.useEffect(()=>{s||!s&&!a.length||e(c)},[s,c]),{sort:t,isRevert:r,handelChangeSortValue:d}},Fe=m.ul`
  display: flex;
  gap: 1.6rem;
`,Ne={Block:Fe},Ve=e=>{const{sort:t,handelChangeSortValue:n,isRevert:r}=Be(e),o=l.useId();return i.jsx(Ne.Block,{children:Ie.map(s=>i.jsx(Oe,{isRevert:r,code:s.code,onChange:()=>n(s.code),label:s.label,isActive:t===s.code,name:o},s.code))})},Ge=l.memo(Ve),_e=()=>{const{page:e,quantity:t,isLoading:n,computedList:r,scrollListNode:o,handelSetPage:s,handelSetSortedList:a,handelSetQuantity:c}=$e();return i.jsxs(pe,{children:[i.jsx(q,{isLoading:n}),i.jsxs(xe,{children:[i.jsxs(Q.Flex,{$gap:1.6,$justify:"flex-end",$align:"center",children:[i.jsx(U,{options:ve,value:t,onChange:c}),i.jsx(be,{children:"Reset"})]}),i.jsx(Ge,{setList:a})]}),i.jsx(fe,{autoHide:!0,ref:o,children:i.jsx(he,{children:r.map(d=>i.jsx(K,{timeout:300,children:i.jsx(me.Card,{to:`${d.id}`,item:d,action:i.jsx(Ae,{id:d.id})})},d.id))})}),i.jsx(ge,{children:i.jsx(Te,{currentPage:e,pageSize:t,onChange:s})})]})},ze=l.memo(_e),He=m(X)`
  padding-top: 2.4rem;
  padding-bottom: 1.6rem;
  height: 100%;
  position: relative;

  @media (min-width: ${f.DESKTOP}px) {
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-template-rows: auto 1fr;
    gap: 4rem;
  }
  @media (min-width: ${f.EXTRA_LARGE}px) {
    display: grid;
    grid-template-columns: 30rem 1fr;
    gap: 4rem;
  }
`,We=m.section`
  height: 100%;
  @media (min-width: ${f.DESKTOP}px) {
    grid-column: 2/3;
    grid-row: 1/3;
  }
`,Ye=m(D)`
  display: none;

  @media (min-width: ${f.DESKTOP}px) {
    grid-column: 1/2;
    display: block;
  }
`,S={Content:He,List:We,TreeList:Ye},Ze=m.li``,qe=m.ul`
  overflow: hidden;
  max-height: 0;
  margin-left: 1.4rem;
  border-left: 1px solid ${({theme:e})=>e.color.blue};
  ${e=>e.$isOpen&&b`
      max-height: inherit;
    `}
`;m.div`
  padding: 0.8rem 0.6rem;
  display: flex;
`;const Qe=m.article`
  padding: 0.8rem 0.3rem;
  margin: 0 0.3rem;
  display: flex;
  position: relative;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.3rem;
  min-width: 10rem;

  @media (hover: hover) {
    transition: background-color 0.15s ease-in;
    &:hover {
      background-color: ${({theme:e})=>e.color.blue}33;
    }
  }
`,Ue=m(J)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0.8rem 0.6rem;
  display: flex;
`,Ke=m(L.Title)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Xe=m.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
`,$={Block:Qe,Action:Ue,Name:Ke,Img:Xe},Je=({name:e,action:t,src:n,...r})=>i.jsxs($.Block,{children:[i.jsx($.Img,{src:n,alt:e}),i.jsx($.Action,{...r,children:t}),i.jsx($.Name,{level:6,children:e})]}),et=l.memo(Je),tt=({item:e,button:t})=>{var c,d;const[n,r]=l.useState(!1),o=()=>r(u=>!u);let s=null;const a=C.cloneElement(t,{onClick:o,children:e.name,$isActive:n});return(c=e.list)!=null&&c.length&&(s=i.jsx(qe,{$isOpen:n,children:e.list.map(u=>i.jsx(P,{item:u,button:t},u.id))})),i.jsxs(Ze,{children:[(d=e.list)!=null&&d.length?a:i.jsx(et,{name:e.name,src:e.src||"",to:`${e.id}`}),s]})},P=l.memo(tt),nt="/assets/folder-ff2d7333.svg",ot="/assets/openFolder-67f95810.svg",rt=m.button`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 0.8rem 0.6rem;
  text-transform: capitalize;
  gap: 0.6rem;

  &:before,
  &:after {
    grid-area: 1/1/1/1;
    content: "";
    display: block;
    height: 1.6rem;
    width: 1.6rem;
  }

  &:before {
    background: url("${nt}") center/contain no-repeat;
  }

  &:after {
    opacity: 0;
    background: url("${ot}") center/contain no-repeat;
  }

  @media (hover: hover) {
    transition: color 0.15s ease-in;

    &:hover {
      color: ${({theme:e})=>e.color.blue};
    }
  }

  ${e=>e.$isActive&&b`
      &:before {
        opacity: 0;
      }

      &:after {
        opacity: 1;
      }
    `}
`,st=m(L.Title)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,it=({children:e,...t})=>i.jsx(rt,{...t,$isActive:t.$isActive,children:i.jsx(st,{level:6,children:e})}),at=l.memo(it);function lt(e){return{id:e.id,name:e.name,src:e.image,list:[]}}const ct=()=>{const{list:e}=y(n=>n.catalog);return{treeList:l.useMemo(()=>e.reduce((n,r)=>{const o=n[r.category],s=lt(r);return o&&o.list?o.list=[...o.list,s]:n[r.category]={list:[s],id:r.category,name:r.category},n},{}),[e])}},dt=()=>{const{treeList:e}=ct();return i.jsx("ul",{children:Object.entries(e).map(([t,n])=>i.jsx(P,{item:n,button:i.jsx(at,{})},n.id))})},ut=l.memo(dt),mt=()=>i.jsxs(i.Fragment,{children:[i.jsxs(S.Content,{children:[i.jsx(L.Title,{children:"Catalog"}),i.jsx(S.TreeList,{autoHide:!0,children:i.jsx(ut,{})}),i.jsx(S.List,{children:i.jsx(ze,{})})]}),i.jsx(ee,{})]}),ft=l.memo(mt);export{ft as default};
//# sourceMappingURL=ui-a2700314.js.map
