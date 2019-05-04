import faker = require('faker');
import * as httpModule from 'tns-core-modules/http';
import { Offer } from '~/shared/interfaces';

export class OffersService {

    private _useHttp: boolean = true;

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
                result.push({
                    date: faker.date.future(),
                    location: {
                        lat: 20,
                        lng: 30
                    },
                    title: faker.name.lastName(),
                    description: faker.phone.phoneNumber()
                });
            }

            resolve(result);
        });
    }
}
