"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker");
var httpModule = require("tns-core-modules/http");
var OffersService = /** @class */ (function () {
    function OffersService() {
        this._useHttp = false;
    }
    OffersService.prototype.loadOffers = function () {
        if (this._useHttp) {
            return this.loadOffersOverHttp();
        }
        else {
            return this.loadFakeOffers();
        }
    };
    OffersService.prototype.loadOffersOverHttp = function () {
        var reqPArams = {
            url: 'https://192.168.1.139:5001/api/offers',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return httpModule.getJSON(reqPArams);
    };
    OffersService.prototype.loadFakeOffers = function () {
        return new Promise(function (resolve, reject) {
            var result = new Array();
            for (var i = 0; i < 20; i++) {
                var randomLat = faker.random.number({
                    'min': 54.300,
                    'max': 54.340,
                    precision: 0.001
                });
                var randomLng = faker.random.number({
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
    };
    return OffersService;
}());
exports.OffersService = OffersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmZXJzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvZmZlcnMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFnQztBQUNoQyxrREFBb0Q7QUFHcEQ7SUFBQTtRQUVZLGFBQVEsR0FBWSxLQUFLLENBQUM7SUF5RHRDLENBQUM7SUF2REcsa0NBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDcEM7YUFDSTtZQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVPLDBDQUFrQixHQUExQjtRQUVJLElBQUksU0FBUyxHQUFHO1lBQ1osR0FBRyxFQUFFLHVDQUF1QztZQUM1QyxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2FBQ3JDO1NBQ0osQ0FBQztRQUVGLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBZSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBR08sc0NBQWMsR0FBdEI7UUFDSSxPQUFPLElBQUksT0FBTyxDQUFlLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDN0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztZQUVoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUV6QixJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDbEMsS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFLE1BQU07b0JBQ2IsU0FBUyxFQUFFLEtBQUs7aUJBQ25CLENBQUMsQ0FBQztnQkFFSCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDbEMsS0FBSyxFQUFFLE1BQU07b0JBQ2IsS0FBSyxFQUFFLE1BQU07b0JBQ2IsU0FBUyxFQUFFLEtBQUs7aUJBQ25CLENBQUMsQ0FBQztnQkFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNSLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDekIsUUFBUSxFQUFFO3dCQUNOLEdBQUcsRUFBRSxTQUFTO3dCQUNkLEdBQUcsRUFBRSxTQUFTO3FCQUNqQjtvQkFDRCxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQzVCLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtpQkFDekMsQ0FBQyxDQUFDO2FBQ047WUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBM0RZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZha2VyID0gcmVxdWlyZSgnZmFrZXInKTtcbmltcG9ydCAqIGFzIGh0dHBNb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9odHRwJztcbmltcG9ydCB7IE9mZmVyIH0gZnJvbSAnfi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBPZmZlcnNTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX3VzZUh0dHA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGxvYWRPZmZlcnMoKSA6IFByb21pc2U8QXJyYXk8T2ZmZXI+PiB7XG4gICAgICAgIGlmICh0aGlzLl91c2VIdHRwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkT2ZmZXJzT3Zlckh0dHAoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRGYWtlT2ZmZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRPZmZlcnNPdmVySHR0cCgpIDogUHJvbWlzZTxBcnJheTxPZmZlcj4+IHtcblxuICAgICAgICB2YXIgcmVxUEFyYW1zID0ge1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly8xOTIuMTY4LjEuMTM5OjUwMDEvYXBpL29mZmVycycsXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OPEFycmF5PE9mZmVyPj4ocmVxUEFyYW1zKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgbG9hZEZha2VPZmZlcnMoKSA6IFByb21pc2U8QXJyYXk8T2ZmZXI+PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxPZmZlcj4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBuZXcgQXJyYXk8T2ZmZXI+KCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tTGF0ID0gZmFrZXIucmFuZG9tLm51bWJlcih7XG4gICAgICAgICAgICAgICAgICAgICdtaW4nOiA1NC4zMDAsXG4gICAgICAgICAgICAgICAgICAgICdtYXgnOiA1NC4zNDAsXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogMC4wMDFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUxuZyA9IGZha2VyLnJhbmRvbS5udW1iZXIoe1xuICAgICAgICAgICAgICAgICAgICAnbWluJzogMTguNjAwLFxuICAgICAgICAgICAgICAgICAgICAnbWF4JzogMTguNjQwLFxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IDAuMDAxXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGZha2VyLmRhdGUuZnV0dXJlKCksXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHJhbmRvbUxhdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogcmFuZG9tTG5nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBmYWtlci5uYW1lLmxhc3ROYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmYWtlci5waG9uZS5waG9uZU51bWJlcigpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19