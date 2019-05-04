import { Offer } from './../../shared/interfaces';
import { fromObject, EventData } from "tns-core-modules/data/observable";

function HomeViewModel() {
    const viewModel = fromObject({
        fetching: false,
        message: '',
        offers: Array<Offer>(),
    });

    return viewModel;
}

module.exports = HomeViewModel;
