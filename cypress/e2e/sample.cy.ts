/// <reference types="cypress" />
import { LoginPage } from "../support/pageObjects/loginPage";

describe("Login happy path test", () => {
  const loginPage = new LoginPage();
  let userData: any;

  before(() => {
    // Load the fixture data before running any tests
    cy.fixture("example.json").then((data) => {
      userData = data;
    });

    cy.clearAllSessionStorage();
    cy.clearCookies();
  });

  beforeEach(function() {
    cy.task('logMessage', `START TEST: ${this.currentTest.title}`);
  });
  
  afterEach(function() {
    cy.task('logMessage', `END TEST: ${this.currentTest.title} - Status: ${this.currentTest.state}`);
  });

  it.only("Logs in to the Ironclad demo site with remember me box checked", () => {
    loginPage.visit();
    loginPage.loginWithCredentials(userData.username, userData.password, false);
    cy.url().should('eq', userData.postLoginUrl);

    // cy.visit('https://google.com');
    // loginPage.visit();

    // loginPage.visit();
    // loginPage.loginWithCredentials(userData.username, userData.password, true);  
    // cy.url().should('eq', userData.postLoginUrl);
    
    // loginPage.visit()
    // cy.url().should('eq', userData.postLoginUrl);
    
  });

  it("Revisits page to verify login persistence", () => {
    
  });
});
  