"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker");
var httpModule = require("tns-core-modules/http");
var OffersService = /** @class */ (function () {
    function OffersService() {
        this._useHttp = false;
    }
    OffersService.prototype.loadOffers = function (latMin, latMax, lngMin, lngMax) {
        if (this._useHttp) {
            return this.loadOffersOverHttp(latMin, latMax, lngMin, lngMax);
        }
        else {
            return this.loadFakeOffers(latMin, latMax, lngMin, lngMax);
        }
    };
    OffersService.prototype.loadOffersOverHttp = function (latMin, latMax, lngMin, lngMax) {
        var reqPArams = {
            url: 'https://192.168.1.139:5001/api/offers',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return httpModule.getJSON(reqPArams);
    };
    OffersService.prototype.loadFakeOffers = function (latMin, latMax, lngMin, lngMax) {
        return new Promise(function (resolve, reject) {
            var result = new Array();
            for (var i = 0; i < 5; i++) {
                var randomLat = faker.random.number({
                    'min': latMin,
                    'max': latMax,
                    precision: 0.00001
                });
                var randomLng = faker.random.number({
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
    };
    return OffersService;
}());
exports.OffersService = OffersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmZXJzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvZmZlcnMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFnQztBQUNoQyxrREFBb0Q7QUFHcEQ7SUFBQTtRQUVZLGFBQVEsR0FBWSxLQUFLLENBQUM7SUF5RHRDLENBQUM7SUF2REcsa0NBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDckUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEU7YUFDSTtZQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7SUFFTywwQ0FBa0IsR0FBMUIsVUFBMkIsTUFBYyxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUVyRixJQUFJLFNBQVMsR0FBRztZQUNaLEdBQUcsRUFBRSx1Q0FBdUM7WUFDNUMsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjthQUNyQztTQUNKLENBQUM7UUFFRixPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQWUsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUdPLHNDQUFjLEdBQXRCLFVBQXVCLE1BQWMsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDakYsT0FBTyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzdDLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7WUFFaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFFeEIsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2xDLEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxNQUFNO29CQUNiLFNBQVMsRUFBRSxPQUFPO2lCQUNyQixDQUFDLENBQUM7Z0JBRUgsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2xDLEtBQUssRUFBRSxNQUFNO29CQUNiLEtBQUssRUFBRSxNQUFNO29CQUNiLFNBQVMsRUFBRSxPQUFPO2lCQUNyQixDQUFDLENBQUM7Z0JBRUgsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDUixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ3pCLFFBQVEsRUFBRTt3QkFDTixHQUFHLEVBQUUsU0FBUzt3QkFDZCxHQUFHLEVBQUUsU0FBUztxQkFDakI7b0JBQ0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUM1QixXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7aUJBQ3pDLENBQUMsQ0FBQzthQUNOO1lBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYWtlciA9IHJlcXVpcmUoJ2Zha2VyJyk7XG5pbXBvcnQgKiBhcyBodHRwTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaHR0cCc7XG5pbXBvcnQgeyBPZmZlciB9IGZyb20gJ34vc2hhcmVkL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY2xhc3MgT2ZmZXJzU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF91c2VIdHRwOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBsb2FkT2ZmZXJzKGxhdE1pbjogbnVtYmVyLCBsYXRNYXg6IG51bWJlciwgbG5nTWluOiBudW1iZXIsIGxuZ01heDogbnVtYmVyKSA6IFByb21pc2U8QXJyYXk8T2ZmZXI+PiB7XG4gICAgICAgIGlmICh0aGlzLl91c2VIdHRwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkT2ZmZXJzT3Zlckh0dHAobGF0TWluLCBsYXRNYXgsIGxuZ01pbiwgbG5nTWF4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRGYWtlT2ZmZXJzKGxhdE1pbiwgbGF0TWF4LCBsbmdNaW4sIGxuZ01heCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRPZmZlcnNPdmVySHR0cChsYXRNaW46IG51bWJlciwgbGF0TWF4OiBudW1iZXIsIGxuZ01pbjogbnVtYmVyLCBsbmdNYXg6IG51bWJlcikgOiBQcm9taXNlPEFycmF5PE9mZmVyPj4ge1xuXG4gICAgICAgIHZhciByZXFQQXJhbXMgPSB7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovLzE5Mi4xNjguMS4xMzk6NTAwMS9hcGkvb2ZmZXJzJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBodHRwTW9kdWxlLmdldEpTT048QXJyYXk8T2ZmZXI+PihyZXFQQXJhbXMpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBsb2FkRmFrZU9mZmVycyhsYXRNaW46IG51bWJlciwgbGF0TWF4OiBudW1iZXIsIGxuZ01pbjogbnVtYmVyLCBsbmdNYXg6IG51bWJlcikgOiBQcm9taXNlPEFycmF5PE9mZmVyPj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8T2ZmZXI+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5PE9mZmVyPigpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tTGF0ID0gZmFrZXIucmFuZG9tLm51bWJlcih7XG4gICAgICAgICAgICAgICAgICAgICdtaW4nOiBsYXRNaW4sXG4gICAgICAgICAgICAgICAgICAgICdtYXgnOiBsYXRNYXgsXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogMC4wMDAwMVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tTG5nID0gZmFrZXIucmFuZG9tLm51bWJlcih7XG4gICAgICAgICAgICAgICAgICAgICdtaW4nOiBsbmdNaW4sXG4gICAgICAgICAgICAgICAgICAgICdtYXgnOiBsbmdNYXgsXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogMC4wMDAwMVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiBmYWtlci5kYXRlLmZ1dHVyZSgpLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiByYW5kb21MYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHJhbmRvbUxuZ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZmFrZXIubmFtZS5sYXN0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZmFrZXIucGhvbmUucGhvbmVOdW1iZXIoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==