export default class BaseElement{
    constructor(wdioElement,name) {
        this.wdioElement = wdioElement;
        this.elementName = name;
    }

    async isDisplayed(){
        return this.wdioElement.isDisplayed();
    }

    async waitForElementToDisappear(timeout){
        await browser.waitUntil(async ()=> !this.wdioElement.isClickable(),{timeout:timeout,timeoutMsg: `expected ${this.elementName} to disappear after ${timeout} ms`})
    }
}