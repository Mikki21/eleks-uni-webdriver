import BasePage from "../base/basePage.js";
import InputElement from "../../elements/input.element.js";
import { email, password, logIn, notYetCustomer } from "./login.locators.js"
import ButtonElement from "../../elements/button.element.js";
import RegistrationPage from "../registration/registration.page";

class LoginPage extends BasePage{

    constructor() {
        super();
    }

    getLoginError(){
        return $(logIn.errorText);
    }

    get emailInput(){
        return new InputElement($(email.input),"emailInput");
    }

    get passwordInput(){
        return new InputElement($(password.input),"passwordInput");
    }

    get loginModalButton(){
        return new ButtonElement($(logIn.button),"loginModalButton");
    }

    get notYetCustomerButton(){
        return new ButtonElement($(notYetCustomer),"notYetCustomerButton");
    }
    
    async openRegister(){
        await this.notYetCustomerButton.click();
        return RegistrationPage;
        
    }

    async open(){
        await super.open('/#/login');
    }

}

export default new LoginPage();