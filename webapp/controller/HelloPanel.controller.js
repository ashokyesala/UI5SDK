sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
	"use strict";

	return Controller.extend("sap.ui5sdk.walkthrough.controller.HelloPanel", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui5sdk.walkthrough.view.helloPanel
		 */
		onInit: function () {
			this._oComponent = this.getOwnerComponent();
		},
		onShowHello:function(){
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sName = this.getView().getModel("local").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sName]);
			MessageToast.show(sMsg);
		},
		onPress: function () {
				// var oModel = this.getView().getModel("local");
				// var sname = oModel.getProperty("/recipient/name");
				// var oBundle = this.getView().getModel("i18n").getResourceBundle();
				// var sMsg = oBundle.getText("helloMsg", [sname]);
				// MessageToast.show(sMsg);
				// var oView = this.getView();
				// if (!this.byId("helloDialog")) {
				// 	Fragment.load({
				// 		id: oView.getId(),
				// 		name: "sap.ui5sdk.walkthrough.fragments.HelloDialog",
				// 		controller: this
				// 	}).then(function (oDialog) {
				// 		oView.addDependent(oDialog);
				// 		oDialog.open();
				// 	});
				// } else {
				// 	this.byId("helloDialog").open();
				// }
				this._oComponent.openDialog();
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf sap.ui5sdk.walkthrough.view.helloPanel
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui5sdk.walkthrough.view.helloPanel
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui5sdk.walkthrough.view.helloPanel
		 */
		//	onExit: function() {
		//
		//	}

	});

});