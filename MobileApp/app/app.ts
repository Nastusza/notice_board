import application = require("tns-core-modules/application");
import NavigationService from './services/navigation-service';

application.setCssFileName('styles/app.ss')
application.run({ moduleName: 'app-root' });
