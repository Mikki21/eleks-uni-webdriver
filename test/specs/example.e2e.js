describe('My Login application', () => {

    before(()=>{
        console.log("My login Test has started!");
    })

    it('should login with valid credentials', async () => {
        await browser.url(`/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

