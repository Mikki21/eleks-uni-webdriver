import BaseElement from "./base.element.js";
import ButtonElement from "./button.element";

export default class DropdownElement extends BaseElement{
    constructor(wdioElement,name) {
        super(wdioElement,name);
    }

    async open(){
        await this.wdioElement.click();
    }
    async selectOption(option){
        await this.open();
        await new ButtonElement($(`//*[@class="mat-option-text"][contains(text(),"${option}")]`)).click();
    }
}