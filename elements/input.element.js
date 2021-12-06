import BaseElement from "./base.element";

export default class InputElement extends BaseElement{
    constructor(wdioElement,name) {
        super(wdioElement,name);
    }

    async setValue(val){
        console.log(`Set ${val} => ${this.elementName}`);
        await this.wdioElement.setValue(val);
    }
}