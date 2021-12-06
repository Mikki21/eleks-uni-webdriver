import LoginPage from "../login/login.page";
import HeaderPage from "../header/header.page";
import BasePage from "../base/basePage";

export default class MainPage extends BasePage{
    constructor() {
        super();
        this.header = HeaderPage;
    }

    async openLoginPage(){
        await this.header.accountButton.click();
        await this.header.loginButton.click();
        return new LoginPage();
    }

    async open(){
        await super.openURLWithSize();
    }

}