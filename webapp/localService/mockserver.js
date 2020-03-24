sap.ui.define(
	["sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"],
	function(MockServer, UriParameters){
		return{
			init:function(){
				
				var oMockServer = new MockServer({
					rootUri:"/V2/Northwind/Northwind.svc/"
					// rootUri:dataSource
				});
				
				var oUriParameters = new UriParameters(window.location.href);
				
				MockServer.config({
					autoRespond:true,
					autoRespondAfter: oUriParameters.get("serverDelay")
				});
				
				var sPath = jQuery.sap.getModulePath("sap.ui5sdk.walkthrough.localService");
				var sMetaPath = sPath + "/metadata.xml";
				oMockServer.simulate(sMetaPath, {
					sMockdataBaseUrl: sPath + "/mockdata"
					// bGenerateMissingMockData: true
				});
				//start the MockServer
				oMockServer.start();
			}
	};
	}
);