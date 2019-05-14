"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var image_1 = require("tns-core-modules/ui/image");
var imageSource = require("image-source");
var MarkerCustom = /** @class */ (function (_super) {
    __extends(MarkerCustom, _super);
    function MarkerCustom() {
        var _this = _super.call(this) || this;
        var markerImage = new image_1.Image();
        markerImage.imageSource = imageSource.fromResource('marker');
        _this.icon = markerImage;
        return _this;
    }
    return MarkerCustom;
}(nativescript_google_maps_sdk_1.Marker));
exports.MarkerCustom = MarkerCustom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW1hcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbS1tYXJrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2RUFBc0Q7QUFDdEQsbURBQWtEO0FBRWxELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBRSxjQUFjLENBQUUsQ0FBQztBQUU1QztJQUFrQyxnQ0FBTTtJQUN0QztRQUFBLFlBQ0UsaUJBQU8sU0FNUjtRQUpDLElBQUksV0FBVyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDOUIsV0FBVyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTdELEtBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDOztJQUMxQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBa0MscUNBQU0sR0FTdkM7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmtlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlJztcblxudmFyIGltYWdlU291cmNlID0gcmVxdWlyZSggXCJpbWFnZS1zb3VyY2VcIiApO1xuXG5leHBvcnQgY2xhc3MgTWFya2VyQ3VzdG9tIGV4dGVuZHMgTWFya2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGxldCBtYXJrZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1hcmtlckltYWdlLmltYWdlU291cmNlID0gaW1hZ2VTb3VyY2UuZnJvbVJlc291cmNlKCdtYXJrZXInKTtcblxuICAgIHRoaXMuaWNvbiA9IG1hcmtlckltYWdlO1xuICB9XG59XG4iXX0=