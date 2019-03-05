describe('My First Test', () => {
  it('visits the kitchen sink', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(5000);
    cy.contains('Login').click();
    cy.wait(5000);
    cy.url().should('include', '/login');
        // cy.get('input:last').should('have.attr', 'placeholder', 'Password').type('hvdgu')
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('something about the error');
      });
    cy.get('input[placeholder=UserName]').type('hetali');
    cy.get('input[placeholder=Password]').type('1234');
        // cy.get('input:second').clear()
        // cy.get('userName').type('test@gmail.com')
    cy.get('button');
    console.log('hloo');
        // cy.wait(5000)
        // cy.click("Increment")
        // cy.get('input:first').clear() // clear out username
        // cy.get('form').submit()
        // cy.get('#errors').should('contain', 'Username is required')
  });
});
