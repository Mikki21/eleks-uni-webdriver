import randomString from "randomstring";
import validData from "./login.valid.data.js";
import LoginPage from "../../../pages/login/login.page";

describe('Login flow => ', () => {
    describe('Negative cases:',()=>{
        it('Login with incorrect credentials.', async () => {
            allure.startStep("Login with incorrect credentials:");
            await LoginPage.open();
            await LoginPage.dismissPopUp();
            await LoginPage.openLoginPage();
            await LoginPage.emailInput.setValue(randomString.generate());
            await LoginPage.passwordInput.setValue(randomString.generate());
            await LoginPage.loginModalButton .click();

            expect(await LoginPage.getLoginError().getText()).toHaveText("Invalid email or password.");

            allure.endStep('passed')
        });
    })
    describe('Positive cases:',()=>{
        for(const { email,password } of validData.credentials){
            it(`Login with ${email}:${password}.`, async () => {
                allure.startStep("Login with correct credentials:");
                await LoginPage.open();
                await LoginPage.openLoginPage();
                await LoginPage.dismissPopUp();

                await LoginPage.emailInput.setValue(email);
                await LoginPage.passwordInput.setValue(password);

                await LoginPage.loginModalButton.click();
                await LoginPage.header.accountButton.click();
                expect(await LoginPage.header.logOutButton.isDisplayed()).toEqual(true);

                allure.endStep('passed')
            });
        }
    })

});

