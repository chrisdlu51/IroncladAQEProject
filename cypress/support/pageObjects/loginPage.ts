import { getContinueBtn, getRememberMeCheckbox, getTextInputBtn, loginPageLocators } from "../selectors/loginPageSelectors";

export class LoginPage {
  
    visit() {
      cy.visit('/');
    }
  
    enterLoginEmail(username: string, rememberMe: boolean) {
      getTextInputBtn().type(username);
      if (rememberMe) {
        getRememberMeCheckbox().click();
      };
      getContinueBtn().click();
    }

    enterLoginPassword(password: string) {
      getTextInputBtn().type(password);
      getContinueBtn().click();
    };
}