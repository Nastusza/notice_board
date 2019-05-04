import * as frame from 'tns-core-modules/ui/frame';

const HOME_MODULE = 'pages/home/home-page';
const USER_PROFILE_MODULE = 'pages/userProfile/user-profile';

export default class NavigationService {
    static ToHome(): void {
        frame.topmost().navigate({
            moduleName: HOME_MODULE,
            transition: {
                name: 'slideLeft',
                duration: 200,
                curve: 'easeIn'
            }
        });
    }

    static ToUserProfile(): void {
        frame.topmost().navigate({
            moduleName: USER_PROFILE_MODULE,
            context: 'test user profile nav context',
            transition: {
                name: 'slideLeft',
                duration: 200,
                curve: 'easeIn'
            }
        });
    }

    static ToPrevious(): void {
        frame.topmost().goBack();
    }
}
