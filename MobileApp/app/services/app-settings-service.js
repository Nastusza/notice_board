"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings = require("tns-core-modules/application-settings");
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Object.defineProperty(Settings, "Value1", {
        get: function () {
            return settings.getString('VALUE1', '');
        },
        set: function (val) {
            settings.setString("VALUE1", val);
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());
exports.default = Settings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNldHRpbmdzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtc2V0dGluZ3Mtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUFrRTtBQUVsRTtJQUFBO0lBT0EsQ0FBQztJQU5HLHNCQUFXLGtCQUFNO2FBQWpCO1lBQ0ksT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO2FBQ0QsVUFBa0IsR0FBVztZQUN6QixRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FIQTtJQUlMLGVBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyB7XG4gICAgc3RhdGljIGdldCBWYWx1ZTEoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLmdldFN0cmluZygnVkFMVUUxJywgJycpO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IFZhbHVlMSh2YWw6IHN0cmluZykge1xuICAgICAgICBzZXR0aW5ncy5zZXRTdHJpbmcoXCJWQUxVRTFcIiwgdmFsKTtcbiAgICB9XG59XG4iXX0=