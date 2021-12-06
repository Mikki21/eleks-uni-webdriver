import ButtonElement from "../../elements/button.element";
export class HeaderPage{

    get sideMenu(){
        return new ButtonElement(browser.$("//app-navbar//*[contains(@aria-label,'Open Sidenav')]"));
    }

    get searchIcon(){
        return new ButtonElement(browser.$("//app-navbar//mat-search-bar[@id='searchQuery']"));
    }

    get accountButton(){
        return new ButtonElement(browser.$("//app-navbar//*[@id='navbarAccount']"));
    }

    get logOutButton(){
        return new ButtonElement(browser.$("//*[@id='navbarLogoutButton']"));
    }

    get loginButton(){
        return new ButtonElement(browser.$("//*[@id='navbarLoginButton']"));
    }
}

export default new HeaderPage();