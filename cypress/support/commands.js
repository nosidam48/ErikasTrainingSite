// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('submitForm', () => {
  cy.get('button[type="submit"]').should('be.visible').click();
});

Cypress.Commands.add('containsAndVisible', (string) => {
  cy.contains(string).should('be.visible');
});

Cypress.Commands.add('containsAndNotExist', (string) => {
  cy.contains(string).should('not.exist');
});

Cypress.Commands.add('getVisibleAndType', (string, value) => {
  cy.get(string).should('be.visible').type(value);
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
