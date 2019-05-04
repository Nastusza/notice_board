"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame = require("tns-core-modules/ui/frame");
var HOME_MODULE = 'pages/home/home-page';
var USER_PROFILE_MODULE = 'pages/userProfile/user-profile';
var NavigationService = /** @class */ (function () {
    function NavigationService() {
    }
    NavigationService.ToHome = function () {
        frame.topmost().navigate({
            moduleName: HOME_MODULE,
            transition: {
                name: 'slideLeft',
                duration: 200,
                curve: 'easeIn'
            }
        });
    };
    NavigationService.ToUserProfile = function () {
        frame.topmost().navigate({
            moduleName: USER_PROFILE_MODULE,
            context: 'test user profile nav context',
            transition: {
                name: 'slideLeft',
                duration: 200,
                curve: 'easeIn'
            }
        });
    };
    NavigationService.ToPrevious = function () {
        frame.topmost().goBack();
    };
    return NavigationService;
}());
exports.default = NavigationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELElBQU0sV0FBVyxHQUFHLHNCQUFzQixDQUFDO0FBQzNDLElBQU0sbUJBQW1CLEdBQUcsZ0NBQWdDLENBQUM7QUFFN0Q7SUFBQTtJQTJCQSxDQUFDO0lBMUJVLHdCQUFNLEdBQWI7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3JCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sK0JBQWEsR0FBcEI7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3JCLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsT0FBTyxFQUFFLCtCQUErQjtZQUN4QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDRCQUFVLEdBQWpCO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lJztcblxuY29uc3QgSE9NRV9NT0RVTEUgPSAncGFnZXMvaG9tZS9ob21lLXBhZ2UnO1xuY29uc3QgVVNFUl9QUk9GSUxFX01PRFVMRSA9ICdwYWdlcy91c2VyUHJvZmlsZS91c2VyLXByb2ZpbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gICAgc3RhdGljIFRvSG9tZSgpOiB2b2lkIHtcbiAgICAgICAgZnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IEhPTUVfTU9EVUxFLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6ICdlYXNlSW4nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBUb1VzZXJQcm9maWxlKCk6IHZvaWQge1xuICAgICAgICBmcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogVVNFUl9QUk9GSUxFX01PRFVMRSxcbiAgICAgICAgICAgIGNvbnRleHQ6ICd0ZXN0IHVzZXIgcHJvZmlsZSBuYXYgY29udGV4dCcsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlTGVmdCcsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogJ2Vhc2VJbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIFRvUHJldmlvdXMoKTogdm9pZCB7XG4gICAgICAgIGZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9XG59XG4iXX0=