// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

// Import commands.js using ES2015 syntax:
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      submitForm(): Chainable<Element>;
      containsAndVisible(string: string): Chainable<Element>;
      containsAndNotExist(string: string): Chainable<Element>;
      getVisibleAndType(string: string, value: string): Chainable<Element>;
    }
  }
}

// Alternatively you can use CommonJS syntax:
// require('./commands')
