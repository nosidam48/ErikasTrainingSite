import { Paths } from '../../utils/paths';

const longMessage =
  '59fullffcGN6NXcy7W3IyBlM0qdNbI5zmrc8pFT7QAZGBvqdM9S1bBH68snBMMbHYNesGnAvfKuKsdrIqYU5D3hNtQ7deTFNQNeErsZthNpvmZiarM5d2gxSmhvv2phwdTO4CuC0M1fOVXhGZlFDWYMzZIzIOnq88wg4XO5lyx3v7mvLT7dydsrgOtgf2kmq7lNf48OAD0NSyaAOgLUHTqBx2dsd5424sDoWzSPFZdMQIQV0hUQhDywwpT9bWOiTk8XGK1AgrO7hHhSSQSPJkI6xQ4w1a87QSMycA8lZpnRMNFHzLqSWziY2RzTy1FdForH5AgdOyNURxzoNBClq9yK0mDrdtRYmnOkpWLptoBt5CZB7NWmHHOfEjHpLMQF2vb0XIRd7qLjbZ52PIPmIkoN5oOSB043U4WozXQuj7wBHMotWw7G1rNUhj1Ss18FUGyLbWCsPmjN0PZPnFtL9g7bMM0XyiX0A0ClpJX7608n6LLDJu7iDeLN6Pu0dHsf5CVekpmGlnZSuqsi6tmPfGDYmD8xHrCCekcYeb3ThBs7VymJgb48mQTWNmXsHM49aFxWkK5lKlTwxeg8lRXglfhPImXQVDqp6WfWs4DTZ605G538bQUtEUdqxMP62eIVFI2oVQoCKl4fSSekhbUFQMgdFH3DNtvVpATdq1UppbTB8B1OKZDbgxNi7rO7TUeltlffOh28PFYp2c1xF6vgEK99vGsM4Gy945S3GhiqsQ6p9AjYmomKFTElMZykczcakiyeOz3I6fk1vATTyrSk3nDpiLJG7IikAqBm6Q8zizfbQZCMX8g4B20i0uvTRZ0N7alfINxuUkk87Tn70KdxhnIj0qvVgMImWM9p5Hx4Rfg74ZkwVSKDyqUIxByMnJlPL6l9J1SMoR1yEwJzV8oMJmoA5qut8XTHwgNPQbl5gcMii7s9eptyMVVHiiYHHMETHWT9XUmZYRdw5kDyusqvsPUxAdVtoEGUOZ1cIHUKlw';

describe('Contact Form Tests', () => {
  beforeEach(() => {
    cy.visit(Paths.Contact);
  });
  it('Fills the form and submits successfully', () => {
    cy.getVisibleAndType('#name', 'John Doe');
    cy.getVisibleAndType('#phoneNumber', '55555555555');
    cy.getVisibleAndType('#email', 'john-doe@example.com');
    cy.get('#services').should('be.visible').select('Single Session');
    cy.getVisibleAndType('#dogName', 'Lassie');
    cy.getVisibleAndType('#dogAge', '4');
    cy.getVisibleAndType('#message', 'Here is your super fun message');
    cy.submitForm();
    cy.contains('Thank you for choosing').should('be.visible');
  });

  it('shows all error messages when the form is empty', () => {
    cy.submitForm();
    cy.containsAndVisible('Please enter your name');
    cy.containsAndVisible('Please enter your phone number');
    cy.containsAndVisible('Please enter your email address');
    cy.containsAndVisible('Select a service');
    cy.containsAndVisible("Please enter your dog's name");
    cy.containsAndVisible("Please enter your dog's age");
    cy.containsAndVisible('Please write a message');
    cy.getVisibleAndType('#name', 'John Doe');
    cy.containsAndNotExist('Please enter your name');
    cy.containsAndNotExist('Please enter your phone number');
    cy.containsAndNotExist('Please enter your email address');
    cy.containsAndNotExist('Select a service');
    cy.containsAndNotExist("Please enter your dog's name");
    cy.containsAndNotExist("Please enter your dog's age");
    cy.containsAndNotExist('Please write a message');
  });

  it('shows other error messages when form is filled wrong', () => {
    cy.getVisibleAndType('#name', 'J');
    cy.submitForm();
    cy.containsAndVisible('Please enter at least 2 characters');
    cy.getVisibleAndType(
      '#name',
      'Johnathan testington the four hundred and thirty seventh president of the confederated planets'
    );
    cy.containsAndNotExist('Please enter at least 2 characters');
    cy.submitForm();
    cy.containsAndVisible('Character limit exceeded!');
    cy.getVisibleAndType('#phoneNumber', '555');
    cy.containsAndNotExist('Character limit exceeded!');
    cy.submitForm();
    cy.containsAndVisible('Please enter a valid phone number');
    cy.getVisibleAndType(
      '#phoneNumber',
      '555-555-5555-55555-555555-555555-5555'
    );
    cy.containsAndNotExist('Please enter a valid phone number');
    cy.submitForm();
    cy.containsAndVisible('Phone number too long');
    cy.getVisibleAndType('#email', 'fakemail@mail');
    cy.containsAndNotExist('Phone number too long');
    cy.submitForm();
    cy.containsAndVisible('Please enter a valid email');
    cy.getVisibleAndType(
      '#dogName',
      'Super crazy long dog name to exceed the character limit of the field and cause an error message but not long enough damnit!'
    );
    cy.containsAndNotExist('Please enter a valid email');
    cy.submitForm();
    cy.containsAndVisible('Name too long');
    cy.getVisibleAndType('#dogAge', '36');
    cy.containsAndNotExist('Name too long');
    cy.submitForm();
    cy.containsAndVisible('Dog too old');
    cy.getVisibleAndType('#message', 'hi');
    cy.containsAndNotExist('Dog too old');
    cy.submitForm();
    cy.containsAndVisible('Please enter a longer message');
    cy.getVisibleAndType('#message', longMessage);
    cy.containsAndNotExist('Please enter a longer message');
    cy.submitForm();
    cy.containsAndVisible('Max characters exceeded');
    cy.get('#services').should('be.visible').select('Single Session');
    cy.containsAndNotExist('Max characters exceeded');
  });
});
