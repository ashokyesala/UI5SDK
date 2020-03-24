sap.ui.define(
	["sap/ui5sdk/walkthrough/formatter/formatter",
	"sap/ui/model/resource/ResourceModel"],
	function(formatter, ResourceModel){
		QUnit.module("Formatting functions", {
			beforeEach:function(){
				this._oResourceModel = new ResourceModel({
					bundleUrl:sap.ui.require.toUrl("sap/ui5sdk/walkthrough") + "/i18n/i18n.properties"
				});
			},
			afterEach:function(){
				this._oResourceModel.destroy();
			}
		});
		QUnit.test("should return the translated text", function(assert){
			//Arrage
			var oModel = this.stub();
			oModel.withArgs("i18n").returns(this._oResourceModel);
			var oViewStub = {
				getModel: oModel
			};
			var oControllerStub = {
				getView: this.stub().returns(oViewStub)
			};
			
			//bind functions under test
			var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);
			//Assert
			assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text of status A is correct");
			assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text of status B is correct");
			assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text of status C is correct");
			assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text of status Foo is correct");
		});
	}
);