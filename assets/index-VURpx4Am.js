import{jsx as i,jsxs as t,Fragment as r}from"react/jsx-runtime";const o=void 0,s=[{id:"benefits",text:"Benefits",depth:2},{id:"enhanced-privacy-and-security",text:"Enhanced privacy and security",depth:3},{id:"interoperability",text:"Interoperability",depth:3},{id:"reduced-reliance-on-centralized-entities",text:"Reduced reliance on centralized entities",depth:3},{id:"user-empowerment",text:"User Empowerment",depth:3},{id:"usage",text:"Usage",depth:2},{id:"developer-friendly",text:"Developer friendly",depth:3},{id:"portable",text:"Portable",depth:3},{id:"secure",text:"Secure",depth:3},{id:"standardization",text:"Standardization",depth:2},{id:"format",text:"Format",depth:3},{id:"prefix",text:"Prefix",depth:3},{id:"method",text:"Method",depth:3},{id:"method-specific-id",text:"Method specific ID",depth:3}],h="Overview";function a(n){const e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",img:"img"},n.components);return t(r,{children:[t(e.h1,{id:"overview",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"}),"Overview"]}),`
`,i(e.p,{children:"Decentralized identifiers (DIDs) are a new kind of digital identifier that lets people and organizations have their own digital identity without relying on central systems. Think of a DID as a unique name for anyone or anything, like a person, company, or object, however Unlike usual IDs that depend on big, centralized systems, DIDs work independently."}),`
`,i(e.p,{children:"This means the owner can prove they control their ID without needing approval from anyone else. Owner's use the cryptographic keys found in the DID document to prove they own the DID. This is a big deal because it means people can have more control over their digital lives, and it makes it easier to trust people and organizations online."}),`
`,t(e.h2,{id:"benefits",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#benefits",children:"#"}),"Benefits"]}),`
`,i(e.p,{children:"Digital identities includes all kinds of identifiers like usernames, email addresses, and IDs that exist in the digital realm."}),`
`,i(e.p,{children:"In the traditional model the control of an identity resides with the identity provider such as a tech company, government, or bank Meaning the identity owner does not have full control over their identity and can not use their identity without the approval of the identity provider."}),`
`,i(e.p,{children:"In the decentralized model, the digital identity is not stored or controlled by any single central organization. Instead, the owner of the identity has full control over it, including which parts they share and with whom."}),`
`,t(e.h3,{id:"enhanced-privacy-and-security",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#enhanced-privacy-and-security",children:"#"}),"Enhanced privacy and security"]}),`
`,i(e.p,{children:"Users have more control over their identity, they owner and can choose what information to share and with whom. This means that they can keep their personal information private and secure. Cryptographic proofs secure the identity, making it secure and tamper-proof."}),`
`,t(e.h3,{id:"interoperability",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#interoperability",children:"#"}),"Interoperability"]}),`
`,i(e.p,{children:"DIDs are designed to be interoperable across different platforms and systems. Standardization ensures that DIDs are usable across independent services, organization and entities without the need for separate identity verifications."}),`
`,t(e.h3,{id:"reduced-reliance-on-centralized-entities",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#reduced-reliance-on-centralized-entities",children:"#"}),"Reduced reliance on centralized entities"]}),`
`,i(e.p,{children:"With DIDs, the dependency on centralized entities for identity management is greatly reduced. This decentralization mitigates the risks associated with data breaches and misuse of personal data by central authorities."}),`
`,t(e.h3,{id:"user-empowerment",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#user-empowerment",children:"#"}),"User Empowerment"]}),`
`,i(e.p,{children:"DIDs put users in the driver's seat of their digital identities. DID's work with Verifiable Credentials that let user's to control how, when, and with whom their identity data is shared."}),`
`,t(e.h2,{id:"usage",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"Usage"]}),`
`,t(e.h3,{id:"developer-friendly",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#developer-friendly",children:"#"}),"Developer friendly"]}),`
`,i(e.p,{children:"An open source standards approach to DID design, makes it easy for developers to build applications and services. It opens up opportunities for integrating with existing applications and building the next generation of the web."}),`
`,t(e.h3,{id:"portable",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#portable",children:"#"}),"Portable"]}),`
`,i(e.p,{children:"DIDs are portable, meaning they are not tied to any particular service provider or identity system. This lets users move their identity across different platforms without losing their history or credibility, much like a phone number that can be ported between carriers."}),`
`,t(e.h3,{id:"secure",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#secure",children:"#"}),"Secure"]}),`
`,i(e.p,{children:"DIDs user cryptography secure the owner, providing a high level of protection against identity theft, fraud, and unauthorized access. Compatible cryptographic algorithms make it easier for any entity to verify each other's identities. This is particularly important in contexts like finance, healthcare, and e-government services, where trust is paramount."}),`
`,t(e.h2,{id:"standardization",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#standardization",children:"#"}),"Standardization"]}),`
`,t(e.p,{children:["DID's are built on ",i(e.a,{href:"https://www.w3.org/TR/did-core/",target:"_blank",rel:"nofollow",children:"open standards"}),", making DIDs work across platforms, systems, and applications. This means that an individual or organization can use their DID in various contexts without being locked into a single provider or ecosystem. It allows for seamless interaction between different services and technologies."]}),`
`,t(e.h3,{id:"format",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#format",children:"#"}),"Format"]}),`
`,t(e.p,{children:["Every DID starts with the prefix ",i(e.code,{children:"did:"}),", followed by a method, and then a unique identifier. A simplified example of the DID's format is ",i(e.code,{children:"did:<method>:<method-specific-id>"}),", an example DID looks like ",i(e.code,{children:"did:example:123456789abcdefghi"}),"."]}),`
`,i(e.p,{children:i(e.img,{src:"/img/did-example-ethr-0x.png",alt:"Example Ethr Distributed Identifier"})}),`
`,t(e.h3,{id:"prefix",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#prefix",children:"#"}),"Prefix"]}),`
`,t(e.p,{children:[i(e.code,{children:"did:"})," is the fixed prefix for all decentralized identifiers, indicating that the URI is a DID and adheres to the DID specification."]}),`
`,t(e.h3,{id:"method",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#method",children:"#"}),"Method"]}),`
`,t(e.p,{children:["The method component immediately follows the ",i(e.code,{children:"did:"})," prefix and specifies the DID method to be used. Examples include ",i(e.code,{children:"btcr"})," for Bitcoin, ",i(e.code,{children:"ethr"})," for Ethereum, and web for web-based DIDs. Each method publishes a specification detailing how the DID is created, resolved, updated, and deactivated."]}),`
`,t(e.h3,{id:"method-specific-id",children:[i(e.a,{className:"header-anchor","aria-hidden":"true",href:"#method-specific-id",children:"#"}),"Method specific ID"]}),`
`,i(e.p,{children:"This part of the DID is and is generated according to the rules of the DID method. It ensures the uniqueness of the DID within the context of its method. The method-specific ID can represent various types of entities, such as individuals, organizations, devices, or even abstract entities, and is used to retrieve the DID document associated with the DID."})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?i(e,Object.assign({},n,{children:i(a,n)})):a(n)}const l="Invalid Date",p=`# Overview

Decentralized identifiers (DIDs) are a new kind of digital identifier that lets people and organizations have their own digital identity without relying on central systems. Think of a DID as a unique name for anyone or anything, like a person, company, or object, however Unlike usual IDs that depend on big, centralized systems, DIDs work independently.

This means the owner can prove they control their ID without needing approval from anyone else. Owner's use the cryptographic keys found in the DID document to prove they own the DID. This is a big deal because it means people can have more control over their digital lives, and it makes it easier to trust people and organizations online.

## Benefits

Digital identities includes all kinds of identifiers like usernames, email addresses, and IDs that exist in the digital realm.

In the traditional model the control of an identity resides with the identity provider such as a tech company, government, or bank Meaning the identity owner does not have full control over their identity and can not use their identity without the approval of the identity provider.

In the decentralized model, the digital identity is not stored or controlled by any single central organization. Instead, the owner of the identity has full control over it, including which parts they share and with whom.

### Enhanced privacy and security

Users have more control over their identity, they owner and can choose what information to share and with whom. This means that they can keep their personal information private and secure. Cryptographic proofs secure the identity, making it secure and tamper-proof.

### Interoperability

DIDs are designed to be interoperable across different platforms and systems. Standardization ensures that DIDs are usable across independent services, organization and entities without the need for separate identity verifications.

### Reduced reliance on centralized entities

With DIDs, the dependency on centralized entities for identity management is greatly reduced. This decentralization mitigates the risks associated with data breaches and misuse of personal data by central authorities.

### User Empowerment

DIDs put users in the driver's seat of their digital identities. DID's work with Verifiable Credentials that let user's to control how, when, and with whom their identity data is shared.

## Usage

### Developer friendly

An open source standards approach to DID design, makes it easy for developers to build applications and services. It opens up opportunities for integrating with existing applications and building the next generation of the web.

### Portable

DIDs are portable, meaning they are not tied to any particular service provider or identity system. This lets users move their identity across different platforms without losing their history or credibility, much like a phone number that can be ported between carriers.

### Secure

DIDs user cryptography secure the owner, providing a high level of protection against identity theft, fraud, and unauthorized access. Compatible cryptographic algorithms make it easier for any entity to verify each other's identities. This is particularly important in contexts like finance, healthcare, and e-government services, where trust is paramount.

## Standardization

DID's are built on [open standards](https://www.w3.org/TR/did-core/), making DIDs work across platforms, systems, and applications. This means that an individual or organization can use their DID in various contexts without being locked into a single provider or ecosystem. It allows for seamless interaction between different services and technologies.

### Format

Every DID starts with the prefix \`did:\`, followed by a method, and then a unique identifier. A simplified example of the DID's format is \`did:<method>:<method-specific-id>\`, an example DID looks like \`did:example:123456789abcdefghi\`.

![Example Ethr Distributed Identifier](/img/did-example-ethr-0x.png)

### Prefix

\`did:\` is the fixed prefix for all decentralized identifiers, indicating that the URI is a DID and adheres to the DID specification.

### Method

The method component immediately follows the \`did:\` prefix and specifies the DID method to be used. Examples include \`btcr\` for Bitcoin, \`ethr\` for Ethereum, and web for web-based DIDs. Each method publishes a specification detailing how the DID is created, resolved, updated, and deactivated.

### Method specific ID

This part of the DID is and is generated according to the rules of the DID method. It ensures the uniqueness of the DID within the context of its method. The method-specific ID can represent various types of entities, such as individuals, organizations, devices, or even abstract entities, and is used to retrieve the DID document associated with the DID.
`;export{p as content,c as default,o as frontmatter,l as lastUpdatedTime,h as title,s as toc};
