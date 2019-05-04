export interface Offer {
    date: Date,
    title: string,
    description: string,
    location: LatLng
}

export interface LatLng {
    lat: number,
    lng: number
}
