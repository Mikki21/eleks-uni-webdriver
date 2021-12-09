import HeaderPage from "../header/header.page";

export default class BasePage{
    async open(url=''){
        await browser.url(url);
    }
    get title() {
        return browser.getTitle()
    }

    get header() {
        return HeaderPage;
    }

    get URL() {
        return browser.getUrl()
    }

    async dismissPopUp(){
        if(!(await this.popUpDissmiss.isDisplayed()))
            return
        await this.popUpDissmiss.click();
    }



    get popUpDissmiss(){
        return browser.$("//*[@id='mat-dialog-0']/app-welcome-banner/div/div[2]/button[2]")
    }

    async openLoginPage(){
        await this.header.accountButton.click();
        await this.header.loginButton.click();
    }


}