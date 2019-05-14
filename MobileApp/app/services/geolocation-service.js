"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var geolocation = require("nativescript-geolocation");
var enums_1 = require("tns-core-modules/ui/enums");
function enableLocation() {
    geolocation.isEnabled().then(function (isEnabled) {
        if (!isEnabled) {
            geolocation.enableLocationRequest().then(function () {
            }, function (e) {
                console.log("Error: " + (e.message || e));
            });
        }
    }, function (e) {
        console.log("Error: " + (e.message || e));
    });
}
exports.enableLocation = enableLocation;
function getLocation() {
    return geolocation.getCurrentLocation({
        desiredAccuracy: enums_1.Accuracy.any
    });
}
exports.getLocation = getLocation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRpb24tc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN0RCxtREFBb0Q7QUFFcEQsU0FBaUIsY0FBYztJQUMzQixXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsU0FBUztRQUM1QyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3pDLENBQUMsRUFBRSxVQUFVLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUMsRUFBRSxVQUFVLENBQUM7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFYRCx3Q0FXQztBQUVELFNBQWdCLFdBQVc7SUFDdkIsT0FBTyxXQUFXLENBQUMsa0JBQWtCLENBQUM7UUFDbEMsZUFBZSxFQUFFLGdCQUFRLENBQUMsR0FBRztLQUNoQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSkQsa0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2VvbG9jYXRpb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIpO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zJ1xuXG5leHBvcnQgZnVuY3Rpb24gIGVuYWJsZUxvY2F0aW9uKCkge1xuICAgIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oZnVuY3Rpb24gKGlzRW5hYmxlZCkge1xuICAgICAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgICAgICAgZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbigpOiBQcm9taXNlPExvY2F0aW9uPiB7XG4gICAgcmV0dXJuIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7XG4gICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuYW55XG4gICAgfSk7XG59XG4iXX0=