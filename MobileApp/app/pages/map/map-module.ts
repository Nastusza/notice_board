import { fromObject } from 'tns-core-modules/data/observable';

function MapViewModel() {
    const viewModel = fromObject({
        fetching: false,

        lat: 54.3158519,
        lng: 18.6240068,
        zoom: 13,
        padding: 20
    });

    return viewModel;
}

module.exports = MapViewModel;
