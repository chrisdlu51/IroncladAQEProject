/// <reference types="cypress" />
import { LoginPage } from "../support/pageObjects/loginPage";

describe("Sample Test", () => {
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

  it("Logs in to the Saucelabs demo site", () => {
    loginPage.visit();
    loginPage.fillCredentials(userData.username, userData.password);
    loginPage.submit(); 
    
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  });
});
  