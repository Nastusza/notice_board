"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("tns-core-modules/ui/enums");
var geolocation = require("nativescript-geolocation");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRpb24tc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBb0Q7QUFDcEQsc0RBQXVEO0FBRXZELFNBQWlCLGNBQWM7SUFDM0IsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLFNBQVM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUN6QyxDQUFDLEVBQUUsVUFBVSxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDLEVBQUUsVUFBVSxDQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBWEQsd0NBV0M7QUFFRCxTQUFnQixXQUFXO0lBQ3ZCLE9BQU8sV0FBVyxDQUFDLGtCQUFrQixDQUFDO1FBQ2xDLGVBQWUsRUFBRSxnQkFBUSxDQUFDLEdBQUc7S0FDaEMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUpELGtDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zJ1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJ1xuXG5leHBvcnQgZnVuY3Rpb24gIGVuYWJsZUxvY2F0aW9uKCkge1xuICAgIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oZnVuY3Rpb24gKGlzRW5hYmxlZCkge1xuICAgICAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgICAgICAgZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbigpOiBQcm9taXNlPGdlb2xvY2F0aW9uLkxvY2F0aW9uPiB7XG4gICAgcmV0dXJuIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7XG4gICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuYW55XG4gICAgfSk7XG59XG4iXX0=