describe('My First Test', () => {
  it('visits the kitchen sink', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(5000);
    cy.contains('SignUp').click();
    cy.wait(5000);
    cy.url().should('include', '/signup');
    cy.get('input[placeholder=FirstName]').type('hetali');
    cy.get('input[placeholder=LastName]').type('shah');
  });
});
