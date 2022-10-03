///<reference types="cypress"/>

it('quering elements', () => {
    cy.visit('http://localhost:8080/commands/actions');

     cy.get('#email1')
         .type('test')
         .should('have.value', 'test');

    cy.get('#email1')
        .clear()
        .type('SETT')

})
