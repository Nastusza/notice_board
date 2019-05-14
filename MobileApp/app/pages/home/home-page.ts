import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import NavigationService from '~/services/navigation-service';
import { enableLocation,getLocation} from '~/services/geolocation-service';

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

export function enableGpsLocation() {
    enableLocation();
}

export function getGpsLocation() {
    getLocation().then(gps => {
        console.log(gps);
    });
}
