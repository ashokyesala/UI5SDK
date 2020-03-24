sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui5sdk.walkthrough.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui5sdk.walkthrough.view.DetailView
		 */
		onInit: function () {
			this.oComponent = this.getOwnerComponent();
			this.oRouter = this.oComponent.getRouter();
			this.oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
			//set View Model
			var oViewModel = new JSONModel({
				currency:"EUR"
			});
			this.getView().setModel(oViewModel,"view");
		},
		_onObjectMatched:function(oEvent){
			this.getView().bindElement({
				path: decodeURIComponent(oEvent.getParameter("arguments").id),
				model: "invoice"
			});
		},
		onNavPress:function(){
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if(sPreviousHash){
				window.history.go(-1);
			}else{
				this.oRouter.navTo("overview", {}, true);
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui5sdk.walkthrough.view.DetailView
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui5sdk.walkthrough.view.DetailView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui5sdk.walkthrough.view.DetailView
		 */
		//	onExit: function() {
		//
		//	}

	});

});