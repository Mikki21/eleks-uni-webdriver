import BaseElement from "./base.element.js";

export default class CheckboxElement extends BaseElement{
    constructor(wdioElement, switchTag, name) {
        super(wdioElement,name);
        this.switchTag = switchTag;
    }

    isChecked(){
        return this.wdioElement.getAttribute(this.switchTag);
    }
}