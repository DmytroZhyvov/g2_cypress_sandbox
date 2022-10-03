///<reference types="cypress"/>

it('quering elements', () => {
    cy.visit('http://localhost:8080/commands/actions');

     cy.get('#email1')
         .type('test')
         .should('have.value', 'test');

    cy.get('#email1')
        .clear()
        .type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}{rightArrow}T', {delay: 100})

    cy.get('textarea[disabled]')
        .type('bla bla', {force: true});

    cy.get('#password1')
        .focus()
        .prev()
        .should('have.attr', 'style')
        .and('eq', 'color: orange;');

    cy.get('#fullName1')
        .click()
        .blur()
        .prev()
        .should('have.attr', 'style')
        .and('eq', 'color: red;');

    cy.get('.action-form')
        .type('text')
        .submit()

    cy.get('#action-canvas')
        .click(15,15);

    cy.get('.label.label-primary')
        .click({multiple: true});

    cy.get('.btn.btn-lg.btn-primary')
        .click({force: true});

    cy.get('.action-checkboxes [value="checkbox1"]')
        .should('not.be.checked')
        .check()
        .should('be.checked')

    cy.get('.action-checkboxes [value="checkbox2"]')
        .should('not.be.checked')
        .should('be.disabled')
        .check({force: true})
        .should('be.checked')
})
