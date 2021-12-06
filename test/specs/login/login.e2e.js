import MainPage from "../../../pages/main/main.page";
import randomString from "randomstring";
import validData from "./login.valid.data";

describe('Login flow => ', () => {
    describe('Negative cases:',()=>{
        it('Login with incorrect credentials.', async () => {
            allure.startStep("Login with incorrect credentials:");

            const mainPage = new MainPage();
            await mainPage.open()
            await mainPage.dismissPopUp();

            const loginPage = await mainPage.openLoginPage();
            await loginPage.emailInput.setValue(randomString.generate());
            await loginPage.passwordInput.setValue(randomString.generate());
            await loginPage.loginModalButton .click();

            expect(await loginPage.getLoginError().getText()).toHaveText("Invalid email or password.");

            allure.endStep('passed')
        });
    })
    describe('Positive cases:',()=>{
        for(const { email,password } of validData.credentials){
            it(`Login with ${email}:${password}.`, async () => {
                allure.startStep("Login with correct credentials:");

                const mainPage = new MainPage();
                await mainPage.open()
                await mainPage.dismissPopUp();

                const loginPage = await mainPage.openLoginPage();
                await loginPage.emailInput.setValue(email);
                await loginPage.passwordInput.setValue(password);

                await loginPage.loginModalButton.click();
                await loginPage.header.accountButton.click();
                await browser.pause(5000);
                expect(await loginPage.header.logOutButton.isDisplayed()).toEqual(true);

                allure.endStep('passed')
            });
        }
    })

});

