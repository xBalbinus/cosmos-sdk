(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{769:function(e,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"capability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capability"}},[e._v("#")]),e._v(" "),a("code",[e._v("capability")])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[a("code",[e._v("x/capability")]),e._v(" is an implementation of a Cosmos SDK module, per "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-003-dynamic-capability-store.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 003"),a("OutboundLink")],1),e._v(",\nthat allows for provisioning, tracking, and authenticating multi-owner capabilities\nat runtime.")]),e._v(" "),a("p",[e._v("The keeper maintains two states: persistent and ephemeral in-memory. The persistent\nstore maintains a globally unique auto-incrementing index and a mapping from\ncapability index to a set of capability owners that are defined as a module and\ncapability name tuple. The in-memory ephemeral state keeps track of the actual\ncapabilities, represented as addresses in local memory, with both forward and reverse indexes.\nThe forward index maps module name and capability tuples to the capability name. The\nreverse index maps between the module and capability name and the capability itself.")]),e._v(" "),a("p",[e._v('The keeper allows the creation of "scoped" sub-keepers which are tied to a particular\nmodule by name. Scoped keepers must be created at application initialization and\npassed to modules, which can then use them to claim capabilities they receive and\nretrieve capabilities which they own by name, in addition to creating new capabilities\n& authenticating capabilities passed by other modules. A scoped keeper cannot escape its scope,\nso a module cannot interfere with or inspect capabilities owned by other modules.')]),e._v(" "),a("p",[e._v("The keeper provides no other core functionality that can be found in other modules\nlike queriers, REST and CLI handlers, and genesis state.")]),e._v(" "),a("h2",{attrs:{id:"initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[e._v("#")]),e._v(" Initialization")]),e._v(" "),a("p",[e._v("During application initialization, the keeper must be instantiated with a persistent\nstore key and an in-memory store key.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHAgc3RydWN0IHsKICAvLyAuLi4KCiAgY2FwYWJpbGl0eUtlZXBlciAqY2FwYWJpbGl0eS5LZWVwZXIKfQoKZnVuYyBOZXdBcHAoLi4uKSAqQXBwIHsKICAvLyAuLi4KCiAgYXBwLmNhcGFiaWxpdHlLZWVwZXIgPSBjYXBhYmlsaXR5Lk5ld0tlZXBlcihjb2RlYywgcGVyc2lzdGVudFN0b3JlS2V5LCBtZW1TdG9yZUtleSkKfQo="}}),e._v(" "),a("p",[e._v("After the keeper is created, it can be used to create scoped sub-keepers which\nare passed to other modules that can create, authenticate, and claim capabilities.\nAfter all the necessary scoped keepers are created and the state is loaded, the\nmain capability keeper must be sealed to prevent further scoped keepers from\nbeing created.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdBcHAoLi4uKSAqQXBwIHsKICAvLyAuLi4KCiAgLy8gQ3JlYXRpbmcgYSBzY29wZWQga2VlcGVyCiAgc2NvcGVkSUJDS2VlcGVyIDo9IGFwcC5DYXBhYmlsaXR5S2VlcGVyLlNjb3BlVG9Nb2R1bGUoaWJjaG9zdC5Nb2R1bGVOYW1lKQoKICAvLyBTZWFsIHRoZSBjYXBhYmlsaXR5IGtlZXBlciB0byBwcmV2ZW50IGFueSBmdXJ0aGVyIG1vZHVsZXMgZnJvbSBjcmVhdGluZyBzY29wZWQKICAvLyBzdWIta2VlcGVycy4KICBhcHAuY2FwYWJpbGl0eUtlZXBlci5TZWFsKCkKCiAgcmV0dXJuIGFwcAp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ol",[a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/capability/01_concepts.html"}},[e._v("Concepts")])],1)]),e._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/modules/capability/02_state.html"}},[e._v("State")])],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);