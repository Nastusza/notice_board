import { Accuracy } from 'tns-core-modules/ui/enums'
import * as geolocation from 'nativescript-geolocation'

export function  enableLocation() {
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

export function getLocation(): Promise<geolocation.Location> {
    return geolocation.getCurrentLocation({
        desiredAccuracy: Accuracy.any
    });
}
