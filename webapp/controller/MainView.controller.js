sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("exercise1surveyform.controller.MainView", {
        onInit() {
        },
        onPress: function(){
            //initiate this controller
            var surveyForm = this.getView();

            //clear the fields 
            //formvariable[to call the form].byId[to get the field ID]("[fieldID]"").setValue[to set the value]("[value]");
            surveyForm.byId("NameInput").setValue("");
            surveyForm.byId("StreetNoInput").setValue("");
            surveyForm.byId("StreetInput").setValue("");
            surveyForm.byId("ZipCodeInput").setValue("");
            surveyForm.byId("CityInput").setValue("");

            //formvariable[to call the form].byId[to get the field ID]("[fieldID]"").setSelectedKey[to set the dropdownvalue]("[value]");
            surveyForm.byId("CountryBox").setSelectedKey("");
        }
    });
});