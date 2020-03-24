sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../formatter/formatter"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui5sdk.walkthrough.controller.InvoiceList", {
		formatter:formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui5sdk.walkthrough.view.InvoiceLIst
		 */
		onInit: function () {
			var oViewModel = new JSONModel({
				"currency": "EUR"
			});
			this.getView().setModel(oViewModel, "view");
			this._oComponent = this.getOwnerComponent();
			this._oRouter = this._oComponent.getRouter(this);
		},
		onSearch:function(oEvent){
			var oControl = this.byId("idInvoiceList");
			this._oComponent.search(oEvent, oControl);
		},
		onPress:function(oEvent){
			// var sPath = encodeURIComponent(oEvent.getSource().getBindingContextPath());
			// this._oRouter.navTo("detail", {id:sPath});
			this._oComponent.press(oEvent);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui5sdk.walkthrough.view.InvoiceLIst
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui5sdk.walkthrough.view.InvoiceLIst
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui5sdk.walkthrough.view.InvoiceLIst
		 */
		//	onExit: function() {
		//
		//	}

	});

});