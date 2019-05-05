"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var image_1 = require("tns-core-modules/ui/image");
var image_source_1 = require("tns-core-modules/image-source");
var MarkerCustom = /** @class */ (function (_super) {
    __extends(MarkerCustom, _super);
    function MarkerCustom() {
        var _this = _super.call(this) || this;
        var markerImage = new image_1.Image();
        markerImage.imageSource = image_source_1.fromResource('marker');
        _this.icon = markerImage;
        return _this;
    }
    return MarkerCustom;
}(nativescript_google_maps_sdk_1.Marker));
exports.MarkerCustom = MarkerCustom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLWN1c3RvbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtlci1jdXN0b20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2RUFBc0Q7QUFDdEQsbURBQWtEO0FBQ2xELDhEQUE2RDtBQUU3RDtJQUFrQyxnQ0FBTTtJQUN0QztRQUFBLFlBQ0UsaUJBQU8sU0FNUjtRQUpDLElBQUksV0FBVyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDOUIsV0FBVyxDQUFDLFdBQVcsR0FBRywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWpELEtBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDOztJQUMxQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBa0MscUNBQU0sR0FTdkM7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmtlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlJztcbmltcG9ydCB7IGZyb21SZXNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlJztcblxuZXhwb3J0IGNsYXNzIE1hcmtlckN1c3RvbSBleHRlbmRzIE1hcmtlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBsZXQgbWFya2VySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXJrZXJJbWFnZS5pbWFnZVNvdXJjZSA9IGZyb21SZXNvdXJjZSgnbWFya2VyJyk7XG5cbiAgICB0aGlzLmljb24gPSBtYXJrZXJJbWFnZTtcbiAgfVxufVxuIl19