/// <reference types = "cypress" />

describe('Registration test', function(){
    it('Registration', function(){

        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Sign in').click()

        cy.url()
            .should('include', '?controller=authentication&back=my-account')

        let email = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6) + '@gmail.com'

        // let email = "dijidfd@gmail.com"
        cy.get('#email_create')
            .type(email)
            .should('have.value', email)

        cy.get('#SubmitCreate > span')
            .click()

        cy.url()
            .should('include', '?controller=authentication&back=my-account#account-creation')

        cy.get('#customer_firstname')
            .type('Imya')
            .should('have.value', 'Imya')

        cy.get('#customer_lastname')
            .type('Familia')
            .should('have.value', 'Familia')

        let password = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)

        cy.get('#passwd')
            .type(password)
            .should('not.have.length.at.least', 6 )

        cy.get('#address1')
            .type('Minsk')
            .should('have.value', 'Minsk')

        cy.get('#city')
            .type('Minsk')
            .should('have.value', 'Minsk')

        cy.get('#id_country')
          .select('United States')  

        cy.get('#id_state')
            .select('Arizona')

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
              }


        let postcode = getRandomInt(10000, 100000);
        // let postcode = Math.round(Math.random()*1000000)
            cy.get('#postcode')
            .type(postcode)

        let phoneNumber = Math.round(Math.random()*10000000)
        cy.get('#phone_mobile')
            .type(phoneNumber)

        cy.get('#alias')
            .type('address')

        cy.contains('Register').click()

        cy.url()
            .should('include', '?controller=my-account')

        cy.get('.info-account').should('contain.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')    
           

        

            
        
        





    })

})
