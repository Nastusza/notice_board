import { Marker } from 'nativescript-google-maps-sdk';
import { Image } from 'tns-core-modules/ui/image';
import { fromResource } from 'tns-core-modules/image-source';

export class MarkerCustom extends Marker {
  constructor() {
    super();

    let markerImage = new Image();
    markerImage.imageSource = fromResource('marker');

    this.icon = markerImage;
  }
}
