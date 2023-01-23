(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{240:function(e,t,a){e.exports=a.p+"assets/img/viewNetwork.8ee1450b.png"},241:function(e,t,a){e.exports=a.p+"assets/img/sideNavBar.8921c986.png"},245:function(e,t,a){e.exports=a.p+"assets/img/AllNetworks.a56141b9.png"},255:function(e,t,a){e.exports=a.p+"assets/img/fabricViewNetwork.da12c4ac.png"},361:function(e,t,a){e.exports=a.p+"assets/img/fabricNetworkConfiguration.cfd8f790.png"},362:function(e,t,a){e.exports=a.p+"assets/img/fabricCreateNetwork-1.bb2bc87d.png"},363:function(e,t,a){e.exports=a.p+"assets/img/fabricCreateNetwork-2.a18bcea8.png"},364:function(e,t,a){e.exports=a.p+"assets/img/fabricCreateNetwork-3.99f4e2bc.png"},365:function(e,t,a){e.exports=a.p+"assets/img/fabricCreateNetwork-4.77853275.png"},366:function(e,t,a){e.exports=a.p+"assets/img/fabricPipelines.b15e62c6.png"},367:function(e,t,a){e.exports=a.p+"assets/img/fabricActions.e9a927c4.png"},368:function(e,t,a){e.exports=a.p+"assets/img/fabricAddPeer.09128e33.png"},369:function(e,t,a){e.exports=a.p+"assets/img/fabricAddOrg.7de89b36.png"},370:function(e,t,a){e.exports=a.p+"assets/img/fabricChaincodePackageHelp.3d71da66.png"},371:function(e,t,a){e.exports=a.p+"assets/img/fabricChaincodeInstallHelp.0b3c8ea5.png"},372:function(e,t,a){e.exports=a.p+"assets/img/fabricChaincodeApproveHelp.28cb3b71.png"},373:function(e,t,a){e.exports=a.p+"assets/img/fabricChaincodeCommitHelp.cb993a4f.png"},470:function(e,t,a){"use strict";a.r(t);var o=a(10),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hyperledger-fabric-dedicated-node-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperledger-fabric-dedicated-node-setup"}},[e._v("#")]),e._v(" Hyperledger Fabric Dedicated Node Setup")]),e._v(" "),t("p",[e._v("Hyperledger Fabric has one of the most exhaustive sets of available configuration parameters.\n"),t("br"),e._v("\nThis page would help you a lot to achieve a highly customized fabric network.")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#create-a-network"}},[e._v("Create network")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#add-peer"}},[e._v("Add peer")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#add-organization"}},[e._v("Add organization")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#zeeve-cli"}},[e._v("Zeeve CLI")])])]),e._v(" "),t("h3",{attrs:{id:"create-a-network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-network"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Create a network")])]),e._v(" "),t("p",[e._v("Fabric network creation is spread across 4 sections. Please read further to know about each of them. "),t("br"),t("br"),e._v("\nOn the "),t("strong",[e._v("Network Configuration")]),e._v(" page you will have different cards with different network configurations for Fabric, which looks similar to the image provided below.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(361),alt:"img"}})]),e._v(" "),t("hr"),e._v(" "),t("p",[t("em",[t("strong",[e._v("NOTE:")]),e._v(" These cards can be different for your case. Card configurations totally depend on your purchased subscription.")])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Choose the configuration you want. Click on the card and follow the steps accordingly.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("In the first step choose the "),t("strong",[e._v("Fabric version")]),e._v(" and "),t("strong",[e._v("Consensus")]),e._v(" type. After that click on "),t("strong",[e._v("Next Step")]),e._v(" button."),t("br"),t("br"),e._v(" "),t("img",{attrs:{src:a(362),alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("A fabric network is made up of a group of organizations wherein an organization is a mere stakeholder(participant) of the network, this group is called a consortium. You can add an organization by pressing the "),t("strong",[e._v("Add organization")]),e._v(" button and after that add a name for this organization."),t("br"),t("br"),e._v(" "),t("img",{attrs:{src:a(363),alt:"img"}})]),e._v(" "),t("p",[e._v("Each organization participate in the network via a few fabric specific pillars namely "),t("RouterLink",{attrs:{to:"/Glossary.html#orderer"}},[e._v("orderer")]),e._v(", "),t("RouterLink",{attrs:{to:"/Glossary.html#peer"}},[e._v("peer")]),e._v(" and "),t("RouterLink",{attrs:{to:"/Glossary.html#certificate-authority"}},[e._v("certificate authority")]),e._v("."),t("br"),t("br")],1),e._v(" "),t("blockquote",[t("ul",[t("li",[t("strong",[e._v("CA")]),e._v(": CA(Certificate Authority) can be configured just by providing the admin user name and password.")]),e._v(" "),t("li",[t("strong",[e._v("Orderer")]),e._v(": Zeeve supports all the three types of ordering service, which are provided by HL Fabric namely "),t("strong",[e._v("Solo")]),e._v(" (Single Orderer Network), "),t("strong",[e._v("Kafka")]),e._v(" and "),t("strong",[e._v("Raft")]),e._v(". Making it one of the best tools for deploying fabric-based production networks.")])])]),e._v(" "),t("p",[t("br"),t("br"),e._v("So based upon the requirement, select the type of ordering service and just add the number of orderers using the Add Orderer button under the orderer tab of the organization section.")])]),e._v(" "),t("li",[t("p",[e._v("This is the step to configure the channel details."),t("br"),t("br"),e._v(" "),t("img",{attrs:{src:a(364),alt:"img"}})]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("strong",[e._v("Batch Timeout")]),e._v(" is the amount of time to wait after receiving the first transaction, in order to receive more transactions before cutting a block. In case we decrease this value then we get lower latency but decreasing too much will result in a decrease in throughput, as the block will not fill to its maximum capacity.")]),e._v(" "),t("li",[e._v("As indicated in the above screenshot "),t("code",[e._v('{ "timeout": "2s" }')])]),e._v(" "),t("li",[t("strong",[e._v("Maximum Message Count")]),e._v(" indicates the maximum number of transactions in a block.\nAlso, if we look into")]),e._v(" "),t("li",[t("strong",[e._v("Absolute Maximum Bytes")]),e._v(": It indicates the maximum size of a block that can be built in the channel.")]),e._v(" "),t("li",[e._v("In respect of "),t("strong",[e._v("Absolute Maximum Bytes")]),e._v(", there is another parameter viz.,")]),e._v(" "),t("li",[t("strong",[e._v("Preferred maximum Bytes")]),e._v(" which is nothing but the minimum size of a block.")])])])]),e._v(" "),t("li",[t("p",[e._v("This is the last step in creating a network. select the region for the network by clicking on "),t("strong",[e._v("Select Region")]),e._v(", select the "),t("RouterLink",{attrs:{to:"/cloud_authorization.html"}},[e._v("AWS")]),e._v(" account you want to use by clicking on "),t("strong",[e._v("Select Cloud Account")]),e._v(", also choose the instance type as your requirement by clicking on "),t("strong",[e._v("Select Instance Type")]),e._v(", and then click on the "),t("strong",[e._v("Create")]),e._v(" button. "),t("br"),t("br")],1),e._v(" "),t("p",[t("img",{attrs:{src:a(365),alt:"img"}})])])]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("strong",[e._v("Region")]),e._v(": It indicates the region of cloud service. These regions are the geographic locations where your network instances are going to be hosted. In the case of AWS, each of its regions has multiple, isolated locations known as Availability Zones. Amazon RDS provides you the ability to place resources, such as instances, and data in multiple locations. Resources aren't replicated across AWS Regions unless you do so specifically. "),t("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html",target:"_blank",rel:"nofollow noopener"}},[e._v("Ref."),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("Cloud Account")]),e._v(": It represents the AWS cloud account that is going to be used for network creation.")]),e._v(" "),t("li",[t("strong",[e._v("Type of Instance")]),e._v(": It defines the combination of CPU cores and memory. Choose the configuration which could handle loads of your network. This parameter is useful for scaling up the network. The type of Instances may vary from cloud to cloud.")])])]),e._v(" "),t("h3",{attrs:{id:"view-network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-network"}},[e._v("#")]),e._v(" "),t("strong",[e._v("View Network")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Click on "),t("strong",[e._v("Networks")]),e._v(" on the left side navigation bar.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(241),alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("You will be landed on a page similar to the below image. You can view all of your networks listed on this page.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(245),alt:"img"}})])])]),e._v(" "),t("hr"),e._v(" "),t("p",[t("em",[t("strong",[e._v("NOTE")])]),e._v(" This page can be different in your case.")]),e._v(" "),t("hr"),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[e._v("Select the Fabric network you want. After clicking on the network card you can view the nodes attached to the selected network. Network Nodes are listed with details - node’s unique ID and cloud provider, an organization it is part of, node’s role(peer, ca, orderer), and node’s deployment region.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(255),alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("Pipelines are listed with details - pipeline unique ID, the status of the pipeline(completed, in progress, failed), Total Jobs that it holds, and Action (to open up jobs inside it).")]),e._v(" "),t("p",[t("img",{attrs:{src:a(366),alt:"img"}})])])]),e._v(" "),t("h3",{attrs:{id:"add-peer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-peer"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Add peer")])]),e._v(" "),t("p",[e._v("A peer can be added to the organization by only following the two steps mentioned below. You just need to choose the type of peer service for each peer you want to go with, it can be either level Db or CouchDB based, and specify whether you want to have a persistent volume for the same.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Select the network to which you want to add a node, and click on the network card "),t("RouterLink",{attrs:{to:"/View_your_network_and_nodes.html"}},[e._v("Ref.")]),e._v(". You will get to see similar to the below image."),t("br"),t("br"),e._v(" "),t("img",{attrs:{src:a(255),alt:"img"}})],1)]),e._v(" "),t("li",[t("p",[e._v("Click on "),t("strong",[e._v("Actions")]),e._v(" button and select "),t("strong",[e._v("Add Peer")]),e._v("."),t("br"),t("br"),e._v(" "),t("img",{attrs:{src:a(367),alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("You will get to see a web page similar to the image provided below. Fill the details and click "),t("strong",[e._v("create")]),e._v(" button."),t("br"),t("br"),e._v(" "),t("img",{attrs:{src:a(368),alt:"img"}})])])]),e._v(" "),t("h3",{attrs:{id:"add-organization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-organization"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Add organization")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Select the network to which you want to add a node, and click on the network card "),t("RouterLink",{attrs:{to:"/View_your_network_and_nodes.html"}},[e._v("Ref.")]),e._v(". You will get to see similar to the below image."),t("br"),t("br"),e._v(" "),t("img",{attrs:{src:a(240),alt:"img"}})],1)]),e._v(" "),t("li",[t("p",[e._v("Click on "),t("strong",[e._v("Actions")]),e._v(" button and select "),t("strong",[e._v("Add Peer")]),e._v("."),t("br"),t("br"),e._v(" "),t("img",{attrs:{src:a(255),alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("You will get to see a web page similar to the image provided below. Fill the details and click "),t("strong",[e._v("create")]),e._v(" button."),t("br"),t("br"),e._v(" "),t("img",{attrs:{src:a(369),alt:"img"}})])])]),e._v(" "),t("h2",{attrs:{id:"zeeve-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zeeve-cli"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Zeeve CLI")])]),e._v(" "),t("p",[e._v("This section talks about how to use the Zeeve CLI and how to perform fabric chain code operations.")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#create-cli-access"}},[e._v("Create CLI access")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#chaincode-pipelines"}},[e._v("Chaincode pipelines")])])]),e._v(" "),t("h3",{attrs:{id:"create-cli-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-cli-access"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Create CLI Access")])]),e._v(" "),t("ol",[t("li",[e._v("Navigate to settings and then click on “API Credentials” to see a list of CLI/API credentials.")]),e._v(" "),t("li",[e._v("Click “Create key”.")]),e._v(" "),t("li",[e._v("Provide a name, and select one or more networks to associate with the key.")]),e._v(" "),t("li",[e._v("Add appropriate permissions for the operations that the keys are being created.")]),e._v(" "),t("li",[e._v("Click “Create key” and then copy/save generated keys.")])]),e._v(" "),t("h3",{attrs:{id:"chaincode-pipelines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chaincode-pipelines"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Chaincode Pipelines")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Login with Zeeve CLI using the earlier created keys and add these URLs as well - "),t("br"),t("br")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" zeeve login -i < access-key > -s < secret-key > -ae https://app.zeeve.io/auth/cli/login -fe https://app.zeeve.io/fabric-backend/chaincode/\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Zeeve CLI supports fabric chaincode operations - package, install, deploy, approve and commit.")])]),e._v(" "),t("li",[t("p",[e._v("Package: builds chaincode image, creates ECR and pushes into ECR, and creates chaincode connection package to be installed onto peers. Zeeve chaincode pipelines can deploy chaincode as a service (For more details). Following are the inputs required to run package operation")]),e._v(" "),t("ul",[t("li",[e._v("Chaincode zip file is a compressed file of chaincode with the name chaincode.tar.gz")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" zeeve fabric chaincode package -f /path/to/chaincode.tar.gz -n 44b28e1f-7296-42a4-8904-e04341edfb27 -c marbles2 -v 1.0 -o org1 <br></br>\n")])])]),t("p",[t("img",{attrs:{src:a(370),alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("Install: runs chaincode install operation on given peer URLs.")]),e._v(" "),t("ul",[t("li",[e._v("The install operation can be run on a set of peers in a given org with the peer-URLs option.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" zeeve fabric chaincode install -n 44b28e1f-7296-42a4-8904-e04341edfb27 -c marbles2 -v 1.0 -o org1 -p peer1.org1.example.fabric.zeeve.net, peer2.org1.example.fabric.zeeve.net\n")])])]),t("p",[t("img",{attrs:{src:a(371),alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("Deploy: starts chaincode pod/service in Kubernetes cluster.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- zeeve fabric chaincode deploy -n 44b28e1f-7296-42a4-8904-e04341edfb27 -c marbles3 -v 1.0 -o org1 -p peer1.org1.example.fabric.zeeve.net ,peer2.org1.example.fabric.zeeve.net\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Approve: runs ‘peer chaincode approve’ on a set of given peers in an org in the channel provided.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" zeeve fabric chaincode approve -n 44b28e1f-7296-42a4-8904-e04341edfb27 -cc marbles3 -v 1.0 -o org1 -p peer1.org1.example.fabric.zeeve.net, peer2.org1.example.fabric.zeeve.net -ch mychannel -s 1 \n")])])]),t("p",[t("img",{attrs:{src:a(372),alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("Commit: runs ‘peer chaincode commit’ and also inits the chaincode with Init method on the given set of peers and organizations in the provided channel.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" zeeve fabric chaincode commit -n 44b28e1f-7296-42a4-8904-e04341edfb27 -cc marbles3 -v 1.0 -o org1,org2 -p peer1.org1.example.fabric.zeeve.net,peer2.org1.example.fabric.zeeve.net -ch mychannel -s 1 \n")])])]),t("p",[t("img",{attrs:{src:a(373),alt:"img"}})])])])])}),[],!1,null,null,null);t.default=r.exports}}]);