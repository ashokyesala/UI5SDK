sap.ui.define(
	["sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"],
	function(MockServer, UriParameters){
		return{
			init:function(){
				//for which url request mockserver implemented
				var oMockServer = new MockServer({
					rootUri:"/V2/Northwind/Northwind.svc/"
					// rootUri:dataSource
				});
				
				var oUriParameters = new UriParameters(window.location.href);
				//configure autoresponse if OData is not responding
				MockServer.config({
					autoRespond:true,
					autoRespondAfter: oUriParameters.get("serverDelay")
				});
				//provide metadata and mockdata path
				var sPath = jQuery.sap.getModulePath("sap.ui5sdk.walkthrough.localService");
				var sMetaPath = sPath + "/metadata.xml";
				oMockServer.simulate(sMetaPath, {
					sMockdataBaseUrl: sPath + "/mockdata"
					//incase mockdata not found, auto generate mockdata
					// bGenerateMissingMockData: true
				});
				//start the MockServer
				oMockServer.start();
			}
	};
	}
);