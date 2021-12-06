module.exports = {
    email:{
        input: "//input[@id='email']",
        defaultValue: "//label[@id='mat-form-field-label-5']/mat-label",
        inputErrorText: "//div/mat-error[@id='mat-error-0']"
    },
    password: {
        input: "//input[@id='password']",
        defaultValue: "//label[@id='mat-form-field-label-7']/mat-label",
        inputErrorText: "//div/mat-error[@id='mat-error-1']"
    },
    logIn:{
        button:"//button[@id='loginButton']",
        errorText:"//app-login//mat-card//div[contains(@class, 'error')]"
    },
    rememberMe:{
        checkbox:"//input[@id='rememberMe-input']",
        text:"//mat-checkbox[@id='rememberMe']/label/span[2]"
    },
    notYetCustomer:"//div[@id='newCustomerLink']/a"
}