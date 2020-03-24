sap.ui.define(
	["sap/ui/base/ManagedObject",
		"sap/ui/core/Fragment",
		"sap/ui/core/syncStyleClass"
	],
	function (ManagedObject, Fragment, syncStyleClass) {
		return ManagedObject.extend("sap.ui5sdk.walkthrough.fragments.HelloDialog", {
			constructor: function (oView) {
				this._oView = oView;
			},
			exit: function () {
				delete this._oView;
			},
			open: function () {
				var oView = this._oView;
				if (!oView.byId("helloDialog")) {
					var oFragmentController = {
						onOk: function () {
							oView.byId("helloDialog").close();
						}
					};
					Fragment.load({
						id: oView.getId(),
						name: "sap.ui5sdk.walkthrough.fragments.HelloDialog",
						controller: oFragmentController
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						syncStyleClass(oView.getController().getOwnerComponent().getContentDensityclass(), oView, oDialog);
						oDialog.open();
					});
				} else {
					oView.byId("helloDialog").open();
				}
			}
		});
	}
);