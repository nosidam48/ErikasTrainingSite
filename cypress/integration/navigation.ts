import * as React from 'react';

export interface PagesWithPaths {
  text: string;
  path: string;
}

const pages: PagesWithPaths[] = [
  { text: 'About', path: '/about' },
  { text: 'Home', path: '/' },
  { text: 'Contact', path: '/contact' },
  { text: 'Training Services', path: '/services' },
];

const buttons: PagesWithPaths[] = [
  { text: 'Learn More', path: '/services' },
  { text: "Erika's Story", path: '/about' },
];

const queries: string[] = ['single', 'training', 'puppy']

describe('Navigation tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('navigates to all pages from the mobile navBar', () => {
    pages.forEach((page) => {
      cy.get('[data-cy=burger_menu]').click();
      cy.contains(page.text).click();
      cy.location('pathname').should('eq', page.path);
    });
    cy.get('[data-cy=mobile_logo]').click();
    cy.location('pathname').should('eq', '/');
  });

  it('navigates to all pages from the desktop navBar', () => {
    cy.viewport('macbook-15');
    pages.forEach((page) => {
      cy.contains(page.text).click();
      cy.location('pathname').should('eq', page.path);
    });
    cy.get('[data-cy=desktop_logo]').click();
    cy.location('pathname').should('eq', '/');
  });

  it('navigates using the homepage buttons', () => {
    buttons.forEach((button) => {
      cy.contains(button.text).click();
      cy.location('pathname').should('eq', button.path);
      cy.get('[data-cy=mobile_logo]').click();
      cy.location('pathname').should('eq', '/');
    });
  });

  it('navigates using the services page buttons', () => {
    cy.visit('/services');
    for (let i = 0; i < 3; i++) {
      cy.get('button').then((buttons) => {
        const button = buttons[i];
        button.click();
        cy.location().should((loc) => {
          expect(loc.search).to.eq(`?service=${queries[i]}`)
          expect(loc.pathname).to.eq('/contact')
        })
        if (i < 2) {
          cy.visit('/services');
        }
      });
    }
  });

  it('navigates from the 404 page back home', () => {
    cy.visit('/asdfasdfas', { failOnStatusCode: false });
    cy.contains('Page Not Found');
    cy.contains('Back to Home').click();
    cy.location('pathname').should('eq', '/');
  });
});
