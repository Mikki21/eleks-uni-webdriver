export default class BaseElement{
    constructor(wdioElement,name) {
        this.wdioElement = wdioElement;
        this.elementName = name;
    }

    async isDisplayed(){
        return this.wdioElement.isDisplayed();
    }
}