import BasePage from "../base/basePage";
import InputElement from "../../elements/input.element";
import{ email, password, logIn } from "./login.locators"
import ButtonElement from "../../elements/button.element";
import HeaderPage from "../header/header.page";

export default class LoginPage extends BasePage{

    constructor() {
        super();
        this.header = HeaderPage;
    }

    get url(){
        return '/login';
    }

    getLoginError(){
        return $(logIn.errorText);
    }

    get emailInput(){
        return new InputElement($(email.input),"EmailInput");
    }

    get passwordInput(){
        return new InputElement($(password.input),"PasswordInput");
    }

    get loginModalButton(){
        return new ButtonElement($(logIn.button),"loginModalButton");
    }

    async open(){
        await super.openURLWithSize();
    }

}