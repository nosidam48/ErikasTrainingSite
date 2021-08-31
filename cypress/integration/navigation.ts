import { Paths } from '../../utils/paths';

interface PagesWithPaths {
  text: string;
  path: string;
}

const pages: PagesWithPaths[] = [
  { text: 'About', path: Paths.About },
  { text: 'Home', path: Paths.Home },
  { text: 'Contact', path: Paths.Contact },
  { text: 'Training Services', path: Paths.Services },
];

const buttons: PagesWithPaths[] = [
  { text: 'Learn More', path: Paths.Services },
  { text: "Erika's Story", path: Paths.About },
];

const queries: string[] = ['single', 'training', 'puppy']

describe('Navigation tests', () => {
  beforeEach(() => {
    cy.visit(Paths.Home);
  });
  it('navigates to all pages from the mobile navBar', () => {
    pages.forEach((page) => {
      cy.get('[data-cy=burger_menu]').click();
      cy.contains(page.text).click();
      cy.location('pathname').should('eq', page.path);
    });
    cy.get('[data-cy=mobile_logo]').click();
    cy.location('pathname').should('eq', Paths.Home);
  });

  it('navigates to all pages from the desktop navBar', () => {
    cy.viewport('macbook-15');
    pages.forEach((page) => {
      cy.contains(page.text).click();
      cy.location('pathname').should('eq', page.path);
    });
    cy.get('[data-cy=desktop_logo]').click();
    cy.location('pathname').should('eq', Paths.Home);
  });

  it('navigates using the homepage buttons', () => {
    buttons.forEach((button) => {
      cy.contains(button.text).click();
      cy.location('pathname').should('eq', button.path);
      cy.get('[data-cy=mobile_logo]').click();
      cy.location('pathname').should('eq', Paths.Home);
    });
  });

  it('navigates using the services page buttons', () => {
    cy.visit(Paths.Services);
    for (let i = 0; i < 3; i++) {
      cy.get('button').then((buttons) => {
        const button = buttons[i];
        button.click();
        cy.location().should((loc) => {
          expect(loc.search).to.eq(`?service=${queries[i]}`)
          expect(loc.pathname).to.eq(Paths.Contact)
        })
        if (i < 2) {
          cy.visit(Paths.Services);
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
