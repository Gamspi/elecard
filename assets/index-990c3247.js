import{a as d,B as t,s as i,r as n,j as e,C as l,b as a,L as c,c as p,X as h,O as m}from"./index-dc745bb9.js";import{S as x}from"./index-48074baa.js";const g=d`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

  body {
    margin: 0;
    max-width: 100vw;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    word-wrap: break-word;
    font-style: normal;
  }

  html {
    font-size: calc(100vw / ${t.MOBILE} * 10);
    @media (min-width: ${t.TABLET}px) {
      font-size: calc(100vw / ${t.TABLET} * 10);
    }
    @media (min-width: ${t.DESKTOP}px) {
      font-size: calc(100vw / ${t.DESKTOP} * 10);
    }
    @media (min-width: ${t.EXTRA_LARGE}px) {
      font-size: calc(100vw / ${t.EXTRA_LARGE} * 10);
    }
    @media (min-width: ${t.MAX}px) {
      font-size: 10px;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-height: 100vh;
    max-height: 100dvh;
  }

  input {
    outline: none;
  }

  button {
    outline: none;
    background: none;
    cursor: pointer;
  }
  body, button {
    color: ${({theme:o})=>o.color.blueGray};
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  main {
    flex-grow: 1;
  }

  li {
    list-style-type: none;
  }

  .portal {
    position: relative;
    z-index: 100;
  }
`,f={color:{blue:"#0075ff",turquoise:"#49D4C4",black:"#111",white:"#fff",lightGray:"#E8F0F8",gray:"#bfc3c5",blueGray:"#375574"},shadow:{default:"0 2.4rem 3.2rem 0 rgba(129, 188, 214, 0.12);"}},u="/assets/logo-529c3d78.svg",y=i.nav`
  display: flex;
  gap: 1.5rem;
  text-transform: capitalize;
`,b=i.header`
  padding: 1.6rem;
  display: flex;
  gap: 1.6rem;
  align-items: center;
  border-radius: 0 0 0.8rem 0.8rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(1, 0, 44, 0.25);
  background-color: ${({theme:o})=>o.color.white};
  position: relative;
  z-index: 10;
`,w=i.img`
  object-fit: contain;
  width: 3rem;
  height: 3rem;
`,s={Nav:y,Block:b,Logo:w},v=[{label:"Main",path:"/"},{label:"Catalog",path:"catalog"}],j=()=>e.jsx(s.Block,{children:e.jsx(l,{children:e.jsxs(a.Flex,{$gap:1.6,$align:"center",children:[e.jsx(c,{to:"/",children:e.jsx(s.Logo,{src:u})}),e.jsx(a.Flex,{$gap:1.6,children:v.map(o=>e.jsx(p,{to:o.path,children:o.label},o.path))})]})})}),$=n.memo(j),E=i.footer`
  border-top: 1px solid ${({theme:o})=>o.color.blue}50;
  padding: 1.6rem;
`,k=()=>e.jsx(E,{children:e.jsx(l,{children:e.jsx(a.Flex,{$justify:"flex-end",children:"This project was made by Nikolay Yushin"})})}),L=n.memo(k),A=i.div`
  height: 100%;
  display: grid;
  overflow: auto;
`,C=i(x)`
  max-width: 100vw;
  overflow-x: hidden;
  grid-area: 1/1/1/1;

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
    transition: opacity 300ms linear, transform 300ms linear;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: opacity 300ms linear, transform 300ms linear;
  }
`,z=i.div`
  display: grid;
  overflow: hidden;
  height: 100vh;
  max-height: 100vh;
  max-height: 100dvh;
  grid-template-rows: auto 1fr auto;
`,r={Main:A,Container:C,AppWrapper:z},B=()=>e.jsxs(h,{theme:f,children:[e.jsx(g,{}),e.jsxs(r.AppWrapper,{children:[e.jsx($,{}),e.jsx(r.Main,{children:e.jsx(r.Container,{autoHide:!0,children:e.jsx(m,{})})}),e.jsx(L,{})]})]}),G=n.memo(B);export{G as default};
//# sourceMappingURL=index-990c3247.js.map
