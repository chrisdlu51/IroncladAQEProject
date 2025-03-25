import { getContinueBtn, getRememberMeCheckbox, getTextInputBtn, loginPageLocators } from "../selectors/loginPageSelectors";

export class LoginPage {
  
    visit() {
      cy.visit('/');
    }
  
    loginWithCredentials(username: string, password: string, rememberMe: boolean) {
      getTextInputBtn().type(username);

      if (rememberMe) {
        getRememberMeCheckbox().click();
      };
      
      getContinueBtn().click();
      getTextInputBtn().type(password);
      getContinueBtn().click();
    }
}