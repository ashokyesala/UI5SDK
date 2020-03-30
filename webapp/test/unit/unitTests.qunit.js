QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function(){
	sap.ui.require(
		["sap/ui5sdk/walkthrough/test/unit/AllTests"],
		function(){
			QUnit.start();
		}
	);
});