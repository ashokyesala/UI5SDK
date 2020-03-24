sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../formatter/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui5sdk.walkthrough.controller.InvoiceTable", {
		formatter:formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui5sdk.walkthrough.view.InvoiceTable
		 */
		onInit: function () {
			this._oComponent = this.getOwnerComponent();
		},
		onPress:function(oEvent){
			this._oComponent.press(oEvent);
		},
		onSearch:function(oEvent){
			var oControl = this.byId("invoiceTable");
			this._oComponent.search(oEvent, oControl);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui5sdk.walkthrough.view.InvoiceTable
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui5sdk.walkthrough.view.InvoiceTable
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui5sdk.walkthrough.view.InvoiceTable
		 */
		//	onExit: function() {
		//
		//	}

	});

});