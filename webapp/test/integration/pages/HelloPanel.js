sap.ui.define(
	["sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"],
	function(Opa5, Press){
		
		var sViewName = "sap.ui5sdk.walkthrough.view.HelloPanel";
		Opa5.createPageObjects({
			onTheAppPage : {
				actions:{
					iPressTheSayHelloButton:function(){
						return this.waitFor({
							id:"idHelloPanelBtn",
							viewName:sViewName,
							actions: new Press(),
							errorMessage: "Did not find Say hello Button on HelloPanel"
						});                                                 
					}
				},
				assertions:{
					iShouldSeeTheHelloDialog:function(){
						return this.waitFor({
							controlType:"sap.m.Dialog",
							success:function(){
								Opa5.assert.ok(true, "The Dialog is open");
							},
							errorMessage:"Did not find the Dialog control"
						});
					}
				}
			}
		});
	}
);