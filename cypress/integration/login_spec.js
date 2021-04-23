/// <reference types="cypress" />
describe('Login Test', function(){
    it('Login', function(){

        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Sign in').click()

        cy.url()
            .should('include', '?controller=authentication&back=my-account')

        cy.get("#email")
            .type('newqa111@gmail.com')
            .should('have.value', 'newqa111@gmail.com')

        cy.get("#passwd")
        .type('qwerty123')
        .should('have.value', 'qwerty123')   
        
        cy.get("#SubmitLogin > span")
        .click()

        cy.url()
        .should('include', 'controller=my-account')

    })
})