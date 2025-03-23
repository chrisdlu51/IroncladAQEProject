import { loginPageLocators } from "../locators/loginPageLocators";

export class LoginPage {
  
    visit() {
      cy.visit('/');
    }
  
    fillCredentials(username: string, password: string) {
      cy.get(loginPageLocators.usernameInput).type(username);
      cy.get(loginPageLocators.passwordInput).type(password);
    }
  
    submit() {
      cy.get(loginPageLocators.loginButton).click();
    }
}