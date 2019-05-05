import faker = require('faker');
import * as httpModule from 'tns-core-modules/http';
import { Offer } from '~/shared/interfaces';

export class OffersService {

    private _useHttp: boolean = false;

    loadOffers() : Promise<Array<Offer>> {
        if (this._useHttp) {
            return this.loadOffersOverHttp();
        }
        else {
            return this.loadFakeOffers();
        }
    }

    private loadOffersOverHttp() : Promise<Array<Offer>> {

        var reqPArams = {
            url: 'https://192.168.1.139:5001/api/offers',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return httpModule.getJSON<Array<Offer>>(reqPArams);
    }


    private loadFakeOffers() : Promise<Array<Offer>> {
        return new Promise<Array<Offer>>((resolve, reject) => {
            let result = new Array<Offer>();

            for (let i = 0; i < 20; i++) {

                const randomLat = faker.random.number({
                    'min': 54.300,
                    'max': 54.340,
                    precision: 0.001
                });

                const randomLng = faker.random.number({
                    'min': 18.600,
                    'max': 18.640,
                    precision: 0.001
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
