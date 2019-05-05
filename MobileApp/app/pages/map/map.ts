import { Camera, CameraEventData, MapView, Marker, MarkerEventData, Position } from 'nativescript-google-maps-sdk';
import { EventData, NavigatedData, Page } from 'tns-core-modules/ui/page/page';
import NavigationService from '~/services/navigation-service';
import { OffersService } from '~/services/offers-service';
import { Offer } from '~/shared/interfaces';
import { enableLocation } from '~/services/geolocation-service';
import { MarkerCustom } from './components/marker-custom';

const ViewModel = require("./map-module");

let vm = new ViewModel();

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = vm;

    enableLocation();
}

export function navigateHome(args: EventData) {
    NavigationService.ToHome();
}

export function onMapReady(args: EventData) {
    var mapView = <MapView>args.object;
}

export function onMarkerSelect(args: MarkerEventData) {
    const marker = <Marker>args.marker;
    const map = <MapView>args.object;
}

export function onCameraChanged(args: CameraEventData) {
    const camera = <Camera>args.camera;
    const map = <MapView>args.object;

    const latMin = map.projection.visibleRegion.bounds.southwest.latitude;
    const latMax = map.projection.visibleRegion.bounds.northeast.latitude;
    const lngMin = map.projection.visibleRegion.bounds.southwest.longitude;
    const lngMax = map.projection.visibleRegion.bounds.northeast.longitude;

    vm.fetching = true;
    map.removeAllMarkers();

    new OffersService().loadOffers(latMin, latMax, lngMin, lngMax)
        .then(
            (result: Array<Offer>) => {
                result.forEach(r => placeMarker(r, map))
                vm.fetching = false;
            },
            (error) => {
                vm.fetching = false;
            });
}

function placeMarker(offer: Offer, mapView: MapView) {
    var marker = new MarkerCustom();
    marker.position = Position.positionFromLatLng(offer.location.lat, offer.location.lng);
    marker.title = offer.title;
    marker.snippet = offer.description;
    // marker.userData = { index : 1};

    mapView.addMarker(marker);
}

