"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame = require("tns-core-modules/ui/frame");
var HOME_MODULE = 'pages/home/home-page';
var USER_PROFILE_MODULE = 'pages/userProfile/user-profile';
var MAP_MODULE = 'pages/map/map';
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
    NavigationService.ToMap = function () {
        frame.topmost().navigate({
            moduleName: MAP_MODULE,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELElBQU0sV0FBVyxHQUFHLHNCQUFzQixDQUFDO0FBQzNDLElBQU0sbUJBQW1CLEdBQUcsZ0NBQWdDLENBQUM7QUFDN0QsSUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDO0FBRW5DO0lBQUE7SUFzQ0EsQ0FBQztJQXJDVSx3QkFBTSxHQUFiO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNyQixVQUFVLEVBQUUsV0FBVztZQUN2QixVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLCtCQUFhLEdBQXBCO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNyQixVQUFVLEVBQUUsbUJBQW1CO1lBQy9CLE9BQU8sRUFBRSwrQkFBK0I7WUFDeEMsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx1QkFBSyxHQUFaO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNyQixVQUFVLEVBQUUsVUFBVTtZQUN0QixVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDRCQUFVLEdBQWpCO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lJztcblxuY29uc3QgSE9NRV9NT0RVTEUgPSAncGFnZXMvaG9tZS9ob21lLXBhZ2UnO1xuY29uc3QgVVNFUl9QUk9GSUxFX01PRFVMRSA9ICdwYWdlcy91c2VyUHJvZmlsZS91c2VyLXByb2ZpbGUnO1xuY29uc3QgTUFQX01PRFVMRSA9ICdwYWdlcy9tYXAvbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICAgIHN0YXRpYyBUb0hvbWUoKTogdm9pZCB7XG4gICAgICAgIGZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBIT01FX01PRFVMRSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2xpZGVMZWZ0JyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiAnZWFzZUluJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgVG9Vc2VyUHJvZmlsZSgpOiB2b2lkIHtcbiAgICAgICAgZnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFVTRVJfUFJPRklMRV9NT0RVTEUsXG4gICAgICAgICAgICBjb250ZXh0OiAndGVzdCB1c2VyIHByb2ZpbGUgbmF2IGNvbnRleHQnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzbGlkZUxlZnQnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6ICdlYXNlSW4nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBUb01hcCgpOiB2b2lkIHtcbiAgICAgICAgZnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IE1BUF9NT0RVTEUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3NsaWRlTGVmdCcsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogJ2Vhc2VJbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIFRvUHJldmlvdXMoKTogdm9pZCB7XG4gICAgICAgIGZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9XG59XG4iXX0=