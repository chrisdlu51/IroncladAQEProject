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