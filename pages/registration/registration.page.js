import BasePage from "../base/basePage.js";
import InputElement from "../../elements/input.element.js";
import CheckboxElement from "../../elements/checkbox.element";
import ButtonElement from "../../elements/button.element";
import DropdownElement from "../../elements/dropdown.element";
import BaseElement from "../../elements/base.element";

class RegistrationPage extends BasePage{

    async open(){
        super.open("/#/register")
    }

    get emailInput(){
        return new InputElement($("//input[@id='emailControl']"))
    }

    get passInput(){
        return new InputElement($("//input[@id='passwordControl']"))
    }
    get passRepInput(){
        return new InputElement($("//input[@id='repeatPasswordControl']"))
    }
    get answerInput(){
        return new InputElement($("//input[@id='securityAnswerControl']"))
    }

    get passAdviceCheckBox(){
        return new CheckboxElement($("//input[@id='mat-slide-toggle-3-input']"))
    }

    get registerButton(){
        return new ButtonElement($("//button[@id='registerButton']"))
    }

    get recQuestion(){
        return new DropdownElement($("//*[@id=\"mat-select-0\"]"), "Security question");
    }

    get baseElement(){
        return new BaseElement($("//*[@id=\"cdk-overlay-0\"]/snack-bar-container"),"ForceReload page popup")
    }

}

export default new RegistrationPage();