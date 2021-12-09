import BasePage from "../base/basePage.js";

class AboutUsPage extends BasePage{
    constructor() {
        super();
    }

    get allSocials(){
        return browser.$$("//div[contains(@class,'social')]//a")
    }

    async open(){
        await super.open('/#/about');
    }

}

export default new AboutUsPage();