/// <reference types = "cypress" />

import { registrationItem } from "../support/components/RegistrationItem"
import { homePage } from "../support/pages/HomePage"
import { loginPage } from "../support/pages/LoginPage"
import { registrationPage } from "../support/pages/RegistrationPage"

describe('Registration Suite', () => {

    let user = {}

    let email = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6) + '@gmail.com'
    let password = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    let postcode = getRandomInt(10000, 100000);



    before(() => {
        cy.fixture('user').then(localUser => {
            user = localUser;
        });
    });

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    // fill all inputs with user data, click 'Create an account' and check that element with greeting text exists
     it('shoud be registred', () => {
        homePage.getHeader()
            .navigateToLoginPage()
        
        loginPage.getRegistrationItem()
            .registerEmail(email)

        registrationPage.typeFirstname(user.firstname)
        registrationPage.typeLastname(user.lastname)
        registrationPage.typePassword(password)
        registrationPage.typeAddress(user.address)
        registrationPage.typeCity(user.city)
        registrationPage.selectCountry(user.country)
        registrationPage.selectState(user.state)
        registrationPage.typePostcode(postcode)
        registrationPage.typePhoneNumber(user.phoneNumber)
        registrationPage.typeAlias(user.alias)
        registrationPage.clickRegisterButton()

        cy.get('.info-account').should('contain.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')    
      


    })



})













// describe('Registration test', function(){
//     it('Registration', function(){

        // cy.visit('http://automationpractice.com/index.php')
        // cy.contains('Sign in').click()

        // cy.url()
        //     .should('include', '?controller=authentication&back=my-account')

       

        // cy.url()
        //     .should('include', '?controller=authentication&back=my-account#account-creation')

       
        
       
        // cy.url()
        //     .should('include', '?controller=my-account')

        // cy.get('.info-account').should('contain.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')    
           

//     })

// })
