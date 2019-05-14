import { Page, NavigatedData } from 'tns-core-modules/ui/page/page';
import { EventData } from 'tns-core-modules/data/observable';
import NavigationService from '~/services/navigation-service';
const ViewModel = require("./user-profile-module");
var dialogs = require("tns-core-modules/ui/dialogs");

let page: Page = null;
let vm = new ViewModel();

export function onNavigatingTo(args: NavigatedData) {
    page = <Page>args.object;
    page.bindingContext = vm;

    // dialogs.alert(args.context);
}

export function navigateHome(args: EventData) {
    NavigationService.ToHome();
}

export function navigateBack(args: EventData) {
    NavigationService.ToPrevious();
}
