import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import NavigationService from '~/services/navigation-service';
import { getLocation, enableLocation } from '~/services/geolocation-service';
import * as dialogs from 'tns-core-modules/ui/dialogs'
import * as geolocation from 'nativescript-geolocation'


const HomeViewModel = require("./home-view-model");

let page: Page = null;
let vm = new HomeViewModel();

export function onPageLoaded(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = vm;
}

export function toUserProfile(args: EventData) {
    NavigationService.ToUserProfile();
}

export function toMap(args: EventData) {
    NavigationService.ToMap();
}

export function getGpsLocation() {
    getLocation().then((gps: geolocation.Location) => {
        dialogs.alert({
            title: "GPS Location",
            message: gps.latitude + ", " + gps.longitude,
            okButtonText: "Got it"
        });
    });
}


export function enableGpsLocation() {
    enableLocation();
}
