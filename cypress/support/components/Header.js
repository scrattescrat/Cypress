class Header {

    openLoginPage(){
        cy.contains('Sign in').click()
    }

}

export const header = new Header()