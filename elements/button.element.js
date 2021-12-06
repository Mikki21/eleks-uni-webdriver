import BaseElement from "./base.element";

export default class ButtonElement extends BaseElement{
    constructor(wdioElement,name) {
        super(wdioElement,name)
    }

    async click(){
        if(!(await super.isDisplayed()))
            throw `${this.elementName} is missed!`
        await this.wdioElement.click();
    }
}