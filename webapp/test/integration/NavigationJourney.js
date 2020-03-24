sap.ui.define(
	["sap/ui5sdk/walkthrough/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/HelloPanel"],
	function(mockserver){
		QUnit.module("Navigation");
		opaTest("should open the Hello Dialog", function(Given, When, Then){
			mockserver.init();
			Given.iStartMyUIComponent({
				componentConfig:{
					name:"sap.ui5sdk.walkthrough"
				}
			});
			When.onTheAppPage.iPressTheSayHelloButton();    
			
			Then.onTheAppPage.iShouldSeeTheHelloDialog();
			
			Then.iTeardownMyApp();
		});
	}
);
