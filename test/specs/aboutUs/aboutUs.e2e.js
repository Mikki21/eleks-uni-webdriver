import AboutUsPage from "../../../pages/aboutus/aboutus.page.js";
describe('About us => ', async function () {
    before(async function (){

        await AboutUsPage.open();
        await AboutUsPage.dismissPopUp();
        this.socialsArray = await AboutUsPage.allSocials;
        this.currentWindow = await browser.getWindowHandle();
    })

    it('Loop through social links.',async function (){
        for (const socialsArrayElement of this.socialsArray) {
            const link = await socialsArrayElement.getAttribute("href");
            await browser.newWindow(link, {windowName:"social"});
            expect(await browser.getUrl()).toHaveText(link);
            await browser.closeWindow();
            await browser.switchToWindow(this.currentWindow);
        }
    })
});