"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("faker");
var httpModule = require("tns-core-modules/http");
var OffersService = /** @class */ (function () {
    function OffersService() {
        this._useHttp = true;
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
    };
    return OffersService;
}());
exports.OffersService = OffersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmZXJzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvZmZlcnMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFnQztBQUNoQyxrREFBb0Q7QUFHcEQ7SUFBQTtRQUVZLGFBQVEsR0FBWSxJQUFJLENBQUM7SUE0Q3JDLENBQUM7SUExQ0csa0NBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDcEM7YUFDSTtZQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVPLDBDQUFrQixHQUExQjtRQUVJLElBQUksU0FBUyxHQUFHO1lBQ1osR0FBRyxFQUFFLHVDQUF1QztZQUM1QyxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2FBQ3JDO1NBQ0osQ0FBQztRQUVGLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBZSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBR08sc0NBQWMsR0FBdEI7UUFDSSxPQUFPLElBQUksT0FBTyxDQUFlLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDN0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVMsQ0FBQztZQUVoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNSLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDekIsUUFBUSxFQUFFO3dCQUNOLEdBQUcsRUFBRSxFQUFFO3dCQUNQLEdBQUcsRUFBRSxFQUFFO3FCQUNWO29CQUNELEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO2lCQUN6QyxDQUFDLENBQUM7YUFDTjtZQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmFrZXIgPSByZXF1aXJlKCdmYWtlcicpO1xuaW1wb3J0ICogYXMgaHR0cE1vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2h0dHAnO1xuaW1wb3J0IHsgT2ZmZXIgfSBmcm9tICd+L3NoYXJlZC9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIE9mZmVyc1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfdXNlSHR0cDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBsb2FkT2ZmZXJzKCkgOiBQcm9taXNlPEFycmF5PE9mZmVyPj4ge1xuICAgICAgICBpZiAodGhpcy5fdXNlSHR0cCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9hZE9mZmVyc092ZXJIdHRwKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkRmFrZU9mZmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkT2ZmZXJzT3Zlckh0dHAoKSA6IFByb21pc2U8QXJyYXk8T2ZmZXI+PiB7XG5cbiAgICAgICAgdmFyIHJlcVBBcmFtcyA9IHtcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vMTkyLjE2OC4xLjEzOTo1MDAxL2FwaS9vZmZlcnMnLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTjxBcnJheTxPZmZlcj4+KHJlcVBBcmFtcyk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGxvYWRGYWtlT2ZmZXJzKCkgOiBQcm9taXNlPEFycmF5PE9mZmVyPj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8T2ZmZXI+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5PE9mZmVyPigpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGZha2VyLmRhdGUuZnV0dXJlKCksXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG5nOiAzMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZmFrZXIubmFtZS5sYXN0TmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZmFrZXIucGhvbmUucGhvbmVOdW1iZXIoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==