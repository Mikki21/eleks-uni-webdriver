import HeaderPage from "../header/header.page";
import BasePage from "../base/basePage";

export default class AboutUsPage extends BasePage{
    constructor() {
        super();
        this.header = HeaderPage;
    }

    get allSocials(){
        return browser.$$("//div[contains(@class,'social')]//a")
    }

    async open(){
        await super.openURLWithSize('/#/about');
    }

}