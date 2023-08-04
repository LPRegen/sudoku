import{r as y}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";var i={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=y,N=Symbol.for("react.element"),w=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,E=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,m){var r,o={},p=null,c=null;m!==void 0&&(p=""+m),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)v.call(e,r)&&!O.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:N,type:t,key:p,ref:c,props:o,_owner:E.current}}a.Fragment=w;a.jsx=l;a.jsxs=l;i.exports=a;var f=i.exports;const s=({children:t,...e})=>f.jsx("button",{...e,className:"btn",children:t});try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{}}}catch{}const j={component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{}},n={name:"New game",render:()=>f.jsx(s,{children:"New Game"})};var _,u,d;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'New game',
  render: () => <Button>New Game</Button>
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const B=["NewGame"];export{n as NewGame,B as __namedExportsOrder,j as default};
//# sourceMappingURL=Button.stories-272f286c.js.map
