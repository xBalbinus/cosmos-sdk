(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{589:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"interacting-with-the-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-the-node"}},[e._v("#")]),e._v(" Interacting with the Node")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("There are multiple ways to interact with a node: using the CLI, using gRPC or using the REST endpoints.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC, REST and Tendermint Endpoints")])],1),e._v(" "),a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/run-node/run-node.html"}},[e._v("Running a Node")])],1)]),e._v(" "),a("h2",{attrs:{id:"using-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli"}},[e._v("#")]),e._v(" Using the CLI")]),e._v(" "),a("p",[e._v("Now that your chain is running, it is time to try sending tokens from the first account you created to a second account. In a new terminal window, start by running the following query command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSBiYW5rIGJhbGFuY2VzICRNWV9WQUxJREFUT1JfQUREUkVTUyAtLWNoYWluLWlkIG15LXRlc3QtY2hhaW4K"}}),e._v(" "),a("p",[e._v("You should see the current balance of the account you created, equal to the original balance of "),a("code",[e._v("stake")]),e._v(" you granted it minus the amount you delegated via the "),a("code",[e._v("gentx")]),e._v(". Now, create a second account:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBrZXlzIGFkZCByZWNpcGllbnQgLS1rZXlyaW5nLWJhY2tlbmQgdGVzdAoKIyBQdXQgdGhlIGdlbmVyYXRlZCBhZGRyZXNzIGluIGEgdmFyaWFibGUgZm9yIGxhdGVyIHVzZS4KUkVDSVBJRU5UPSQoc2ltZCBrZXlzIHNob3cgcmVjaXBpZW50IC1hIC0ta2V5cmluZy1iYWNrZW5kIHRlc3QpCg=="}}),e._v(" "),a("p",[e._v("The command above creates a local key-pair that is not yet registered on the chain. An account is created the first time it receives tokens from another account. Now, run the following command to send tokens to the "),a("code",[e._v("recipient")]),e._v(" account:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBiYW5rIHNlbmQgJE1ZX1ZBTElEQVRPUl9BRERSRVNTICRSRUNJUElFTlQgMTAwMDAwMHN0YWtlIC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbiAtLWtleXJpbmctYmFja2VuZCB0ZXN0CgojIENoZWNrIHRoYXQgdGhlIHJlY2lwaWVudCBhY2NvdW50IGRpZCByZWNlaXZlIHRoZSB0b2tlbnMuCnNpbWQgcXVlcnkgYmFuayBiYWxhbmNlcyAkUkVDSVBJRU5UIC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbgo="}}),e._v(" "),a("p",[e._v("Finally, delegate some of the stake tokens sent to the "),a("code",[e._v("recipient")]),e._v(" account to the validator:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBzdGFraW5nIGRlbGVnYXRlICQoc2ltZCBrZXlzIHNob3cgbXlfdmFsaWRhdG9yIC0tYmVjaCB2YWwgLWEgLS1rZXlyaW5nLWJhY2tlbmQgdGVzdCkgNTAwc3Rha2UgLS1mcm9tIHJlY2lwaWVudCAtLWNoYWluLWlkIG15LXRlc3QtY2hhaW4gLS1rZXlyaW5nLWJhY2tlbmQgdGVzdAoKIyBRdWVyeSB0aGUgdG90YWwgZGVsZWdhdGlvbnMgdG8gYHZhbGlkYXRvcmAuCnNpbWQgcXVlcnkgc3Rha2luZyBkZWxlZ2F0aW9ucy10byAkKHNpbWQga2V5cyBzaG93IG15X3ZhbGlkYXRvciAtLWJlY2ggdmFsIC1hIC0ta2V5cmluZy1iYWNrZW5kIHRlc3QpIC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbgo="}}),e._v(" "),a("p",[e._v("You should see two delegations, the first one made from the "),a("code",[e._v("gentx")]),e._v(", and the second one you just performed from the "),a("code",[e._v("recipient")]),e._v(" account.")]),e._v(" "),a("h2",{attrs:{id:"using-grpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-grpc"}},[e._v("#")]),e._v(" Using gRPC")]),e._v(" "),a("p",[e._v("The Protobuf ecosystem developed tools for different use cases, including code-generation from "),a("code",[e._v("*.proto")]),e._v(" files into various languages. These tools allow the building of clients easily. Often, the client connection (i.e. the transport) can be plugged and replaced very easily. Let's explore one of the most popular transport: "),a("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC")]),e._v(".")],1),e._v(" "),a("p",[e._v("Since the code generation library largely depends on your own tech stack, we will only present three alternatives:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("grpcurl")]),e._v(" for generic debugging and testing,")]),e._v(" "),a("li",[e._v("programmatically via Go,")]),e._v(" "),a("li",[e._v("CosmJS for JavaScript/TypeScript developers.")])]),e._v(" "),a("h3",{attrs:{id:"grpcurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpcurl"}},[e._v("#")]),e._v(" grpcurl")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/fullstorydev/grpcurl",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpcurl"),a("OutboundLink")],1),e._v(" is like "),a("code",[e._v("curl")]),e._v(" but for gRPC. It is also available as a Go library, but we will use it only as a CLI command for debugging and testing purposes. Follow the instructions in the previous link to install it.")]),e._v(" "),a("p",[e._v("Assuming you have a local node running (either a localnet, or connected a live network), you should be able to run the following command to list the Protobuf services available (you can replace "),a("code",[e._v("localhost:9000")]),e._v(" by the gRPC server endpoint of another node, which is configured under the "),a("code",[e._v("grpc.address")]),e._v(" field inside "),a("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[a("code",[e._v("app.toml")])]),e._v("):")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IGxvY2FsaG9zdDo5MDkwIGxpc3QK"}}),e._v(" "),a("p",[e._v("You should see a list of gRPC services, like "),a("code",[e._v("cosmos.bank.v1beta1.Query")]),e._v(". This is called reflection, which is a Protobuf endpoint returning a description of all available endpoints. Each of these represents a different Protobuf service, and each service exposes multiple RPC methods you can query against.")]),e._v(" "),a("p",[e._v("In order to get a description of the service you can run the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCBcCiAgICBsb2NhbGhvc3Q6OTA5MCBcCiAgICBkZXNjcmliZSBjb3Ntb3MuYmFuay52MWJldGExLlF1ZXJ5ICAgICAgICAgICAgICAgICAgIyBTZXJ2aWNlIHdlIHdhbnQgdG8gaW5zcGVjdAo="}}),e._v(" "),a("p",[e._v("It's also possible to execute an RPC call to query the node for information:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCBcCiAgICAtcGxhaW50ZXh0CiAgICAtZCAneyZxdW90O2FkZHJlc3MmcXVvdDs6JnF1b3Q7JE1ZX1ZBTElEQVRPUiZxdW90O30nIFwKICAgIGxvY2FsaG9zdDo5MDkwIFwKICAgIGNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnkvQWxsQmFsYW5jZXMK"}}),e._v(" "),a("p",[e._v("The list of all available gRPC query endpoints is "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7786",target:"_blank",rel:"noopener noreferrer"}},[e._v("coming soon"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"query-for-historical-state-using-grpcurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-for-historical-state-using-grpcurl"}},[e._v("#")]),e._v(" Query for historical state using grpcurl")]),e._v(" "),a("p",[e._v("You may also query for historical data by passing some "),a("a",{attrs:{href:"https://github.com/grpc/grpc-go/blob/master/Documentation/grpc-metadata.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC metadata"),a("OutboundLink")],1),e._v(" to the query: the "),a("code",[e._v("x-cosmos-block-height")]),e._v(" metadata should contain the block to query. Using grpcurl as above, the command looks like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCBcCiAgICAtcGxhaW50ZXh0IFwKICAgIC1IICZxdW90O3gtY29zbW9zLWJsb2NrLWhlaWdodDogMjc5MjU2JnF1b3Q7IFwKICAgIC1kICd7JnF1b3Q7YWRkcmVzcyZxdW90OzomcXVvdDskTVlfVkFMSURBVE9SJnF1b3Q7fScgXAogICAgbG9jYWxob3N0OjkwOTAgXAogICAgY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeS9BbGxCYWxhbmNlcwo="}}),e._v(" "),a("p",[e._v("Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response.")]),e._v(" "),a("h3",{attrs:{id:"programmatically-via-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#programmatically-via-go"}},[e._v("#")]),e._v(" Programmatically via Go")]),e._v(" "),a("p",[e._v("The following snippet shows how to query the state using gRPC inside a Go program. The idea is to create a gRPC connection, and use the Protobuf-generated client code to query the gRPC server.")]),e._v(" "),a("h4",{attrs:{id:"install-cosmos-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-cosmos-sdk"}},[e._v("#")]),e._v(" Install Cosmos SDK")]),e._v(" "),a("p",[e._v("Add below line to "),a("code",[e._v("go.mod")]),e._v(" to replace protobuf, read more "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/8469",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8469"),a("OutboundLink")],1)]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cmVwbGFjZSBnaXRodWIuY29tL2dvZ28vcHJvdG9idWYgPSZndDsgZ2l0aHViLmNvbS9yZWdlbi1uZXR3b3JrL3Byb3RvYnVmIHYxLjMuMy1hbHBoYS5yZWdlbi4xCg=="}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gZ2V0IGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGtAbWFpbgo="}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2NvbnRleHQmcXVvdDsKICAgICZxdW90O2ZtdCZxdW90OwoKICAgICZxdW90O2dvb2dsZS5nb2xhbmcub3JnL2dycGMmcXVvdDsKCiAgICAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NvZGVjJnF1b3Q7CiAgICBzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwogICAgYmFua3R5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9iYW5rL3R5cGVzJnF1b3Q7CikKCmZ1bmMgcXVlcnlTdGF0ZSgpIGVycm9yIHsKICAgIG15QWRkcmVzcywgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMigmcXVvdDtjb3Ntb3MxLi4uJnF1b3Q7KQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQoKICAgIC8vIENyZWF0ZSBhIGNvbm5lY3Rpb24gdG8gdGhlIGdSUEMgc2VydmVyLgogICAgZ3JwY0Nvbm4sIGVyciA6PSBncnBjLkRpYWwoCiAgICAgICAgJnF1b3Q7MTI3LjAuMC4xOjkwOTAmcXVvdDssIC8vIHlvdXIgZ1JQQyBzZXJ2ZXIgYWRkcmVzcy4KICAgICAgICBncnBjLldpdGhJbnNlY3VyZSgpLCAvLyBUaGUgQ29zbW9zIFNESyBkb2Vzbid0IHN1cHBvcnQgYW55IHRyYW5zcG9ydCBzZWN1cml0eSBtZWNoYW5pc20uIAogICAgICAgIC8vIFRoaXMgaW5zdGFudGlhdGVzIGEgZ2VuZXJhbCBnUlBDIGNvZGVjIHdoaWNoIGhhbmRsZXMgcHJvdG8gYnl0ZXMuIFdlIHBhc3MgaW4gYSBuaWwgaW50ZXJmYWNlIHJlZ2lzdHJ5CiAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QvcmVzcG9uc2UgdHlwZXMgY29udGFpbiBpbnRlcmZhY2UgaW5zdGVhZCBvZiAnbmlsJyB5b3Ugc2hvdWxkIHBhc3MgdGhlIGFwcGxpY2F0aW9uIHNwZWNpZmljIGNvZGVjLgoJCWdycGMuV2l0aERlZmF1bHRDYWxsT3B0aW9ucyhncnBjLkZvcmNlQ29kZWMoY29kZWMuTmV3UHJvdG9Db2RlYyhuaWwpLkdSUENDb2RlYygpKSksCgkpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CiAgICBkZWZlciBncnBjQ29ubi5DbG9zZSgpCgogICAgLy8gVGhpcyBjcmVhdGVzIGEgZ1JQQyBjbGllbnQgdG8gcXVlcnkgdGhlIHgvYmFuayBzZXJ2aWNlLgogICAgYmFua0NsaWVudCA6PSBiYW5rdHlwZXMuTmV3UXVlcnlDbGllbnQoZ3JwY0Nvbm4pCiAgICBiYW5rUmVzLCBlcnIgOj0gYmFua0NsaWVudC5CYWxhbmNlKAogICAgICAgIGNvbnRleHQuQmFja2dyb3VuZCgpLAogICAgICAgICZhbXA7YmFua3R5cGVzLlF1ZXJ5QmFsYW5jZVJlcXVlc3R7QWRkcmVzczogbXlBZGRyZXNzLlN0cmluZygpLCBEZW5vbTogJnF1b3Q7YXRvbSZxdW90O30sCiAgICApCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgZm10LlByaW50bG4oYmFua1Jlcy5HZXRCYWxhbmNlKCkpIC8vIFByaW50cyB0aGUgYWNjb3VudCBiYWxhbmNlCgogICAgcmV0dXJuIG5pbAp9Cg=="}}),e._v(" "),a("p",[e._v("You can replace the query client (here we are using "),a("code",[e._v("x/bank")]),e._v("'s) with one generated from any other Protobuf service. The list of all available gRPC query endpoints is "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/7786",target:"_blank",rel:"noopener noreferrer"}},[e._v("coming soon"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"query-for-historical-state-using-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-for-historical-state-using-go"}},[e._v("#")]),e._v(" Query for historical state using Go")]),e._v(" "),a("p",[e._v("Querying for historical blocks is done by adding the block height metadata in the gRPC request.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2NvbnRleHQmcXVvdDsKICAgICZxdW90O2ZtdCZxdW90OwoKICAgICZxdW90O2dvb2dsZS5nb2xhbmcub3JnL2dycGMmcXVvdDsKICAgICZxdW90O2dvb2dsZS5nb2xhbmcub3JnL2dycGMvbWV0YWRhdGEmcXVvdDsKCiAgICAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NvZGVjJnF1b3Q7CiAgICBzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwogICAgZ3JwY3R5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvZ3JwYyZxdW90OwogICAgYmFua3R5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9iYW5rL3R5cGVzJnF1b3Q7CikKCmZ1bmMgcXVlcnlTdGF0ZSgpIGVycm9yIHsKICAgIC8vIC0tc25pcC0tCgogICAgdmFyIGhlYWRlciBtZXRhZGF0YS5NRAogICAgYmFua1JlcywgZXJyID0gYmFua0NsaWVudC5CYWxhbmNlKAogICAgICAgIG1ldGFkYXRhLkFwcGVuZFRvT3V0Z29pbmdDb250ZXh0KGNvbnRleHQuQmFja2dyb3VuZCgpLCBncnBjdHlwZXMuR1JQQ0Jsb2NrSGVpZ2h0SGVhZGVyLCAmcXVvdDsxMiZxdW90OyksIC8vIEFkZCBtZXRhZGF0YSB0byByZXF1ZXN0CiAgICAgICAgJmFtcDtiYW5rdHlwZXMuUXVlcnlCYWxhbmNlUmVxdWVzdHtBZGRyZXNzOiBteUFkZHJlc3MuU3RyaW5nKCksIERlbm9tOiAmcXVvdDthdG9tJnF1b3Q7fSwKICAgICAgICBncnBjLkhlYWRlcigmYW1wO2hlYWRlciksIC8vIFJldHJpZXZlIGhlYWRlciBmcm9tIHJlc3BvbnNlCiAgICApCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CiAgICBibG9ja0hlaWdodCA6PSBoZWFkZXIuR2V0KGdycGN0eXBlcy5HUlBDQmxvY2tIZWlnaHRIZWFkZXIpCgogICAgZm10LlByaW50bG4oYmxvY2tIZWlnaHQpIC8vIFByaW50cyB0aGUgYmxvY2sgaGVpZ2h0ICgxMikKCiAgICByZXR1cm4gbmlsCn0K"}}),e._v(" "),a("h3",{attrs:{id:"cosmjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmjs"}},[e._v("#")]),e._v(" CosmJS")]),e._v(" "),a("p",[e._v("CosmJS documentation can be found at "),a("a",{attrs:{href:"https://cosmos.github.io/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cosmos.github.io/cosmjs"),a("OutboundLink")],1),e._v(". As of January 2021, CosmJS documentation is still work in progress.")]),e._v(" "),a("h2",{attrs:{id:"using-the-rest-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-rest-endpoints"}},[e._v("#")]),e._v(" Using the REST Endpoints")]),e._v(" "),a("p",[e._v("As described in the "),a("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC guide")]),e._v(", all gRPC services on the Cosmos SDK are made available for more convenient REST-based queries through gRPC-gateway. The format of the URL path is based on the Protobuf service method's full-qualified name, but may contain small customizations so that final URLs look more idiomatic. For example, the REST endpoint for the "),a("code",[e._v("cosmos.bank.v1beta1.Query/AllBalances")]),e._v(" method is "),a("code",[e._v("GET /cosmos/bank/v1beta1/balances/{address}")]),e._v(". Request arguments are passed as query parameters.")],1),e._v(" "),a("p",[e._v("As a concrete example, the "),a("code",[e._v("curl")]),e._v(" command to make balances request is:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBcCiAgICAtWCBHRVQgXAogICAgLUggJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IFwKICAgIGh0dHA6Ly9sb2NhbGhvc3Q6MTMxNy9jb3Ntb3MvYmFuay92MWJldGExL2JhbGFuY2VzLyRNWV9WQUxJREFUT1IK"}}),e._v(" "),a("p",[e._v("Make sure to replace "),a("code",[e._v("localhost:1317")]),e._v(" with the REST endpoint of your node, configured under the "),a("code",[e._v("api.address")]),e._v(" field.")]),e._v(" "),a("p",[e._v("The list of all available REST endpoints is available as a Swagger specification file, it can be viewed at "),a("code",[e._v("localhost:1317/swagger")]),e._v(". Make sure that the "),a("code",[e._v("api.swagger")]),e._v(" field is set to true in your "),a("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[a("code",[e._v("app.toml")])]),e._v(" file.")],1),e._v(" "),a("h3",{attrs:{id:"query-for-historical-state-using-rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-for-historical-state-using-rest"}},[e._v("#")]),e._v(" Query for historical state using REST")]),e._v(" "),a("p",[e._v("Querying for historical state is done using the HTTP header "),a("code",[e._v("x-cosmos-block-height")]),e._v(". For example, a curl command would look like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBcCiAgICAtWCBHRVQgXAogICAgLUggJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IFwKICAgIC1IICZxdW90O3gtY29zbW9zLWJsb2NrLWhlaWdodDogMjc5MjU2JnF1b3Q7CiAgICBodHRwOi8vbG9jYWxob3N0OjEzMTcvY29zbW9zL2JhbmsvdjFiZXRhMS9iYWxhbmNlcy8kTVlfVkFMSURBVE9SCg=="}}),e._v(" "),a("p",[e._v("Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response.")]),e._v(" "),a("h3",{attrs:{id:"cross-origin-resource-sharing-cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-origin-resource-sharing-cors"}},[e._v("#")]),e._v(" Cross-Origin Resource Sharing (CORS)")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("CORS policies"),a("OutboundLink")],1),e._v(" are not enabled by default to help with security. If you would like to use the rest-server in a public environment we recommend you provide a reverse proxy, this can be done with "),a("a",{attrs:{href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx"),a("OutboundLink")],1),e._v(". For testing and development purposes there is an "),a("code",[e._v("enabled-unsafe-cors")]),e._v(" field inside "),a("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[a("code",[e._v("app.toml")])]),e._v(".")],1),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Sending transactions using gRPC and REST requires some additional steps: generating the transaction, signing it, and finally broadcasting it. Read about "),a("RouterLink",{attrs:{to:"/run-node/txs.html"}},[e._v("generating and signing transactions")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);