/// <reference types="cypress" />

import { loginItem } from "../support/components/LoginItem"
import { accountPage } from "../support/pages/AccountPage"
import{homePage, HomePage} from "../support/pages/HomePage"
import{loginPage, LoginPage} from "../support/pages/LoginPage"

describe('Login Suite', () => {

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php') 
})

    it('should be authorized', () => {
        homePage.getHeader()
            .navigateToLoginPage()

        loginPage.getLoginItem()
            .login('newqa111@gmail.com', 'qwerty123')

        accountPage.getInfoMessage()
            .should('contain.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    })

    it('shoud not be authorized, message "Invalid email address" appears', () => {
        homePage.getHeader()
            .navigateToLoginPage()

        loginPage.getLoginItem()
            .login('wrongemail', 'qwerty123')

        loginPage.getErrorMessage()
            .should('contain.text', 'Invalid email address.')    


    })
})