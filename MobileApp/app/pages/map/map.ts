import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { Image } from 'tns-core-modules/ui/image';
import { EventData, NavigatedData, Page } from 'tns-core-modules/ui/page/page';
import NavigationService from '~/services/navigation-service';
import { OffersService } from '~/services/offers-service';
import { Offer } from '~/shared/interfaces';

var imageSource = require( "image-source" );
const ViewModel = require("./map-module");

let page: Page = null;
let vm = new ViewModel();

export function onNavigatingTo(args: NavigatedData) {
    page = <Page>args.object;
    page.bindingContext = vm;
}

export function navigateHome(args: EventData) {
    NavigationService.ToHome();
}

export function onMapReady(args: EventData) {
    var mapView = <MapView>args.object;
    init(mapView);
}

function init(mapView: MapView) {
    vm.fetching = true;
    new OffersService().loadOffers()
        .then(
            (result: Array<Offer>) => {
                result.forEach(r => placeMarker(r, mapView))
                vm.fetching = false;
            },
            (error) => {
                vm.fetching = false;
            });
}

function placeMarker(offer: Offer, mapView: MapView) {
    var marker = new Marker();
    marker.position = Position.positionFromLatLng(offer.location.lat, offer.location.lng);
    marker.title = offer.title;
    marker.snippet = offer.description;
    // marker.userData = { index : 1};

    let icon = new Image();
    icon.imageSource = imageSource.fromResource('marker');
    marker.icon = icon;

    mapView.addMarker(marker);
}

