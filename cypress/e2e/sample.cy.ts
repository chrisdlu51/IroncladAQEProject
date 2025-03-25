/// <reference types="cypress" />
import { LoginPage } from "../support/pageObjects/loginPage";
import { getToastMessage } from "../support/selectors/loginPageSelectors";

describe("Login to Ironclad happy path test", () => {
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

  it("Logs in to the Ironclad demo site without checking remember me box", () => {
    loginPage.visit();
    loginPage.enterLoginEmail(userData.username, false);
    loginPage.enterLoginPassword(userData.password);
    cy.url().should('eq', userData.postLoginUrl);
  });

  it("Logs in to the Ironclad demo site and checks remember me box", () => {
    loginPage.visit();
    loginPage.enterLoginEmail(userData.username, true);
    loginPage.enterLoginPassword(userData.password);
    cy.url().should('eq', userData.postLoginUrl);
    
  });

  it("WIP: Logs in to the Ironclad demo site via email link", () => {
    loginPage.visit();
    loginPage.enterLoginEmail(userData.username, true);

    loginPage.sendEmailLoginLink();
    cy.url().should('eq', userData.emailLoginLinkSentUrl);
    getToastMessage().should('not.exist');

    loginPage.resendEmailLoginLink();
    getToastMessage().should('not.exist');
  });
});

describe("Login to Ironclad negative test cases", () => {
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

});
  