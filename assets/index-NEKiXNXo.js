import{jsxs as i,jsx as n,Fragment as t}from"react/jsx-runtime";import{R as a,s as r}from"./ResolutionOverview-pbYbFRM6.js";import"react";import"../client-entry.js";import"react-dom";function l(s){return i("p",{children:[i("strong",{children:["Q: ",s.question]}),` ${s.answer}`]})}const u={title:"Universal Resolver - Overview - Vidos",page_type:"Article"},m=[{id:"features",text:"Features",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"faqs",text:"FAQs",depth:2},{id:"general",text:"General",depth:3},{id:"resolution",text:"Resolution",depth:3},{id:"standards-and-compliance",text:"Standards and compliance",depth:3},{id:"pricing",text:"Pricing",depth:3}],g="Vidos Universal Resolver Overview";function o(s){const e=Object.assign({h1:"h1",a:"a",p:"p",img:"img",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3"},s.components);return i(t,{children:[i(e.h1,{id:"vidos-universal-resolver-overview",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#vidos-universal-resolver-overview",children:"#"}),"Vidos Universal Resolver Overview"]}),`
`,n(e.p,{children:"The Vidos Universal Resolver provides a scalable, reliable, and configurable DID resolution service. The W3C Decentralized Identifiers (DIDs) v1.0 standard-compliant service supports a comprehensive range of DID methods, ensures 99.95% SLA-backed uptime, and cost-effective operations. It's designed for seamless integration into enterprise systems and existing decentralized identity applications."}),`
`,n(e.p,{children:n(e.img,{src:"/img/resolver-mock-screen.png",alt:"The Vidos Universal Resolver Dashboard"})}),`
`,i(e.h2,{id:"features",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"Features"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"Support for Multiple DID Methods"}),": The Universal Resolver supports a wide range of DID methods."]}),`
`,i(e.li,{children:[n(e.strong,{children:"API Access"}),": Manage the resolver programmatically through our API."]}),`
`,i(e.li,{children:[n(e.strong,{children:"Customizable"}),": Customize the resolver to meet your specific needs."]}),`
`]}),`
`,i(e.h2,{id:"how-it-works",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#how-it-works",children:"#"}),"How it works"]}),`
`,n(e.p,{children:"Vidos Universal Resolver responds to DID resolution requests with DID documents and metadata, as per the W3C DID Core and DID Resolution specifications. The resolver supports a broad range of DID methods, including jwk, plc, btcr, cheqd, ebsi, ens, ethr, ion, key, oyd, polygonid, sov, and web."}),`
`,n(a,{}),`
`,i(e.h2,{id:"faqs",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#faqs",children:"#"}),"FAQs"]}),`
`,i(e.h3,{id:"general",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#general",children:"#"}),"General"]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: What is Vidos Universal Resolver?"}),`
The Vidos Universal Resolver is an enterprise-grade service for decentralized identifier (DID) resolution, supporting a broad range of DID methods with configurable policies and high data security standards.`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: Why should I use the Vidos Universal Resolver?"}),`
Vidos Universal Resolver provides developers with a simple, fully managed, high-performance DID resolution service that resolves DIDs across different DID methods, as per the W3C DID Core and DID Resolution specifications, producing conforming DID documents.`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: Currently we resolve more than one DID Method. Can I still use the Vidos Universal Resolver?"}),`
Yes. The Vidos Universal Resolver provides a unified API interface to resolve various types of DID across supported methods. The resolver simplifies the process by handling the complexities and offers secure, reliable resolution with rich monitoring capabilities.`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: Can I create multiple universal resolvers?"}),`
Yes, with Vidos Universal Resolver, you can create multiple resolves and configure them independently.`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: Does Vidos Universal Resolver offer a Service Level Agreement (SLA)?"}),`
Yes. Professional and Enterprise plans both provide a 99.95% uptime guarantee.`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: What are the benefits of the Vidos Universal Resolver in my application?"}),`
The Vidos Universal Resolver ensures applications can resolve DIDs quickly, and provides a high degree of control and visibility over DID resolution, with access to logs, user operations, and error monitoring.`]}),`
`,i(e.h3,{id:"resolution",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#resolution",children:"#"}),"Resolution"]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: What is decentralized identifier (DID) resolution?"}),`
Decentralized identifier (DID) resolution is the process of obtaining a DID document and supporting metadata for a given `,n(e.a,{href:"/test-islandjs/docs/concepts/did",children:"DID"}),". Vidos Universal Resolver returns a resolution response based on the DID's ",n(e.a,{href:"/test-islandjs/did#method",children:"method specification"}),"."]}),`
`,n(l,{question:"Which DID methods does the resolver support?",answer:`The resolver supports a comprehensive range of DID methods, including: ${r.slice(0,r.length-1).join(", ")} and ${r.reverse()[0]}.`}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: Is the Vidos Universal Resolver a drop-in replacement for our existing universal resolver?"}),`
The Vidos Universal Resolver can replace existing universal resolvers. Simply configure your resolver instance, then update your applications to use the new endpoint.`]}),`
`,i(e.h3,{id:"standards-and-compliance",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#standards-and-compliance",children:"#"}),"Standards and compliance"]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: Does the Vidos Universal Resolver conform to the W3C standards?"}),`
Yes, Vidos Universal Resolver follows the standards layed out in the `,n(e.a,{href:"https://www.w3.org/TR/did-core/",target:"_blank",rel:"nofollow",children:"W3C DID Core"})," and ",n(e.a,{href:"https://w3c-ccg.github.io/did-resolution/",target:"_blank",rel:"nofollow",children:"DID Resolution"})," specifications, producing conforming DID resolution responses."]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: How does the Vidos Universal Resolver integrate with existing credential issuer and management system?"}),`
Following W3C standards, the Vidos Universal Resolver is compatible with most credential issuers, verifiers, and distributed identity services, ensuring seamless integration with existing systems.`]}),`
`,i(e.h3,{id:"pricing",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pricing",children:"#"}),"Pricing"]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: How is the Vidos Universal Resolver licensed?"}),`
The Vidos Universal Resolver is licensed under a Software as a Service (SaaS) model.`]}),`
`,i(e.p,{children:[n(e.strong,{children:"Q: What plans are available?"}),`
There are three plans (see `,n(e.a,{href:"https://vidos.id/pricing",target:"_blank",rel:"nofollow",children:"pricing"})," for further information):"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"Developer Plan"}),": For developers who need DID resolution in their application. Get started easily and quickly."]}),`
`,i(e.li,{children:[n(e.strong,{children:"Professional Plan"}),": For businesses who need a scalable, reliable resolver in production, with additional features. Quick and convenient to deploy, easy to manage and keep up to date, resulting in access to a reliable resolver customized for each application."]}),`
`,i(e.li,{children:[n(e.strong,{children:"Enterprise Plan"}),": Customizable solutions for large clients with additional compliance and availability needs with dedicated support."]}),`
`]})]})}function D(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(o,s)})):o(s)}const f="Invalid Date",I=`---
title: 'Universal Resolver - Overview - Vidos'
page_type: 'Article'
---

import { ResolutionComponent } from './ResolutionOverview';
import { FaqItem } from '../../../components/faq/FaqItem';
import { supportedMethodsValues } from '@vidos/types';

# Vidos Universal Resolver Overview

The Vidos Universal Resolver provides a scalable, reliable, and configurable DID resolution service. The W3C Decentralized Identifiers (DIDs) v1.0 standard-compliant service supports a comprehensive range of DID methods, ensures 99.95% SLA-backed uptime, and cost-effective operations. It's designed for seamless integration into enterprise systems and existing decentralized identity applications.

![The Vidos Universal Resolver Dashboard](/img/resolver-mock-screen.png)

## Features

-   **Support for Multiple DID Methods**: The Universal Resolver supports a wide range of DID methods.
-   **API Access**: Manage the resolver programmatically through our API.
-   **Customizable**: Customize the resolver to meet your specific needs.

## How it works

Vidos Universal Resolver responds to DID resolution requests with DID documents and metadata, as per the W3C DID Core and DID Resolution specifications. The resolver supports a broad range of DID methods, including jwk, plc, btcr, cheqd, ebsi, ens, ethr, ion, key, oyd, polygonid, sov, and web.

<ResolutionComponent />

## FAQs

### General

**Q: What is Vidos Universal Resolver?**
The Vidos Universal Resolver is an enterprise-grade service for decentralized identifier (DID) resolution, supporting a broad range of DID methods with configurable policies and high data security standards.

**Q: Why should I use the Vidos Universal Resolver?**
Vidos Universal Resolver provides developers with a simple, fully managed, high-performance DID resolution service that resolves DIDs across different DID methods, as per the W3C DID Core and DID Resolution specifications, producing conforming DID documents.

**Q: Currently we resolve more than one DID Method. Can I still use the Vidos Universal Resolver?**
Yes. The Vidos Universal Resolver provides a unified API interface to resolve various types of DID across supported methods. The resolver simplifies the process by handling the complexities and offers secure, reliable resolution with rich monitoring capabilities.

**Q: Can I create multiple universal resolvers?**
Yes, with Vidos Universal Resolver, you can create multiple resolves and configure them independently.

**Q: Does Vidos Universal Resolver offer a Service Level Agreement (SLA)?**
Yes. Professional and Enterprise plans both provide a 99.95% uptime guarantee.

**Q: What are the benefits of the Vidos Universal Resolver in my application?**
The Vidos Universal Resolver ensures applications can resolve DIDs quickly, and provides a high degree of control and visibility over DID resolution, with access to logs, user operations, and error monitoring.

### Resolution

**Q: What is decentralized identifier (DID) resolution?**
Decentralized identifier (DID) resolution is the process of obtaining a DID document and supporting metadata for a given [DID](/docs/concepts/did). Vidos Universal Resolver returns a resolution response based on the DID's [method specification](did#method).

<FaqItem
    question="Which DID methods does the resolver support?"
    answer={\`The resolver supports a comprehensive range of DID methods, including: \${supportedMethodsValues
        .slice(0, supportedMethodsValues.length - 1)
        .join(', ')} and \${supportedMethodsValues.reverse()[0]}.\`}
/>

**Q: Is the Vidos Universal Resolver a drop-in replacement for our existing universal resolver?**
The Vidos Universal Resolver can replace existing universal resolvers. Simply configure your resolver instance, then update your applications to use the new endpoint.

### Standards and compliance

**Q: Does the Vidos Universal Resolver conform to the W3C standards?**
Yes, Vidos Universal Resolver follows the standards layed out in the [W3C DID Core](https://www.w3.org/TR/did-core/) and [DID Resolution](https://w3c-ccg.github.io/did-resolution/) specifications, producing conforming DID resolution responses.

**Q: How does the Vidos Universal Resolver integrate with existing credential issuer and management system?**
Following W3C standards, the Vidos Universal Resolver is compatible with most credential issuers, verifiers, and distributed identity services, ensuring seamless integration with existing systems.

### Pricing

**Q: How is the Vidos Universal Resolver licensed?**
The Vidos Universal Resolver is licensed under a Software as a Service (SaaS) model.

**Q: What plans are available?**
There are three plans (see [pricing](https://vidos.id/pricing) for further information):

-   **Developer Plan**: For developers who need DID resolution in their application. Get started easily and quickly.
-   **Professional Plan**: For businesses who need a scalable, reliable resolver in production, with additional features. Quick and convenient to deploy, easy to manage and keep up to date, resulting in access to a reliable resolver customized for each application.
-   **Enterprise Plan**: Customizable solutions for large clients with additional compliance and availability needs with dedicated support.
`;export{I as content,D as default,u as frontmatter,f as lastUpdatedTime,g as title,m as toc};
