sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui5sdk.walkthrough.controller.Overview", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui5sdk.walkthrough.view.Overview
		 */
		onInit: function () {
			this._oComponent = this.getOwnerComponent();
		},
		onPress:function(){
			this._oComponent.openDialog();
		},
		onSwitchChange:function(oEvent){
			var bState = oEvent.getSource().getState();
			if(bState){
				this.getView().byId("invoiceList").setVisible(bState);
				this.getView().byId("invoiceTable").setVisible(!bState);
			}else{
				this.getView().byId("invoiceTable").setVisible(!bState);
				this.getView().byId("invoiceList").setVisible(bState);
			}
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui5sdk.walkthrough.view.Overview
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui5sdk.walkthrough.view.Overview
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui5sdk.walkthrough.view.Overview
		 */
		//	onExit: function() {
		//
		//	}

	});

});