export const loginPageLocators = {

    // cy.get('[data-test="password"]').type('secret_sauce'),
    // cy.get('[data-test="login-button"]').click(),
    dataInput: '.form-control',
    rememberMeCheckbox: '.form-check-label',
    // passwordInput: '',
    continueBtn: '.btn',
};

export const getTextInputBtn = () => cy.get('.form-control');
export const getRememberMeCheckbox = () => cy.get('.form-check-label');
export const getContinueBtn = () => cy.get('.btn');
export const getOneTimeLinkBtn = () => cy.get('[data-test-selector="SignIn_magicLinkButton"]');
export const getDifferentEmailBtn = () => cy.get('.password-links > :nth-child(4)');
export const getForgotPasswordBtn = () => cy.get('.forgot-password-container > .ic-button > .button-text');
export const getResendEmailLoginLinkBtn = () => cy.get('.button-text');
export const getToastMessage = () => cy.get('.Toast-module_contentContainer_s96GIs', { timeout: 7000 });
