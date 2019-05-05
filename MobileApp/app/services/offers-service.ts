import faker = require('faker');
import * as httpModule from 'tns-core-modules/http';
import { Offer } from '~/shared/interfaces';

export class OffersService {

    private _useHttp: boolean = false;

    loadOffers(latMin: number, latMax: number, lngMin: number, lngMax: number) : Promise<Array<Offer>> {
        if (this._useHttp) {
            return this.loadOffersOverHttp(latMin, latMax, lngMin, lngMax);
        }
        else {
            return this.loadFakeOffers(latMin, latMax, lngMin, lngMax);
        }
    }

    private loadOffersOverHttp(latMin: number, latMax: number, lngMin: number, lngMax: number) : Promise<Array<Offer>> {

        var reqPArams = {
            url: 'https://192.168.1.139:5001/api/offers',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return httpModule.getJSON<Array<Offer>>(reqPArams);
    }


    private loadFakeOffers(latMin: number, latMax: number, lngMin: number, lngMax: number) : Promise<Array<Offer>> {
        return new Promise<Array<Offer>>((resolve, reject) => {
            let result = new Array<Offer>();

            for (let i = 0; i < 5; i++) {

                const randomLat = faker.random.number({
                    'min': latMin,
                    'max': latMax,
                    precision: 0.00001
                });

                const randomLng = faker.random.number({
                    'min': lngMin,
                    'max': lngMax,
                    precision: 0.00001
                });

                result.push({
                    date: faker.date.future(),
                    location: {
                        lat: randomLat,
                        lng: randomLng
                    },
                    title: faker.name.lastName(),
                    description: faker.phone.phoneNumber()
                });
            }

            resolve(result);
        });
    }
}
