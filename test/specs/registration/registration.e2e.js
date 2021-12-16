import RegistrationPage from "../../../pages/registration/registration.page";
import LoginPage from "../../../pages/login/login.page";


describe('Registration page:',()=>{

    it('Check register flow', async function () {
        await RegistrationPage.open();
        await RegistrationPage.dismissPopUp();
        // await browser.pause(5000);
        await RegistrationPage.waitForBaseElementToDisappear();
        await RegistrationPage.emailInput.setValue("check@gmail.com");
        await RegistrationPage.passInput.setValue("M1weird_");
        await RegistrationPage.passRepInput.setValue("M1weird_");
        await RegistrationPage.recQuestion.selectOption("Name of your favorite pet?");
        await RegistrationPage.answerInput.setValue("chocoboom")
        await RegistrationPage.waitForBaseElementToDisappear();
        await RegistrationPage.registerButton.click();
        await RegistrationPage.openLoginPage();
        await LoginPage.emailInput.setValue("check@gmail.com");
        await LoginPage.passwordInput.setValue("M1weird_");

        await LoginPage.loginModalButton.click();
        await LoginPage.header.accountButton.click();
        expect(await LoginPage.header.logOutButton.isDisplayed()).toEqual(true);

    });

})