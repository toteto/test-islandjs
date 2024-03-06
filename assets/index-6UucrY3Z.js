import{jsx as t,Fragment as s}from"react/jsx-runtime";const a={pageType:"home",hero:{name:"Vidos Docs",text:"<vidos-text>",tagline:"<vidos-tagline>",image:{src:"/vidos-logo.svg",alt:"Note"},actions:[{theme:"brand",text:"Resolver",link:"./docs/services/resolver"},{theme:"alt",text:"Vidos Dashboard",link:"https://dashboard.vidos.dev"}]},features:[{title:"Resolvers",details:"Manage resolvers",icon:"🥴"},{title:"API Keys",details:"Manage API keys",icon:"😵"},{title:"Policies",details:"Policies, no police",icon:"🧑‍🚒"}]},l=[];function o(e){return t(s,{})}function r(e={}){const{wrapper:n}=e.components||{};return n?t(n,Object.assign({},e,{children:t(o,e)})):o()}const d="Invalid Date",c=`---
pageType: home

hero:
    name: Vidos Docs
    text: <vidos-text>
    tagline: <vidos-tagline>
    image:
        src: /vidos-logo.svg
        alt: Note
    actions:
        - theme: brand
          text: Resolver
          link: ./docs/services/resolver
        - theme: alt
          text: Vidos Dashboard
          link: https://dashboard.vidos.dev
features:
    - title: Resolvers
      details: Manage resolvers
      icon: 🥴
    - title: API Keys
      details: Manage API keys
      icon: 😵
    - title: Policies
      details: Policies, no police
      icon: 🧑‍🚒
---
`;export{c as content,r as default,a as frontmatter,d as lastUpdatedTime,l as toc};
