describe('Routes', function () {
    it('Increment',function () {
        cy.visit('http://localhost:3000/')
        cy.wait(5000)
        cy.contains("Increment").click()
        cy.get('button').click()
    })
});