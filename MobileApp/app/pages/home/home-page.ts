import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import Settings from '~/services/app-settings-service';
import NavigationService from '~/services/navigation-service';
import { OffersService } from '~/services/offers-service';
import { Offer } from '~/shared/interfaces';

var dialogs = require("tns-core-modules/ui/dialogs");
const HomeViewModel = require("./home-view-model");

let page: Page = null;
let vm = new HomeViewModel();

export function onPageLoaded(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = vm;
    // init();
}

export function onTap(args: EventData) {
    init();
}

export function saveSetting(args: EventData) {
    Settings.Value1 = 'test';
}

export function readSetting(args: EventData) {
    let testSet = Settings.Value1;
    dialogs.alert(testSet);
}

export function toUserProfile(args: EventData) {
    NavigationService.ToUserProfile();
}

export function toMap(args: EventData) {
    NavigationService.ToMap();
}

function init() {
    vm.fetching = true;
    new OffersService().loadOffers()
        .then(
            (result: Array<Offer>) => {
                vm.message = 'Fetch Completed Succesfully!';
                vm.offers = result;
                vm.fetching = false;
            },
            (error) => {
                vm.message = error.message;
                vm.fetching = false;
            });
}
