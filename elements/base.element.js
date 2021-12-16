export default class BaseElement{
    constructor(wdioElement,name) {
        this.wdioElement = wdioElement;
        this.elementName = name;
    }

    async isDisplayed(){
        return this.wdioElement.isDisplayed();
    }

    async waitForExist(){
        await this.wdioElement.waitForExist({reverse:true})
    }

    async waitForDisappear(){
        await this.wdioElement.waitForDisplayed({reverse:true})
    }
}