"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function MapViewModel() {
    var viewModel = observable_1.fromObject({
        fetching: false,
        lat: 54.3158519,
        lng: 18.6240068,
        zoom: 13,
        padding: 20,
        compassEnabled: true
    });
    return viewModel;
}
module.exports = MapViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFFOUQsU0FBUyxZQUFZO0lBQ2pCLElBQU0sU0FBUyxHQUFHLHVCQUFVLENBQUM7UUFDekIsUUFBUSxFQUFFLEtBQUs7UUFFZixHQUFHLEVBQUUsVUFBVTtRQUNmLEdBQUcsRUFBRSxVQUFVO1FBQ2YsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLGNBQWMsRUFBRSxJQUFJO0tBQ3ZCLENBQUMsQ0FBQztJQUVILE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21PYmplY3QgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5cbmZ1bmN0aW9uIE1hcFZpZXdNb2RlbCgpIHtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgZmV0Y2hpbmc6IGZhbHNlLFxuXG4gICAgICAgIGxhdDogNTQuMzE1ODUxOSxcbiAgICAgICAgbG5nOiAxOC42MjQwMDY4LFxuICAgICAgICB6b29tOiAxMyxcbiAgICAgICAgcGFkZGluZzogMjAsXG4gICAgICAgIGNvbXBhc3NFbmFibGVkOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlld01vZGVsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcFZpZXdNb2RlbDtcbiJdfQ==