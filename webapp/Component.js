sap.ui.define(
	["sap/ui/core/UIComponent",
		"./fragments/HelloDialog",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/ui/Device"
	],
	function (UIComponent, HelloDialog, JSONModel, Filter, FilterOperator, Device) {
		return UIComponent.extend("sap.ui5sdk.walkthrough.Component", {
			metadata: {
				"manifest": "json"
			},
			init: function () {
				UIComponent.prototype.init.apply(this, arguments);
				this._oDialog = new HelloDialog(this.getRootControl());
				this.getRouter().initialize();
				
				//set Device Model
				var oDeviceModel = new JSONModel(Device);
				oDeviceModel.setDefaultBindingMode("OneWay");
				this.setModel(oDeviceModel,"device");
			},
			getContentDensityclass:function(){
				if(!this._sContentDensityClass){
					if(!Device.support.touch){
						this._sContentDensityClass = "sapUiSizeCompact";
					}else{
						this._sContentDensityClass = "sapUiSizeCozy";
					}
				}
				return this._sContentDensityClass;
			},
			openDialog: function () {
				this._oDialog.open();
			},
			exit: function () {
				this._oDialog.destroy();
				delete this._oDialog;
			},
			press:function(oEvent){
				var sPath = encodeURIComponent(oEvent.getSource().getBindingContextPath());
				this._oRouter.navTo("detail", {id:sPath});
			},
			search:function(oEvent, oControl){
				var sQuery = oEvent.getParameter("query");
				var aFilter = [];
				if(sQuery){
					aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
				}
				var oBinding = oControl.getBinding("items");
				oBinding.filter(aFilter);	
			},
			destroy: function () {
				UIComponent.prototype.destroy.apply(this, arguments);

			}
		});
	}
);