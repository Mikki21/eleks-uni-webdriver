import AboutUsPage from "../../../pages/aboutus/aboutus.page";
describe('About us => ', async function () {
    before(async function (){
        const aboutUsPage = new AboutUsPage();
        await aboutUsPage.open();
        await aboutUsPage.dismissPopUp();
        await browser.pause(1000)
        this.socialsArray = await aboutUsPage.allSocials;
        this.currentWindow = await browser.getWindowHandle();
    })

    it('Loop through social links.',async function (){
        for (const socialsArrayElement of this.socialsArray) {
            const link = await socialsArrayElement.getAttribute("href");
            await browser.newWindow(link, {windowName:"social"});
            await browser.pause(1000);
            expect(await browser.getUrl()).toHaveText(link);
            await browser.closeWindow()
            await browser.switchToWindow(this.currentWindow);
        }
    })
});