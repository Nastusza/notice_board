import * as settings from 'tns-core-modules/application-settings';

export default class Settings {
    static get Value1(): string {
        return settings.getString('VALUE1', '');
    }
    static set Value1(val: string) {
        settings.setString("VALUE1", val);
    }
}
